import test from 'node:test';
import assert from 'node:assert/strict';
import { canDecodeVin, parseVpicResponse, fetchVpic, lookupVin, compareVehicle, populateVehicleFromVin } from './vpic.mjs';

const vin = '1HGCM82633A004352';
// Selected fields from the public vPIC response for this example VIN.
const row = {
  ErrorCode: '0', ErrorText: '0 - VIN decoded clean. Check Digit (9th position) is correct',
  Make: 'HONDA', Model: 'Accord', ModelYear: '2003', Trim: 'EX-V6',
  BodyClass: 'Coupe', Doors: '2', FuelTypePrimary: 'Gasoline',
};
const payload = (overrides = {}) => ({ Results: [{ ...row, ...overrides }] });
const decoded = parseVpicResponse(vin, payload());
const form = { vin, make: 'Honda', model: 'Accord', year: '2003' };

test('vPIC lookup allows a full VIN with a bad check digit to obtain partial data', () => {
  assert.equal(canDecodeVin('1HGCM82643A004352'), true);
  for (const value of ['', '123', '1HGCM82633A00435I', vin + '0']) assert.equal(canDecodeVin(value), false);
});

test('maps a clean vPIC result into a small vehicle summary', () => {
  assert.equal(decoded.status, 'decoded');
  assert.deepEqual(decoded.vehicle, {
    year: '2003', make: 'HONDA', model: 'Accord', trim: 'EX-V6', bodyClass: 'Coupe', doors: '2', fuel: 'Gasoline',
  });
});

test('partial responses keep details without claiming the VIN decoded cleanly', () => {
  for (const ErrorCode of ['1', '0,14', '7', '']) {
    const result = parseVpicResponse(vin, payload({ ErrorCode }));
    assert.equal(result.status, 'partial');
    assert.equal(result.vehicle.make, 'HONDA');
  }
  assert.equal(parseVpicResponse(vin, payload({ Model: null })).status, 'partial');
  assert.throws(() => parseVpicResponse(vin, { Results: [] }));
  assert.throws(() => parseVpicResponse(vin, { Results: [{}] }));
});

test('comparison ignores case, spaces and punctuation, and preserves actual differences', () => {
  assert(compareVehicle(form, decoded).every(field => field.status === 'match'));
  const truck = { ...decoded, vehicle: { ...decoded.vehicle, make: 'FORD', model: 'F-150' } };
  assert(compareVehicle({ ...form, make: ' ford ', model: 'f 150' }, truck).every(field => field.status === 'match'));
  const differences = compareVehicle({ ...form, make: 'Toyota', model: 'Camry', year: '2004' }, decoded);
  assert(differences.every(field => field.status === 'different'));
});

test('missing information and a different VIN are never reported as matches or differences', () => {
  assert(compareVehicle({ vin }, decoded).every(field => field.status === 'unknown'));
  assert(compareVehicle(form, { ...decoded, vehicle: {} }).every(field => field.status === 'unknown'));
  assert(compareVehicle({ ...form, vin: '1M8GDM9AXKP042788' }, decoded).every(field => field.status === 'unknown'));
});

test('VIN autofill populates available vehicle fields and retains the rest of the quote', () => {
  const quote = { vin, make: '', model: '', year: '', name: 'Customer', part: 'Windshield' };
  const populated = populateVehicleFromVin(quote, decoded);
  assert.deepEqual(populated, { ...quote, make: 'HONDA', model: 'Accord', year: '2003' });
  assert.equal(quote.make, '');
});

test('manual edits survive autofill and remain available for comparison', () => {
  const quote = { vin, make: 'Toyota', model: '', year: '2004' };
  const populated = populateVehicleFromVin(quote, decoded, ['make', 'year']);
  assert.deepEqual(populated, { vin, make: 'Toyota', model: 'Accord', year: '2004' });
  assert.deepEqual(compareVehicle(populated, decoded).filter(field => field.status === 'different').map(field => field.label), ['Make', 'Year']);
  assert.equal(populateVehicleFromVin({ ...quote, model: '' }, decoded, ['model']).model, '');
});

test('autofill ignores stale or unavailable lookups and preserves fields not returned by a partial decode', () => {
  assert.equal(populateVehicleFromVin(form, { ...decoded, vin: 'other' }), form);
  assert.equal(populateVehicleFromVin(form, { vin, status: 'unavailable' }), form);
  const partial = { ...decoded, status: 'partial', vehicle: { make: 'HONDA' } };
  assert.deepEqual(populateVehicleFromVin(form, partial), { ...form, make: 'HONDA' });
});

test('upstream request uses only the normalized VIN so the entered year cannot bias comparison', async () => {
  const result = await fetchVpic(vin.toLowerCase(), async (url, options) => {
    assert.equal(url, `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`);
    assert(options.signal instanceof AbortSignal);
    return { ok: true, json: async () => payload() };
  });
  assert.equal(result.status, 'decoded');
  await assert.rejects(fetchVpic('abc', () => { throw new Error('Should not fetch'); }), /complete VIN/);
  await assert.rejects(fetchVpic(vin, async () => ({ ok: false, status: 429 })), /429/);
});

test('client skips malformed VINs and handles success, timeouts, rate limits and malformed results', async () => {
  const skipped = await lookupVin('abc', () => { throw new Error('Should not fetch'); });
  assert.equal(skipped.status, 'skipped');
  assert.deepEqual(await lookupVin(vin, async () => ({ ok: true, json: async () => decoded })), decoded);
  const failures = [
    async () => { throw new DOMException('Timed out', 'TimeoutError'); },
    async () => ({ ok: false, status: 503 }),
    async () => ({ ok: false, status: 429 }),
    async () => ({ ok: true, json: async () => ({ ...decoded, vin: 'wrong' }) }),
    async () => ({ ok: true, json: async () => ({ vin, status: 'decoded', vehicle: {} }) }),
    async () => ({ ok: true, json: async () => { throw new SyntaxError('Invalid JSON'); } }),
  ];
  for (const fetcher of failures) {
    assert.deepEqual(await lookupVin(vin, fetcher), { vin, status: 'unavailable' });
  }
});

// vPIC decodes manufacturer data; it does not prove vehicle ownership or history.
// https://vpic.nhtsa.dot.gov/api/
export const normalizeVin = (value = '') => value.trim().toUpperCase();
export const canDecodeVin = (value) => /^[A-HJ-NPR-Z0-9]{17}$/.test(normalizeVin(value));

const text = (value) => typeof value === 'string' ? value.trim() : '';
const comparable = (value) => text(value).toUpperCase().replace(/[^A-Z0-9]/g, '');
const fields = [['make', 'Make'], ['model', 'Model'], ['year', 'Year']];
const vehicleFields = [
  ['year', 'Year', 'ModelYear'], ['make', 'Make', 'Make'], ['model', 'Model', 'Model'],
  ['trim', 'Trim', 'Trim'], ['bodyClass', 'Body style', 'BodyClass'],
  ['doors', 'Doors', 'Doors'], ['fuel', 'Fuel', 'FuelTypePrimary'],
];

export function parseVpicResponse(vin, payload) {
  const row = payload?.Results?.[0];
  if (!row || typeof row !== 'object' || typeof row.ErrorCode !== 'string') {
    throw new Error('Invalid vPIC response');
  }
  const vehicle = Object.fromEntries(vehicleFields.map(([key, , source]) => [key, text(row[source])]));
  const errorCodes = row.ErrorCode.split(',').map(code => code.trim()).filter(Boolean);
  const clean = errorCodes.length === 1 && errorCodes[0] === '0';
  return {
    vin: normalizeVin(vin),
    status: clean && vehicle.make && vehicle.model && vehicle.year ? 'decoded' : 'partial',
    vehicle,
    errorCodes,
    errorText: [text(row.ErrorText), text(row.AdditionalErrorText)].filter(Boolean).join(' '),
  };
}

export async function fetchVpic(vin, fetcher = fetch) {
  const normalized = normalizeVin(vin);
  if (!canDecodeVin(normalized)) throw new Error('A complete VIN is required');
  // Do not pass the entered model year: independently decode it for comparison.
  const response = await fetcher(
    `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${normalized}?format=json`,
    { signal: AbortSignal.timeout(6000), next: { revalidate: 86400 } },
  );
  if (!response.ok) throw new Error(`vPIC request failed (${response.status})`);
  return parseVpicResponse(normalized, await response.json());
}

export async function lookupVin(value, fetcher = fetch) {
  const vin = normalizeVin(value);
  if (!canDecodeVin(vin)) return { vin, status: 'skipped' };
  try {
    const response = await fetcher(`/api/vin?vin=${encodeURIComponent(vin)}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error('Vehicle lookup unavailable');
    const result = await response.json();
    if (result.vin !== vin || !['decoded', 'partial'].includes(result.status)
      || !result.vehicle || typeof result.vehicle !== 'object'
      || !Array.isArray(result.errorCodes) || typeof result.errorText !== 'string') {
      throw new Error('Invalid vehicle lookup response');
    }
    return result;
  } catch {
    // An outage must not prevent a quote or be reported as an invalid VIN.
    return { vin, status: 'unavailable' };
  }
}

export function compareVehicle(form, lookup) {
  const vehicle = lookup?.vin === normalizeVin(form.vin) ? lookup.vehicle : null;
  return fields.map(([key, label]) => {
    const entered = text(form[key]);
    const decoded = text(vehicle?.[key]);
    return {
      label, entered, decoded,
      status: !entered || !decoded ? 'unknown' : comparable(entered) === comparable(decoded) ? 'match' : 'different',
    };
  });
}

export function formatVpicForEmail(form, lookup) {
  const vin = normalizeVin(form.vin);
  if (!vin) return 'NHTSA vPIC: Not requested (VIN not provided).';
  if (!canDecodeVin(vin)) return 'NHTSA vPIC: Not requested (VIN must have 17 permitted characters).';
  if (lookup?.vin !== vin || !['decoded', 'partial'].includes(lookup?.status)) {
    return 'NHTSA vPIC: Lookup unavailable. Vehicle details were not verified; please check with the customer.';
  }
  const comparison = compareVehicle(form, lookup);
  return [
    'NHTSA vPIC VEHICLE DETAILS',
    `VIN checked: ${vin}`,
    `Result: ${lookup.status === 'decoded' ? 'Decoded without reported errors' : 'Partial decode / reported issues — please verify with the customer'}`,
    ...vehicleFields.map(([key, label]) => `${label}: ${lookup.vehicle[key] || 'Not returned'}`),
    `vPIC codes: ${lookup.errorCodes.join(', ') || 'Not returned'}`,
    `vPIC notes: ${lookup.errorText || 'None'}`,
    '',
    'ENTERED DETAILS VS VIN',
    ...comparison.map(({ label, entered, decoded, status }) =>
      `${label}: Customer entered "${entered || 'Not provided'}" | vPIC "${decoded || 'Not returned'}" — ${status === 'different' ? 'DIFFERENT — please confirm' : status === 'match' ? 'Matches' : 'Not compared (missing information)'}`),
  ].join('\n');
}

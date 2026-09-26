import test from 'node:test';
import assert from 'node:assert/strict';
import { validateVin, formatVinForEmail } from './vin.mjs';

test('accepts the published 49 CFR example and a VIN with an X check digit', () => {
  for (const vin of ['1G4AH59H45G118341', '1M8GDM9AXKP042788', '1HGCM82633A004352']) {
    assert.equal(validateVin(vin).status, 'valid', vin);
  }
});

test('accepts lowercase and surrounding whitespace without changing meaningful characters', () => {
  const result = validateVin('  1m8gdm9axkp042788  ');
  assert.equal(result.status, 'valid');
  assert.equal(result.vin, '1M8GDM9AXKP042788');
});

test('leaving this optional field empty does not label it invalid', () => {
  for (const value of ['', '   ']) {
    assert.equal(validateVin(value).status, 'empty');
    assert.equal(formatVinForEmail(value), 'Not provided');
  }
});

test('rejects both short and long entries without truncating them', () => {
  for (const vin of ['1HG', '1HGCM82633A0043521']) {
    const result = validateVin(vin);
    assert.equal(result.status, 'invalid');
    assert.match(result.reason, /17 characters/);
    assert.equal(result.vin, vin);
  }
});

test('rejects prohibited letters, internal whitespace, symbols and non-ASCII letters', () => {
  for (const character of ['I', 'O', 'Q', ' ', '-', 'é']) {
    const result = validateVin(`1HGC${character}82633A004352`);
    assert.equal(result.status, 'invalid', character);
    assert.match(result.reason, /letters and numbers/);
  }
});

test('detects a wrong check digit and a transcription error elsewhere in the VIN', () => {
  for (const vin of ['1HGCM82643A004352', '1HGCM82633A004353', '1M8GDM9A0KP042788']) {
    const result = validateVin(vin);
    assert.equal(result.status, 'invalid', vin);
    assert.match(result.reason, /check digit/);
  }
});

test('email includes the invalid VIN and its warning beside the number', () => {
  assert.match(formatVinForEmail('abc'), /^ABC \(VIN not correct: .*17 characters/);
  assert.match(formatVinForEmail('1HGCM82643A004352'), /^1HGCM82643A004352 \(VIN not correct: .*check digit/);
  assert.equal(formatVinForEmail('1G4AH59H45G118341'), '1G4AH59H45G118341 (Valid VIN — format and check digit passed)');
});

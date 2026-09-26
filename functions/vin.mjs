// Standard 17-character VIN transcription check (49 CFR 565.15(c)).
// This does not verify that a VIN was issued or identify a vehicle.
// https://www.govinfo.gov/content/pkg/CFR-2023-title49-vol6/pdf/CFR-2023-title49-vol6-part565-subpartB.pdf
const LETTER_VALUES = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
  J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9,
  S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
};
const WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

export function validateVin(value = '') {
  const vin = value.trim().toUpperCase();

  if (!vin) return { vin, status: 'empty', reason: '' };

  if (vin.length !== 17) {
    return { vin, status: 'invalid', reason: 'A standard VIN must have exactly 17 characters.' };
  }

  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
    return {
      vin,
      status: 'invalid',
      reason: 'Use letters and numbers only, without I, O, Q, spaces or symbols.',
    };
  }

  const total = [...vin].reduce((sum, character, index) => {
    const value = LETTER_VALUES[character] ?? Number(character);
    return sum + value * WEIGHTS[index];
  }, 0);
  const remainder = total % 11;
  const checkDigit = remainder === 10 ? 'X' : String(remainder);

  if (vin[8] !== checkDigit) {
    return {
      vin,
      status: 'invalid',
      reason: 'The check digit does not match. Please double-check the VIN on your vehicle.',
    };
  }

  return { vin, status: 'valid', reason: '' };
}

export function formatVinForEmail(value) {
  const result = validateVin(value);
  if (result.status === 'empty') return 'Not provided';
  if (result.status === 'invalid') {
    return `${result.vin} (VIN not correct: ${result.reason})`;
  }
  return `${result.vin} (Valid VIN — format and check digit passed)`;
}

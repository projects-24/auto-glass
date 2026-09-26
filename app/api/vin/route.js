import { NextResponse } from 'next/server';
import { canDecodeVin, fetchVpic, normalizeVin } from '@/functions/vpic.mjs';

export async function GET(request) {
  const vin = normalizeVin(new URL(request.url).searchParams.get('vin') || '');
  if (!canDecodeVin(vin)) {
    return NextResponse.json({ error: 'Enter a complete 17-character VIN.' }, { status: 400 });
  }
  try {
    return NextResponse.json(await fetchVpic(vin));
  } catch {
    return NextResponse.json({ vin, status: 'unavailable' }, { status: 503 });
  }
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react';
import { canDecodeVin, lookupVin, normalizeVin } from './vpic.mjs';

export default function useVinLookup(value) {
  const vin = normalizeVin(value);
  const latestVin = useRef(vin);
  latestVin.current = vin;
  const mounted = useRef(false);
  const requests = useRef(new Map());
  const [lookup, setLookup] = useState({ vin: '', status: 'idle' });

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  // Share in-flight lookups with submission so even a quick submit includes the result.
  const getLookup = useCallback(async (value) => {
    const requestedVin = normalizeVin(value);
    if (!canDecodeVin(requestedVin)) return { vin: requestedVin, status: 'skipped' };
    let request = requests.current.get(requestedVin);
    if (!request) {
      if (mounted.current && latestVin.current === requestedVin) {
        setLookup({ vin: requestedVin, status: 'loading' });
      }
      request = lookupVin(requestedVin);
      requests.current.set(requestedVin, request);
    }
    const result = await request;
    if (result.status === 'unavailable') requests.current.delete(requestedVin);
    // A response for an older VIN must never replace the current vehicle.
    if (mounted.current && latestVin.current === requestedVin) setLookup(result);
    return result;
  }, []);

  useEffect(() => {
    if (!canDecodeVin(vin)) return;
    const timer = setTimeout(() => { getLookup(vin); }, 500);
    return () => clearTimeout(timer);
  }, [vin, getLookup]);

  return {
    lookup: lookup.vin === vin ? lookup : { vin, status: 'idle' },
    getLookup,
  };
}

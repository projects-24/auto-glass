import { canDecodeVin, compareVehicle } from '@/functions/vpic.mjs';

export default function VinFeedback({ validation, lookup, form }) {
  const hasVin = validation.status !== 'empty';
  const vehicle = lookup.vehicle;
  const summary = vehicle && [vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ');
  const details = vehicle && [vehicle.trim, vehicle.bodyClass, vehicle.doors && `${vehicle.doors} doors`].filter(Boolean).join(' · ');
  const differs = compareVehicle(form, lookup).some(field => field.status === 'different');

  return (
    <div id="vin-validation" role="status" aria-live="polite" aria-atomic="true">
      {hasVin && (
        <div style={{ marginTop: '8px', padding: '10px 12px', borderRadius: '6px', fontSize: '14px', color: '#475569', backgroundColor: '#f8fafc' }}>
          {validation.status === 'invalid' && (
            <p style={{ margin: 0, color: '#9a3412' }}>
              VIN appears incorrect. {validation.reason} You can still submit your request.
            </p>
          )}
          {canDecodeVin(validation.vin) && (
            <>
              {['idle', 'loading'].includes(lookup.status) && <p style={{ margin: 0 }}>Checking vehicle details with NHTSA vPIC…</p>}
              {lookup.status === 'decoded' && <p style={{ margin: 0, color: '#166534' }}>✓ VIN decoded by NHTSA vPIC.</p>}
              {lookup.status === 'partial' && <p style={{ margin: 0 }}>vPIC returned limited information or reported a VIN issue. You can still submit.</p>}
              {lookup.status === 'unavailable' && <p style={{ margin: 0 }}>Vehicle lookup is temporarily unavailable. You can still submit your request.</p>}
              {summary && <p style={{ margin: '4px 0 0' }}><strong>{summary}</strong></p>}
              {details && <p style={{ margin: '2px 0 0', fontSize: '13px' }}>{details}</p>}
              {differs && <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#92400e' }}>Some details differ from what you entered. Our team will confirm them; you can still submit.</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}

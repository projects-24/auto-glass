'use client'
import { useState } from 'react';
import styles from './CarDiagram.module.css';

// Top-down car, front at the top, drawn in a 200 × 400 box.
// Canada is left-hand drive, so the driver side is on the left.
const REGIONS = [
  { key: 'windshield', part: 'Windshield', d: 'M48 112 Q100 94 152 112 L140 152 Q100 143 60 152 Z' },
  { key: 'rear', part: 'Rear/Back Glass', d: 'M60 290 Q100 298 140 290 L148 326 Q100 338 52 326 Z' },
  { key: 'frontQL', part: 'Front Quarter Glass', d: 'M44 142 L56 152 L56 164 L40 164 Z' },
  { key: 'frontQR', part: 'Front Quarter Glass', d: 'M156 142 L144 152 L144 164 L160 164 Z' },
  { key: 'frontDoorL', part: 'Front Door Glass', d: 'M40 168 H56 V222 H40 Z' },
  { key: 'frontDoorR', part: 'Front Door Glass', d: 'M144 168 H160 V222 H144 Z' },
  { key: 'rearDoorL', part: 'Driver Rear Door Glass', d: 'M40 226 H56 V276 H40 Z' },
  { key: 'rearDoorR', part: 'Passenger Rear Door Glass', d: 'M144 226 H160 V276 H144 Z' },
  { key: 'rearQL', part: 'Driver Rear Quarter Glass', d: 'M40 280 H56 V300 L44 312 Z' },
  { key: 'rearQR', part: 'Passenger Rear Quarter Glass', d: 'M160 280 H144 V300 L156 312 Z' },
];

// Which windows light up for each option in the quote form's part list.
const PART_REGIONS = {
  'Windshield': ['windshield'],
  'Chip Repair': ['windshield'],
  'Rear/Back Glass': ['rear'],
  'Front Door Glass': ['frontDoorL', 'frontDoorR'],
  'Driver Rear Door Glass': ['rearDoorL'],
  'Passenger Rear Door Glass': ['rearDoorR'],
  'Front Quarter Glass': ['frontQL', 'frontQR'],
  'Driver Rear Quarter Glass': ['rearQL'],
  'Passenger Rear Quarter Glass': ['rearQR'],
  'Rear Quarter Glass': ['rearQL', 'rearQR'],
};

export default function CarDiagram({ value, onSelect, horizontal = false, className = '' }) {
  const [hovered, setHovered] = useState('');
  const selected = PART_REGIONS[value] || [];
  const caption = hovered || (value && value !== 'Other' ? value : '');

  const select = (part) => (event) => {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    onSelect(part);
  };

  return (
    <figure className={`${styles.diagram} ${horizontal ? styles.horizontal : ''} ${className}`}>
      <div className={styles.frame}>
        <span className={`${styles.side} ${styles.front}`}>Front</span>
        <span className={`${styles.side} ${styles.driver}`}>Driver side</span>
        <span className={`${styles.side} ${styles.passenger}`}>Passenger side</span>
        <svg
          viewBox={horizontal ? '0 0 400 200' : '0 0 200 400'}
          className={styles.svg}
          role="group"
          aria-label="Car diagram. Choose the damaged window."
        >
          <g transform={horizontal ? 'translate(0 200) rotate(-90)' : undefined}>
            {/* Wheels */}
            <rect x="20" y="78" width="14" height="44" rx="6" className={styles.wheel} />
            <rect x="166" y="78" width="14" height="44" rx="6" className={styles.wheel} />
            <rect x="20" y="282" width="14" height="44" rx="6" className={styles.wheel} />
            <rect x="166" y="282" width="14" height="44" rx="6" className={styles.wheel} />
            {/* Mirrors */}
            <ellipse cx="24" cy="150" rx="8" ry="5" className={styles.body} />
            <ellipse cx="176" cy="150" rx="8" ry="5" className={styles.body} />
            {/* Body, roof and hood line */}
            <path
              className={styles.body}
              d="M100 18 C140 18 165 30 168 70 L172 150 L172 300 C172 350 160 378 100 382 C40 378 28 350 28 300 L28 150 L32 70 C35 30 60 18 100 18 Z"
            />
            <rect x="60" y="152" width="80" height="138" rx="10" className={styles.roof} />
            <path d="M58 60 Q100 48 142 60" className={styles.line} />
            <path d="M58 352 Q100 362 142 352" className={styles.line} />
            {/* Glass */}
            {REGIONS.map(region => {
              const isSelected = selected.includes(region.key);
              return (
                <path
                  key={region.key}
                  d={region.d}
                  role="button"
                  tabIndex={0}
                  aria-label={region.part}
                  aria-pressed={isSelected}
                  className={`${styles.glass} ${isSelected ? styles.selected : ''}`}
                  onClick={select(region.part)}
                  onKeyDown={select(region.part)}
                  onMouseEnter={() => setHovered(region.part)}
                  onMouseLeave={() => setHovered('')}
                  onFocus={() => setHovered(region.part)}
                  onBlur={() => setHovered('')}
                >
                  <title>{region.part}</title>
                </path>
              );
            })}
          </g>
        </svg>
      </div>
      <figcaption className={styles.caption} aria-live="polite">
        {caption
          ? <><span className={styles.dot} aria-hidden="true" />{caption}</>
          : 'Tap a window to select the damaged glass'}
      </figcaption>
    </figure>
  );
}

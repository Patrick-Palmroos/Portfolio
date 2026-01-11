import Colors from '../../colors';
import useId from '@mui/material/utils/useId';

export function DotPatternSVG({ color = 'white' }: { color?: string }) {
  const id = useId();

  return (
    <svg width='100%' height='100%'>
      <defs>
        <pattern
          id={id}
          x='0'
          y='0'
          width='clamp(0.8rem, 2vw, 1.2rem)'
          height='clamp(0.8rem, 2vw, 1.2rem)'
          patternUnits='userSpaceOnUse'
        >
          <circle
            cx='clamp(0.1rem, 0.3vw, 0.2rem)'
            cy='clamp(0.1rem, 0.3vw, 0.2rem)'
            r='clamp(0.08rem, 0.2vw, 0.1rem)'
            fill={color}
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  );
}

export function Pointer({
  mainColor = Colors.cyan,
  offColor = '#2D82D7'
}: {
  mainColor?: string;
  offColor?: string;
}) {
  const clipId = useId();
  return (
    <svg width='100%' height='100%' viewBox='0 0 110 110'>
      <defs>
        <linearGradient id={clipId}>
          <stop offset='0%' stopColor={mainColor} />
          <stop offset='100%' stopColor={offColor} />
        </linearGradient>
      </defs>

      <path
        d='M 35 35 L 100 35 L 70 60 L 100 90 L 90 100 L 60 70 L 35 100 Z'
        fill='none'
        stroke={`url(#${clipId})`}
        strokeWidth='7'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      {/* Line 1 */}
      <line
        x1='50'
        y1='25'
        x2='70'
        y2='5'
        stroke={mainColor}
        strokeWidth='6'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      {/* Line 2 */}
      <line
        x1='38'
        y1='25'
        x2='38'
        y2='5'
        stroke={mainColor}
        strokeWidth='6'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      {/* Line 3 */}
      <line
        x1='28'
        y1='28'
        x2='7'
        y2='7'
        stroke={mainColor}
        strokeWidth='6'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      {/* Line 4 */}
      <line
        x1='25'
        y1='38'
        x2='5'
        y2='38'
        stroke={mainColor}
        strokeWidth='6'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      {/* Line 5 */}
      <line
        x1='25'
        y1='50'
        x2='5'
        y2='70'
        stroke={mainColor}
        strokeWidth='6'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  );
}

export function Arrow() {
  const dots = [
    [3, 1],
    [6, 1],
    [9, 1],
    [12, 1],
    [6, 4],
    [9, 4],
    [12, 4],
    [15, 4],
    [9, 7],
    [12, 7],
    [15, 7],
    [18, 7],
    [12, 10],
    [15, 10],
    [18, 10],
    [21, 10],
    [9, 13],
    [12, 13],
    [15, 13],
    [18, 13],
    [6, 16],
    [9, 16],
    [12, 16],
    [15, 16],
    [3, 19],
    [6, 19],
    [9, 19],
    [12, 19]
  ];

  return (
    <svg viewBox='0 0 24 20' width='100%' height='100%'>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={0.8} fill='white' />
      ))}
    </svg>
  );
}

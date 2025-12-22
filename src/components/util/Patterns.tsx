import Colors from '../../colors';

export function DotPatternSVG() {
  return (
    <svg width='100%' height='100%'>
      <defs>
        <pattern
          id='dots'
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
            fill='#ffffffff'
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#dots)' />
    </svg>
  );
}

export function Pointer() {
  return (
    <svg width='100%' height='100%' viewBox='0 0 110 110'>
      <defs>
        <linearGradient id='pointerGradient'>
          <stop offset='0%' stopColor={Colors.cyan} />
          <stop offset='100%' stopColor={'#2D82D7'} />
        </linearGradient>
      </defs>

      <path
        d='M 35 35 L 100 35 L 70 60 L 100 90 L 90 100 L 60 70 L 35 100 Z'
        fill='none'
        stroke='url(#pointerGradient)'
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
        stroke={Colors.cyan}
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
        stroke={Colors.cyan}
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
        stroke={Colors.cyan}
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
        stroke={Colors.cyan}
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
        stroke={Colors.cyan}
        strokeWidth='6'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  );
}

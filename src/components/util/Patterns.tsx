export function DotPatternSVG() {
  return (
    <svg width='100%' height='100%'>
      <defs>
        <pattern
          id='dots'
          x='0'
          y='0'
          width='clamp(0.5rem, 1vw, 1.5rem)'
          height='clamp(0.5rem, 1vw, 1.5rem)'
          patternUnits='userSpaceOnUse'
        >
          <circle
            cx='clamp(0.1rem, 0.2vw, 0.2rem)'
            cy='clamp(0.1rem, 0.2vw, 0.2rem)'
            r='clamp(0.1rem, 0.2vw, 0.2rem)'
            fill='#ffffffff'
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#dots)' />
    </svg>
  );
}

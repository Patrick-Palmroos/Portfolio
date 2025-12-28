import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useLayoutEffect, useEffect, useRef } from 'react';
import Colors from '../../colors';

gsap.registerPlugin(DrawSVGPlugin);

export default function Checkbox({
  checked,
  onClick,
  size = '2rem'
}: {
  checked: boolean;
  onClick: () => void;
  size?: string;
}) {
  const checkmarkRef = useRef<SVGPathElement | null>(null);
  const checkAnimRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const checkPath = checkmarkRef.current;
    if (!checkPath) return;

    checkAnimRef.current = gsap.fromTo(
      checkPath,
      { drawSVG: '0%' },
      { drawSVG: '100%', duration: 0.3, ease: 'ease.inOut', paused: true }
    );

    // start animation if checked initially
    if (checked) checkAnimRef.current.play();
  }, []);

  // Control playback on checked
  useEffect(() => {
    if (!checkAnimRef.current) return;

    if (checked) checkAnimRef.current.play();
    else checkAnimRef.current.reverse();
  }, [checked]);

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        cursor: 'pointer',
        width: `${size}`,
        height: `${size}`,
        border: `0.3rem ${Colors.blue} solid`,
        backgroundColor: Colors.background,
        borderRadius: '0.5rem',
        margin: '1rem',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.blue,
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) ${
            checked ? 'scale(1.5)' : 'scale(0)'
          }`,
          transition: `transform ${checked ? '0.2s' : '0.15s'} ease`
        }}
      />
      <svg
        style={{ position: 'relative' }}
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
      >
        <path
          ref={checkmarkRef}
          d='M4 12 L9 17 L20 6'
          fill='none'
          stroke={Colors.light}
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

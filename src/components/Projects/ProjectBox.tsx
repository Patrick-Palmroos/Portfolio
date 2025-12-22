import { useRef, useEffect, useState, useId } from 'react';
import Colors from '../../colors';
import { Pointer } from '../util/Patterns';
import gsap from 'gsap';

export default function ProjectBox({
  disabled = true
}: {
  disabled?: boolean;
}) {
  const [enabled, setDisabled] = useState<boolean>(!false);
  const pathRef = useRef<SVGPathElement>(null);
  const clipId = useId();

  const disabledPath = //----------------v new topR ------------------------v flatten---------------------------------------------v flatten
    'M 0 0.05 A 0.05 0.05 0 0 1 0.05 0 L 0.15 0 A 0.05 0.05 0 0 1 0.2 0.05 L 0.2 0.1 A 1 1 0 0 1 0.2 0.15 L 0.2 0.15 A 1 1 0 0 0 0.2 0.2 L 0.2 0.95 A 0.05 0.05 0 0 1 0.15 1 L 0.05 1 A 0.05 0.05 0 0 1 0 0.95 Z';
  const enabledPath =
    'M 0 0.05 A 0.05 0.05 0 0 1 0.05 0 L 0.95 0 A 0.05 0.05 0 0 1 1 0.05 L 1 0.1 A 0.05 0.05 0 0 1 0.95 0.15 L 0.25 0.15 A 0.05 0.05 0 0 0 0.2 0.2 L 0.2 0.95 A 0.05 0.05 0 0 1 0.15 1 L 0.05 1 A 0.05 0.05 0 0 1 0 0.95 Z';

  useEffect(() => {
    if (pathRef.current) {
      pathRef.current.setAttribute('d', disabled ? disabledPath : enabledPath);
    }
  }, []);

  useEffect(() => {
    gsap.killTweensOf(pathRef.current);

    gsap.to(pathRef.current, {
      attr: {
        d: disabled ? disabledPath : enabledPath
      },
      duration: 0.3,
      delay: disabled ? 0 : 0.2,
      ease: 'power2.inOut'
    });
  }, [disabled]);

  return (
    <div
      style={{
        width: disabled ? '3rem' : '25rem', //3rem,
        height: '25rem',
        transition: 'width 0.2s ease',
        transitionDelay: '200ms',
        aspectRatio: '17 / 18',
        backgroundColor: '',
        marginLeft: '1rem',
        position: 'relative'
      }}
    >
      <svg
        style={{
          position: 'absolute',
          width: '25rem',
          height: '25rem',
          pointerEvents: 'none'
        }}
      >
        <defs>
          {/* L clip path */}
          <clipPath id={clipId} clipPathUnits='objectBoundingBox'>
            <path ref={pathRef} />
          </clipPath>
        </defs>
      </svg>

      {/* L clipped div */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: !disabled ? '25rem' : '25rem',
          height: '100%',
          //backgroundColor: Colors.light,
          backgroundImage: "url('/lights.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          clipPath: `url(#${clipId})`
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            clipPath: `url(#${clipId})`,
            pointerEvents: 'none'
          }}
        />
        <h2
          style={{
            color: 'white',
            position: 'absolute',
            transform: disabled ? `translateX(-300px)` : `translateX(10px)`,
            transition: 'transform 0.5s ease-in-out',
            top: -10,
            fontSize: '2rem',
            fontWeight: 600
          }}
        >
          Project name
        </h2>
      </div>

      {/* Inner box container with linear gradient bg */}

      <div
        style={{
          opacity: disabled ? 0 : 1,
          transition: 'opacity 0.2s ease, width 0.2s ease',
          transitionDelay: disabled ? '0ms' : '300ms',
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: disabled ? '30%' : '73%',
          height: '78%',
          borderRadius: '5%',
          padding: '3px', // Border width
          background: 'linear-gradient(135deg, #7f5cff, #00e0ff)'
        }}
      >
        {/* Slightly smaller image with grayscale and blur */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '4%', // Slightly smaller than parent
            backgroundImage: "url('/lights.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) blur(1px)'
          }}
        >
          {/* Dark overlay for image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '4%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              filter: 'blur(1px)'
            }}
          />
        </div>
        {/* Pointer container */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            padding: '1rem',
            backgroundColor: '',
            width: '20%',
            height: '20%'
          }}
        >
          <Pointer />
        </div>
      </div>
    </div>
  );
}

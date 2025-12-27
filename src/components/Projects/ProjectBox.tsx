import { useRef, useEffect, useState, useId } from 'react';
import Colors from '../../colors';
import { Pointer } from '../util/Patterns';
import './styles.css';
import gsap from 'gsap';

// TODO: Move styling into the css file.
export default function ProjectBox({
  disabled = true,
  onClick = () => null
}: {
  disabled?: boolean;
  onClick?: () => void;
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
      onClick={onClick}
      className='L-container'
      style={{
        cursor: 'pointer',
        width: disabled ? '3rem' : 'clamp(18rem, 30vw, 32rem)',
        height: 'clamp(18rem, 30vw, 32rem)',
        transition: 'width 0.2s ease',
        transitionDelay: '200ms',
        aspectRatio: '17 / 18',
        backgroundColor: '',
        position: 'relative'
      }}
    >
      <svg
        style={{
          position: 'absolute',
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
          width: 'clamp(18rem, 30vw, 32rem)',
          height: '100%',
          //backgroundColor: Colors.light,
          clipPath: `url(#${clipId})`
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundImage: "url('/lights.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)'
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            //opacity: disabled ? 0.6 : 0.4,
            clipPath: `url(#${clipId})`,
            pointerEvents: 'none',
            display: 'flex'
          }}
          className='dark-overlay'
        />
        {/* Enabled project name */}
        <div
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            transform: disabled ? `translateX(-400px)` : `translateX(10px)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            transitionDelay: disabled ? '0ms' : '100ms',
            gap: '0.5rem',
            top: -12
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.4vw, 2.5rem)',
              color: 'white',
              fontWeight: 600
            }}
          >
            Language App
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.9vw, 2.1rem)',
              color: 'white',
              fontWeight: 600
            }}
          >
            - Aikido Unl.
          </p>
        </div>
        {/* Disabled project name */}
        <div
          style={{
            pointerEvents: 'none',
            transform: disabled ? `translateX(95px)` : `translateX(-550px)`,
            transition: 'transform 0.5s ease-in-out'
          }}
          className='disabled-text'
        >
          <h2
            style={{
              fontSize: 'clamp(1.2rem, 2.4vw, 2.3rem)',
              color: 'white',
              fontWeight: 600
            }}
          >
            Language App
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.8rem, 2vw, 2.1rem)',
              color: 'white',
              fontWeight: 600,
              top: '3rem'
            }}
          >
            - Aikido Unl.
          </p>
        </div>

        {/* Tools used */}
        <div
          className='project-tool'
          style={{
            position: 'absolute',
            height: '100%',
            backgroundColor: '',
            display: 'flex',
            flexDirection: 'column',
            transform: disabled ? `translateY(500px)` : `translateY(50px)`,
            transition: 'transform 0.5s ease-in-out',
            gap: '4px'
          }}
        >
          <img
            src='/images/Logos/linkedin.png'
            alt='LinkedIn logo'
            style={{ width: 'clamp(2.6rem, 4.5vw, 5rem)', height: 'auto' }}
          />
          <img
            src='/images/Logos/linkedin.png'
            alt='LinkedIn logo'
            style={{ width: 'clamp(2.6rem, 4.5vw, 5rem)', height: 'auto' }}
          />
          <img
            src='/images/Logos/linkedin.png'
            alt='LinkedIn logo'
            style={{ width: 'clamp(2.6rem, 4.5vw, 5rem)', height: 'auto' }}
          />
          <img
            src='/images/Logos/linkedin.png'
            alt='LinkedIn logo'
            style={{ width: 'clamp(2.6rem, 4.5vw, 5rem)', height: 'auto' }}
          />
          <img
            src='/images/Logos/linkedin.png'
            alt='LinkedIn logo'
            style={{ width: 'clamp(2.6rem, 4.5vw, 5rem)', height: 'auto' }}
          />
        </div>
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
            filter: 'grayscale(100%)'
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
        {/* Content */}
        {/* Project desc */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            maxWidth: '100%',
            height: '100%',
            backgroundColor: '',
            overflow: 'hidden',
            margin: '0rem 1rem 0rem 1rem'
          }}
        >
          <p
            style={{
              color: 'white',
              opacity: disabled ? 0 : 1,
              fontSize: 'clamp(1rem, 1.6vw, 1.7rem)',
              transition: 'opacity 0.2s ease',
              transitionDelay: disabled ? '0ms' : '400ms'
            }}
          >
            Project A is project about projects. Developed as project to be a
            project that functions as a project. I like to think of this project
            in the perspective of a project.
          </p>
        </div>
        {/* Dates */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: '0%',
            maxWidth: '100%',
            backgroundColor: '',
            overflow: 'hidden',
            margin: '0rem 1rem 0rem 1rem'
          }}
        >
          <p
            style={{
              color: 'white',
              opacity: disabled ? 0 : 1,
              fontSize: 'clamp(1rem, 1.6vw, 1.7rem)',
              transition: 'opacity 0.1s ease',
              transitionDelay: disabled ? '0ms' : '400ms'
            }}
          >
            11.2023 - 11.2024
          </p>
        </div>
        {/* Pointer container */}
        <div
          className='pointer-container'
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: '1rem'
          }}
        >
          <Pointer />
        </div>
      </div>
    </div>
  );
}

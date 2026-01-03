import { useMediaQuery } from 'react-responsive';
import Colors from '../../colors';
import './styles.css';

export default function Modal({
  open = false,
  content,
  title,
  onClose
}: {
  open?: boolean;
  content: React.ReactNode;
  title: React.ReactNode;
  onClose: () => void;
}) {
  const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)'
        }}
      />
      <svg width='0' height='0' aria-hidden>
        <defs>
          {/* Box svgs */}
          <clipPath id={'modalBox'} clipPathUnits='objectBoundingBox'>
            <path
              d='M 0 0.2
               A 0.05 0.05 0 0 1 0.05 0.15
               L 0.8 0.15
               A 0.05 0.05 0 0 0 0.85 0.1
               L 0.85 0.05
               A 0.05 0.05 0 0 1 0.9 0
               L 0.95 0
               A 0.05 0.05 0 0 1 1 0.05
               L 1 0.95
               A 0.05 0.05 0 0 1 0.95 1
               L 0.05 1
               A 0.05 0.05 0 0 1 0 0.95 Z'
            />
          </clipPath>
          <clipPath id={'smallerModalBox'} clipPathUnits='objectBoundingBox'>
            <path
              d='M 0.01 0.21
               A 0.05 0.05 0 0 1 0.06 0.16
               L 0.81 0.16
               A 0.05 0.05 0 0 0 0.86 0.11
               L 0.86 0.06
               A 0.05 0.05 0 0 1 0.91 0.01
               L 0.94 0.01
               A 0.05 0.05 0 0 1 0.99 0.06
               L 0.99 0.94
               A 0.05 0.05 0 0 1 0.94 0.99
               L 0.06 0.99
               A 0.05 0.05 0 0 1 0.01 0.94 Z'
            />
          </clipPath>

          <clipPath id={'titleBox'} clipPathUnits='objectBoundingBox'>
            <path d='M 0 0.05 A 0.05 0.05 0 0 1 0.05 0 L 0.78 0 A 0.05 0.05 0 0 1 0.83 0.05 L 0.83 0.08 A 0.05 0.05 0 0 1 0.78 0.13 L 0.05 0.13 A 0.05 0.05 0 0 1 0 0.08 Z' />
          </clipPath>
        </defs>
      </svg>

      {isDesktop ? (
        <div
          style={{
            position: 'relative',
            width: 'clamp(20rem, 90vw, 50rem)',
            height: '45rem',
            zIndex: 60
          }}
        >
          {/* Box border */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: Colors.blue,
              clipPath: 'url(#modalBox)'
            }}
          ></div>
          {/* Box itself */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: Colors.background,
              clipPath: 'url(#smallerModalBox)'
            }}
          >
            {/* Close button */}
            <div className='x-button' onClick={onClose} />
            {/* Content */}
            <div
              style={{
                width: '98%',
                paddingLeft: '1%',
                height: '83%',
                overflowY: 'scroll',
                backgroundColor: '',
                position: 'absolute',
                left: 0,
                bottom: 8
              }}
            >
              {content}
            </div>
          </div>
          {/* Title */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#3B2DD7',
              clipPath: `url(#titleBox)`
            }}
          >
            {title}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            width: 'clamp(20rem, 90vw, 50rem)',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            height: '45rem',
            zIndex: 60
          }}
        >
          {/* Title */}
          <div
            style={{
              width: '100%',
              height: '6rem',
              border: `solid 0.3rem ${Colors.blue}`,
              backgroundColor: Colors.blue,
              borderRadius: '2rem',
              display: 'flex'
            }}
          >
            {title}

            {/* Close button */}
            <div className='x-button' onClick={onClose} />
          </div>

          {/* Content */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: Colors.background,
              border: `solid 0.3rem ${Colors.blue}`,
              overflow: 'hidden',
              borderRadius: '2rem'
            }}
          >
            <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

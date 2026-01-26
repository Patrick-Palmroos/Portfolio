import Colors from '../../colors';
import DotGrid from '../util/DotGrid';
import { DotPatternSVG } from '../util/Patterns';
import './styles.css';

export default function Header() {
  return (
    <div
      style={{
        width: '100%',
        height: 'clamp(18rem, 55vw, 55rem)',
        backgroundColor: '',
        overflow: 'hidden'
      }}
    >
      <div
        className='grid-container'
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          //overflow: 'hidden',
          width: '100%'
        }}
      >
        <DotGrid />
      </div>
      {/* Profile pic etc */}
      <div
        style={{
          width: '100%',
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '50rem'
        }}
      >
        {/* Name styling */}
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 6rem)',
            lineHeight: 1,
            color: Colors.white,
            marginRight: '1rem',
            marginTop: 'clamp(2rem, 1vw, 6rem)',
            backgroundColor: '',
            width: 'clamp(13rem, 38vw, 45rem)'
          }}
        >
          Patrick Palmroos
        </h1>
        {/* Pfp and dots */}
        <ProfilePicture />
      </div>
    </div>
  );
}

// Profile picture
const ProfilePicture = () => {
  return (
    <div>
      {/* Container for profile pic */}
      <div
        style={{
          backgroundColor: '',
          position: 'relative',
          marginTop: '2rem',
          //marginRight: 'clamp(1rem, 3vw, 3rem)',
          width: 'clamp(12rem, 35vw, 40rem)',
          aspectRatio: '17 / 18'
        }}
      >
        {/* Clip path for profile pic bg */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <clipPath id='photo-bg' clipPathUnits={'objectBoundingBox'}>
              <path d='M 0 0.2 A 0.05 0.05 0 0 1 0.05 0.15 L 0.15 0.15 A 0.05 0.05 0 0 0 0.2 0.1 L 0.2 0.05 A 0.05 0.05 0 0 1 0.25 0 L 0.95 0 A 0.05 0.05 0 0 1 1 0.05 L 1 0.8 A 0.05 0.05 0 0 1 0.95 0.85 L 0.85 0.85 A 0.05 0.05 0 0 0 0.8 0.9 L 0.8 0.95 A 0.05 0.05 0 0 1 0.75 1 L 0.05 1 A 0.05 0.05 0 0 1 0 0.95 Z' />
            </clipPath>
          </defs>
        </svg>
        {/* Clip path style */}
        <div
          className='pfp'
          style={{
            width: '100%',
            height: '100%',
            //backgroundColor: Colors.light,
            backgroundImage: "url('/me.png')",
            backgroundSize: '130%',
            backgroundPosition: '10% -0%',
            backgroundRepeat: 'no-repeat',
            clipPath: 'url(#photo-bg)'
          }}
        />
        {/* Dots bottom right */}
        <div
          style={{
            width: '24%',
            height: '24%',
            overflow: 'hidden',
            position: 'absolute',
            bottom: '-12%',
            right: '-7%'
          }}
        >
          <DotPatternSVG />
        </div>
        {/* Dots top left */}
        <div
          style={{
            width: '50%',
            height: '10%',
            position: 'absolute',
            top: '2%',
            left: '-35%'
          }}
        >
          <DotPatternSVG />
        </div>
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '30%',
            transform: 'translateX(-95%)'
          }}
        >
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

// Contact me
const ContactMe = () => {
  return (
    <div>
      {/* Contact me container */}
      <div
        style={{
          zIndex: 20,
          width: 'clamp(15rem, 43vw, 50rem)',
          aspectRatio: '17 / 18',
          backgroundColor: ''
        }}
      >
        {/* Svg path for the L shape */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <clipPath id='contact-L' clipPathUnits={'objectBoundingBox'}>
              <path d='M 0 0.05 A 0.05 0.05 0 0 1 0.05 0 L 0.95 0 A 0.05 0.05 0 0 1 1 0.05 L 1 0.12 A 0.05 0.05 0 0 1 0.95 0.17 L 0.25 0.17 A 0.05 0.05 0 0 0 0.2 0.22 L 0.2 0.7 A 0.05 0.05 0 0 1 0.15 0.75 L 0.05 0.75 A 0.05 0.05 0 0 1 0 0.7 L 0 1 Z' />
            </clipPath>
          </defs>
        </svg>
        {/* Clip path style */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(45deg, ${Colors.cyan} 10%, ${Colors.purple} 50%, ${Colors.blue} 100%)`,
            clipPath: 'url(#contact-L)'
          }}
        >
          {/* Container for contact me text */}
          <div
            style={{
              position: 'absolute',
              top: '-5%',
              width: '100%'
            }}
          >
            <h2
              style={{
                color: Colors.white,
                position: 'absolute',
                fontSize: 'clamp(1.5rem, 4vw, 5rem)',
                top: '-5%',
                right: '15%'
              }}
            >
              Contact me!
            </h2>
          </div>
          {/* Container for logos */}
          <div
            style={{
              height: '75%',
              width: '20%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 5vw, 6rem)',
              paddingTop: 'clamp(1rem, 3vw, 3rem)'
            }}
          >
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=palmroos.patrick@gmail.com&su=Hello&body=Hi%20there'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-socials'
                src='/images/Logos/gmail.png'
                alt='Gmail logo'
                style={{ width: 'clamp(2.2rem, 6vw, 7rem)', height: 'auto' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/patrick-palmroos-2394b3224/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-socials'
                src='/images/Logos/linkedin.png'
                alt='LinkedIn logo'
                style={{ width: 'clamp(2.2rem, 6vw, 7rem)', height: 'auto' }}
              />
            </a>
            <a
              href='https://github.com/Patrick-Palmroos'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-socials'
                src='/images/Logos/github.png'
                alt='Github Logo'
                style={{ width: 'clamp(2.2rem, 6vw, 7rem)', height: 'auto' }}
              />
            </a>
          </div>
        </div>
        {/* Software developer */}
        <h2
          style={{
            color: Colors.cyan,
            position: 'absolute',
            bottom: '35%',
            left: '23%',
            width: 'clamp(10rem, 35vw, 40rem)',
            fontSize: 'clamp(2rem, 6vw, 7rem)',
            fontWeight: 900
          }}
        >
          Software Developer
        </h2>
        <h3
          className='desc'
          style={{
            position: 'absolute',
            left: '23%',
            backgroundColor: Colors.background,
            color: 'white',
            fontSize: 'clamp(1rem, 2vw, 1.8rem)',
            width: 'clamp(25rem, 55vw, 50rem)'
          }}
        >
          Recently graduated full-stack dev, ready for new challenges!
        </h3>
      </div>
    </div>
  );
};

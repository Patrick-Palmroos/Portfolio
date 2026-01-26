import { OpenInNew } from '@mui/icons-material';
import Colors from '../../colors';
import './styles.css';
import { DotPatternSVG } from '../util/Patterns';

export default function AboutMe() {
  return (
    <div className='ab-me-container'>
      <div style={{ position: 'relative', width: 'max-content' }}>
        <div className='ab-me-img-shadow' />
        <img className='img-me' src='/me2.png' />
      </div>
      <div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h2
            className='about-me-title'
            style={{ color: Colors.purple, zIndex: 20, position: 'relative' }}
          >
            About me
          </h2>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: 'clamp(4rem, 5vw, 5rem)',
              width: 'clamp(10rem, 20vw, 20rem)'
            }}
          >
            <DotPatternSVG color='grey' />
          </div>
        </div>
        <div className='ab-me-desc'>
          <p>
            In December 2025 I graduated from the{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.tuni.fi/fi/tule-opiskelemaan/tietojenkasittelyn-tutkinto-ohjelma'
              style={{
                color: '#8bbeff',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Tampere University of Applied Sciences <OpenInNew />
            </a>{' '}
            with a Degree Programme in Business Information Systems, Software
            Production. I had the opportunity to make friends with some amazing
            people while learning more about what I love doing, programming! I
            love learning new things and continuously strive to develop my
            skills and grow as a person. I enjoy working with people, taking on
            new challenges, and learning from them!
          </p>
          <p>
            I've always considered myself a quick learner, and seeking knowledge
            has always been something I aspire toward. I strive to improve my
            skills and knowledge every day! My goal is to be able to look back
            at myself a year ago and say, 'Wow! I knew nothing!'. My goal is to
            be the best version of myself I can be!
          </p>
        </div>
      </div>
    </div>
  );
}

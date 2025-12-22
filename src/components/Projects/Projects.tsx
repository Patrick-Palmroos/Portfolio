import Colors from '../../colors';
import { DotPatternSVG } from '../util/Patterns';
import ProjectBox from './ProjectBox';
import './styles.css';
import { useState } from 'react';

export default function Projects() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div>
      {/* Title and desc */}
      <div className='container'>
        <ProjectsTitle />
        <div className='projects-desc-container'>
          <p
            className='projects-desc'
            style={{
              color: Colors.white
            }}
          >
            These are some of the projects I have worked on! You can click on
            one to see further details.
          </p>
        </div>
      </div>
      {/* Cards */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <ProjectBox disabled={selected !== 0} />
        <ProjectBox disabled={selected !== 1} />
        <ProjectBox disabled={selected !== 2} />
      </div>
      <div
        style={{ width: '3rem', height: '3rem', backgroundColor: 'red' }}
        title='back'
        onClick={() => setSelected((prev) => (prev -= 1))}
      />
      <div
        style={{ width: '3rem', height: '3rem', backgroundColor: 'green' }}
        title='next'
        onClick={() => setSelected((prev) => (prev += 1))}
      />
    </div>
  );
}

function ProjectsTitle() {
  return (
    <div
      style={{
        backgroundColor: '',
        position: 'relative',
        width: 'clamp(9rem, 50vw, 33rem)',
        height: 'auto'
      }}
    >
      <div
        style={{
          width: 'clamp(8rem, 25vw, 20rem)',
          height: 'clamp(2rem, 8vw, 6rem)',
          position: 'absolute',
          bottom: '-15%',
          right: '0%'
        }}
      >
        <DotPatternSVG />
      </div>
      <p
        style={{
          position: 'relative',
          color: Colors.purple,
          margin: 0,
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: 800
        }}
      >
        Projects
      </p>
    </div>
  );
}

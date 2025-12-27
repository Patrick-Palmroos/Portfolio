import Colors from '../../colors';
import { DotPatternSVG } from '../util/Patterns';
import ProjectBox from './ProjectBox';
import './styles.css';
import { useState } from 'react';

export default function Projects() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div
    // style={{
    //   width: '100%',
    //   backgroundColor: '#050505ff'
    // }}
    >
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
      <div className='cards-container'>
        <div>
          <ProjectBox
            disabled={selected !== 0}
            onClick={
              selected === 0
                ? () => console.log('open 0')
                : () => setSelected(0)
            }
          />
        </div>
        <div>
          <ProjectBox
            disabled={selected !== 1}
            onClick={
              selected === 1
                ? () => console.log('open 1')
                : () => setSelected(1)
            }
          />
        </div>
        <div>
          <ProjectBox
            disabled={selected !== 2}
            onClick={
              selected === 2
                ? () => console.log('open 2')
                : () => setSelected(2)
            }
          />
        </div>
      </div>
      {/* <div
        style={{ width: '3rem', height: '3rem', backgroundColor: 'red' }}
        title='back'
        onClick={() => setSelected((prev) => (prev -= 1))}
      />
      <div
        style={{ width: '3rem', height: '3rem', backgroundColor: 'green' }}
        title='next'
        onClick={() => setSelected((prev) => (prev += 1))}
      /> */}
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

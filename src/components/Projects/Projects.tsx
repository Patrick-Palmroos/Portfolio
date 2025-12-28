import Colors from '../../colors';
import { DotPatternSVG } from '../util/Patterns';
import ProjectBox from './ProjectBox';
import './styles.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import ProjectsJson from '../../assets/projects.json';
import { Project } from '../util/Types';
import Checkbox from '../util/Checkbox';

export default function Projects() {
  const [relevant, setRelevant] = useState<boolean>(true);
  const projects: Project[] = useMemo(() => {
    return [...ProjectsJson.projects]
      .sort((a, b) => (relevant ? b.priority - a.priority : b.id - a.id))
      .map((p) => p as Project);
  }, [relevant]);
  const [selected, setSelected] = useState<number>(0);
  const INCREMENT_INTERVAL = 10000; // 5 seconds
  const PAUSE_DURATION = 25000; // 10 seconds
  const intervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    //if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setSelected((prev) => {
        if (prev === projects.length - 1) return 0;
        else return (prev += 1);
      });
    }, INCREMENT_INTERVAL);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const handlePause = () => {
    // Prevent double pause
    //setIsPaused(true);

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = window.setInterval(() => {
      setSelected((prev) => {
        if (prev === projects.length - 1) return 0;
        else return (prev += 1);
      });
    }, PAUSE_DURATION);
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current !== null) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

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
      {/* Buttons div */}
      <div
        className='buttons-container'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.8rem)',
            fontWeight: 800
          }}
        >
          Order by:
        </p>
        {/* Relevant button */}
        <div
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
            //backgroundColor: 'red'
          }}
          onClick={() => {
            handlePause();
            setSelected(0);
            setRelevant(true);
          }}
        >
          <Checkbox
            onClick={() => null}
            checked={relevant}
            size='clamp(1rem, 3vw, 2rem)'
          />
          <p
            style={{
              color: relevant ? 'white' : 'grey',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)'
            }}
          >
            Relevant
          </p>
        </div>
        {/* newest button */}
        <div
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
            //backgroundColor: 'red'
          }}
          onClick={() => {
            handlePause();
            setSelected(0);
            setRelevant(false);
          }}
        >
          <Checkbox
            onClick={() => null}
            checked={!relevant}
            size='clamp(1rem, 3vw, 2rem)'
          />
          <p
            style={{
              color: !relevant ? 'white' : 'grey',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)'
            }}
          >
            Newest
          </p>
        </div>
      </div>
      {/* Cards */}
      <div className='cards-container'>
        {projects.map((project, i) => (
          <div key={i}>
            <ProjectBox
              project={project}
              disabled={selected !== i}
              onClick={
                selected === i
                  ? () => console.log('open 0')
                  : () => {
                      handlePause();
                      setSelected(i);
                    }
              }
            />
          </div>
        ))}
      </div>
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

import Colors from '../../colors';
import { Arrow, DotPatternSVG } from '../util/Patterns';
import ProjectBox from './ProjectBox';
import MobileProjectBox from './MobileProjectBox';
import './styles.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import ProjectsJson from '../../assets/projects.json';
import { Project } from '../util/Types';
import Checkbox from '../util/Checkbox';
import Modal from '../Modal/Modal';
import { useMediaQuery } from 'react-responsive';

// TODO: make a handleclick function to prevent auto scroll from causing issues
export default function Projects() {
  const [relevant, setRelevant] = useState<boolean>(true);
  const projects: Project[] = useMemo(() => {
    return [...ProjectsJson.projects]
      .sort((a, b) => (relevant ? b.priority - a.priority : b.id - a.id))
      .map((p) => p as Project);
  }, [relevant]);
  const [selected, setSelected] = useState<number>(0);
  const INCREMENT_INTERVAL = 2000;
  const PAUSE_DURATION = 25000;
  const intervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 650px)' });
  const [animate, setAnimate] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (modal) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      if (pauseTimeoutRef.current !== null) {
        clearTimeout(pauseTimeoutRef.current);
      }
    }
  }, [modal]);

  useEffect(() => {
    //if (isPaused) return;

    if (!isDesktop && !modal) {
      intervalRef.current = window.setInterval(() => {
        setAnimate(true);
        setTimeout(() => {
          setSelected((prev) => {
            if (prev === projects.length - 1) return 0;
            else return (prev += 1);
          });
        }, 350);
      }, INCREMENT_INTERVAL);

      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    } else if (!modal) {
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
    }
  }, [modal]);

  const handleBrowse = (value: number) => {
    // Clear and restart auto-scroll to reset timer
    if (intervalRef.current) clearInterval(intervalRef.current);

    setTimeout(() => {
      setSelected((prev) => {
        const next = prev + value;
        if (next < 0) return projects.length - 1;
        if (next >= projects.length) return 0;
        return next;
      });

      handlePause();
    }, 350);
  };

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
      {isDesktop ? (
        <div className='cards-container'>
          {projects.map((project, i) => (
            <div key={i}>
              <ProjectBox
                project={project}
                disabled={selected !== i}
                onClick={
                  selected === i
                    ? () => {
                        setModal(true);
                      }
                    : () => {
                        handlePause();
                        setSelected(i);
                      }
                }
              />
            </div>
          ))}
        </div>
      ) : (
        // Mobile project cards + buttons
        <div>
          {/* Buttons and card container */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: '2px',
              marginLeft: '2px'
            }}
          >
            {/* Left button */}
            <div
              onClick={() => {
                handlePause();
                handleBrowse(-1);
                setAnimate(true);
              }}
              style={{
                cursor: 'pointer',
                width: '4rem',
                height: '4rem',
                rotate: '180deg'
              }}
            >
              <Arrow />
            </div>
            {/* Mobile project box */}
            <MobileProjectBox
              onClick={() => setModal(true)}
              project={projects[selected]}
              disabled={false}
              animate={animate}
              resetAnim={() => setAnimate(false)}
            />
            {/* Right button */}
            <div
              style={{
                cursor: 'pointer',
                width: '4rem',
                height: '4rem'
              }}
              onClick={() => {
                handlePause();
                handleBrowse(1);
                setAnimate(true);
              }}
            >
              <Arrow />
            </div>
          </div>
          {/* Carousel card dot number display */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: '100%',
              justifyContent: 'center',
              marginTop: '1rem',
              height: '2rem',
              alignItems: 'center'
            }}
          >
            {projects.map((_, i) => (
              <div
                className='dot'
                key={i}
                style={{
                  backgroundColor: selected !== i ? 'grey' : 'white',
                  scale: selected !== i ? '1' : '1.15',
                  transition: 'scale 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>
      )}
      {/* Modal */}
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        content={<ModalContent project={projects[selected]} />}
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

function ModalContent({ project }: { project: Project }) {
  return (
    <div>
      <p>{project.title}</p>
    </div>
  );
}

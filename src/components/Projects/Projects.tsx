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
import {
  CalendarToday,
  Link,
  GitHub,
  YouTube,
  Android,
  Apple,
  OpenInFullRounded,
  CloseFullscreenRounded
} from '@mui/icons-material';

// TODO: make a handleclick function to prevent auto scroll from causing issues
export default function Projects() {
  const [relevant, setRelevant] = useState<boolean>(true);
  const projects: Project[] = useMemo(() => {
    return [...ProjectsJson.projects]
      .sort((a, b) => (relevant ? b.priority - a.priority : b.id - a.id))
      .map((p) => p as Project);
  }, [relevant]);
  const [selected, setSelected] = useState<number>(0);
  const INCREMENT_INTERVAL = 8000;
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
            Important
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
              className='dot-arrow'
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
              className='dot-arrow'
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
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginLeft: '1rem'
            }}
          >
            <h2 className='modal-title'>{projects[selected].title}</h2>
            <h2 className='modal-title' style={{ color: '#FEFFB9' }}>
              - {projects[selected].created_for}
            </h2>
          </div>
        }
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
        <DotPatternSVG color='grey' />
      </div>
      <p
        style={{
          position: 'relative',
          color: Colors.purple,
          margin: 0,
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 800
        }}
      >
        Projects
      </p>
    </div>
  );
}

function ModalContent({ project }: { project: Project }) {
  const imageArray: string[] = useMemo(() => {
    const images = project.images ?? [];

    return images.length >= 8
      ? images.slice(0, 8)
      : [...images, ...Array(8 - images.length).fill(null)];
  }, [project.images]);
  const [chosenImage, setChosenImage] = useState<string>(imageArray[0]);
  const [displayImg, setDisplayImg] = useState<boolean>(false);

  return (
    // Container
    <div style={{ height: '100%', width: '100%' }}>
      <FullScreenImage
        open={displayImg}
        onClose={() => setDisplayImg(false)}
        imgUrl={chosenImage}
      />
      {/* Date and technologies titles */}
      <div
        className='date-tech-container'
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {/* Icon and date container */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <CalendarToday style={{ width: '2rem', height: '2rem' }} />
          <h2>
            {project.start_date} - {project.end_date}
          </h2>
        </div>
        {/* Tech title */}
        <h2>Technologies</h2>
      </div>

      {/* container */}
      <div
        className='info-tech-container'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0rem 1rem 0rem 1rem'
        }}
      >
        {/* Information */}
        <div>
          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Github link */}
            {project.github && (
              <a
                className='link-style'
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub />
                <p>Github</p>
              </a>
            )}
            {/* Website */}
            {project.web_link && (
              <a
                className='link-style'
                href={project.web_link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Link />
                <p>Website</p>
              </a>
            )}
            {/* YouTube */}
            {project.youtube && (
              <a
                className='link-style'
                href={project.youtube}
                target='_blank'
                rel='noopener noreferrer'
              >
                <YouTube />
                <p>YouTube</p>
              </a>
            )}

            {/* Google play */}
            {project.google_play && (
              <a
                className='link-style'
                href={project.google_play}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Android />
                <p>Google Play</p>
              </a>
            )}
            {/* App store */}
            {project.app_store && (
              <a
                className='link-style'
                href={project.app_store}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Apple />
                <p>App Store</p>
              </a>
            )}
          </div>

          <div>
            {/* Images */}
            <div className='images-container'>
              {/* Displayed image */}
              <div
                onClick={() => setDisplayImg(true)}
                className='displayed-image'
                style={{
                  backgroundImage: `url('${chosenImage}')`
                }}
              >
                {/* Dark overlay */}
                <div className='displayed-image-overlay' />
                <OpenInFullRounded
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    fontSize: '2rem',
                    filter: `
                   drop-shadow(1px 0 0 black)
                   drop-shadow(-1px 0 0 black)
                   drop-shadow(0 1px 0 black)
                   drop-shadow(0 -1px 0 black)
                 `
                  }}
                />
              </div>
              {/* Container for choosable images */}
              <div className='image-choice'>
                {/* Choosable images */}
                {imageArray.map((image, i) => (
                  // Container with onclick event
                  <div
                    key={i}
                    onClick={image ? () => setChosenImage(image) : () => null}
                    style={{
                      height: '3.5rem',
                      width: '3.5rem',
                      position: 'relative',
                      cursor: image ? 'pointer' : 'default'
                    }}
                  >
                    {/* Image styling */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        borderRadius: '0.5rem',
                        border: image
                          ? chosenImage !== image
                            ? '1px solid white'
                            : `1px solid ${Colors.blue}`
                          : 'none',
                        backgroundImage: image ? `url('${image}')` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: 'hidden',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: '0.4',
                          backgroundColor:
                            chosenImage === image ? Colors.blue : 'transparent'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Texts */}
            <div className='description-text'>
              {project.description.split('\n').map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </div>
        </div>

        {/* techs */}
        <div
          className='tech-container'
          style={{
            backgroundColor: '',
            position: 'relative',
            display: 'flex',
            gap: '1rem'
          }}
        >
          {/* Dot pattern svg */}
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0
            }}
          >
            <DotPatternSVG color='rgba(255, 255, 255, 0.4)' />
          </div>
          {/* tools used */}
          {project.technologies.map((tool, i) => (
            <img
              className='tool-logo'
              key={i}
              src={tool}
              alt='tool logo'
              // style={{
              //   filter: `
              //     drop-shadow(1px 0 0 ${Colors.blue})
              //     drop-shadow(-1px 0 0 ${Colors.blue})
              //     drop-shadow(0 1px 0 ${Colors.blue})
              //     drop-shadow(0 -1px 0 ${Colors.blue})
              //   `
              // }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FullScreenImage({
  imgUrl,
  open,
  onClose
}: {
  imgUrl: string;
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)'
        }}
      />
      <img
        src={imgUrl}
        style={{
          position: 'absolute',
          width: 'auto',
          height: 'auto',
          maxWidth: '39rem',
          maxHeight: '35rem',
          left: '50%',
          top: '54%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <CloseFullscreenRounded
        className='close-fullscreen'
        style={{
          fontSize: '3rem',
          filter: `
                   drop-shadow(1px 0 0 black)
                   drop-shadow(-1px 0 0 black)
                   drop-shadow(0 1px 0 black)
                   drop-shadow(0 -1px 0 black)
                 `
        }}
      />
    </div>
  );
}

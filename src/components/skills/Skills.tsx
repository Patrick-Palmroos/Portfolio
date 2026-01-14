import { useState, useRef } from 'react';
import SkillsJson from '../../assets/skills.json';
import { SkillType } from '../util/Types';
import './styles.css';
import { useMousePosition } from '../util/util';
import Colors from '../../colors';
import { useMediaQuery } from 'react-responsive';
import { DotPatternSVG } from '../util/Patterns';

export default function Skills() {
  const skills = SkillsJson.skills as SkillType[];
  const [category, setCategory] = useState<string | null>(null);

  const handleCatClick = (cat: string) => {
    if (cat === category) {
      setCategory(null);
    } else {
      setCategory(cat);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5rem',
        position: 'relative'
      }}
    >
      <PathAnimation skills={skills} category={category} />
      <div className='pattern-container'>
        <DotPatternSVG color='white' />
      </div>
      <div className='right-side-container'>
        <p
          className='title'
          style={{
            color: Colors.purple
          }}
        >
          My Tech
        </p>
        {/* Skill buttons */}
        <div className='tech-button-container'>
          <div
            className='tech-button'
            style={{
              backgroundColor: category === 'language' ? '#2a209c' : ''
            }}
            onClick={() => handleCatClick('language')}
          >
            <p>Languages</p>
          </div>
          <div
            className='tech-button'
            style={{
              backgroundColor: category === 'libraries' ? '#2a209c' : ''
            }}
            onClick={() => handleCatClick('libraries')}
          >
            <p>Frameworks & Libraries</p>
          </div>
          <div
            className='tech-button'
            style={{
              backgroundColor: category === 'backend' ? '#2a209c' : ''
            }}
            onClick={() => handleCatClick('backend')}
          >
            <p>Backend</p>
          </div>
          <div
            className='tech-button'
            style={{
              backgroundColor: category === 'tools' ? '#2a209c' : ''
            }}
            onClick={() => handleCatClick('tools')}
          >
            <p>Tools & Version Control</p>
          </div>
        </div>

        {/* Clear version of all techs */}
        <div className='tech-card-container'>
          {skills
            .filter((skill) => (category ? skill.category === category : skill))
            .map((skill, i) => (
              <div className='tech-card' key={i}>
                <img className='tech-card-image' src={skill.image} />
                <p>{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function PathAnimation({
  skills,
  category
}: {
  skills: SkillType[];
  category: string | null;
}) {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1200px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [tech, setTech] = useState<string | null>(null);

  const size = isLargeScreen ? '550' : '400';

  const center = 150;
  const baseRadius = 40;
  const radiusStep = 40;
  const speedBase = 50;

  const MAX_INNER = 4;

  let skillIndex = 0;
  let ringIndex = 0;

  const orbits: {
    radius: number;
    speed: number;
    skills: SkillType[];
  }[] = [];

  while (skillIndex < skills.length) {
    const ringCapacity = MAX_INNER * Math.pow(2, ringIndex);
    const ringSkills = skills.slice(skillIndex, skillIndex + ringCapacity);

    orbits.push({
      radius: baseRadius + ringIndex * radiusStep,
      speed: speedBase + ringIndex * 6,
      skills: ringSkills
    });

    skillIndex += ringCapacity;
    ringIndex++;
  }

  const handelMouseOver = (name: string) => {
    if (!svgRef.current || !isDesktop) return;
    setTech(name);
    svgRef.current.pauseAnimations();
  };

  const handelMouseLeave = () => {
    if (!svgRef.current || !isDesktop) return;
    setTech(null);
    svgRef.current.unpauseAnimations();
  };

  return (
    <div className='tech-circle'>
      <svg ref={svgRef} width={size} height={size} viewBox='0 0 300 300'>
        {orbits.map((orbit, orbitIndex) => {
          const count = orbit.skills.length;

          return (
            <g key={orbitIndex}>
              {/* Orbit ring */}
              <circle
                cx={center}
                cy={center}
                r={orbit.radius}
                fill='none'
                stroke='#ddd'
              />

              {/* Orbiting skills */}
              {orbit.skills.map((skill, i) => {
                const baseAngle = (360 / count) * i;
                const direction = orbitIndex % 2 === 1 ? -360 : 360;

                return (
                  <g key={`${orbitIndex}-${i}`}>
                    {/* Orbit rotation (position only) */}
                    <animateTransform
                      attributeName='transform'
                      type='rotate'
                      from={`0 ${center} ${center}`}
                      to={`${direction} ${center} ${center}`}
                      dur={`${orbit.speed}s`}
                      repeatCount='indefinite'
                    />

                    {/* Initial angular placement */}
                    <g
                      transform={`rotate(${baseAngle} ${center} ${center})`}
                      onMouseEnter={() => handelMouseOver(skill.name)}
                      onMouseLeave={handelMouseLeave}
                    >
                      {/* Move to orbit radius */}
                      <g
                        transform={`translate(${center}, ${
                          center - orbit.radius
                        })`}
                      >
                        {/* STATIC counter-rotation for baseAngle */}
                        <g transform={`rotate(${-baseAngle})`}>
                          {/* ANIMATED counter-rotation for orbit */}
                          <g>
                            <animateTransform
                              attributeName='transform'
                              type='rotate'
                              from='0'
                              to={-direction}
                              dur={`${orbit.speed}s`}
                              repeatCount='indefinite'
                            />

                            <image
                              className={
                                category === skill.category
                                  ? 'active-skill-icon'
                                  : 'skill-icon'
                              }
                              href={skill.image}
                              x={-18}
                              y={-18}
                              width={36}
                              height={36}
                              preserveAspectRatio='xMidYMid meet'
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      <TechPopup name={tech} />
    </div>
  );
}

function TechPopup({ name }: { name: string | null }) {
  const mousePos = useMousePosition();

  if (!name) return null;

  return (
    <div
      style={{
        backgroundColor: Colors.background,
        position: 'fixed',
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(10%, -100%)',
        pointerEvents: 'none',
        fontSize: '1.2rem',
        padding: '0rem 1rem 0rem 1rem',
        borderRadius: '0.8rem',
        zIndex: 80
      }}
    >
      <p>{name}</p>
    </div>
  );
}

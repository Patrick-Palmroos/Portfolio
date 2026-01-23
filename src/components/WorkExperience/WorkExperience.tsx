import Colors from '../../colors';
import { DotPatternSVG } from '../util/Patterns';
import './styles.css';
import { calcMonths } from '../util/util';
import { WorkType } from '../util/Types';
import WorkJson from '../../assets/work.json';
import { useState } from 'react';

export default function WorkExperience() {
  const work: WorkType[] = WorkJson.work.map((w) => w as WorkType);
  const [chosenWork, setChosenWork] = useState<number>(0);
  const chosen: WorkType = work.find((w) => w.id === chosenWork) ?? work[0];

  const handleJobClick = (id: number) => {
    setChosenWork(id);
  };

  return (
    <div className='workexperience-container'>
      <h2 className='work-title' style={{ color: Colors.purple }}>
        Work Experience
      </h2>
      <div className='content-container'>
        {/* Work button container */}
        <div className='work-buttons-container'>
          {work.map((w, i) => (
            <div key={i}>
              <WorkBox
                work={w}
                chosenId={chosenWork}
                callback={handleJobClick}
              />
            </div>
          ))}
        </div>
        <div className='job-title-description-container'>
          <div
            className='job-description-container'
            style={{
              backgroundColor: Colors.blue
            }}
          >
            <div className='job-description'>
              {chosen.description.split('\n').map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </div>

          <div className='job-title-container'>
            <p>
              {chosen.name} - {chosen.title}
            </p>
            <p>
              {chosen.startDate} - {chosen.endDate ?? 'Current'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkBox({
  work,
  chosenId,
  callback
}: {
  work: WorkType;
  chosenId: number;
  callback: (id: number) => void;
}) {
  const chosen: boolean = chosenId === work.id;

  return (
    <div
      onClick={() => callback(work.id)}
      className='work-box-container'
      style={{ borderColor: chosen ? Colors.cyan : 'grey' }}
    >
      <div className='work-box-pattern'>
        <DotPatternSVG color='#3b3b3b' />
      </div>
      <div className='work-box-info-container'>
        <p>
          {work.startDate} - {work.endDate ?? 'Current'}
        </p>
        <p>
          {work.name}, {work.title}
        </p>
      </div>
      <div
        className='work-box-months'
        style={{ backgroundColor: chosen ? Colors.cyan : '#D9D9D9' }}
      >
        <p style={{ padding: '0rem 0rem 0rem 1rem' }}>
          {calcMonths(work.startDate, work.endDate)}
        </p>
      </div>
    </div>
  );
}

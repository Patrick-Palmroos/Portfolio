import Colors from '../../colors';
import {
  AccessibilityNew,
  Language,
  LocationOn,
  Person,
  RecordVoiceOver
} from '@mui/icons-material';
import './styles.css';

export default function TopBar() {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 80,
        backgroundColor: Colors.background,
        width: '100%',
        paddingBottom: '0rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <div className='topbar-container'>
        <LocationOn style={{ color: Colors.cyan }} />
        <p>Tampere, Finland</p>
      </div>
      <div className='topbar-container'>
        <Person style={{ color: Colors.cyan }} />
        <p>22 years old</p>
      </div>
      <div className='topbar-container'>
        <RecordVoiceOver style={{ color: Colors.cyan }} />
        <p>Finnish & English</p>
      </div>
      <div className='topbar-container' id='last-one'>
        <AccessibilityNew style={{ color: Colors.cyan }} />
        <p>He/Him</p>
      </div>
    </div>
  );
}

import './styles.css';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#080808',
        width: '100%',
        height: '10rem',
        marginTop: '20rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <p className='copyright-text'>
        All rights reserved ©Patrick Palmroos 2026
      </p>
    </div>
  );
}

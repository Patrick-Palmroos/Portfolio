import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div style={{ marginBottom: '5rem', width: '100%', overflow: 'hidden' }}>
      <Header />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;

import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/skills/Skills';
import TopBar from './components/TopBar/TopBar';
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <div style={{ marginBottom: '5rem', width: '100%', overflow: 'hidden' }}>
      <TopBar />
      <Header />
      <Projects />
      <Skills />
      <WorkExperience />
      <AboutMe />
    </div>
  );
}

export default App;

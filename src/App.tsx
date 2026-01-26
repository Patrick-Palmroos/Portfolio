import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/skills/Skills';
import TopBar from './components/TopBar/TopBar';
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <TopBar />
      <Header />
      <Projects />
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;

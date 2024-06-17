import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Education/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Contact/>

    </div>
  );
}

export default App;


import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro';
import Work from './components/Work/Work'
import Menu from './components/menu/Menu';
import About from './components/About/About';
import Csharp from './components/Csharp/Csharp';
import Contact from './components/Contact/Contact';
import HireMe from './components/HireMe/HireMe';
import Footer from './components/Footer/Footer';
import MasteringCourse from './components/MasteringCourse/MasteringCourse';
import './App.scss';
import { useState } from 'react'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app' >
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Work />
        <Csharp />
        <MasteringCourse />
        <HireMe />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

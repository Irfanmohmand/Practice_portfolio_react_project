import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experince from "./components/Experince";
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";

// Using animation 1.npm i aos 2. go to animation on scroll


function App() {

  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <>
      <Navbar />
      <div className='w-full h-auto min-h-[90vh]'>
        <Home />
        <Experince />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
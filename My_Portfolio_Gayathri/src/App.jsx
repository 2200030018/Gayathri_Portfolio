import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';


function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      
      <section id="profile" className="pt-24 min-h-screen bg-white">
        <Profile />
      </section>

      <section id="about" className="pt-24 min-h-screen bg-white">
        <About />
      </section>

      <section id="education" className="pt-24 min-h-screen bg-white">
        <Education />
      </section>

      <section id="skills" className="pt-24 min-h-screen bg-white">
        <Skills />
      </section>

      <section id="projects" className="pt-24 min-h-screen bg-white">
        <Projects />
      </section>

      <section id="certifications" className="pt-24 min-h-screen bg-white">
        <Certifications />
      </section>

      <section id="contact" className="pt-24 min-h-screen bg-white">
        <Contact />
      </section>

      {/* Add other sections similarly */}
    </div>
  );
}

export default App;

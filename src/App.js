import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      easing: 'ease-in-out', // easing for animations
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section data-aos="fade-up">
          <About />
        </section>
        <section data-aos="fade-up">
          <Experience />
        </section>
        <section data-aos="fade-up">
          <Projects />
        </section>
        <section data-aos="fade-up">
          <Education />
        </section>
        <section data-aos="fade-up">
          <Skills />
        </section>
        <section data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

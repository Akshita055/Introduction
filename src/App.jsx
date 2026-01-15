import React, { useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import AchievementsCertifications from './sections/AchievementsCertifications';
import Contact from './sections/Contact';
import { LoaderFive } from './components/ui/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b12]">
          <LoaderFive text="Generating Akshita's portfolio..." />
        </div>
      )}
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <AchievementsCertifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

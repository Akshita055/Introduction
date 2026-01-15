import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ContainerTextFlip } from '../components/ui/container-text-flip';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import profileImage from '../assets/profile/profile.jpg';
import resumeFile from '../assets/Resume/Akshita_Singh_Resume.pdf';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12">
      {/* Radial glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[10%]">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[80px] md:blur-[120px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl order-2 lg:order-1 text-center lg:text-left"
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: 'preserve-3d'
            }}
          >
            <motion.div variants={fadeInUp} className="mb-2 sm:mb-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-1.5 sm:mb-2">
                <span className="text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Akshita Singh</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-gray-400 text-sm sm:text-base md:text-lg font-light">
                <span className="text-[#8b5cf6]">Frontend</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/50" />
                <span className="text-[#6366f1]">Salesforce</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]/50" />
                <span className="text-[#8b5cf6]">DevOps</span>
              </div>
            </motion.div>

            {/* Headline with generate effect */}
            <motion.div variants={fadeInUp} className="mb-2 sm:mb-3">
              <TextGenerateEffect
                words={`Frontend developer\ncrafting calm, engineered experiences`}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight tracking-tight text-gray-100"
              />
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0 font-light"
              style={{ letterSpacing: '0.01em' }}
            >
              I enjoy building clean interfaces, automating workflows, and turning ideas into scalable digital products. I work at the intersection of design, logic, and automation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
            >
              <motion.button
                initial="rest"
                whileHover="hover"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    const navbarHeight = 80;
                    const elementPosition = projectsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                variants={{
                  rest: {
                    boxShadow: "0 0 0px rgba(139, 92, 246, 0)"
                  },
                  hover: {
                    boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)",
                    scale: 1.02
                  }
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white font-medium rounded-lg transition-all duration-300 text-center text-sm sm:text-base"
              >
                View Work
              </motion.button>
              
              <motion.a
                initial="rest"
                whileHover="hover"
                variants={{
                  rest: {
                    borderColor: "rgba(139, 92, 246, 0.3)"
                  },
                  hover: {
                    borderColor: "rgba(139, 92, 246, 1)",
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
                    scale: 1.02
                  }
                }}
                href={resumeFile}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#8b5cf6]/30 text-gray-100 font-medium rounded-lg backdrop-blur-sm transition-all duration-300 text-center inline-block text-sm sm:text-base"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] via-[#6366f1] to-[#8b5cf6] rounded-full blur-xl md:blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-[#8b5cf6]/30 shadow-2xl"
              >
                <img 
                  src={profileImage} 
                  alt="Akshita Singh" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#8b5cf6]/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


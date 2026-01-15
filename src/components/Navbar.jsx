'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/navItems';
import { useActiveSection } from '../hooks/useActiveSection';

const itemVariants = {
  initial: {
    rotateX: 0,
    opacity: 1
  },
  hover: {
    rotateX: -90,
    opacity: 0
  }
};

const backVariants = {
  initial: {
    rotateX: 90,
    opacity: 0
  },
  hover: {
    rotateX: 0,
    opacity: 1
  }
};

const glowVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      },
      scale: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  }
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = navItems.map(item => item.id);
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-5 hidden lg:flex justify-center"
      >
        <motion.div 
          className="p-4 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg relative overflow-hidden"
          initial="initial" 
          whileHover="hover"
        >
          <ul className="flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <motion.li key={item.id} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    style={{
                      background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.06) 50%, rgba(139,92,246,0) 100%)",
                      opacity: 0
                    }}
                  />

                  {/* Front face */}
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 relative z-10 bg-transparent transition-colors rounded-xl text-base font-semibold ${
                      activeSection === item.id
                        ? 'text-[#8b5cf6]'
                        : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    }`}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom"
                    }}
                  >
                    <span>{item.label}</span>
                    {/* Animated underline for active section */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="h-0.5 w-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>

                  {/* Back face */}
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-base font-semibold ${
                      activeSection === item.id
                        ? 'text-[#8b5cf6]'
                        : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    }`}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      transform: "rotateX(90deg)"
                    }}
                  >
                    <span>{item.label}</span>
                    {/* Animated underline for active section */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="navbar-underline-back"
                        className="h-0.5 w-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-3 lg:hidden backdrop-blur-lg bg-black/80 border-b border-gray-800/80"
      >
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl font-display font-bold"
          >
            <span className="text-gradient">Portfolio</span>
          </motion.div>

          {/* Hamburger Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-gray-100 rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-gray-100 rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-gray-100 rounded-full"
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-black/95 backdrop-blur-xl border-l border-gray-800/80 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Items */}
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {activeSection === item.id && (
                            <motion.span
                              layoutId="mobile-nav-indicator"
                              className="w-1.5 h-6 bg-gradient-to-b from-[#8b5cf6] to-[#6366f1] rounded-full"
                            />
                          )}
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Social Links or Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-gray-800"
                >
                  <p className="text-gray-400 text-sm">
                    © 2026 Akshita Singh
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

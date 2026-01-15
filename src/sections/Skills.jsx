import React from 'react';
import { motion } from 'framer-motion';
import { LogoMarquee } from '../components/ui/logo-marquee';

const Skills = () => {
  return (
    <section id="skills" className="relative py-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-6 md:mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-[#8b5cf6] to-transparent"
            />
            <span className="text-[#8b5cf6] font-medium tracking-wider text-[10px] sm:text-xs uppercase">
              Skills
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-semibold text-gray-100 mb-3 sm:mb-4 max-w-2xl"
          >
            Technologies &
            <span className="text-gradient block mt-2">expertise</span>
          </motion.h2>

          {/* Logo Marquee Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LogoMarquee />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

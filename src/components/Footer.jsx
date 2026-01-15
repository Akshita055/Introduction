import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 sm:py-10 px-4 sm:px-5 border-t border-white/10"><div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6"
        >
          {/* Name/Brand */}
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-display font-bold text-gradient"
          >
            Akshita Singh
          </motion.h3>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-gray-400 max-w-md px-4">
            Building calm, engineered experiences—one line of code at a time.
          </p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent max-w-[200px] w-full"
          />

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500">
            © {currentYear} Akshita Singh. Crafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

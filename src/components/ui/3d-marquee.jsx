"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ThreeDMarquee = ({ images = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full py-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/5 to-transparent" />

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-dark-base via-dark-base/50 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-dark-base via-dark-base/50 to-transparent z-20 pointer-events-none" />

      {/* Marquee Container */}
      <motion.div
        className="flex gap-6 px-4"
        animate={{ x: isHovered ? 0 : -2000 }}
        transition={{
          duration: isHovered ? 0.5 : 60,
          ease: isHovered ? "easeOut" : "linear",
          repeat: isHovered ? 0 : Infinity,
        }}
      >
        {[...images, ...images, ...images].map((image, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -20, rotateZ: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex-shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % images.length) * 0.05 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative w-56 h-64 rounded-2xl overflow-hidden perspective">
                {/* Glass Card Background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-white/30 transition-all duration-300 z-10" />

                {/* Image */}
                <img
                  src={image}
                  alt={`skill-${idx}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-5" />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8b5cf6]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#6366f1]/20 blur-xl" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ThreeDMarquee;

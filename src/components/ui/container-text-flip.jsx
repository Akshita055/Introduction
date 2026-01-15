import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Rotates through given words with a smooth flip/fade animation.
export const ContainerTextFlip = ({ words = [], interval = 2200, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <div className={`inline-flex overflow-hidden ${className}`} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-120%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.3, 1] }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ContainerTextFlip;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Type/appear effect that reveals text chunk by chunk with slight randomness.
export const TextGenerateEffect = ({ words = '', className = '' }) => {
  const [displayedIndex, setDisplayedIndex] = useState(0);

  useEffect(() => {
    if (displayedIndex >= words.length) return;
    
    const id = setTimeout(() => {
      setDisplayedIndex(displayedIndex + 1);
    }, 30);
    
    return () => clearTimeout(id);
  }, [displayedIndex, words]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`whitespace-pre-line leading-tight ${className}`}
    >
      {words.slice(0, displayedIndex)}
    </motion.p>
  );
};

export default TextGenerateEffect;

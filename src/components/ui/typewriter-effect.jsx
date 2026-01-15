import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className = "",
  cursorClassName = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const word = words[wordIndex];

    if (!word) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < word.text.length) {
          setDisplayedText(word.text.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(word.text.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  const currentWord = words[wordIndex];

  return (
    <div className={`flex space-x-1 my-6 ${className}`}>
      <motion.span
        className={`${currentWord?.className || ""} text-gradient`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className={`h-4 w-1 rounded-full bg-[#8b5cf6] ${cursorClassName}`}
      />
    </div>
  );
};

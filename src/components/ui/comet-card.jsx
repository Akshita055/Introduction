import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CometCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springY,
        rotateY: springX,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
      {/* Comet effect overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[16px]"
        style={{
          background: `radial-gradient(circle at ${springX.get() + 50}% ${springY.get() + 50}%, rgba(139,92,246,0.3) 0%, transparent 50%)`,
        }}
      />
    </motion.div>
  );
};

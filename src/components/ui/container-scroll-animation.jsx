import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ContainerScroll creates a smooth scroll-linked parallax/scale effect.
 * Pass a titleComponent and child content; the child subtly scales and lifts while scrolling.
 */
export const ContainerScroll = ({ titleComponent, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#6366f1]/10" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative space-y-12">
        <div className="max-w-3xl">{titleComponent}</div>

        <div className="relative h-[70vh] md:h-[80vh] overflow-visible">
          <motion.div
            style={{ scale, y: translateY, opacity }}
            className="sticky top-32 sm:top-20"
          >
            <div className="glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContainerScroll;
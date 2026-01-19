import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const defaultAnimations = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="w-full bg-transparent" ref={containerRef}>
      <div ref={ref} className="relative w-full pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-12 md:pt-24 md:gap-10">
            <div className="md:sticky flex flex-col md:flex-row z-40 items-center md:top-40 self-start md:w-full min-w-[80px] md:min-w-0">
              <div className="h-8 md:h-10 absolute left-2 md:left-3 -translate-x-1/2 md:translate-x-0 w-8 md:w-10 rounded-full bg-white dark:bg-dark-base flex items-center justify-center">
                <div className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-[#8b5cf6] border-2 md:border-4 border-white dark:border-dark-base" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-gray-100 dark:text-gray-100">
                {item.title}
              </h3>
              <h3 className="block md:hidden text-sm pl-14 font-bold text-gray-100 dark:text-gray-100 whitespace-nowrap">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-14 pr-2 md:pl-4 md:pr-4 w-full">
              <motion.div
                initial={defaultAnimations.initial}
                whileInView={defaultAnimations.whileInView}
                transition={defaultAnimations.transition}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300"
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-2 -translate-x-1/2 md:translate-x-0 top-0 overflow-hidden w-0.5 md:w-1 bg-gradient-to-b from-[#8b5cf6] to-[#6366f1]"
        >
          <motion.div
            style={{
              height: height + 'px',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: height + 'px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-0.5 md:w-1 bg-gradient-to-b from-[#8b5cf6] to-transparent dark:from-[#8b5cf6] dark:to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

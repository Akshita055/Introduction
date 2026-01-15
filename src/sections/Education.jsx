import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/ui/timeline';

const Education = () => {
  const educationData = [
    {
      title: "2023 - 2027",
      content: (
        <div>
          <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
            B.Tech in Computer Science
          </h3>
          <p className="text-base text-gray-300 mb-3">
            GLA University, Mathura
          </p>
          <div className="flex items-center gap-4 text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">CGPA:</span>
              <span className="text-[#6366f1] font-semibold text-base">8.12</span>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-gray-400 leading-relaxed">
              Focused on software engineering, data structures, algorithms, and full-stack 
              development. Active participant in hackathons and technical competitions.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
            Intermediate
          </h3>
          <p className="text-base text-gray-300 mb-3">
            Lucknow Public School, Raebareli
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Percentage:</span>
              <span className="text-[#8b5cf6] font-semibold text-base">82.2%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div>
          <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
            High School
          </h3>
          <p className="text-base text-gray-300 mb-3">
            Lucknow Public School, Raebareli
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Percentage:</span>
              <span className="text-[#8b5cf6] font-semibold text-base">90.2%</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="relative py-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-6 md:mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-[#8b5cf6] to-transparent"
            />
            <span className="text-[#8b5cf6] font-medium tracking-wider text-xs sm:text-sm uppercase">
              Education
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            <Timeline data={educationData} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;


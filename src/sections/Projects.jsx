import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Patient Acquisition System',
    description: 'Developed a comprehensive Salesforce-based healthcare management solution featuring custom objects for patient data tracking, automated appointment scheduling, and workflow automation. Implemented advanced Apex triggers for data validation, created dynamic flows for patient onboarding, and built interactive dashboards with Lightning Web Components. The system streamlines patient acquisition processes, reduces manual work by 60%, and enhances data accuracy through automated validation rules and process builders.',
    tech: ['Salesforce', 'Apex', 'Flows', 'SOQL'],
    category: 'SALESFORCE',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Beauty & Cosmetics E-commerce',
    description: 'Built a full-stack e-commerce platform with seamless user experience featuring dynamic product catalogs, advanced filtering and search capabilities, secure cart management, and responsive design. Integrated REST APIs for real-time inventory updates, implemented user authentication with JWT tokens, and created an intuitive admin dashboard for product management. The platform includes wishlist functionality, order tracking, and payment gateway integration, delivering a complete shopping experience optimized for beauty and cosmetics products.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    category: 'FRONTEND',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'JobHuntX Job Portal',
    description: 'Created a modern job search and recruitment platform connecting job seekers with employers. Features include real-time job listings with advanced search and filtering, user profile management, resume builder, application tracking system, and employer dashboard for posting jobs. Integrated third-party job APIs for comprehensive listings, implemented responsive design for mobile-first experience, and built notification system for application updates. The platform streamlines the job hunting process with intuitive UI and powerful search capabilities.',
    tech: ['React', 'Tailwind CSS', 'REST API', 'JavaScript'],
    category: 'FRONTEND',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Plastic Segregation System',
    description: 'Engineered an innovative AI/ML-powered IoT solution for automated plastic waste management using computer vision and deep learning. Developed custom TensorFlow models for plastic type classification with 95% accuracy, integrated IoT sensors for real-time waste detection, and created a Python-based control system for automated segregation mechanisms. The system includes a monitoring dashboard for waste analytics, reduces manual sorting time by 80%, and contributes to environmental sustainability through efficient recycling processes.',
    tech: ['Python', 'TensorFlow', 'IoT', 'Computer Vision'],
    category: 'AI/ML',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-6 md:mt-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full"
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
              Projects
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-gray-100 mb-3 sm:mb-4 max-w-3xl leading-tight"
          >
            Turning ideas into
            <span className="text-gradient block mt-2 md:mt-3">scalable products</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className="group relative w-full h-full"
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-0.5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.4))`
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Card Container */}
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative w-full h-full glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex flex-col backdrop-blur-xl border border-white/10 group-hover:border-[#8b5cf6]/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileHover={{ opacity: 0.1, x: 100 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}
                  />

                  {/* Floating particles effect - Hidden on mobile */}
                  <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#8b5cf6] rounded-full opacity-0 group-hover:opacity-40"
                        initial={{ y: "100%", x: `${i * 30}%` }}
                        animate={{
                          y: ["-100%", "100%"],
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>

                  {/* Category badge with animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    className="inline-flex items-center gap-1.5 mb-2 sm:mb-3 self-start relative z-10 flex-wrap"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-2 h-2 rounded-full bg-[#8b5cf6] flex-shrink-0"
                    />
                    <span className="text-sm md:text-base text-[#8b5cf6] font-semibold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Title with gradient on hover */}
                  <motion.h3
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-100 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#6366f1] transition-all duration-300 relative z-10 leading-snug"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4 flex-grow relative z-10 line-clamp-5">
                    {project.description}
                  </p>

                  {/* Tech stack with stagger animation */}
                  <div className="flex flex-wrap gap-2 sm:gap-2 relative z-10">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.15 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          boxShadow: "0 4px 20px rgba(139, 92, 246, 0.3)",
                        }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-gray-200 bg-white/5 rounded-full border border-[#8b5cf6]/30 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 cursor-default whitespace-nowrap"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


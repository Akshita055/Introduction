import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import SalesforceInternCert from '../assets/InternshipCertificates/SalesforceIntern.png';
import FrontendInternCert from '../assets/InternshipCertificates/FrontendIntern.png';
import DevOpsCert from '../assets/InternshipCertificates/DevOps-Certificate.png';

const experiences = [
  {
    role: 'Salesforce Developer Intern',
    company: 'Aiqube Technologies',
    period: 'May 2025 – July 2025',
    description: 'Developed custom Salesforce solutions, automated workflows using Flows, and implemented data management strategies.',
    highlights: [
      'Built custom Apex triggers and classes',
      'Designed automated workflows with Flow Builder',
      'Optimized SOQL queries for performance'
    ],
    certificate: {
      title: 'Salesforce Internship Certificate',
      issuer: 'Aiqube Technologies',
      image: SalesforceInternCert,
    },
  },
  {
    role: 'DevOps - Cloud Computing',
    company: 'JOVAC (GLA University & Coding Blocks)',
    period: 'June 2025 – July 2025',
    description: 'Completed a certified value-added course conducted by GLA University & Coding Blocks, focusing on CI/CD, automation, containerization, and cloud deployment.',
    highlights: [
      'Learned CI/CD pipeline development and automation',
      'Gained hands-on experience with containerization technologies',
      'Practiced cloud deployment strategies and best practices'
    ],
    certificate: {
      title: 'DevOps Certificate',
      issuer: 'JOVAC - GLA University',
      image: DevOpsCert,
    },
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Baoiam Innovations',
    period: 'June 2024 – July 2024',
    description: 'Created responsive web interfaces and collaborated with design teams to deliver pixel-perfect implementations.',
    highlights: [
      'Developed React components with TypeScript',
      'Implemented responsive designs with Tailwind CSS',
      'Integrated RESTful APIs and state management'
    ],
    certificate: {
      title: 'Frontend Internship Certificate',
      issuer: 'Baoiam Innovations',
      image: FrontendInternCert,
    },
  },
];

const Experience = () => {
  const [revealed, setRevealed] = useState(
    experiences.map((exp) => Boolean(exp.certificate) ? false : null)
  );
  const [fullScreenCert, setFullScreenCert] = useState(null);

  const handleReveal = (index) => {
    setFullScreenCert(index);
  };

  const closeFullScreen = () => {
    setFullScreenCert(null);
  };

  return (
    <section id="experience" className="relative py-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-6 md:mt-8">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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
              Training and Experience
            </span>
          </div>

          <div className="max-w-full">
            <div className="relative space-y-2 sm:space-y-3 pl-5 sm:pl-6 border-l-2 border-[#8b5cf6]/30">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-[#8b5cf6] via-[#6366f1] to-transparent origin-top"
                style={{ marginLeft: '-1px' }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="absolute -left-[25px] sm:-left-[33px] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#8b5cf6] ring-4 ring-dark-base group-hover:ring-[#8b5cf6]/20 transition-all duration-300"
                  />

                  <motion.div
                    whileHover={{ x: 10, boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)" }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-lg p-2.5 sm:p-3 md:p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`${exp.certificate ? 'grid md:grid-cols-[1fr_auto] gap-6 items-start' : ''}`}>
                      <div>
                        <div className="flex flex-col gap-2 mb-3">
                          <div>
                            <h3 className="text-base sm:text-lg font-display font-semibold text-gray-100 mb-0.5">
                              {exp.role}
                            </h3>
                            <p className="text-sm sm:text-base text-[#6366f1] font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                            className="text-[#8b5cf6] font-medium text-sm sm:text-base"
                          >
                            {exp.period}
                          </motion.span>
                        </div>

                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-2 sm:mb-3">
                          {exp.description}
                        </p>

                        <ul className="space-y-1 sm:space-y-1.5">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-1 sm:gap-1.5 text-sm sm:text-base text-gray-400"
                            >
                              <span className="text-[#8b5cf6] mt-1.5 flex-shrink-0">▹</span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {exp.certificate && (
                        <div className="mt-3 md:mt-0">
                          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/30 flex flex-col w-full max-w-xs md:max-w-[200px] lg:max-w-xs">
                            <div className="flex items-center justify-between px-2.5 py-2 bg-black/20">
                              <div className="flex-1 min-w-0 pr-1.5">
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 truncate">{exp.certificate.issuer}</p>
                                <p className="text-xs font-semibold text-gray-200 truncate">{exp.certificate.title}</p>
                              </div>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30 whitespace-nowrap text-nowrap">Preview</span>
                            </div>

                            <div 
                              className="relative h-48 sm:h-56 md:h-64 overflow-hidden border-t border-white/5 cursor-pointer group"
                              onClick={() => handleReveal(index)}
                            >
                              <img
                                src={exp.certificate.image}
                                alt={exp.certificate.title}
                                className="w-full h-full object-cover bg-white/5"
                                style={{ objectPosition: 'top center' }}
                              />
                              {/* Top half - clear */}
                              <div className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none" />
                              
                              {/* Bottom half - blurred with View button */}
                              <div className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-2xl bg-black/60 flex items-center justify-center">
                                <motion.div
                                  whileHover={{ scale: 1.08 }}
                                  className="flex items-center gap-1.5 px-4 py-2 bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white rounded-lg shadow-xl transition-all"
                                >
                                  <span className="text-sm font-medium">View</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Screen Certificate Modal */}
      {fullScreenCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFullScreen}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[90vh] cursor-default"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeFullScreen}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Certificate Info */}
            <div className="absolute -top-12 left-0 text-white">
              <p className="text-sm text-gray-400">{experiences[fullScreenCert].certificate.issuer}</p>
              <p className="text-lg font-semibold">{experiences[fullScreenCert].certificate.title}</p>
            </div>

            {/* Certificate Image */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="rounded-xl overflow-hidden border-2 border-[#8b5cf6]/30 shadow-2xl bg-white"
            >
              <img
                src={experiences[fullScreenCert].certificate.image}
                alt={experiences[fullScreenCert].certificate.title}
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Hint text */}
            <p className="text-center text-gray-400 text-sm mt-4">Click anywhere to close</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;


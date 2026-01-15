import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const About = () => {
  return (
    <section id="about" className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-[#8b5cf6] to-transparent"
            />
            <span className="text-[#8b5cf6] font-medium tracking-wider text-[10px] sm:text-xs uppercase">
              About
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Content */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-5 order-2 lg:order-1"
            >
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-gray-100 leading-tight">
                Building with intention,
                <span className="text-gradient block mt-2">
                  shipping with confidence
                </span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed">
                <p>
                  I'm a developer who believes great software is both functional and beautiful. 
                  My work spans frontend interfaces, Salesforce automation, and DevOps workflows—always 
                  with a focus on clarity and user experience.
                </p>

                <p>
                  Currently pursuing my B.Tech in Computer Science at GLA University, I've worked 
                  on projects ranging from AI-powered systems to e-commerce platforms. I enjoy the 
                  challenge of turning complex problems into elegant, scalable solutions.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new design patterns, contributing 
                  to open source, or experimenting with the latest web technologies.
                </p>
              </div>
            </motion.div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#6366f1]/20 rounded-2xl blur-2xl sm:blur-3xl" />
                <div className="relative glass rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
                      <span className="text-gray-300 font-medium text-sm sm:text-base">Currently Learning</span>
                    </div>
                    <ul className="space-y-2 text-gray-400 ml-5 text-sm sm:text-base">
                      <li>Building more Salesforce based projects</li>
                      <li>Other backend tools and components</li>
                      <li>System design principles</li>
                      <li>Cloud architecture</li>
                    </ul>
                  </div>

                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="text-gray-300 font-medium text-sm sm:text-base">Interests</span>
                    </div>
                    <ul className="space-y-2 text-gray-400 ml-5 text-sm sm:text-base">
                      <li>Motion design & animations</li>
                      <li>Developer tools</li>
                      <li>AI/ML applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


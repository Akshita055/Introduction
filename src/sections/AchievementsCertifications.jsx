import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from '../components/ui/card-hover-effect';
import SpectraCert from '../assets/Achievements/SpectraCertificate.png';
import SIHCert from '../assets/Achievements/SIH2K24.jpg';
import TechstarsCert from '../assets/Achievements/Techstars2K25.jpg';
import SoftwareEngCert from '../assets/certifications/SoftwareEngineering.png';
import EnvEngCert from '../assets/certifications/Environmental Engineering.png';
import DevOpsCert from '../assets/certifications/DevOps-Certificate.png';
import EBusinessCert from '../assets/certifications/E-Bussiness.png';
import MISCert from '../assets/certifications/Management-Information-System.png';
import PostmanCert from '../assets/certifications/Postman-API-certificate.png';

const achievements = [
  {
    title: 'Winner – Spectra 3.0 Hackathon',
    description: 'Secured first place in Spectra 3.0, a highly competitive inter-college hackathon. Developed an innovative solution addressing real-world challenges with cutting-edge technology, demonstrating strong problem-solving skills and technical expertise.',
    image: SpectraCert,
    link: SpectraCert,
  },
  {
    title: 'Smart India Hackathon 2024',
    description: 'Selected as national-level participant in Smart India Hackathon 2024, India\'s largest hackathon initiative. Collaborated with team to build solutions for government challenges, showcasing innovation and technical excellence on a national platform.',
    image: SIHCert,
    link: SIHCert,
  },
  {
    title: 'Techstars Startup Weekend 2025',
    description: 'Participated in Techstars Startup Weekend, an intensive 54-hour entrepreneurship event. Built and pitched a complete startup idea from concept to MVP, gaining valuable experience in rapid prototyping, team collaboration, and business strategy.',
    image: TechstarsCert,
    link: TechstarsCert,
  }
];

const certifications = [
  {
    title: 'Software Engineering',
    provider: 'NPTEL',
    image: SoftwareEngCert,
  },
  {
    title: 'Environmental Engineering',
    provider: 'NPTEL',
    image: EnvEngCert,
  },
  {
    title: 'DevOps',
    provider: 'Value Added Course',
    image: DevOpsCert,
  },
  {
    title: 'E-Business',
    provider: 'NPTEL',
    image: EBusinessCert,
  },
  {
    title: 'Management Information System',
    provider: 'NPTEL',
    image: MISCert,
  },
  {
    title: 'Postman API',
    provider: 'Postman',
    image: PostmanCert,
  }
];

const AchievementsCertifications = () => {
  return (
    <section className="relative py-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-6 md:mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Achievements Section */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-[#8b5cf6] to-transparent"
              />
              <span className="text-[#8b5cf6] font-medium tracking-wider text-xs sm:text-sm uppercase">
                Achievements
              </span>
            </div>

            <HoverEffect items={achievements} />
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-[#8b5cf6] to-transparent"
              />
              <span className="text-[#8b5cf6] font-medium tracking-wider text-xs sm:text-sm uppercase">
                Certifications
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 group-hover:border-[#8b5cf6]/50">
                    {/* Certificate Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-40 sm:h-48 md:h-52 overflow-hidden bg-black/50"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    {/* Certificate Details */}
                    <div className="p-3 sm:p-4 md:p-5">
                      <h3 className="text-sm sm:text-base font-display font-semibold text-gray-100 mb-1.5 group-hover:text-[#8b5cf6] transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-[#6366f1] font-medium">
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsCertifications;


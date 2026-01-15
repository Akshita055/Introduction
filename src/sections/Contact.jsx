import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { ContainerScroll } from '../components/ui/container-scroll-animation';

// Icon components
const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const contactItems = [
  {
    label: 'Email',
    value: 'akshitasingh0521@gmail.com',
    href: 'mailto:akshitasingh0521@gmail.com',
    icon: MailIcon,
  },
  {
    label: 'Phone',
    value: '+91 7458868344',
    href: 'tel:+917458868344',
    icon: PhoneIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/akshita-singh--',
    href: 'https://www.linkedin.com/in/akshita-singh--/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/Akshita055',
    href: 'https://github.com/Akshita055',
    icon: GitHubIcon,
  },
  {
    label: 'Instagram',
    value: '@akshitachauhan.05',
    href: 'https://www.instagram.com/akshitachauhan.05/',
    icon: InstagramIcon,
  },
  {
    label: 'X (Twitter)',
    value: '@AkshitaSin19914',
    href: 'https://x.com/AkshitaSin19914',
    icon: XIcon,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-10 sm:py-12 px-0">
      <ContainerScroll
        titleComponent={
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-0 mb-20 sm:mb-16 md:mb-12 lg:mb-8"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="h-px w-8 sm:w-10 bg-gradient-to-r from-[#8b5cf6] to-transparent" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8b5cf6] font-medium">Contact</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-gray-100 leading-tight">
              Let's build
              <span className="text-gradient block mt-2">calm, engineered products</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Ready to collaborate on frontend, Salesforce, or DevOps projects. Drop a note and let's turn ideas into scalable, elegant experiences.
            </p>
          </motion.div>
        }
      >
        <div className="bg-black/30">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="space-y-3 sm:space-y-4">
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-400">Preferred channel</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-100">Email</p>
                  </div>
                  <a
                    href="mailto:akshitasingh0521@gmail.com"
                    className="w-full sm:w-auto px-4 py-2 bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white text-sm font-medium rounded-lg transition-colors text-center"
                  >
                    Say Hello
                  </a>
                </div>
                <div className="h-px w-full bg-white/5 mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {contactItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col gap-1 p-2.5 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-[#8b5cf6] group-hover:scale-110 transition-transform">
                            <IconComponent />
                          </div>
                          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">{item.label}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-200 group-hover:text-[#8b5cf6] transition-colors ml-6 break-all">{item.value}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 flex flex-col gap-4 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-gray-300 font-medium">Available for internships & freelance collaborations</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Frontend', 'Salesforce', 'DevOps'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-lg flex flex-col justify-between min-h-full">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">Let's talk about your idea</p>
                </div>
                <div className="grid gap-3 sm:gap-4 text-gray-300 text-xs sm:text-sm">
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed">Share a quick brief on your project, timeline, and goals. I respond within 24 hours.</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mb-1">Response time</p>
                      <p className="text-xs sm:text-sm text-gray-100 font-semibold">&lt; 24 Hours</p>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mb-1">Preferred</p>
                      <p className="text-xs sm:text-sm text-gray-100 font-semibold">Email or LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <a
                  href="mailto:akshitasingh0521@gmail.com"
                  className="inline-flex items-center justify-center w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white text-sm sm:text-base font-medium rounded-lg transition-colors shadow-lg hover:shadow-[#8b5cf6]/25"
                >
                  Write an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Contact;

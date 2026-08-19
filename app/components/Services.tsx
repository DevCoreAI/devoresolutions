'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Solicitation Identification',
    description:
      'We continuously monitor federal procurement databases to identify government solicitations set aside for small businesses that align with your capabilities and market position.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Bid Packaging & Compliance',
    description:
      'We structure and position opportunities for partner businesses — preparing compliant, competitive bid packages that meet all federal requirements and maximize your chances of award.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'SAM.gov Submission',
    description:
      'We manage the full proposal submission process through the System for Award Management (SAM.gov) portal — handling all technical requirements from registration through final submission.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            End-to-End Federal Contracting Services
          </h2>
          <div className="w-16 h-1 gradient-primary rounded-full" />
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We manage the complete federal contracting lifecycle — so you can focus on delivering, not navigating government procurement.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Step indicator */}
              <p className="text-cyan-500 text-xs font-bold tracking-widest uppercase mb-2">
                Step {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Ready to enter the federal marketplace?</h3>
            <p className="text-cyan-100 text-sm">We only engage when the opportunity makes real business sense for you.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-7 py-3 bg-white text-cyan-700 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg text-sm"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

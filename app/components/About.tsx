'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Identify Opportunities',
    desc: 'We scan federal solicitation databases to find contracts set aside for small businesses that match your capabilities.',
  },
  {
    num: '02',
    title: 'Package & Structure Bids',
    desc: 'We craft compliant, competitive bid packages — positioning your expertise to meet all government requirements.',
  },
  {
    num: '03',
    title: 'Submit via SAM.gov',
    desc: 'We handle the full submission process through the System for Award Management portal, end to end.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            A Certified Partner in Federal Contracting
          </h2>
          <div className="w-16 h-1 gradient-primary rounded-full" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — who we are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              DevCore Solutions LLC is a Maryland-registered small business certified by the U.S. Small Business Administration as a <strong className="text-gray-900 dark:text-white">Women-Owned Small Business (WOSB)</strong> and <strong className="text-gray-900 dark:text-white">Economically Disadvantaged Women-Owned Small Business (EDWOSB)</strong>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our mission is to pursue and secure federal contracts set aside for small businesses — delivering essential services to government agencies. When a solicitation requires capabilities beyond what we hold in-house, we partner with qualified businesses like yours to bring that expertise into the federal marketplace.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We engage only when the opportunity genuinely aligns with your interests and makes sound economic sense for your business.
            </p>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['WOSB Certified', 'EDWOSB Certified', 'Maryland Registered', 'SAM.gov Active'].map(label => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — process timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-8">How We Work</p>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="flex gap-5 relative"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                  )}

                  {/* Step number bubble */}
                  <div className="shrink-0 w-10 h-10 gradient-primary rounded-full flex items-center justify-center shadow-md shadow-cyan-500/20 z-10">
                    <span className="text-white text-xs font-bold">{step.num}</span>
                  </div>

                  {/* Text */}
                  <div className="pb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

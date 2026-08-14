'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-secondary">
            Our Mission
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900 mb-12"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 text-balance">
              Our core mission is to pursue and secure federal contracts set aside for small businesses, delivering essential services to government agencies. When a solicitation requires capabilities or resources beyond what we hold in-house, we partner with qualified businesses like yours to bring that expertise directly into the federal marketplace — engaging only when the opportunity aligns with your interests and makes sound economic sense for your business.
            </p>
            
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed text-balance">
              We manage this process end-to-end: identifying relevant government solicitations, structuring competitive and compliant bid packages, and submitting proposals through the System for Award Management (SAM.gov) portal.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-purple-100 dark:border-purple-900"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">Our Process</h3>
            <div className="space-y-8">
              <motion.div
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                >
                  <span className="text-white font-bold text-xl">1</span>
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Identify Opportunities</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Finding relevant government solicitations that match your capabilities and business goals</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="w-14 h-14 gradient-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                >
                  <span className="text-white font-bold text-xl">2</span>
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Structure Bids</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Creating competitive and compliant packages that meet all government requirements</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                >
                  <span className="text-white font-bold text-xl">3</span>
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Submit Proposals</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Handling complete submission process through the SAM.gov portal</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

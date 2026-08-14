'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-linear-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 15, 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-primary">
            About Us
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-cyan-100 dark:border-cyan-900 mb-12"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed text-balance">
              DevCore Solutions LLC is a Maryland-registered small business certified by the U.S. Small Business Administration as a Women-Owned Small Business (WOSB) and Economically Disadvantaged Women-Owned Small Business (EDWOSB).
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-2 border-cyan-200 dark:border-cyan-800 group"
            >
              <motion.div
                className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">WOSB Certified</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Women-Owned Small Business certification by the U.S. Small Business Administration</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-2 border-purple-200 dark:border-purple-800 group"
            >
              <motion.div
                className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">EDWOSB Certified</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Economically Disadvantaged Women-Owned Small Business certification</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

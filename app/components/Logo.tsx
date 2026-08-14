'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
}

const sizeClasses = {
  sm: { width: '80px', height: 'auto' },
  md: { width: '120px', height: 'auto' },
  lg: { width: '160px', height: 'auto' },
  xl: { width: '200px', height: 'auto' },
};

const themeClasses = {
  light: { text: 'text-gray-900', icon: 'text-cyan-500' },
  dark: { text: 'text-white', icon: 'text-cyan-400' },
};

export default function Logo({ variant = 'full', size = 'md', theme = 'light' }: LogoProps) {
  const sizeClass = sizeClasses[size];
  const themeClass = themeClasses[theme];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
      style={{ width: sizeClass.width }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        initial={{ rotate: -180 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4;#3b82f6;#06b6d4" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#06b6d4;#8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {variant === 'icon' ? (
          <>
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#primaryGradient)"
              strokeWidth="6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              filter="url(#glow)"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="url(#secondaryGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="32"
              fill="url(#accentGradient)"
              fillOpacity="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 35 50 L 45 60 L 65 40"
              fill="none"
              stroke="url(#primaryGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
              filter="url(#innerGlow)"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="url(#primaryGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              filter="url(#glow)"
            />
          </>
        ) : (
          <>
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#primaryGradient)"
              strokeWidth="5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              filter="url(#glow)"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="url(#secondaryGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="32"
              fill="url(#accentGradient)"
              fillOpacity="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 35 50 L 45 60 L 65 40"
              fill="none"
              stroke="url(#primaryGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
              filter="url(#innerGlow)"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="url(#primaryGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              filter="url(#glow)"
            />
          </>
        )}
      </motion.svg>
      
      {variant === 'full' && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col"
        >
          <span className={`text-lg font-bold tracking-tight ${themeClass.text}`}>
            DevCore
          </span>
          <span className={`text-xs font-medium tracking-wide ${themeClass.text} opacity-80`}>
            Solutions
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-40 w-14 h-14 bg-paper-white dark:bg-gray-700 rounded-full shadow-lg border-2 border-kraft/20 dark:border-lavender/20 flex items-center justify-center transition-all duration-300 hover:shadow-xl"
      title={theme === 'light' ? 'Switch to Moodboard Mode' : 'Switch to Sketchbook Mode'}
    >
      <motion.div
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <SafeIcon 
          icon={theme === 'light' ? FiMoon : FiSun} 
          className={`w-6 h-6 ${theme === 'light' ? 'text-denim' : 'text-lavender'}`} 
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
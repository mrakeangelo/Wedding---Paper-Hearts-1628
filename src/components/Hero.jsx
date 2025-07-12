import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-blush/30 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blush/30 dark:text-lavender/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Polaroid Photo */}
        <motion.div
          initial={{ y: -100, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mb-8 w-80 h-96 max-w-full"
        >
          <div className="polaroid-shadow bg-paper-white dark:bg-gray-700 p-4 pb-12 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-64 bg-gradient-to-br from-blush/50 to-denim/50 rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
                alt="Couple"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-handwritten text-ink-dark dark:text-lavender text-lg">
                Sarah & Michael 💕
              </p>
            </div>
          </div>
          
          {/* Washi Tape Corner */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-denim to-denim/80 rounded-full transform rotate-12 flex items-center justify-center"
          >
            <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1 
              className="font-handwritten text-4xl md:text-6xl text-ink-dark dark:text-lavender font-bold handwritten-underline"
              animate={{ rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              We're Getting Married!
            </motion.h1>
            <p className="font-serif text-lg md:text-xl text-pencil-gray dark:text-gray-300 italic">
              Join us as we begin our forever adventure together
            </p>
          </div>

          {/* Wedding Details Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-paper-white dark:bg-gray-700 rounded-lg p-4 shadow-lg border-2 border-kraft/20 dark:border-lavender/20 washi-tape"
            >
              <SafeIcon icon={FiCalendar} className="w-6 h-6 text-denim mx-auto mb-2" />
              <p className="font-handwritten text-kraft dark:text-lavender font-bold">June 15, 2024</p>
              <p className="text-sm text-pencil-gray dark:text-gray-300">Save the Date</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-paper-white dark:bg-gray-700 rounded-lg p-4 shadow-lg border-2 border-kraft/20 dark:border-lavender/20 washi-tape"
            >
              <SafeIcon icon={FiMapPin} className="w-6 h-6 text-blush mx-auto mb-2" />
              <p className="font-handwritten text-kraft dark:text-lavender font-bold">Garden Venue</p>
              <p className="text-sm text-pencil-gray dark:text-gray-300">Sunset Hills</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-paper-white dark:bg-gray-700 rounded-lg p-4 shadow-lg border-2 border-kraft/20 dark:border-lavender/20 washi-tape"
            >
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-lavender mx-auto mb-2" />
              <p className="font-handwritten text-kraft dark:text-lavender font-bold">4:00 PM</p>
              <p className="text-sm text-pencil-gray dark:text-gray-300">Ceremony</p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12"
          >
            <p className="font-handwritten text-kraft dark:text-lavender">
              Scroll down to explore our scrapbook ↓
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
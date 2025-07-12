import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiStar } = FiIcons;

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Confetti animation
    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.className = 'fixed pointer-events-none z-50';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
      confetti.innerHTML = ['💕', '🎉', '✨', '🌟', '🎊'][Math.floor(Math.random() * 5)];
      
      document.body.appendChild(confetti);
      
      let pos = -10;
      const fall = setInterval(() => {
        pos += 2;
        confetti.style.top = pos + 'px';
        
        if (pos > window.innerHeight) {
          clearInterval(fall);
          document.body.removeChild(confetti);
        }
      }, 20);
    };

    const confettiInterval = setInterval(createConfetti, 200);
    
    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-blush/30 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-20 text-8xl">💕</div>
        <div className="absolute top-40 right-40 text-6xl">🎉</div>
        <div className="absolute bottom-40 left-40 text-7xl">✨</div>
        <div className="absolute bottom-20 right-20 text-5xl">🌟</div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Main Thank You Card */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-paper-white dark:bg-gray-700 rounded-lg shadow-2xl p-12 border-2 border-kraft/20 dark:border-lavender/20 polaroid-shadow"
        >
          {/* Animated Heart */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            💕
          </motion.div>

          {/* Thank You Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-6 handwritten-underline"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-lg text-pencil-gray dark:text-gray-300 mb-8 leading-relaxed"
          >
            Your message has been sent successfully! We're so grateful for your love and support 
            as we begin this beautiful journey together. Your presence in our lives means the world to us.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center"
            >
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-br from-lavender to-kraft rounded-full flex items-center justify-center"
            >
              <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blush to-denim text-white px-8 py-4 rounded-full font-handwritten text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiHome} className="w-5 h-5" />
            <span>Back to Our Story</span>
          </motion.button>
        </motion.div>

        {/* Floating Stickers */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
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
              {['💕', '🎉', '✨', '🌟', '🎊', '🌸', '🦋', '💐'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
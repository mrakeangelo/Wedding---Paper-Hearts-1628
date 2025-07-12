import React from 'react';
import { motion } from 'framer-motion';

const FloatingStickers = () => {
  const stickers = ['💕', '🌸', '✨', '🦋', '🌺', '💐'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stickers.map((sticker, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20 dark:opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          {sticker}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingStickers;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiSmile, FiArrowLeft, FiArrowRight } = FiIcons;

const OurStory = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const storyPages = [
    {
      title: "How We Met",
      date: "September 2019",
      content: "It was a rainy Tuesday at the local coffee shop. Sarah was reading her favorite book, and Michael accidentally spilled coffee on her table. What started as an embarrassing moment turned into a 3-hour conversation about books, dreams, and life.",
      image: "https://images.unsplash.com/photo-1495854806227-130dc6c5c6d9?w=400&h=300&fit=crop",
      icon: FiHeart,
      color: "blush"
    },
    {
      title: "First Date",
      date: "October 2019",
      content: "Our first official date was at the farmer's market. We spent the entire day trying different foods, buying flowers, and laughing until our stomachs hurt. Michael bought Sarah a small succulent that she still keeps on her windowsill.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      icon: FiStar,
      color: "denim"
    },
    {
      title: "Moving In",
      date: "March 2021",
      content: "After a year and a half of dating, we decided to move in together. It was chaos - boxes everywhere, furniture that didn't fit, and way too many kitchen gadgets. But we made it work, and our little apartment became our favorite place in the world.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      icon: FiSmile,
      color: "lavender"
    },
    {
      title: "The Proposal",
      date: "December 2023",
      content: "Michael proposed at the same coffee shop where we first met. He had coordinated with the staff to recreate our first encounter, complete with the 'accidental' coffee spill. Sarah said yes before he even finished asking the question!",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop",
      icon: FiHeart,
      color: "kraft"
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % storyPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + storyPages.length) % storyPages.length);
  };

  return (
    <section id="our-story" className="py-20 bg-paper-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 text-6xl">✨</div>
        <div className="absolute top-20 right-20 text-4xl">💕</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌸</div>
        <div className="absolute bottom-10 right-10 text-3xl">⭐</div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-4 handwritten-underline">
            Our Scrapbook
          </h2>
          <p className="font-serif text-lg text-pencil-gray dark:text-gray-300 italic">
            The story of how we fell in love, one page at a time
          </p>
        </motion.div>

        {/* Story Book */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="bg-cream dark:bg-gray-700 rounded-lg shadow-2xl overflow-hidden torn-edge"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 md:h-96">
                  <img
                    src={storyPages[currentPage].image}
                    alt={storyPages[currentPage].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Polaroid Frame Effect */}
                  <div className="absolute inset-4 border-8 border-white dark:border-gray-600 shadow-lg transform rotate-1">
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center">
                      <SafeIcon 
                        icon={storyPages[currentPage].icon} 
                        className="w-4 h-4 text-white" 
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 bg-notebook-lines">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-8 h-8 rounded-full bg-${storyPages[currentPage].color} flex items-center justify-center`}
                      >
                        <SafeIcon 
                          icon={storyPages[currentPage].icon} 
                          className="w-4 h-4 text-white" 
                        />
                      </motion.div>
                      <span className="font-handwritten text-sm text-kraft dark:text-lavender">
                        {storyPages[currentPage].date}
                      </span>
                    </div>

                    <h3 className="font-handwritten text-2xl md:text-3xl text-ink-dark dark:text-lavender font-bold">
                      {storyPages[currentPage].title}
                    </h3>

                    <p className="font-serif text-pencil-gray dark:text-gray-300 leading-relaxed">
                      {storyPages[currentPage].content}
                    </p>

                    {/* Doodle Elements */}
                    <div className="flex justify-end space-x-2 mt-6">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-blush text-xl"
                      >
                        ✨
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-denim text-xl"
                      >
                        💕
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              className="flex items-center space-x-2 px-4 py-2 bg-blush dark:bg-denim text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
              <span className="font-handwritten">Previous</span>
            </motion.button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {storyPages.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPage 
                      ? 'bg-kraft dark:bg-lavender' 
                      : 'bg-kraft/30 dark:bg-lavender/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="flex items-center space-x-2 px-4 py-2 bg-blush dark:bg-denim text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span className="font-handwritten">Next</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
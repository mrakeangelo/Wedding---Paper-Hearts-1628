import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight, FiHeart } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      caption: "Our engagement photos at the beach",
      date: "December 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      caption: "Cozy winter date night",
      date: "January 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      caption: "Hiking adventure in the mountains",
      date: "March 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      caption: "Cooking together at home",
      date: "April 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=400&fit=crop",
      caption: "Dancing at our friend's wedding",
      date: "May 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
      caption: "Picnic in the park",
      date: "June 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
      caption: "Game night with friends",
      date: "July 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop",
      caption: "Concert under the stars",
      date: "August 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1521543698246-f86fa593d8eb?w=600&h=400&fit=crop",
      caption: "Farmers market Sunday",
      date: "September 2024"
    }
  ];

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-kraft/10 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-4 handwritten-underline">
            Our Photo Gallery
          </h2>
          <p className="font-serif text-lg text-pencil-gray dark:text-gray-300 italic">
            Memories pinned to our corkboard of love
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 4 - 2,
                zIndex: 10
              }}
              className="relative cursor-pointer group"
              onClick={() => openImage(image, index)}
            >
              {/* Polaroid Frame */}
              <div className="bg-paper-white dark:bg-gray-700 p-4 pb-8 rounded-lg shadow-xl polaroid-shadow transform transition-all duration-300">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Caption */}
                <div className="mt-3 text-center">
                  <p className="font-handwritten text-ink-dark dark:text-lavender text-sm font-medium">
                    {image.caption}
                  </p>
                  <p className="font-serif text-xs text-pencil-gray dark:text-gray-400 mt-1">
                    {image.date}
                  </p>
                </div>

                {/* Decorative Pin */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blush to-denim rounded-full shadow-lg"></div>
              </div>

              {/* Washi Tape */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-lavender to-kraft rounded-full opacity-70 transform rotate-45"></div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeImage}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full bg-paper-white dark:bg-gray-700 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="p-6">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.caption}
                    className="w-full h-auto max-h-96 object-contain rounded-lg"
                  />
                  
                  {/* Caption */}
                  <div className="mt-4 text-center">
                    <p className="font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                      {selectedImage.caption}
                    </p>
                    <p className="font-serif text-pencil-gray dark:text-gray-400 mt-1">
                      {selectedImage.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiExternalLink, FiHeart, FiHome, FiCoffee, FiCamera, FiMapPin, FiBook } = FiIcons;

const Registry = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const registryItems = [
    {
      id: 1,
      name: "KitchenAid Stand Mixer",
      price: "$349.99",
      category: "kitchen",
      description: "Perfect for baking all our favorite treats together",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      store: "Williams Sonoma",
      purchased: false,
      icon: FiCoffee
    },
    {
      id: 2,
      name: "Cozy Throw Blanket Set",
      price: "$89.99",
      category: "home",
      description: "For movie nights and lazy Sunday mornings",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      store: "Pottery Barn",
      purchased: true,
      icon: FiHome
    },
    {
      id: 3,
      name: "Instant Camera",
      price: "$199.99",
      category: "fun",
      description: "To capture spontaneous moments and memories",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
      store: "Best Buy",
      purchased: false,
      icon: FiCamera
    },
    {
      id: 4,
      name: "Honeymoon Fund",
      price: "Any Amount",
      category: "experience",
      description: "Help us create magical memories in Italy",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop",
      store: "Honeyfund",
      purchased: false,
      icon: FiMapPin
    },
    {
      id: 5,
      name: "Recipe Book Collection",
      price: "$45.99",
      category: "kitchen",
      description: "To expand our culinary adventures together",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop",
      store: "Amazon",
      purchased: false,
      icon: FiBook
    },
    {
      id: 6,
      name: "Date Night Experiences",
      price: "$150.00",
      category: "experience",
      description: "Wine tasting, cooking classes, and more adventures",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop",
      store: "Local Experiences",
      purchased: false,
      icon: FiHeart
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: FiGift },
    { id: 'kitchen', name: 'Kitchen', icon: FiCoffee },
    { id: 'home', name: 'Home', icon: FiHome },
    { id: 'fun', name: 'Fun', icon: FiCamera },
    { id: 'experience', name: 'Experiences', icon: FiMapPin }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? registryItems 
    : registryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="registry" className="py-20 bg-cream dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-4 handwritten-underline">
            Gift Registry
          </h2>
          <p className="font-serif text-lg text-pencil-gray dark:text-gray-300 italic">
            Help us start our new life together with these thoughtful gifts
          </p>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-paper-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-2 border-kraft/20 dark:border-lavender/20 mb-12 max-w-2xl mx-auto washi-tape"
        >
          <div className="flex items-center space-x-3 mb-3">
            <SafeIcon icon={FiHeart} className="w-6 h-6 text-blush" />
            <h3 className="font-handwritten text-ink-dark dark:text-lavender text-xl font-bold">
              A Note from the Couple
            </h3>
          </div>
          <p className="font-serif text-pencil-gray dark:text-gray-300">
            Your presence at our wedding is the greatest gift of all! If you'd like to contribute to our new life together, 
            we've curated a list of items that would help us build our home and create memories.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-handwritten text-lg font-bold transition-all ${
                selectedCategory === category.id
                  ? 'bg-denim text-white shadow-lg'
                  : 'bg-paper-white dark:bg-gray-700 text-ink-dark dark:text-lavender hover:bg-blush/20 dark:hover:bg-denim/20'
              }`}
            >
              <SafeIcon icon={category.icon} className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Registry Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 4 - 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
              className="relative"
            >
              <div className={`bg-paper-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden border-2 border-kraft/20 dark:border-lavender/20 polaroid-shadow ${
                item.purchased ? 'opacity-75' : ''
              }`}>
                {/* Item Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Purchased Overlay */}
                  {item.purchased && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3">
                        <SafeIcon icon={FiHeart} className="w-6 h-6 text-blush" />
                      </div>
                    </div>
                  )}

                  {/* Category Icon */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center">
                    <SafeIcon icon={item.icon} className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Item Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-handwritten text-ink-dark dark:text-lavender text-lg font-bold">
                      {item.name}
                    </h3>
                    <span className="font-serif text-denim dark:text-lavender font-bold">
                      {item.price}
                    </span>
                  </div>

                  <p className="font-serif text-pencil-gray dark:text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="font-handwritten text-kraft dark:text-lavender text-sm">
                      {item.store}
                    </span>
                    
                    {item.purchased ? (
                      <div className="flex items-center space-x-2 text-blush">
                        <SafeIcon icon={FiHeart} className="w-4 h-4" />
                        <span className="font-handwritten text-sm">Thank you!</span>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blush to-denim text-white px-4 py-2 rounded-full text-sm font-handwritten font-bold hover:shadow-lg transition-all"
                      >
                        <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                        <span>View Item</span>
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-2 right-2 opacity-20 dark:opacity-10">
                  <div className="w-3 h-3 bg-gradient-to-br from-lavender to-kraft rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registry Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-paper-white dark:bg-gray-700 rounded-lg p-8 shadow-xl border-2 border-kraft/20 dark:border-lavender/20 max-w-2xl mx-auto">
            <h3 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold mb-6">
              View Full Registry
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Amazon', 'Target', 'Williams Sonoma', 'Pottery Barn'].map((store) => (
                <motion.a
                  key={store}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-kraft to-denim text-white px-6 py-3 rounded-full font-handwritten font-bold hover:shadow-lg transition-all"
                >
                  <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  <span>{store}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;
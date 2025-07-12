import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiBookOpen, FiCalendar, FiCamera, FiMail, FiEdit3, FiGift, FiMenu, FiX } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: FiHeart },
    { id: 'our-story', label: 'Our Story', icon: FiBookOpen },
    { id: 'wedding-info', label: 'Wedding', icon: FiCalendar },
    { id: 'gallery', label: 'Gallery', icon: FiCamera },
    { id: 'rsvp', label: 'RSVP', icon: FiMail },
    { id: 'guestbook', label: 'Guestbook', icon: FiEdit3 },
    { id: 'registry', label: 'Registry', icon: FiGift }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-paper-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-kraft/20 dark:border-lavender/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="text-2xl">💕</div>
            <span className="font-handwritten text-xl text-kraft dark:text-lavender font-bold">
              Paper Hearts
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                  activeSection === item.id
                    ? 'bg-blush dark:bg-denim text-white'
                    : 'text-ink-dark dark:text-lavender hover:bg-blush/20 dark:hover:bg-denim/20'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-blush/20 dark:bg-denim/20 text-ink-dark dark:text-lavender"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'bg-blush dark:bg-denim text-white'
                    : 'text-ink-dark dark:text-lavender hover:bg-blush/20 dark:hover:bg-denim/20'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
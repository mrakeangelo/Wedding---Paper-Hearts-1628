import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import ThankYou from './components/ThankYou';
import AdminPanel from './components/AdminPanel';
import ThemeToggle from './components/ThemeToggle';
import FloatingStickers from './components/FloatingStickers';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl mb-4 animate-bounce">💕</div>
          <p className="font-handwritten text-xl text-kraft dark:text-lavender">
            Preparing your scrapbook...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen bg-cream dark:bg-gray-900 bg-paper-texture transition-colors duration-300`}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <FloatingStickers />
        
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/" element={
            <main className="relative">
              <Navigation />
              <Hero />
              <OurStory />
              <WeddingInfo />
              <Gallery />
              <RSVP />
              <Guestbook />
              <Registry />
              <footer className="py-8 bg-kraft/10 dark:bg-gray-800 text-center">
                <p className="font-handwritten text-ink-dark dark:text-lavender">
                  Paper Hearts – A Scrapbook Wedding Template by{' '}
                  <span className="text-denim font-bold">Mrake Agency</span>
                </p>
              </footer>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
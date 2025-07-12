import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiUser, FiUsers, FiHeart, FiSend, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    dietary: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-paper-white dark:bg-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-cream dark:bg-gray-800 rounded-lg p-12 shadow-xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.8 }}
              className="text-6xl mb-6"
            >
              💕
            </motion.div>
            <h2 className="font-handwritten text-4xl text-ink-dark dark:text-lavender font-bold mb-4">
              Thank You!
            </h2>
            <p className="font-serif text-lg text-pencil-gray dark:text-gray-300">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-paper-white dark:bg-gray-700 notebook-cursor">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-4 handwritten-underline">
            RSVP
          </h2>
          <p className="font-serif text-lg text-pencil-gray dark:text-gray-300 italic">
            Please fill out this form by May 1st, 2024
          </p>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-cream dark:bg-gray-800 rounded-lg shadow-xl p-8 bg-notebook-lines border-2 border-kraft/20 dark:border-lavender/20">
            {/* Decorative Elements */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blush to-denim rounded-full"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-lavender to-kraft rounded-full"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                  <SafeIcon icon={FiUser} className="w-5 h-5" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-paper-white dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                  placeholder="Write your name here..."
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                  <SafeIcon icon={FiMail} className="w-5 h-5" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-paper-white dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Attendance */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                  <SafeIcon icon={FiHeart} className="w-5 h-5" />
                  <span>Will you be attending?</span>
                </label>
                <div className="flex space-x-4">
                  <motion.label 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="w-4 h-4 text-denim"
                    />
                    <span className="font-serif text-ink-dark dark:text-lavender">Yes, can't wait! 🎉</span>
                  </motion.label>
                  <motion.label 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="w-4 h-4 text-denim"
                    />
                    <span className="font-serif text-ink-dark dark:text-lavender">Sorry, can't make it 😢</span>
                  </motion.label>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attending === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  <label className="flex items-center space-x-2 font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                    <SafeIcon icon={FiUsers} className="w-5 h-5" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-paper-white dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                  >
                    <option value="1">Just me</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </motion.div>
              )}

              {/* Dietary Restrictions */}
              {formData.attending === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  <label className="font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                    Dietary Restrictions or Allergies
                  </label>
                  <textarea
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-paper-white dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                    placeholder="Let us know about any dietary needs..."
                  />
                </motion.div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <label className="font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                  Special Message for the Couple
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-paper-white dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                  placeholder="Write a sweet note or share your excitement..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blush to-denim text-white py-4 px-6 rounded-lg font-handwritten text-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                    <span>Send RSVP</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Decorative Doodles */}
            <div className="absolute bottom-4 right-4 opacity-20 dark:opacity-10">
              <div className="flex space-x-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-blush text-2xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-denim text-2xl"
                >
                  💕
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
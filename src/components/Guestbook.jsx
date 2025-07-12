import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit3, FiHeart, FiSmile, FiStar, FiPlus, FiSend } = FiIcons;

const Guestbook = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      name: "Emma & James",
      message: "So excited to celebrate with you both! Your love story is absolutely beautiful 💕",
      date: "2024-01-15",
      doodle: "💕"
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "We've watched your relationship grow and it's been amazing to see how perfect you are together!",
      date: "2024-01-14",
      doodle: "🌟"
    },
    {
      id: 3,
      name: "Sarah's College Friends",
      message: "From dorm room talks about your dream wedding to seeing it come true - we're so happy for you!",
      date: "2024-01-13",
      doodle: "🎉"
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    message: '',
    doodle: '💕'
  });

  const [showForm, setShowForm] = useState(false);

  const doodleOptions = ['💕', '🌟', '🎉', '🌸', '✨', '🦋', '🌺', '💐', '🎈', '🌙'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.name.trim() && newEntry.message.trim()) {
      const entry = {
        id: Date.now(),
        name: newEntry.name,
        message: newEntry.message,
        doodle: newEntry.doodle,
        date: new Date().toISOString().split('T')[0]
      };
      
      setEntries([entry, ...entries]);
      setNewEntry({ name: '', message: '', doodle: '💕' });
      setShowForm(false);
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-gradient-to-br from-lavender/20 to-blush/20 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-4 handwritten-underline">
            Guestbook
          </h2>
          <p className="font-serif text-lg text-pencil-gray dark:text-gray-300 italic">
            Leave a doodle, note, or memory for us to treasure
          </p>
        </motion.div>

        {/* Add Entry Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blush to-denim text-white px-8 py-4 rounded-full font-handwritten text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>Add Your Note</span>
          </motion.button>
        </motion.div>

        {/* Entry Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12"
            >
              <div className="max-w-2xl mx-auto bg-paper-white dark:bg-gray-700 rounded-lg shadow-xl p-8 border-2 border-kraft/20 dark:border-lavender/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={newEntry.name}
                      onChange={(e) => setNewEntry({...newEntry, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                      placeholder="Write your name..."
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                      Your Message
                    </label>
                    <textarea
                      value={newEntry.message}
                      onChange={(e) => setNewEntry({...newEntry, message: e.target.value})}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors font-serif"
                      placeholder="Share your thoughts, wishes, or memories..."
                    />
                  </div>

                  {/* Doodle Selection */}
                  <div className="space-y-2">
                    <label className="font-handwritten text-ink-dark dark:text-lavender text-lg font-medium">
                      Pick a Doodle
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {doodleOptions.map((doodle, index) => (
                        <motion.button
                          key={index}
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setNewEntry({...newEntry, doodle})}
                          className={`w-12 h-12 rounded-full text-2xl transition-all ${
                            newEntry.doodle === doodle
                              ? 'bg-denim text-white shadow-lg'
                              : 'bg-cream dark:bg-gray-600 hover:bg-blush/20 dark:hover:bg-denim/20'
                          }`}
                        >
                          {doodle}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-kraft to-denim text-white py-3 px-6 rounded-lg font-handwritten text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                    <span>Add to Guestbook</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guestbook Entries */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
              className="relative"
            >
              <div className="bg-paper-white dark:bg-gray-700 rounded-lg p-6 shadow-xl border-2 border-kraft/20 dark:border-lavender/20 polaroid-shadow">
                {/* Doodle Sticker */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center text-xl shadow-lg sticker-shine">
                  {entry.doodle}
                </div>

                {/* Entry Content */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiEdit3} className="w-5 h-5 text-denim" />
                    <h3 className="font-handwritten text-ink-dark dark:text-lavender font-bold text-lg">
                      {entry.name}
                    </h3>
                  </div>

                  <p className="font-serif text-pencil-gray dark:text-gray-300 leading-relaxed">
                    {entry.message}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="font-handwritten text-kraft dark:text-lavender text-sm">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-blush"
                    >
                      <SafeIcon icon={FiHeart} className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-2 left-2 opacity-20 dark:opacity-10">
                  <div className="w-4 h-4 bg-gradient-to-br from-lavender to-kraft rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="inline-block text-6xl opacity-20 dark:opacity-10"
          >
            💕
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMapPin, FiClock, FiMail, FiCamera, FiMusic } = FiIcons;

const WeddingInfo = () => {
  const weddingDetails = [
    {
      title: "Ceremony",
      icon: FiCalendar,
      details: [
        { label: "Date", value: "June 15, 2024" },
        { label: "Time", value: "4:00 PM" },
        { label: "Location", value: "Garden Venue, Sunset Hills" },
        { label: "Address", value: "123 Rose Garden Lane" }
      ],
      color: "blush",
      stamp: "💍"
    },
    {
      title: "Reception",
      icon: FiMusic,
      details: [
        { label: "Time", value: "6:00 PM - 12:00 AM" },
        { label: "Location", value: "The Grand Ballroom" },
        { label: "Dinner", value: "7:00 PM" },
        { label: "Dancing", value: "9:00 PM onwards" }
      ],
      color: "denim",
      stamp: "🎉"
    },
    {
      title: "Accommodation",
      icon: FiMapPin,
      details: [
        { label: "Hotel", value: "Sunset Hills Resort" },
        { label: "Rate", value: "$120/night (Group Rate)" },
        { label: "Code", value: "SARAH-MICHAEL" },
        { label: "Deadline", value: "May 15, 2024" }
      ],
      color: "lavender",
      stamp: "🏨"
    },
    {
      title: "What to Expect",
      icon: FiCamera,
      details: [
        { label: "Dress Code", value: "Garden Party Attire" },
        { label: "Weather", value: "Outdoor Ceremony" },
        { label: "Parking", value: "Free Valet Available" },
        { label: "Gifts", value: "Your presence is the best present!" }
      ],
      color: "kraft",
      stamp: "💐"
    }
  ];

  return (
    <section id="wedding-info" className="py-20 bg-gradient-to-br from-cream to-blush/20 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-handwritten text-4xl md:text-5xl text-ink-dark dark:text-lavender font-bold mb-4 handwritten-underline">
            Wedding Details
          </h2>
          <p className="font-serif text-lg text-pencil-gray dark:text-gray-300 italic">
            All the important information for our special day
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {weddingDetails.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative"
            >
              <div className="bg-paper-white dark:bg-gray-700 rounded-lg shadow-xl p-6 border-2 border-kraft/20 dark:border-lavender/20 polaroid-shadow">
                {/* Stamp Corner */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center text-xl transform rotate-12 shadow-lg">
                  {card.stamp}
                </div>

                {/* Card Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 rounded-full bg-${card.color} flex items-center justify-center`}>
                    <SafeIcon icon={card.icon} className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold">
                    {card.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  {card.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (detailIndex * 0.05) }}
                      className="flex justify-between items-center py-2 border-b border-kraft/10 dark:border-lavender/10"
                    >
                      <span className="font-serif text-pencil-gray dark:text-gray-300 font-medium">
                        {detail.label}:
                      </span>
                      <span className="font-handwritten text-ink-dark dark:text-lavender font-bold">
                        {detail.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-2 left-2 opacity-20 dark:opacity-10">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-kraft rounded-full"></div>
                    <div className="w-2 h-2 bg-blush rounded-full"></div>
                    <div className="w-2 h-2 bg-denim rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-paper-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-2 border-kraft/20 dark:border-lavender/20 washi-tape max-w-2xl mx-auto">
            <h3 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold mb-4">
              Important Notes
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-denim mt-1" />
                <p className="font-serif text-pencil-gray dark:text-gray-300">
                  Please arrive 15 minutes early for the ceremony
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-blush mt-1" />
                <p className="font-serif text-pencil-gray dark:text-gray-300">
                  RSVP by May 1st, 2024 - we can't wait to celebrate with you!
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiCamera} className="w-5 h-5 text-lavender mt-1" />
                <p className="font-serif text-pencil-gray dark:text-gray-300">
                  Unplugged ceremony - we'll have a photographer to capture every moment
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;
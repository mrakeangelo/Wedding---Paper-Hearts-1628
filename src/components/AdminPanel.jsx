import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiEye, FiEyeOff, FiSettings, FiHome, FiEdit3, FiSave, FiToggleLeft, FiToggleRight } = FiIcons;

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('overview');
  const [settings, setSettings] = useState({
    siteTitle: 'Paper Hearts',
    coupleNames: 'Sarah & Michael',
    weddingDate: '2024-06-15',
    venue: 'Garden Venue, Sunset Hills',
    passwordProtected: false,
    sitePassword: '',
    allowRSVP: true,
    allowGuestbook: true
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in real app, use proper auth)
    if (credentials.email === 'admin@paperhearts.com' && credentials.password === 'wedding2024') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSaveSettings = () => {
    // In real app, save to database
    alert('Settings saved successfully!');
  };

  const mockData = {
    rsvps: [
      { name: 'Emma & James', email: 'emma@example.com', attending: 'yes', guests: 2, date: '2024-01-15' },
      { name: 'The Johnson Family', email: 'johnson@example.com', attending: 'yes', guests: 4, date: '2024-01-14' },
      { name: 'Sarah Miller', email: 'sarah@example.com', attending: 'no', guests: 1, date: '2024-01-13' }
    ],
    guestbook: [
      { name: 'Emma & James', message: 'So excited to celebrate with you!', date: '2024-01-15' },
      { name: 'The Johnson Family', message: 'Your love story is beautiful!', date: '2024-01-14' }
    ],
    stats: {
      totalRSVPs: 15,
      attending: 12,
      declined: 3,
      guestbookEntries: 8
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream to-blush/30 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-paper-white dark:bg-gray-700 rounded-lg shadow-2xl p-8 w-full max-w-md border-2 border-kraft/20 dark:border-lavender/20"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiLock} className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-handwritten text-3xl text-ink-dark dark:text-lavender font-bold">
              Admin Panel
            </h1>
            <p className="font-serif text-pencil-gray dark:text-gray-300 mt-2">
              Sign in to manage your wedding website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-handwritten text-ink-dark dark:text-lavender font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-pencil-gray dark:text-gray-400" />
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                  placeholder="admin@paperhearts.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-handwritten text-ink-dark dark:text-lavender font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-pencil-gray dark:text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                  placeholder="wedding2024"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-pencil-gray dark:text-gray-400 hover:text-denim dark:hover:text-lavender"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blush to-denim text-white py-3 rounded-lg font-handwritten text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-denim dark:text-lavender hover:underline font-handwritten"
            >
              Back to Wedding Site
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      {/* Header */}
      <div className="bg-paper-white dark:bg-gray-800 shadow-lg border-b border-kraft/20 dark:border-lavender/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blush to-denim rounded-full flex items-center justify-center">
                <SafeIcon icon={FiSettings} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold">
                  Paper Hearts Admin
                </h1>
                <p className="text-pencil-gray dark:text-gray-400 text-sm">
                  Wedding Website Management
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-denim dark:text-lavender hover:bg-blush/20 dark:hover:bg-denim/20 px-4 py-2 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiHome} className="w-4 h-4" />
                <span className="font-handwritten">View Site</span>
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-gradient-to-r from-kraft to-denim text-white px-4 py-2 rounded-lg font-handwritten hover:shadow-lg transition-all"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total RSVPs', value: mockData.stats.totalRSVPs, color: 'blush' },
            { label: 'Attending', value: mockData.stats.attending, color: 'denim' },
            { label: 'Declined', value: mockData.stats.declined, color: 'kraft' },
            { label: 'Guestbook Entries', value: mockData.stats.guestbookEntries, color: 'lavender' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-paper-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-2 border-kraft/20 dark:border-lavender/20"
            >
              <div className="text-center">
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="font-handwritten text-ink-dark dark:text-lavender">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'rsvps', label: 'RSVPs' },
            { id: 'guestbook', label: 'Guestbook' },
            { id: 'settings', label: 'Settings' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-handwritten font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-denim text-white shadow-lg'
                  : 'bg-paper-white dark:bg-gray-700 text-ink-dark dark:text-lavender hover:bg-blush/20 dark:hover:bg-denim/20'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-paper-white dark:bg-gray-700 rounded-lg shadow-lg border-2 border-kraft/20 dark:border-lavender/20 p-6">
          {activeTab === 'rsvps' && (
            <div>
              <h2 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold mb-6">
                RSVP Responses
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-kraft/20 dark:border-lavender/20">
                      <th className="text-left py-3 font-handwritten text-ink-dark dark:text-lavender">Name</th>
                      <th className="text-left py-3 font-handwritten text-ink-dark dark:text-lavender">Email</th>
                      <th className="text-left py-3 font-handwritten text-ink-dark dark:text-lavender">Attending</th>
                      <th className="text-left py-3 font-handwritten text-ink-dark dark:text-lavender">Guests</th>
                      <th className="text-left py-3 font-handwritten text-ink-dark dark:text-lavender">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.rsvps.map((rsvp, index) => (
                      <tr key={index} className="border-b border-kraft/10 dark:border-lavender/10">
                        <td className="py-3 font-serif text-ink-dark dark:text-lavender">{rsvp.name}</td>
                        <td className="py-3 font-serif text-pencil-gray dark:text-gray-300">{rsvp.email}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            rsvp.attending === 'yes' 
                              ? 'bg-denim text-white' 
                              : 'bg-kraft text-white'
                          }`}>
                            {rsvp.attending === 'yes' ? 'Yes' : 'No'}
                          </span>
                        </td>
                        <td className="py-3 font-serif text-ink-dark dark:text-lavender">{rsvp.guests}</td>
                        <td className="py-3 font-serif text-pencil-gray dark:text-gray-300">{rsvp.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'guestbook' && (
            <div>
              <h2 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold mb-6">
                Guestbook Messages
              </h2>
              <div className="space-y-4">
                {mockData.guestbook.map((entry, index) => (
                  <div key={index} className="bg-cream dark:bg-gray-600 rounded-lg p-4 border border-kraft/20 dark:border-lavender/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-handwritten text-ink-dark dark:text-lavender font-bold">
                        {entry.name}
                      </h3>
                      <span className="text-pencil-gray dark:text-gray-400 text-sm">
                        {entry.date}
                      </span>
                    </div>
                    <p className="font-serif text-pencil-gray dark:text-gray-300">
                      {entry.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div>
              <h2 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold mb-6">
                Website Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-handwritten text-xl text-ink-dark dark:text-lavender font-bold">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-cream dark:bg-gray-600 rounded-lg">
                      <SafeIcon icon={FiUser} className="w-5 h-5 text-denim" />
                      <div>
                        <p className="font-serif text-ink-dark dark:text-lavender">New RSVP from Emma & James</p>
                        <p className="text-pencil-gray dark:text-gray-400 text-sm">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-cream dark:bg-gray-600 rounded-lg">
                      <SafeIcon icon={FiEdit3} className="w-5 h-5 text-blush" />
                      <div>
                        <p className="font-serif text-ink-dark dark:text-lavender">New guestbook entry</p>
                        <p className="text-pencil-gray dark:text-gray-400 text-sm">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-handwritten text-xl text-ink-dark dark:text-lavender font-bold">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-blush to-denim text-white py-3 rounded-lg font-handwritten font-bold hover:shadow-lg transition-all">
                      Export Guest List
                    </button>
                    <button className="w-full bg-gradient-to-r from-kraft to-denim text-white py-3 rounded-lg font-handwritten font-bold hover:shadow-lg transition-all">
                      Send Reminder Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="font-handwritten text-2xl text-ink-dark dark:text-lavender font-bold mb-6">
                Website Settings
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-handwritten text-ink-dark dark:text-lavender font-medium mb-2">
                        Site Title
                      </label>
                      <input
                        type="text"
                        value={settings.siteTitle}
                        onChange={(e) => setSettings({...settings, siteTitle: e.target.value})}
                        className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-handwritten text-ink-dark dark:text-lavender font-medium mb-2">
                        Couple Names
                      </label>
                      <input
                        type="text"
                        value={settings.coupleNames}
                        onChange={(e) => setSettings({...settings, coupleNames: e.target.value})}
                        className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-handwritten text-ink-dark dark:text-lavender font-medium mb-2">
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        value={settings.weddingDate}
                        onChange={(e) => setSettings({...settings, weddingDate: e.target.value})}
                        className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-handwritten text-ink-dark dark:text-lavender font-medium mb-2">
                        Venue
                      </label>
                      <input
                        type="text"
                        value={settings.venue}
                        onChange={(e) => setSettings({...settings, venue: e.target.value})}
                        className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-handwritten text-ink-dark dark:text-lavender font-medium">
                          Password Protect Site
                        </span>
                        <button
                          onClick={() => setSettings({...settings, passwordProtected: !settings.passwordProtected})}
                          className="text-denim dark:text-lavender hover:scale-110 transition-transform"
                        >
                          <SafeIcon 
                            icon={settings.passwordProtected ? FiToggleRight : FiToggleLeft} 
                            className="w-8 h-8" 
                          />
                        </button>
                      </div>
                      {settings.passwordProtected && (
                        <input
                          type="password"
                          placeholder="Site Password"
                          value={settings.sitePassword}
                          onChange={(e) => setSettings({...settings, sitePassword: e.target.value})}
                          className="w-full px-4 py-3 bg-cream dark:bg-gray-600 border-2 border-kraft/20 dark:border-lavender/20 rounded-lg focus:border-denim dark:focus:border-lavender focus:outline-none transition-colors"
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-handwritten text-ink-dark dark:text-lavender font-medium">
                        Allow RSVP
                      </span>
                      <button
                        onClick={() => setSettings({...settings, allowRSVP: !settings.allowRSVP})}
                        className="text-denim dark:text-lavender hover:scale-110 transition-transform"
                      >
                        <SafeIcon 
                          icon={settings.allowRSVP ? FiToggleRight : FiToggleLeft} 
                          className="w-8 h-8" 
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-handwritten text-ink-dark dark:text-lavender font-medium">
                        Allow Guestbook
                      </span>
                      <button
                        onClick={() => setSettings({...settings, allowGuestbook: !settings.allowGuestbook})}
                        className="text-denim dark:text-lavender hover:scale-110 transition-transform"
                      >
                        <SafeIcon 
                          icon={settings.allowGuestbook ? FiToggleRight : FiToggleLeft} 
                          className="w-8 h-8" 
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-kraft/20 dark:border-lavender/20">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSaveSettings}
                    className="bg-gradient-to-r from-blush to-denim text-white px-8 py-3 rounded-lg font-handwritten text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiSave} className="w-5 h-5" />
                    <span>Save Settings</span>
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
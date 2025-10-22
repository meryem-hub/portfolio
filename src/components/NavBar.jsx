import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href, id) => {
    setIsOpen(false);
    setActiveSection(id);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.1, 0.9] }}
        className={`fixed w-full z-50 border-b border-[#FFD700]/30 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 shadow-[0_0_15px_rgba(255,215,0,0.3)] backdrop-blur-md'
            : 'bg-[#111]/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#home"
                className="flex items-center space-x-3"
                onClick={() => handleNavClick('#home', 'home')}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-black text-white">Meryem</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-[#FFD700]'
                        : 'text-white hover:text-[#FFD700]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href, item.id)}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700]"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px -10px rgba(255, 215, 0, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#contact', 'contact')}
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="w-6 h-0.5 mb-1.5 block bg-white"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              />
              <motion.span
                className="w-6 h-0.5 mb-1.5 block bg-white"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 block bg-white"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-200/20"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`block text-2xl font-bold py-3 ${
                      activeSection === item.id
                        ? 'text-[#FFD700]'
                        : 'text-white hover:text-[#FFD700]'
                    }`}
                    onClick={() => handleNavClick(item.href, item.id)}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.div
                  className="pt-6 border-t border-gray-200/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="#contact"
                    className="block w-full text-center px-8 py-4 bg-[#FFD700] text-black font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                    onClick={() => handleNavClick('#contact', 'contact')}
                  >
                    Start a Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;

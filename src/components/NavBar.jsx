import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Handle active section
    const handleSectionChange = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '/#home' },
        { id: 'about', label: 'About', href: '#about' },

    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href, id) => {
    setIsOpen(false);
    setActiveSection(id);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <motion.nav
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.6, 0.05, 0.1, 0.9] }}
  className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-700 ${
    isScrolled
      ? 'bg-gradient-to-r from-[#2C2C2C]/95 via-[#3A3A3A]/90 to-[#FFD700]/10 border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]'
      : 'bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-[#1A1A1A]/80 border-transparent'
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
                <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-lg">M</span>
                </div>
                <span className={`text-2xl font-black ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Meryem
                </span>
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
                        : isScrolled ? 'text-gray-700 hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
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
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                  boxShadow: "0 10px 30px -10px rgba(255, 215, 0, 0.5)"
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
                className={`w-6 h-0.5 mb-1.5 block ${
                  isScrolled ? 'bg-gray-900' : 'bg-black'
                }`}
                animate={{ 
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0 
                }}
              />
              <motion.span
                className={`w-6 h-0.5 mb-1.5 block ${
                  isScrolled ? 'bg-gray-900' : 'bg-black'
                }`}
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className={`w-6 h-0.5 block ${
                  isScrolled ? 'bg-gray-900' : 'bg-black'
                }`}
                animate={{ 
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0 
                }}
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
              transition={{ duration: 0.4, ease: [0.6, 0.05, 0.1, 0.9] }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-200/20"
            >
              <div className="px-6 py-8 space-y-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className={`block text-2xl font-bold py-3 transition-colors ${
                        activeSection === item.id 
                          ? 'text-[#FFD700]' 
                          : 'text-gray-900'
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
                </div>
                
                <motion.div 
                  className="pt-6 border-t border-gray-200/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="#contact"
                    className="block w-full text-center px-8 py-4 bg-[#FFD700] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
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

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FFD700] to-yellow-300 z-50"
        style={{ 
          scaleX: isScrolled ? 1 : 0,
          transformOrigin: "0%"
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';
  const headerBg = !isHomePage || scrollPosition > 100 ? 'bg-white bg-opacity-90 text-gray-800 shadow-md' : 'bg-transparent text-white';

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${headerBg}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">Great Eastern Financial Advisors</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium hover:opacity-75 transition-opacity ${
                !isHomePage || scrollPosition > 100 ? 'text-gray-800 hover:text-blue-600' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={!isHomePage || scrollPosition > 100 ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={!isHomePage || scrollPosition > 100 ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
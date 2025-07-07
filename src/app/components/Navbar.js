'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`${scrolled ? 'text-black' : 'text-white'}`}
            >
              L'oeil de monsieur R
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-sm block font-light ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
            >
              photographe de mariage
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Accueil', 'Galerie', 'Services', 'À propos', 'Contact'].map((item, index) => (
              <Link 
                key={item} 
                href={item === 'Accueil' ? '/' : `/${item === 'À propos' ? 'a-propos' : item.toLowerCase()}`}
                className={`relative font-light text-sm tracking-wider ${scrolled ? 'text-gray-800' : 'text-white'} hover:opacity-80 transition-opacity`}
              >
                <motion.span
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg py-5"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {['Accueil', 'Galerie', 'Services', 'À propos', 'Contact'].map((item) => (
                  <motion.div key={item} variants={itemVariants}>
                    <Link 
                      href={item === 'Accueil' ? '/' : `/${item === 'À propos' ? 'a-propos' : item.toLowerCase()}`}
                      className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

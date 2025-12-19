'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
              <span>L'oeil de Monsieur R</span>
              <span className="text-sm block font-light">Photographe de mariage</span>
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Capturer vos moments précieux avec élégance et authenticité. Spécialiste en photographie de mariage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Galerie', 'Services', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Accueil' ? '/' : `/${item === 'À propos' ? 'a-propos' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-gray-400" />
                <span className="text-gray-400">+33 6 33 32 07 95</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-gray-400" />
                <a href="mailto:contact@enemariage.fr" className="text-gray-400 hover:text-white transition-colors duration-300">
                  contact@enemariage.fr
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.instagram.com/monsieur_r_mariage/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <FiInstagram size={18} />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/monsieur_r_mariage/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <FiFacebook size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Monsieur R Photographe de Mariage. Tous droits réservés.Projet réalisé par ENE-Solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

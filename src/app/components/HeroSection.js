'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/87157226_3052041271497044_5875200998170951680_n.jpg',
      title: 'Capturons ensemble',
      subtitle: 'vos moments précieux'
    },
    {
      image: '/images/mmmariage.jpg',
      title: 'Des souvenirs',
      subtitle: 'qui durent toute une vie'
    },
    {
      image: '/images/hhmariage.jpg',
      title: 'Votre histoire',
      subtitle: 'racontée en images'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{
            opacity: { duration: 1.5 },
            scale: { duration: 6 }
          }}
          style={{
            zIndex: currentSlide === index ? 1 : 0
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white sm:text-6xl mb-6">Photographe de Mariage à Rennes et en Bretagne</h1>
          <motion.p
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-serif font-light mb-4"
          >
            {slides[currentSlide].title}
          </motion.p>

          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif font-light mb-8"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors rounded-full text-sm uppercase tracking-wider font-medium w-full sm:w-auto text-center"
            >
              Contactez-moi
            </Link>
            <Link
              href="/galerie"
              className="px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors rounded-full text-sm uppercase tracking-wider font-medium w-full sm:w-auto text-center"
            >
              Voir la galerie
            </Link>
          </motion.div>

          {/* Icône Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex justify-center"
          >
            <a
              href="https://www.instagram.com/monsieur_r_mariage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Suivez-nous sur Instagram"
            >
              <FaInstagram size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

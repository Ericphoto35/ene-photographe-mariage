'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCamera, FiFilm, FiBook, FiImage } from 'react-icons/fi';

const services = [
  {
    icon: <FiCamera size={36} />,
    title: 'Photographie de Mariage',
    description: 'Capturer chaque moment précieux de votre journée spéciale, des préparatifs jusqu\'à la fin des festivités.',
  },
  {
    icon: <FiFilm size={36} />,
    title: 'Séance d\'Engagement',
    description: 'Une séance photo avant le mariage pour immortaliser votre amour dans un cadre plus détendu.',
  },
  {
    icon: <FiBook size={36} />,
    title: 'Albums Photo',
    description: 'Des albums photo de haute qualité, conçus sur mesure pour préserver vos souvenirs pour les générations à venir.',
  },
  {
    icon: <FiImage size={36} />,
    title: 'Tirages Fine Art',
    description: 'Des tirages d\'art de qualité musée pour décorer votre intérieur avec vos plus belles photos de mariage.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-[var(--bg-gray-50)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-4 text-[var(--text-gray-800)]"
          >
            Mes Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-[var(--border-gray)] mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-[var(--text-gray-600)]"
          >
            Je propose une gamme complète de services pour capturer et préserver les moments les plus précieux de votre mariage.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-[var(--bg-white)] p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-[var(--text-gray-800)] mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-[var(--text-gray-800)]">{service.title}</h3>
              <p className="text-[var(--text-gray-600)] text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

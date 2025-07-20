'use client';
import { useState } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  // Catégories de photos
  const categories = ['Tous', 'Mariages', 'Couples', 'Cérémonies', 'Préparatifs'];
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Données d'exemple pour les photos de la galerie
  const allImages = [
    {
      id: 1,
      src: '/images/87157226_3052041271497044_5875200998170951680_n.jpg',
      title: 'Premier Regard',
      location: 'Saint Malo',
      description: 'Ce moment magique où les mariés se voient pour la première fois le jour de leur mariage.',
      category: 'Mariages'
    },
    {
      id: 2,
      src: '/images/ladyprep.webp',
      title: 'Préparation de la Mariée',
      location: 'Rennes',
      description: 'Les moments intimes de préparation avant la cérémonie.',
      category: 'Préparatifs'
    },
    {
      id: 3,
      src: '/images/justine.webp',
      title: 'Échange des Vœux',
      location: 'Rennes',
      description: 'Un moment d\'émotion intense pendant l\'échange des vœux.',
      category: 'Cérémonies'
    },
    {
      id: 4,
      src: '/images/87362184_3052043968163441_3712265440819412992_n.jpg',
      title: 'Séance Couple',
      location: 'Pointe du Grouin',
      description: 'Une séance photo intime capturant l\'amour entre les mariés.',
      category: 'Couples'
    },
    {
      id: 5,
      src: '/images/ceremonie.webp',
      title: 'Cérémonie Laïque',
      location: 'Nantes',
      description: 'Une cérémonie en plein air remplie d\'émotions et de joie.',
      category: 'Cérémonies'
    },
    {
      id: 6,
      src: '/images/robemariee.webp',
      title: 'Détails de la Robe',
      location: 'Combourg',
      description: 'Les détails délicats qui font toute la beauté d\'une robe de mariée.',
      category: 'Préparatifs'
    },
    {
      id: 7,
      src: '/images/premieredanse.webp',
      title: 'Première Danse',
      location: 'Nantes',
      description: 'La première danse des mariés, un moment de grâce et d\'intimité.',
      category: 'Mariages'
    },
    {
      id: 8,
      src: '/images/engagement.webp',
      title: 'Séance d\'Engagement',
      location: 'Cancale',
      description: 'Une séance d\'engagement dans les rues pittoresques de Paris.',
      category: 'Couples'
    },
    {
      id: 9,
      src: '/images/bouquet.webp',
      title: 'Bouquet de la Mariée',
      location: 'Nantes',
      description: 'Le magnifique bouquet de la mariée, composé avec soin.',
      category: 'Préparatifs'
    },
    {
      id: 10,
      src: '/images/echange.webp',
      title: 'Échange des Alliances',
      location: 'Nantes',
      description: 'Le moment solennel de l\'échange des alliances.',
      category: 'Cérémonies'
    },
    {
      id: 11,
      src: '/images/couche.webp',
      title: 'Couple au Coucher du Soleil',
      location: 'Rennes',
      description: 'Un moment romantique capturé à l\'heure dorée.',
      category: 'Couples'
    },
    {
      id: 12,
      src: '/images/reception.webp',
      title: 'Réception Élégante',
      location: 'Nantes',
      description: 'Une réception somptueuse dans un cadre historique.',
      category: 'Mariages'
    }
  ];

  // Filtrer les images en fonction de la catégorie active
  const filteredImages = activeCategory === 'Tous' 
    ? allImages 
    : allImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* En-tête de la galerie */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Galerie
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-[var(--border-gray)] mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-[var(--text-gray-600)]"
          >
            Découvrez une sélection de mes photographies de mariage, capturant l&apos;amour, l&apos;émotion et la beauté de ces journées spéciales.
          </motion.p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-[var(--text-gray-800)] text-[var(--bg-white)]'
                  : 'bg-[var(--bg-gray-100)] text-[var(--text-gray-600)] hover:bg-[var(--bg-gray-50)]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grille de photos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GalleryGrid images={filteredImages} />
        </motion.div>

        {/* Appel à l'action */}
        <div className="text-center mt-16">
          <p className="text-[var(--text-gray-600)] mb-6">
            Vous aimez ce que vous voyez ? Contactez-moi pour discuter de votre projet de mariage.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[var(--text-gray-800)] text-[var(--bg-white)] hover:bg-[var(--text-gray-600)] transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
          >
            Me contacter
          </motion.a>
        </div>
      </div>
    </div>
  );
}

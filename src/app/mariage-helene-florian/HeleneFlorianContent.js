'use client';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import GalleryGrid from '../components/GalleryGrid';

const sections = [
  {
    id: 'preparation',
    title: 'Préparation',
    description: 'Les instants suspendus avant le grand jour.',
    downloadHref: 'https://www.amazon.fr/photos/share/wwjPAH5ECx7S2LB4chErOpDORcU7SESJx9zuMOiUAj2',
    images: [
      { id: 'p1', src: '/images/mariee.webp', title: 'La mariée' },
      { id: 'p2', src: '/images/Marie.webp', title: 'Préparation' },
      { id: 'p3', src: '/images/Coupe_cheveux.webp', title: 'Coiffure' },
      { id: 'p4', src: '/images/Alliance.webp', title: 'Alliance' },
      { id: 'p5', src: '/images/details_chaussures_marie.webp', title: 'Chaussures de la mariée' },
      { id: 'p6', src: '/images/details_chaussures.webp', title: 'Détails chaussures' },
    ],
  },
  {
    id: 'mairie',
    title: 'Mairie',
    description: "L'officialisation de l'union.",
    downloadHref: 'https://www.amazon.fr/photos/share/UeXEw4g9H3EtFno2VNzEiMgkpJDkUWFXUBq1cFEyOWP',
    images: [
      { id: 'm1', src: '/images/Mairie.webp', title: 'Mairie' },
      { id: 'm2', src: '/images/Mairie_Helene.webp', title: 'Hélène' },
      { id: 'm3', src: '/images/Marie_florian.webp', title: 'Florian' },
      { id: 'm4', src: '/images/Mairie_2.webp', title: 'Mairie' },
      { id: 'm5', src: '/images/Mairie_3.webp', title: 'Mairie' },
      { id: 'm6', src: '/images/Mairie4.webp', title: 'Mairie' },
    ],
  },
  {
    id: 'garden-party',
    title: 'Garden Party',
    description: 'Cocktail et convivialité en plein air.',
    downloadHref: 'https://www.amazon.fr/photos/share/MErtk6wxrg6Ek0DZNytik6f0FuHaiwzIfspQPAB5coM',
    images: [
      { id: 'gp1', src: '/images/Garden_1.webp', title: 'Garden Party' },
      { id: 'gp2', src: '/images/Garden_2.webp', title: 'Garden Party' },
      { id: 'gp3', src: '/images/Garden_3.webp', title: 'Garden Party' },
      { id: 'gp4', src: '/images/Garden_4.webp', title: 'Garden Party' },
      { id: 'gp5', src: '/images/Garden_5.webp', title: 'Garden Party' },
      { id: 'gp6', src: '/images/Garden_6.webp', title: 'Garden Party' },
    ],
  },
  {
    id: 'ceremonie-laique',
    title: 'Cérémonie Laïque',
    description: 'Les vœux, les rires et les larmes.',
    downloadHref: 'https://www.amazon.fr/photos/share/KXWIQszw7e4gIpJPlGclmiRQZMOhsWDRER5cxI9TGD9',
    images: [
      { id: 'c1', src: '/images/cere.webp', title: 'Cérémonie laïque' },
      { id: 'c2', src: '/images/cere_2.webp', title: 'Cérémonie laïque' },
      { id: 'c3', src: '/images/cere_3.webp', title: 'Cérémonie laïque' },
      { id: 'c4', src: '/images/cere_4.webp', title: 'Cérémonie laïque' },
      { id: 'c5', src: '/images/cere_5.webp', title: 'Cérémonie laïque' },
      { id: 'c6', src: '/images/cere_6.webp', title: 'Cérémonie laïque' },
    ],
  },
  {
    id: 'groupe',
    title: 'Photos de Groupe',
    description: "Famille et amis réunis pour l'occasion.",
    downloadHref: 'https://www.amazon.fr/photos/share/y567AscrempFuTU1LX58OK4RzSOz9iIiUmxb1F2g5nO',
    images: [
      { id: 'g1', src: '/images/groupe1.webp', title: 'Photo de groupe' },
      { id: 'g2', src: '/images/groupe2.webp', title: 'Photo de groupe' },
      { id: 'g3', src: '/images/groupe3.webp', title: 'Photo de groupe' },
      { id: 'g4', src: '/images/groupe4.webp', title: 'Photo de groupe' },
      { id: 'g5', src: '/images/groupe5.webp', title: 'Photo de groupe' },
      { id: 'g6', src: '/images/groupe6.webp', title: 'Photo de groupe' },
    ],
  },
  {
    id: 'couple',
    title: 'Couple',
    description: 'Hélène et Florian, en amoureux.',
    downloadHref: 'https://www.amazon.fr/photos/share/w1mr1WKGKPBFHEnutwMoDVPkCHWcm9T4LOIPFf4Bukj',
    images: [
      { id: 'cp1', src: '/images/couple1.webp', title: 'Couple' },
      { id: 'cp2', src: '/images/couple2.webp', title: 'Couple' },
      { id: 'cp3', src: '/images/couple3.webp', title: 'Couple' },
      { id: 'cp4', src: '/images/couple4.webp', title: 'Couple' },
      { id: 'cp5', src: '/images/couple5.webp', title: 'Couple' },
      { id: 'cp6', src: '/images/couple6.webp', title: 'Couple' },
    ],
  },
];

export default function HeleneFlorianContent() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Hélène &amp; Florian
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
            Un résumé en images de votre mariage, moment par moment.
          </motion.p>
        </div>

        <div className="space-y-20">
          {sections.map((section) => (
            <section key={section.id}>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-2">{section.title}</h2>
                <p className="text-[var(--text-gray-600)]">{section.description}</p>
              </div>

              <GalleryGrid images={section.images} />

              <div className="text-center mt-8">
                <motion.a
                  href={section.downloadHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--text-gray-800)] text-[var(--bg-white)] hover:bg-[var(--text-gray-600)] transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
                >
                  <FiDownload size={16} />
                  Télécharger toutes les photos
                </motion.a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

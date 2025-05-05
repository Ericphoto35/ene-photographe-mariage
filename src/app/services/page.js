'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiInfo } from 'react-icons/fi';

export default function ServicesPage() {
  // Formules de services
  const packages = [
    {
      name: 'Essentiel',
      price: 'À partir de 1 200€',
      description: 'Couverture complète de votre cérémonie et des moments clés de votre journée.',
      features: [
        'Consultation préalable',
        'Couverture de 8 heures',
        'Cérémonie et cocktail',
        'Séance couple',
        'Galerie en ligne privée',
        '300+ photos retouchées',
        'Livraison sous 4 semaines'
      ]
    },
    {
      name: 'Élégance',
      price: 'À partir de 1600€',
      description: 'Une couverture complète de votre journée, des préparatifs jusqu\'au début de soirée.',
      features: [
        'Consultation préalable',
        'Couverture de 12 heures',
        'Préparatifs au début de soirée',
        'Séance couple étendue',
        'Galerie en ligne privée',
        '500+ photos retouchées',
        'Album photo 30x30cm (20 pages)',
        'Livraison sous 3 semaines'
      ],
      highlighted: true
    },
    {
      name: 'Prestige',
      price: 'À partir de 2 500€',
      description: 'L\'expérience photographique ultime pour votre mariage, avec une couverture complète et des extras exclusifs.',
      features: [
        'Consultation préalable',
        'Couverture illimitée (jour J)',
        'Séance d\'engagement offerte',
        'Second photographe',
        'Galerie en ligne privée',
        '700+ photos retouchées',
        'Album photo premium 35x35cm (30 pages)',
        'Coffret de 100 tirages fine art',
        'Livraison sous 2 semaines'
      ]
    }
  ];

  // Services additionnels
  const additionalServices = [
    {
      title: 'Séance d\'Engagement',
      price: '250€',
      description: 'Une séance photo avant le mariage pour capturer votre complicité dans un cadre détendu.',
      image: '/images/engagements.webp'
    },
    {
      title: 'Second Photographe',
      price: '400€',
      description: 'Un photographe supplémentaire pour capturer encore plus de moments et de perspectives.',
      image: '/images/photographe.webp'
    },
    {
      title: 'Album Photo Premium',
      price: 'À partir de 350€',
      description: 'Albums photo de haute qualité, personnalisés selon vos préférences.',
      image: '/images/album.webp'
    },
    {
      title: 'Tirages Fine Art',
      price: 'À partir de 120€',
      description: 'Tirages d\'art de qualité musée pour décorer votre intérieur.',
      image: '/images/tirage.webp'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">  
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Services & Tarifs
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-gray-400 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Découvrez mes formules personnalisables pour capturer les moments précieux de votre mariage. Chaque prestation est conçue pour s&apos;adapter à vos besoins spécifiques.
          </motion.p>
        </div>

        {/* Formules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`rounded-lg overflow-hidden ${
                pkg.highlighted 
                  ? 'border-2 border-gray-800 shadow-xl relative' 
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-gray-800 text-white px-4 py-1 text-sm font-medium">
                  Populaire
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <div className="text-xl font-bold mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-colors ${
                    pkg.highlighted
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note d'information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 p-6 rounded-lg mb-16 flex items-start"
        >
          <FiInfo className="text-gray-500 mt-1 mr-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-lg font-medium mb-2">Informations importantes</h3>
            <p className="text-gray-600 mb-2">
              Tous les tarifs indiqués sont à titre indicatif et peuvent varier en fonction de vos besoins spécifiques, 
              de la saison et de la localisation de votre mariage. N&apos;hésitez pas à me contacter pour obtenir un devis personnalisé.
            </p>
            <p className="text-gray-600">
              Pour les mariages en dehors de la région parisienne, des frais de déplacement peuvent s&apos;appliquer. 
              Les mariages à l&apos;international sont également possibles avec des conditions spécifiques.
            </p>
          </div>
        </motion.div>

        {/* Services additionnels */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-3xl font-serif mb-4"
            >
              Services Additionnels
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px w-24 bg-gray-400 mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Personnalisez votre expérience avec ces options complémentaires pour enrichir vos souvenirs de mariage.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-1/3 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="w-2/3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{service.title}</h3>
                    <span className="text-gray-800 font-bold">{service.price}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Processus de travail */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-3xl font-serif mb-4"
            >
              Mon Processus
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="h-px w-24 bg-gray-400 mx-auto mb-6"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Nous discutons de votre vision, de vos attentes et de tous les détails importants de votre mariage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Planification</h3>
              <p className="text-gray-600 text-sm">
                Nous élaborons ensemble un planning détaillé pour assurer une couverture optimale de votre journée.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Jour J</h3>
              <p className="text-gray-600 text-sm">
                Je capture discrètement tous les moments précieux de votre mariage, des préparatifs à la fête.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Livraison</h3>
              <p className="text-gray-600 text-sm">
                Je sélectionne et retouche soigneusement vos photos pour vous livrer des souvenirs exceptionnels.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-3xl font-serif mb-4"
            >
              Questions Fréquentes
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="h-px w-24 bg-gray-400 mx-auto mb-6"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Combien de temps à l&apos;avance dois-je réserver?</h3>
                <p className="text-gray-600">
                  Je recommande de réserver au moins 9 à 12 mois à l&apos;avance, surtout pour les dates populaires en haute saison (mai à septembre). 
                  Cependant, n&apos;hésitez pas à me contacter même pour des dates plus proches, je pourrais avoir des disponibilités.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Comment se déroule la réservation?</h3>
                <p className="text-gray-600">
                  Après notre première consultation, je vous envoie un contrat détaillé. La réservation est confirmée à la signature du contrat 
                  et au versement d&apos;un acompte de 30%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Proposez-vous des albums photo?</h3>
                <p className="text-gray-600">
                  Oui, je propose une gamme d&apos;albums photo de haute qualité, fabriqués à la main avec des matériaux premium. 
                  Chaque album est personnalisé selon vos préférences en termes de taille, de couverture et de mise en page.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Combien de photos recevrons-nous?</h3>
                <p className="text-gray-600">
                  Le nombre de photos varie en fonction de la durée de couverture et des événements de votre journée. 
                  En moyenne, vous recevrez entre 300 et 700 photos soigneusement sélectionnées et retouchées.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Vous déplacez-vous pour des mariages à l&apos;étranger?</h3>
                <p className="text-gray-600">
                  Absolument! J&apos;adore voyager et photographier des mariages dans de nouveaux endroits. Des frais supplémentaires pour le voyage 
                  et l&apos;hébergement s&apos;appliquent, mais je serais ravi de vous accompagner où que vous choisissiez de célébrer votre union.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Quel est votre style photographique?</h3>
                <p className="text-gray-600">
                  Mon style combine photojournalisme documentaire et portraits élégants. Je privilégie les images naturelles, lumineuses et intemporelles, 
                  capturant l&apos;authenticité des émotions et la beauté des moments spontanés.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="text-center mt-16 bg-gray-50 p-10 rounded-lg"
        >
          <h2 className="text-2xl font-serif mb-4">Prêt à discuter de votre projet?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Chaque mariage est unique, et je serais ravi de créer une formule personnalisée qui correspond parfaitement à vos besoins et à votre budget.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
          >
            Demander un devis personnalisé
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

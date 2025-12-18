'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCamera, FiHeart, FiAward, FiCoffee } from 'react-icons/fi';

export default function AboutPage() {
  // Statistiques du photographe
  const stats = [
    { icon: <FiCamera />, value: '50+', label: 'Mariages Photographiés' },
    { icon: <FiHeart />, value: '100+', label: 'Couples Heureux' },
    { icon: <FiAward />, value: '10+', label: 'Années d\'Expérience' },
    { icon: <FiCoffee />, value: '∞', label: 'Cafés Consommés' }
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
            À Propos
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 bg-gray-400 mx-auto mb-6"
          ></motion.div>
        </div>

        {/* Section Présentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/bouquet.webp"
              alt="ENE - Photographe de Mariage"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-light">Bonjour, je suis l'oeil de Monsieur R Photographies</h2>
            <div className="h-1 w-20 bg-gray-300"></div>
            <p className="text-gray-600">
              Nous sommes une équipe de photographe de mariage passionnée, nous capturons des moments authentiques et émotionnels depuis plus de 10 ans. 
              Notre parcours dans la photographie a commencé par une fascination pour la capacité des images à raconter des histoires 
              et à préserver des souvenirs précieux.
            </p>
            <p className="text-gray-600">
              Basé à Rennes, nous voyageons à travers le pays et à l'international pour documenter des mariages uniques. 
              Notre philosophie est simple : capturer l&apos;essence de votre journée spéciale avec discrétion, sensibilité et créativité.
            </p>
            <p className="text-gray-600">
              Chaque couple a une histoire unique, et nous nous engageons à la raconter à travers nos photographies. 
              Nous crois en la création d&apos;images intemporelles qui vous permettront de revivre ces moments précieux pour les années à venir.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
              >
                Travaillons ensemble
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Section Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="text-gray-800 text-2xl mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section Approche */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl font-serif mb-4"
            >
              Notre Approche
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-px w-24 bg-gray-400 mx-auto mb-6"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium mb-4">Photojournalisme</h3>
              <p className="text-gray-600">
                Nous privilégions une approche documentaire, capturant les moments spontanés et les émotions authentiques 
                qui racontent l&apos;histoire unique de votre journée.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium mb-4">Portraits Élégants</h3>
              <p className="text-gray-600">
                Nous créons des portraits intemporels qui mettent en valeur votre connexion et votre beauté naturelle, 
                avec une attention particulière à la lumière et à la composition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium mb-4">Détails Soignés</h3>
              <p className="text-gray-600">
                Nous nous assurons de capturer tous les petits détails que vous avez soigneusement planifiés - des alliances 
                aux décorations florales - pour préserver chaque aspect de votre célébration.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section Formation et Équipement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif font-light">Formation & Parcours</h2>
            <div className="h-1 w-20 bg-gray-300"></div>
            <p className="text-gray-600">
            "Notre aventure dans la photographie de mariage a commencé comme une exploration passionnée, un chemin que nous avons tracé nous-même, pas à pas. 
            En tant qu'autodidacte, chaque mariage a été une leçon précieuse, une opportunité d'affiner notre regard et notre technique. Au fil du temps, 
            une affinité particulière s'est développée : celle de capturer l'essence des personnes à travers le portrait. Ces moments intimes, 
            ces expressions fugaces, racontent une partie unique de votre histoire. C'est avec cette sensibilité pour le portrait que nous abordons chaque mariage, 
            cherchant à immortaliser non seulement l'événement, mais aussi les émotions profondes qui vous unissent."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif font-light">Équipement Professionnel</h2>
            <div className="h-1 w-20 bg-gray-300"></div>
            <p className="text-gray-600">
              Nous utilisons exclusivement du matériel haut de gamme pour garantir des images de la plus haute qualité, 
              quelles que soient les conditions d&apos;éclairage ou les défis du lieu.
            </p>
            <p className="text-gray-600">
              Notre équipement est toujours redondant pour assurer une sécurité maximale - nous n'avons jamais manqué un moment 
              important en raison d&apos;une défaillance technique.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Appareils photo professionnels full-frame</li>
              <li>Objectifs lumineux de qualité supérieure</li>
              <li>Équipement d'éclairage avancé</li>
              <li>Systèmes de sauvegarde multiples sur site</li>
            </ul>
          </motion.div>
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center mt-16 bg-gray-50 p-10 rounded-lg"
        >
          <h2 className="text-2xl font-serif mb-4">Prêt à raconter votre histoire?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Je serais ravi de discuter de votre vision pour votre mariage et de la façon dont je peux vous aider à créer 
            des souvenirs précieux qui dureront toute une vie.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
          >
            Contactez-moi
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

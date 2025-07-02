'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiHome, FiCamera, FiMail } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-serif font-light text-gray-800 mb-4">404</h1>
          <div className="h-px w-24 bg-gray-400 mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-light mb-6">Page introuvable</h2>
          <p className="text-gray-600 mb-8">
            La page que vous recherchez semble avoir été déplacée, supprimée ou n'a jamais existé.
          </p>
        </div>

        <div className="relative w-full h-64 md:h-80 mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/87157226_3052041271497044_5875200998170951680_n.jpg"
            alt="ENE Photographe - Image artistique"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Link href="/" className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FiHome className="mr-2" />
            <span>Accueil</span>
          </Link>
          <Link href="/galerie" className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FiCamera className="mr-2" />
            <span>Galerie</span>
          </Link>
          <Link href="/services" className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Services</span>
          </Link>
          <Link href="/contact" className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FiMail className="mr-2" />
            <span>Contact</span>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à nous contacter.
        </p>
      </motion.div>
    </div>
  );
}

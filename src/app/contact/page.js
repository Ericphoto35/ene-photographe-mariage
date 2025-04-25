'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    eventType: 'Mariage',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simuler l'envoi du formulaire (à remplacer par votre logique d'envoi réelle)
    try {
      // Simulation d'une requête API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Réinitialiser le formulaire après succès
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventLocation: '',
        eventType: 'Mariage',
        message: '',
      });
      setIsSubmitted(true);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact
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
            Je serais ravi de discuter de votre projet de mariage. N&apos;hésitez pas à me contacter pour toute question ou pour vérifier ma disponibilité.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-6">Envoyez-moi un message</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-2">Message envoyé avec succès!</h3>
                <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais, généralement sous 24 à 48 heures.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Date de l&apos;événement
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
                      Lieu de l&apos;événement
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                      Type d&apos;événement
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <option value="Mariage">Mariage</option>
                      <option value="Séance Couple">Séance Couple</option>
                      <option value="Fiançailles">Fiançailles</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Parlez-moi de votre projet, de vos attentes et de toute question que vous pourriez avoir..."
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-gray-800 text-white rounded-full text-sm uppercase tracking-wider font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-700'
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:pl-10"
          >
            <h2 className="text-2xl font-serif mb-6">Informations de contact</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FiMail className="text-gray-700" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:contact@ene-photographie.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                    contact@ene-photographie.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FiPhone className="text-gray-700" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Téléphone</h3>
                  <a href="tel:+33600000000" className="text-gray-600 hover:text-gray-900 transition-colors">
                    +33 6 XX XX XX XX
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <FiMapPin className="text-gray-700" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Basé à</h3>
                  <p className="text-gray-600">
                    Paris, France<br />
                    Disponible pour des déplacements en France et à l&apos;international
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FiInstagram size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FiFacebook size={20} className="text-gray-700" />
              </a>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Horaires de réponse</h3>
              <p className="text-gray-600 mb-4">
                Je m&apos;efforce de répondre à toutes les demandes dans un délai de 24 à 48 heures.
              </p>
              <p className="text-gray-600">
                Pour les demandes urgentes, n&apos;hésitez pas à me contacter par téléphone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQ rapide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gray-50 p-8 rounded-lg mb-16"
        >
          <h2 className="text-2xl font-serif mb-6 text-center">Questions fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Quelle est votre disponibilité?</h3>
              <p className="text-gray-600">
                Ma disponibilité varie en fonction de la saison. Je vous recommande de me contacter dès que possible pour vérifier si votre date est disponible, surtout pour les mariages en haute saison.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Comment réserver vos services?</h3>
              <p className="text-gray-600">
                Après notre premier échange, je vous envoie un devis personnalisé. La réservation est confirmée à la signature du contrat et au versement d'un acompte de 30%.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Vous déplacez-vous en dehors de Paris?</h3>
              <p className="text-gray-600">
                Absolument! Je me déplace dans toute la France et à l&apos;international pour capturer votre mariage. Des frais de déplacement peuvent s&apos;appliquer selon la destination.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Quel est le délai de livraison des photos?</h3>
              <p className="text-gray-600">
                Le délai de livraison varie entre 2 et 4 semaines selon la formule choisie. Une sélection de photos &quot;aperçu&quot; vous est généralement envoyée dans la semaine suivant votre mariage.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Carte ou image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="relative h-80 rounded-lg overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410942259!2d2.2646349499999997!3d48.8588377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Paris"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

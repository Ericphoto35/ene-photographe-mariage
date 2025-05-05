import Image from "next/image";
import Link from "next/link";
import { FiCamera, FiHeart, FiMessageCircle } from "react-icons/fi";

// Importer les composants clients depuis le fichier dédié
import { HeroSection, ServicesSection, TestimonialsSection } from "./components/ClientComponents";

// Métadonnées pour le SEO
export const metadata = {
  title: "ENE - Photographe de Mariage à Rennes | Capturer vos moments précieux",
  description: "Photographe de mariage professionnel à Rennes, spécialisé dans la capture de moments précieux avec élégance et authenticité. Découvrez mon portfolio et mes services.",
  keywords: ["photographe mariage", "photographe Rennes", "photos de mariage", "mariage Bretagne", "photographe professionnel"],
  openGraph: {
    title: "ENE - Photographe de Mariage à Rennes",
    description: "Capturez les moments précieux de votre mariage avec un style élégant et authentique",
    images: [
      {
        url: '/images/jg.jpg',
        width: 1200,
        height: 630,
        alt: 'ENE Photographe de Mariage'
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  // Balises structurées pour les moteurs de recherche (Schema.org)
  alternates: {
    canonical: 'https://www.ene-photographe-mariage.fr',
  },
  robots: {
    index: true,
    follow: true,
  }
};

// Forcer le rendu statique pour améliorer les performances
export const dynamic = 'force-static';

export default function Home() {
  // Exemples de photos pour la section de présentation
  const featuredImages = [
    {
      src: "/images/jg.jpg",
      alt: "Couple de mariés au coucher du soleil"
    },
    {
      src: "/images/mmmariage2.webp",
      alt: "Préparation de la mariée"
    },
    {
      src: "/images/92336089_3163801453654358_8416366644216987648_n.jpg",
      alt: "Cérémonie de mariage"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <HeroSection />

      {/* Section Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light">Capturer l&apos;essence de vos moments précieux</h2>
              <div className="h-1 w-20 bg-gray-300"></div>
              <p className="text-gray-600">
                Bienvenue dans mon univers photographique où chaque image raconte une histoire unique. 
                Spécialisé dans la photographie de mariage, je m&apos;engage à immortaliser les émotions et 
                les instants qui font de votre journée un moment inoubliable.
              </p>
              <p className="text-gray-600">
                Mon approche combine un style documentaire discret et des portraits élégants pour créer 
                un récit visuel authentique de votre célébration.  
              </p>
              <div className="flex justify-center md:justify-start mt-6">
                <Link 
                  href="/a-propos" 
                  className="inline-block px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded-full text-sm uppercase tracking-wider font-medium"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-md h-64 md:h-80">
                  <Image 
                    src={featuredImages[0].src} 
                    alt={featuredImages[0].alt}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md h-40 md:h-48">
                  <Image 
                    src={featuredImages[1].src} 
                    alt={featuredImages[1].alt}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="overflow-hidden rounded-lg shadow-md h-80 md:h-96">
                  <Image 
                    src={featuredImages[2].src} 
                    alt={featuredImages[2].alt}
                    width={400}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <ServicesSection />

      {/* Section Pourquoi Me Choisir */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Pourquoi Me Choisir</h2>
            <div className="h-px w-24 bg-gray-400 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Je m&apos;engage à offrir une expérience exceptionnelle à chaque couple, avec une attention particulière aux détails et aux moments qui comptent.  
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-gray-800 mb-4 flex justify-center">
                <FiCamera size={36} />
              </div>
              <h3 className="text-xl font-medium mb-3">Style Unique</h3>
              <p className="text-gray-600 text-sm">
                Une approche photographique qui mêle élégance intemporelle et spontanéité pour des images authentiques et émotionnelles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-gray-800 mb-4 flex justify-center">
                <FiHeart size={36} />
              </div>
              <h3 className="text-xl font-medium mb-3">Passion & Dévouement</h3>
              <p className="text-gray-600 text-sm">
                Un engagement total pour capturer l&apos;essence de votre journée avec attention, discrétion et professionnalisme.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-gray-800 mb-4 flex justify-center">
                <FiMessageCircle size={36} />
              </div>
              <h3 className="text-xl font-medium mb-3">Communication Fluide</h3>
              <p className="text-gray-600 text-sm">
                Un accompagnement personnalisé avant, pendant et après votre mariage pour une expérience sereine et sans stress.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12 px-4">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full text-sm uppercase tracking-wider font-medium w-full sm:w-auto text-center"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <TestimonialsSection 
        testimonials={[
          {
            name: 'Marie & Thomas',
            date: 'Mariés en Juin 2023',
            quote: 'ENE a su capturer l\'essence même de notre journée. Chaque photo raconte une histoire et nous permet de revivre ces moments magiques. Un talent exceptionnel!'
          },
          {
            name: 'Sophie & Lucas',
            date: 'Mariés en Septembre 2023',
            quote: 'Nous sommes enchantés par les photos de notre mariage. ENE a su se faire discret tout en capturant tous les moments importants. Le résultat est simplement magnifique!'
          },
          {
            name: 'Julie & Antoine',
            date: 'Mariés en Mai 2024',
            quote: 'Un grand merci pour ces souvenirs incroyables! Votre professionnalisme et votre créativité ont fait toute la différence. Nous recommandons ENE sans hésitation.'
          }
        ]}
      />
    </div>
  );
}

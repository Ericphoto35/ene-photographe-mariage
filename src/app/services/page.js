import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Services & Tarifs Photographe Mariage Rennes | L\'Oeil de Monsieur R',
  description: 'Découvrez mes formules de photographie de mariage à Rennes et en Bretagne. Formules Essentiel, Élégance et Prestige à partir de 1200€, adaptées à votre projet.',
  alternates: {
    canonical: 'https://www.loeil-de-monsieur-r.fr/services',
  },
  openGraph: {
    title: 'Services & Tarifs - Photographe Mariage Rennes | L\'Oeil de Monsieur R',
    description: 'Formules photographe mariage Rennes et Bretagne. Découvrez mes tarifs et prestations personnalisées.',
    url: 'https://www.loeil-de-monsieur-r.fr/services',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}

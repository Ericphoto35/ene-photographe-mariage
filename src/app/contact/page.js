import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact - Photographe Mariage Rennes | L\'Oeil de Monsieur R',
  description: 'Contactez L\'Oeil de Monsieur R, photographe de mariage à Rennes. Demandez un devis personnalisé pour votre mariage en Bretagne ou partout en France.',
  alternates: {
    canonical: 'https://www.loeil-de-monsieur-r.fr/contact',
  },
  openGraph: {
    title: 'Contact - Photographe Mariage Rennes | L\'Oeil de Monsieur R',
    description: 'Demandez votre devis photographe mariage Rennes — réponse sous 24h.',
    url: 'https://www.loeil-de-monsieur-r.fr/contact',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

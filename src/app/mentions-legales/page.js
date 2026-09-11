import MentionsLegalesContent from './MentionsLegalesContent';

export const metadata = {
  title: 'Mentions légales | L\'Oeil de Monsieur R',
  description:
    'Mentions légales et informations sur la protection des données personnelles du site L\'Oeil de Monsieur R, photographe de mariage à Rennes.',
  alternates: {
    canonical: 'https://www.loeil-de-monsieur-r.fr/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}

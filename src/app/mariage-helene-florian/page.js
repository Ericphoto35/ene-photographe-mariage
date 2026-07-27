import HeleneFlorianContent from './HeleneFlorianContent';

export const metadata = {
  title: 'Hélène & Florian | L\'Oeil de Monsieur R',
  description: 'Résumé en photos du mariage d\'Hélène et Florian.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeleneFlorianPage() {
  return <HeleneFlorianContent />;
}

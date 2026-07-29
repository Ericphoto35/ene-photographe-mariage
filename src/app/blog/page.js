import BlogListContent from './BlogListContent';

export const metadata = {
  title: 'Blog Mariage Bretagne | L\'Oeil de Monsieur R',
  description: 'Récits et reportages photo de mariages en Bretagne : préparatifs, cérémonies, garden party... Découvrez les coulisses des mariages capturés par L\'Oeil de Monsieur R.',
  alternates: {
    canonical: 'https://www.loeil-de-monsieur-r.fr/blog',
  },
  openGraph: {
    title: 'Blog Mariage Bretagne | L\'Oeil de Monsieur R',
    description: 'Reportages et récits de mariages photographiés en Bretagne par L\'Oeil de Monsieur R.',
    url: 'https://www.loeil-de-monsieur-r.fr/blog',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogListContent />;
}

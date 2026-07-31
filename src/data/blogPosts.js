export const blogPosts = [
  {
    slug: 'mariage-domaine-de-kerlys-helene-florian',
    title: "Mariage au Domaine de Kerlys à Briec-de-l'Odet : le reportage d'Hélène & Florian",
    metaTitle: 'Photographe Mariage Domaine de Kerlys | Reportage Hélène & Florian',
    metaDescription: "Reportage photo d'un mariage champêtre au Domaine de Kerlys à Briec-de-l'Odet, dans le Finistère : préparatifs, mairie, garden party et cérémonie laïque.",
    date: '2026-07-10',
    location: "Domaine de Kerlys, Briec-de-l'Odet (Finistère)",
    venueUrl: 'https://www.domainedekerlys.com/',
    excerpt: "Retour en images sur le mariage champêtre d'Hélène & Florian au Domaine de Kerlys, entre cérémonie laïque en pleine nature et garden party conviviale.",
    coverImage: '/images/blog/mariage-domaine-de-kerlys-helene-florian/montage.webp',
    intro: [
      "Début juillet, j'ai eu la chance de couvrir le mariage d'Hélène et Florian au Domaine de Kerlys, un lieu de réception niché dans la campagne de Briec-de-l'Odet, à quelques minutes de Quimper. Une journée entière passée entre préparatifs, officialisation à la mairie, garden party et cérémonie laïque en plein air — exactement le genre de mariage champêtre que j'aime raconter en tant que photographe de mariage en Bretagne.",
      "Le Finistère offre un cadre qui se prête particulièrement bien à ce style de reportage : pierre, verdure et lumière changeante tout au long de la journée. C'est l'un des grands plaisirs de photographier des mariages en Bretagne, où chaque lieu de réception a sa propre personnalité.",
      "Voici un aperçu du reportage, moment par moment.",
    ],
    sections: [
      {
        heading: 'Les préparatifs, entre émotion et petits détails',
        paragraphs: [
          "Tout commence toujours par les préparatifs : la coiffure, les derniers ajustements, les alliances posées sur leur coussin. Ce sont des instants discrets, souvent les plus émouvants de la journée, où l'on sent la tension joyeuse monter avant la cérémonie.",
          "C'est aussi le moment où je travaille en retrait, avec des focales serrées sur les détails plutôt que sur les visages : un bijou, une texture de tissu, un geste. Cette approche permet de raconter l'ambiance des préparatifs sans jamais être intrusif.",
        ],
        image: { src: '/images/blog/mariage-domaine-de-kerlys-helene-florian/preparatifs.webp', alt: "Préparation de la mariée avant le mariage au Domaine de Kerlys" },
      },
      {
        heading: 'Direction la mairie',
        paragraphs: [
          "Avant de rejoindre le Domaine de Kerlys pour la fête, Hélène et Florian sont passés par la mairie pour officialiser leur union. Un moment plus intime, entouré de leurs proches, avant de filer vers l'Odet pour la suite de la journée.",
          "En Bretagne, il est très courant que la mairie et le lieu de réception soient deux endroits distincts, parfois éloignés de plusieurs dizaines de kilomètres : une organisation qui demande un peu de logistique côté timing, mais qui permet de choisir un lieu de fête vraiment adapté à l'ambiance souhaitée.",
        ],
      },
      {
        heading: 'Garden party au Domaine de Kerlys',
        paragraphs: [
          "Direction Briec-de-l'Odet et le Domaine de Kerlys pour un cocktail en plein air, dans une ambiance conviviale et champêtre. Entre la vieille 4L décorée « Just Married », les rires des invités et les premiers verres partagés, l'atmosphère du lieu se prêtait parfaitement à ce genre de reportage.",
          "Ce genre de garden party en extérieur est aujourd'hui l'un des formats préférés des mariages en Bretagne : moins formel qu'un vin d'honneur classique, il laisse davantage de place à la spontanéité, et donc à des photos plus naturelles.",
        ],
        image: { src: '/images/blog/mariage-domaine-de-kerlys-helene-florian/garden-party.webp', alt: "Voiture décorée Just Married pendant la garden party au Domaine de Kerlys" },
      },
      {
        heading: 'Une cérémonie laïque en pleine nature',
        paragraphs: [
          "Pour la cérémonie laïque, Hélène et Florian avaient choisi un cadre naturel, à l'ombre des arbres du domaine, avec les invités installés sur des bancs en bois face à l'arche. Les vœux échangés dans ce décor de campagne bretonne ont donné l'un des moments les plus forts de la journée.",
          "De plus en plus de couples que j'accompagne en Bretagne optent pour une cérémonie laïque en extérieur : elle permet une liberté de ton et de mise en scène qu'une cérémonie religieuse ou civile n'offre pas toujours, et se prête magnifiquement à la lumière naturelle en fin d'après-midi.",
        ],
        image: { src: '/images/blog/mariage-domaine-de-kerlys-helene-florian/ceremonie-laique.webp', alt: "Cérémonie laïque en extérieur au Domaine de Kerlys à Briec-de-l'Odet" },
      },
    ],
    outro: "Un immense merci à Hélène et Florian pour leur confiance. Vous préparez votre mariage en Bretagne, au Domaine de Kerlys ou ailleurs dans le Finistère ? N'hésitez pas à me contacter pour échanger sur votre projet.",
    relatedLinks: [
      { label: 'Découvrir la galerie complète', href: '/galerie' },
      { label: 'Voir mes formules de mariage', href: '/services' },
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

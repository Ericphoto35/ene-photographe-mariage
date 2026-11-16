export type BlogSection = {
  heading: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export type BlogPost = {
  number: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  displayDate: string;
  location: string;
  venueUrl?: string;
  excerpt: string;
  coverImage: string;
  intro: string[];
  sections: BlogSection[];
  outro: string;
  relatedLinks: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    number: "01",
    slug: "mariage-trempe-sec-vitre-adeline-kevin",
    title: "Mariage au Trempe Sec a Vitre & ceremonies a Noyal : le reportage d'Adeline & Kevin",
    metaTitle: "Photographe Mariage Vitré & Noyal | Le Trempe Sec — Adeline & Kévin",
    metaDescription:
      "Reportage photo du mariage d'Adeline & Kévin le 29 juin 2024 en Ille-et-Vilaine : cérémonies civile et religieuse à la mairie et à l'église de Noyal, puis réception au Trempe Sec à Vitré.",
    date: "2024-06-29",
    displayDate: "29 Juin 2024",
    location: "Noyal & Le Trempe Sec, Vitré (Ille-et-Vilaine)",
    venueUrl: "https://www.letrempesec.fr/",
    excerpt:
      "Retour en images sur le mariage d'Adeline & Kévin le 29 juin 2024 en Ille-et-Vilaine, entre cérémonies à la mairie et à l'église de Noyal, et réception chaleureuse au Trempe Sec à Vitré.",
    coverImage:
      "/images/blog/mariage-trempe-sec-vitre-adeline-kevin/adelinekevintrempesec.webp",
    intro: [
      "Le 29 juin 2024, direction l'Ille-et-Vilaine, entre Rennes et Vitré, pour le mariage d'Adeline et Kévin. Une journée complète qui débute par l'émotion des cérémonies civile et religieuse à la mairie puis à l'église de Noyal, avant de rejoindre Le Trempe Sec à Vitré pour le vin d'honneur, la séance couple et la soirée.",
      "Photographier un mariage entre Noyal et Vitré, c'est suivre le rythme authentique d'une journée bretonne : la solennité des engagements entourés des familles, la sortie d'église sous les applaudissements, puis le souffle plus détendu d'un ancien corps de ferme rénové en pierres apparentes au cœur de la campagne vitréenne.",
      "Voici un aperçu du reportage, moment par moment.",
    ],
    sections: [
      {
        heading: "L'union civile a la mairie de Noyal",
        paragraphs: [
          "La journée s'ouvre à la mairie de Noyal pour la cérémonie civile, entourée des proches, des parents et des témoins d'Adeline et Kévin. Les regards complices, la lecture des actes et le premier « oui » officiel lancent avec beaucoup d'émotion le récit de cette journée en Ille-et-Vilaine.",
          "En reportage, je privilégie ici la spontanéité : capter un sourire échangé, une main serrée et les félicitations chaleureuses sur le parvis de la mairie avant de rejoindre l'église.",
        ],
        image: {
          src: "/images/blog/mariage-trempe-sec-vitre-adeline-kevin/adelinekevinmairie.webp",
          alt: "Cérémonie civile du mariage d'Adeline et Kévin à la mairie de Noyal en Ille-et-Vilaine",
        },
      },
      {
        heading: "La ceremonie religieuse a l'eglise de Noyal",
        paragraphs: [
          "À quelques pas de la mairie, l'émotion gagne encore en intensité sous les voûtes de l'église de Noyal. L'entrée des mariés, l'échange des consentements et la bénédiction des alliances offrent une atmosphère solennelle et lumineuse.",
          "À la sortie de l'église, les applaudissements et la joie des invités donnent lieu à des images vivantes et intemporelles, avant que le cortège ne prenne la direction de Vitré.",
        ],
        image: {
          src: "/images/blog/mariage-trempe-sec-vitre-adeline-kevin/adelinekevineglise.webp",
          alt: "Cérémonie religieuse d'Adeline et Kévin à l'église de Noyal près de Rennes et Vitré",
        },
      },
      {
        heading: "Reception, seance couple et fete au Trempe Sec a Vitre",
        paragraphs: [
          "Après les cérémonies à Noyal, cap sur Vitré pour rejoindre Le Trempe Sec. Cet ancien corps de ferme rénové, alliant pierres apparentes, hangar couvert et espaces extérieurs verdoyants, offre un cadre de caractère pour le vin d'honneur, les photos de groupe conviviales et une parenthèse à deux avec Adeline et Kévin dans la lumière de fin d'après-midi.",
          "La soirée se prolonge ensuite dans la salle de réception du Trempe Sec dans une ambiance chaleureuse et festive : discours, éclats de rire et ouverture de bal viennent clore en beauté ce reportage de mariage à Vitré.",
        ],
        image: {
          src: "/images/blog/mariage-trempe-sec-vitre-adeline-kevin/adelinekevintrempesec.webp",
          alt: "Réception de mariage d'Adeline et Kévin au domaine Le Trempe Sec à Vitré",
        },
      },
    ],
    outro:
      "Un immense merci à Adeline et Kévin pour leur confiance et leur accueil tout au long de cette journée du 29 juin 2024. Basé à Rennes, j'accompagne les futurs mariés dans toute l'Ille-et-Vilaine et en Bretagne : vous préparez votre mariage à Noyal, à Vitré, au Trempe Sec ou dans la région rennaise ? N'hésitez pas à me contacter pour me raconter votre projet.",
    relatedLinks: [
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules et tarifs de mariage", href: "/services" },
    ],
  },
  {
    number: "02",
    slug: "mariage-jardin-des-acanthes-benedicte-gael",
    title: "Mariage au Jardin des Acanthes à Plescop : le reportage de Bénédicte & Gaël",
    metaTitle: "Photographe Mariage Vannes | Jardin des Acanthes — Bénédicte & Gaël",
    metaDescription:
      "Reportage d'un photographe de mariage en Bretagne : Bénédicte & Gaël au Jardin des Acanthes à Plescop, près de Vannes, dans un parc du Morbihan.",
    date: "2026-10-20",
    displayDate: "20 Octobre 2026",
    location: "Jardin des Acanthes, Plescop (près de Vannes)",
    venueUrl: "https://www.jardindesacanthes.com/",
    excerpt:
      "Retour en images sur le mariage de Bénédicte & Gaël au Jardin des Acanthes, entre préparatifs, cérémonie sous les saules et fête dans le parc, le jour du solstice près de Vannes.",
    coverImage: "/images/blog/mariage-jardin-des-acanthes-benedicte-gael/ceremonie.webp",
    intro: [
      "Le 21 juin 2025, jour du solstice d'été, direction Plescop pour le mariage de Bénédicte et Gaël au Jardin des Acanthes. Un domaine privatisé à cinq minutes de Vannes, au cœur d'un parc arboré de deux hectares, où la journée se vit autant dehors que dedans.",
      "Photographier un mariage en Bretagne, dans le Morbihan près de Vannes, c'est souvent jouer avec une lumière longue et un lieu assez vaste pour que tout le monde respire. Le Jardin des Acanthes s'y prête particulièrement — halle pour le cocktail, salle ouverte sur le jardin, maison de famille à l'écart du voisinage.",
      "Voici un aperçu du reportage, moment par moment.",
    ],
    sections: [
      {
        heading: "Les préparatifs, entre détails et émotion",
        paragraphs: [
          "La journée commence par les préparatifs : la robe en dentelle sur son cintre, les alliances, les chaussures, le gilet rose de Gaël. Ce sont des instants discrets, souvent parmi les plus parlants d'un reportage, parce qu'ils racontent le couple avant même la cérémonie.",
          "C'est le moment où je travaille en retrait, sur les textures et les gestes plutôt que sur les grands tableaux. Une manière de poser l'ambiance de la journée sans jamais être intrusif.",
        ],
        image: {
          src: "/images/blog/mariage-jardin-des-acanthes-benedicte-gael/preparatifs.webp",
          alt: "Préparatifs du mariage de Bénédicte et Gaël : robe, alliances et détails du jour J au Jardin des Acanthes",
        },
      },
      {
        heading: "Une cérémonie sous les saules",
        paragraphs: [
          "Bénédicte et Gaël se sont dit oui en extérieur, dans le parc du Jardin des Acanthes, face à leurs proches. Les saules, l'arche fleurie et la lumière du 21 juin portent la cérémonie : un cadre naturel, assez vaste pour que les émotions respirent.",
          "Le baiser sous l'arche, le lancer du bouquet, les rires sur la pelouse : ce sont des images qui passent vite, et que le reportage a justement pour rôle de retenir.",
        ],
      },
      {
        heading: "La fête sur la pelouse",
        paragraphs: [
          "Après la cérémonie, la journée bascule vers la fête, toujours dans le parc. Haie d'honneur, photos de groupe sous les arbres, cette énergie un peu débridée quand tout le monde a soufflé. C'est un autre rythme de photographie — moins de silence, plus de mouvement.",
          "J'aime cette partie du reportage autant que la cérémonie, parce qu'elle raconte Bénédicte et Gaël autrement : moins solennels, plus vivants, entourés de leurs proches jusqu'au bout.",
        ],
        image: {
          src: "/images/blog/mariage-jardin-des-acanthes-benedicte-gael/soiree.jpg",
          alt: "Fête de mariage de Bénédicte et Gaël sur la pelouse du Jardin des Acanthes près de Vannes",
        },
      },
    ],
    outro:
      "Un immense merci à Bénédicte et Gaël pour leur confiance. Basé à Rennes, je photographie des mariages dans toute la Bretagne. Vous préparez le vôtre près de Vannes, au Jardin des Acanthes ou ailleurs dans le Morbihan ? N'hésitez pas à me contacter pour échanger sur votre projet.",
    relatedLinks: [
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
  {
    number: "03",
    slug: "mariage-haras-du-reuzel-charlotte-thomas",
    title: "Mariage au Haras du Reuzel à Orgères : le reportage de Charlotte & Thomas",
    metaTitle: "Photographe Mariage Rennes | Haras du Reuzel — Charlotte & Thomas",
    metaDescription:
      "Reportage photo du mariage de Charlotte & Thomas au Haras du Reuzel à Orgères, près de Rennes : préparatifs, cérémonie et séance couple dans un domaine champêtre en Ille-et-Vilaine.",
    date: "2026-09-23",
    displayDate: "23 Septembre 2026",
    location: "Haras du Reuzel, Orgères (près de Rennes)",
    venueUrl: "https://www.harasdureuzel.com/",
    excerpt:
      "Retour en images sur le mariage de Charlotte & Thomas au Haras du Reuzel, entre préparatifs intimistes, cérémonie et séance couple dans un domaine verdoyant aux portes de Rennes.",
    coverImage: "/images/blog/mariage-haras-du-reuzel-charlotte-thomas/couverture.jpg",
    intro: [
      "Le 6 septembre 2025, direction Orgères, à une dizaine de minutes de Rennes, pour le mariage de Charlotte et Thomas au Haras du Reuzel. Un domaine familial niché dans un parc verdoyant, privatisé pour la journée, où la campagne d'Ille-et-Vilaine s'offre tout entière aux mariés et à leurs invités.",
      "Photographier un mariage près de Rennes, c'est souvent retrouver ce mélange très breton : grands arbres, lumière changeante, et un lieu assez intimiste pour laisser respirer les émotions. Le Haras du Reuzel s'y prête particulièrement — préau, terrasse, parc arboré — un cadre idéal pour un reportage naturel, sans jamais forcer la pose.",
      "Voici un aperçu du reportage, moment par moment.",
    ],
    sections: [
      {
        heading: "Les préparatifs, entre détails et émotion",
        paragraphs: [
          "La journée commence toujours par les préparatifs : les gestes précis, les derniers ajustements, les regards complices avant de se rejoindre. Ce sont des instants discrets, souvent parmi les plus parlants d'un reportage, parce qu'ils racontent le couple avant même la cérémonie.",
          "C'est le moment où je travaille en retrait, sur les textures et les gestes plutôt que sur les grands tableaux. Une manière de poser l'ambiance de la journée sans jamais être intrusif — et de garder une trace de ces détails qu'on ne revoit plus une fois le cortège lancé.",
        ],
        image: {
          src: "/images/blog/mariage-haras-du-reuzel-charlotte-thomas/preparatifs.jpg",
          alt: "Préparation du mariage de Charlotte et Thomas au Haras du Reuzel près de Rennes",
        },
      },
      {
        heading: "La cérémonie au Haras du Reuzel",
        paragraphs: [
          "Charlotte et Thomas se sont dit oui au cœur du domaine, face à leurs proches. Au Haras du Reuzel, le cadre naturel porte la cérémonie : verdure, lumière de début septembre, et cette attention particulière des invités quand le silence se fait.",
          "C'est souvent le moment le plus dense d'un reportage : les vœux, les regards dans l'assemblée, les émotions qui passent trop vite pour être retenues autrement qu'en image. Photographier une cérémonie près de Rennes, dans un lieu comme celui-ci, permet de rester proche sans jamais casser l'intimité du moment.",
        ],
        image: {
          src: "/images/blog/mariage-haras-du-reuzel-charlotte-thomas/ceremonie.jpg",
          alt: "Cérémonie de mariage de Charlotte et Thomas au Haras du Reuzel à Orgères",
        },
      },
      {
        heading: "La séance couple dans le parc",
        paragraphs: [
          "Après la cérémonie, on s'éloigne un instant des invités pour une séance couple dans le parc du haras. Moins de bruit, plus de souffle : c'est le moment où Charlotte et Thomas se retrouvent à deux, et où le reportage devient plus contemplatif.",
          "Le Haras du Reuzel offre plein de recoins photogéniques — allées, arbres, lumière filtrée — idéaux pour des portraits naturels. J'aime cette parenthèse autant que le reste de la journée : elle donne au couple des images plus intimes, à garder pour eux.",
        ],
        image: {
          src: "/images/blog/mariage-haras-du-reuzel-charlotte-thomas/couple.jpg",
          alt: "Séance couple de Charlotte et Thomas dans le parc du Haras du Reuzel",
        },
      },
    ],
    outro:
      "Un immense merci à Charlotte et Thomas pour leur confiance. Vous préparez votre mariage près de Rennes, au Haras du Reuzel ou ailleurs en Ille-et-Vilaine ? N'hésitez pas à me contacter pour échanger sur votre projet.",
    relatedLinks: [
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
  {
    number: "04",
    slug: "mariage-manoir-du-pas-jahan-rudy-kelly",
    title: "Mariage au Manoir du Pas Jahan à Couëron : le reportage de Rudy & Kelly",
    metaTitle: "Photographe Mariage Nantes | Manoir du Pas Jahan — Rudy & Kelly",
    metaDescription:
      "Reportage photo du mariage de Rudy & Kelly au Manoir du Pas Jahan à Couëron, près de Nantes : cérémonie laïque et soirée dans un manoir du XIVe siècle.",
    date: "2026-08-19",
    displayDate: "19 Août 2026",
    location: "Manoir du Pas Jahan, Couëron (près de Nantes)",
    venueUrl: "https://www.location-salles-nantes.net/fr",
    excerpt:
      "Retour en images sur le mariage de Rudy & Kelly au Manoir du Pas Jahan, entre cérémonie laïque intimiste et soirée dans un manoir du XIVe siècle aux portes de Nantes.",
    coverImage: "/images/blog/mariage-manoir-du-pas-jahan-rudy-kelly/montage.jpg",
    intro: [
      "Le 24 août 2024, direction la Loire-Atlantique pour le mariage de Rudy et Kelly, célébré au Manoir du Pas Jahan à Couëron, à une quinzaine de minutes de Nantes. Un lieu de réception que j'avais envie de raconter : une demeure du XIVe siècle, rénovée dans le respect des matériaux d'origine, nichée dans la campagne couëronnaise.",
      "Photographier un mariage près de Nantes, c'est souvent retrouver ce mélange très Pays de la Loire : pierre, verdure, et une vraie proximité avec la ville sans jamais en sentir l'agitation. Le Manoir du Pas Jahan incarne parfaitement cet équilibre — assez intimiste pour une cérémonie laïque, assez vaste pour une soirée qui se prolonge.",
      "Voici un aperçu du reportage, moment par moment.",
    ],
    sections: [
      {
        heading: "Les préparatifs, entre détails et émotion",
        paragraphs: [
          "La journée commence toujours par les préparatifs : les alliances, les chaussures, le nœud papillon, les petits objets gravés au nom des mariés. Ce sont des instants discrets, souvent parmi les plus parlants d'un reportage, parce qu'ils racontent le couple avant même qu'on le voie.",
          "C'est le moment où je travaille en retrait, sur les textures et les gestes plutôt que sur les visages. Une manière de poser l'ambiance de la journée sans jamais être intrusif — et de garder une trace de ces détails qu'on ne revoit plus une fois la cérémonie lancée.",
        ],
        image: {
          src: "/images/blog/mariage-manoir-du-pas-jahan-rudy-kelly/preparatifs.jpg",
          alt: "Préparation du mariage de Rudy et Kelly : alliances, chaussures et détails du jour J",
        },
      },
      {
        heading: "Une cérémonie laïque au Manoir du Pas Jahan",
        paragraphs: [
          "Rudy et Kelly se sont dit oui lors d'une cérémonie laïque en extérieur, sous une arche de bois habillée de fleurs et de voilage, face à leurs invités installés dans le parc du manoir. C'est souvent le moment le plus dense d'un reportage : les vœux lus à voix haute, les regards dans l'assemblée, la lumière naturelle de fin d'après-midi.",
          "De plus en plus de couples que j'accompagne autour de Nantes optent pour une cérémonie laïque sur leur lieu de réception : tout se passe au même endroit, les invités ne bougent pas, et le récit photo gagne en continuité. Le Manoir du Pas Jahan s'y prête particulièrement, entre pierre, verdure et cette vieille voiture décapotable qui attendait le couple dans la cour.",
        ],
      },
      {
        heading: "La soirée au Manoir du Pas Jahan",
        paragraphs: [
          "Après la cérémonie, la journée bascule vers la fête. Au manoir, on glisse naturellement du parc vers la salle : première danse, toasts, photos de groupe sur la pelouse, et cette énergie un peu débridée qui arrive quand tout le monde a soufflé. C'est un autre rythme de photographie — moins de silence, plus de mouvement.",
          "J'aime cette partie du reportage autant que la cérémonie, parce qu'elle raconte le couple autrement : moins solennel, plus vivant. Une soirée de mariage près de Nantes, dans un lieu comme le Pas Jahan, a souvent cette ambiance chaleureuse où les invités restent jusqu'au bout.",
        ],
        image: {
          src: "/images/blog/mariage-manoir-du-pas-jahan-rudy-kelly/soiree.jpg",
          alt: "Soirée de mariage de Rudy et Kelly au Manoir du Pas Jahan près de Nantes",
        },
      },
    ],
    outro:
      "Un immense merci à Rudy et Kelly pour leur confiance. Vous préparez votre mariage près de Nantes, au Manoir du Pas Jahan ou ailleurs en Loire-Atlantique ? N'hésitez pas à me contacter pour échanger sur votre projet.",
    relatedLinks: [
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
  {
    number: "05",
    slug: "mariage-domaine-de-kerlys-helene-florian",
    title: "Mariage au Domaine de Kerlys à Briec-de-l'Odet : le reportage d'Hélène & Florian",
    metaTitle: "Photographe Mariage Domaine de Kerlys | Reportage Hélène & Florian",
    metaDescription:
      "Reportage photo d'un mariage champêtre au Domaine de Kerlys à Briec-de-l'Odet, dans le Finistère : préparatifs, mairie, garden party et cérémonie laïque.",
    date: "2026-07-10",
    displayDate: "10 Juillet 2026",
    location: "Domaine de Kerlys, Briec-de-l'Odet (Finistère)",
    venueUrl: "https://www.domainedekerlys.com/",
    excerpt:
      "Retour en images sur le mariage champêtre d'Hélène & Florian au Domaine de Kerlys, entre cérémonie laïque en pleine nature et garden party conviviale.",
    coverImage: "/images/blog/mariage-domaine-de-kerlys-helene-florian/montage.webp",
    intro: [
      "Début juillet, j'ai eu la chance de couvrir le mariage d'Hélène et Florian au Domaine de Kerlys, un lieu de réception niché dans la campagne de Briec-de-l'Odet, à quelques minutes de Quimper. Une journée entière passée entre préparatifs, officialisation à la mairie, garden party et cérémonie laïque en plein air — exactement le genre de mariage champêtre que j'aime raconter en tant que photographe de mariage en Bretagne.",
      "Le Finistère offre un cadre qui se prête particulièrement bien à ce style de reportage : pierre, verdure et lumière changeante tout au long de la journée. C'est l'un des grands plaisirs de photographier des mariages en Bretagne, où chaque lieu de réception a sa propre personnalité.",
      "Voici un aperçu du reportage, moment par moment.",
    ],
    sections: [
      {
        heading: "Les préparatifs, entre émotion et petits détails",
        paragraphs: [
          "Tout commence toujours par les préparatifs : la coiffure, les derniers ajustements, les alliances posées sur leur coussin. Ce sont des instants discrets, souvent les plus émouvants de la journée, où l'on sent la tension joyeuse monter avant la cérémonie.",
          "C'est aussi le moment où je travaille en retrait, avec des focales serrées sur les détails plutôt que sur les visages : un bijou, une texture de tissu, un geste. Cette approche permet de raconter l'ambiance des préparatifs sans jamais être intrusif.",
        ],
        image: {
          src: "/images/blog/mariage-domaine-de-kerlys-helene-florian/preparatifs.webp",
          alt: "Préparation de la mariée avant le mariage au Domaine de Kerlys",
        },
      },
      {
        heading: "Direction la mairie",
        paragraphs: [
          "Avant de rejoindre le Domaine de Kerlys pour la fête, Hélène et Florian sont passés par la mairie pour officialiser leur union. Un moment plus intime, entouré de leurs proches, avant de filer vers l'Odet pour la suite de la journée.",
          "En Bretagne, il est très courant que la mairie et le lieu de réception soient deux endroits distincts, parfois éloignés de plusieurs dizaines de kilomètres : une organisation qui demande un peu de logistique côté timing, mais qui permet de choisir un lieu de fête vraiment adapté à l'ambiance souhaitée.",
        ],
      },
      {
        heading: "Garden party au Domaine de Kerlys",
        paragraphs: [
          "Direction Briec-de-l'Odet et le Domaine de Kerlys pour un cocktail en plein air, dans une ambiance conviviale et champêtre. Entre la vieille 4L décorée « Just Married », les rires des invités et les premiers verres partagés, l'atmosphère du lieu se prêtait parfaitement à ce genre de reportage.",
          "Ce genre de garden party en extérieur est aujourd'hui l'un des formats préférés des mariages en Bretagne : moins formel qu'un vin d'honneur classique, il laisse davantage de place à la spontanéité, et donc à des photos plus naturelles.",
        ],
        image: {
          src: "/images/blog/mariage-domaine-de-kerlys-helene-florian/garden-party.webp",
          alt: "Voiture décorée Just Married pendant la garden party au Domaine de Kerlys",
        },
      },
      {
        heading: "Une cérémonie laïque en pleine nature",
        paragraphs: [
          "Pour la cérémonie laïque, Hélène et Florian avaient choisi un cadre naturel, à l'ombre des arbres du domaine, avec les invités installés sur des bancs en bois face à l'arche. Les vœux échangés dans ce décor de campagne bretonne ont donné l'un des moments les plus forts de la journée.",
          "De plus en plus de couples que j'accompagne en Bretagne optent pour une cérémonie laïque en extérieur : elle permet une liberté de ton et de mise en scène qu'une cérémonie religieuse ou civile n'offre pas toujours, et se prête magnifiquement à la lumière naturelle en fin d'après-midi.",
        ],
        image: {
          src: "/images/blog/mariage-domaine-de-kerlys-helene-florian/ceremonie-laique.webp",
          alt: "Cérémonie laïque en extérieur au Domaine de Kerlys à Briec-de-l'Odet",
        },
      },
    ],
    outro:
      "Un immense merci à Hélène et Florian pour leur confiance. Vous préparez votre mariage en Bretagne, au Domaine de Kerlys ou ailleurs dans le Finistère ? N'hésitez pas à me contacter pour échanger sur votre projet.",
    relatedLinks: [
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}


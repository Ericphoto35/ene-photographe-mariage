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
      {
        label: "Guide : Où se marier autour de Rennes et en Ille-et-Vilaine ?",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
      {
        label: "Guide : Organiser le timing photo de son mariage sans stress",
        href: "/blog/organiser-planning-timing-photo-mariage-sans-stress",
      },
      { label: "Voir mes formules et tarifs de mariage", href: "/services" },
    ],
  },
  {
    number: "02",
    slug: "mariage-jardin-des-acanthes-benedicte-gael",
    title: "Mariage au Jardin des Acanthes a Plescop : le reportage de Benedicte & Gael",
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
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      {
        label: "Guide : Où se marier autour de Rennes et en Bretagne ?",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
  {
    number: "03",
    slug: "mariage-haras-du-reuzel-charlotte-thomas",
    title: "Mariage au Haras du Reuzel a Orgeres : le reportage de Charlotte & Thomas",
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
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      {
        label: "Guide : Les plus beaux domaines de mariage autour de Rennes",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
      {
        label: "Guide : Où faire ses photos de couple à Rennes & Saint-Malo ?",
        href: "/blog/ou-faire-photos-couple-mariage-rennes-saint-malo-bretagne",
      },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
  {
    number: "04",
    slug: "mariage-manoir-du-pas-jahan-rudy-kelly",
    title: "Mariage au Manoir du Pas Jahan a Coueron : le reportage de Rudy & Kelly",
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
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      {
        label: "Guide : Organiser le timing photo de son mariage sans stress",
        href: "/blog/organiser-planning-timing-photo-mariage-sans-stress",
      },
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
    ],
  },
  {
    number: "05",
    slug: "mariage-domaine-de-kerlys-helene-florian",
    title: "Mariage au Domaine de Kerlys a Briec-de-l'Odet : le reportage d'Helene & Florian",
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
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      { label: "Découvrir la galerie complète", href: "/projects" },
      { label: "Voir mes formules de mariage", href: "/services" },
      {
        label: "Guide : Où se marier autour de Rennes et en Bretagne ?",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
    ],
  },
  {
    number: "06",
    slug: "domaines-salles-mariage-rennes-ille-et-vilaine",
    title: "Ou se marier autour de Rennes et en Bretagne ? Les plus beaux domaines de reception",
    metaTitle: "Où se marier autour de Rennes ? Domaines & Lieux de Réception en Bretagne (35)",
    metaDescription:
      "Sélection et conseils d'un photographe de mariage à Rennes sur les plus beaux domaines, manoirs et salles de réception en Ille-et-Vilaine (35) et en Bretagne : Haras du Reuzel, Le Trempe Sec à Vitré, Jardin des Acanthes...",
    date: "2026-11-18",
    displayDate: "Guide Mariés — Bretagne",
    location: "Rennes, Vitré, Vannes, Nantes & Bretagne",
    excerpt:
      "Corps de ferme en pierres apparentes, haras verdoyants aux portes de Rennes ou manoirs historiques : comment choisir votre lieu de réception en Ille-et-Vilaine et en Bretagne pour un mariage inoubliable et photogénique.",
    coverImage: "/images/ceremonie.webp",
    intro: [
      "Choisir son lieu de réception est souvent la toute première grande décision d'un couple qui prépare son mariage à Rennes, en Ille-et-Vilaine ou ailleurs en Bretagne. Au-delà de la capacité d'accueil et du couchage, l'architecture du domaine, l'orientation de la cour et les espaces extérieurs façonnent toute l'atmosphère — et la lumière — de votre journée.",
      "En tant que photographe de mariage basé à Rennes, j'ai la chance d'accompagner des couples dans des lieux de caractère aux quatre coins de la Bretagne : d'Orgères à Vitré, en passant par Vannes, Quimper ou les portes de Nantes. Chaque domaine possède son propre rythme et sa propre signature visuelle.",
      "Voici mes conseils de terrain et quelques coups de cœur découverts lors de mes derniers reportages pour vous aider à trouver le lieu idéal.",
    ],
    sections: [
      {
        heading: "Aux portes de Rennes et a Vitre : le charme de l'Ille-et-Vilaine (35)",
        paragraphs: [
          "L'Ille-et-Vilaine regorge d'anciens corps de ferme rénovés et de domaines familiaux accessibles en moins de vingt à trente minutes depuis Rennes. Au sud de la métropole rennaise, à Orgères, le Haras du Reuzel séduit par son grand parc arboré, son préau plein de cachet et son cadre champêtre préservé, parfait pour un cocktail ou une cérémonie laïque à l'ombre des grands arbres.",
          "À l'est de Rennes, du côté de Vitré et Noyal-sur-Vilaine, un domaine comme Le Trempe Sec incarne merveilleusement le mariage breton chaleureux : pierres apparentes, vaste hangar couvert pour profiter du vin d'honneur même si une averse passe, et une salle de réception conviviale ouverte sur la campagne vitréenne.",
        ],
        image: {
          src: "/images/blog/mariage-trempe-sec-vitre-adeline-kevin/adelinekevintrempesec.webp",
          alt: "Réception de mariage en Ille-et-Vilaine au domaine Le Trempe Sec à Vitré près de Rennes",
        },
      },
      {
        heading: "Morbihan, Finistere et Pays de la Loire : grands parcs et manoirs historiques",
        paragraphs: [
          "Si vous rêvez d'un domaine entouré de jardins à quelques minutes de l'océan ou du Golfe du Morbihan, le Jardin des Acanthes à Plescop (tout près de Vannes) offre deux hectares de verdure et de saules pleureurs où la lumière d'été glisse jusqu'à la tombée de la nuit. Plus à l'ouest, dans le Finistère près de Quimper, le Domaine de Kerlys à Briec-de-l'Odet est un écrin idéal pour une garden party et une cérémonie laïque au vert.",
          "Enfin, pour les couples qui réunissent leurs familles entre Bretagne et Loire-Atlantique, des demeures du XIVe siècle comme le Manoir du Pas Jahan à Couëron (aux portes de Nantes) marient la noblesse des vieilles pierres et l'intimité d'un parc clos.",
        ],
        image: {
          src: "/images/Garden_1.webp",
          alt: "Garden party et vin d'honneur en extérieur dans un domaine de mariage en Bretagne",
        },
      },
      {
        heading: "3 conseils de photographe pour choisir votre domaine en Bretagne",
        paragraphs: [
          "1. Pensez toujours au « plan B » lumineux : en Bretagne, la météo peut changer en une heure. Privilégiez un domaine doté d'un préau, d'une halle en bois ou d'une orangerie ouverte sur l'extérieur plutôt qu'une tente sombre. Vous garderez une belle lumière naturelle quoi qu'il arrive.",
          "2. Regardez où se couche le soleil : lors de votre visite du lieu, demandez où se trouve l'ouest. C'est là que nous réaliserons vos plus belles photos de couple à la Golden Hour, pendant que vos invités profitent de la fin du vin d'honneur. 3. Privilégiez l'unité de lieu : moins vous avez de temps de route entre la cérémonie et le cocktail, plus vous profitez de vos proches — et plus votre reportage photo respire la sérénité.",
        ],
        image: {
          src: "/images/couche.webp",
          alt: "Silhouette de mariés au coucher du soleil lors d'un mariage en Bretagne",
        },
      },
    ],
    outro:
      "Vous avez trouvé votre domaine de réception autour de Rennes, à Vitré, Saint-Malo, Vannes ou Nantes, et vous cherchez un photographe au style documentaire et intemporel pour raconter votre journée ? Contactez-moi pour vérifier ma disponibilité à votre date.",
    relatedLinks: [
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      {
        label: "Reportage au Trempe Sec à Vitré (Adeline & Kévin)",
        href: "/blog/mariage-trempe-sec-vitre-adeline-kevin",
      },
      {
        label: "Reportage au Haras du Reuzel près de Rennes (Charlotte & Thomas)",
        href: "/blog/mariage-haras-du-reuzel-charlotte-thomas",
      },
      { label: "Voir mes formules et tarifs de mariage", href: "/services" },
    ],
  },
  {
    number: "07",
    slug: "ou-faire-photos-couple-mariage-rennes-saint-malo-bretagne",
    title: "Ou faire ses photos de couple de mariage a Rennes, Saint-Malo et en Bretagne ?",
    metaTitle: "Photos de Couple Mariage Rennes, Saint-Malo & Bretagne : Les Plus Beaux Lieux",
    metaDescription:
      "Où réaliser sa séance photo de couple ou d'engagement à Rennes, Saint-Malo, Cancale et en Bretagne ? Les meilleurs lieux et conseils lumière par L'Oeil de Monsieur R.",
    date: "2026-11-17",
    displayDate: "Conseils Photo — Bretagne",
    location: "Rennes, Saint-Malo, Cancale & Côte d'Émeraude",
    excerpt:
      "Remparts de Saint-Malo face au large, ruelles historiques et parcs de Rennes ou sentiers côtiers de Bretagne : où et à quelle heure organiser votre séance couple ou séance d'engagement ?",
    coverImage: "/images/87889333_3052041288163709_1545270873085181952_n.jpg",
    intro: [
      "La séance photo de couple — qu'elle ait lieu le jour du mariage, lors d'une séance d'engagement quelques mois avant, ou en séance « Day After » — est le seul moment où vous vous retrouvez vraiment tous les deux, loin du tumulte des préparatifs et du protocole.",
      "En Bretagne, nous avons une chance immense : en moins d'une heure de route depuis Rennes, les décors passent des façades à pans de bois et des jardins botaniques aux falaises sauvages de la Côte d'Émeraude, de Saint-Malo à Cancale.",
      "Voici mes lieux préférés et mes conseils pour des portraits de couple naturels, élégants et chargés d'émotion.",
    ],
    sections: [
      {
        heading: "La Cote d'Emeraude : Saint-Malo, Cancale et la Pointe du Grouin",
        paragraphs: [
          "Pour des images au souffle cinématographique, la côte nord de l'Ille-et-Vilaine est imbattable. Les remparts de Saint-Malo, avec la pierre granitique, le Fort National en arrière-plan et le vent marin qui donne du mouvement au voile ou à la robe, offrent un décor spectaculaire en toute saison.",
          "À quelques kilomètres, les sentiers douaniers vers Cancale, la Pointe du Grouin ou Saint-Briac-sur-Mer permettent de s'isoler face à la mer, surtout en fin de journée lorsque la lumière rasante dore la lande et les rochers. C'est aussi un terrain de jeu magnifique pour une séance d'engagement avant le mariage ou un « Day After » les pieds dans le sable.",
        ],
        image: {
          src: "/images/87889333_3052041288163709_1545270873085181952_n.jpg",
          alt: "Photo de couple de mariés sur les remparts de Saint-Malo face à la mer et au Fort National",
        },
      },
      {
        heading: "A Rennes : entre patrimoine historique et ecrins de verdure",
        paragraphs: [
          "Si votre mariage se déroule à Rennes ou dans sa première couronne, inutile de faire des dizaines de kilomètres le jour J. Le centre historique de Rennes — autour des portes Mordelaises, de la place du Parlement de Bretagne ou des ruelles pavées bordées d'hôtels particuliers — apporte une esthétique éditoriale très élégante, particulièrement adaptée au noir et blanc et au tirage Fine Art.",
          "Côté nature, le parc du Thabor (avec sa roseraie et ses grilles anciennes) ou le parc Oberthür offrent une lumière filtrée par les grands arbres, idéale lorsque le soleil est encore haut en début d'après-midi.",
        ],
        image: {
          src: "/images/couple1.webp",
          alt: "Portrait de couple de mariage devant une porte ancienne en bois et pierre en Bretagne",
        },
      },
      {
        heading: "Le secret d'une seance couple reussie le jour J : la regle des 2 x 15 minutes",
        paragraphs: [
          "Beaucoup de futurs mariés craignent de devoir quitter leurs invités pendant une heure et demie le jour de leur mariage. Ma méthode est tout autre : plutôt qu'une longue séance fatigante en plein soleil à 15 h, je vous propose deux courtes parenthèses de 15 à 20 minutes directement sur votre lieu de réception.",
          "Une première respiration juste après la cérémonie ou à l'arrivée au domaine, puis une seconde échappée de 15 minutes au coucher du soleil (la fameuse Golden Hour), juste avant de passer à table. Vous profitez pleinement de votre cocktail, et vous repartez avec des portraits baignés dans la plus belle lumière de la journée.",
        ],
        image: {
          src: "/images/joeetseb1.webp",
          alt: "Portrait naturel et complice de mariés lors de leur séance photo de couple en Bretagne",
        },
      },
    ],
    outro:
      "Envie de préparer une séance d'engagement à Saint-Malo, à Rennes ou sur la côte bretonne avant votre mariage ? Parlons-en ensemble : la séance d'engagement est le meilleur moyen de faire connaissance avec l'objectif avant le jour J.",
    relatedLinks: [
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      { label: "Découvrir le portfolio et les galeries", href: "/projects" },
      {
        label: "Guide : Où se marier autour de Rennes (Domaines & Lieux)",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
      { label: "Voir mes formules (Mariage & Séance d'Engagement)", href: "/services" },
    ],
  },
  {
    number: "08",
    slug: "organiser-planning-timing-photo-mariage-sans-stress",
    title: "Comment organiser le timing photo de son mariage pour profiter de ses invites ?",
    metaTitle: "Planning & Timing Photo Mariage : Le Guide Complet pour un Jour J Sans Stress",
    metaDescription:
      "Combien de temps prévoir pour les préparatifs, les photos de groupe, le vin d'honneur et la séance couple ? Les conseils d'un photographe de mariage à Rennes pour un planning fluide.",
    date: "2026-11-15",
    displayDate: "Organisation — Jour J",
    location: "Rennes & Toute la Bretagne",
    excerpt:
      "Préparatifs le matin, sortie de mairie ou d'église, photos de groupe en 20 minutes chrono et lumière du soir : comment construire un planning de mariage fluide qui laisse toute la place à l'émotion.",
    coverImage: "/images/Mairie.webp",
    intro: [
      "Lorsqu'on organise son mariage pour la première fois, il est difficile de savoir combien de temps prévoir pour chaque étape de la journée. Un timing trop serré génère du stress, tandis qu'un planning bien pensé vous permet d'oublier la montre — et d'oublier l'appareil photo — pour vivre chaque minute à 100 % avec vos proches.",
      "Après des dizaines de mariages photographiés à Rennes et à travers toute la Bretagne, j'accompagne systématiquement mes couples en amont pour construire avec eux un déroulé réaliste, fluide et lumineux.",
      "Voici mes repères concrets, étape par étape, pour organiser votre journée sans temps mort ni course contre la montre.",
    ],
    sections: [
      {
        heading: "1. Les preparatifs (compter 1h30 a 2h sur place)",
        paragraphs: [
          "Les préparatifs ne se résument pas à l'habillage final : c'est le prologue de votre histoire. Je rejoins généralement les mariés pour la dernière demi-heure de maquillage et de coiffure, puis pour les détails (la robe suspendue, les alliances, le bouquet, le costume) et enfin l'enfilage avec vos témoins ou vos parents.",
          "Astuce de photographe : choisissez la pièce la plus lumineuse de la maison ou du domaine (près d'une grande fenêtre, lumière du jour sans éclairage jaune au plafond) et rangez les sacs et valises dans une pièce voisine. En deux minutes, la pièce devient un véritable studio naturel.",
        ],
        image: {
          src: "/images/ladyprep.webp",
          alt: "Préparatifs de la mariée en lumière naturelle lors d'un mariage en Bretagne",
        },
      },
      {
        heading: "2. Photos de groupe : l'astuce pour tout boucler en 20 minutes",
        paragraphs: [
          "C'est souvent le moment redouté par les mariés : passer une heure entière à appeler des invités éparpillés pendant que le cocktail refroidit. La solution est très simple : préparez à l'avance une liste de 10 à 12 groupes maximum, ordonnée des plus âgés (grands-parents, parents) aux plus jeunes (amis, témoins).",
          "Confiez cette liste à deux témoins à la voix porteuse qui connaissent vos familles : pendant que je photographie le groupe N°1, ils rassemblent déjà le groupe N°2. Résultat : en 20 à 25 minutes dans la bonne humeur, toutes vos photos de famille sont dans la boîte et tout le monde file trinquer.",
        ],
        image: {
          src: "/images/groupe1.webp",
          alt: "Photo de groupe conviviale et dynamique lors d'un mariage en Bretagne",
        },
      },
      {
        heading: "3. Vin d'honneur, Golden Hour et entree en salle",
        paragraphs: [
          "Une fois les photos de groupe terminées, place au reportage sur le vif : éclats de rire, embrassades, animations, détails de la décoration de salle avant l'entrée des invités. C'est là que l'approche documentaire prend tout son sens : je me fonds parmi vos convives pour saisir les instants que vous n'avez même pas eu le temps de voir.",
          "En été en Bretagne (de mai à septembre), le soleil se couche tard, entre 21 h et 22 h. Prévoir une micro-pause de 10 minutes entre le fromage et le dessert — ou juste avant d'entrer en salle — permet de capturer quelques images magiques au crépuscule, avant d'enchaîner sur les discours et votre première danse.",
        ],
        image: {
          src: "/images/premieredanse.webp",
          alt: "Ouverture de bal et première danse des mariés lors de la soirée de mariage",
        },
      },
    ],
    outro:
      "Chaque mariage a son propre rythme, et mon rôle commence bien avant le jour J pour vous aider à bâtir un planning sur mesure. Vous préparez votre mariage à Rennes ou en Bretagne ? Échangeons sur votre journée.",
    relatedLinks: [
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
      {
        label: "Guide : Où faire ses photos de couple à Rennes & Saint-Malo ?",
        href: "/blog/ou-faire-photos-couple-mariage-rennes-saint-malo-bretagne",
      },
      {
        label: "Guide : Les plus beaux domaines de mariage autour de Rennes",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
      { label: "Découvrir mes formules et demander un devis", href: "/services" },
    ],
  },
  {
    number: "09",
    slug: "prix-tarif-photographe-mariage-rennes-bretagne",
    title: "Quel est le prix d'un photographe de mariage a Rennes et en Bretagne ?",
    metaTitle: "Prix Photographe Mariage Rennes & Bretagne : Tarifs, Formules et Budget",
    metaDescription:
      "Combien coûte un photographe de mariage à Rennes et en Bretagne ? Découvrez les tarifs moyens, ce que comprend chaque formule (de 1 200 € à 2 500 €) et comment choisir votre photographe.",
    date: "2026-11-14",
    displayDate: "Guide Budget — Bretagne",
    location: "Rennes, Ille-et-Vilaine & Toute la Bretagne",
    excerpt:
      "Transparence sur les tarifs d'un photographe de mariage en Bretagne : pourquoi les prix varient, combien d'heures de présence prévoir et que comprennent réellement les formules de reportage.",
    coverImage: "/images/rkmariage.webp",
    intro: [
      "Lorsqu'on commence à établir le budget de son mariage à Rennes, en Ille-et-Vilaine ou en Bretagne, la question du tarif du photographe arrive très vite. Entre les offres à quelques centaines d'euros sur les petites annonces et les prestations haut de gamme, il n'est pas toujours simple de comprendre ce qui justifie le prix d'un reportage professionnel.",
      "Pourtant, une fois la fête terminée, le gâteau dégusté et les fleurs séchées, les photographies — aux côtés de vos alliances — sont le seul patrimoine matériel et émotionnel qui traverse les décennies.",
      "Voici un guide clair et transparent pour comprendre les tarifs d'un photographe de mariage à Rennes et choisir la formule adaptée à votre journée.",
    ],
    sections: [
      {
        heading: "Combien coute en moyenne un photographe de mariage en Bretagne ?",
        paragraphs: [
          "En Bretagne et dans le Grand Ouest (Rennes, Saint-Malo, Vannes, Nantes, Quimper), le tarif d'un photographe de mariage professionnel déclaré et expérimenté se situe généralement entre 1 200 € et 2 800 € selon la durée de présence et les supports inclus (albums faits main, coffrets de tirages Fine Art, séance d'engagement).",
          "Pour ma part, j'ai conçu trois formules claires et évolutives : la formule Essentiel à partir de 1 200 € (8 heures de couverture, idéale de la cérémonie au cocktail avec plus de 300 photos retouchées), la formule Élégance à partir de 1 600 € (12 heures, des préparatifs jusqu'au début de soirée avec 500+ photos et un album 30x30 cm), et la formule Prestige à partir de 2 500 € (couverture illimitée du jour J, séance d'engagement offerte, second photographe, album 35x35 cm et coffret de 100 tirages Fine Art).",
        ],
        image: {
          src: "/images/rkmariage.webp",
          alt: "Alliances et détails de mariage photographiés en Bretagne par L'Oeil de Monsieur R",
        },
      },
      {
        heading: "Ce qui est inclus derriere le tarif du jour J : 40 a 50 heures de travail",
        paragraphs: [
          "On imagine souvent que le travail du photographe se limite aux 8 ou 12 heures de présence le samedi du mariage. En réalité, un reportage complet représente entre 40 et 50 heures de travail par mariage : les rendez-vous de préparation et de conseil sur le planning, le repérage des lieux, la prise de vue le jour J, puis plusieurs jours entiers de tri sélectif et de post-traitement artisanal photo par photo.",
          "À cela s'ajoutent le matériel professionnel plein format doublé (deux boîtiers, objectifs lumineux, cartes mémoire à double enregistrement simultané pour une sécurité absolue), les sauvegardes sur serveurs sécurisés, la galerie privée en ligne pour vos invités et les assurances professionnelles.",
        ],
        image: {
          src: "/images/album.webp",
          alt: "Album photo de mariage sur mesure et tirages Fine Art de qualité musée",
        },
      },
      {
        heading: "Comment choisir la formule ideale pour votre mariage ?",
        paragraphs: [
          "Posez-vous une seule question : quels sont les moments que vous aurez envie de revivre dans vingt ans ? Si vous tenez à l'atmosphère intime du matin — les regards de vos parents lors de l'habillage, les détails de la robe, l'ouverture du bal le soir — une couverture de 12 heures des préparatifs à la première danse est le choix le plus équilibré.",
          "De plus, toutes mes formules sont modulables : nous pouvons partir d'une base et l'ajuster sur mesure à votre programme, que vous organisiez un mariage intimiste à la mairie de Rennes ou un grand week-end festif dans un domaine breton.",
        ],
        image: {
          src: "/images/TUB-cy6hTKCDrjr-LhE5jw.webp",
          alt: "Détails et émotion lors d'un reportage de mariage en Ille-et-Vilaine",
        },
      },
    ],
    outro:
      "Vous souhaitez recevoir une proposition personnalisée pour votre date de mariage à Rennes ou en Bretagne ? Consultez le détail de mes formules ou écrivez-moi directement : je vous réponds sous 24 à 48 heures.",
    relatedLinks: [
      { label: "Voir le détail de mes 3 formules & tarifs (/services)", href: "/services" },
      { label: "Demander un devis personnalisé (/contact)", href: "/contact" },
      {
        label: "Guide : Les plus beaux domaines de mariage autour de Rennes",
        href: "/blog/domaines-salles-mariage-rennes-ille-et-vilaine",
      },
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
    ],
  },
  {
    number: "10",
    slug: "pourquoi-faire-seance-engagement-mariage-bretagne",
    title: "Pourquoi faire une seance d'engagement avant son mariage en Bretagne ?",
    metaTitle: "Séance Engagement Mariage Rennes & Bretagne : 4 Raisons de Sauter le Pas",
    metaDescription:
      "Qu'est-ce qu'une séance photo d'engagement avant le mariage ? Découvrez pourquoi cette séance couple à Rennes, Saint-Malo ou en Bretagne transforme vos photos du jour J.",
    date: "2026-11-12",
    displayDate: "Séance Couple — Bretagne",
    location: "Rennes, Côte d'Émeraude & Bretagne",
    excerpt:
      "Vous pensez ne pas être photogéniques ou avoir peur de poser ? La séance d'engagement avant le mariage est le meilleur secret pour être 100 % naturels devant l'objectif le jour J.",
    coverImage: "/images/engagements.webp",
    intro: [
      "« Nous n'avons pas l'habitude d'être pris en photo, nous avons peur de ne pas savoir quoi faire de nos mains le jour du mariage ! » C'est sans doute la phrase que j'entends le plus souvent lors de mon premier échange avec les futurs mariés à Rennes.",
      "Et c'est parfaitement normal : être photographié demande un minimum de confiance et de complicité avec la personne qui tient l'appareil. C'est précisément pour cette raison que la séance d'engagement (ou séance couple avant mariage) existe.",
      "Voici pourquoi cette parenthèse de 1h30, quelques mois avant votre mariage en Bretagne, change tout pour vos photos du jour J.",
    ],
    sections: [
      {
        heading: "1. Apprivoiser l'objectif et oublier le photographe avant le jour J",
        paragraphs: [
          "Lors d'une séance d'engagement, il n'y a ni horaire de mairie à respecter, ni cent invités qui vous regardent. Nous partons nous promener en tenue civile dans un lieu qui vous ressemble — sur la côte à Saint-Malo ou Cancale, dans une forêt bretonne ou dans les rues de Rennes.",
          "Au bout de quinze minutes, les épaules se relâchent, vous comprenez ma façon de vous guider sans jamais vous figer dans des poses artificielles, et vous oubliez l'appareil. Résultat : le jour du mariage, vous êtes déjà en terrain connu et vos portraits de mariés gagnent instantanément en naturel.",
        ],
        image: {
          src: "/images/engagements.webp",
          alt: "Séance photo d'engagement d'un couple de futurs mariés en Bretagne",
        },
      },
      {
        heading: "2. Des photos professionnelles pour vos faire-part et votre decoration",
        paragraphs: [
          "Au-delà de l'expérience humaine, la séance d'engagement vous offre une série complète de portraits professionnels en tenue de tous les jours. Beaucoup de mes couples utilisent ces images pour illustrer leur faire-part de mariage, leur site internet dédié aux invités, leur livre d'or ou la décoration de leur salle de réception.",
          "C'est aussi l'occasion de célébrer vos fiançailles dans un décor différent de celui de votre mariage : si vous vous mariez à la campagne dans les terres d'Ille-et-Vilaine, nous pouvons réaliser votre séance d'engagement face à la mer sur la Côte d'Émeraude.",
        ],
        image: {
          src: "/images/kellyrudy2.webp",
          alt: "Portrait complice de couple en noir et blanc lors d'une séance photo en Bretagne",
        },
      },
      {
        heading: "3. Jouer avec la lumiere et le caractere de la meteo bretonne",
        paragraphs: [
          "En photographie, un ciel breton légèrement voilé ou traversé de nuages est souvent bien plus flatteur qu'un grand soleil de midi sans nuage, qui crée des ombres dures sur les visages. Les nuages agissent comme une immense boîte à lumière naturelle qui adoucit les traits et fait ressortir les textures.",
          "La séance d'engagement vous permet de constater par vous-mêmes à quel point la lumière de Bretagne — qu'elle soit dorée au coucher du soleil ou plus dramatique au bord de l'océan — donne des images intenses et intemporelles.",
        ],
        image: {
          src: "/images/i-Xl--zhTuOurqrjZkI-Hg.webp",
          alt: "Couple de mariés sous la lumière naturelle bretonne",
        },
      },
    ],
    outro:
      "La séance d'engagement peut être réservée seule, ajoutée à votre formule de mariage, et elle est incluse d'office dans ma Formule Prestige. Envie d'organiser la vôtre autour de Rennes ou sur la côte bretonne ? Contactez-moi pour en discuter.",
    relatedLinks: [
      {
        label: "Guide : Où faire ses photos de couple à Rennes, Saint-Malo & en Bretagne ?",
        href: "/blog/ou-faire-photos-couple-mariage-rennes-saint-malo-bretagne",
      },
      {
        label: "Guide : Quel est le prix d'un photographe de mariage en Bretagne ?",
        href: "/blog/prix-tarif-photographe-mariage-rennes-bretagne",
      },
      { label: "Voir mes formules Mariage & Séance d'Engagement (/services)", href: "/services" },
      { label: "Photographe de mariage à Rennes & en Bretagne (Accueil)", href: "/" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}


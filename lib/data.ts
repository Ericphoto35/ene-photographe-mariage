import { CMS, SITE } from "./cdn";

export const site = {
  name: "L'oeil de monsieur R",
  tagline: "photographe de mariage",
  footerLine:
    "Capturer vos moments précieux avec élégance et authenticité. Spécialiste en photographie de mariage.",
  email: "contact@enemariage.fr",
  phone: "+33 6 33 32 07 95",
  phoneHref: "tel:+33633320795",
  city: "Rennes, Bretagne",
  area: "Disponible pour des déplacements en France et à l'international",
  responseTime:
    "Je m'efforce de répondre à toutes les demandes dans un délai de 24 à 48 heures. Pour les demandes urgentes, n'hésitez pas à me contacter par téléphone.",
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Galerie" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    href: "https://www.instagram.com/monsieur_r_mariage/",
    label: "Instagram",
    network: "instagram" as const,
  },
] as const;

export const heroCircleImages = [
  `${SITE}/6679ecae70514671a2d72fad_Plan%20de%20travail%201.webp`,
  `${SITE}/6679eda932c087a05852a6b7_Plan%20de%20travail%20x.webp`,
  `${SITE}/6679ecaedd1fcba3db612841_Plan%20de%20travail%203-1.webp`,
  `${SITE}/6679ecae45138531b3476408_Plan%20de%20travail%203-3.webp`,
  `${SITE}/6679ecae64a25dab3198294e_Plan%20de%20travail%202-2.webp`,
  `${SITE}/6679ecae58665cb3267d7bc4_Plan%20de%20travail%202-1.webp`,
  `${SITE}/6679ecae9916e4b19922ad98_Plan%20de%20travail%202-3.webp`,
  `${SITE}/6679ecaf1e65a65a5a9b514b_Plan%20de%20travail%201-3.webp`,
  `${SITE}/6679ecae976f303d759baf18_Plan%20de%20travail%201-2.webp`,
];

export const homeIntro = {
  title: "Capturer l'essence de vos moments précieux",
  paragraphs: [
    "Bienvenue dans mon univers photographique où chaque image raconte une histoire unique. Spécialisé dans la photographie de mariage, je m'engage à immortaliser les émotions et les instants qui font de votre journée un moment inoubliable.",
    "Mon approche combine un style documentaire discret et des portraits élégants pour créer un récit visuel authentique de votre célébration.",
  ],
};

export const homeServicesIntro =
  "Je propose une gamme complète de services pour capturer et préserver les moments les plus précieux de votre mariage.";

export const homeServices = [
  {
    title: "Photographie de Mariage",
    description:
      "Capturer chaque moment précieux de votre journée spéciale, des préparatifs jusqu'à la fin des festivités.",
    image: `${SITE}/6679effd31234493053de684_Plan%20de%20travail%205-1.webp`,
  },
  {
    title: "Séance d'Engagement",
    description:
      "Une séance photo avant le mariage pour immortaliser votre amour dans un cadre plus détendu.",
    image: `${SITE}/6679ecae70514671a2d72fad_Plan%20de%20travail%201.webp`,
  },
  {
    title: "Albums Photo",
    description:
      "Des albums photo de haute qualité, conçus sur mesure pour préserver vos souvenirs pour les générations à venir.",
    image: `${SITE}/6679f01f3c972f40647b13c4_Plan%20de%20travail%205.2.webp`,
  },
  {
    title: "Tirages Fine Art",
    description:
      "Des tirages d'art de qualité musée pour décorer votre intérieur avec vos plus belles photos de mariage.",
    image: `${SITE}/667994748c414028ca615775_img-12.webp`,
  },
];

export const homeWhyChoose = {
  title: "Pourquoi Me Choisir",
  intro:
    "Je m'engage à offrir une expérience exceptionnelle à chaque couple, avec une attention particulière aux détails et aux moments qui comptent.",
  items: [
    {
      title: "Style Unique",
      text: "Une approche photographique qui mêle élégance intemporelle et spontanéité pour des images authentiques et émotionnelles.",
    },
    {
      title: "Passion & Dévouement",
      text: "Un engagement total pour capturer l'essence de votre journée avec attention, discrétion et professionnalisme.",
    },
    {
      title: "Communication Fluide",
      text: "Un accompagnement personnalisé avant, pendant et après votre mariage pour une expérience sereine et sans stress.",
    },
  ],
};

export const ctaImages = [
  `${SITE}/667994748c414028ca615770_img-08.webp`,
  `${SITE}/667994748c414028ca615775_img-12.webp`,
  `${SITE}/667994748c414028ca615776_img-16.webp`,
  `${SITE}/667994748c414028ca615779_img-17.webp`,
  `${SITE}/667994748c414028ca615778_img-15.webp`,
  `${SITE}/667994748c414028ca615777_img-14.webp`,
  `${SITE}/667994748c414028ca615774_img-11.webp`,
];

export const testimonials = [
  {
    names: "Marie & Thomas",
    date: "Mariés en Juin 2023",
    quote:
      "Monsieur R a su capturer l'essence même de notre journée. Chaque photo raconte une histoire et nous permet de revivre ces moments magiques. Un talent exceptionnel !",
  },
  {
    names: "Sophie & Lucas",
    date: "Mariés en Septembre 2022",
    quote:
      "Nous sommes enchantés par les photos de notre mariage. Monsieur R a su se faire discret tout en capturant tous les moments importants. Le résultat est simplement magnifique !",
  },
  {
    names: "Julie & Antoine",
    date: "Mariés en Mai 2023",
    quote:
      "Un grand merci pour ces souvenirs incroyables ! Votre professionnalisme et votre créativité ont fait toute la différence. Nous recommandons Monsieur R sans hésitation.",
  },
];

export const projects = [
  {
    slug: "majestic",
    number: "01",
    name: "Josephine",
    year: "2023",
    category: "Mariage",
    short: "Un récit visuel authentique, du premier regard aux derniers instants de la fête.",
    excerpt:
      "Un mariage raconté avec discrétion et sensibilité : les préparatifs, la cérémonie, puis ces instants volés qui font toute la mémoire d'une journée.",
    body: "Chaque couple a une histoire unique. Ici, le reportage mêle un style documentaire discret et des portraits élégants, pour des images naturelles, lumineuses et intemporelles.",
    cover: `${CMS}/6679f0a1b1b8c8f5fd1679f4_Plan%20de%20travail%201.webp`,
    gallery: [
      `${CMS}/6679f0a1b1b8c8f5fd1679f4_Plan%20de%20travail%201.webp`,
      `${CMS}/6679f197fb43e92c7afe9141_Plan%20de%20travail%201-2.webp`,
      `${CMS}/6679f1c3976f303d759faa57_Plan%20de%20travail%20x.webp`,
      `${CMS}/6679f1cec2808be97716ca14_Plan%20de%20travail%202-2.webp`,
    ],
    next: "serene",
  },
  {
    slug: "serene",
    number: "02",
    name: "Sebastien",
    year: "2022",
    category: "Couples",
    short: "Une séance plus calme, pour immortaliser votre amour hors du jour J.",
    excerpt:
      "Entre portraits élégants et moments spontanés, cette série cherche l'essence des personnes : les expressions fugaces, la lumière, le lien.",
    body: "La séance couple — avant le mariage ou pendant la journée — est un temps plus détendu. L'objectif : des images intimes, vraies, qui racontent une partie unique de votre histoire.",
    cover: `${CMS}/6679f197fb43e92c7afe9141_Plan%20de%20travail%201-2.webp`,
    gallery: [
      `${CMS}/6679f197fb43e92c7afe9141_Plan%20de%20travail%201-2.webp`,
      `${CMS}/667994748c414028ca6157fc_project2-img-02.webp`,
      `${CMS}/667994748c414028ca6157fd_project2-img-03.webp`,
      `${CMS}/667994748c414028ca6157fe_project2-img-04.webp`,
    ],
    next: "eloquent",
  },
  {
    slug: "eloquent",
    number: "03",
    name: "Details",
    year: "2021",
    category: "Cérémonies",
    short: "Les détails soignés : alliances, fleurs, regards, et l'émotion de la cérémonie.",
    excerpt:
      "Tous les petits détails que vous avez planifiés méritent d'être préservés : des alliances aux décorations florales, jusqu'aux instants de la cérémonie.",
    body: "Le reportage s'attarde sur ce qui fait le caractère d'une célébration. Des images lumineuses, naturelles, qui gardent la beauté des moments spontanés autant que celle des gestes préparés.",
    cover: `${CMS}/6679f1c3976f303d759faa57_Plan%20de%20travail%20x.webp`,
    gallery: [
      `${CMS}/6679f1c3976f303d759faa57_Plan%20de%20travail%20x.webp`,
      `${CMS}/667994748c414028ca6157f9_project3-img-02.webp`,
      `${CMS}/667994748c414028ca6157fa_project3-img-03.webp`,
      `${CMS}/667994748c414028ca6157fb_project3-img-04.webp`,
    ],
    next: "vibrant",
  },
  {
    slug: "vibrant",
    number: "04",
    name: "Sev et Fred",
    year: "2020",
    category: "Préparatifs",
    short: "Des préparatifs à la fête : l'énergie vraie d'une journée de mariage.",
    excerpt:
      "Des premiers gestes du matin jusqu'à la soirée, un reportage pour revivre l'émotion, la joie, et l'atmosphère de votre célébration.",
    body: "Une approche documentaire, discrète, pour ne rien manquer sans peser sur le moment. Le résultat : un récit visuel authentique, à garder pour les années à venir.",
    cover: `${CMS}/6679f270976f303d75a03475_Plan%20de%20travail%202-3.webp`,
    gallery: [
      `${CMS}/6679f270976f303d75a03475_Plan%20de%20travail%202-3.webp`,
      `${CMS}/667994748c414028ca6157f6_project4-img-02.webp`,
      `${CMS}/667994748c414028ca6157f8_project4-img-03.webp`,
      `${CMS}/667994748c414028ca6157f7_project4-img-04.webp`,
    ],
    next: "majestic",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const services = [
  {
    number: "01",
    title: "Photographie de Mariage",
    description:
      "Capturer chaque moment précieux de votre journée spéciale, des préparatifs jusqu'à la fin des festivités.",
    image: `${SITE}/667994748c414028ca615763_img-03.webp`,
  },
  {
    number: "02",
    title: "Séance d'Engagement",
    description:
      "Une séance photo avant le mariage pour immortaliser votre amour dans un cadre plus détendu.",
    image: `${SITE}/667994748c414028ca615766_img-02.webp`,
  },
  {
    number: "03",
    title: "Albums Photo",
    description:
      "Des albums photo de haute qualité, conçus sur mesure pour préserver vos souvenirs pour les générations à venir. Fabriqués à la main, personnalisés selon vos préférences de taille, de couverture et de mise en page.",
    image: `${SITE}/667994748c414028ca615770_img-08.webp`,
  },
  {
    number: "04",
    title: "Tirages Fine Art",
    description:
      "Des tirages d'art de qualité musée pour décorer votre intérieur avec vos plus belles photos de mariage.",
    image: `${SITE}/667994748c414028ca615775_img-12.webp`,
  },
];

export const formulas = [
  {
    name: "Essentiel",
    price: "À partir de 1 200€",
    text: "Couverture complète de votre cérémonie et des moments clés de votre journée.",
    features: [
      "Consultation préalable",
      "Couverture de 8 heures",
      "Cérémonie et cocktail",
      "Séance couple",
      "Galerie en ligne privée",
      "300+ photos retouchées",
      "Livraison sous 4 semaines",
    ],
  },
  {
    name: "Élégance",
    price: "À partir de 1 600€",
    text: "Une couverture complète de votre journée, des préparatifs jusqu'au début de soirée.",
    features: [
      "Consultation préalable",
      "Couverture de 12 heures",
      "Préparatifs au début de soirée",
      "Séance couple étendue",
      "Galerie en ligne privée",
      "500+ photos retouchées",
      "Album photo 30x30cm (20 pages)",
      "Livraison sous 3 semaines",
    ],
  },
  {
    name: "Prestige",
    price: "À partir de 2 500€",
    text: "L'expérience photographique ultime pour votre mariage, avec une couverture complète et des extras exclusifs.",
    features: [
      "Consultation préalable",
      "Couverture illimitée (jour J)",
      "Séance d'engagement offerte",
      "Second photographe",
      "Galerie en ligne privée",
      "700+ photos retouchées",
      "Album photo premium 35x35cm (30 pages)",
      "Coffret de 100 tirages fine art",
      "Livraison sous 2 semaines",
    ],
  },
];

export const values = [
  {
    title: "Style unique",
    text: "Une approche photographique qui mêle élégance intemporelle et spontanéité pour des images authentiques et émotionnelles.",
  },
  {
    title: "Passion & dévouement",
    text: "Un engagement total pour capturer l'essence de votre journée avec attention, discrétion et professionnalisme.",
  },
  {
    title: "Communication fluide",
    text: "Un accompagnement personnalisé avant, pendant et après votre mariage pour une expérience sereine et sans stress.",
  },
  {
    title: "Détails soignés",
    text: "Nous nous assurons de capturer tous les petits détails que vous avez soigneusement planifiés — des alliances aux décorations florales — pour préserver chaque aspect de votre célébration.",
  },
];

export const stats = [
  { value: 50, label: "Mariages photographiés" },
  { value: 100, label: "Couples heureux" },
  { value: 10, label: "Années d'expérience" },
];

export const equipment = [
  "Appareils photo professionnels full-frame",
  "Objectifs lumineux de qualité supérieure",
  "Équipement d'éclairage avancé",
  "Systèmes de sauvegarde multiples sur site",
];

export const aboutCollage = [
  `${SITE}/667994748c414028ca61577e_img-20.webp`,
  `${SITE}/667994748c414028ca615763_img-03.webp`,
  `${SITE}/667994748c414028ca61577d_img-19.webp`,
  `${SITE}/667994748c414028ca615764_img-01.webp`,
  `${SITE}/667994748c414028ca61577c_img-18.webp`,
];

export const contactImages = [
  `${SITE}/667994748c414028ca615772_img-05.webp`,
  `${SITE}/667994748c414028ca615766_img-02.webp`,
  `${SITE}/667994748c414028ca615774_img-11.webp`,
  `${SITE}/667994748c414028ca615771_img-10.webp`,
  `${SITE}/667994748c414028ca615773_img-04.webp`,
  `${SITE}/667994748c414028ca615770_img-08.webp`,
  `${SITE}/667994748c414028ca615762_img-07.webp`,
  `${SITE}/667994748c414028ca615767_img-09.webp`,
];

export const serviceFaqs = [
  {
    q: "Combien de temps à l'avance dois-je réserver ?",
    a: "Je recommande de réserver au moins 9 à 12 mois à l'avance, surtout pour les dates populaires en haute saison (mai à septembre). Cependant, n'hésitez pas à me contacter même pour des dates plus proches, je pourrais avoir des disponibilités.",
  },
  {
    q: "Comment se déroule la réservation ?",
    a: "Après notre première consultation, je vous envoie un contrat détaillé. La réservation est confirmée à la signature du contrat et au versement d'un acompte de 30%.",
  },
  {
    q: "Proposez-vous des albums photo ?",
    a: "Oui, je propose une gamme d'albums photo de haute qualité, fabriqués à la main avec des matériaux premium. Chaque album est personnalisé selon vos préférences en termes de taille, de couverture et de mise en page.",
  },
  {
    q: "Combien de photos recevrons-nous ?",
    a: "Le nombre de photos varie en fonction de la durée de couverture et des événements de votre journée. En moyenne, vous recevrez entre 300 et 700 photos soigneusement sélectionnées et retouchées.",
  },
  {
    q: "Vous déplacez-vous pour des mariages à l'étranger ?",
    a: "Absolument ! J'adore voyager et photographier des mariages dans de nouveaux endroits. Des frais supplémentaires pour le voyage et l'hébergement s'appliquent, mais je serais ravi de vous accompagner où que vous choisissiez de célébrer votre union.",
  },
  {
    q: "Quel est votre style photographique ?",
    a: "Mon style combine photojournalisme documentaire et portraits élégants. Je privilégie les images naturelles, lumineuses et intemporelles, capturant l'authenticité des émotions et la beauté des moments spontanés.",
  },
];

export const contactFaqs = [
  {
    q: "Quelle est votre disponibilité ?",
    a: "Ma disponibilité varie en fonction de la saison. Je vous recommande de me contacter dès que possible pour vérifier si votre date est disponible, surtout pour les mariages en haute saison.",
  },
  {
    q: "Comment réserver vos services ?",
    a: "Après notre premier échange, je vous envoie un devis personnalisé. La réservation est confirmée à la signature du contrat et au versement d'un acompte de 30%.",
  },
  {
    q: "Vous déplacez-vous en dehors de Rennes ?",
    a: "Absolument ! Je me déplace dans toute la Bretagne et la France pour capturer votre mariage. Des frais de déplacement peuvent s'appliquer selon la destination.",
  },
  {
    q: "Quel est le délai de livraison des photos ?",
    a: "Le délai de livraison varie entre 2 et 4 semaines selon la formule choisie. Une sélection de photos « aperçu » vous est généralement envoyée dans la semaine suivant votre mariage.",
  },
];

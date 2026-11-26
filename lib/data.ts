import { CMS, SITE } from "./cdn";

export const site = {
  name: "L'oeil de monsieur R",
  tagline: "photographe de mariage",
  footerLine:
    "Capturer vos moments précieux avec élégance et authenticité. Spécialiste en photographie de mariage.",
  email: "contact@loeil-de-monsieur-r.fr",
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
  { href: "/blog", label: "Blog" },
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
  eyebrow: "ÉRIC — L'OEIL DE MONSIEUR R · BASÉ À RENNES (35)",
  title: "Capturer l'essence de votre mariage a Rennes et en Bretagne",
  image: "/images/Eric.webp",
  imageCaption: "ÉRIC SORET — L'OEIL DE MONSIEUR R, PHOTOGRAPHE DE MARIAGE",
  paragraphs: [
    "Je suis Éric, le regard derrière L'Oeil de Monsieur R. Photographe de mariage basé à Rennes, j'accompagne les couples en Ille-et-Vilaine (Rennes, Vitré, Saint-Malo, Cancale, Fougères) et dans toute la Bretagne — de Vannes à Quimper jusqu'aux portes de Nantes — pour raconter leur journée avec sincérité.",
    "Mon approche mêle le photojournalisme documentaire pris sur le vif et des portraits de couple naturels et lumineux. Pas de poses figées : je me fonds parmi vos proches pour saisir les regards, les éclats de rire et les détails que vous aurez plaisir à revivre dans vingt ans, sur écran comme sur papier Fine Art.",
  ],
};

export const homeServicesIntro =
  "Des préparatifs du matin jusqu'à l'ouverture de bal, je propose des prestations complètes et modulables (formules mariage à partir de 1 200 €) pour préserver chaque instant de votre union à Rennes, en Bretagne et partout en France.";

export const homeServices = [
  {
    title: "Photographie de Mariage",
    description:
      "Reportage complet et discret de votre journée en Bretagne, des préparatifs jusqu'à la soirée, livré sur galerie privée haute définition.",
    image: `${SITE}/6679effd31234493053de684_Plan%20de%20travail%205-1.webp`,
  },
  {
    title: "Séance d'Engagement",
    description:
      "Une séance couple avant le mariage à Rennes, Saint-Malo ou sur la côte bretonne pour apprivoiser l'objectif en toute complicité.",
    image: `${SITE}/6679ecae70514671a2d72fad_Plan%20de%20travail%201.webp`,
  },
  {
    title: "Albums Photo",
    description:
      "Des albums photo haut de gamme façonnés à la main, conçus sur mesure pour transmettre l'histoire de votre mariage de génération en génération.",
    image: `${SITE}/6679f01f3c972f40647b13c4_Plan%20de%20travail%205.2.webp`,
  },
  {
    title: "Tirages Fine Art",
    description:
      "Des tirages d'art de qualité musée sur papier coton pour sublimer vos plus beaux portraits de mariage.",
    image: "/images/87889333_3052041288163709_1545270873085181952_n.jpg",
  },
];

export const homeWhyChoose = {
  title: "Pourquoi Choisir L'Oeil de Monsieur R",
  intro:
    "Choisir son photographe de mariage à Rennes, c'est avant tout choisir une personne de confiance qui saura vous mettre à l'aise tout en restant invisible aux moments clés.",
  items: [
    {
      title: "Regard Documentaire",
      text: "Une approche photographique qui mêle élégance éditoriale et spontanéité pour capturer les vraies émotions, sans jamais interrompre le fil de votre journée.",
    },
    {
      title: "Ancrage en Bretagne",
      text: "Habitué des lumières changeantes et des plus beaux domaines de Rennes, Vitré, Saint-Malo, Vannes et Nantes, je sais tirer parti de chaque lieu et de chaque météo.",
    },
    {
      title: "Accompagnement Serein",
      text: "Conseils sur le timing photo du jour J, repérage, matériel professionnel doublé et livraison soignée sous 2 à 4 semaines pour une expérience sans aucun stress.",
    },
  ],
};

export const ctaImages = [
  "/images/couple1.webp",
  "/images/joeetseb1.webp",
  "/images/rudy et kelly.webp",
  "/images/kellyrudy2.webp",
  "/images/TUB-cy6hTKCDrjr-LhE5jw.webp",
  "/images/i-Xl--zhTuOurqrjZkI-Hg.webp",
  "/images/premieredanse.webp",
];

export const testimonials = [
  {
    names: "Kelly & Rudy",
    date: "Mariés au Manoir du Pas Jahan (Août 2024)",
    quote:
      "Éric est un passionné qui sait faire vivre les instants capturés, tout en mettant tout le monde à l'aise tout au long de la journée. Le reportage de notre mariage est tout simplement magique !",
  },
  {
    names: "Adeline & Kévin",
    date: "Mariés à Noyal & au Trempe Sec à Vitré (Juin 2024)",
    quote:
      "De la mairie et l'église de Noyal jusqu'à la soirée au Trempe Sec, Éric a su se faire discret tout en saisissant chaque émotion et chaque sourire de nos proches. Des souvenirs incroyables !",
  },
  {
    names: "Charlotte & Thomas",
    date: "Mariés au Haras du Reuzel près de Rennes",
    quote:
      "Très professionnel dès le premier contact, Éric nous a accompagnés avec bienveillance et un œil artistique remarquable. Nous ne regrettons pas notre choix et le recommandons les yeux fermés.",
  },
];

export const projects = [
  {
    slug: "majestic",
    number: "01",
    name: "Joe et Sebastien",
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
      "/images/joeetseb1.webp",
      "/images/joeetseb3.webp",
    ],
    next: "serene",
  },
  {
    slug: "serene",
    number: "02",
    name: "Kelly et Rudy",
    year: "2022",
    category: "Couples",
    short: "Une séance plus calme, pour immortaliser votre amour hors du jour J.",
    excerpt:
      "Entre portraits élégants et moments spontanés, cette série cherche l'essence des personnes : les expressions fugaces, la lumière, le lien.",
    body: "La séance couple — avant le mariage ou pendant la journée — est un temps plus détendu. L'objectif : des images intimes, vraies, qui racontent une partie unique de votre histoire.",
    cover: "/images/rudy et kelly.webp",
    gallery: [
      "/images/rudy et kelly.webp",
      "/images/kellyrudy2.webp",
      "/images/kellyrudy3.webp",
      "/images/kellyrudy4.webp",
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
      "/images/TUB-cy6hTKCDrjr-LhE5jw.webp",
      "/images/6JU1hif4Ty61_Nd11hjcfg.webp",
      "/images/b1EQdDlURpaoaUQpJ9aAMQ.webp",
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
      "/images/i-Xl--zhTuOurqrjZkI-Hg.webp",
      "/images/Vs8Zz7leSyO-xHxSj8PDIg.webp",
      "/images/OSJXnvlORJ2alH0gvRu6XA.webp",
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
    image: `${SITE}/6679effd31234493053de684_Plan%20de%20travail%205-1.webp`,
  },
  {
    number: "02",
    title: "Séance d'Engagement",
    description:
      "Une séance photo avant le mariage pour immortaliser votre amour dans un cadre plus détendu.",
    image: `${SITE}/6679ecae70514671a2d72fad_Plan%20de%20travail%201.webp`,
  },
  {
    number: "03",
    title: "Albums Photo",
    description:
      "Des albums photo de haute qualité, conçus sur mesure pour préserver vos souvenirs pour les générations à venir. Fabriqués à la main, personnalisés selon vos préférences de taille, de couverture et de mise en page.",
    image: `${SITE}/6679f01f3c972f40647b13c4_Plan%20de%20travail%205.2.webp`,
  },
  {
    number: "04",
    title: "Tirages Fine Art",
    description:
      "Des tirages d'art de qualité musée pour décorer votre intérieur avec vos plus belles photos de mariage.",
    image: "/images/87889333_3052041288163709_1545270873085181952_n.jpg",
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
    title: "Style documentaire & Fine Art",
    text: "Une approche photographique qui mêle élégance intemporelle, portraits lumineux et spontanéité prise sur le vif pour des images vraies et chargées d'émotion.",
  },
  {
    title: "Un seul interlocuteur : moi",
    text: "Aucune sous-traitance : je vous accompagne personnellement du premier café à Rennes jusqu'au post-traitement artisanal de chaque photo et à la création de votre album.",
  },
  {
    title: "Accompagnement & sérénité",
    text: "Conseils sur le timing de votre journée en Bretagne, repérage des lieux et présence discrète mais bienveillante le jour J pour une expérience 100 % sans stress.",
  },
  {
    title: "Sens du détail",
    text: "Je m'assure de capturer tous les petits détails que vous avez soigneusement préparés — des alliances aux textures de la robe jusqu'à la décoration de table — pour préserver toute l'atmosphère de votre mariage.",
  },
];

export const stats = [
  { value: 40, label: "Mariages photographiés" },
  { value: 40, label: "Couples heureux" },
  { value: 10, label: "Années d'expérience" },
];

export const equipment = [
  "Deux boîtiers professionnels plein format (Full-Frame) en simultané",
  "Objectifs lumineux à grande ouverture pour sublimer la lumière naturelle sans flash intrusif",
  "Double enregistrement instantané sur deux cartes mémoire par boîtier le jour J",
  "Triple sauvegarde sécurisée de vos reportages après le mariage & galerie privée en ligne",
];

export const aboutCollage = [
  "/images/justine.webp",
  "/images/kellyrudy3.webp",
  "/images/ladyprep.webp",
  "/images/mmmariage.jpg",
  "/images/robemariee.webp",
];

export const contactImages = [
  "/images/joeetseb1.webp",
  "/images/rudy et kelly.webp",
  "/images/kellyrudy2.webp",
  "/images/TUB-cy6hTKCDrjr-LhE5jw.webp",
  "/images/i-Xl--zhTuOurqrjZkI-Hg.webp",
  "/images/Vs8Zz7leSyO-xHxSj8PDIg.webp",
  "/images/couple3.webp",
  "/images/ceremonie.webp",
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

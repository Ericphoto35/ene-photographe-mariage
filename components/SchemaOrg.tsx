import { serviceFaqs } from "@/lib/data";

export function SchemaOrg() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "L'Oeil de Monsieur R - Photographe de Mariage",
      alternateName: "L'Oeil de Monsieur R",
      description:
        "Photographe de mariage professionnel basé à Rennes, intervenant en Ille-et-Vilaine (Vitré, Saint-Malo, Cancale), dans toute la Bretagne (Vannes, Quimper, Dinan), à Nantes et partout en France. Approche documentaire discrète, portraits élégants et tirages Fine Art.",
      image: "https://www.loeil-de-monsieur-r.fr/images/jg.jpg",
      url: "https://www.loeil-de-monsieur-r.fr",
      telephone: "+33633320795",
      email: "contact@enemariage.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rennes",
        addressRegion: "Bretagne",
        postalCode: "35000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "48.117266",
        longitude: "-1.677793",
      },
      priceRange: "1200€ - 2500€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      areaServed: [
        { "@type": "City", name: "Rennes" },
        { "@type": "City", name: "Vitré" },
        { "@type": "City", name: "Noyal-sur-Vilaine" },
        { "@type": "City", name: "Saint-Malo" },
        { "@type": "City", name: "Cancale" },
        { "@type": "City", name: "Vannes" },
        { "@type": "City", name: "Quimper" },
        { "@type": "City", name: "Dinan" },
        { "@type": "City", name: "Nantes" },
        { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
        { "@type": "AdministrativeArea", name: "Bretagne" },
      ],
      sameAs: [
        "https://www.mariages.net/photo-mariage/loeil-de-monsieur-r-photographe-de-mariage--e426109",
        "https://www.instagram.com/monsieur_r_mariage/",
        "https://www.facebook.com/enephotographe/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services et formules de photographie de mariage",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formule Essentiel",
              description:
                "Couverture complète de votre cérémonie et des moments clés de votre journée (8 heures, 300+ photos retouchées).",
            },
            price: "1200",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formule Élégance",
              description:
                "Couverture complète de votre journée des préparatifs jusqu'au début de soirée (12 heures, 500+ photos retouchées, album photo 30x30cm).",
            },
            price: "1600",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formule Prestige",
              description:
                "Couverture illimitée jour J, séance d'engagement offerte, second photographe, 700+ photos retouchées, album premium 35x35cm et coffret 100 tirages Fine Art.",
            },
            price: "2500",
            priceCurrency: "EUR",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: serviceFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

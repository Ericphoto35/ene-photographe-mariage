export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ENE - Photographe de Mariage",
    "description": "Photographe de mariage professionnel à Rennes, spécialisé dans la capture de moments précieux avec élégance et authenticité.",
    "image": "/images/jg.jpg",
    "url": "https://www.ene-photographe-mariage.fr",
    "telephone": "+33600000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rennes",
      "addressRegion": "Bretagne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.117266",
      "longitude": "-1.677793"
    },
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/ene_photographe/",
      "https://www.facebook.com/enephotographe/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de photographie de mariage",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formule Essentiel",
            "description": "Couverture complète de votre cérémonie et des moments clés de votre journée."
          },
          "price": "1200",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formule Élégance",
            "description": "Une couverture complète de votre journée, des préparatifs jusqu'au début de soirée."
          },
          "price": "1600",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formule Prestige",
            "description": "L'expérience photographique ultime pour votre mariage, avec une couverture complète et des extras exclusifs."
          },
          "price": "2500",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

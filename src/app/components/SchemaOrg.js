export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "L'Oeil de Monsieur R - Photographe de Mariage",
    "description": "Photographe de mariage professionnel basé à Rennes, intervenant en Bretagne et partout en France. Capture de moments authentiques et émotionnels avec élégance et discrétion.",
    "image": "https://www.loeil-de-monsieur-r.fr/images/jg.jpg",
    "url": "https://www.loeil-de-monsieur-r.fr",
    "telephone": "+33633320795",
    "email": "contact@enemariage.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rennes",
      "addressRegion": "Bretagne",
      "postalCode": "35000",
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
    "areaServed": [
      { "@type": "City", "name": "Rennes" },
      { "@type": "City", "name": "Saint-Malo" },
      { "@type": "City", "name": "Vannes" },
      { "@type": "City", "name": "Dinan" },
      { "@type": "City", "name": "Nantes" },
      { "@type": "AdministrativeArea", "name": "Bretagne" }
    ],
    "sameAs": [
      "https://www.instagram.com/monsieur_r_mariage/",
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

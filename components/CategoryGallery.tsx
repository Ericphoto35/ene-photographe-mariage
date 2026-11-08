"use client";

import { useState } from "react";
import { EditorialGalleryGrid, type GalleryItem } from "./EditorialGalleryGrid";

const categories = ["Tous", "Mariages", "Couples", "Cérémonies", "Préparatifs"] as const;

const allGalleryImages: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/87157226_3052041271497044_5875200998170951680_n.jpg",
    title: "Premier Regard",
    location: "Saint-Malo",
    description:
      "Ce moment magique où les mariés se voient pour la première fois le jour de leur mariage.",
    category: "Mariages",
  },
  {
    id: "gal-2",
    src: "/images/ladyprep.webp",
    title: "Préparation de la Mariée",
    location: "Rennes",
    description: "Les moments intimes de préparation avant la cérémonie.",
    category: "Préparatifs",
  },
  {
    id: "gal-3",
    src: "/images/justine.webp",
    title: "Échange des Vœux",
    location: "Rennes",
    description: "Un moment d'émotion intense pendant l'échange des vœux.",
    category: "Cérémonies",
  },
  {
    id: "gal-4",
    src: "/images/87362184_3052043968163441_3712265440819412992_n.jpg",
    title: "Séance Couple",
    location: "Pointe du Grouin",
    description: "Une séance photo intime capturant l'amour entre les mariés.",
    category: "Couples",
  },
  {
    id: "gal-5",
    src: "/images/ceremonie.webp",
    title: "Cérémonie Laïque",
    location: "Nantes",
    description: "Une cérémonie en plein air remplie d'émotions et de joie.",
    category: "Cérémonies",
  },
  {
    id: "gal-6",
    src: "/images/robemariee.webp",
    title: "Détails de la Robe",
    location: "Combourg",
    description: "Les détails délicats qui font toute la beauté d'une robe de mariée.",
    category: "Préparatifs",
  },
  {
    id: "gal-7",
    src: "/images/premieredanse.webp",
    title: "Première Danse",
    location: "Nantes",
    description: "La première danse des mariés, un moment de grâce et d'intimité.",
    category: "Mariages",
  },
  {
    id: "gal-8",
    src: "/images/engagement.webp",
    title: "Séance d'Engagement",
    location: "Cancale",
    description: "Une séance d'engagement sur les côtes pittoresques de Cancale.",
    category: "Couples",
  },
  {
    id: "gal-9",
    src: "/images/bouquet.webp",
    title: "Bouquet de la Mariée",
    location: "Nantes",
    description: "Le magnifique bouquet de la mariée, composé avec soin.",
    category: "Préparatifs",
  },
  {
    id: "gal-10",
    src: "/images/echange.webp",
    title: "Échange des Alliances",
    location: "Nantes",
    description: "Le moment solennel de l'échange des alliances.",
    category: "Cérémonies",
  },
  {
    id: "gal-11",
    src: "/images/couche.webp",
    title: "Couple au Coucher du Soleil",
    location: "Rennes",
    description: "Un moment romantique capturé à l'heure dorée.",
    category: "Couples",
  },
  {
    id: "gal-12",
    src: "/images/reception.webp",
    title: "Réception Élégante",
    location: "Nantes",
    description: "Une réception somptueuse dans un cadre historique.",
    category: "Mariages",
  },
];

export function CategoryGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Tous");

  const filtered =
    activeCategory === "Tous"
      ? allGalleryImages
      : allGalleryImages.filter((item) => item.category === activeCategory);

  return (
    <div className="mt-28 border-t border-white/12 pt-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.18em] text-[#d69a58]">PLANCHE CONTACT</p>
          <h2 className="display h2 mt-2">Instants Choisis</h2>
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par catégorie">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer border px-4 py-2 text-xs tracking-[0.16em] transition-colors ${
                  isActive
                    ? "border-paper bg-paper text-ink"
                    : "border-white/15 bg-transparent text-muted hover:border-paper/50 hover:text-paper"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <EditorialGalleryGrid images={filtered} />
    </div>
  );
}


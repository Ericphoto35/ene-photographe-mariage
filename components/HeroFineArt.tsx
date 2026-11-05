"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroCircleImages } from "@/lib/data";

const plateLabels = [
  { code: "FIG. 01", title: "L'Émotion Brute", tag: "Cérémonie" },
  { code: "FIG. 02", title: "Regards Croisés", tag: "Couple" },
  { code: "FIG. 03", title: "Lumière Naturelle", tag: "Portraits" },
  { code: "FIG. 04", title: "Instants Volés", tag: "Reportage" },
  { code: "FIG. 05", title: "Élégance Intemporelle", tag: "Détails" },
  { code: "FIG. 06", title: "Douceur Bretonne", tag: "Séance" },
  { code: "FIG. 07", title: "Promesse d'Union", tag: "Mariage" },
  { code: "FIG. 08", title: "Éclat du Soir", tag: "Réception" },
  { code: "FIG. 09", title: "Souvenir Fine Art", tag: "Tirage" },
];

export function HeroFineArt() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = heroCircleImages.length;

  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const primaryIndex = activeIndex;
  const secondaryIndex = (activeIndex + 1) % total;
  const tertiaryIndex = (activeIndex + 2) % total;

  const activeMeta = plateLabels[primaryIndex % plateLabels.length];
  const secondaryMeta = plateLabels[secondaryIndex % plateLabels.length];
  const tertiaryMeta = plateLabels[tertiaryIndex % plateLabels.length];

  return (
    <div
      className="fineart-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="fineart-glow" aria-hidden="true" />

      {/* Grille et repères de coupe éditoriaux */}
      <div className="fineart-composition">
        {/* Planche secondaire (Haut Droite - Décalée) */}
        <button
          type="button"
          onClick={() => setActiveIndex(secondaryIndex)}
          className="fineart-card fineart-card-secondary group text-left"
          aria-label={`Afficher ${secondaryMeta.title}`}
        >
          <div className="fineart-card-header">
            <span>{secondaryMeta.code}</span>
            <span className="text-paper/50">+</span>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-panel">
            <Image
              src={heroCircleImages[secondaryIndex]}
              alt={secondaryMeta.title}
              fill
              sizes="(max-width: 768px) 42vw, 220px"
              className="fineart-photo object-cover"
            />
          </div>
          <div className="fineart-card-footer">
            <span className="truncate">{secondaryMeta.tag}</span>
            <span className="text-paper/60">↗</span>
          </div>
        </button>

        {/* Planche principale (Centre - Grand Tirage Fine Art) */}
        <div className="fineart-card fineart-card-primary">
          <div className="fineart-card-header">
            <span className="flex items-center gap-2">
              <span className="fineart-dot" />
              {activeMeta.code} — PLANCHE MAÎTRESSE
            </span>
            <span className="text-paper/60">
              {String(primaryIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
            {heroCircleImages.map((src, index) => {
              const isCurrent = index === primaryIndex;
              return (
                <Image
                  key={src}
                  src={src}
                  alt={plateLabels[index % plateLabels.length].title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 85vw, 440px"
                  className={`fineart-main-photo object-cover transition-all duration-700 ${
                    isCurrent
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                />
              );
            })}
            <span className="fineart-crop fineart-crop-tl">+</span>
            <span className="fineart-crop fineart-crop-tr">+</span>
            <span className="fineart-crop fineart-crop-bl">+</span>
            <span className="fineart-crop fineart-crop-br">+</span>
          </div>

          <div className="fineart-card-caption">
            <div>
              <p className="text-[0.68rem] tracking-[0.18em] text-muted">{activeMeta.tag}</p>
              <p className="display mt-1 text-xl tracking-wide text-paper md:text-2xl">
                {activeMeta.title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
                className="fineart-step-btn"
                aria-label="Photo précédente"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
                className="fineart-step-btn"
                aria-label="Photo suivante"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Planche tertiaire (Bas Gauche - Détail) */}
        <button
          type="button"
          onClick={() => setActiveIndex(tertiaryIndex)}
          className="fineart-card fineart-card-tertiary group text-left"
          aria-label={`Afficher ${tertiaryMeta.title}`}
        >
          <div className="fineart-card-header">
            <span>{tertiaryMeta.code}</span>
            <span className="text-paper/50">+</span>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
            <Image
              src={heroCircleImages[tertiaryIndex]}
              alt={tertiaryMeta.title}
              fill
              sizes="(max-width: 768px) 38vw, 190px"
              className="fineart-photo object-cover"
            />
          </div>
          <div className="fineart-card-footer">
            <span className="truncate">{tertiaryMeta.tag}</span>
            <span className="text-paper/60">↗</span>
          </div>
        </button>
      </div>

      {/* Planche contact (sélecteur rapide numéroté) */}
      <div className="fineart-contact-strip" role="tablist" aria-label="Planche contact">
        <span className="text-[0.65rem] tracking-[0.2em] text-muted">PLANCHE CONTACT</span>
        <div className="fineart-contact-numbers">
          {heroCircleImages.slice(0, 6).map((src, idx) => {
            const isActive = idx === primaryIndex;
            return (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`fineart-index-btn ${isActive ? "is-active" : ""}`}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category?: string;
  location?: string;
  description?: string;
};

export function EditorialGalleryGrid({ images }: { images: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  const activeItem = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="project-card group border border-white/12 bg-panel/30 p-3 text-left transition-colors hover:border-white/35"
          >
            <div className="mb-2 flex items-center justify-between text-[0.65rem] tracking-[0.18em] text-muted">
              <span>FIG. {String(index + 1).padStart(2, "0")}</span>
              <span>{item.location ?? item.title}</span>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="gray-photo object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="fineart-crop fineart-crop-tl">+</span>
              <span className="fineart-crop fineart-crop-br">+</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs tracking-[0.12em]">
              <span className="text-paper">{item.title}</span>
              <span className="text-muted transition-colors group-hover:text-paper">
                AGRANDIR ↗
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeItem && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col border border-white/20 bg-panel p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between text-xs tracking-[0.18em] text-muted">
              <span>
                PLANCHE {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")} — {activeItem.title}
              </span>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="border border-white/20 px-3 py-1 text-paper transition-colors hover:border-paper"
              >
                FERMER ✕
              </button>
            </div>

            <div className="relative h-[68vh] w-full overflow-hidden bg-ink">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/12 pt-4">
              <div>
                <p className="display text-2xl text-paper">{activeItem.title}</p>
                {activeItem.description ? (
                  <p className="mt-1 text-xs text-muted">{activeItem.description}</p>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex - 1 + images.length) % images.length)
                  }
                  className="fineart-step-btn"
                  aria-label="Photo précédente"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                  className="fineart-step-btn"
                  aria-label="Photo suivante"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}


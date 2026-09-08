"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ctaImages } from "@/lib/data";
import { MainButton } from "./MainButton";

const flights = [
  { x: -70, y: -8, r: -18, delay: 0, left: "12%", top: "18%" },
  { x: 72, y: -14, r: 12, delay: 0.08, left: "88%", top: "16%" },
  { x: -55, y: 28, r: 10, delay: 0.16, left: "10%", top: "80%" },
  { x: 60, y: 32, r: -8, delay: 0.12, left: "86%", top: "82%" },
  { x: -78, y: 8, r: 6, delay: 0.2, left: "8%", top: "48%" },
  { x: 80, y: 4, r: -16, delay: 0.18, left: "92%", top: "50%" },
  { x: 0, y: -42, r: 4, delay: 0.1, left: "50%", top: "10%" },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CallToAction() {
  const trackRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;

    const images = Array.from(sticky.querySelectorAll<HTMLElement>("[data-polaroid]"));
    const filter = sticky.querySelector<HTMLElement>("[data-cta-filter]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      images.forEach((image, index) => {
        const flight = flights[index];
        image.style.opacity = "0.85";
        image.style.transform = `translate(-50%, -50%) rotate(${flight.r}deg)`;
      });
      if (filter) filter.style.opacity = "0.55";
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = track.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));

      images.forEach((image, index) => {
        const flight = flights[index];
        const local = Math.min(1, Math.max(0, (progress - flight.delay) / 0.55));
        const t = easeOutCubic(local);
        const x = flight.x * (1 - t);
        const y = flight.y * (1 - t);
        image.style.opacity = String(0.15 + t * 0.75);
        image.style.transform = `translate(calc(-50% + ${x}vw), calc(-50% + ${y}vh)) rotate(${flight.r}deg)`;
      });

      if (filter) {
        filter.style.opacity = String(0.92 - progress * 0.4);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={trackRef} className="cta-track">
      <div ref={stickyRef} className="cta-sticky">
        {ctaImages.map((src, index) => {
          const flight = flights[index];
          return (
            <Image
              key={src}
              data-polaroid
              src={src}
              alt=""
              width={192}
              height={256}
              className="cta-polaroid hidden md:block"
              style={{
                left: flight.left,
                top: flight.top,
                transform: `translate(-50%, -50%) rotate(${flight.r}deg)`,
              }}
            />
          );
        })}
        <div data-cta-filter className="cta-filter" />
        <div className="relative z-10 px-6 text-center">
          <h2 className="display h2 max-w-4xl">Prêt à raconter votre histoire ?</h2>
          <div className="mt-8 flex justify-center">
            <MainButton href="/contact" left="Contactez" right="moi" />
          </div>
        </div>
      </div>
    </section>
  );
}

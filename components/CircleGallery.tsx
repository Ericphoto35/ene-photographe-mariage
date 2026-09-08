"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { heroCircleImages } from "@/lib/data";

export function CircleGallery() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      orbit.style.transform = "rotateX(-6deg) rotateY(18deg)";
      return;
    }

    let frame = 0;
    const update = () => {
      const rotation = window.scrollY * 0.12;
      orbit.style.transform = `rotateX(-6deg) rotateY(${rotation}deg)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="orbit-stage">
      <div className="orbit-glow" aria-hidden="true" />
      <div ref={orbitRef} className="orbit">
        {heroCircleImages.map((src, index) => (
          <div
            key={src}
            className="orbit-card"
            style={{
              transform: `rotateY(${index * 40}deg) translateZ(var(--orbit-radius))`,
            }}
          >
            <Image src={src} alt="" width={336} height={420} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

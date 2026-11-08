"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { contactImages } from "@/lib/data";

export function ContactStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = ref.current;
    if (!row) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      row.style.transform = "translateX(0)";
      row.style.opacity = "1";
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = row.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (view - rect.top) / (view * 0.8)));
      row.style.opacity = String(progress);
      row.style.transform = `translateX(${(1 - progress) * -12}%)`;
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
    <section className="overflow-hidden py-8">
      <div ref={ref} className="contact-strip flex gap-3 px-3">
        {contactImages.map((src) => (
          <div key={src} className="relative h-40 w-28 shrink-0 overflow-hidden md:h-56 md:w-40">
            <Image src={src} alt="" fill className="gray-photo object-cover" sizes="160px" />
          </div>
        ))}
      </div>
    </section>
  );
}

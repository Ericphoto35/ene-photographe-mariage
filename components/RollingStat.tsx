"use client";

import { useEffect, useRef } from "react";

type RollingStatProps = {
  value: number;
  label: string;
};

export function RollingStat({ value, label }: RollingStatProps) {
  const digits = String(value).split("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const strips = Array.from(root.querySelectorAll<HTMLElement>("[data-strip]"));

    const roll = () => {
      strips.forEach((strip, index) => {
        const digit = Number(digits[index]);
        strip.style.transform = `translateY(-${digit * 10}%)`;
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      roll();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.classList.add("is-rolling");
          requestAnimationFrame(roll);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rolling-stat">
      <div className="display flex items-start text-[7.5rem] leading-none md:text-[10rem]">
        {digits.map((digit, index) => (
          <span key={`${digit}-${index}`} className="rolling-window">
            <span data-strip className="rolling-strip" style={{ transitionDelay: `${index * 120}ms` }}>
              {Array.from({ length: 10 }, (_, n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
          </span>
        ))}
        <span>+</span>
      </div>
      <p className="mt-3 text-sm text-muted">{label}</p>
    </div>
  );
}

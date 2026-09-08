"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/data";

export function StickyProjects() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = rootRef.current?.querySelectorAll<HTMLElement>("[data-project-card]");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { threshold: 0.55 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      {projects.map((project) => (
        <article key={project.slug} data-project-card className="project-sticky project-card">
          <Link href={`/project/${project.slug}`} className="relative block h-full">
            <Image
              src={project.cover}
              alt={project.name}
              fill
              className="project-photo object-cover"
              sizes="100vw"
            />
            <div className="project-gradient" />
            <div className="absolute bottom-10 left-0 z-10 pad">
              <p className="text-sm">{project.number}</p>
              <h3 className="display mt-2 text-6xl md:text-8xl">{project.name}</h3>
              <p className="mt-3 max-w-md text-sm text-paper/80">{project.short}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

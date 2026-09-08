import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Galerie" };

export default function ProjectsPage() {
  return (
    <section className="pad pb-28 pt-36 md:pt-44">
      <div className="wrap">
        <Reveal>
          <h1 className="display h1 max-w-5xl">Galerie</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            Mariages, couples, cérémonies, préparatifs. Vous aimez ce que vous voyez ? Contactez-moi
            pour discuter de votre projet de mariage.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 120}>
              <Link href={`/project/${project.slug}`} className="project-card group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.name}
                    fill
                    className="gray-photo object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-sm">{project.number}</p>
                  <h2 className="display text-5xl">{project.name}</h2>
                </div>
                <p className="mt-2 text-sm text-muted">{project.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20">
            <MainButton href="/contact" left="Discuter de" right="votre projet" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

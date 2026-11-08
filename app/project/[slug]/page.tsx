import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project?.name ?? "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getProject(project.next);

  return (
    <article className="pb-28">
      <header className="pad pt-36 md:pt-44">
        <div className="wrap">
          <Reveal>
            <p className="text-sm text-muted">{project.year}</p>
            <h1 className="display h1 mt-4">{project.name}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">{project.excerpt}</p>
          </Reveal>
        </div>
      </header>

      <div className="mt-12 grid gap-3 px-3 md:grid-cols-2">
        {project.gallery.map((src, index) => (
          <Reveal key={src} delay={(index % 2) * 100} y={40}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={src} alt={project.name} fill className="gray-photo object-cover" sizes="50vw" />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="pad mt-16">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm text-muted">Prestation</p>
              <p className="mt-3 max-w-md text-sm leading-6">{project.short}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-sm leading-6 text-muted">{project.body}</p>
          </Reveal>
        </div>
      </div>

      {next ? (
        <div className="pad mt-24">
          <div className="wrap flex items-end justify-between gap-6">
            <div>
              <p className="text-sm text-muted">Reportage suivant</p>
              <Link href={`/project/${next.slug}`} className="display h2 mt-3 block">
                {next.name}
              </Link>
            </div>
            <MainButton href={`/project/${next.slug}`} left="Voir le" right="reportage" />
          </div>
        </div>
      ) : null}
    </article>
  );
}

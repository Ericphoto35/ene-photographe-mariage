import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog Mariage Bretagne & Nantes",
  description:
    "Récits et reportages photo de mariages en Bretagne et près de Nantes : préparatifs, cérémonies laïques, garden party... Découvrez les coulisses des mariages capturés par L'Oeil de Monsieur R.",
  alternates: {
    canonical: "https://www.loeil-de-monsieur-r.fr/blog",
  },
  openGraph: {
    title: "Blog Mariage Bretagne & Nantes | L'Oeil de Monsieur R",
    description:
      "Reportages et récits de mariages photographiés en Bretagne et près de Nantes par L'Oeil de Monsieur R.",
    url: "https://www.loeil-de-monsieur-r.fr/blog",
    locale: "fr_FR",
    type: "website",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="pad pb-28 pt-36 md:pt-44">
      <div className="wrap">
        {/* Barre d'index éditoriale */}
        <Reveal y={16}>
          <div className="hero-meta-top mb-10">
            <span className="flex items-center gap-2.5">
              <span className="hero-status-dot" />
              <span>ARCHIVES &amp; RÉCITS — JOURNAL DE REPORTAGES</span>
            </span>
            <span className="hidden md:inline text-muted">
              BRETAGNE · RENNES · VANNES · NANTES · QUIMPER
            </span>
            <span className="text-muted">
              {String(blogPosts.length).padStart(2, "0")} REPORTAGES PUBLIÉS
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="dash" />
          <h1 className="display h1 max-w-5xl">Blog &amp; Récits</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            Récits et reportages de mariages photographiés en Bretagne et ailleurs en France :
            préparatifs, cérémonies laïques, séances couple et soirées au cœur des plus beaux
            domaines.
          </p>
        </Reveal>

        {/* Reportage à la une */}
        {featured ? (
          <Reveal delay={200} className="mt-16">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-center gap-8 border border-white/15 bg-panel/35 p-5 transition-colors hover:border-white/35 md:p-8 lg:grid-cols-12"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-panel lg:col-span-7">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  priority
                  className="gray-photo object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <span className="fineart-crop fineart-crop-tl">+</span>
                <span className="fineart-crop fineart-crop-tr">+</span>
                <span className="fineart-crop fineart-crop-bl">+</span>
                <span className="fineart-crop fineart-crop-br">+</span>
              </div>

              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between text-xs tracking-[0.18em] text-muted">
                    <span>N° {featured.number} — À LA UNE</span>
                    <span>{featured.displayDate}</span>
                  </div>
                  <p className="mt-4 text-xs tracking-[0.16em] text-[#d69a58]">
                    {featured.location}
                  </p>
                  <h2 className="display mt-3 text-4xl leading-[0.95] md:text-5xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-muted">{featured.excerpt}</p>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-xs tracking-[0.16em] text-paper transition-colors group-hover:border-paper">
                  <span>LIRE LE REPORTAGE</span>
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          </Reveal>
        ) : null}

        {/* Grille des autres reportages */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="project-card group flex h-full flex-col justify-between border border-white/12 p-5 transition-colors hover:border-white/35"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between text-xs tracking-[0.16em] text-muted">
                    <span>REPORTAGE N° {post.number}</span>
                    <span>{post.displayDate}</span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden bg-panel">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="gray-photo object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="fineart-crop fineart-crop-tl">+</span>
                    <span className="fineart-crop fineart-crop-br">+</span>
                  </div>

                  <p className="mt-5 text-xs tracking-[0.14em] text-[#d69a58]">
                    {post.location}
                  </p>
                  <h2 className="display mt-2 text-3xl leading-[0.96] md:text-4xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{post.excerpt}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs tracking-[0.16em]">
                  <span>LIRE L&apos;ARTICLE</span>
                  <ArrowIcon />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Appel à l'action bas de page */}
        <Reveal>
          <div className="mt-24 border-t border-white/12 pt-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="text-xs tracking-[0.18em] text-muted">VOTRE HISTOIRE</p>
              <h2 className="display h2 mt-3 max-w-3xl">
                Envie d&apos;un reportage qui vous ressemble ?
              </h2>
            </div>
            <MainButton href="/contact" left="Discuter de" right="votre mariage" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}


import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `https://www.loeil-de-monsieur-r.fr/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
      locale: "fr_FR",
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    ...(post.coverImage
      ? { image: `https://www.loeil-de-monsieur-r.fr${post.coverImage}` }
      : {}),
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "L'Oeil de Monsieur R",
    },
  };

  return (
    <article className="pb-28 pt-36 md:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pad">
        <div className="wrap">
          {/* Barre de navigation supérieure */}
          <Reveal y={16}>
            <div className="hero-meta-top mb-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-paper transition-opacity hover:opacity-75"
              >
                <span aria-hidden="true">←</span>
                <span>RETOUR AU BLOG</span>
              </Link>
              <span className="hidden md:inline text-muted">
                REPORTAGE N° {post.number} — {post.displayDate}
              </span>
              {post.venueUrl ? (
                <a
                  href={post.venueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d69a58] underline underline-offset-4 hover:opacity-80"
                >
                  {post.location} ↗
                </a>
              ) : (
                <span className="text-[#d69a58]">{post.location}</span>
              )}
            </div>
          </Reveal>

          {/* En-tête de l'article */}
          <Reveal>
            <div className="dash" />
            <h1 className="display h2 max-w-5xl">{post.title}</h1>
          </Reveal>

          {/* Image de couverture grand format */}
          {post.coverImage ? (
            <Reveal delay={140} className="mt-12">
              <div className="border border-white/15 bg-panel/40 p-3 md:p-5">
                <div className="mb-3 flex items-center justify-between text-xs tracking-[0.16em] text-muted">
                  <span>PLANCHE DE COUVERTURE — {post.location}</span>
                  <span>N° {post.number}</span>
                </div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-panel">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="gray-photo object-cover"
                    sizes="100vw"
                  />
                  <span className="fineart-crop fineart-crop-tl">+</span>
                  <span className="fineart-crop fineart-crop-tr">+</span>
                  <span className="fineart-crop fineart-crop-bl">+</span>
                  <span className="fineart-crop fineart-crop-br">+</span>
                </div>
              </div>
            </Reveal>
          ) : null}

          {/* Introduction éditoriale */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-xs tracking-[0.18em] text-muted">INTRODUCTION</p>
                <p className="mt-3 text-sm leading-6 text-paper">{post.excerpt}</p>
              </Reveal>
            </div>
            <div className="space-y-5 border-l border-white/15 pl-6 lg:col-span-8">
              {post.intro.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 28)} delay={index * 80}>
                  <p className="text-sm leading-7 text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Chapitres du reportage */}
          <div className="mt-24 space-y-24">
            {post.sections.map((section, index) => (
              <section
                key={section.heading}
                className="border-t border-white/12 pt-14"
              >
                <div className="grid items-start gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <Reveal>
                      <span className="text-xs tracking-[0.18em] text-[#d69a58]">
                        CHAPITRE {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="display mt-3 text-4xl md:text-5xl">
                        {section.heading}
                      </h2>
                    </Reveal>
                  </div>

                  <div className="space-y-4 lg:col-span-7">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <Reveal key={paragraph.slice(0, 28)} delay={pIndex * 80}>
                        <p className="text-sm leading-7 text-muted">{paragraph}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {section.image ? (
                  <Reveal delay={140} className="mt-10">
                    <div className="border border-white/15 bg-panel/30 p-3 md:p-4">
                      <div className="relative aspect-[3/2] w-full overflow-hidden bg-panel">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          className="gray-photo object-cover"
                          sizes="(max-width: 1024px) 100vw, 85vw"
                        />
                      </div>
                      <p className="mt-3 text-xs tracking-[0.12em] text-muted">
                        FIG. {String(index + 1).padStart(2, "0")} — {section.image.alt}
                      </p>
                    </div>
                  </Reveal>
                ) : null}
              </section>
            ))}
          </div>

          {/* Conclusion & Liens */}
          <Reveal>
            <div className="mt-24 border border-white/15 bg-panel/40 p-8 md:p-12">
              <div className="dash" />
              <p className="max-w-3xl text-sm leading-7 text-paper">{post.outro}</p>

              <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-white/12 pt-8">
                <MainButton href="/contact" left="Discuter de" right="mon mariage" />
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs tracking-[0.16em] text-muted underline underline-offset-4 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Reportage suivant */}
          {nextPost && nextPost.slug !== post.slug ? (
            <Reveal>
              <div className="mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-white/12 pt-14">
                <div>
                  <p className="text-xs tracking-[0.18em] text-muted">
                    REPORTAGE SUIVANT — N° {nextPost.number}
                  </p>
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="display mt-3 block max-w-3xl text-4xl md:text-6xl"
                  >
                    {nextPost.title}
                  </Link>
                </div>
                <MainButton
                  href={`/blog/${nextPost.slug}`}
                  left="Lire le"
                  right="reportage"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </article>
  );
}


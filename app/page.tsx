import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { HeroFineArt } from "@/components/HeroFineArt";
import { ArrowIcon, MainButton } from "@/components/MainButton";
import { MariagesNetReviews } from "@/components/MariagesNetReviews";
import { Reveal } from "@/components/Reveal";
import { StickyProjects } from "@/components/StickyProjects";
import { blogPosts } from "@/lib/blogPosts";
import {
  heroCircleImages,
  homeIntro,
  homeServices,
  homeServicesIntro,
  homeWhyChoose,
  serviceFaqs,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Éditorial Magazine & Planche Fine Art */}
      <section className="hero-editorial pad">
        {/* Photo en fondu à l'arrière du texte sur mobile */}
        <div className="hero-mobile-bg" aria-hidden="true">
          <Image
            src={heroCircleImages[0]}
            alt=""
            fill
            loading="eager"
            sizes="(max-width: 1023px) 100vw, 1px"
            className="hero-mobile-bg-img object-cover"
          />
          <div className="hero-mobile-bg-fade" />
        </div>

        <div className="wrap hero-editorial-shell relative z-10">
          {/* Barre supérieure d'index magazine */}
          <Reveal y={16}>
            <div className="hero-meta-top">
              <span className="flex items-center gap-2.5">
                <span className="hero-status-dot" />
                <span>ÉDITION N° 01 — REPORTAGE &amp; FINE ART</span>
              </span>
              <span className="hidden md:inline text-muted">
                RENNES · BRETAGNE · FRANCE
              </span>
              <span className="text-muted">48° 06′ N, 1° 40′ W</span>
            </div>
          </Reveal>

          {/* Grille principale : Typographie monumentale + Triptyque Fine Art */}
          <div className="hero-editorial-grid">
            <div className="hero-copy">
              <div className="hero-copy-inner">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <div className="dash !mb-0" />
                    <span className="text-xs tracking-[0.2em] text-muted">
                      L&apos;OEIL DE MONSIEUR R — RÉCIT VISUEL
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={120} className="min-w-0 mt-6">
                  <h1 className="display hero-title">
                    <span className="hero-title-main">
                      <span className="hero-title-word">Photographe</span>
                      <span className="hero-title-word hero-title-indent">
                        de Mariage
                      </span>
                    </span>
                    <span className="hero-title-place">
                      <span className="hero-title-rule" aria-hidden="true" />
                      <span>à Rennes et en Bretagne</span>
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={240}>
                  <div className="hero-editorial-lead">
                    <p className="text-sm leading-6 text-paper">
                      Capturons ensemble
                      <br />
                      vos moments précieux
                    </p>
                    <p className="text-xs leading-5 text-muted max-w-xs">
                      Approche documentaire discrète et portraits intemporels pour raconter
                      l&apos;authenticité de votre journée.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={360}>
                  <div className="mt-10 flex flex-wrap items-center gap-8 md:gap-10">
                    <MainButton href="/contact" left="Contactez" right="moi" />
                    <MainButton href="/projects" left="Voir la" right="galerie" />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="hero-visual">
              <Reveal delay={180} className="w-full">
                <HeroFineArt />
              </Reveal>
            </div>
          </div>

          {/* Barre d'index éditoriale inférieure */}
          <Reveal delay={420} y={16}>
            <div className="hero-meta-bottom">
              <div className="hero-pillars">
                <div className="hero-pillar">
                  <span className="text-muted">01 /</span>
                  <span>STYLE DOCUMENTAIRE</span>
                </div>
                <div className="hero-pillar">
                  <span className="text-muted">02 /</span>
                  <span>PORTRAITS &amp; TIRAGES FINE ART</span>
                </div>
                <div className="hero-pillar">
                  <span className="text-muted">03 /</span>
                  <span>BRETAGNE &amp; INTERNATIONAL</span>
                </div>
              </div>
              <a href="#intro" className="hero-scroll-cue">
                <span>DÉFILER</span>
                <span aria-hidden="true" className="hero-scroll-arrow">
                  ↓
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Intro / À propos */}
      <section id="intro" className="pad py-24 md:py-32">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs tracking-[0.18em] text-[#d69a58]">{homeIntro.eyebrow}</p>
              <h2 className="display h2 mt-4 max-w-4xl leading-[1.04]">{homeIntro.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 max-w-2xl space-y-5">
                {homeIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap items-center gap-8 pt-4">
                  <MainButton href="/about" left="En savoir" right="plus" />
                  <Link
                    href="/contact"
                    className="text-xs tracking-[0.16em] text-muted underline underline-offset-4 transition-colors hover:text-paper"
                  >
                    Vérifier ma disponibilité pour votre date →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="border border-white/15 bg-panel/35 p-3 md:p-4">
                <div className="mb-3 flex items-center justify-between text-[0.68rem] tracking-[0.16em] text-muted">
                  <span>PORTRAIT &amp; APPROCHE</span>
                  <span>RENNES · BRETAGNE</span>
                </div>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
                  <Image
                    src={homeIntro.image}
                    alt="Éric — L'Oeil de Monsieur R, photographe de mariage à Rennes et en Bretagne"
                    fill
                    className="gray-photo object-cover"
                    sizes="(max-width: 1024px) 90vw, 38vw"
                  />
                  <span className="fineart-crop fineart-crop-tl">+</span>
                  <span className="fineart-crop fineart-crop-br">+</span>
                </div>
                <p className="mt-3 text-[0.68rem] tracking-[0.14em] text-muted">
                  {homeIntro.imageCaption}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Mes Services */}
      <section className="pad py-24 md:py-32">
        <div className="wrap">
          <Reveal>
            <p className="text-xs tracking-[0.18em] text-[#d69a58]">
              PRESTATIONS MARIAGE — RENNES &amp; BRETAGNE
            </p>
            <h2 className="display h2 mt-3">Mes Services</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">{homeServicesIntro}</p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <Link href="/services" className="service-card group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Photographe de mariage à Rennes et en Bretagne`}
                      fill
                      className="gray-photo object-cover"
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 22vw"
                    />
                    <span className="absolute right-4 top-4 text-2xl transition-transform duration-300 group-hover:rotate-90">
                      +
                    </span>
                  </div>
                  <h3 className="display mt-5 text-3xl md:text-4xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
              <MainButton href="/services" left="Voir les" right="formules & tarifs" />
              <p className="text-xs tracking-[0.16em] text-muted">
                3 FORMULES SUR MESURE · À PARTIR DE <span className="text-paper">1 200 €</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Pourquoi Me Choisir */}
      <section className="pad py-24 md:py-32">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2 max-w-4xl">{homeWhyChoose.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted">{homeWhyChoose.intro}</p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {homeWhyChoose.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article>
                  <div className="dash" />
                  <h3 className="display mt-6 text-4xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14">
              <MainButton href="/contact" left="Demander" right="un devis" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Galerie — rubrique moderne (aperçu), absente en scroll sur le live */}
      <section>
        <div className="pad pb-10">
          <div className="wrap flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display h2">Galerie</h2>
            </Reveal>
            <Reveal delay={80}>
              <MainButton href="/projects" left="Voir mon" right="portfolio" />
            </Reveal>
          </div>
        </div>
        <StickyProjects />
      </section>

      {/* 6. Témoignages */}
      <section className="pad py-24 md:py-32">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2 max-w-4xl">Ce Que Disent Mes Clients</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.names} delay={index * 100}>
                <blockquote>
                  <h3 className="display text-4xl">{item.names}</h3>
                  <p className="mt-2 text-sm text-muted">{item.date}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">« {item.quote} »</p>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <MariagesNetReviews />
          </Reveal>
        </div>
      </section>

      {/* 7. Journal & Derniers Reportages (Blog) */}
      <section className="pad py-24 md:py-32 border-t border-white/10">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div className="dash" />
              <h2 className="display h2">Journal &amp; Reportages</h2>
            </Reveal>
            <Reveal delay={80}>
              <MainButton href="/blog" left="Voir tous" right="les récits" />
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post, index) => (
              <Reveal key={post.slug} delay={index * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="project-card group flex h-full flex-col justify-between border border-white/12 p-4 transition-colors hover:border-white/35"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between text-[0.68rem] tracking-[0.16em] text-muted">
                      <span>N° {post.number}</span>
                      <span>{post.displayDate}</span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-panel">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="gray-photo object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <p className="mt-4 text-[0.68rem] tracking-[0.14em] text-[#d69a58]">
                      {post.location}
                    </p>
                    <h3 className="display mt-2 text-2xl leading-[0.98]">{post.title}</h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3 text-[0.7rem] tracking-[0.16em]">
                    <span>LIRE LE RÉCIT</span>
                    <ArrowIcon />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Questions fréquentes & Zone d'intervention en Bretagne */}
      <section className="pad py-24 md:py-32 border-t border-white/10">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="dash" />
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">
                  QUESTIONS FRÉQUENTES — MARIAGE EN BRETAGNE
                </p>
                <h2 className="display h2 mt-3 leading-[1.04]">Preparez votre jour J</h2>
                <p className="mt-6 max-w-md text-sm leading-6 text-muted">
                  Basé à Rennes, j&apos;interviens dans toute l&apos;Ille-et-Vilaine (Vitré,
                  Saint-Malo, Cancale, Fougères), le Morbihan (Vannes), le Finistère (Quimper), les
                  Côtes-d&apos;Armor (Dinan) et la Loire-Atlantique (Nantes).
                </p>
                <div className="mt-8">
                  <MainButton href="/contact" left="Poser une" right="question" />
                </div>
              </Reveal>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {serviceFaqs.slice(0, 4).map((faq, index) => (
                <Reveal key={faq.q} delay={(index % 2) * 100}>
                  <article className="border border-white/12 bg-panel/25 p-6">
                    <h3 className="text-sm font-medium text-paper">{faq.q}</h3>
                    <p className="mt-3 text-xs leading-6 text-muted">{faq.a}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <CallToAction />
    </>
  );
}

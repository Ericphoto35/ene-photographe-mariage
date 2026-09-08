import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { CircleGallery } from "@/components/CircleGallery";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { StickyProjects } from "@/components/StickyProjects";
import {
  homeIntro,
  homeServices,
  homeServicesIntro,
  homeWhyChoose,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — textes = site live, visuel = design moderne */}
      <section className="hero">
        <div className="hero-copy pad">
          <div className="hero-copy-inner">
            <Reveal>
              <div className="dash" />
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <h1 className="display hero-title">
                <span className="hero-title-main">
                  <span className="hero-title-word">Photographe</span>{" "}
                  <span className="hero-title-word">de Mariage</span>
                </span>
                <span className="hero-title-place">à Rennes et en Bretagne</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
                Capturons ensemble
                <br />
                vos moments précieux
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-8">
                <MainButton href="/contact" left="Contactez" right="moi" />
                <MainButton href="/projects" left="Voir la" right="galerie" />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="hero-visual">
          <CircleGallery />
        </div>
      </section>

      {/* 2. Intro / À propos */}
      <section className="pad py-24 md:py-32">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2 max-w-4xl">{homeIntro.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-xl space-y-4">
              {homeIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-sm leading-6 text-muted">
                  {paragraph}
                </p>
              ))}
              <div className="pt-4">
                <MainButton href="/about" left="En savoir" right="plus" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Mes Services */}
      <section className="pad py-24 md:py-32">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2">Mes Services</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted">{homeServicesIntro}</p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <article className="service-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="gray-photo object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute right-4 top-4 text-2xl">+</span>
                  </div>
                  <h3 className="display mt-5 text-3xl md:text-4xl">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted">{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14">
              <MainButton href="/services" left="Voir les" right="formules" />
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
        </div>
      </section>

      {/* 7. CTA final */}
      <CallToAction />
    </>
  );
}

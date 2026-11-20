import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { RollingStat } from "@/components/RollingStat";
import { aboutCollage, equipment, stats, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "À Propos d'Éric — Photographe de Mariage à Rennes & en Bretagne",
  description:
    "Découvrez le parcours et l'approche d'Éric (L'Oeil de Monsieur R), artisan photographe de mariage basé à Rennes. Plus de 10 ans d'expérience en reportage documentaire et portraits Fine Art en Bretagne.",
  alternates: {
    canonical: "https://www.loeil-de-monsieur-r.fr/about",
  },
  openGraph: {
    title: "À Propos d'Éric — Photographe Mariage Rennes & Bretagne | L'Oeil de Monsieur R",
    description:
      "Artisan photographe de mariage passionné basé à Rennes : approche documentaire, portraits intemporels et tirages Fine Art en Bretagne.",
    url: "https://www.loeil-de-monsieur-r.fr/about",
    images: ["/images/Eric.webp"],
    locale: "fr_FR",
    type: "profile",
  },
};

const collageAlts = [
  "Portrait de la mariée en lumière naturelle — Photographe de mariage à Rennes et en Bretagne",
  "Complicité des mariés lors du reportage — L'Oeil de Monsieur R, photographe mariage Bretagne",
  "Préparatifs de la mariée avant la cérémonie — Reportage mariage en Ille-et-Vilaine",
  "Séance couple de mariage en extérieur en Bretagne — L'Oeil de Monsieur R",
  "Détail de la robe de mariée — Photographie de mariage Fine Art à Rennes",
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: "https://www.loeil-de-monsieur-r.fr/about",
    name: "À Propos d'Éric — L'Oeil de Monsieur R, Photographe de Mariage à Rennes",
    mainEntity: {
      "@type": "Person",
      name: "Éric Soret",
      alternateName: "L'Oeil de Monsieur R",
      jobTitle: "Photographe de mariage professionnel",
      image: "https://www.loeil-de-monsieur-r.fr/images/Eric.webp",
      url: "https://www.loeil-de-monsieur-r.fr",
      workLocation: {
        "@type": "Place",
        name: "Rennes, Ille-et-Vilaine, Bretagne",
      },
      sameAs: [
        "https://www.mariages.net/photo-mariage/loeil-de-monsieur-r-photographe-de-mariage--e426109",
        "https://www.instagram.com/monsieur_r_mariage/",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* 1. En-tête & Portrait du Photographe */}
      <section className="pad pb-16 pt-36 md:pt-44">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="dash" />
              <p className="text-xs tracking-[0.18em] text-[#d69a58]">
                ÉRIC SORET — ARTISAN PHOTOGRAPHE DE MARIAGE À RENNES &amp; EN BRETAGNE
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display h1 mt-4 leading-[0.98]">L&apos;Oeil de Monsieur R</h1>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-muted">
                <p className="text-paper">
                  Bonjour, je suis Éric, le photographe derrière L&apos;Oeil de Monsieur R. Basé à
                  Rennes, je photographie des mariages avec passion depuis plus de 10 ans en
                  Ille-et-Vilaine, aux quatre coins de la Bretagne et partout en France.
                </p>
                <p>
                  Mon parcours dans la photographie est né d&apos;une fascination simple : le
                  pouvoir d&apos;une image à traverser le temps et à raviver intacte l&apos;émotion
                  d&apos;une seconde. Lorsque vous me confiez votre mariage, vous n&apos;avez pas
                  affaire à une agence anonyme : je suis votre unique interlocuteur, de notre
                  première rencontre jusqu&apos;à la remise de vos photos et de vos tirages Fine
                  Art.
                </p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <MainButton href="/contact" left="Travaillons" right="ensemble" />
                <Link
                  href="/projects"
                  className="text-xs tracking-[0.16em] text-muted underline underline-offset-4 transition-colors hover:text-paper"
                >
                  Découvrir mon portfolio mariage →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="border border-white/15 bg-panel/35 p-3 md:p-5">
                <div className="mb-3 flex items-center justify-between text-[0.68rem] tracking-[0.16em] text-muted">
                  <span>PORTRAIT — L&apos;AUTEUR</span>
                  <span>RENNES (35)</span>
                </div>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
                  <Image
                    src="/images/Eric.webp"
                    alt="Éric Soret — L'Oeil de Monsieur R, photographe de mariage professionnel à Rennes et en Bretagne"
                    fill
                    loading="eager"
                    className="gray-photo object-cover"
                    sizes="(max-width: 1024px) 90vw, 38vw"
                  />
                  <span className="fineart-crop fineart-crop-tl">+</span>
                  <span className="fineart-crop fineart-crop-tr">+</span>
                  <span className="fineart-crop fineart-crop-bl">+</span>
                  <span className="fineart-crop fineart-crop-br">+</span>
                </div>
                <p className="mt-3 text-[0.68rem] tracking-[0.14em] text-muted">
                  ÉRIC SORET — REPORTAGE DOCUMENTAIRE &amp; TIRAGES FINE ART
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Planche de 5 photographies de mariage */}
      <section className="pad py-10">
        <div className="wrap grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {aboutCollage.map((src, index) => (
            <Reveal
              key={src}
              delay={index * 80}
              y={24}
              className={index === 2 ? "col-span-2 md:col-span-1" : ""}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={collageAlts[index] ?? "Photographie de mariage en Bretagne par L'Oeil de Monsieur R"}
                  fill
                  className="gray-photo object-cover"
                  sizes="(max-width: 768px) 48vw, 20vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Chiffres clés */}
      <section className="pad py-24">
        <div className="wrap grid gap-12 md:grid-cols-3">
          {stats.map((stat) => (
            <RollingStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* 4. Mon parcours & mon ancrage en Bretagne */}
      <section className="pad py-16">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="dash" />
              <p className="text-xs tracking-[0.18em] text-[#d69a58]">
                HISTOIRE &amp; PHILOSOPHIE
              </p>
              <h2 className="display h2 mt-3 leading-[1.04]">Formation &amp; parcours</h2>
            </Reveal>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <Reveal delay={100}>
              <p className="text-sm leading-7 text-muted">
                Installé à Rennes, je me déplace dans toute la Bretagne — de Vitré à Saint-Malo et
                Cancale en Ille-et-Vilaine, jusqu&apos;à Vannes dans le Morbihan, Quimper dans le
                Finistère, Dinan dans les Côtes-d&apos;Armor et Nantes en Loire-Atlantique — ainsi
                que partout en France pour documenter des mariages sincères et vivants.
              </p>
              <p className="mt-6 text-sm leading-7 text-muted">
                Mon aventure dans la photographie a débuté par une quête exigeante en autodidacte,
                construite pas à pas sur le terrain. Chaque mariage m&apos;a appris à anticiper
                l&apos;instant décisif : la main d&apos;un père qui se pose sur l&apos;épaule de sa
                fille avant d&apos;entrer à l&apos;église, le souffle coupé lors de la découverte,
                ou l&apos;énergie libérée d&apos;un cocktail sous les arbres d&apos;un domaine
                breton.
              </p>
              <p className="mt-6 text-sm leading-7 text-muted">
                Au fil des années, j&apos;ai développé une affinité particulière pour l&apos;alliance
                du photojournalisme documentaire et du portrait intimiste. Mon objectif est simple :
                vous mettre en confiance pour que vous oubliiez totalement l&apos;appareil photo, et
                vous livrer un récit visuel intemporel qui raconte non seulement votre journée, mais
                surtout le lien qui vous unit.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6">
                <Link
                  href="/blog"
                  className="text-xs tracking-[0.16em] text-[#d69a58] underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  Lire mes derniers reportages de mariage en Bretagne →
                </Link>
                <Link
                  href="/services"
                  className="text-xs tracking-[0.16em] text-muted underline underline-offset-4 transition-colors hover:text-paper"
                >
                  Découvrir mes formules &amp; tarifs →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Pourquoi me choisir */}
      <section className="pad py-16">
        <div className="wrap">
          <Reveal>
            <div className="dash" />
            <h2 className="display h2 max-w-3xl">Pourquoi me choisir</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <article className="border-t border-white/12 pt-6">
                  <h3 className="display text-4xl">{value.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Équipement professionnel & sécurité */}
      <section className="pad py-16 pb-28">
        <div className="wrap grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <div className="dash" />
            <h2 className="display h2 leading-[1.04]">Equipement professionnel</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              J&apos;utilise exclusivement du matériel professionnel haut de gamme pour garantir des
              images nettes et lumineuses, quelles que soient la météo bretonne ou l&apos;obscurité
              d&apos;une église ou d&apos;une soirée. Mon équipement est intégralement doublé sur
              chaque mariage pour assurer une sécurité absolue : je n&apos;ai jamais manqué un seul
              instant en raison d&apos;un imprévu technique.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4 text-sm text-muted">
              {equipment.map((item) => (
                <li key={item} className="border-b border-white/10 pb-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <MainButton href="/contact" left="Raconter" right="votre histoire" />
              <Link
                href="/services"
                className="text-xs tracking-[0.16em] text-muted underline underline-offset-4 transition-colors hover:text-paper"
              >
                Voir mes 3 formules mariage →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

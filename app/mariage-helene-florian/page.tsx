import type { Metadata } from "next";
import { EditorialGalleryGrid } from "@/components/EditorialGalleryGrid";
import { ArrowIcon } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hélène & Florian",
  description: "Résumé en photos du mariage d'Hélène et Florian.",
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    number: "01",
    id: "preparation",
    title: "Préparation",
    description: "Les instants suspendus avant le grand jour.",
    downloadHref:
      "https://www.amazon.fr/photos/share/wwjPAH5ECx7S2LB4chErOpDORcU7SESJx9zuMOiUAj2",
    images: [
      { id: "p1", src: "/images/mariee.webp", title: "La mariée" },
      { id: "p2", src: "/images/Marie.webp", title: "Préparation" },
      { id: "p3", src: "/images/Coupe_cheveux.webp", title: "Coiffure" },
      { id: "p4", src: "/images/Alliance.webp", title: "Alliance" },
      { id: "p5", src: "/images/details_chaussures_marie.webp", title: "Chaussures de la mariée" },
      { id: "p6", src: "/images/details_chaussures.webp", title: "Détails chaussures" },
    ],
  },
  {
    number: "02",
    id: "mairie",
    title: "Mairie",
    description: "L'officialisation de l'union.",
    downloadHref:
      "https://www.amazon.fr/photos/share/UeXEw4g9H3EtFno2VNzEiMgkpJDkUWFXUBq1cFEyOWP",
    images: [
      { id: "m1", src: "/images/Mairie.webp", title: "Mairie" },
      { id: "m2", src: "/images/Mairie_Helene.webp", title: "Hélène" },
      { id: "m3", src: "/images/Marie_florian.webp", title: "Florian" },
      { id: "m4", src: "/images/Mairie_2.webp", title: "Mairie" },
      { id: "m5", src: "/images/Mairie_3.webp", title: "Mairie" },
      { id: "m6", src: "/images/Mairie4.webp", title: "Mairie" },
    ],
  },
  {
    number: "03",
    id: "garden-party",
    title: "Garden Party",
    description: "Cocktail et convivialité en plein air.",
    downloadHref:
      "https://www.amazon.fr/photos/share/MErtk6wxrg6Ek0DZNytik6f0FuHaiwzIfspQPAB5coM",
    images: [
      { id: "gp1", src: "/images/Garden_1.webp", title: "Garden Party" },
      { id: "gp2", src: "/images/Garden_2.webp", title: "Garden Party" },
      { id: "gp3", src: "/images/Garden_3.webp", title: "Garden Party" },
      { id: "gp4", src: "/images/Garden_4.webp", title: "Garden Party" },
      { id: "gp5", src: "/images/Garden_5.webp", title: "Garden Party" },
      { id: "gp6", src: "/images/Garden_6.webp", title: "Garden Party" },
    ],
  },
  {
    number: "04",
    id: "ceremonie-laique",
    title: "Cérémonie Laïque",
    description: "Les vœux, les rires et les larmes.",
    downloadHref:
      "https://www.amazon.fr/photos/share/KXWIQszw7e4gIpJPlGclmiRQZMOhsWDRER5cxI9TGD9",
    images: [
      { id: "c1", src: "/images/cere.webp", title: "Cérémonie laïque" },
      { id: "c2", src: "/images/cere_2.webp", title: "Cérémonie laïque" },
      { id: "c3", src: "/images/cere_3.webp", title: "Cérémonie laïque" },
      { id: "c4", src: "/images/cere_4.webp", title: "Cérémonie laïque" },
      { id: "c5", src: "/images/cere_5.webp", title: "Cérémonie laïque" },
      { id: "c6", src: "/images/cere_6.webp", title: "Cérémonie laïque" },
    ],
  },
  {
    number: "05",
    id: "groupe",
    title: "Photos de Groupe",
    description: "Famille et amis réunis pour l'occasion.",
    downloadHref:
      "https://www.amazon.fr/photos/share/y567AscrempFuTU1LX58OK4RzSOz9iIiUmxb1F2g5nO",
    images: [
      { id: "g1", src: "/images/groupe1.webp", title: "Photo de groupe" },
      { id: "g2", src: "/images/groupe2.webp", title: "Photo de groupe" },
      { id: "g3", src: "/images/groupe3.webp", title: "Photo de groupe" },
      { id: "g4", src: "/images/groupe4.webp", title: "Photo de groupe" },
      { id: "g5", src: "/images/groupe5.webp", title: "Photo de groupe" },
      { id: "g6", src: "/images/groupe6.webp", title: "Photo de groupe" },
    ],
  },
  {
    number: "06",
    id: "couple",
    title: "Couple",
    description: "Hélène et Florian, en amoureux.",
    downloadHref:
      "https://www.amazon.fr/photos/share/w1mr1WKGKPBFHEnutwMoDVPkCHWcm9T4LOIPFf4Bukj",
    images: [
      { id: "cp1", src: "/images/couple1.webp", title: "Couple" },
      { id: "cp2", src: "/images/couple2.webp", title: "Couple" },
      { id: "cp3", src: "/images/couple3.webp", title: "Couple" },
      { id: "cp4", src: "/images/couple4.webp", title: "Couple" },
      { id: "cp5", src: "/images/couple5.webp", title: "Couple" },
      { id: "cp6", src: "/images/couple6.webp", title: "Couple" },
    ],
  },
];

export default function HeleneFlorianPage() {
  return (
    <section className="pad pb-28 pt-36 md:pt-44">
      <div className="wrap">
        <Reveal y={16}>
          <div className="hero-meta-top mb-10">
            <span className="flex items-center gap-2.5">
              <span className="hero-status-dot" />
              <span>GALERIE PRIVÉE — DOMAINE DE KERLYS</span>
            </span>
            <span className="hidden md:inline text-muted">
              HÉLÈNE &amp; FLORIAN — BRIEC-DE-L&apos;ODET
            </span>
            <span className="text-muted">06 CHAPITRES</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="dash" />
          <h1 className="display h1">Hélène &amp; Florian</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            Un résumé en images de votre mariage, moment par moment. Cliquez sur une photographie
            pour l&apos;agrandir ou téléchargez l&apos;intégralité de chaque galerie ci-dessous.
          </p>
        </Reveal>

        {/* Sommaire rapide des chapitres */}
        <Reveal delay={200}>
          <nav
            aria-label="Chapitres du mariage"
            className="mt-12 flex flex-wrap gap-3 border-y border-white/12 py-4"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="border border-white/15 px-4 py-2 text-xs tracking-[0.16em] text-muted transition-colors hover:border-paper hover:text-paper"
              >
                {section.number} / {section.title}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-20 space-y-28">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-white/12 pt-12 first:border-t-0 first:pt-0"
            >
              <Reveal>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="text-xs tracking-[0.18em] text-[#d69a58]">
                      CHAPITRE N° {section.number}
                    </p>
                    <h2 className="display mt-2 text-5xl md:text-6xl">{section.title}</h2>
                    <p className="mt-3 text-sm text-muted">{section.description}</p>
                  </div>

                  <a
                    href={section.downloadHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-paper/40 bg-panel/60 px-6 py-3.5 text-xs tracking-[0.16em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                  >
                    <span>TÉLÉCHARGER TOUTES LES PHOTOS</span>
                    <ArrowIcon />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <EditorialGalleryGrid images={section.images} />
              </Reveal>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}


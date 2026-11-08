import type { Metadata } from "next";
import Link from "next/link";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et informations sur la protection des données personnelles du site L'Oeil de Monsieur R, photographe de mariage à Rennes.",
  alternates: {
    canonical: "https://www.loeil-de-monsieur-r.fr/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pad pb-28 pt-36 md:pt-44">
      <div className="wrap">
        <Reveal y={16}>
          <div className="hero-meta-top mb-10">
            <span className="flex items-center gap-2.5">
              <span className="hero-status-dot" />
              <span>INFORMATIONS LÉGALES &amp; RGPD</span>
            </span>
            <span className="hidden md:inline text-muted">
              ENE SOLUTIONS — L&apos;OEIL DE MONSIEUR R
            </span>
            <span className="text-muted">LOI N° 2004-575 (LCEN)</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="dash" />
          <h1 className="display h1">Mentions légales</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
            numérique (LCEN) et au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </Reveal>

        <div className="mt-20 space-y-16">
          {/* 1. Éditeur */}
          <Reveal>
            <section className="grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">ARTICLE 01</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">Éditeur du site</h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-muted lg:col-span-7">
                <p>
                  Le site{" "}
                  <a
                    href="https://www.loeil-de-monsieur-r.fr"
                    className="text-paper underline underline-offset-4"
                  >
                    www.loeil-de-monsieur-r.fr
                  </a>{" "}
                  (marque « L&apos;Oeil de Monsieur R ») est édité par :
                </p>
                <ul className="space-y-2 border-l border-white/15 pl-5">
                  <li>
                    <span className="text-paper">Raison sociale :</span> ENE SOLUTIONS
                  </li>
                  <li>
                    <span className="text-paper">Forme juridique :</span> SAS (Société par Actions
                    Simplifiée)
                  </li>
                  <li>
                    <span className="text-paper">Siège social :</span> 1 Allée des Violettes, 35590
                    Clayes, France
                  </li>
                  <li>
                    <span className="text-paper">SIREN :</span> 108 375 346
                  </li>
                  <li>
                    <span className="text-paper">SIRET :</span> 108 375 346 00013
                  </li>
                  <li>
                    <span className="text-paper">N° TVA intracommunautaire :</span> FR92 108375346
                  </li>
                  <li>
                    <span className="text-paper">Activité :</span> Activités photographiques (NAF
                    74.20Z)
                  </li>
                  <li>
                    <span className="text-paper">Président / Directeur de la publication :</span>{" "}
                    Éric Soret
                  </li>
                  <li>
                    <span className="text-paper">Email :</span>{" "}
                    <a
                      href="mailto:contact@enemariage.fr"
                      className="text-paper underline underline-offset-4"
                    >
                      contact@enemariage.fr
                    </a>
                  </li>
                  <li>
                    <span className="text-paper">Téléphone :</span>{" "}
                    <a
                      href="tel:+33633320795"
                      className="text-paper underline underline-offset-4"
                    >
                      +33 6 33 32 07 95
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </Reveal>

          {/* 2. Hébergeur */}
          <Reveal>
            <section className="grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">ARTICLE 02</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">Hébergeur</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted lg:col-span-7">
                <ul className="space-y-2 border-l border-white/15 pl-5">
                  <li>
                    <span className="text-paper">Hébergeur :</span> Vercel Inc.
                  </li>
                  <li>
                    <span className="text-paper">Adresse :</span> 440 N Barranca Ave #4133, Covina,
                    CA 91723, États-Unis
                  </li>
                  <li>
                    <span className="text-paper">Site :</span>{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper underline underline-offset-4"
                    >
                      vercel.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </Reveal>

          {/* 3. Propriété intellectuelle */}
          <Reveal>
            <section className="grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">ARTICLE 03</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">Propriété intellectuelle</h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-muted lg:col-span-7">
                <p>
                  L&apos;ensemble des contenus présents sur ce site (textes, photographies, logos,
                  éléments graphiques, etc.) est la propriété exclusive de ENE SOLUTIONS /
                  L&apos;Oeil de Monsieur R, sauf mention contraire. Toute reproduction,
                  représentation, modification ou diffusion, totale ou partielle, sans autorisation
                  écrite préalable, est interdite.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 4. RGPD */}
          <Reveal>
            <section
              id="donnees-personnelles"
              className="scroll-mt-28 grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">ARTICLE 04</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">
                  Protection des données (RGPD)
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-muted lg:col-span-7">
                <p>
                  Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et
                  Libertés, les informations collectées via le{" "}
                  <Link href="/contact" className="text-paper underline underline-offset-4">
                    formulaire de contact
                  </Link>{" "}
                  (nom, email, téléphone, détails de l&apos;événement, message) sont destinées
                  exclusivement à ENE SOLUTIONS afin de répondre à votre demande et, le cas
                  échéant, d&apos;établir un devis.
                </p>
                <ul className="space-y-2 border-l border-white/15 pl-5">
                  <li>
                    <span className="text-paper">Responsable du traitement :</span> ENE SOLUTIONS
                    (Éric Soret)
                  </li>
                  <li>
                    <span className="text-paper">Base légale :</span> consentement (art. 6.1.a
                    RGPD) et/ou mesures précontractuelles à votre demande (art. 6.1.b)
                  </li>
                  <li>
                    <span className="text-paper">Durée de conservation :</span> les données sont
                    conservées le temps nécessaire au traitement de votre demande, puis au maximum 3
                    ans à compter du dernier contact en l&apos;absence de relation commerciale
                  </li>
                  <li>
                    <span className="text-paper">Destinataires :</span> le responsable du site
                    uniquement ; aucun transfert commercial à des tiers
                  </li>
                </ul>
                <p>
                  Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
                  de limitation, d&apos;opposition et de portabilité. Pour exercer ces droits :{" "}
                  <a
                    href="mailto:contact@enemariage.fr"
                    className="text-paper underline underline-offset-4"
                  >
                    contact@enemariage.fr
                  </a>
                  . Vous pouvez également introduire une réclamation auprès de la{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper underline underline-offset-4"
                  >
                    CNIL
                  </a>
                  .
                </p>
              </div>
            </section>
          </Reveal>

          {/* 5. Cookies */}
          <Reveal>
            <section
              id="cookies"
              className="scroll-mt-28 grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">ARTICLE 05</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">Cookies</h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-muted lg:col-span-7">
                <p>
                  Ce site n&apos;utilise pas de cookies publicitaires ni d&apos;outils d&apos;analyse
                  tiers. Un bandeau de consentement vous permet d&apos;accepter ou de refuser le
                  chargement de Google Maps sur la page contact (cookies tiers éventuels).
                </p>
                <p>
                  Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies »
                  situé dans le pied de page, ou en paramétrant votre navigateur.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 6. Contact */}
          <Reveal>
            <section className="grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.18em] text-[#d69a58]">ARTICLE 06</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">Contact</h2>
              </div>
              <div className="space-y-6 text-sm leading-7 text-muted lg:col-span-7">
                <p>
                  Pour toute question relative à ces mentions légales ou à vos données
                  personnelles, contactez-nous via la page Contact ou à l&apos;adresse{" "}
                  <a
                    href="mailto:contact@enemariage.fr"
                    className="text-paper underline underline-offset-4"
                  >
                    contact@enemariage.fr
                  </a>
                  .
                </p>
                <div>
                  <MainButton href="/contact" left="Page" right="contact" />
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


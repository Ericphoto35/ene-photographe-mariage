import Link from 'next/link';

export default function MentionsLegalesContent() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Mentions légales</h1>
          <div className="h-px w-24 bg-gray-400 mx-auto mb-6" />
          <p className="text-gray-600 text-sm">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
            numérique (LCEN).
          </p>
        </header>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-[var(--text-gray-800)] mb-4">
              1. Éditeur du site
            </h2>
            <p className="mb-4">
              Le site{' '}
              <a
                href="https://www.loeil-de-monsieur-r.fr"
                className="underline hover:text-gray-900"
              >
                www.loeil-de-monsieur-r.fr
              </a>{' '}
              (marque « L&apos;Oeil de Monsieur R ») est édité par :
            </p>
            <ul className="space-y-2 list-none">
              <li>
                <strong>Raison sociale :</strong> ENE SOLUTIONS
              </li>
              <li>
                <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)
              </li>
              <li>
                <strong>Siège social :</strong> 1 Allée des Violettes, 35590 Clayes, France
              </li>
              <li>
                <strong>SIREN :</strong> 108 375 346
              </li>
              <li>
                <strong>SIRET :</strong> 108 375 346 00013
              </li>
              <li>
                <strong>N° TVA intracommunautaire :</strong> FR92 108375346
              </li>
              <li>
                <strong>Activité :</strong> Activités photographiques (NAF 74.20Z)
              </li>
              <li>
                <strong>Président / Directeur de la publication :</strong> Éric Soret
              </li>
              <li>
                <strong>Email :</strong>{' '}
                <a
                  href="mailto:contact@enemariage.fr"
                  className="underline hover:text-gray-900"
                >
                  contact@enemariage.fr
                </a>
              </li>
              <li>
                <strong>Téléphone :</strong>{' '}
                <a href="tel:+33633320795" className="underline hover:text-gray-900">
                  +33 6 33 32 07 95
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[var(--text-gray-800)] mb-4">
              2. Hébergeur
            </h2>
            <ul className="space-y-2 list-none">
              <li>
                <strong>Hébergeur :</strong> Vercel Inc.
              </li>
              <li>
                <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </li>
              <li>
                <strong>Site :</strong>{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-900"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[var(--text-gray-800)] mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, photographies, logos,
              éléments graphiques, etc.) est la propriété exclusive de ENE SOLUTIONS / L&apos;Oeil
              de Monsieur R, sauf mention contraire. Toute reproduction, représentation,
              modification ou diffusion, totale ou partielle, sans autorisation écrite préalable,
              est interdite.
            </p>
          </section>

          <section id="donnees-personnelles">
            <h2 className="text-2xl font-serif text-[var(--text-gray-800)] mb-4">
              4. Protection des données personnelles (RGPD)
            </h2>
            <p className="mb-4">
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés,
              les informations collectées via le{' '}
              <Link href="/contact" className="underline hover:text-gray-900">
                formulaire de contact
              </Link>{' '}
              (nom, email, téléphone, détails de l&apos;événement, message) sont destinées
              exclusivement à ENE SOLUTIONS afin de répondre à votre demande et, le cas échéant,
              d&apos;établir un devis.
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-5">
              <li>
                <strong>Responsable du traitement :</strong> ENE SOLUTIONS (Éric Soret)
              </li>
              <li>
                <strong>Base légale :</strong> consentement (art. 6.1.a RGPD) et/ou mesures
                précontractuelles à votre demande (art. 6.1.b)
              </li>
              <li>
                <strong>Durée de conservation :</strong> les données sont conservées le temps
                nécessaire au traitement de votre demande, puis au maximum 3 ans à compter du
                dernier contact en l&apos;absence de relation commerciale
              </li>
              <li>
                <strong>Destinataires :</strong> le responsable du site uniquement ; aucun
                transfert commercial à des tiers
              </li>
            </ul>
            <p className="mb-4">
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
              limitation, d&apos;opposition et de portabilité. Pour exercer ces droits :{' '}
              <a
                href="mailto:contact@enemariage.fr"
                className="underline hover:text-gray-900"
              >
                contact@enemariage.fr
              </a>
              . Vous pouvez également introduire une réclamation auprès de la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[var(--text-gray-800)] mb-4">
              5. Cookies
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires ni d&apos;outils d&apos;analyse
              tiers. La page contact peut afficher une carte Google Maps, susceptible de déposer
              des cookies tiers. Vous pouvez paramétrer votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[var(--text-gray-800)] mb-4">
              6. Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales ou à vos données personnelles,
              contactez-nous via la{' '}
              <Link href="/contact" className="underline hover:text-gray-900">
                page Contact
              </Link>{' '}
              ou à l&apos;adresse{' '}
              <a
                href="mailto:contact@enemariage.fr"
                className="underline hover:text-gray-900"
              >
                contact@enemariage.fr
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

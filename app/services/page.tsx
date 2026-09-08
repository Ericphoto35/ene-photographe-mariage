import type { Metadata } from "next";
import Image from "next/image";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { formulas, serviceFaqs, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="pad pb-28 pt-36 md:pt-44">
      <div className="wrap">
        <Reveal>
          <h1 className="display h1">Mes services</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            Je propose une gamme complète de services pour capturer et préserver les moments les plus
            précieux de votre mariage.
          </p>
        </Reveal>

        <div className="mt-20 space-y-20">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <Reveal y={48}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="gray-photo object-cover"
                    sizes="50vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div>
                  <p className="text-sm text-muted">{service.number}</p>
                  <h2 className="display mt-3 text-6xl md:text-7xl">{service.title}</h2>
                  <p className="mt-6 max-w-md text-sm leading-6 text-muted">{service.description}</p>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal>
          <h2 className="display h2 mt-32">Formules</h2>
        </Reveal>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">
          Tous les tarifs indiqués sont à titre indicatif et peuvent varier en fonction de vos
          besoins spécifiques, de la saison et de la localisation de votre mariage. N&apos;hésitez
          pas à me contacter pour obtenir un devis personnalisé.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          Pour les mariages en dehors de la Bretagne, des frais de déplacement peuvent s&apos;appliquer.
          Les mariages à l&apos;international sont également possibles avec des conditions spécifiques.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {formulas.map((formula, index) => (
            <Reveal key={formula.name} delay={index * 100}>
              <article className="border border-white/10 p-6">
                <h3 className="display text-5xl">{formula.name}</h3>
                <p className="mt-3 text-sm">{formula.price}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{formula.text}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  {formula.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="display h2 mt-32">Questions fréquentes</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {serviceFaqs.map((item, index) => (
            <Reveal key={item.q} delay={(index % 2) * 80}>
              <h3 className="text-sm">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24">
            <h2 className="display h2 max-w-3xl">Prêt à discuter de votre projet ?</h2>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
              Chaque mariage est unique, et je serais ravi de créer une formule personnalisée qui
              correspond parfaitement à vos besoins et à votre budget.
            </p>
            <div className="mt-8">
              <MainButton href="/contact" left="Demander un" right="devis" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

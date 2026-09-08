import type { Metadata } from "next";
import Image from "next/image";
import { MainButton } from "@/components/MainButton";
import { Reveal } from "@/components/Reveal";
import { RollingStat } from "@/components/RollingStat";
import { aboutCollage, equipment, stats, values } from "@/lib/data";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <>
      <section className="pad pb-16 pt-36 md:pt-44">
        <div className="wrap text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl text-sm tracking-[0.16em] text-muted">
              Photographe de mariage à Rennes et en Bretagne
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display h1 mt-8">L&apos;Oeil de Monsieur R</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-muted">
              Bonjour, je suis L&apos;Oeil de Monsieur R Photographies. Nous sommes une équipe de
              photographes de mariage passionnée, nous capturons des moments authentiques et
              émotionnels depuis plus de 10 ans. Notre parcours dans la photographie a commencé par
              une fascination pour la capacité des images à raconter des histoires et à préserver des
              souvenirs précieux.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex justify-center">
              <MainButton href="/contact" left="Travaillons" right="ensemble" />
            </div>
          </Reveal>
        </div>
      </section>

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
                <Image src={src} alt="" fill className="gray-photo object-cover" sizes="20vw" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pad py-24">
        <div className="wrap grid gap-12 md:grid-cols-3">
          {stats.map((stat) => (
            <RollingStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="pad py-16">
        <div className="wrap max-w-3xl">
          <Reveal>
            <h2 className="display h2">Formation & parcours</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-sm leading-7 text-muted">
              Basé à Rennes, nous voyageons à travers le pays et à l&apos;international pour
              documenter des mariages uniques. Notre philosophie est simple : capturer l&apos;essence
              de votre journée spéciale avec discrétion, sensibilité et créativité.
            </p>
            <p className="mt-6 text-sm leading-7 text-muted">
              Chaque couple a une histoire unique, et nous nous engageons à la raconter à travers nos
              photographies. Nous croyons en la création d&apos;images intemporelles qui vous
              permettront de revivre ces moments précieux pour les années à venir.
            </p>
            <p className="mt-6 text-sm leading-7 text-muted">
              Notre aventure dans la photographie de mariage a commencé comme une exploration
              passionnée, un chemin que nous avons tracé nous-mêmes, pas à pas. En tant
              qu&apos;autodidacte, chaque mariage a été une leçon précieuse, une opportunité
              d&apos;affiner notre regard et notre technique. Au fil du temps, une affinité particulière
              s&apos;est développée : celle de capturer l&apos;essence des personnes à travers le
              portrait. Ces moments intimes, ces expressions fugaces, racontent une partie unique de
              votre histoire. C&apos;est avec cette sensibilité pour le portrait que nous abordons
              chaque mariage, cherchant à immortaliser non seulement l&apos;événement, mais aussi les
              émotions profondes qui vous unissent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pad py-16">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2 max-w-3xl">Pourquoi me choisir</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <article>
                  <h3 className="display text-4xl">{value.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad py-16 pb-28">
        <div className="wrap grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <h2 className="display h2">Équipement professionnel</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-muted">
              Nous utilisons exclusivement du matériel haut de gamme pour garantir des images de la
              plus haute qualité, quelles que soient les conditions d&apos;éclairage ou les défis du
              lieu. Notre équipement est toujours redondant pour assurer une sécurité maximale — nous
              n&apos;avons jamais manqué un moment important en raison d&apos;une défaillance
              technique.
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
            <div className="mt-10">
              <MainButton href="/contact" left="Raconter" right="votre histoire" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

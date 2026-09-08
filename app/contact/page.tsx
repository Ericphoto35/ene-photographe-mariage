import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactStrip } from "@/components/ContactStrip";
import { Reveal } from "@/components/Reveal";
import { contactFaqs, site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="pad pb-16 pt-36 md:pt-44">
        <div className="wrap text-center">
          <Reveal>
            <h1 className="display h1">Contact</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-muted">
              Je serais ravi de discuter de votre vision pour votre mariage et de la façon dont je
              peux vous aider à créer des souvenirs précieux qui dureront toute une vie.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactStrip />

      <section className="pad py-20">
        <div className="wrap grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div>
              <p className="text-sm text-muted">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block">
                {site.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="text-sm text-muted">Téléphone</p>
              <a href={site.phoneHref} className="mt-2 block">
                {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <p className="text-sm text-muted">Basé à</p>
              <p className="mt-2">{site.city}</p>
              <p className="mt-2 text-muted">{site.area}</p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div>
              <p className="text-sm text-muted">Horaires de réponse</p>
              <p className="mt-2 text-muted">{site.responseTime}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad pb-20">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2 mb-10">Écrivez-moi</h2>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pad pb-28">
        <div className="wrap">
          <Reveal>
            <h2 className="display h2 mb-12">Questions fréquentes</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2">
            {contactFaqs.map((item, index) => (
              <Reveal key={item.q} delay={(index % 2) * 80}>
                <h3 className="text-sm">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

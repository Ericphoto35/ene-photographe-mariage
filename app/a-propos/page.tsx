import type { Metadata } from "next";
import AboutPage from "../about/page";

export const metadata: Metadata = {
  title: "À Propos - Photographe Mariage Rennes",
  description:
    "Découvrez l'histoire et l'approche de L'Oeil de Monsieur R, photographe de mariage professionnel basé à Rennes, intervenant en Bretagne et partout en France.",
  alternates: {
    canonical: "https://www.loeil-de-monsieur-r.fr/a-propos",
  },
  openGraph: {
    title: "À Propos - Photographe Mariage Rennes | L'Oeil de Monsieur R",
    description:
      "Photographe de mariage passionné basé à Rennes, 10+ ans d'expérience en Bretagne et en France.",
    url: "https://www.loeil-de-monsieur-r.fr/a-propos",
    locale: "fr_FR",
    type: "website",
  },
};

export default AboutPage;

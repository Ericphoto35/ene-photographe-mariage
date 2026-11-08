import type { Metadata } from "next";
import ProjectsPage from "../projects/page";

export const metadata: Metadata = {
  title: "Galerie Photos Mariage Bretagne",
  description:
    "Découvrez ma galerie de photographies de mariage en Bretagne : Rennes, Saint-Malo, Vannes, Cancale, Nantes et toute la région. Des images authentiques et émotionnelles.",
  alternates: {
    canonical: "https://www.loeil-de-monsieur-r.fr/galerie",
  },
  openGraph: {
    title: "Galerie Photos Mariage Bretagne | L'Oeil de Monsieur R",
    description:
      "Portfolio photographe mariage Bretagne — Rennes, Saint-Malo, Vannes, Cancale et toute la France.",
    url: "https://www.loeil-de-monsieur-r.fr/galerie",
    locale: "fr_FR",
    type: "website",
  },
};

export default ProjectsPage;

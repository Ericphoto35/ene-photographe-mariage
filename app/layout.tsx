import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { SchemaOrg } from "@/components/SchemaOrg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loeil-de-monsieur-r.fr"),
  title: {
    default: "L'Oeil de Monsieur R - Photographe de Mariage à Rennes | Bretagne",
    template: "%s | L'Oeil de Monsieur R",
  },
  description:
    "Photographe de mariage professionnel basé à Rennes, L'Oeil de Monsieur R capture avec authenticité et élégance vos moments les plus précieux en Bretagne et partout en France.",
  alternates: {
    canonical: "https://www.loeil-de-monsieur-r.fr",
  },
  openGraph: {
    title: "L'Oeil de Monsieur R - Photographe de Mariage à Rennes | Bretagne",
    description:
      "Photographe de mariage professionnel basé à Rennes, intervenant en Bretagne et partout en France.",
    url: "https://www.loeil-de-monsieur-r.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full bg-ink text-paper">
        <Providers>
          <main>{children}</main>
          <Footer />
          <SchemaOrg />
        </Providers>
      </body>
    </html>
  );
}

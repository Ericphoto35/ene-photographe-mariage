import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.loeil-de-monsieur-r.fr'),
  title: "L'Oeil de Monsieur R - Photographe de Mariage à Rennes | Bretagne",
  description: "Photographe de mariage professionnel basé à Rennes, L'Oeil de Monsieur R capture avec authenticité et élégance vos moments les plus précieux en Bretagne et partout en France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bodoniModa.variable} ${jost.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <SchemaOrg />
      </body>
    </html>
  );
}

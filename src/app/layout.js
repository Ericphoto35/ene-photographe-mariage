import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "L'Oeil de Monsieur R - Photographe de Mariage à Rennes | Bretagne",
  description: "Photographe de mariage professionnel basé à Rennes, L'Oeil de Monsieur R capture avec authenticité et élégance vos moments les plus précieux en Bretagne et partout en France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <SchemaOrg />
      </body>
    </html>
  );
}

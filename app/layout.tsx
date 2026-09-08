import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { faviconSrc } from "@/lib/cdn";
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
  title: {
    default: "Photographe de Mariage Rennes et Bretagne | L'Oeil de Monsieur R",
    template: "%s | L'Oeil de Monsieur R",
  },
  description:
    "Photographe de mariage à Rennes et en Bretagne. Style documentaire discret et portraits élégants pour capturer vos moments précieux.",
  icons: {
    icon: faviconSrc,
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
        </Providers>
      </body>
    </html>
  );
}

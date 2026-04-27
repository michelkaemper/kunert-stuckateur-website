import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunert Stuckateur- und Handwerksbetrieb GmbH | Wetter/Volmarstein",
  description:
    "Professionelle Stuckateur- und Handwerksarbeiten: WDVS, Innen- und Außenputze, Lehmputze, dekorative Spachteltechniken, Natursteinarbeiten, Trockenbau, Fliesen und Kernlochbohrungen in Wetter/Volmarstein und Umgebung.",
  keywords: [
    "Stuckateur",
    "Handwerk",
    "WDVS",
    "Wärmedämmung",
    "Putz",
    "Trockenbau",
    "Naturstein",
    "Fliesen",
    "Kernlochbohrung",
    "Wetter",
    "Volmarstein",
    "Hagen",
    "Ennepe-Ruhr",
  ],
  openGraph: {
    title: "Kunert Stuckateur- und Handwerksbetrieb GmbH",
    description:
      "WDVS · Putze · Naturstein · Trockenbau · Fliesen · Spachtel · Kernlochbohrungen",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kunert Stuckateur- und Handwerksbetrieb GmbH",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arndtstr. 10",
    postalCode: "58300",
    addressLocality: "Wetter/Volmarstein",
    addressCountry: "DE",
  },
  areaServed: "Ennepe-Ruhr-Kreis",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WDVS – Wärmedämmverbundsysteme" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Innen- und Außenputze, Lehmputze" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dekorative Spachteltechniken und Lasuren" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Natursteinarbeiten" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trockenbauarbeiten, Brandschutz" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fliesen- und Plattenverlegung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kernlochbohrungen bis 230mm" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${barlowCondensed.variable} ${barlow.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}

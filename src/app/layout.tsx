import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

import { COMPANY } from "@/lib/constants";

const BASE_URL = COMPANY.domain;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Manne Technologies | Global Technology Consulting & Product Engineering",
    template: "%s · Manne Technologies",
  },
  description:
    COMPANY.description,
  keywords: [
    "Manne Technologies",
    "technology consulting",
    "IT services",
    "software development",
    "SAP solutions",
    "SAP consulting",
    "digital transformation",
    "cloud services",
    "cloud migration",
    "AI",
    "artificial intelligence",
    "machine learning",
    "automation",
    "cybersecurity",
    "managed services",
    "product development",
    "IT staffing",
    "enterprise technology",
    "Austin TX",
    "global IT consulting",
    "Fortune 500 technology partner",
  ],
  authors: [{ name: COMPANY.legal }],
  creator: COMPANY.legal,
  publisher: COMPANY.legal,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: COMPANY.name,
    title: "Manne Technologies | Global Technology Consulting & Product Engineering",
    description:
      COMPANY.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manne Technologies | Global Technology Consulting & Product Engineering",
    description:
      COMPANY.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: COMPANY.legal,
      url: BASE_URL,
      description: COMPANY.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5900 Balcones Drive # 31015",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78731",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phoneHref,
        contactType: "customer service",
        email: COMPANY.email,
        availableLanguage: "English",
      },
      foundingDate: COMPANY.founded,
      numberOfEmployees: COMPANY.employees,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: COMPANY.name,
      url: BASE_URL,
      telephone: COMPANY.phoneHref,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5900 Balcones Drive # 31015",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78731",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: COMPANY.mapCoords.lat,
        longitude: COMPANY.mapCoords.lng,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$$",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

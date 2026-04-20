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

const BASE_URL = "https://www.hansolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Han Solutions | Empowering Your Businesses",
    template: "%s · Han Solutions",
  },
  description:
    "Han Solutions is a forward-thinking technology partner delivering innovative IT solutions, elite staffing, and digital transformation from Austin, Texas. Cloud, AI, cybersecurity & more.",
  keywords: [
    "Han Solutions",
    "software development",
    "IT staffing",
    "cloud computing",
    "AI",
    "machine learning",
    "data analytics",
    "cyber security",
    "IT consulting",
    "Austin TX",
    "managed IT services",
    "DevOps",
    "enterprise solutions",
    "digital transformation",
  ],
  authors: [{ name: "HAN Solutions LLC" }],
  creator: "HAN Solutions LLC",
  publisher: "HAN Solutions LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Han Solutions",
    title: "Han Solutions | Empowering Your Businesses",
    description:
      "A technology partner for ambitious businesses — building software, placing talent, driving transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Han Solutions | Empowering Your Businesses",
    description:
      "A technology partner for ambitious businesses — building software, placing talent, driving transformation.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "HAN Solutions LLC",
      url: BASE_URL,
      description:
        "HAN Solutions LLC delivers innovative IT solutions, elite staffing, and digital transformation services.",
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
        telephone: "+1-214-204-8813",
        contactType: "customer service",
        email: "hr@hanitsolutions.com",
        availableLanguage: "English",
      },
      foundingDate: "2021",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "HAN Solutions LLC",
      url: BASE_URL,
      telephone: "+1-214-204-8813",
      email: "hr@hanitsolutions.com",
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
        latitude: 30.3496,
        longitude: -97.7482,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
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
      <body className="bg-cream text-charcoal antialiased">
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

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import PageTransitions from "./components/PageTransitions";
import { BASE_PATH, SITE_URL, EMAIL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Instrument_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = SITE_URL;

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "wraythx — Visual Designer & Motion Artist",
    template: "%s · wraythx",
  },
  description:
    "Portfolio of Sandeep. C — a graphic and visual designer crafting brand identities, motion graphics, and bold visual systems that feel clear, distinctive, and made to last.",
  authors: [{ name: "Sandeep. C", url: siteUrl }],
  creator: "Sandeep. C",
  publisher: "wraythx",
  formatDetection: { telephone: false },
  alternates: { canonical: `${siteUrl}${BASE_PATH}/` },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${BASE_PATH}/`,
    siteName: "wraythx",
    title: "wraythx — Visual Designer & Motion Artist",
    description:
      "Brand identities, motion graphics, and bold visual systems by Sandeep. C.",
      images: [
        {
          url: `${siteUrl}${BASE_PATH}/og.png`,
          width: 1200,
          height: 630,
          alt: "wraythx — Sandeep. C, visual designer: branding, motion, and graphic work",
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wraythx — Visual Designer & Motion Artist",
    description:
      "Brand identities, motion graphics, and bold visual systems by Sandeep. C.",
    images: [`${siteUrl}${BASE_PATH}/og.png`],
  },
  icons: {
    icon: `${BASE_PATH}/icon.svg`,
    apple: {
      url: `${BASE_PATH}/icons/icon-180.png`,
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: `${BASE_PATH}/manifest.json`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "wraythx",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}${BASE_PATH}/#person`,
      name: "Sandeep. C",
      alternateName: "wraythx",
      jobTitle: "Visual Designer",
      url: `${siteUrl}${BASE_PATH}/`,
      image: `${siteUrl}${BASE_PATH}/og.png`,
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Nepal",
      },
      sameAs: [
        "https://www.behance.net/daboistudio",
        "https://www.instagram.com/wraythx/",
      ],
      email: `mailto:${EMAIL}`,
      knowsAbout: [
        "Branding",
        "Visual Identity",
        "Motion Graphics",
        "Video Editing",
        "Graphic Design",
        "Social Media Design",
        "Packaging Design",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}${BASE_PATH}/#service`,
      name: "wraythx",
      url: `${siteUrl}${BASE_PATH}/`,
      image: `${siteUrl}${BASE_PATH}/og.png`,
      priceRange: "$$",
      email: `mailto:${EMAIL}`,
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Nepal",
      },
      areaServed: [
        { "@type": "Country", name: "Nepal" },
        { "@type": "Place", name: "Global" },
      ],
      founder: { "@id": `${siteUrl}${BASE_PATH}/#person` },
      sameAs: [
        "https://www.behance.net/daboistudio",
        "https://www.instagram.com/wraythx/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Design Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Branding & Identity" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Motion Graphics" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Video Editing" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Graphic Design" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Social Media" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Packaging Design" },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-900">
        <link rel="preconnect" href="https://www.behance.net" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only left-4 top-4 z-[100] rounded-none bg-zinc-900 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:block"
        >
          Skip to content
        </a>
        <PageTransitions />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
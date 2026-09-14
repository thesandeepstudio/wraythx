import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransitions from "./components/PageTransitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thesandeepstudio.github.io";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${basePath}/`,
    siteName: "wraythx",
    title: "wraythx — Visual Designer & Motion Artist",
    description:
      "Brand identities, motion graphics, and bold visual systems by Sandeep. C.",
    images: [
      {
        url: `${siteUrl}${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: "wraythx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wraythx — Visual Designer & Motion Artist",
    description:
      "Brand identities, motion graphics, and bold visual systems by Sandeep. C.",
    images: [`${siteUrl}${basePath}/og.png`],
  },
  icons: {
    icon: `${basePath}/icon.svg`,
    apple: {
      url: `${basePath}/icons/icon-180.png`,
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: `${basePath}/manifest.json`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "wraythx",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-900">
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
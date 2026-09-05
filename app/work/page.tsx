import type { Metadata } from "next";
import ClickSpark from "../ClickSpark";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import WorkFilters from "../components/WorkFilters";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by wraithx — branding, motion graphics, video editing, graphic design, and social media work.",
};

const projects = [
  {
    title: "Motion Design for Lakes & Hill Realty",
    category: "Motion",
    year: "2025",
    tools: "Motion · Brand Film",
    summary:
      "Motion language and brand film for a lifestyle real-estate brand.",
    image: "/assets/project-thumbnails/Lakes & Hill Realty.jpg",
    link: "https://www.behance.net/gallery/251462951/Motion-Design-for-Lakes-Hill-Realty",
    cover:
      "h-[460px] bg-[linear-gradient(160deg,_#2dd4bf_0%,_#0f766e_50%,_#0c4a3e_100%)]",
    badge: "Featured",
  },
  {
    title: "PIPE420 | Brand Guidelines",
    category: "Branding",
    year: "2025",
    tools: "Logo · Guidelines · Identity",
    summary: "Logo system and full brand guidelines for PIPE420.",
    image: "/assets/project-thumbnails/Pipe420.png",
    link: "https://www.behance.net/gallery/246128103/PIPE420-Brand-Guidlines",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#fbbf24_0%,_#92400e_55%,_#292524_100%)]",
    badge: "",
  },
  {
    title: "Lamour Fits | Tee Designs",
    category: "Graphic",
    year: "2025",
    tools: "Print · Illustration · Apparel",
    summary: "Illustrated tee artwork for Lamour Fits.",
    image: "/assets/project-thumbnails/Lamour fits.jpg",
    link: "https://www.behance.net/gallery/241271361/Graphic-Tee-Designs",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#ef4444_0%,_#7f1d1d_55%,_#1c1917_100%)]",
    badge: "",
  },
  {
    title: "NCS Edits — Music Video Series",
    category: "Motion",
    year: "2025",
    tools: "Editing · Sync · Polish",
    summary: "Rhythmic music-video edits for the NCS series.",
    image: "/assets/project-thumbnails/NCS.webp",
    link: "https://www.behance.net/gallery/240937921/Video-Editing-NCS",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#22d3ee_0%,_#4f46e5_55%,_#172554_100%)]",
    badge: "",
  },
  {
    title: "Hotbox | Buddha Design",
    category: "Graphic",
    year: "2025",
    tools: "Art · Print · Psychedelic",
    summary: "Psychedelic Buddha artwork for Hotbox.",
    image: "/assets/project-thumbnails/hotbox.jpg",
    link: "https://www.behance.net/gallery/236697445/HotBox-Buddha-Design",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#fb923c_0%,_#b45309_55%,_#431407_100%)]",
    badge: "",
  },
  {
    title: "Drool | Social Media Designs",
    category: "Graphic",
    year: "2025",
    tools: "Social · Content · Templates",
    summary: "Social content system and templates for Drool.",
    image: "/assets/project-thumbnails/drool social media.jpg",
    link: "https://www.behance.net/gallery/218374849/Drool-Social-Media",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#f472b6_0%,_#9d174d_55%,_#4a044e_100%)]",
    badge: "",
  },
  {
    title: "Plutus Paradox — Clothing Brand",
    category: "Branding",
    year: "2025",
    tools: "Brand · Apparel · Identity",
    summary: "Full brand identity for the Plutus Paradox clothing label.",
    image: "/assets/project-thumbnails/Plutus Paradox.jpg",
    link: "https://www.behance.net/gallery/202694555/PLUTUS-PARADOX",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#a3e635_0%,_#4d7c0f_55%,_#1a2e05_100%)]",
    badge: "",
  },
  {
    title: "Drool Nepal | Branding",
    category: "Branding",
    year: "2025",
    tools: "Identity · Logo · Systems",
    summary: "Logo and identity system for Drool Nepal.",
    image: "/assets/project-thumbnails/Drool branding.png",
    link: "https://www.behance.net/gallery/212833621/Drool-Nepal-Branding",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#34d399_0%,_#065f46_55%,_#022c22_100%)]",
    badge: "",
  },
  {
    title: "Chimley Orchards — Packaging Design",
    category: "Packaging",
    year: "2025",
    tools: "Label · Print · Packaging",
    summary: "Premium label and packaging design for Chimley Orchards.",
    image: "/assets/project-thumbnails/Apple.png",
    link: "https://www.behance.net/gallery/212049903/Chimley-Orchards-Packaging-design",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#4ade80_0%,_#166534_55%,_#052e16_100%)]",
    badge: "",
  },
  {
    title: "SONITE | Tech Logo Design",
    category: "Branding",
    year: "2025",
    tools: "Logo · Mark · Identity",
    summary: "Logo and mark design for the tech brand SONITE.",
    image: "/assets/project-thumbnails/SONITE.png",
    link: "https://www.behance.net/gallery/221230439/SONITE-Tech-Logo-Design",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#38bdf8_0%,_#0369a1_55%,_#082f49_100%)]",
    badge: "",
  },
  {
    title: "Urban Crust | Branding",
    category: "Branding",
    year: "2025",
    tools: "Brand · Identity · Logo",
    summary: "Brand and identity design for Urban Crust.",
    image: "/assets/project-thumbnails/urban crust.jpg",
    link: "https://www.behance.net/gallery/193035141/urban-crust",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#ea580c_0%,_#7c2d12_55%,_#1c1917_100%)]",
    badge: "",
  },
  {
    title: "Posters Collection | Poster Design",
    category: "Graphic",
    year: "2025",
    tools: "Poster · Print · Typography",
    summary: "A curated series of typographic and editorial posters.",
    image: "/assets/project-thumbnails/posters.jpg",
    link: "https://www.behance.net/gallery/197216091/Posters-collection-Poster-design",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#d946ef_0%,_#701a75_55%,_#3b0764_100%)]",
    badge: "",
  },
  {
    title: "Pizza | Social Media Ads Design",
    category: "Graphic",
    year: "2025",
    tools: "Ads · Social · Content",
    summary: "Appetizing ad creatives for a pizza brand&apos;s social feeds.",
    image: "/assets/project-thumbnails/pizza.png",
    link: "https://www.behance.net/gallery/177895085/Pizza-Social-Media-Ads-Design",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#f97316_0%,_#b45309_55%,_#451a03_100%)]",
    badge: "",
  },
  {
    title: "Logofolio P-001",
    category: "Branding",
    year: "2025",
    tools: "Logo · Mark · Series",
    summary: "Volume one of an ongoing logo exploration series.",
    image: "/assets/project-thumbnails/logofolio.jpg",
    link: "https://www.behance.net/gallery/189438129/Logofolio-P-001",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#3b82f6_0%,_#1e3a8a_55%,_#0b1120_100%)]",
    badge: "",
  },
  {
    title: "Plutus Paradox | Tee Design",
    category: "Graphic",
    year: "2025",
    tools: "Print · Apparel · Graphics",
    summary: "Tee print artwork for Plutus Paradox.",
    image: "/assets/project-thumbnails/PLUTUS Paradox logo.jpg",
    link: "https://www.behance.net/gallery/190002351/Tee-Design",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#facc15_0%,_#a16207_55%,_#292524_100%)]",
    badge: "",
  },
  {
    title: "The Game? | Motion Graphic",
    category: "Motion",
    year: "2025",
    tools: "Motion · Animation · Design",
    summary: "A bold motion graphic with a playful punch.",
    image: "/assets/project-thumbnails/the game.png",
    link: "https://www.behance.net/gallery/179208269/THE-GAME",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#a855f7_0%,_#6d28d9_55%,_#1e1b4b_100%)]",
    badge: "",
  },
  {
    title: "Black Friday | Motion Graphic",
    category: "Motion",
    year: "2025",
    tools: "Motion · Ads · Promo",
    summary: "High-impact promo motion for Black Friday.",
    link: "https://www.behance.net/gallery/179028623/Black-Friday",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#0f172a_0%,_#450a0a_55%,_#000000_100%)]",
    badge: "",
  },
  {
    title: "Jawaaf Consulting Academy — Social Media Design",
    category: "Graphic",
    year: "2025",
    tools: "Social · Content · Templates",
    summary: "Social design system for Jawaaf Consulting Academy.",
    image: "/assets/project-thumbnails/Jawaaf.jpg",
    link: "https://www.behance.net/gallery/240885695/Jawaaf-Consulting-Academy-Social-Media-Design",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#6366f1_0%,_#312e81_55%,_#0f172a_100%)]",
    badge: "",
  },
];

export default function WorkPage() {
  return (
    <ClickSpark
      sparkColor="#059669"
      sparkSize={8}
      sparkRadius={12}
      sparkCount={4}
      duration={260}
      easing="ease-out"
      extraScale={1}
    >
      <main className="min-h-screen bg-white text-zinc-900">
        <section className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1280px] py-7">
            <SiteNav />

            <div className="py-16 md:py-20">
              <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>Portfolio</span>
                <span>2020 — Present</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <WorkFilters projects={projects} />
        </section>

        <section
          id="about"
          className="border-t border-zinc-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  About
                </p>
                <p className="mt-8 text-xl font-medium uppercase leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-2xl">
                  I&apos;m a graphic and visual designer focused on turning bold
                  ideas into thoughtful, expressive experiences. I shape
                  identities, digital interfaces, and visual systems that feel
                  clear, distinctive, and made to last.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Contact
                </p>
                <p className="mt-6 text-2xl font-medium tracking-[-0.03em] text-zinc-900 md:text-3xl">
                  Let&apos;s make something{" "}
                  <span className="text-emerald-600 italic">lasting</span>.
                </p>
                <a
                  href="mailto:wraithx@gmail.com"
                  className="mt-6 inline-flex w-fit rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
                >
                  wraithx@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}
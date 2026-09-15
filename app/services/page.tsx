import type { Metadata } from "next";
import ClickSpark from "../ClickSpark";
import ScrollReveal from "../ScrollReveal";
import ScrollFade from "../components/ScrollFade";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ContactCTA from "../components/ContactCTA";
import CTAButton from "../components/CTAButton";
import { SPARK, EMAIL, mailto as buildMailto } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, motion graphics, video editing, graphic design, social media, and packaging services by wraythx.",
};

const services = [
  {
    title: "Branding & Identity",
    text: "Logos, guidelines, and full identity systems that make your brand unmistakable.",
    detail: "Logo · Guidelines · Identity",
    price: "Starting at $799",
  },
  {
    title: "Motion Graphics",
    text: "Motion systems, promotions, and animated identities that bring still designs to life.",
    detail: "Motion · Ads · Promo",
    price: "Starting at $599",
  },
  {
    title: "Video Editing",
    text: "Rhythmic, polished edits for music videos and content that hold attention.",
    detail: "Editing · Sync · Polish",
    price: "Starting at $299",
  },
  {
    title: "Graphic Design",
    text: "Tees, posters, and print that carry attitude and communicate clearly.",
    detail: "Poster · Print · Illustration",
    price: "Starting at $199",
  },
  {
    title: "Social Media",
    text: "Weekly content systems, ad creatives, and templates built to convert.",
    detail: "Social · Content · Templates",
    price: "Starting at $399/mo",
  },
  {
    title: "Packaging Design",
    text: "Label and print design that feels premium from shelf to hand.",
    detail: "Label · Print · Packaging",
    price: "Starting at $499",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We map the problem, audience, and goals so the design has a clear direction.",
  },
  {
    step: "02",
    title: "Design",
    text: "Concepts are explored, refined, and tested across the mediums that matter.",
  },
  {
    step: "03",
    title: "Deliver",
    text: "Final assets are handed off clean and documented so they scale beyond day one.",
  },
];

export default function ServicesPage() {
  return (
    <ClickSpark {...SPARK}>
      <main className="min-h-screen bg-white text-zinc-900">
        <SiteNav />
        <nav
          aria-label="Services sections"
          className="sticky top-[57px] z-30 border-b border-zinc-200 bg-white/90 backdrop-blur"
        >
          <div className="mx-auto flex max-w-[1280px] gap-6 overflow-x-auto px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-600 lg:px-8">
            <a href="#list" className="shrink-0 transition hover:text-zinc-900">
              Services
            </a>
            <a href="#process" className="shrink-0 transition hover:text-zinc-900">
              Process
            </a>
            <a href="#niche" className="shrink-0 transition hover:text-zinc-900">
              Niche
            </a>
            <a href="#contact" className="shrink-0 transition hover:text-zinc-900">
              Contact
            </a>
          </div>
        </nav>
        <section className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1280px]">
            <div className="px-6 py-16 md:px-0 md:py-20">
              <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-zinc-600">
                <span>Services</span>
                <span>Brand · Visual · Motion</span>
              </div>

              <div className="mt-10 max-w-3xl">
                <h1 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] text-zinc-900 md:text-6xl lg:text-7xl pb-1">
                  Design &amp; motion
                  <br />
                  <span className="text-brand-700 font-display italic normal-case">
                    for modern brands
                  </span>
                </h1>
                <ScrollReveal
                  baseRotation={0}
                  enableBlur
                  blurStrength={6}
                  textClassName="mt-6 text-lg leading-8 text-zinc-600"
                  highlightedWords={["clear", "distinctive", "last"]}
                >
                  A focused set of services for building brands that are clear, distinctive, and made to last.
                </ScrollReveal>
            </div>
          </div>
          </div>
        </section>

        <section id="list" className="mx-auto max-w-[1280px] scroll-mt-32 px-6 pb-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollFade key={service.title} className="h-full">
                <div className="group flex h-full flex-col justify-between border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-300">
                  <div>
                    <p className="text-xs font-normal tabular-nums tracking-[0.2em] text-zinc-600">
                      0{index + 1}
                    </p>
                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600">
                      {service.text}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-zinc-200 pt-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-brand-700">
                      {service.detail}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-none border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
                        {service.price}
                      </span>
                      <a
                        href={buildMailto(`Enquiry: ${service.title} — ${service.price}`)}
                        aria-label={`Enquire about ${service.title}`}
                        className="inline-flex items-center text-xs font-medium tracking-wide text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>

          <div className="mt-24 scroll-mt-24" id="process">
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                Process
              </p>
            </ScrollFade>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <ScrollFade key={item.step}>
                  <div className="border-t border-zinc-200 pt-8">
                    <p className="text-sm font-medium tabular-nums text-brand-700">
                      {item.step}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600">
                      {item.text}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>

          <div className="mt-24 scroll-mt-24" id="niche">
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                Niche — apparel &amp; print
              </p>
              <h2 className="mt-6 max-w-xl text-balance text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-4xl">
                Print that sells on fabric
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600">
                Tee artwork, label systems, and campaign visuals for clothing
                brands — designed print-ready, proven in stores and feeds.
              </p>
            </ScrollFade>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Plutus Paradox",
                  detail: "Full brand identity + tee prints",
                  href: "https://www.behance.net/gallery/202694555/PLUTUS-PARADOX",
                },
                {
                  name: "LamourFits",
                  detail: "Illustrated tee artwork",
                  href: "https://www.behance.net/gallery/241271361/Graphic-Tee-Designs",
                },
                {
                  name: "HotBox",
                  detail: "Psychedelic Buddha artwork",
                  href: "https://www.behance.net/gallery/236697445/HotBox-Buddha-Design",
                },
              ].map((proof) => (
                <ScrollFade key={proof.name} className="h-full">
                  <a
                    href={proof.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${proof.name} — view on Behance`}
                    className="block h-full border border-zinc-200 bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-50/50"
                  >
                    <p className="text-sm font-semibold tracking-[-0.01em] text-zinc-900">
                      {proof.name} ↗
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">{proof.detail}</p>
                  </a>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1280px] scroll-mt-32 px-6 pb-24 lg:px-8">
          <ContactCTA
            title="Give your brand a standout look."
            actions={
              <CTAButton href={`mailto:${EMAIL}`}>{EMAIL}</CTAButton>
            }
          />
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}
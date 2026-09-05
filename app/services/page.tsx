import type { Metadata } from "next";
import Link from "next/link";
import ClickSpark from "../ClickSpark";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

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
  },
  {
    title: "Motion Graphics",
    text: "Motion systems, promotions, and animated identities that bring still designs to life.",
    detail: "Motion · Ads · Promo",
  },
  {
    title: "Video Editing",
    text: "Rhythmic, polished edits for music videos and content that hold attention.",
    detail: "Editing · Sync · Polish",
  },
  {
    title: "Graphic Design",
    text: "Tees, posters, and print that carry attitude and communicate clearly.",
    detail: "Poster · Print · Illustration",
  },
  {
    title: "Social Media",
    text: "Weekly content systems, ad creatives, and templates built to convert.",
    detail: "Social · Content · Templates",
  },
  {
    title: "Packaging Design",
    text: "Label and print design that feels premium from shelf to hand.",
    detail: "Label · Print · Packaging",
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
                <span>Services</span>
                <span>Brand · Visual · Motion</span>
              </div>

              <div className="mt-10 max-w-3xl">
                <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-6xl lg:text-7xl">
                  Design &amp; motion
                  <br />
                  <span className="text-emerald-600 italic normal-case">
                    for modern brands
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  A focused set of services for building brands that are clear,
                  distinctive, and made to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-300"
              >
                <div>
                  <p className="text-xs font-normal tabular-nums tracking-[0.2em] text-zinc-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {service.text}
                  </p>
                </div>
                <p className="mt-8 border-t border-zinc-200 pt-4 text-xs uppercase tracking-[0.16em] text-emerald-600">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Process
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="border-t border-zinc-200 pt-8">
                  <p className="text-sm font-medium tabular-nums text-emerald-600">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="border border-zinc-200 bg-[linear-gradient(135deg,_rgba(24,24,27,0.03),_rgba(255,255,255,0.85),_rgba(24,24,27,0.04))] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
                Need a standout look for your brand?
              </h2>
              <Link
                href="mailto:wraythx@gmail.com"
                className="inline-flex w-fit rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                wraythx@gmail.com
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}
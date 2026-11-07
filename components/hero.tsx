import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroStats, site } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="hero-rule left-[27%]" />
        <div className="hero-rule left-[52%]" />
        <div className="hero-rule left-[77%]" />
      </div>

      <div className="container-editorial relative z-10 flex flex-1 items-center pb-12 pt-10 lg:pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <div className="hero-enter" style={{ "--enter-delay": "40ms" } as React.CSSProperties}>
              <p className="eyebrow">Portfolio 2026 · India</p>
            </div>

            <h1
              className="hero-name hero-enter mt-6"
              style={{ "--enter-delay": "110ms" } as React.CSSProperties}
            >
              Shubhankar
              <br />
              <span className="last">Chavan</span>
            </h1>

            <div
              className="hero-enter mt-7 max-w-2xl border-l border-accent pl-5 sm:pl-6"
              style={{ "--enter-delay": "200ms" } as React.CSSProperties}
            >
              <p className="hero-headline">
                Where technology meets media, business &amp; storytelling.
              </p>
            </div>

            <p
              className="hero-intro hero-enter mt-6 lg:max-w-[36rem]"
              style={{ "--enter-delay": "280ms" } as React.CSSProperties}
            >
              An engineer by education, a communicator by experience, and an
              entrepreneur by instinct. I work where technology, media,
              journalism and business meet.
            </p>

            <div
              className="hero-enter mt-8 flex flex-wrap items-center gap-3"
              style={{ "--enter-delay": "360ms" } as React.CSSProperties}
            >
              <a href="#journey" className="btn btn-primary">
                Explore the journey
                <ArrowDown size={13} strokeWidth={1.6} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in touch
                <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </div>

            <div
              className="hero-enter mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ "--enter-delay": "430ms" } as React.CSSProperties}
            >
              {[
                { label: "LinkedIn", href: site.linkedin },
                { label: "GitHub", href: site.github },
                { label: "NotScripted.in", href: site.notScripted },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.13em] text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    size={10}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6 xl:pl-10">
            <div className="mx-auto w-full max-w-[25rem] lg:ml-auto lg:mr-0">
              <figure
                className="hero-enter"
                style={{ "--enter-delay": "300ms" } as React.CSSProperties}
              >
                <div className="portrait-frame">
                  <Image
                    src={`${basePath}/assets/profile.jpg`}
                    alt="Portrait of Shubhankar Chavan"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 80vw, 34vw"
                    className="portrait-image"
                  />
                  <p className="portrait-stamp">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-paper-light"
                      aria-hidden="true"
                    />
                    Open to conversations
                  </p>
                </div>
                <figcaption className="portrait-caption">
                  <span className="font-serif text-[0.95rem] tracking-[-0.01em]">
                    Shubhankar Chavan
                  </span>
                  <span className="meta-label">{site.location}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ledger relative z-10">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`hero-ledger-item px-4 first:pl-0 md:px-7 ${
                index < 2 ? "border-b md:border-b-0" : ""
              } ${index === 1 ? "pr-0 md:pr-7" : ""}`}
            >
              <p className="hero-stat-value">{stat.value}</p>
              <p className="meta-label mt-2 !text-ink">{stat.label}</p>
              <p className="mt-1 text-[0.68rem] leading-snug text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

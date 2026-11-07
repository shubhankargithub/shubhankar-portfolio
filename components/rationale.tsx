import { ArrowDown, ArrowUpRight } from "lucide-react";
import { rationalePillars, sectionIndex } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function Rationale() {
  return (
    <section
      id="writing"
      className="dark-band on-dark section-shell"
      aria-labelledby="why-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.rationale}
          label="The case"
          title={
            <>
              Why technology <em>journalism?</em>
            </>
          }
          description="Because the most consequential technology stories are business stories. They need someone who can read the system, the message and the P&L — and then explain all three."
          id="why-title"
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            data-reveal
          >
            <p className="font-serif text-[clamp(1.65rem,2.6vw,2.35rem)] leading-[1.16] tracking-[-0.028em] text-cream">
              The interesting work is not choosing between technology and
              storytelling. It is the{" "}
              <em className="text-[#e7a093]">translation.</em>
            </p>

            <ul className="mt-7 space-y-2.5 border-l border-cream/20 pl-5">
              {[
                "Cybersecurity taught me how systems fail.",
                "PR taught me how messages travel.",
                "Business taught me who pays for it.",
                "NotScripted taught me how to publish it.",
              ].map((line) => (
                <li
                  key={line}
                  className="relative text-[0.82rem] leading-[1.65] text-cream-muted"
                >
                  <span
                    className="absolute -left-[1.35rem] top-[0.65em] h-px w-2 bg-[#d9503f]"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {rationalePillars.map((pillar, index) => (
              <div
                key={pillar.index}
                className="rationale-card"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="rationale-number">{pillar.index}</span>
                <h3 className="mt-3 font-serif text-[1.32rem] leading-tight tracking-[-0.015em] text-cream">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.84rem] leading-[1.75] text-cream-muted">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-cream/20 pt-8 lg:grid-cols-12 lg:items-start">
          <p className="meta-label lg:col-span-2 !text-cream-muted">The throughline</p>
          <p className="font-serif text-[1.2rem] leading-[1.55] tracking-[-0.012em] text-cream/90 lg:col-span-7">
            Technology coverage often splits into two languages: the technical and
            the commercial. I want to work in the space between — accurate enough
            for engineers, clear enough for the people running the business. That
            is the journalism I am practising at NotScripted.in, and the
            conversation I want to have with editors covering the business of
            travel.
          </p>
          <div className="flex flex-col gap-3 lg:col-span-3 lg:items-end">
            <a href="#beats" className="btn btn-outline">
              Editorial beats
              <ArrowDown size={13} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a
              href="#ideas"
              className="group inline-flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.13em] text-cream-muted transition-colors hover:text-cream"
            >
              Read the story proposals
              <ArrowUpRight
                size={11}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { aboutFacts, aboutParagraphs, pullQuote, sectionIndex, site } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function About() {
  return (
    <section id="about" className="section-shell hairline-top" aria-labelledby="about-title">
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.about}
          label="Profile"
          title={
            <>
              A career built across <em>disciplines.</em>
            </>
          }
          description="Technology, media, public relations, entrepreneurship and journalism — not as separate chapters, but as one way of thinking."
          id="about-title"
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <aside
            className="lg:col-span-4 xl:col-span-3"
            data-reveal
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
          >
            <div className="fact-list">
              {aboutFacts.map((fact) => (
                <div key={fact.label} className="fact-row">
                  <p className="meta-label !text-muted">{fact.label}</p>
                  <p className="text-[0.83rem] leading-snug text-ink">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-rule bg-paper-light/60 p-5">
              <p className="eyebrow">Currently</p>
              <p className="mt-3 font-serif text-[1.15rem] leading-[1.3] tracking-[-0.015em]">
                Building an independent newsroom at NotScripted.in.
              </p>
              <a
                href={site.notScripted}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mt-4 font-mono text-[0.58rem] uppercase tracking-[0.12em]"
              >
                Visit the publication
                <ArrowUpRight size={11} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </div>
          </aside>

          <div
            className="lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-6"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={`body-copy ${index === 0 ? "drop-cap text-[1.06rem] leading-[1.75] text-ink" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-5">
              <a
                href={site.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-[0.8rem]"
              >
                Technical portfolio
                <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-[0.8rem]"
              >
                LinkedIn
                <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
              </a>
              <span className="meta-label ml-auto hidden sm:inline">
                {site.location}
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid gap-6 border-t border-ink pt-8 md:mt-24 lg:grid-cols-12"
          data-reveal
        >
          <p className="meta-label lg:col-span-2">Working philosophy</p>
          <blockquote className="lg:col-span-8">
            <p className="pull-quote">
              &ldquo;{pullQuote.text}&rdquo;
            </p>
          </blockquote>
          <div className="flex items-start justify-end gap-3 lg:col-span-2">
            <span className="mt-1.5 h-px w-8 bg-accent" aria-hidden="true" />
            <p className="font-serif text-[0.92rem] italic leading-snug text-muted">
              {pullQuote.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

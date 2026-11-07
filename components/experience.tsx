import { ArrowUpRight } from "lucide-react";
import { experienceAreas, sectionIndex } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-shell hairline-top"
      aria-labelledby="experience-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.experience}
          label="Professional experience"
          title={
            <>
              Four practices. <em>One operator.</em>
            </>
          }
          description="A condensed view of the work. The full chronology — including the overlaps — sits in the journey above."
          id="experience-title"
        />

        <div className="mt-12 border-t-2 border-ink md:mt-16">
          {experienceAreas.map((area) => (
            <article
              key={area.index}
              className="group relative grid gap-5 border-b border-rule py-7 transition-colors duration-300 hover:bg-paper-light/45 lg:grid-cols-12 lg:gap-6 lg:px-4 lg:py-9"
              data-reveal
            >
              <span
                className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4 lg:col-span-1">
                <span className="section-number">{area.index}</span>
                <a
                  href={area.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rule-strong text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-paper lg:hidden"
                  aria-label={`${area.link.label} (opens in a new tab)`}
                >
                  <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
                </a>
              </div>

              <div className="lg:col-span-3">
                <h3 className="headline-sm">{area.title}</h3>
                <p className="meta-label mt-2.5">{area.period}</p>
                {area.current ? (
                  <span className="chip mt-3 !border-accent/35 !bg-accent/[0.06] !text-accent">
                    Current
                  </span>
                ) : null}
              </div>

              <div className="lg:col-span-4">
                <p className="font-serif text-[1.06rem] leading-snug tracking-[-0.012em]">
                  {area.role}
                </p>
                <p className="body-copy mt-2.5 text-[0.86rem]">{area.summary}</p>
              </div>

              <div className="lg:col-span-3">
                <ul className="grid gap-1.5">
                  {area.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-[0.76rem] leading-[1.55] text-muted"
                    >
                      <span className="mt-[0.55em] h-px w-2.5 shrink-0 bg-accent" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden items-start justify-end lg:col-span-1 lg:flex">
                <a
                  href={area.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule-strong text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-paper"
                  aria-label={`${area.link.label} (opens in a new tab)`}
                >
                  <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 max-w-xl text-[0.7rem] leading-relaxed text-muted" data-reveal>
          Agency, client and campaign names from the PR years are withheld. They can
          be discussed directly where confidentiality allows.
        </p>
      </div>
    </section>
  );
}

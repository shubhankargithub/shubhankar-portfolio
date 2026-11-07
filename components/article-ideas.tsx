import { ArrowUpRight } from "lucide-react";
import { articleIdeas, sectionIndex } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function ArticleIdeas() {
  return (
    <section
      id="ideas"
      className="section-shell hairline-top bg-paper-deep/35"
      aria-labelledby="ideas-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.ideas}
          label="Proposed article ideas"
          title={
            <>
              Three story <em>proposals.</em>
            </>
          }
          description="Written for a B2B travel-technology readership: the systems, money and decisions behind the journey. These are proposed ideas — not published articles."
          id="ideas-title"
        />

        <div
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-rule py-3"
          data-reveal
        >
          <span className="proposal-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Proposed · Unpublished
          </span>
          <p className="text-[0.7rem] leading-relaxed text-muted">
            Editorial pitches only. None of the drafts below has been published.
          </p>
          <a
            href="#contact"
            className="text-link ml-auto font-mono text-[0.56rem] uppercase tracking-[0.12em]"
          >
            Commission one
            <ArrowUpRight size={10} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articleIdeas.map((idea, index) => (
            <article
              key={idea.index}
              className="idea-card"
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 70}ms`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between gap-3">
                <span className="meta-label">Proposal / {idea.index}</span>
                <span className="proposal-badge">Unpublished</span>
              </div>

              <h3 className="mt-5 font-serif text-[1.38rem] leading-[1.14] tracking-[-0.022em]">
                {idea.title}
              </h3>

              <p className="mt-4 text-[0.84rem] leading-[1.72] text-ink-soft">
                {idea.dek}
              </p>

              <div className="mt-5 border-t border-rule pt-3.5">
                <p className="meta-label !text-accent">Reporting angle</p>
                <p className="mt-1.5 text-[0.77rem] leading-[1.65] text-ink-soft">
                  {idea.angle}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {idea.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

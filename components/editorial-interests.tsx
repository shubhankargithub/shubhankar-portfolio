import { editorialInterests, sectionIndex } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function EditorialInterests() {
  return (
    <section
      id="beats"
      className="section-shell hairline-top"
      aria-labelledby="beats-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.beats}
          label="Editorial interests"
          title={
            <>
              The beats I <em>follow.</em>
            </>
          }
          description="Subjects I read, research and want to write about — with an emphasis on the business and operational consequences of technology."
          id="beats-title"
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3" data-reveal>
            <p className="font-serif text-[1.5rem] italic leading-[1.28] tracking-[-0.02em]">
              &ldquo;The story is rarely the technology. It is what the
              technology changes.&rdquo;
            </p>
            <div className="mt-6 border-t border-rule pt-4">
              <p className="meta-label">Coverage focus</p>
              <p className="mt-2 text-[0.76rem] leading-[1.7] text-muted">
                B2B travel technology, digital infrastructure and the decisions
                behind the systems. Written for operators and leaders, not
                necessarily for the end traveller.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {editorialInterests.map((interest, index) => (
              <div
                key={interest.title}
                className="interest-row"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${Math.min(index * 35, 280)}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="font-mono text-[0.58rem] tracking-[0.1em] text-accent">
                  {interest.index}
                </span>
                <h3 className="font-serif text-[clamp(1.1rem,1.6vw,1.4rem)] leading-tight tracking-[-0.015em]">
                  {interest.title}
                </h3>
                <p className="interest-note hidden sm:block">{interest.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

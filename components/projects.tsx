import { ArrowUpRight } from "lucide-react";
import { projects, sectionIndex } from "@/content/site";
import { ProjectArt } from "@/components/project-art";
import { SectionHeader } from "@/components/section-header";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function Projects() {
  return (
    <section id="work" className="section-shell hairline-top" aria-labelledby="work-title">
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.work}
          label="Selected work"
          title={
            <>
              Selected <em>work.</em>
            </>
          }
          description="A newsroom, a trading business, a technical portfolio and an independent music career — four different problems, one throughline: build it, understand it, explain it."
          id="work-title"
        />

        <div className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${spans[index]}`}
              data-reveal
              style={
                {
                  "--reveal-delay": `${(index % 2) * 90}ms`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between gap-4 pb-3">
                <p className="meta-label">Project / {project.index}</p>
                <p className="meta-label">{project.year}</p>
              </div>

              <div className="relative">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`${project.title} — ${project.hrefLabel} (opens in a new tab)`}
                >
                  <ProjectArt theme={project.theme} />
                </a>
                <span className="project-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </div>

              <div className="mt-4 flex flex-1 flex-col">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="headline-sm">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="meta-label">{project.role}</p>
                </div>
                <p className="mt-1 font-serif text-[0.98rem] italic leading-snug text-muted">
                  {project.subtitle}
                </p>
                <p className="body-copy mt-3 text-[0.86rem]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-[0.8rem]"
                  >
                    {project.hrefLabel}
                    <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 border-t border-rule pt-4 text-[0.68rem] leading-relaxed text-muted">
          All project links open in a new tab. The NotScripted.in and CHAVAN
          INDUSTRIAL GROUP websites are live, independently maintained properties.
        </p>
      </div>
    </section>
  );
}

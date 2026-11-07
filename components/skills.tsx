"use client";

import { useRef, useState } from "react";
import { sectionIndex, skillGroups } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = skillGroups[activeIndex];

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = (index + 1) % skillGroups.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = (index - 1 + skillGroups.length) % skillGroups.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = skillGroups.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="toolkit"
      className="section-shell hairline-top bg-paper-deep/35"
      aria-labelledby="toolkit-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.toolkit}
          label="Skills directory"
          title={
            <>
              The working <em>toolkit.</em>
            </>
          }
          description="A directory, not a scorecard. These are the tools and disciplines that show up in the work — no invented percentages, no badge walls."
          id="toolkit-title"
        />

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" data-reveal>
            <div
              role="tablist"
              aria-label="Skill categories"
              aria-orientation="vertical"
              className="border-b border-rule"
            >
              {skillGroups.map((group, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={group.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    type="button"
                    role="tab"
                    id={`skill-tab-${group.id}`}
                    aria-selected={selected}
                    aria-controls="skill-panel"
                    tabIndex={selected ? 0 : -1}
                    data-active={selected}
                    className="skill-tab"
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                  >
                    <span className="skill-tab-index">{group.index}</span>
                    <span className="skill-tab-title">{group.title}</span>
                    <span className="skill-tab-count">
                      {String(group.skills.length).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-[0.7rem] leading-[1.7] text-muted">
                Use the arrow keys to move between categories. Evidence lives in the
                timeline and selected work, not in a proficiency number.
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-8"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div
              id="skill-panel"
              role="tabpanel"
              aria-labelledby={`skill-tab-${active.id}`}
              tabIndex={0}
              className="skill-panel h-full border-t-2 border-ink pt-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="meta-label">
                    Directory / {active.index} · {String(activeIndex + 1)} of{" "}
                    {skillGroups.length}
                  </p>
                  <h3 className="headline-md mt-2">{active.title}</h3>
                </div>
                <p className="meta-label mt-1">
                  {String(active.skills.length).padStart(2, "0")} entries
                </p>
              </div>

              <p className="mt-3 max-w-xl text-[0.9rem] leading-[1.7] text-ink-soft">
                {active.description}
              </p>

              <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
                {active.skills.map((skill, index) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-item-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-rule pt-4 text-[0.68rem] leading-relaxed text-muted">
                Listed without proficiency ratings. Specific project context is
                available in the selected work and on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

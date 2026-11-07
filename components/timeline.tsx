"use client";

import { useState } from "react";
import { ArrowUpRight, CornerDownRight, Plus } from "lucide-react";
import { sectionIndex, timelineEntries } from "@/content/site";
import { SectionHeader } from "@/components/section-header";

export function Timeline() {
  const [openId, setOpenId] = useState<string | null>("notscripted");

  return (
    <section
      id="journey"
      className="section-shell hairline-top bg-paper-deep/35"
      aria-labelledby="journey-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.journey}
          label="Career timeline"
          title={
            <>
              Five tracks. <em>One throughline.</em>
            </>
          }
          description="Music and PR, engineering, entrepreneurship, corporate business development and digital media. Presented in reverse chronology — with the overlaps kept intact, because they are part of the story."
          id="journey-title"
        />

        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-rule py-3 md:mt-14"
          data-reveal
        >
          <p className="meta-label">Reverse chronology · 2026 → 2020</p>
          <p className="meta-label flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Current track
          </p>
          <p className="meta-label hidden md:inline">Select an entry to expand</p>
        </div>

        <div className="timeline mt-2">
          {timelineEntries.map((entry) => {
            const isOpen = openId === entry.id;
            const panelId = `timeline-panel-${entry.id}`;
            const triggerId = `timeline-trigger-${entry.id}`;

            return (
              <article
                key={entry.id}
                className="timeline-item border-b border-rule last:border-b-0"
                data-open={isOpen}
                data-current={entry.current}
              >
                <span className="timeline-dot" aria-hidden="true" />

                <div className="flex flex-row items-baseline gap-4 md:block">
                  <p className="timeline-year">{entry.yearLabel}</p>
                  <p className="timeline-period !mt-2">{entry.period}</p>
                  <p className="meta-label mt-3 hidden md:block">{entry.track}</p>
                </div>

                <div>
                  <h3>
                    <button
                      type="button"
                      id={triggerId}
                      className="timeline-toggle"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : entry.id)}
                    >
                      <span className="block min-w-0">
                        <span className="flex flex-wrap items-center gap-2.5">
                          <span className="section-number">{entry.index}</span>
                          <span className="meta-label md:hidden">{entry.track}</span>
                          {entry.status ? (
                            <span
                              className={`chip ${
                                entry.current
                                  ? "!border-accent/35 !bg-accent/[0.06] !text-accent"
                                  : ""
                              }`}
                            >
                              {entry.status}
                            </span>
                          ) : null}
                        </span>
                        <span className="headline-md mt-2.5 block">{entry.title}</span>
                        <span className="mt-1.5 block font-serif text-[1rem] leading-snug tracking-[-0.01em] text-ink-soft">
                          {entry.org}
                        </span>
                      </span>
                      <span className="timeline-toggle-icon" aria-hidden="true">
                        <Plus size={15} strokeWidth={1.5} />
                      </span>
                    </button>
                  </h3>

                  <p className="mt-4 max-w-2xl text-[0.91rem] leading-[1.7] text-ink-soft">
                    {entry.summary}
                  </p>

                  <div
                    id={panelId}
                    className="timeline-details"
                    data-open={isOpen}
                    role="region"
                    aria-labelledby={triggerId}
                    inert={!isOpen}
                  >
                    <div className="timeline-details-inner">
                      <div className="mt-5 border-t border-rule pt-5">
                        {entry.chapters ? (
                          <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                            {entry.chapters.map((chapter) => (
                              <div key={chapter.title}>
                                <h4 className="flex items-start gap-2 font-serif text-[1rem] leading-snug tracking-[-0.015em] text-ink">
                                  <span
                                    className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent"
                                    aria-hidden="true"
                                  />
                                  {chapter.title}
                                </h4>
                                <ul className="bullet-list mt-3 space-y-1.5">
                                  {chapter.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="bullet-list grid gap-x-8 gap-y-2 sm:grid-cols-2">
                            {entry.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {entry.note ? (
                          <p className="mt-5 border-l-2 border-accent/50 bg-paper-light/60 px-4 py-3 text-[0.72rem] leading-[1.65] text-muted">
                            <span className="font-mono text-[0.55rem] uppercase tracking-[0.13em] text-accent">
                              Note
                            </span>
                            <span className="mt-1 block">{entry.note}</span>
                          </p>
                        ) : null}

                        {entry.overlap ? (
                          <p className="mt-4 flex items-start gap-2 text-[0.75rem] leading-[1.6] text-muted">
                            <CornerDownRight
                              size={13}
                              strokeWidth={1.5}
                              className="mt-0.5 shrink-0 text-accent"
                              aria-hidden="true"
                            />
                            <span>
                              <span className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-ink-soft">
                                Overlap ·{" "}
                              </span>
                              {entry.overlap}
                            </span>
                          </p>
                        ) : null}

                        {entry.links.length > 0 ? (
                          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                            {entry.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-link text-[0.78rem]"
                              >
                                {link.label}
                                <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

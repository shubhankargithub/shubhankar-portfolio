import { ArrowUpRight, FileText } from "lucide-react";
import { sectionIndex, site } from "@/content/site";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { CopyButton } from "@/components/copy-button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const contactLinks = [
  {
    label: "LinkedIn",
    handle: "in/shubhankarchavan",
    href: site.linkedin,
  },
  {
    label: "GitHub",
    handle: "shubhankargithub",
    href: site.github,
  },
  {
    label: "NotScripted",
    handle: "notscripted.in",
    href: site.notScripted,
  },
  {
    label: "Chavan Industrial",
    handle: "chavanindustrialgroup.com",
    href: site.chavanIndustrial,
  },
  {
    label: "Tech portfolio",
    handle: "shubhankarchavan.vercel.app",
    href: site.portfolio,
  },
];

export function Contact() {
  const cvUrl: string = site.cvUrl;

  return (
    <section
      id="contact"
      className="section-shell hairline-top bg-paper-light/40"
      aria-labelledby="contact-title"
    >
      <div className="container-editorial">
        <SectionHeader
          index={sectionIndex.contact}
          label="Contact"
          title={
            <>
              Let&rsquo;s make something <em>worth reading.</em>
            </>
          }
          description="For editorial commissions, media and PR conversations, business collaborations or a straight question — the door is open."
          id="contact-title"
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5" data-reveal>
            <p className="body-copy max-w-md text-[1rem]">
              Good conversations usually start with a specific question. If you
              are commissioning a story, hiring for a role, or trying to make sense
              of a technology problem, tell me what you have in mind.
            </p>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-4">
                <p className="meta-label">Email</p>
                <CopyButton text={site.email} label="Copy email" />
              </div>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all border-b border-ink pb-2 font-serif text-[clamp(1.1rem,2vw,1.55rem)] leading-tight tracking-[-0.02em] transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-8">
              <p className="meta-label">Elsewhere</p>
              <div className="mt-2 border-t border-rule">
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-row group"
                  >
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <span className="meta-label w-[7.2rem] shrink-0 group-hover:!text-accent">
                        {link.label}
                      </span>
                      <span className="truncate text-[0.78rem] text-ink-soft">
                        {link.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                      className="shrink-0 text-muted transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-5 border border-rule bg-paper/40 p-5">
              <div>
                <p className="meta-label">Based in</p>
                <p className="mt-1.5 font-serif text-[1rem] leading-tight">
                  {site.location}
                </p>
              </div>
              <div>
                <p className="meta-label">Open to</p>
                <p className="mt-1.5 font-serif text-[1rem] leading-tight">
                  Editorial, media &amp; business conversations
                </p>
              </div>
            </div>

            {cvUrl ? (
              <a
                href={cvUrl.startsWith("/") ? `${basePath}${cvUrl}` : cvUrl}
                download
                className="text-link mt-5 text-[0.78rem]"
              >
                <FileText size={12} strokeWidth={1.6} aria-hidden="true" />
                Download CV (PDF)
              </a>
            ) : null}
          </div>

          <div
            className="lg:col-span-6 lg:col-start-7"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div className="border-t-2 border-ink pt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow">Compose a message</p>
                <p className="meta-label">Mailto · No server</p>
              </div>
              <h3 className="headline-sm mt-3">Write a note.</h3>
              <p className="mt-2 max-w-md text-[0.8rem] leading-[1.7] text-muted">
                Share a little context and a deadline if there is one. The form
                prepares an email in your own mail app.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

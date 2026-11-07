import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navItems, site, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="dark-band on-dark relative overflow-hidden">
      <div className="container-editorial">
        <div className="flex flex-col gap-8 border-b border-cream/15 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="eyebrow">End of portfolio</p>
            <p className="mt-4 max-w-md font-serif text-[1.35rem] leading-[1.35] tracking-[-0.015em] text-cream">
              Available for conversations about technology, media, journalism and
              the business of storytelling.
            </p>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 self-start border-b border-cream/35 pb-1 font-serif text-[1.1rem] text-cream transition-colors hover:border-[#d9503f] hover:text-[#e7a093]"
          >
            {site.email}
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-[2rem] leading-[0.95] tracking-[-0.035em] text-cream">
              Shubhankar
              <br />
              <span className="italic">Chavan</span>
            </p>
            <p className="mt-5 max-w-xs text-[0.78rem] leading-[1.7] text-cream-muted">
              {site.tagline}
            </p>
            <p className="meta-label mt-6 !text-cream-muted">
              {site.location} · {site.role}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="meta-label !text-cream-muted">Index</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.83rem] text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="meta-label !text-cream-muted">Elsewhere</p>
            <ul className="mt-4 grid gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 text-[0.83rem] text-cream/80 transition-colors hover:text-cream"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[0.55rem] tracking-[0.08em] text-cream-muted">
                      {link.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden border-t border-cream/15 pt-8">
          <p className="footer-wordmark" aria-hidden="true">
            Shubhankar <span className="italic text-[#d9503f]">Chavan</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/15 py-6 text-[0.62rem] text-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-[0.1em]">
            © {site.currentYear} {site.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.1em]">
            Set in Newsreader &amp; Inter · Built with Next.js
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.1em] transition-colors hover:text-cream"
          >
            Back to top
            <ArrowUp size={12} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

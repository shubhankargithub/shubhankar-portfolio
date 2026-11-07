"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, site, socialLinks } from "@/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(true);
  const wasOpen = useRef(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 28);

      const marker = window.scrollY + 170;
      let current = "";
      for (const item of navItems) {
        const element = document.querySelector<HTMLElement>(item.href);
        if (element && element.offsetTop <= marker) {
          current = item.href;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 120);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open && restoreFocus.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  const closeFromLink = () => {
    restoreFocus.current = false;
    setOpen(false);
  };

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled}
        data-menu-open={open}
      >
        <div
          className="container-editorial flex items-center justify-between gap-4"
          style={{ height: "var(--header-height)" }}
        >
          <a
            href="#top"
            className="header-logo flex shrink-0 items-center gap-3"
            aria-label="SC, Shubhankar Chavan — back to top"
          >
            <span className="header-logo-mark">
              SC
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="brand-name font-serif text-[1.08rem] tracking-[-0.02em]">
                Shubhankar Chavan
              </span>
              <span className="meta-label mt-1.5 text-[0.5rem]" aria-hidden="true">
                Technology · Media · Business
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={active === item.href}
                aria-current={active === item.href ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="header-cta btn btn-ghost hidden !min-h-[2.35rem] !px-3.5 !py-2 !text-[0.58rem] transition-opacity md:inline-flex"
            >
              Get in touch
              <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle lg:hidden"
              data-open={open}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => {
                restoreFocus.current = true;
                setOpen((value) => !value);
              }}
            >
              {open ? (
                <X size={17} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={17} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="mobile-menu"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="container-editorial flex h-full flex-col pb-8 pt-[calc(var(--header-height)+2.25rem)]">
          <div className="flex items-center justify-between">
            <p className="eyebrow !text-cream-muted">Index</p>
            <p className="meta-label !text-cream-muted">Portfolio / 2026</p>
          </div>

          <nav className="mt-6 flex-1 overflow-y-auto" aria-label="Mobile">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={closeFromLink}
              >
                <span className="font-mono text-[0.6rem] tracking-[0.12em] text-cream-muted">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 border-t border-cream/15 pt-5">
            <a
              href={`mailto:${site.email}`}
              className="font-serif text-[1.15rem] tracking-[-0.01em] text-cream transition-colors hover:text-[#d9503f]"
            >
              {site.email}
            </a>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.58rem] uppercase tracking-[0.13em] text-cream-muted transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

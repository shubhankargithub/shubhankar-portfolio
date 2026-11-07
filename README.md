# Shubhankar Chavan — Editorial Portfolio

A production-ready personal portfolio for **Shubhankar Chavan** — technology, media, journalism, public relations and business. Built as an editorial digital résumé: warm paper tones, serif display type, a restrained red accent, and an interactive career timeline.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Lucide icons. No CMS, database or backend is required — every piece of copy lives in one typed content file.

---

## Run locally

Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script              | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create an optimised production build         |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | Run ESLint                                   |
| `npm run typecheck` | Run the TypeScript compiler with `--noEmit`  |

---

## Editing content

All copy, dates, links, skills, projects and article pitches are in:

```
content/site.ts
```

This is the single source of truth. Components import named exports from it, so you can edit text without touching layout code.

Key exports:

- `site` — name, role, headline, location, email, social URLs, SEO description, CV path.
- `timeline` — the five-track, reverse-chronological career timeline. Overlapping roles intentionally share dates; each entry carries a `track` label and optional `overlap` note.
- `experience` — the six experience areas shown as anchored panels.
- `skillGroups` — the tabbed skills directory.
- `projects` — the four featured projects and their custom editorial cover art.
- `editorialInterests` — the nine editorial beats.
- `articleIdeas` — the three proposed article pitches.
- `navItems`, `socialLinks`, `sectionIndex` — navigation and section numbering.

### Career facts

Dates, employers, organisation names and role titles were transcribed from the supplied CV and public profiles. Please keep them factual when editing. Do **not** add agency names, client names, metrics or testimonials unless they are verified.

### Article ideas

The three article ideas are deliberately labelled **“Proposed · Unpublished”** in the UI. They are pitches, not published work. If one is published, update the card copy and remove the proposal badge in `components/article-ideas.tsx`.

### CV download

The download is hidden by default because no current, valid PDF was available.

1. Put a real PDF at `public/assets/shubhankar-chavan-cv.pdf`.
2. Set `cvUrl` in `content/site.ts`:

```ts
cvUrl: "/assets/shubhankar-chavan-cv.pdf",
```

The “Download CV (PDF)” link appears automatically in the contact section.

### Contact form

The form is intentionally backend-free. It validates the fields in the browser and opens the visitor's mail client via a `mailto:` link. It does not send or store anything on a server, and the UI says so (“Mailto · No server”). A separate **Copy email** button copies the address to the clipboard.

To use a form service instead, replace the `mailto` submission in `components/contact-form.tsx`.

---

## Site URL and SEO

Set the production URL in an environment variable so canonical URLs, Open Graph metadata, `sitemap.xml` and `robots.txt` use the live domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Local development falls back to `https://shubhankarchavan.vercel.app` (defined in `content/site.ts`). See `.env.example`.

For a GitHub Pages project site, also set `NEXT_PUBLIC_BASE_PATH` to the repository path, for example `/shubhankar-portfolio`. Leave it empty for root-domain or Vercel deployments.

Included out of the box:

- Per-page metadata, canonical URL, Open Graph and Twitter cards.
- A 1200×630 social sharing image at `public/og.png`.
- JSON-LD `Person` and `WebSite` structured data in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts`.
- An SVG favicon (`app/icon.svg`) and a branded 404 page.
- Skip link, visible focus states, reduced-motion support, keyboard-operable timeline and skills tabs.

If you change the production domain, update the fallback `site.url` too.

---

## Project structure

```
app/
  layout.tsx            Fonts, metadata, JSON-LD, header/footer shell
  page.tsx              Section composition
  globals.css           Design tokens, layout, components, responsive rules
  sitemap.ts, robots.ts, icon.svg, not-found.tsx
components/
  site-header.tsx       Sticky nav, scroll-spy, mobile menu, focus trap
  hero.tsx              Opening spread and career ledger
  about.tsx             Profile, education and principles
  timeline.tsx          Interactive five-track career timeline
  experience.tsx        Experience areas
  skills.tsx            Accessible tabbed skills directory
  projects.tsx          Project gallery
  project-art.tsx       Code-generated editorial cover art
  rationale.tsx         Dark “Why Technology Journalism” essay band
  editorial-interests.tsx
  article-ideas.tsx     Labelled unpublished pitches
  contact.tsx           Contact links and email
  contact-form.tsx      Client-side mailto composer
  copy-button.tsx       Clipboard button with fallback
  site-footer.tsx
  section-header.tsx, reveal-observer.tsx, scroll-progress.tsx
content/
  site.ts               All editable content
public/
  og.png                Social sharing image (1200×630)
  assets/profile.jpg    Portrait (from shubhankarchavan.vercel.app)
.github/workflows/
  deploy-pages.yml      GitHub Pages build and deploy
```

### Design tokens

Defined at the top of `app/globals.css`:

| Token                | Value     | Use                          |
| -------------------- | --------- | ---------------------------- |
| `--color-paper`      | `#f3eee4` | Page background              |
| `--color-paper-light`| `#faf7f1` | Cards and raised surfaces    |
| `--color-ink`        | `#171614` | Primary text                 |
| `--color-accent`     | `#ad2118` | Editorial red                |
| `--color-muted`      | `#6b6357` | Secondary text (AA contrast) |

Typography: **Newsreader** (serif display), **Inter** (body) and **JetBrains Mono** (labels), loaded through `next/font/google`.

---

## Deploy to GitHub Pages

The live site is published at **[shubhankargithub.github.io/shubhankar-portfolio](https://shubhankargithub.github.io/shubhankar-portfolio/)** from the [`shubhankar-portfolio`](https://github.com/shubhankargithub/shubhankar-portfolio) repository.

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which:

1. Installs dependencies with `npm ci`.
2. Builds a static export with the project site URL and base path.
3. Uploads the generated `out/` directory to GitHub Pages.

To build the Pages version locally:

```bash
# PowerShell
$env:GITHUB_PAGES="true"
$env:NEXT_PUBLIC_SITE_URL="https://shubhankargithub.github.io/shubhankar-portfolio"
$env:NEXT_PUBLIC_BASE_PATH="/shubhankar-portfolio"
npm run build
```

The static export is written to `out/`. Because this is a GitHub Pages project site, `NEXT_PUBLIC_BASE_PATH` must match the repository name. `next/image` optimisation is disabled in this mode and a pre-rendered `public/og.png` is used for social previews.

To use a different repository name or a custom domain, update `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` in the workflow, then rebuild.

## Deploy to Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected). No build settings need changing.
3. Add `NEXT_PUBLIC_SITE_URL` with the final production URL.
4. Deploy.

Or from the CLI:

```bash
npx vercel
npx vercel --prod
```

For Vercel, leave `GITHUB_PAGES` unset so Next.js uses its normal server output and image optimisation. The site also works on any Node or static-compatible host.

---

## Assets and attribution

- Portrait: `public/assets/profile.jpg`, sourced from the owner's existing public portfolio.
- Project covers: original artwork generated in `components/project-art.tsx` — no fake screenshots.
- Fonts: served by Google Fonts through `next/font`; the social image at `public/og.png` is pre-rendered.
- Icons: [Lucide](https://lucide.dev).

## Content accuracy notes

- No CV download is shown unless a verified PDF exists.
- No phone number is published; email and LinkedIn are the contact routes.
- The three article ideas are clearly marked as proposals.
- Overlapping career dates and tracks are preserved as supplied.

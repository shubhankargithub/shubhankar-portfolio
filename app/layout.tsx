import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { RevealObserver } from "@/components/reveal-observer";
import { site } from "@/content/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? site.url).replace(/\/$/, "");
const ogImageUrl = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shubhankar Chavan — Technology, Media & Journalism",
    template: "%s | Shubhankar Chavan",
  },
  description: site.description,
  applicationName: "Shubhankar Chavan — Portfolio",
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "Journalism & Media",
  keywords: [
    "Shubhankar Chavan",
    "technology journalist",
    "travel technology",
    "media professional",
    "public relations",
    "cybersecurity",
    "digital publishing",
    "NotScripted.in",
    "business development",
    "editorial portfolio",
    "India",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Shubhankar Chavan",
    title: "Shubhankar Chavan — Technology, Media & Journalism",
    description: site.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Shubhankar Chavan — Technology, Media, Journalism and Business. Portfolio 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhankar Chavan — Technology, Media & Journalism",
    description: site.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  image: `${siteUrl}/assets/profile.jpg`,
  email: `mailto:${site.email}`,
  jobTitle: "Founder & Creator, NotScripted.in",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "MIT ADT University, Pune",
  },
  knowsAbout: [
    "Cybersecurity",
    "Digital forensics",
    "Public relations",
    "Journalism",
    "Travel technology",
    "Business development",
    "Digital publishing",
    "Artificial intelligence",
  ],
  sameAs: [
    site.linkedin,
    site.github,
    site.portfolio,
    site.notScripted,
    site.chavanIndustrial,
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "NotScripted.in",
      url: site.notScripted,
    },
    {
      "@type": "Organization",
      name: "CHAVAN INDUSTRIAL GROUP",
      url: site.chavanIndustrial,
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shubhankar Chavan — Portfolio",
  url: siteUrl,
  description: site.description,
  inLanguage: "en-IN",
  author: {
    "@type": "Person",
    name: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${newsreader.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}

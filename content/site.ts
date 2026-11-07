/**
 * All editable content for the portfolio lives in this file.
 * Update copy, dates, links and contact details here — components read from it.
 */

export type LinkItem = {
  label: string;
  href: string;
  kind?: "primary" | "secondary";
};

export type TimelineEntry = {
  id: string;
  index: string;
  period: string;
  yearLabel: string;
  title: string;
  org: string;
  track: string;
  status?: string;
  summary: string;
  bullets: string[];
  chapters?: { title: string; bullets: string[] }[];
  note?: string;
  overlap?: string;
  links: LinkItem[];
  current?: boolean;
};

export type ExperienceArea = {
  index: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  link: LinkItem;
  current?: boolean;
};

export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: string[];
};

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  href: string;
  hrefLabel: string;
  theme: "press" | "industrial" | "security" | "waveform";
  featured?: boolean;
};

export type ArticleIdea = {
  index: string;
  title: string;
  dek: string;
  angle: string;
  tags: string[];
};

export const site = {
  name: "Shubhankar Chavan",
  firstName: "Shubhankar",
  lastName: "Chavan",
  initials: "SC",
  role: "Technology · Media · Journalism · Business",
  headline: "Where technology meets media, business & storytelling.",
  tagline:
    "An engineer by education, a communicator by experience, and an entrepreneur by instinct.",
  intro:
    "A multidisciplinary professional with a background in Cybersecurity Engineering and experience across public relations, entertainment, political communications, election campaigns, entrepreneurship, business development and digital media.",
  location: "Pune, India",
  email: "shubhankarchavan01@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubhankarchavan/",
  github: "https://github.com/shubhankargithub",
  portfolio: "https://shubhankarchavan.vercel.app/",
  notScripted: "https://notscripted.in/",
  chavanIndustrial: "https://chavanindustrialgroup.com/",
  mediaFeature: "https://share.google/N4uy6ZAXv2zSu9b59",
  /**
   * Add a real PDF at public/assets/shubhankar-chavan-cv.pdf and set this path
   * to enable the CV download automatically. Left empty because no current PDF
   * was available to verify.
   */
  cvUrl: "",
  url: "https://shubhankarchavan.vercel.app",
  description:
    "Shubhankar Chavan is a technology, media and business professional working across journalism, public relations, entrepreneurship and digital publishing. B.Tech in Cybersecurity Engineering, founder of NotScripted.in and Chavan Industrial Group.",
  foundingYear: 2020,
  currentYear: 2026,
} as const;

export const heroStats = [
  { value: "150+", label: "Media features", detail: "Online articles & publications" },
  { value: "Top 20", label: "In Asia", detail: "Independent Phonk artist" },
  { value: "05", label: "Career tracks", detail: "Music, PR, tech, business, media" },
  { value: "2026", label: "B.Tech", detail: "Cybersecurity Engineering" },
] as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;

export const sectionIndex = {
  about: "01",
  journey: "02",
  experience: "03",
  toolkit: "04",
  work: "05",
  rationale: "06",
  beats: "07",
  ideas: "08",
  contact: "09",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin, handle: "in/shubhankarchavan" },
  { label: "GitHub", href: site.github, handle: "shubhankargithub" },
  { label: "NotScripted.in", href: site.notScripted, handle: "notscripted.in" },
  { label: "Portfolio", href: site.portfolio, handle: "shubhankarchavan.vercel.app" },
] as const;

export const aboutParagraphs = [
  "Shubhankar Chavan is a multidisciplinary professional working at the intersection of technology, media, journalism, public relations and business. His career does not follow a single lane — it has been built across several, often at the same time.",
  "An engineer by education, he completed a B.Tech in Cybersecurity Engineering at MIT ADT University, Pune, in 2026. His technical grounding spans digital forensics, network security, threat analysis, cloud platforms and the Microsoft security stack. It shapes how he reads the systems behind a story: where the data sits, how the decision is made, and what can fail.",
  "His professional life has moved between studios, campaign war rooms, trading desks and newsrooms. He built recognition as an independent Phonk artist, worked in Bollywood, political and brand public relations, founded an industrial and textile trading business, and gained corporate experience in business development before creating NotScripted.in, an independent digital news and media platform.",
  "His interests lie where technology, business, journalism and communication meet. He is particularly interested in explaining complex technology — AI, payments, aviation and hospitality systems, cybersecurity and automation — and what its business implications mean for the people running the industry.",
];

export const aboutFacts = [
  { label: "Based in", value: "Pune, India" },
  { label: "Education", value: "B.Tech, Cybersecurity Engineering" },
  { label: "University", value: "MIT ADT University, Pune" },
  { label: "Currently", value: "Founder, NotScripted.in" },
  { label: "Focus", value: "Technology, media & business" },
] as const;

export const pullQuote = {
  text: "I understand technology. I understand media. I understand business. And I know how to communicate ideas.",
  attribution: "Shubhankar Chavan",
} as const;

export const timelineEntries: TimelineEntry[] = [
  {
    id: "notscripted",
    index: "01",
    period: "October 2026 — Present",
    yearLabel: "2026",
    title: "Founder & Creator",
    org: "NotScripted.in",
    track: "Digital Media",
    status: "Current",
    current: true,
    summary:
      "An independent digital news and media platform, built from concept to publication — combining editorial judgement, publishing technology and AI-assisted workflows.",
    bullets: [
      "Website development and digital publishing.",
      "Editorial planning and news research.",
      "Content development and brand positioning.",
      "SEO and social media strategy.",
      "Audience development and digital storytelling.",
      "AI-assisted media production workflows.",
    ],
    note:
      "NotScripted.in is an independent publication. Its editorial output is separate from this portfolio.",
    links: [
      { label: "Visit NotScripted.in", href: site.notScripted, kind: "primary" },
      {
        label: "Platform reference",
        href: "https://share.google/aimode/250oybQYD2zEKuo0W",
      },
    ],
  },
  {
    id: "intellipaat",
    index: "02",
    period: "June — November 2026",
    yearLabel: "2026",
    title: "Business Development Associate",
    org: "Intellipaat Software Solutions",
    track: "Corporate · EdTech",
    status: "Completed",
    summary:
      "Corporate business development experience in professional education — from first conversation and consultation to follow-up, objection handling and conversion.",
    bullets: [
      "Business development and inside sales.",
      "Student consultation and course recommendations.",
      "Lead management and follow-ups.",
      "Sales funnel optimisation.",
      "Customer objection handling and negotiations.",
      "Customer behaviour and conversion analysis.",
    ],
    overlap:
      "Overlapped with the October 2026 launch of NotScripted.in — corporate work and independent publishing running in parallel.",
    links: [
      { label: "Intellipaat", href: "https://intellipaat.com/", kind: "primary" },
      {
        label: "Company reference",
        href: "https://share.google/Pd54naTjyWQnPweSm",
      },
    ],
  },
  {
    id: "chavan-industrial",
    index: "03",
    period: "2024 — 2026",
    yearLabel: "2024–26",
    title: "Founder",
    org: "CHAVAN INDUSTRIAL GROUP",
    track: "Entrepreneurship",
    status: "Building",
    summary:
      "Established a proprietorship business operating in industrial, textile and general goods trading and supply — from sourcing and vendor relationships to commercial operations and a public web presence.",
    bullets: [
      "Business establishment and operations.",
      "Industrial and textile sourcing.",
      "Vendor and client relationships.",
      "Business development and negotiations.",
      "Trading, supply and commercial operations.",
      "Website development and business branding.",
    ],
    overlap:
      "Founded during the final years of the engineering degree; still the commercial counterpart to the media work.",
    links: [
      {
        label: "chavanindustrialgroup.com",
        href: site.chavanIndustrial,
        kind: "primary",
      },
      {
        label: "Business reference",
        href: "https://share.google/9nnBlpd9MHU2JinFa",
      },
    ],
  },
  {
    id: "education",
    index: "04",
    period: "2022 — 2026",
    yearLabel: "2022–26",
    title: "B.Tech in Cybersecurity Engineering",
    org: "MIT ADT University, Pune",
    track: "Education & Technology",
    status: "Graduated 2026",
    summary:
      "A technical foundation in how systems are built, broken and defended — the discipline behind the technology reporting.",
    bullets: [
      "Cybersecurity and digital forensics.",
      "Network security and threat analysis.",
      "Cloud computing and Microsoft security technologies.",
      "Python, Java and MySQL.",
      "AWS and Azure.",
    ],
    note:
      "Final-year portfolio and public code document the technical work directly.",
    overlap:
      "Ran in parallel with music and PR, and with the founding of Chavan Industrial Group in 2024.",
    links: [
      {
        label: "Technical portfolio",
        href: site.portfolio,
        kind: "primary",
      },
      { label: "GitHub", href: site.github },
    ],
  },
  {
    id: "music-pr",
    index: "05",
    period: "2020 — 2023",
    yearLabel: "2020–23",
    title: "Phonk Artist & PR Professional",
    org: "Independent music · Agency public relations",
    track: "Music & Public Relations",
    status: "Foundation",
    summary:
      "Two parallel beginnings: building an independent music identity and learning how stories, reputations and campaigns are actually shaped inside PR agencies.",
    bullets: [],
    chapters: [
      {
        title: "Phonk artist · Independent music & personal branding",
        bullets: [
          "Recognised as one of India's biggest Phonk artists.",
          "Top 20 in Asia.",
          "Featured in 150+ online articles and publications.",
          "Developed personal branding, audience engagement and digital visibility.",
        ],
      },
      {
        title: "PR agency experience · First and second years of engineering",
        bullets: [
          "Bollywood and entertainment PR.",
          "Political PR and election campaigns.",
          "Brand PR and promotional campaigns.",
          "Media relations, publicity and brand positioning.",
        ],
      },
    ],
    note:
      "Agency, client and campaign names are intentionally withheld. They can be discussed directly where confidentiality allows.",
    overlap:
      "PR work continued through the first and second years of engineering, so this track overlaps with the education timeline rather than ending before it.",
    links: [
      {
        label: "Media reference",
        href: site.mediaFeature,
        kind: "primary",
      },
    ],
  },
];

export const experienceAreas: ExperienceArea[] = [
  {
    index: "01",
    title: "Media & Public Relations",
    role: "PR professional & independent artist",
    period: "2020 — 2023",
    summary:
      "Entertainment, political and brand communications, learned inside agencies and applied to an independent music career.",
    highlights: [
      "Bollywood and entertainment PR",
      "Political PR and election campaigns",
      "Brand PR and promotional campaigns",
      "Media relations and brand positioning",
    ],
    link: { label: "Media reference", href: site.mediaFeature },
  },
  {
    index: "02",
    title: "Entrepreneurship",
    role: "Founder — Chavan Industrial Group",
    period: "2024 — 2026",
    summary:
      "Built a trading and supply business from the ground up, with responsibility across sourcing, relationships, negotiation and operations.",
    highlights: [
      "Business establishment and operations",
      "Industrial and textile sourcing",
      "Vendor and client relationships",
      "Commercial operations and branding",
    ],
    link: { label: "chavanindustrialgroup.com", href: site.chavanIndustrial },
  },
  {
    index: "03",
    title: "Corporate Business Development",
    role: "Business Development Associate — Intellipaat",
    period: "June — November 2026",
    summary:
      "Inside sales and consultation in EdTech: understanding a learner's problem, matching it to a course, and managing the conversation to a decision.",
    highlights: [
      "Lead management and follow-ups",
      "Sales funnel optimisation",
      "Objection handling and negotiation",
      "Customer behaviour and conversion analysis",
    ],
    link: { label: "intellipaat.com", href: "https://intellipaat.com/" },
  },
  {
    index: "04",
    title: "Digital Media",
    role: "Founder & Creator — NotScripted.in",
    period: "October 2026 — Present",
    summary:
      "An independent news platform where editorial planning, publishing technology, SEO, audience strategy and AI-assisted production meet.",
    current: true,
    highlights: [
      "Editorial planning and news research",
      "Digital publishing and SEO",
      "Audience development and storytelling",
      "AI-assisted media production",
    ],
    link: { label: "notscripted.in", href: site.notScripted },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "cybersecurity",
    index: "01",
    title: "Cybersecurity",
    description:
      "Security operations, investigation and hands-on assessment — the technical lens behind the reporting.",
    skills: [
      "Microsoft Sentinel",
      "Microsoft Defender",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Kali Linux",
      "Digital Forensics",
    ],
  },
  {
    id: "programming",
    index: "02",
    title: "Programming & Cloud",
    description:
      "The languages, data tools and platforms used to build, query and ship technical work.",
    skills: ["Python", "Java", "MySQL", "GitHub", "AWS", "Azure"],
  },
  {
    id: "media",
    index: "03",
    title: "Media & Communication",
    description:
      "Research, framing and publication — from the first source to the finished story.",
    skills: [
      "Public Relations",
      "Journalism",
      "Research",
      "Storytelling",
      "Content Development",
      "Media Relations",
    ],
  },
  {
    id: "business",
    index: "04",
    title: "Business & Growth",
    description:
      "Commercial context: how attention becomes an audience, and how an audience becomes a business.",
    skills: [
      "Business Development",
      "Lead Management",
      "Sales Strategy",
      "SEO",
      "Digital Marketing",
      "Audience Development",
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "NotScripted.in",
    subtitle: "Independent digital news & media platform",
    year: "2026",
    role: "Founder & Creator",
    description:
      "Conceptualised and developed an independent news publication with its own editorial planning, research, publishing, SEO and audience workflows. Built for digital storytelling, with AI-assisted production practices and sourced reporting at its centre.",
    tags: ["Digital publishing", "Editorial strategy", "SEO", "AI workflows"],
    href: site.notScripted,
    hrefLabel: "Visit the publication",
    theme: "press",
    featured: true,
  },
  {
    index: "02",
    title: "CHAVAN INDUSTRIAL GROUP",
    subtitle: "Industrial, textile & general goods trading",
    year: "2024 — 2026",
    role: "Founder",
    description:
      "Established and operates a proprietorship business across industrial, textile and general goods trading and supply — covering sourcing, vendor relationships, negotiation, commercial operations and the company's website and brand identity.",
    tags: ["Entrepreneurship", "Sourcing", "Operations", "Branding"],
    href: site.chavanIndustrial,
    hrefLabel: "Visit the company",
    theme: "industrial",
  },
  {
    index: "03",
    title: "Cybersecurity Portfolio",
    subtitle: "Technical work, documented",
    year: "2022 — 2026",
    role: "Builder",
    description:
      "A technical portfolio of cybersecurity learning and hands-on projects: security operations, network reconnaissance, threat detection and defensive tooling, built alongside the B.Tech in Cybersecurity Engineering.",
    tags: ["Cybersecurity", "SIEM", "Python", "Networking"],
    href: site.portfolio,
    hrefLabel: "View the technical portfolio",
    theme: "security",
  },
  {
    index: "04",
    title: "Music & Media Recognition",
    subtitle: "Independent Phonk artist",
    year: "2020 — 2023",
    role: "Artist & personal brand",
    description:
      "Built an independent music identity recognised as one of India's biggest in Phonk, with a Top 20 position in Asia and features across 150+ online articles and publications — a practical education in audience, timing and digital visibility.",
    tags: ["Phonk", "Personal branding", "Audience growth"],
    href: site.mediaFeature,
    hrefLabel: "View media reference",
    theme: "waveform",
  },
];

export const rationalePillars = [
  {
    index: "01",
    title: "Technical literacy",
    body:
      "A B.Tech in Cybersecurity Engineering and hands-on security work mean I can follow the architecture, not just the announcement. I ask how the system works, where the data moves and what can fail.",
  },
  {
    index: "02",
    title: "Communication",
    body:
      "PR across entertainment, politics and brands taught me how messages are framed, where narratives travel and why smart people can read the same fact differently.",
  },
  {
    index: "03",
    title: "Commercial context",
    body:
      "Founding a trading business and working in corporate business development taught me to ask who pays, who decides and what a product has to prove before it survives.",
  },
  {
    index: "04",
    title: "Editorial practice",
    body:
      "NotScripted.in is where those instincts meet publication: research, sourcing, editorial planning, SEO and the discipline of shipping a story that can be defended.",
  },
] as const;

export const editorialInterests = [
  { index: "01", title: "AI in Travel", note: "Agents, personalisation, pricing and liability" },
  { index: "02", title: "Travel Technology", note: "Distribution, APIs and booking infrastructure" },
  { index: "03", title: "Aviation Technology", note: "Airline systems, operations and retailing" },
  { index: "04", title: "Digital Payments", note: "Rails, fraud, settlement and cross-border flows" },
  { index: "05", title: "Cybersecurity", note: "Platform risk, data protection and digital trust" },
  { index: "06", title: "Hospitality Technology", note: "Property systems, guest data and revenue management" },
  { index: "07", title: "Travel-Tech Startups", note: "Models, funding and the economics of scale" },
  { index: "08", title: "Automation", note: "Back-office workflows and service design" },
  { index: "09", title: "Business Intelligence", note: "Data products and better operating decisions" },
] as const;

export const articleIdeas: ArticleIdea[] = [
  {
    index: "01",
    title:
      "AI Can Now Book Your Entire Holiday. But Who Is Responsible When It Makes a Mistake?",
    dek:
      "Autonomous booking agents are moving from demos to checkout pages. The unresolved question is liability: when an agent misreads a fare rule, double-books a room or misses a visa deadline, who owns the error — the traveller, the platform, the model provider or the airline?",
    angle:
      "Follow one failed booking across the agent, the API and the terms of service to find where accountability actually sits.",
    tags: ["AI agents", "Consumer protection", "Liability"],
  },
  {
    index: "02",
    title:
      "The Hidden Cybersecurity Risks Behind the World's Growing Online Travel Industry.",
    dek:
      "Travel runs on interconnected APIs, legacy reservation systems and a long chain of intermediaries. Every handoff is a place where credentials, payment data and inventory can be exposed. The story is not another breach report; it is a map of the attack surface.",
    angle:
      "Trace the booking journey from search to settlement and identify the trust boundaries that travellers never see.",
    tags: ["Cybersecurity", "APIs", "Payments"],
  },
  {
    index: "03",
    title:
      "India's Travel-Tech Revolution: Why the Next Battle Is Between Booking Platforms and AI Agents.",
    dek:
      "India's travel market is moving from search-and-compare to delegation. Incumbents own supply, payments and trust; new entrants own the interface. The next phase will be decided by who controls the transaction layer — and who can verify what an agent promises.",
    angle:
      "Map the economics of the agent layer against the incumbents' control of inventory, payments and customer relationships.",
    tags: ["India", "Platforms", "AI agents"],
  },
];

export const contactTopics = [
  "Editorial opportunity",
  "Media & public relations",
  "Business collaboration",
  "Speaking or interview",
  "Something else",
] as const;

import type { WebLevel, CompareCell } from "./websites-data";

export const WEB_LEVELS_EN: WebLevel[] = [
  {
    id: 1,
    slug: "presencial",
    name: "Presence Site",
    tagline: "Professional presence and direct contact.",
    setup: 9900,
    men: 490,
    ideal: ["Local businesses", "Entrepreneurs", "Personal brands", "New businesses"],
    includes: [
      "Professional site or landing page",
      "Responsive design",
      "WhatsApp + contact form",
      "Google Maps + social links",
      "Basic analytics",
      "Basic SEO",
      "1 round of revisions",
    ],
    notInc: ["CRM or scheduling included", "Admin panel", "Login or portal", "API integrations"],
    canAdd: ["Express quote tool", "Simple quote tool", "Advanced form", "Campaign landing page", "Online payments", "Calendly / PMS embed"],
  },
  {
    id: 2,
    slug: "profesional",
    name: "Professional Site",
    tagline: "Solid image and clear commercial structure.",
    setup: 18500,
    men: 890,
    ideal: ["Restaurants", "Repair shops", "Law/consulting firms", "Boutique hotels", "Local brands"],
    includes: [
      "Everything in Presence",
      "Up to 5 pages",
      "Gallery + catalog included",
      "Enhanced forms",
      "Meta Pixel included",
      "Basic newsletter",
      "2 rounds of revisions",
    ],
    notInc: ["CRM or scheduling included", "Admin panel", "Login or portal"],
    canAdd: ["Basic CRM", "Basic scheduling", "Dynamic quote tool", "AI chatbot", "Basic dashboard"],
  },
  {
    id: 3,
    slug: "captacion",
    name: "Lead-Gen Site",
    tagline: "Generate leads and measure your campaigns.",
    setup: 34900,
    men: 1900,
    ideal: ["Clinics", "Construction firms", "Real estate", "Catering", "Professional services"],
    includes: [
      "Everything in Professional",
      "Google Tag Manager",
      "Meta Pixel + Google Ads tracking",
      "Thank-you page",
      "Basic automated email",
      "Campaign landing pages",
      "Sales copy + CTAs",
      "Qualification form",
    ],
    notInc: ["Scheduling or CRM included", "Full admin panel", "Login or portal"],
    canAdd: ["Basic CRM", "Admin panel", "Basic scheduling", "SMS reminders", "Basic dashboard"],
  },
  {
    id: 4,
    slug: "automatizada",
    name: "Automated Site",
    tagline: "Automate appointments, quotes and follow-up.",
    setup: 59500,
    men: 5500,
    ideal: ["Spas", "E-commerce", "Large clinics", "Academies", "On-demand services"],
    includes: [
      "Everything in Lead-Gen",
      "Basic scheduling",
      "Basic lead CRM",
      "Email reminders",
      "Basic lead panel",
      "Simple quote tool",
      "Email automation",
      "Basic dashboard",
    ],
    notInc: ["Client login or portal", "Full admin panel", "Advanced reporting"],
    canAdd: ["Client login", "Advanced scheduling", "Advanced dashboard", "Deposit payments", "Digital signature"],
  },
  {
    id: 5,
    slug: "comercial",
    name: "Commercial System",
    tagline: "Centralize your entire operation.",
    setup: 94900,
    men: 10000,
    ideal: ["Construction firms", "Shipyards", "Agencies", "Companies with multiple employees"],
    includes: [
      "Everything in Automated",
      "Login + roles",
      "Full admin panel",
      "Client portal",
      "Structured database",
      "Documents and history",
      "Basic reporting",
      "Training + support",
    ],
    notInc: [],
    canAdd: ["Advanced dashboard", "Digital signature", "Employee portal", "Advanced reporting", "Multi-branch"],
  },
  {
    id: 6,
    slug: "saas",
    name: "Platform / SaaS",
    tagline: "Multi-user, multi-branch, scalable.",
    setup: null,
    men: null,
    ideal: ["Startups", "Franchises", "Chambers of commerce", "Business groups"],
    includes: [
      "Everything in Commercial System",
      "Multi-user + multi-company",
      "Isolated data",
      "Per-client subdomains",
      "Billing + payment plans",
      "Advanced security",
      "Documentation + roadmap",
    ],
    notInc: [],
    canAdd: [],
  },
];

export const COMPARE_HEADERS_EN = WEB_LEVELS_EN.map((l) => l.name);

export const COMPARE_GROUPS_EN: { group: string; rows: { label: string; vals: CompareCell[] }[] }[] = [
  {
    group: "Design and content",
    rows: [
      { label: "Responsive design", vals: ["yes", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Up to 5 pages", vals: ["no", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Gallery + catalog", vals: ["addon", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Sales copy + CTAs", vals: ["no", "no", "yes", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Lead generation",
    rows: [
      { label: "WhatsApp + contact form", vals: ["yes", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Meta Pixel", vals: ["addon", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Google Tag Manager", vals: ["addon", "addon", "yes", "yes", "yes", "yes"] },
      { label: "Campaign landing pages", vals: ["addon", "addon", "yes", "yes", "yes", "yes"] },
      { label: "Qualification form", vals: ["no", "no", "yes", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Automation",
    rows: [
      { label: "Express quote tool", vals: ["addon", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Simple quote tool", vals: ["addon", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Basic CRM", vals: ["no", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Basic scheduling", vals: ["no", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Email automation", vals: ["addon", "addon", "addon", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Operations",
    rows: [
      { label: "Basic dashboard", vals: ["no", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Admin panel", vals: ["no", "no", "addon", "addon", "yes", "yes"] },
      { label: "Client login", vals: ["no", "no", "no", "addon", "yes", "yes"] },
      { label: "Client portal", vals: ["no", "no", "no", "no", "yes", "yes"] },
      { label: "Operational reporting", vals: ["no", "no", "no", "addon", "yes", "yes"] },
      { label: "Multi-user + multi-company", vals: ["no", "no", "no", "no", "no", "yes"] },
    ],
  },
  {
    group: "Payments and integrations",
    rows: [
      { label: "Online payments", vals: ["addon", "addon", "addon", "addon", "yes", "yes"] },
      { label: "Simple embeds (Calendly, PMS, map)", vals: ["addon", "addon", "addon", "addon", "addon", "addon"] },
      { label: "External integrations", vals: ["custom", "custom", "custom", "custom", "custom", "custom"] },
    ],
  },
];

export const FAQ_WEB_EN = [
  {
    q: "How long does delivery take?",
    a: "It depends on the tier. Presence Site: 7–10 days. Professional: 2–3 weeks. Lead-Gen: 3–4 weeks. Automated and above: 5–10 weeks depending on scope.",
  },
  {
    q: "Is hosting included?",
    a: "Yes. The monthly fee covers hosting, domain (if applicable), monitoring, backups and ongoing support. You don't need to contract anything separately.",
  },
  {
    q: "Who owns the code?",
    a: "The content and brand are 100% yours. We operate the technical infrastructure to guarantee stability and support. If you want to migrate, a data export is provided.",
  },
  {
    q: "How many changes can I request?",
    a: "Each tier includes rounds of revisions during development. After delivery, minor adjustments are covered by monthly support; major redesigns are quoted separately.",
  },
  {
    q: "What does monthly support cover?",
    a: "Operations, maintenance, hosting, monitoring, security, minor updates and uptime oversight. It's not just keeping the site alive — it's keeping it stable.",
  },
  {
    q: "How do payments work?",
    a: "50% to get started, 50% upon delivery. The monthly fee starts once the site is in production.",
  },
  {
    q: "What if I want to upgrade later?",
    a: "We design the tiers to grow with you. You only pay the setup difference for the new tier, with no need to rebuild from scratch.",
  },
  {
    q: "What about third-party costs (Stripe, WhatsApp API, etc.)?",
    a: "These are quoted separately. They're platform fees, not ours. You decide what to activate.",
  },
];

export const OTHER_CATEGORIES_EN = [
  {
    name: "Digital Marketing",
    desc: "Meta · Google · TikTok. Campaigns with tracking, creative and reporting.",
  },
  {
    name: "Social Media Content",
    desc: "Monthly packages of editorial content, reels and photography.",
  },
  {
    name: "Commercial Video & Drone",
    desc: "Video production, commercials and aerial footage for brands.",
  },
  {
    name: "Custom SaaS",
    desc: "Tailor-made software: portals, dashboards and multi-user platforms.",
  },
];

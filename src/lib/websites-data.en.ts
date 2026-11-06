import type { WebLevel, CompareCell } from "./websites-data";
import { WEBSITE_DELIVERY } from "./website-delivery";

export const WEB_LEVELS_EN: WebLevel[] = [
  {
    id: 1,
    slug: "presencial",
    name: "Presence Site",
    tagline: "Professional presence and direct contact.",
    setup: 9900,
    men: 190,
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
    canAdd: [
      "Express quote tool",
      "Simple quote tool",
      "Advanced form",
      "Campaign landing page",
      "Online payments",
      "Calendly / PMS embed",
    ],
  },
  {
    id: 2,
    slug: "profesional",
    name: "Professional Site",
    tagline: "Solid image and clear commercial structure.",
    setup: 18500,
    men: 490,
    ideal: [
      "Restaurants",
      "Repair shops",
      "Law/consulting firms",
      "Boutique hotels",
      "Local brands",
    ],
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
    canAdd: [
      "Basic CRM",
      "Basic scheduling",
      "Dynamic quote tool",
      "AI chatbot",
      "Basic dashboard",
    ],
  },
  {
    id: 3,
    slug: "captacion",
    name: "Lead-Gen Site",
    tagline: "Generate leads and measure your campaigns.",
    setup: 34900,
    men: 590,
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
    men: 890,
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
    canAdd: [
      "Client login",
      "Advanced scheduling",
      "Advanced dashboard",
      "Deposit payments",
      "Digital signature",
    ],
  },
  {
    id: 5,
    slug: "comercial",
    name: "Commercial System",
    tagline: "Centralize your entire operation.",
    setup: 94900,
    men: null,
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
    canAdd: [
      "Advanced dashboard",
      "Digital signature",
      "Employee portal",
      "Advanced reporting",
      "Multi-branch",
    ],
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

export const COMPARE_GROUPS_EN: {
  group: string;
  rows: { label: string; vals: CompareCell[] }[];
}[] = [
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
      {
        label: "Simple embeds (Calendly, PMS, map)",
        vals: ["addon", "addon", "addon", "addon", "addon", "addon"],
      },
      {
        label: "External integrations",
        vals: ["custom", "custom", "custom", "custom", "custom", "custom"],
      },
    ],
  },
];

export const FAQ_WEB_EN = [
  {
    q: "How long does delivery take?",
    a: `${WEBSITE_DELIVERY.en.all} ${WEBSITE_DELIVERY.en.conditions}`,
  },
  {
    q: "Is hosting included?",
    a: "Development and hosting are charged separately. Our optional maintenance includes the hosting and support specified in your proposal. You can also use your own accounts and providers. Domain, licences and third-party usage are identified separately.",
  },
  {
    q: "Who owns the code?",
    a: "The project code, domain and content are yours. You receive the code repository and control of your hosting, analytics and contracted service accounts. You can manage them yourself or select our optional maintenance. Third-party licences are identified in your proposal.",
  },
  {
    q: "How is a Lovable project handed over?",
    a: "We define handover from the start: you control the code repository and, if you stay on Lovable, we transfer the project to your workspace. If you choose another host, we agree on deployment and migration. We review the domain, database, integrations and access; subscriptions and usage charges are yours and are identified in writing.",
  },
  {
    q: "Is maintenance required?",
    a: "No. It is an optional service, separate from development. If selected, it starts at launch. If you prefer to operate the site yourself, you receive the code and control of your accounts; you still pay for hosting, the domain and any services the site needs. Support and subsequent changes are quoted separately without a maintenance plan.",
  },
  {
    q: "How many changes can I request?",
    a: "We agree on development revision rounds in your proposal. After delivery, minor adjustments follow your selected maintenance scope; without maintenance they are quoted separately. Major redesigns have their own scope.",
  },
  {
    q: "What does monthly support cover?",
    a: "Optional maintenance covers the hosting, monitoring, backups and minor adjustments defined in your proposal. Integrations, usage charges and new features are identified separately. Support channels and response times are also agreed.",
  },
  {
    q: "How do payments work?",
    a: "Development is paid 50% to start and 50% on delivery. If selected, monthly maintenance starts at launch. Hosting and third-party services are itemised separately when you manage them yourself.",
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

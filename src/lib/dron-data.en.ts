import type { DronePackage, DroneZone, FaqItem } from "./dron-data";

export const DRONE_PACKAGES_EN: DronePackage[] = [
  {
    id: 1,
    slug: "capture",
    name: "Capture",
    tagline: "Aerial footage of a single location — restaurants, properties, hotels, businesses",
    duration: "Up to 1 hour on site",
    price: 2990,
    ideal: ["Restaurants", "Hotels", "Real estate", "Local businesses"],
    features: [
      "Shot planning",
      "4K capture",
      "1 edited video (30–45 sec) + vertical version",
      "10 selected aerial photos",
      "1 round of revisions",
      "Delivery in 5 business days",
    ],
  },
  {
    id: 2,
    slug: "coverage",
    name: "Coverage",
    tagline: "Aerial documentation of an event — activations, openings, weddings",
    duration: "Up to 4 continuous hours",
    price: 4990,
    ideal: ["Weddings", "Openings", "Brand activations"],
    features: [
      "Everything in Capture",
      "1 edited video (60–90 sec) + vertical version",
      "20 selected aerial photos",
      "2 rounds of revisions",
      "Delivery in 8 business days",
    ],
  },
  {
    id: 3,
    slug: "progress-tracking",
    name: "Progress Tracking",
    tagline: "Aerial record of an ongoing process — construction, development, vineyard growth",
    duration: "Package of 4 visits, agreed cadence",
    price: 8890,
    ideal: ["Construction firms", "Real estate developments", "Vineyards"],
    features: [
      "Before the first visit, we confirm the exact location: most areas can be flown freely, but some (like the radius near an airport) require special AFAC permit management. We'll flag it at the quote stage if your project applies.",
      "Up to 2 hours per visit",
      "1 edited clip per visit, delivered within 72 hrs",
      "1 final summary video (90 sec), 2 rounds of revisions",
      "Cloud-organized material",
      "Extra visit outside the package: $2,490 MXN",
    ],
  },
];

export const DRONE_EXTRAS_EN: string[] = [
  "RAW files (original footage): $999 MXN",
  "Advanced editing — motion graphics, ad cutdowns, sound design: from $3,500 MXN",
  "Extra time on site — 30-minute blocks: $499 each",
  "Additional revision beyond those included: $499 each",
  "Rush delivery (under 72 hrs): +25% on the package",
  "Flight permit management in restricted zones (AFAC/SCT): $999 MXN",
];

export const DRONE_ZONES_EN: DroneZone[] = [
  { zone: "Ensenada and Valle de Guadalupe", charge: "Included" },
  { zone: "Rosarito / Tecate", charge: "+$1,200" },
  { zone: "Tijuana", charge: "+$1,499" },
  { zone: "San Quintín", charge: "+$1,900" },
  { zone: "Mexicali", charge: "+$2,700" },
  { zone: "Outside Baja California", charge: "Quote with travel expenses" },
];

export const DRONE_POLICY_EN: string[] = [
  "Wait time on site counts as contracted time",
  "One free weather-related reschedule; a fee applies after that",
  "If the location falls within a restricted zone (airport radius or other AFAC restriction), it's confirmed before the session — the Permit Management charge in Extras applies",
  "Material includes a usage license for the contracting client — resale or transfer to third parties requires authorization",
  "50% deposit to reserve a date",
];

export const FAQ_DRONE_EN: FaqItem[] = [
  {
    q: "What happens if the weather doesn't allow flying?",
    a: "We reschedule once at no cost. After that, a fee applies.",
  },
  {
    q: "Do I need permits to fly at my location?",
    a: "Most areas can be flown freely. If your location falls inside a restricted area (airport radius or another AFAC restriction), we confirm it with you at the quote stage.",
  },
  {
    q: "Can I use the video in paid campaigns (Meta/Google Ads)?",
    a: "Yes — the material comes with a usage license for the contracting client. Reselling or transferring it to third parties requires authorization.",
  },
  {
    q: "Do you hand over the original (RAW) files?",
    a: "They can be added as an extra ($999 MXN); they're not included by default.",
  },
  {
    q: "What if I need more time on the day of the shoot?",
    a: "It's billed in 30-minute blocks ($499 each). Wait time on site counts as contracted time.",
  },
  {
    q: "How do I lock in a date?",
    a: "With a 50% deposit.",
  },
];

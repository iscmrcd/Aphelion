/**
 * Pricing page content.
 *
 * Every figure shown on /precios is derived from the modules that already
 * power the service pages (WEB_LEVELS, MARKETING_PACKAGES, DRONE_PACKAGES).
 * Nothing is retyped here, so the pricing page cannot drift out of sync with
 * the service pages the way the sitemap did.
 *
 * Agente IA carries no figure because none has been defined. It is presented
 * as scoped-on-request rather than given an invented number.
 */
import { WEB_LEVELS } from "./websites-data";
import { MARKETING_PACKAGES } from "./marketing-data";
import { DRONE_PACKAGES } from "./dron-data";

export type PriceRow = {
  name: string;
  tagline: string;
  taglineEs: string;
  /** One-off amount in MXN, or null when quoted on request. */
  setup: number | null;
  /** Recurring monthly amount in MXN, or null when not applicable. */
  monthly: number | null;
  /** Extra qualifier rendered under the amount. */
  note?: string;
  noteEs?: string;
};

export type PriceBlock = {
  id: string;
  title: string;
  titleEs: string;
  blurb: string;
  blurbEs: string;
  href: string;
  rows: PriceRow[];
  /** Shown when the block has no fixed figures at all. */
  quotedOnly?: boolean;
};

const mxn = (n: number) => n;

export const WEB_BLOCK: PriceBlock = {
  id: "sitios-web",
  title: "Websites",
  titleEs: "Sitios web",
  blurb:
    "Six levels, from a single professional page to a commercial system. Setup is one-off; the monthly covers hosting, maintenance and support.",
  blurbEs:
    "Seis niveles, desde una página profesional hasta un sistema comercial. El setup es único; la mensualidad cubre hosting, mantenimiento y soporte.",
  href: "/servicios/websites",
  rows: WEB_LEVELS.map((l) => ({
    name: l.name,
    tagline: l.tagline,
    taglineEs: l.tagline,
    setup: l.setup === null ? null : mxn(l.setup),
    monthly: l.men === null ? null : mxn(l.men),
  })),
};

export const MARKETING_BLOCK: PriceBlock = {
  id: "marketing",
  title: "Marketing and content",
  titleEs: "Marketing y contenido",
  blurb:
    "Ongoing packages with a minimum term, billed monthly. Ad spend goes directly from you to the platforms and is not included in these figures.",
  blurbEs:
    "Paquetes continuos con plazo mínimo, facturados por mes. La inversión publicitaria la pagas directo a las plataformas y no está incluida en estas cifras.",
  href: "/servicios/marketing",
  rows: MARKETING_PACKAGES.map((p) => ({
    name: p.name,
    tagline: p.tagline,
    taglineEs: p.tagline,
    setup: null,
    monthly: mxn(p.monthly),
    note: `Minimum term ${p.contractMonths} months`,
    noteEs: `Plazo mínimo ${p.contractMonths} meses`,
  })),
};

export const DRONE_BLOCK: PriceBlock = {
  id: "video-dron",
  title: "Drone video and photography",
  titleEs: "Video y foto con dron",
  blurb:
    "Priced per production, not monthly. Travel outside Ensenada carries a zone charge listed on the service page.",
  blurbEs:
    "Se cobra por producción, no por mes. El traslado fuera de Ensenada tiene un cargo por zona que aparece en la página del servicio.",
  href: "/servicios/video-con-dron",
  rows: DRONE_PACKAGES.map((p) => ({
    name: p.name,
    tagline: p.tagline,
    taglineEs: p.tagline,
    setup: mxn(p.price),
    monthly: null,
    note: p.duration,
    noteEs: p.duration,
  })),
};

export const AGENTE_BLOCK: PriceBlock = {
  id: "agente-ia",
  title: "AI Agent",
  titleEs: "Agente IA",
  blurb:
    "No published figure yet. Price depends on message volume, which integrations you need and how far the agent is customised, so it is scoped after a call.",
  blurbEs:
    "Todavía sin cifra publicada. El precio depende del volumen de mensajes, de qué integraciones necesitas y de qué tanto se personaliza el agente, así que se define después de una llamada.",
  href: "/servicios/agente-ia",
  rows: [],
  quotedOnly: true,
};

export const PRICE_BLOCKS: PriceBlock[] = [WEB_BLOCK, MARKETING_BLOCK, DRONE_BLOCK, AGENTE_BLOCK];

/** Lowest published setup figure, used for the "from" line in the hero. */
export const LOWEST_WEB_SETUP = Math.min(
  ...WEB_LEVELS.filter((l) => l.setup !== null).map((l) => l.setup as number),
);

export const PRECIOS_FAQ = [
  {
    q: "Why is there no single price?",
    qEs: "¿Por qué no hay un solo precio?",
    a: "Because the work is not one thing. A one-page site and a commercial system with integrations are different projects, and quoting them the same would mean overcharging one and underdelivering the other. The packages here are the honest middle ground: real figures for defined scopes.",
    aEs: "Porque el trabajo no es una sola cosa. Un sitio de una página y un sistema comercial con integraciones son proyectos distintos, y cotizarlos igual significaría cobrarle de más a uno y quedarle mal al otro. Los paquetes de aquí son el punto medio honesto: cifras reales para alcances definidos.",
  },
  {
    q: "Is the final price always one of these?",
    qEs: "¿El precio final siempre es uno de estos?",
    a: "These are the starting points. Every project goes through a short evaluation first, because the accurate number depends on what you already have, what has to be migrated, and what the bottleneck actually is. Sometimes that evaluation concludes you need less than you came in asking for.",
    aEs: "Estos son los puntos de partida. Cada proyecto pasa primero por una evaluación corta, porque el número exacto depende de qué ya tienes, qué hay que migrar y cuál es realmente el cuello de botella. A veces esa evaluación concluye que necesitas menos de lo que llegaste pidiendo.",
  },
  {
    q: "Does the price include ad spend?",
    qEs: "¿El precio incluye la inversión en publicidad?",
    a: "No. Management and ad spend are quoted separately and the spend goes directly from you to Google or Meta. We do it this way so you always know which is which, and because charging a percentage of spend rewards an agency for spending more of your money.",
    aEs: "No. La gestión y la inversión publicitaria se cotizan por separado y la inversión la pagas directo a Google o Meta. Lo hacemos así para que siempre sepas cuál es cuál, y porque cobrar un porcentaje de la inversión premia a la agencia por gastar más de tu dinero.",
  },
  {
    q: "Do you work with businesses in Tijuana?",
    qEs: "¿Trabajan con negocios en Tijuana?",
    a: "Yes. We serve Tijuana, Rosarito, Tecate, Mexicali and Ensenada as a service-area business, and these prices are the same across all of them. Drone work is the exception, since it carries a travel charge by zone.",
    aEs: "Sí. Atendemos Tijuana, Rosarito, Tecate, Mexicali y Ensenada como negocio de área de servicio, y estos precios son los mismos en todas. El trabajo con dron es la excepción, porque lleva un cargo de traslado por zona.",
  },
  {
    q: "What happens if I need to move up a level later?",
    qEs: "¿Qué pasa si después necesito subir de nivel?",
    a: "You pay the difference in setup between the levels rather than starting over. The levels were designed to stack for that reason.",
    aEs: "Pagas la diferencia de setup entre los niveles en lugar de empezar de cero. Los niveles se diseñaron para acumularse justo por eso.",
  },
  {
    q: "Do I own what you build?",
    qEs: "¿Es mío lo que construyen?",
    a: "Yes: the domain, the code, the hosting account, the ad accounts and the analytics. Worth asking any agency before signing, because holding a client's domain is a real practice in this industry.",
    aEs: "Sí: el dominio, el código, la cuenta de hosting, las cuentas de anuncios y la analítica. Vale la pena preguntárselo a cualquier agencia antes de firmar, porque retener el dominio de un cliente es una práctica real en esta industria.",
  },
];

/**
 * Client-safe display data for the WhatsApp IA demo agents.
 *
 * This module IS bundled for the browser (the chat component needs names,
 * greetings and starters), so it deliberately contains no system prompts.
 * Those live in whatsapp-ia-prompts.ts, which only the server imports.
 *
 * Every agent runs on the same engine (claude-haiku-4-5) and differs only in
 * context. The businesses below are FICTIONAL demo data used to make the
 * interactive demo feel real — none of it describes a real Aphelion client,
 * and none of it is Aphelion's own pricing.
 */

import { Building2, Calculator, Stethoscope, type LucideIcon } from "lucide-react";

export type AgentType = "real-estate" | "health" | "professional";

export type DemoAgent = {
  id: AgentType;
  /** lucide icon, matching the iconography used across the rest of the site. */
  Icon: LucideIcon;
  industry: string;
  industryEs: string;
  role: string;
  roleEs: string;
  /** Fictional business the agent represents. */
  businessName: string;
  /** Initials for the chat avatar. */
  initials: string;
  /** Opening message shown before the visitor types anything. */
  greeting: string;
  greetingEs: string;
  /** Tappable suggested openers. */
  starters: string[];
  startersEs: string[];
};

export const DEMO_AGENTS: Record<AgentType, DemoAgent> = {
  "real-estate": {
    id: "real-estate",
    Icon: Building2,
    industry: "Real Estate",
    industryEs: "Real Estate",
    role: "AI sales advisor",
    roleEs: "Asesor de ventas IA",
    businessName: "Costa Azul Residencial",
    initials: "CA",
    greeting:
      "Hey! 👋 I'm Dani from Costa Azul Residencial, here in Ensenada. Are you looking for a lot to build on, or more as an investment?",
    greetingEs:
      "¡Qué tal! 👋 Soy Dani, de Costa Azul Residencial, aquí en Ensenada. ¿Buscas un lote para construir o más como inversión?",
    starters: [
      "What lots are available?",
      "How much is the cheapest one?",
      "Can I visit this weekend?",
    ],
    startersEs: [
      "¿Qué lotes tienen disponibles?",
      "¿Cuál es el más económico?",
      "¿Puedo ir a verlo el sábado?",
    ],
  },

  health: {
    id: "health",
    Icon: Stethoscope,
    industry: "Healthcare",
    industryEs: "Salud",
    role: "AI reception + scheduling",
    roleEs: "Recepción + agenda IA",
    businessName: "Clínica Sonrisa Ensenada",
    initials: "CS",
    greeting: "Hello, good day 😊 You've reached Clínica Sonrisa Ensenada. How may I help you?",
    greetingEs: "Hola, buen día 😊 Le saluda Clínica Sonrisa Ensenada. ¿En qué le puedo ayudar?",
    starters: ["I'd like to book a cleaning", "How much is a check-up?", "Do you do braces?"],
    startersEs: [
      "Quiero agendar una limpieza",
      "¿Cuánto cuesta una consulta?",
      "¿Manejan ortodoncia?",
    ],
  },

  professional: {
    id: "professional",
    Icon: Calculator,
    industry: "Professional Services",
    industryEs: "Servicios Profesionales",
    role: "AI quoting assistant",
    roleEs: "Asistente de cotización IA",
    businessName: "Núcleo Contable",
    initials: "NC",
    greeting:
      "Hello, Núcleo Contable here 👋 We handle accounting and admin for SMBs. Tell me a bit about your business and I'll put together a preliminary quote.",
    greetingEs:
      "Hola, le saluda Núcleo Contable 👋 Llevamos contabilidad y administración para pymes. Cuénteme un poco de su negocio y le armo una cotización preliminar.",
    starters: [
      "How much for monthly accounting?",
      "I have 8 employees",
      "What does the service include?",
    ],
    startersEs: [
      "¿Cuánto cobran al mes?",
      "Tengo una empresa con 8 empleados",
      "¿Qué incluye el servicio?",
    ],
  },
};

export const AGENT_ORDER: AgentType[] = ["real-estate", "health", "professional"];

export function isAgentType(value: unknown): value is AgentType {
  return value === "real-estate" || value === "health" || value === "professional";
}

/**
 * FAQ for the WhatsApp IA service page. Spanish is the default field (q/a) and
 * English carries the "En" suffix, matching BlogFaqItem so the shape is
 * familiar across the codebase.
 *
 * Deliberately contains no prices: pricing is still undefined and the page
 * quotes per implementation.
 */
export type WhatsAppFaqItem = { q: string; qEn: string; a: string; aEn: string };

export const WHATSAPP_IA_FAQ: WhatsAppFaqItem[] = [
  {
    q: "¿Cuál es la diferencia real entre Automatizado e IA Conversacional?",
    qEn: "What's the real difference between Automated and Conversational AI?",
    a: "El Automatizado responde de un menú de opciones fijas: si la pregunta está en el árbol, contesta; si no, pasa a una persona. La IA Conversacional entiende lo que escribe el cliente aunque no esté en ningún guion, mantiene el contexto de toda la conversación y puede calificar, agendar o cotizar. Si tus preguntas se repiten, el automatizado te sale más barato. Si cada conversación es distinta, ahí es donde la IA justifica el costo.",
    aEn: "Automated answers from a fixed menu: if the question is in the tree it replies, if not it hands off to a person. Conversational AI understands what the customer writes even when it isn't scripted, holds context across the whole conversation, and can qualify, book or quote. If your questions repeat, automated is cheaper. If every conversation is different, that's where AI earns its cost.",
  },
  {
    q: "¿Puedo empezar con Automatizado y subir a IA después?",
    qEn: "Can I start with Automated and upgrade to AI later?",
    a: "Sí, y es un camino común. Empezar con flujos fijos te sirve para ver qué pregunta realmente la gente durante unas semanas. Esas conversaciones reales son justo el material que se usa después para entrenar el contexto del agente de IA, así que el trabajo inicial no se tira.",
    aEn: "Yes, and it's a common path. Starting with fixed flows lets you see what people actually ask over a few weeks. Those real conversations are exactly the material used later to shape the AI agent's context, so the initial work isn't wasted.",
  },
  {
    q: "¿Qué pasa si el agente no sabe algo?",
    qEn: "What happens when the agent doesn't know something?",
    a: "Está instruido para no inventar. Cuando el dato no está en su contexto, lo dice y ofrece pasar la conversación a una persona del equipo, en vez de improvisar una respuesta que después te cueste un cliente molesto. Esa regla no es opcional para el agente.",
    aEn: "It's instructed not to make things up. When the information isn't in its context it says so and offers to hand the conversation to someone on your team, instead of improvising an answer that costs you an upset customer later. That rule isn't optional for the agent.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    qEn: "How long does implementation take?",
    a: "Un flujo automatizado sencillo puede estar operando en días. Un agente de IA toma más, porque la mayor parte del tiempo no es técnica: es reunir tu información real (servicios, precios, políticas, cómo hablas con tus clientes) y afinar el agente hasta que suene a tu negocio. El cuello de botella casi siempre es esa información, no el desarrollo.",
    aEn: "A simple automated flow can be running within days. An AI agent takes longer, because most of that time isn't technical: it's gathering your real information (services, pricing, policies, how you talk to customers) and tuning the agent until it sounds like your business. The bottleneck is almost always that information, not the development.",
  },
  {
    q: "¿Funciona con mi WhatsApp Business actual?",
    qEn: "Does it work with my current WhatsApp Business?",
    a: "Se conecta a través de la API oficial de WhatsApp Business, que es lo que permite que un sistema responda de forma automática. Si hoy usas la app de WhatsApp Business en un celular, hay un paso de migración del número hacia la API. Conservas el número; lo que cambia es cómo se administra. Lo revisamos contigo antes de cotizar porque afecta el alcance del proyecto.",
    aEn: "It connects through the official WhatsApp Business API, which is what allows a system to reply automatically. If you're currently using the WhatsApp Business app on a phone, there's a migration step to move the number onto the API. You keep the number; what changes is how it's administered. We review this with you before quoting because it affects project scope.",
  },
  {
    q: "¿Qué tan seguro es? ¿Quién puede ver las conversaciones?",
    qEn: "How secure is it? Who can see the conversations?",
    a: "Las conversaciones quedan en la infraestructura que se define contigo, y el acceso es de tu equipo y del nuestro para dar soporte. Las llaves de los servicios viven solo del lado del servidor, nunca en el navegador del visitante. Si manejas datos sensibles, como en salud, eso cambia el diseño desde el inicio y hay que hablarlo antes de cotizar, no después.",
    aEn: "Conversations live in infrastructure defined with you, and access belongs to your team plus ours for support. Service keys live server-side only, never in the visitor's browser. If you handle sensitive data, as in healthcare, that changes the design from the start and needs to be discussed before quoting, not after.",
  },
  {
    q: "¿El agente puede agendar citas o solo responder preguntas?",
    qEn: "Can the agent book appointments, or only answer questions?",
    a: "Puede agendar, y es de los usos que más rinde. Requiere conectarlo a tu calendario o sistema de citas, y esa integración es una de las cosas que definen el precio final. En la demo de esta página el agenda es simulado, para que veas el flujo sin conectar nada.",
    aEn: "It can book, and it's one of the highest-return uses. It requires connecting it to your calendar or scheduling system, and that integration is one of the things that determines final pricing. In this page's demo the scheduling is simulated, so you can see the flow without connecting anything.",
  },
];

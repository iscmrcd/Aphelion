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

export type AgentType = "real-estate" | "health" | "professional";

export type DemoAgent = {
  id: AgentType;
  emoji: string;
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
    emoji: "🏢",
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
    emoji: "🦷",
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
    emoji: "📊",
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

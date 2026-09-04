import haimaDesk from "@/assets/portfolio/haima-desk.png.asset.json";
import haimaIpad from "@/assets/portfolio/haima-ipad.png.asset.json";
import haimaIphone from "@/assets/portfolio/haima-iphone.png.asset.json";
import velportHero from "@/assets/portfolio/velport-hero.jpg.asset.json";
import velportWork from "@/assets/portfolio/velport-work.jpg.asset.json";
import velportProcess from "@/assets/portfolio/velport-process.jpg.asset.json";
import velportMobile from "@/assets/portfolio/velport-mobile.jpg.asset.json";

export type PortfolioProject = {
  id: string;
  name: string;
  /** Short descriptor shown under the name */
  type: string;
  typeEn: string;
  /** 3:4 cover image URL. Falls back to a styled placeholder when empty. */
  cover?: string;
  /** Additional project photos shown in the lightbox (3:4 works best). */
  photos: string[];
  /** Live site URL, if public. */
  url?: string;
  /** Project metadata fields */
  client?: string;
  location?: string;
  diagnosis?: string;
  solution?: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "haima-banco-de-sangre",
    name: "HAIMA Banco de Sangre",
    type: "Sistema web + IA",
    typeEn: "Web system + AI",
    client: "HAIMA Banco de Sangre",
    location: "Tijuana",
    diagnosis:
      "25 años operando en Tijuana sin infraestructura digital. Alta dependencia de llamadas, conmutador y consultas manuales para verificar disponibilidad y agendar donadores.",
    solution:
      "Panel de inventario en vivo con sincronización pública, agenda de citas 24/7, asistente con IA en español e inglés, filtro de 8 preguntas previas y recordatorios por email, SMS y WhatsApp.",
    cover: haimaDesk.url,
    photos: [haimaIpad.url, haimaIphone.url],
    url: "https://haima.health/",
  },
  {
    id: "velport-shipyard",
    name: "Velport Shipyard",
    type: "Web de servicios navales",
    typeEn: "Yacht refit & repair website",
    client: "Velport Shipyard",
    location: "Ensenada",
    diagnosis:
      "30 años operando en Ensenada con una presencia digital que no transmitía precisión, confianza ni control. La experiencia previa no acompañaba la expectativa de propietarios de yachts que buscan refit y reparación de alto nivel.",
    solution:
      "Replanteamiento digital desde cero: arquitectura orientada a conversión, UX/UI minimalista, mobile-first, SEO técnico y contenido estratégico, presentación de servicios especializados y lead journey preparado para campañas de Google y Meta.",
    cover: velportHero.url,
    photos: [velportWork.url, velportProcess.url, velportMobile.url],
    url: "https://www.velportastilleros.com/",
  },
];

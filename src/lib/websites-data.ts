export type WebLevel = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  setup: number | null;
  men: number | null;
  ideal: string[];
  includes: string[];
  notInc: string[];
  canAdd: string[];
};

export const WEB_LEVELS: WebLevel[] = [
  {
    id: 1,
    slug: "presencial",
    name: "Web Presencial",
    tagline: "Presencia profesional y contacto directo.",
    setup: 9900,
    men: 490,
    ideal: ["Negocios locales", "Emprendedores", "Marcas personales", "Negocios nuevos"],
    includes: [
      "Sitio o landing profesional",
      "Diseño responsive",
      "WhatsApp + formulario",
      "Google Maps + redes",
      "Analytics básico",
      "SEO básico",
      "1 ronda de cambios",
    ],
    notInc: ["CRM o agenda incluidos", "Panel administrativo", "Login o portal", "Integraciones API"],
    canAdd: ["Cotizador simple", "Formulario avanzado", "Landing para campaña", "Pagos en línea", "Tracking avanzado"],
  },
  {
    id: 2,
    slug: "profesional",
    name: "Web Profesional",
    tagline: "Imagen sólida y estructura comercial clara.",
    setup: 18500,
    men: 890,
    ideal: ["Restaurantes", "Talleres", "Despachos", "Hoteles boutique", "Marcas locales"],
    includes: [
      "Todo lo de Presencial",
      "Hasta 5 páginas",
      "Galería + catálogo incluidos",
      "Formularios mejorados",
      "Meta Pixel incluido",
      "Newsletter básico",
      "2 rondas de cambios",
    ],
    notInc: ["CRM o agenda incluidos", "Panel administrativo", "Login o portal"],
    canAdd: ["CRM básico", "Agenda básica", "Cotizador dinámico", "Chatbot con IA", "Dashboard básico"],
  },
  {
    id: 3,
    slug: "captacion",
    name: "Web de Captación",
    tagline: "Genera prospectos y mide campañas.",
    setup: 34900,
    men: 1900,
    ideal: ["Clínicas", "Constructoras", "Inmobiliarias", "Catering", "Servicios profesionales"],
    includes: [
      "Todo lo de Profesional",
      "Google Tag Manager",
      "Meta Pixel + Google Ads tracking",
      "Página de gracias",
      "Correo automático básico",
      "Landing para campañas",
      "Copy de venta + CTAs",
      "Formulario de calificación",
    ],
    notInc: ["Agenda o CRM incluidos", "Panel administrativo completo", "Login o portal"],
    canAdd: ["CRM básico", "Panel administrativo", "Agenda básica", "Recordatorios SMS", "Dashboard básico"],
  },
  {
    id: 4,
    slug: "automatizada",
    name: "Web Automatizada",
    tagline: "Automatiza citas, cotizaciones y seguimiento.",
    setup: 59500,
    men: 5500,
    ideal: ["Spas", "E-commerce", "Clínicas grandes", "Academias", "Servicios a domicilio"],
    includes: [
      "Todo lo de Captación",
      "Agenda básica",
      "CRM básico de prospectos",
      "Recordatorios por email",
      "Panel básico de leads",
      "Cotizador simple",
      "Automatización de correos",
      "Dashboard básico",
    ],
    notInc: ["Login o portal de cliente", "Panel admin completo", "Reportes avanzados"],
    canAdd: ["Login de clientes", "Agenda avanzada", "Dashboard avanzado", "Pagos de anticipo", "Firma digital"],
  },
  {
    id: 5,
    slug: "comercial",
    name: "Sistema Comercial",
    tagline: "Centraliza tu operación completa.",
    setup: 94900,
    men: 10000,
    ideal: ["Constructoras", "Astilleros", "Agencias", "Empresas con varios empleados"],
    includes: [
      "Todo lo de Automatizada",
      "Login + roles",
      "Panel administrativo completo",
      "Portal de cliente",
      "Base de datos estructurada",
      "Documentos e historial",
      "Reportes básicos",
      "Capacitación + soporte",
    ],
    notInc: [],
    canAdd: ["Dashboard avanzado", "Firma digital", "Portal de empleados", "Reportes avanzados", "Multi-sucursal"],
  },
  {
    id: 6,
    slug: "saas",
    name: "Plataforma / SaaS",
    tagline: "Multiusuario, multisucursal, escalable.",
    setup: null,
    men: null,
    ideal: ["Startups", "Franquicias", "Cámaras", "Grupos empresariales"],
    includes: [
      "Todo lo de Sistema Comercial",
      "Multiusuario + multiempresa",
      "Datos aislados",
      "Subdominios por cliente",
      "Billing + planes de pago",
      "Seguridad avanzada",
      "Documentación + roadmap",
    ],
    notInc: [],
    canAdd: [],
  },
];

export type CompareCell = "yes" | "addon" | "no" | "custom";

export const COMPARE_HEADERS = WEB_LEVELS.map((l) => l.name);

export const COMPARE_GROUPS: { group: string; rows: { label: string; vals: CompareCell[] }[] }[] = [
  {
    group: "Diseño y contenido",
    rows: [
      { label: "Diseño responsive", vals: ["yes", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Hasta 5 páginas", vals: ["no", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Galería + catálogo", vals: ["addon", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Copy de venta + CTAs", vals: ["no", "no", "yes", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Captación",
    rows: [
      { label: "WhatsApp + formulario", vals: ["yes", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Meta Pixel", vals: ["addon", "yes", "yes", "yes", "yes", "yes"] },
      { label: "Google Tag Manager", vals: ["addon", "addon", "yes", "yes", "yes", "yes"] },
      { label: "Landing para campañas", vals: ["addon", "addon", "yes", "yes", "yes", "yes"] },
      { label: "Formulario de calificación", vals: ["no", "no", "yes", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Automatización",
    rows: [
      { label: "Cotizador simple", vals: ["addon", "addon", "addon", "yes", "yes", "yes"] },
      { label: "CRM básico", vals: ["no", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Agenda básica", vals: ["no", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Automatización de correos", vals: ["addon", "addon", "addon", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Operación",
    rows: [
      { label: "Dashboard básico", vals: ["no", "addon", "addon", "yes", "yes", "yes"] },
      { label: "Panel administrativo", vals: ["no", "no", "addon", "addon", "yes", "yes"] },
      { label: "Login de clientes", vals: ["no", "no", "no", "addon", "yes", "yes"] },
      { label: "Portal de cliente", vals: ["no", "no", "no", "no", "yes", "yes"] },
      { label: "Reportes operativos", vals: ["no", "no", "no", "addon", "yes", "yes"] },
      { label: "Multiusuario + multiempresa", vals: ["no", "no", "no", "no", "no", "yes"] },
    ],
  },
  {
    group: "Pagos e integraciones",
    rows: [
      { label: "Pagos en línea", vals: ["addon", "addon", "addon", "addon", "yes", "yes"] },
      { label: "Integraciones externas", vals: ["custom", "custom", "custom", "custom", "custom", "custom"] },
    ],
  },
];

export const FAQ_WEB = [
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Depende del nivel. Web Presencial: 7–10 días. Profesional: 2–3 semanas. Captación: 3–4 semanas. Automatizada y superiores: 5–10 semanas según alcance.",
  },
  {
    q: "¿El hosting está incluido?",
    a: "Sí. La mensualidad cubre hosting, dominio (si aplica), monitoreo, backups y soporte continuo. No tienes que contratar nada por fuera.",
  },
  {
    q: "¿De quién es el código?",
    a: "El contenido y la marca son 100% tuyos. La infraestructura técnica la operamos nosotros para garantizar estabilidad y soporte. Si quieres migrar, se entrega export de datos.",
  },
  {
    q: "¿Cuántos cambios puedo pedir?",
    a: "Cada nivel incluye rondas de cambios durante el desarrollo. Después de entregar, los ajustes menores entran dentro del soporte mensual; los rediseños grandes se cotizan aparte.",
  },
  {
    q: "¿Qué cubre el soporte mensual?",
    a: "Operación, mantenimiento, hosting, monitoreo, seguridad, actualizaciones menores y supervisión del funcionamiento. No es solo dejar la página viva — es mantenerla estable.",
  },
  {
    q: "¿Cómo son los pagos?",
    a: "50% para arrancar, 50% contra entrega. La mensualidad inicia cuando el sitio está en producción.",
  },
  {
    q: "¿Y si quiero subir de nivel después?",
    a: "Diseñamos los niveles para que crezcan contigo. Solo pagas la diferencia del setup correspondiente al nuevo nivel, sin reconstruir desde cero.",
  },
  {
    q: "¿Qué pasa con costos de terceros (Stripe, WhatsApp API, etc.)?",
    a: "Se informan por separado. Son cuotas de las plataformas, no nuestras. Tú decides qué activar.",
  },
];

export const OTHER_CATEGORIES = [
  {
    name: "Marketing Digital",
    desc: "Meta · Google · TikTok. Campañas con tracking, creatividades y reportes.",
  },
  {
    name: "Contenido para Redes",
    desc: "Paquetes mensuales de contenido editorial, reels y fotografía.",
  },
  {
    name: "Video Comercial & Drone",
    desc: "Producción de video, comerciales y tomas aéreas para marcas.",
  },
  {
    name: "SaaS Personalizado",
    desc: "Software a medida: portales, dashboards y plataformas multiusuario.",
  },
];

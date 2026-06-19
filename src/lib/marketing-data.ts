export type MarketingPackage = {
  id: number;
  slug: string;
  vol: string;
  name: string;
  tagline: string;
  weekly: number;
  monthly: number;
  contractMonths: number;
  forWho: string;
  ideal: string[];
  objective: string;
  outcomes: string[];
  deliverables: { group: string; items: string[] }[];
  equipment: string[];
  notIncluded: string[];
  adSpend?: string;
  badge?: string;
};

export const MARKETING_PACKAGES: MarketingPackage[] = [
  {
    id: 1,
    slug: "presencia",
    vol: "Vol.01",
    name: "Presencia",
    tagline: "Redes activas, profesionales y coherentes — sin que tú las cuides.",
    weekly: 1490,
    monthly: 6450,
    contractMonths: 3,
    forWho:
      "Negocios locales con clientes constantes que no tienen tiempo ni equipo para crear contenido. No buscan crecer agresivamente todavía — buscan verse bien, mantener redes activas y proyectar confianza cuando alguien nuevo los busca en redes.",
    ideal: [
      "Restaurantes y cafeterías",
      "Spas y salones",
      "Boutiques locales",
      "Consultorios",
      "Barberías",
      "Marcas personales",
      "Servicios establecidos",
    ],
    objective:
      "Mantener una presencia digital profesional, activa y coherente que proyecte confianza y haga que los clientes potenciales validen la marca antes de visitar o contactar.",
    outcomes: [
      "Redes activas y bien cuidadas sin que tengas que hacerlo tú",
      "Imagen más profesional que la mayoría de tu competencia local",
      "Contenido alineado con tu marca, estilo y tono",
      "Mayor confianza cuando alguien nuevo llega a tu perfil",
      "Tu historia bien contada, visualmente",
    ],
    deliverables: [
      {
        group: "Contenido mensual",
        items: [
          "Planeación mensual (calendario editorial)",
          "9 posts mensuales (fotografía profesional)",
          "3 reels mensuales",
          "Stories semanales promocionales",
          "1 sesión fotográfica profesional al mes",
          "Edición y producción de todo el contenido",
          "Copywriting para cada publicación",
          "Diseño gráfico básico",
          "Programación y publicación",
          "Optimización visual del feed y perfil",
        ],
      },
    ],
    equipment: [
      "Cámara full frame",
      "Lente fijo 1.4",
      "Softbox y luces continuas",
      "Micrófono inalámbrico",
      "Edición con corrección de color de marca",
    ],
    notIncluded: [
      "Campañas pagadas (Meta Ads)",
      "Video aéreo",
      "Estabilizador cinematográfico",
      "Google Ads",
      "Página web",
    ],
  },
  {
    id: 2,
    slug: "crecimiento",
    vol: "Vol.02",
    name: "Crecimiento",
    tagline: "Atrae clientes nuevos con contenido real y campañas que sí funcionan.",
    weekly: 2490,
    monthly: 10780,
    contractMonths: 6,
    badge: "Popular",
    forWho:
      "Negocios que ya pasaron la etapa de solo \"estar presentes\" y quieren usar sus redes para atraer clientes nuevos activamente. Están listos para invertir en publicidad y necesitan que alguien lo haga bien — con contenido real, no genérico ni de banco de imágenes.",
    ideal: [
      "Restaurantes en crecimiento",
      "Hoteles boutique",
      "Wellness premium",
      "Clínicas estéticas",
      "Hospitality",
      "Mercado BC / SoCal",
    ],
    objective:
      "Crecer la audiencia, generar prospectos nuevos y construir una marca competitiva con producción de nivel superior más campañas en Meta Ads que funcionen porque el contenido detrás es real.",
    outcomes: [
      "Más alcance y visibilidad con clientes potenciales nuevos",
      "Marca más sólida y competitiva visualmente",
      "Campañas en Meta que trabajan en conjunto con el contenido",
      "Mayor autoridad en tu categoría local y regional",
      "Producción de nivel superior: movimiento, luces, tomas aéreas",
      "Datos reales de qué funciona y qué no",
    ],
    deliverables: [
      {
        group: "Contenido",
        items: [
          "Estrategia mensual de contenido",
          "12 posts mensuales (foto profesional + gráfico)",
          "5 reels mensuales (estabilizador, movimiento y luces)",
          "1 toma aérea con drone al mes",
          "Stories semanales activas",
          "2 sesiones foto/video al mes",
          "Edición completa con corrección de color",
          "Copywriting y diseño gráfico promocional",
          "Programación de publicaciones",
          "Optimización visual de perfiles IG y Facebook",
        ],
      },
      {
        group: "Campañas Meta Ads",
        items: [
          "Configuración de Meta Business Manager",
          "Campañas activas en Meta Ads",
          "Segmentación de públicos objetivo",
          "Optimización mensual",
          "Reporte mensual de resultados",
        ],
      },
    ],
    equipment: [
      "Cámara full frame",
      "Cámara móvil en LOG (segunda cámara)",
      "Lente fijo 1.4 y telefoto",
      "Estabilizador cinematográfico",
      "Drone",
      "Softbox y luces continuas",
      "Flash de estudio",
      "Micrófono inalámbrico",
    ],
    adSpend:
      "La inversión en Meta Ads corre por cuenta del cliente, directo a la plataforma. Nosotros la administramos. Mínimo recomendado: $3,000–$8,000 MXN/mes.",
    notIncluded: [
      "Google Ads o TikTok Ads",
      "Página web",
      "Video comercial master",
      "Funnels o automatizaciones",
    ],
  },
  {
    id: 3,
    slug: "brand-partner",
    vol: "Vol.03",
    name: "Brand Partner",
    tagline: "Tu departamento de marketing completo: contenido, campañas, web y funnels.",
    weekly: 5490,
    monthly: 23770,
    contractMonths: 12,
    forWho:
      "Marcas que entienden que una estrategia digital real necesita contenido de calidad, campañas bien manejadas y una web que convierta — todo trabajando juntos. En lugar de contratar fotógrafo, editor, community manager, especialista en ads y desarrollador por separado, tienen todo en un solo equipo estratégico.",
    ideal: [
      "Restaurantes premium",
      "Grupos restauranteros",
      "Hoteles y resorts",
      "Clínicas de alto ticket",
      "Marcas en expansión regional",
    ],
    objective:
      "Construir un ecosistema digital completo — contenido + campañas + web + automatizaciones — que funcione como un departamento de marketing integrado con dirección creativa y estrategia de crecimiento real.",
    outcomes: [
      "Control total de tu imagen digital en todos los canales",
      "Campañas que funcionan porque el contenido detrás es real",
      "Web y landing pages que generan y califican prospectos",
      "Funnels que trabajan mientras tú operas tu negocio",
      "Marca preparada para escalar regionalmente",
      "Data real para tomar decisiones de negocio",
    ],
    deliverables: [
      {
        group: "Producción de contenido",
        items: [
          "Estrategia integral mensual (contenido + campañas + web)",
          "16 posts mensuales (foto + gráfico)",
          "8 reels mensuales (producción completa)",
          "Stories activas semanales",
          "Creatividades publicitarias (videos, carruseles, stills)",
          "2–3 sesiones foto/video al mes",
          "Video aéreo con drone según calendario",
          "Dirección creativa y branding",
          "Diseño gráfico comercial y promocional",
          "Cobertura de eventos y lanzamientos",
        ],
      },
      {
        group: "Campañas digitales",
        items: [
          "Meta Ads — administración completa",
          "Google Ads — Search y Display",
          "TikTok Ads según perfil de marca",
          "Pixel, Google Analytics y Tag Manager",
          "Segmentación avanzada y retargeting",
          "Optimización continua",
          "Reporte mensual de ROI",
        ],
      },
      {
        group: "Web y conversión",
        items: [
          "Página web profesional enfocada en conversión (incluida)",
          "Landing pages por campaña o producto",
          "Funnels de captación de prospectos",
          "Formularios y automatizaciones de seguimiento",
          "WhatsApp o email marketing básico",
          "Soporte prioritario",
        ],
      },
    ],
    equipment: [
      "Cámara full frame",
      "Cámara móvil en LOG",
      "Lente fijo 1.2 y 1.4",
      "Lente telefoto",
      "Estabilizador cinematográfico",
      "Drone",
      "Softbox, luces continuas y flash de estudio",
      "Micrófono inalámbrico",
      "Edición color grade nivel cine",
    ],
    adSpend:
      "Pauta directo del cliente a las plataformas. Nosotros la administramos. Mínimo recomendado: $8,000–$20,000 MXN/mes según objetivos.",
    notIncluded: [],
  },
  {
    id: 4,
    slug: "produccion-premium",
    vol: "Vol.04",
    name: "Producción Premium",
    tagline: "Producción cinematográfica para mercado binacional MX / SoCal.",
    weekly: 7500,
    monthly: 32500,
    contractMonths: 12,
    badge: "Cupo limitado",
    forWho:
      "Desarrollos inmobiliarios, constructoras premium, hoteles, resorts o marcas de lujo que necesitan producción audiovisual de nivel internacional para competir en el mercado binacional Baja California / SoCal. Clientes que ya invierten $1,500–$2,500 USD/mes en pauta y entienden el marketing como herramienta directa de ventas de alto ticket.",
    ideal: [
      "Desarrollos inmobiliarios",
      "Constructoras premium",
      "Hoteles y resorts",
      "Vitivinícolas y enoturismo",
      "Marcas de lujo",
      "Mercado MX + SoCal + San Diego",
    ],
    objective:
      "Posicionar la marca en el mercado premium binacional, generar prospectos calificados de alto ticket y soportar campañas agresivas con contenido de producción cinematográfica que justifica el precio de lo que se vende.",
    outcomes: [
      "Contenido de nivel producción internacional",
      "Posicionamiento real en el mercado binacional MX / SoCal",
      "Campañas optimizadas para compradores de alto poder adquisitivo",
      "Recorridos aéreos y videos master que venden sin estar físicamente",
      "Ecosistema digital completo preparado para escalar",
      "Prospectos calificados que pueden cerrar en USD",
    ],
    deliverables: [
      {
        group: "Producción cinematográfica",
        items: [
          "2–4 sesiones de producción completa al mes",
          "Recorridos aéreos con drone",
          "1 video master mensual (1–3 min, nivel cine)",
          "20+ posts mensuales de alto nivel",
          "10+ reels mensuales (estética cinematográfica)",
          "Stories diarias",
          "Material publicitario completo",
          "Cobertura de etapas de construcción y lanzamientos",
          "Dirección creativa exclusiva",
        ],
      },
      {
        group: "Campañas binacionales",
        items: [
          "Meta Ads — segmentación MX + SoCal + San Diego + Inland Empire",
          "Google Ads — Search, Display y YouTube",
          "TikTok Ads",
          "Retargeting avanzado y audiencias lookalike",
          "Campañas en español e inglés",
          "Reporte mensual de ROI y leads calificados",
        ],
      },
      {
        group: "Web, CRM y conversión",
        items: [
          "Web del desarrollo o landing pages (incluida)",
          "CRM básico de leads calificados",
          "Automatización de seguimiento a prospectos",
          "Sistema de cotización o agenda de visitas",
          "Soporte prioritario dedicado",
        ],
      },
    ],
    equipment: [
      "Cámara full frame",
      "Cámara móvil en LOG",
      "Lentes fijos 1.2 y 1.4",
      "Lente telefoto",
      "Estabilizador cinematográfico",
      "Drone",
      "Softbox, luces continuas y flash de estudio",
      "Micrófono inalámbrico",
      "Edición color grade cine",
    ],
    adSpend:
      "Inversión mínima recomendada: $15,000–$40,000 MXN/mes ($800–$2,200 USD), pagada directo a Meta/Google. Cotización en USD disponible para clientes del mercado americano.",
    notIncluded: [],
  },
];

export const MARKETING_REPLACES = [
  { role: "Community manager", cost: "$8,000 – $12,000" },
  { role: "Fotógrafo / videógrafo", cost: "$5,000 – $8,000" },
  { role: "Editor de video", cost: "$4,000 – $6,000" },
  { role: "Especialista en ads", cost: "$8,000 – $12,000" },
  { role: "Desarrollador web", cost: "$6,000 – $10,000" },
  { role: "Dirección creativa", cost: "$5,000 – $8,000" },
];

export const FAQ_MARKETING = [
  {
    q: "¿Por qué exclusividad por rubro?",
    a: "Trabajamos con una sola empresa por categoría y zona competitiva. No queremos competir contra nuestros propios clientes ni diluir la estrategia. Si tu competencia llega primero, la posición es suya hasta que termine el contrato.",
  },
  {
    q: "¿La pauta publicitaria está incluida en el precio?",
    a: "No. La inversión en Meta, Google o TikTok corre directo del cliente a las plataformas. Nosotros la administramos y optimizamos. Esto te da control total y transparencia sobre cuánto se gasta y a dónde va.",
  },
  {
    q: "¿Por qué hay contrato mínimo?",
    a: "El marketing real no funciona en un mes. El contenido necesita tiempo para construir audiencia, las campañas necesitan datos para optimizar y la marca necesita consistencia. Los plazos están calibrados para que veas resultados, no para amarrarte.",
  },
  {
    q: "¿Pueden trabajar con mi equipo interno?",
    a: "Sí. Si ya tienes community manager o equipo creativo, podemos integrarnos como producción + estrategia + ads. Lo evaluamos en la primera reunión.",
  },
  {
    q: "¿Qué pasa si quiero subir de nivel?",
    a: "Puedes subir entre paquetes en cualquier momento. Solo se ajusta la facturación al nuevo nivel y se reinicia el cómputo del contrato mínimo del nuevo paquete.",
  },
  {
    q: "¿Cómo son los pagos?",
    a: "Facturación semanal o mensual + IVA. Brand Partner y Producción Premium pueden facturarse en USD para clientes del mercado americano.",
  },
];

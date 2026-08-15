import type { Lang } from "./i18n";

export type BlogSection = {
  id: string;
  heading: string;
  headingEs: string;
  body: string[];
  bodyEs: string[];
};

export type BlogFaqItem = {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  titleEs: string;
  category: string;
  categoryEs: string;
  excerpt: string;
  excerptEs: string;
  readingTime: number;
  date: string;
  author: string;
  authorRole: string;
  authorRoleEs: string;
  lede: string;
  ledeEs: string;
  sections: BlogSection[];
  gradient: string;
  faq: BlogFaqItem[];
  schema: {
    keywords: string[];
    keywordsEs: string[];
  };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cuanto-cuesta-el-seo-en-mexico",
    title: "How Much Does SEO Cost in Mexico? Real 2026 Prices",
    titleEs: "¿Cuánto cuesta el SEO en México? Precios reales 2026",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "Real SEO pricing in Mexico for 2026 — monthly retainers, one-time audits, and what actually moves rankings versus what agencies pad your invoice with.",
    excerptEs:
      "Precios reales de SEO en México para 2026 — tarifas mensuales, auditorías y qué realmente mueve tu posicionamiento vs. lo que las agencias inflan en tu factura.",
    readingTime: 7,
    date: "2026-06-15",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: 'SEO in Mexico typically runs $8,000–$35,000 MXN per month for ongoing work, or $15,000–$60,000 MXN for a one-time technical audit. Price depends on competition, site size, and whether content production is included. Anyone quoting a flat $3,000/month "complete SEO" package is selling volume, not results.',
    ledeEs:
      'El SEO en México cuesta entre $8,000 y $35,000 MXN mensuales para trabajo continuo, o $15,000–$60,000 MXN por una auditoría técnica única. El precio depende de la competencia, el tamaño del sitio y si incluye producción de contenido. Quien cotiza un paquete de "SEO completo" fijo en $3,000/mes vende volumen, no resultados.',
    sections: [
      {
        id: "que-determina-el-precio",
        heading: "What actually determines the price",
        headingEs: "Qué determina el precio realmente",
        body: [
          'Four variables set the price of an SEO engagement: how competitive your keywords are, how large and technically broken your site already is, how much new content you need to publish, and whether you\'re competing locally or nationally. A dentist in Ensenada competing for "dentista Ensenada" and a fintech competing for "préstamos personales México" are not buying the same service, even if both call it SEO.',
        ],
        bodyEs: [
          'Cuatro variables definen el precio de un proyecto de SEO: qué tan competidas están tus palabras clave, qué tan grande y técnicamente roto está tu sitio, cuánto contenido nuevo necesitas publicar, y si compites a nivel local o nacional. Un dentista en Ensenada compitiendo por "dentista Ensenada" y una fintech compitiendo por "préstamos personales México" no están comprando el mismo servicio, aunque ambos le llamen SEO.',
        ],
      },
      {
        id: "rangos-de-precio",
        heading: "Typical price ranges in Mexico",
        headingEs: "Rangos de precio típicos en México",
        body: [
          "Local businesses (one city, low-to-medium competition) typically pay $8,000–$15,000 MXN/month. National e-commerce or service businesses with real competition sit at $18,000–$35,000 MXN/month. Enterprise or highly competitive categories — legal, finance, real estate developers — run $40,000 MXN/month and up, often with a dedicated content budget on top of the retainer.",
        ],
        bodyEs: [
          "Negocios locales (una ciudad, competencia baja o media) suelen pagar $8,000–$15,000 MXN/mes. E-commerce nacional o servicios con competencia real están en $18,000–$35,000 MXN/mes. Empresas grandes o categorías muy competidas (legal, finanzas, desarrolladoras inmobiliarias) corren desde $40,000 MXN/mes, muchas veces con presupuesto de contenido aparte de la tarifa base.",
        ],
      },
      {
        id: "auditoria-vs-mensual",
        heading: "One-time audit vs. monthly retainer",
        headingEs: "Auditoría única vs. tarifa mensual",
        body: [
          "A technical audit ($15,000–$60,000 MXN depending on site size) is a diagnostic: crawl errors, site speed, indexation issues, competitive gap analysis. It tells you what's broken. A monthly retainer is the ongoing work of fixing it, publishing content, and building authority. Buying only an audit without executing on it is money spent on a report that sits in a drawer.",
        ],
        bodyEs: [
          "Una auditoría técnica ($15,000–$60,000 MXN según el tamaño del sitio) es un diagnóstico: errores de rastreo, velocidad, problemas de indexación, análisis de brecha competitiva. Te dice qué está roto. Una tarifa mensual es el trabajo continuo de arreglarlo, publicar contenido y construir autoridad. Comprar solo la auditoría sin ejecutarla es dinero gastado en un reporte que termina en un cajón.",
        ],
      },
      {
        id: "senales-de-alerta",
        heading: "Red flags in cheap SEO packages",
        headingEs: "Señales de alerta en paquetes baratos",
        body: [
          'Watch for: guaranteed #1 rankings (Google makes no such guarantees to anyone), no access to your own Search Console or analytics, reports that only show "keywords ranked" without traffic or conversion data, and pricing so low it can only mean templated content or manipulative link schemes that put your domain at risk of a penalty.',
        ],
        bodyEs: [
          'Cuidado con: rankings #1 garantizados (Google no le garantiza eso a nadie), no darte acceso a tu propio Search Console o analítica, reportes que solo muestran "palabras posicionadas" sin datos de tráfico o conversión, y precios tan bajos que solo pueden significar contenido genérico o esquemas de enlaces manipulados que ponen tu dominio en riesgo de penalización.',
        ],
      },
      {
        id: "como-evaluar-una-propuesta",
        heading: "How to evaluate an SEO proposal",
        headingEs: "Cómo evaluar una propuesta de SEO",
        body: [
          "Ask for a sample technical audit, real case studies with traffic and revenue numbers (not just ranking screenshots), and an honest timeline. SEO takes 4–6 months minimum to show meaningful movement, and 9–12 months to compound. If a proposal promises results in three weeks, it's promising something else — usually paid traffic dressed up as organic.",
        ],
        bodyEs: [
          "Pide una muestra de auditoría técnica, casos reales con números de tráfico e ingresos (no solo capturas de rankings), y un cronograma honesto. El SEO toma mínimo 4 a 6 meses para mostrar movimiento real, y 9 a 12 meses para acumular resultados. Si una propuesta promete resultados en tres semanas, está prometiendo otra cosa: normalmente, tráfico pagado disfrazado de orgánico.",
        ],
      },
    ],
    gradient: "from-neutral-800 to-neutral-950",
    faq: [
      {
        q: "¿Cuánto tiempo toma ver resultados de SEO?",
        qEn: "How long does it take to see SEO results?",
        a: "El SEO técnico y de estructura empieza a mostrar movimiento en 4 a 6 meses, pero los resultados que realmente importan (tráfico calificado y conversiones) se acumulan entre 9 y 12 meses. Cualquier agencia que prometa el primer lugar en tres semanas está vendiendo otra cosa, normalmente tráfico pagado disfrazado. En SEO, la paciencia es parte del modelo, no un extra opcional.",
        aEn: "Technical and structural SEO starts showing movement in 4 to 6 months, but the results that actually matter — qualified traffic and conversions — compound over 9 to 12 months. Any agency promising a first-page ranking in three weeks is selling something else, usually paid traffic dressed up as organic. Patience isn't optional in SEO, it's part of the model.",
      },
      {
        q: "¿El SEO vale la pena para un negocio pequeño o solo para empresas grandes?",
        qEn: "Is SEO worth it for a small business or only for large companies?",
        a: "Vale la pena para negocios de cualquier tamaño, pero el retorno es más rápido y barato para negocios locales con competencia baja o media. Un plomero en Ensenada puede posicionar en semanas lo que a una fintech nacional le toma un año. La clave es ajustar el alcance: no necesitas competir a nivel nacional si tu negocio solo atiende una ciudad. Un negocio pequeño con SEO bien enfocado suele ganarle a uno grande con presupuesto disperso.",
        aEn: "It's worth it for businesses of any size, but the return is faster and cheaper for local businesses with low-to-medium competition — a plumber in Ensenada can rank in weeks for something a national fintech takes a year to achieve. The key is matching scope to reality: you don't need to compete nationally if your business only serves one city. A small business with tightly focused SEO often beats a large one with scattered budget.",
      },
      {
        q: "¿Qué pasa si dejo de pagar SEO después de unos meses?",
        qEn: "What happens if I stop paying for SEO after a few months?",
        a: "A diferencia de los anuncios pagados, que se apagan el mismo día que dejas de pagar, el contenido y las mejoras técnicas de SEO no desaparecen de inmediato: el sitio conserva parte de su posicionamiento por un tiempo. Pero sin mantenimiento, los competidores que sí siguen invirtiendo eventualmente te rebasan, y el contenido se vuelve obsoleto. Piénsalo como ejercicio: dejar de entrenar no borra el músculo de inmediato, pero tampoco lo mantiene.",
        aEn: "Unlike paid ads, which turn off the same day you stop paying, SEO content and technical improvements don't disappear immediately — the site keeps part of its ranking for a while. But without maintenance, competitors who keep investing eventually pass you, and the content goes stale. Think of it like exercise: stopping doesn't erase the muscle overnight, but it doesn't maintain it either.",
      },
      {
        q: "¿Cómo sé si necesito SEO o mejor empiezo con Google Ads?",
        qEn: "How do I know if I need SEO or should start with Google Ads instead?",
        a: "Si necesitas resultados este mes, Google Ads. Si estás construyendo para los próximos dos o tres años y quieres dejar de depender por completo de presupuesto pagado, SEO. La mayoría de los negocios saludables terminan usando ambos: Ads para llenar el vacío mientras el SEO se acumula, y SEO para bajar el costo por adquisición con el tiempo. Empezar solo con uno no es un error, siempre que sepas cuál resuelve qué problema.",
        aEn: "If you need results this month, Google Ads. If you're building for the next two or three years and want to stop depending entirely on paid budget, SEO. Most healthy businesses end up using both: Ads to fill the gap while SEO compounds, and SEO to lower acquisition cost over time. Starting with just one isn't a mistake, as long as you know which one solves which problem.",
      },
      {
        q: "¿Qué debo pedir antes de firmar un contrato de SEO?",
        qEn: "What should I ask for before signing an SEO contract?",
        a: "Pide acceso completo a tu propio Google Search Console y Analytics. Si la agencia se resiste, es una señal de alerta. Pide casos reales con números de tráfico e ingresos, no solo capturas de rankings. Pide un cronograma honesto de 4 a 12 meses, y pide que te expliquen en qué se va cada peso del presupuesto: contenido, enlaces, técnico. Un proveedor serio no tiene problema en mostrar su trabajo.",
        aEn: "Ask for full access to your own Google Search Console and Analytics — if the agency resists, that's a red flag. Ask for real case studies with traffic and revenue numbers, not just ranking screenshots. Ask for an honest 4-to-12-month timeline, and ask exactly where each peso of the budget goes: content, links, technical work. A serious provider has no problem showing their work.",
      },
    ],
    schema: {
      keywords: ["SEO cost Mexico", "SEO pricing", "SEO agency Mexico", "SEO Ensenada"],
      keywordsEs: ["costo SEO México", "precio SEO", "agencia SEO México", "SEO Ensenada"],
    },
  },
  {
    slug: "cuanto-cuesta-una-pagina-web-en-mexico",
    title: "How Much Does a Website Cost in Mexico? (2026 Prices)",
    titleEs: "¿Cuánto Cuesta una Página Web en México? (Precios 2026)",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "How much does a website cost in Mexico in 2026? Real price ranges by tier, broken down with no hidden surprises.",
    excerptEs:
      "¿Cuánto cuesta una página web en México? Precios reales 2026 desglosados por nivel, sin sorpresas escondidas.",
    readingTime: 9,
    date: "2026-07-23",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A basic template website in Mexico costs $6,000–$15,000 MXN. A professional custom site runs $25,000–$60,000 MXN. A lead-generation or e-commerce platform starts around $80,000 MXN. The gap isn't design — it's strategy, copywriting, conversion setup, and whether the site is actually built to sell.",
    ledeEs:
      "Un sitio web básico con plantilla en México cuesta entre $6,000 y $15,000 MXN. Un sitio profesional a medida va de $25,000 a $60,000 MXN. Una plataforma de captación o e-commerce arranca en $80,000 MXN. La diferencia no está en el diseño, sino en la estrategia, el copy, la configuración de conversión y en si el sitio está realmente construido para vender.",
    sections: [
      {
        id: "los-seis-niveles",
        heading: "The six tiers of a website",
        headingEs: "Los seis niveles de una página web",
        body: [
          "Not every business needs the same website. We group them into six tiers: Presence (a digital business card), Professional (built to establish trust and answer objections), Lead-Gen (built around forms and calls-to-action), Automated (booking, quoting or scheduling built in), Commercial System (inventory, payments, client accounts) and custom SaaS (multi-tenant software). Most businesses overpay by buying tier four when they need tier two.",
        ],
        bodyEs: [
          "No todos los negocios necesitan el mismo sitio web. Los agrupamos en seis niveles: Presencial (una tarjeta de presentación digital), Profesional (construido para generar confianza y resolver objeciones), Captación (construido alrededor de formularios y llamados a la acción), Automatizada (con reservas, cotizaciones o citas integradas), Sistema Comercial (inventario, pagos, cuentas de cliente) y SaaS a medida (software multiusuario). La mayoría de los negocios paga de más comprando el nivel cuatro cuando necesita el nivel dos.",
        ],
      },
      {
        id: "que-incluye-cada-nivel",
        heading: "What's included at each price point",
        headingEs: "Qué incluye cada nivel de precio",
        body: [
          "A Presence site ($6,000–$15,000 MXN) covers a handful of pages, a template, and basic copy. A Professional site ($25,000–$60,000 MXN) adds custom design, real copywriting, SEO structure and mobile optimization. Lead-Gen and Automated tiers ($80,000–$150,000 MXN) add conversion-focused landing pages, CRM integration, and automated workflows. Commercial Systems and SaaS ($150,000 MXN+) involve custom development, databases and ongoing engineering.",
        ],
        bodyEs: [
          "Un sitio Presencial ($6,000–$15,000 MXN) cubre unas cuantas páginas, una plantilla y copy básico. Un sitio Profesional ($25,000–$60,000 MXN) suma diseño a medida, copywriting real, estructura SEO y optimización móvil. Los niveles de Captación y Automatizada ($80,000–$150,000 MXN) suman landing pages enfocadas en conversión, integración con CRM y flujos automatizados. Sistema Comercial y SaaS ($150,000 MXN+) implican desarrollo a medida, bases de datos e ingeniería continua.",
        ],
      },
      {
        id: "costos-ocultos",
        heading: "Hidden costs agencies don't mention",
        headingEs: "Costos ocultos que las agencias no mencionan",
        body: [
          "The quote you get is rarely the total cost of ownership. Domain and hosting run $1,500–$6,000 MXN/year depending on traffic. Professional photography or video for the site can add $10,000–$30,000 MXN. Copywriting, if not included, is another line item. And maintenance — security updates, backups, small edits — should be budgeted at $1,500–$4,000 MXN/month, not treated as a surprise.",
        ],
        bodyEs: [
          "La cotización que recibes casi nunca es el costo total de tenencia. Dominio y hosting cuestan $1,500–$6,000 MXN/año según el tráfico. Fotografía o video profesional para el sitio puede sumar $10,000–$30,000 MXN. El copywriting, si no está incluido, es otra línea. Y el mantenimiento (actualizaciones de seguridad, respaldos, cambios menores) debe presupuestarse en $1,500–$4,000 MXN/mes, no tratarse como una sorpresa.",
        ],
      },
      {
        id: "diy-vs-a-medida",
        heading: "DIY builders vs. custom development",
        headingEs: "Constructores DIY vs. desarrollo a medida",
        body: [
          "Wix, Squarespace and similar builders make sense for a Presence-tier site with a tight budget and no growth ambitions beyond existing. The moment you need real SEO control, custom conversion logic, integrations with a CRM, or a site that can scale into a system, template builders become the ceiling instead of the starting point — and migrating off them later costs more than building custom from day one.",
        ],
        bodyEs: [
          "Wix, Squarespace y constructores similares tienen sentido para un sitio de nivel Presencial con presupuesto ajustado y sin ambición de crecer más allá de eso. En el momento en que necesitas control real de SEO, lógica de conversión a medida, integraciones con un CRM, o un sitio que pueda escalar a un sistema, los constructores con plantilla se vuelven el techo en vez del punto de partida, y migrar fuera de ellos después cuesta más que construir a medida desde el día uno.",
        ],
      },
      {
        id: "que-nivel-necesitas",
        heading: "How to know which tier your business needs",
        headingEs: "Cómo saber qué nivel necesita tu negocio",
        body: [
          "Ask what the site's job is. If it's a digital business card for referrals, Presence is enough. If people research you before calling, Professional. If you're actively spending on ads and need the site to convert that traffic, Lead-Gen or Automated. If you're processing transactions or managing clients through the site itself, you're in Commercial System or SaaS territory — and that's a different budget conversation entirely.",
        ],
        bodyEs: [
          "Pregunta cuál es el trabajo del sitio. Si es una tarjeta digital para referidos, con Presencial basta. Si la gente te investiga antes de llamar, Profesional. Si estás invirtiendo activamente en anuncios y necesitas que el sitio convierta ese tráfico, Captación o Automatizada. Si procesas transacciones o administras clientes desde el propio sitio, estás en territorio de Sistema Comercial o SaaS, una conversación de presupuesto completamente distinta.",
        ],
      },
      {
        id: "precios-por-region",
        heading: "Does the price change by region in Mexico?",
        headingEs: "¿El precio cambia según la región de México?",
        body: [
          "Prices vary less by region than people expect — a Professional-tier site costs roughly the same whether the agency is based in Mexico City, Guadalajara or a smaller city like Ensenada, because the work (strategy, design, development) is delivered remotely either way. What does vary regionally is the cost of add-ons that require local presence, like on-site product photography or in-person consultations, which tend to be cheaper outside major metro areas.",
        ],
        bodyEs: [
          "Los precios varían menos por región de lo que la gente espera. Un sitio de nivel Profesional cuesta más o menos lo mismo sin importar si la agencia está en Ciudad de México, Guadalajara o una ciudad más pequeña como Ensenada, porque el trabajo (estrategia, diseño, desarrollo) se entrega remoto de cualquier forma. Lo que sí varía por región es el costo de extras que requieren presencia local, como fotografía de producto en sitio o consultas presenciales, que suelen ser más baratas fuera de las grandes zonas metropolitanas.",
        ],
      },
      {
        id: "rangos-resumen",
        heading: "The 2026 price ranges at a glance",
        headingEs: "Los rangos de precio 2026 de un vistazo",
        body: [
          "Presence: $6,000–$15,000 MXN. Professional: $25,000–$60,000 MXN. Lead-Gen or Automated: $80,000–$150,000 MXN. Commercial System or custom SaaS: $150,000 MXN and up. These are one-time build costs in Mexican pesos as of 2026; hosting, maintenance and content are separate ongoing costs covered above.",
        ],
        bodyEs: [
          "Presencial: $6,000–$15,000 MXN. Profesional: $25,000–$60,000 MXN. Captación o Automatizada: $80,000–$150,000 MXN. Sistema Comercial o SaaS a medida: $150,000 MXN en adelante. Estos son costos de construcción única en pesos mexicanos para 2026; hosting, mantenimiento y contenido son costos continuos aparte, cubiertos arriba.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Necesito una página web si ya tengo redes sociales activas?",
        qEn: "Do I need a website if I already have active social media?",
        a: "Sí, y no son lo mismo. Las redes sociales las controla la plataforma: puede cambiar el algoritmo, suspender tu cuenta o simplemente dejar de mostrarte a tus seguidores. Tu sitio web es el único activo digital que realmente te pertenece y controlas por completo. Además, para negocios de servicios o alto valor, un sitio profesional sigue siendo la referencia que la gente busca antes de confiar en ti.",
        aEn: "Yes, and they're not the same thing. Social media is controlled by the platform — it can change its algorithm, suspend your account, or simply stop showing you to your followers. Your website is the only digital asset you actually own and fully control. And for service or high-ticket businesses, a professional site is still the reference people check before trusting you.",
      },
      {
        q: "¿Cuánto tiempo toma construir una página web profesional?",
        qEn: "How long does it take to build a professional website?",
        a: "Un sitio de nivel Presencial o Profesional toma entre 3 y 6 semanas desde que se aprueba el contenido. Un sitio de Captación o Automatizado, con formularios, integraciones y lógica de conversión, toma de 6 a 10 semanas. Sistemas comerciales o SaaS a medida pueden tomar varios meses. El cuello de botella casi siempre es el contenido y las decisiones del cliente, no el desarrollo en sí.",
        aEn: "A Presence or Professional-tier site takes 3 to 6 weeks once content is approved. A Lead-Gen or Automated site, with forms, integrations and conversion logic, takes 6 to 10 weeks. Custom commercial systems or SaaS can take several months. The bottleneck is almost always content and client decisions, not the development itself.",
      },
      {
        q: "¿Puedo empezar con un sitio básico y actualizarlo después?",
        qEn: "Can I start with a basic site and upgrade it later?",
        a: "Sí, siempre y cuando esté construido sobre una base que pueda crecer. El problema no es empezar simple, sino empezar con un constructor DIY de plantillas cerradas que después hay que reconstruir desde cero para escalar. Si desde el inicio usas una arquitectura que permite agregar formularios, integraciones o un sistema de pagos, subir de nivel es una extensión, no una reconstrucción.",
        aEn: "Yes, as long as it's built on a foundation that can grow. The problem isn't starting simple — it's starting on a DIY builder with closed templates that you later have to rebuild from scratch to scale. If you start with an architecture that allows adding forms, integrations or a payment system, upgrading is an extension, not a rebuild.",
      },
      {
        q: "¿Qué pasa si ya tengo un sitio y solo quiero un rediseño?",
        qEn: "What if I already have a site and just want a redesign?",
        a: "Un rediseño real va más allá de cambiar colores y fotos: es la oportunidad de corregir estructura, velocidad y conversión al mismo tiempo. Antes de rediseñar, vale la pena auditar qué páginas ya generan tráfico o leads, para no perder ese posicionamiento en el proceso. El costo de un rediseño suele ser similar al de un sitio Profesional nuevo, porque el trabajo de estrategia y copy es prácticamente el mismo.",
        aEn: "A real redesign isn't just changing colors and photos — it's the chance to fix structure, speed and conversion at the same time. Before redesigning, it's worth auditing which pages already generate traffic or leads, so you don't lose that ranking in the process. A redesign's cost is usually similar to a new Professional-tier site, because the strategy and copywriting work is nearly the same.",
      },
      {
        q: "¿Cómo evito pagar de más por funciones que no voy a usar?",
        qEn: "How do I avoid overpaying for features I won't use?",
        a: "Define primero cuál es el trabajo del sitio: ¿es una tarjeta de presentación, o necesita vender o capturar leads directamente? La mayoría del sobrecosto viene de comprar el nivel Comercial o SaaS cuando el negocio en realidad necesita un sitio Profesional. Pide que te expliquen qué nivel corresponde a tu objetivo actual, no al que podrías tener en tres años.",
        aEn: "Start by defining what the site's actual job is — is it a business card, or does it need to sell or capture leads directly? Most overspending comes from buying a Commercial or SaaS tier when the business actually needs a Professional-tier site. Ask to be shown which tier matches your current goal, not the one you might have in three years.",
      },
    ],
    schema: {
      keywords: [
        "website cost Mexico",
        "web design pricing",
        "custom website Mexico",
        "website tiers",
        "how much does a website cost in Mexico",
      ],
      keywordsEs: [
        "costo página web México",
        "precio diseño web",
        "página web a medida México",
        "niveles de sitio web",
        "cuanto cuesta una pagina web en mexico",
      ],
    },
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs. Meta Ads: Which Is Right for Your Business?",
    titleEs: "Google Ads vs Meta Ads: cuál le conviene a tu negocio",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Google Ads captures existing demand; Meta Ads creates it. Here's how to decide which platform deserves your budget first, based on your sales cycle and buyer intent.",
    excerptEs:
      "Google Ads captura demanda existente; Meta Ads la crea. Así se decide qué plataforma merece tu presupuesto primero, según tu ciclo de venta e intención de compra.",
    readingTime: 6,
    date: "2026-06-29",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Google Ads wins when people already search for what you sell — plumbers, lawyers, SaaS with a known category. Meta Ads wins when you need to interrupt attention and build desire — new products, high-ticket real estate, anything visual. Most businesses need both eventually, but rarely at the same time or the same budget split.",
    ledeEs:
      "Google Ads gana cuando la gente ya busca lo que vendes: plomeros, abogados, SaaS con categoría conocida. Meta Ads gana cuando necesitas interrumpir la atención y generar deseo, con productos nuevos, bienes raíces de alto valor o cualquier cosa visual. La mayoría de los negocios necesita ambos eventualmente, pero rara vez al mismo tiempo o con el mismo reparto de presupuesto.",
    sections: [
      {
        id: "intencion-vs-interrupcion",
        heading: "Intent vs. interruption",
        headingEs: "Intención vs. interrupción",
        body: [
          'This is the core distinction. Google Ads shows up when someone is already looking — they typed "plomero urgente CDMX" because they have a leak right now. Meta Ads shows up while someone is scrolling, with no active intent — you have to earn their attention with the creative itself. One platform meets demand, the other manufactures it. Confusing the two is where most ad budgets get wasted.',
        ],
        bodyEs: [
          'Esta es la distinción central. Google Ads aparece cuando alguien ya está buscando: escribió "plomero urgente CDMX" porque tiene una fuga ahora mismo. Meta Ads aparece mientras alguien navega sin intención activa: tienes que ganarte su atención con el propio creativo. Una plataforma responde a demanda, la otra la fabrica. Confundir las dos es donde se desperdicia la mayoría del presupuesto publicitario.',
        ],
      },
      {
        id: "cuando-gana-google",
        heading: "When Google Ads wins",
        headingEs: "Cuándo gana Google Ads",
        body: [
          "Google Ads is the better first dollar when your category has clear search volume, when you sell something people research before buying (legal, medical, B2B software), or when the purchase is urgent and local. If nobody is searching for what you do by name or category, Google Ads has nothing to intercept — no amount of budget fixes a demand problem.",
        ],
        bodyEs: [
          "Google Ads es la mejor primera opción cuando tu categoría tiene volumen de búsqueda claro, cuando vendes algo que la gente investiga antes de comprar (legal, médico, software B2B), o cuando la compra es urgente y local. Si nadie está buscando lo que haces por nombre o categoría, Google Ads no tiene nada que interceptar. Ningún presupuesto arregla un problema de demanda.",
        ],
      },
      {
        id: "cuando-gana-meta",
        heading: "When Meta Ads wins",
        headingEs: "Cuándo gana Meta Ads",
        body: [
          "Meta Ads is the better first dollar for visual, aspirational or new-category products — real estate developments, restaurants, fashion, anything where seeing it is what sells it. It also wins for precise audience targeting by interest, behavior or lookalike audiences built from your existing customers, which Google's search intent model can't replicate.",
        ],
        bodyEs: [
          "Meta Ads es la mejor primera opción para productos visuales, aspiracionales o de categoría nueva: desarrollos inmobiliarios, restaurantes, moda, cualquier cosa donde verlo es lo que vende. También gana en segmentación precisa por interés, comportamiento o audiencias similares construidas a partir de tus clientes actuales, algo que el modelo de intención de búsqueda de Google no puede replicar.",
        ],
      },
      {
        id: "costo-por-lead",
        heading: "Cost per lead: what to expect in Mexico",
        headingEs: "Costo por lead: qué esperar en México",
        body: [
          "As a rough range for 2026: local service leads on Google Ads run $150–$600 MXN each depending on category competition. Meta lead-form campaigns often come in lower per-lead ($80–$350 MXN) but with lower purchase intent, meaning more follow-up work to qualify them. High-ticket categories — real estate, medical, legal — run higher on both platforms and should be measured on cost-per-qualified-lead, not raw cost-per-click.",
        ],
        bodyEs: [
          "Como rango aproximado para 2026: los leads de servicios locales en Google Ads cuestan entre $150 y $600 MXN cada uno según la competencia de la categoría. Las campañas de formulario de leads en Meta suelen salir más bajas por lead ($80–$350 MXN) pero con menor intención de compra, lo que implica más trabajo de seguimiento para calificarlos. Las categorías de alto valor (bienes raíces, médico, legal) cuestan más en ambas plataformas y deben medirse por costo por lead calificado, no por costo por clic bruto.",
        ],
      },
      {
        id: "el-orden-correcto",
        heading: "The sequencing most businesses get wrong",
        headingEs: "El orden que la mayoría de los negocios hace mal",
        body: [
          "The common mistake is splitting a tight budget 50/50 between both platforms from day one. Better sequencing: prove the offer works on the platform with clearer intent signals first, get the landing page and follow-up converting, then add the second platform to scale reach once you know your numbers. Running both platforms badly is worse than running one platform well.",
        ],
        bodyEs: [
          "El error común es dividir un presupuesto ajustado 50/50 entre ambas plataformas desde el primer día. Un mejor orden: comprobar que la oferta funciona primero en la plataforma con señales de intención más claras, lograr que la landing page y el seguimiento conviertan, y luego sumar la segunda plataforma para escalar alcance una vez que conoces tus números. Correr ambas plataformas mal es peor que correr una sola bien.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Puedo usar Google Ads y Meta Ads al mismo tiempo con un presupuesto pequeño?",
        qEn: "Can I use Google Ads and Meta Ads at the same time with a small budget?",
        a: "Técnicamente sí, pero repartir un presupuesto ajustado entre dos plataformas casi siempre significa hacer las dos mal. Con presupuestos menores a $15,000 MXN mensuales, es mejor concentrar todo en la plataforma con señales de intención más claras para tu negocio, comprobar que convierte, y sumar la segunda plataforma después. Escalar mal en dos frentes cuesta más que escalar bien en uno.",
        aEn: "Technically yes, but splitting a tight budget between two platforms almost always means doing both poorly. With budgets under $15,000 MXN per month, it's better to concentrate everything on the platform with clearer intent signals for your business, confirm it converts, and add the second platform later. Scaling poorly on two fronts costs more than scaling well on one.",
      },
      {
        q: "¿Cuál plataforma da resultados más rápido?",
        qEn: "Which platform gives results faster?",
        a: "Google Ads suele mostrar resultados más rápido porque intercepta una búsqueda activa: la persona ya decidió que necesita algo, solo falta que te encuentre. Meta Ads necesita más tiempo para que el algoritmo aprenda a quién mostrarle tu anuncio y para que la audiencia desarrolle interés, generalmente de dos a cuatro semanas de optimización antes de estabilizarse.",
        aEn: "Google Ads usually shows results faster because it intercepts an active search — the person already decided they need something, they just need to find you. Meta Ads needs more time for the algorithm to learn who to show your ad to and for the audience to develop interest, typically two to four weeks of optimization before it stabilizes.",
      },
      {
        q: "¿Necesito un sitio web para anunciarme, o puedo usar solo la página de Facebook o Instagram?",
        qEn: "Do I need a website to advertise, or can I just use my Facebook or Instagram page?",
        a: "Puedes lanzar campañas de Meta dirigiendo tráfico a un formulario nativo de la plataforma sin sitio web, y funciona para volumen de leads. Pero para Google Ads casi siempre necesitas una landing page. No puedes anunciarte para una búsqueda específica y mandar a la gente a un perfil genérico de redes sociales. Un sitio propio también te da control total de la conversión y de los datos, algo que la plataforma no te va a dar.",
        aEn: "You can run Meta campaigns sending traffic to a native platform form without a website, and it works for lead volume. But for Google Ads you almost always need a landing page — you can't advertise for a specific search and send people to a generic social media profile. Owning a site also gives you full control over conversion and data, which the platform won't give you.",
      },
      {
        q: "¿Qué presupuesto mínimo necesito para empezar a anunciarme?",
        qEn: "What's the minimum budget I need to start advertising?",
        a: "Como piso realista para México en 2026, considera al menos $8,000–$12,000 MXN mensuales por plataforma para juntar suficientes datos y que el algoritmo pueda optimizar. Por debajo de eso, es difícil sacar conclusiones confiables en menos de un mes, porque el volumen de clics y conversiones es demasiado bajo para tomar decisiones con datos reales.",
        aEn: "As a realistic floor for Mexico in 2026, plan for at least $8,000–$12,000 MXN per month per platform to gather enough data for the algorithm to optimize. Below that, it's hard to draw reliable conclusions in under a month, because click and conversion volume is too low to make decisions based on real data.",
      },
      {
        q: "¿Cómo sé si mi negocio es más de Google Ads o de Meta Ads?",
        qEn: "How do I know if my business fits Google Ads or Meta Ads better?",
        a: "Pregúntate si la gente ya busca activamente lo que vendes por nombre o categoría. Si sí, empieza en Google. Si tu producto es visual, nuevo en el mercado, o depende de generar deseo antes de que exista la búsqueda, empieza en Meta. Si no estás seguro, revisa el volumen de búsqueda de tu categoría en Google Keyword Planner: si hay volumen real, ahí está tu respuesta.",
        aEn: "Ask yourself if people already actively search for what you sell by name or category — if so, start with Google. If your product is visual, new to the market, or depends on generating desire before the search exists, start with Meta. If you're not sure, check your category's search volume in Google Keyword Planner: if there's real volume, that's your answer.",
      },
    ],
    schema: {
      keywords: [
        "Google Ads vs Meta Ads",
        "paid ads Mexico",
        "Google Ads Mexico",
        "Meta Ads Mexico",
      ],
      keywordsEs: [
        "Google Ads vs Meta Ads",
        "publicidad pagada México",
        "Google Ads México",
        "Meta Ads México",
      ],
    },
  },
  {
    slug: "errores-de-google-ads",
    title: "10 Google Ads Mistakes That Burn Your Budget",
    titleEs: "10 errores de Google Ads que queman tu presupuesto",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "The ten most common Google Ads mistakes we find when auditing accounts in Mexico — and the fixes that stop the bleeding within a week.",
    excerptEs:
      "Los diez errores más comunes de Google Ads que encontramos al auditar cuentas en México — y las soluciones que detienen la sangría en una semana.",
    readingTime: 9,
    date: "2026-07-06",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Most wasted Google Ads budget in Mexico comes from broad match keywords with no negatives, Smart Campaigns left on autopilot, and landing pages that don't match search intent. Fixing these three alone typically recovers 20–40% of spend within the first billing cycle.",
    ledeEs:
      "La mayor parte del presupuesto desperdiciado en Google Ads en México viene de palabras clave en concordancia amplia sin negativas, Smart Campaigns en piloto automático y landing pages que no coinciden con la intención de búsqueda. En las cuentas que hemos auditado, no es raro recuperar entre 20% y 40% del gasto solo corrigiendo estos tres puntos en el primer ciclo de facturación.",
    sections: [
      {
        id: "concordancia-amplia",
        heading: "1. Broad match with no negative keywords",
        headingEs: "1. Concordancia amplia sin negativas",
        body: [
          'Broad match without a negative keyword list will spend your budget on searches that have nothing to do with your business. A plumbing company on broad match without negatives will pay for clicks from people searching "how to fix a leak myself." Build a negative list before launch, not after the first invoice shocks you.',
        ],
        bodyEs: [
          'La concordancia amplia sin una lista de palabras negativas gastará tu presupuesto en búsquedas que no tienen nada que ver con tu negocio. Una empresa de plomería en concordancia amplia sin negativas pagará por clics de gente buscando "cómo arreglar una fuga yo mismo". Construye una lista de negativas antes de lanzar, no después de que la primera factura te sorprenda.',
        ],
      },
      {
        id: "ignorar-terminos-busqueda",
        heading: "2. Ignoring the search terms report",
        headingEs: "2. Ignorar el informe de términos de búsqueda",
        body: [
          "This report shows the exact phrases that triggered your ads — and it's the single most under-used tool in most accounts. Reviewing it weekly and adding negatives is the fastest, cheapest way to improve ROAS. Accounts that haven't touched this report in months are almost always bleeding budget on irrelevant traffic.",
        ],
        bodyEs: [
          "Este informe muestra las frases exactas que activaron tus anuncios, y es la herramienta menos usada en la mayoría de las cuentas. Revisarlo semanalmente y agregar negativas es la forma más rápida y barata de mejorar el ROAS. Las cuentas que no han tocado este informe en meses casi siempre están desperdiciando presupuesto en tráfico irrelevante.",
        ],
      },
      {
        id: "landing-generica",
        heading: "3. One generic landing page for every ad",
        headingEs: "3. Una sola landing genérica para todos los anuncios",
        body: [
          'Sending every keyword group to your homepage kills conversion rate. Someone who searched "cotización remodelación cocina" should land on a page about kitchen remodels with a quote form, not a general homepage they now have to navigate. Message match between the ad, the keyword, and the landing page is what conversion rate is actually made of.',
        ],
        bodyEs: [
          'Mandar todos los grupos de palabras clave a tu página de inicio mata la tasa de conversión. Alguien que buscó "cotización remodelación cocina" debería llegar a una página sobre remodelación de cocinas con un formulario de cotización, no a una página de inicio genérica que ahora tiene que navegar. La coherencia entre el anuncio, la palabra clave y la landing page es de lo que realmente está hecha la tasa de conversión.',
        ],
      },
      {
        id: "sin-seguimiento-conversiones",
        heading: "4. No conversion tracking (or broken tracking)",
        headingEs: "4. Sin seguimiento de conversiones (o roto)",
        body: [
          "If you can't tell Google which clicks turned into calls, form fills, or sales, its bidding algorithm is optimizing blind — and so are you. Broken or missing conversion tracking is the single most common issue we find in account audits, and it invalidates every other optimization until it's fixed.",
        ],
        bodyEs: [
          "Si no le puedes decir a Google qué clics se convirtieron en llamadas, formularios o ventas, su algoritmo de puja está optimizando a ciegas, y tú también. El seguimiento de conversiones roto o inexistente es el problema más común que encontramos en las auditorías de cuenta, e invalida cualquier otra optimización hasta que se corrige.",
        ],
      },
      {
        id: "smart-campaigns-sin-supervision",
        heading: "5. Smart Campaigns without oversight",
        headingEs: "5. Smart Campaigns sin supervisión",
        body: [
          "Google's automated campaign types can work, but they need clean conversion signals and a human checking search term matches and placements regularly. Left fully on autopilot without review, they'll happily spend on brand searches you'd already win for free, or on placements that generate clicks with zero business value.",
        ],
        bodyEs: [
          "Los tipos de campaña automatizados de Google pueden funcionar, pero necesitan señales de conversión limpias y una persona revisando regularmente los términos de búsqueda y las ubicaciones. Dejados en piloto automático sin revisión, gastarán con gusto en búsquedas de marca que ya ganarías gratis, o en ubicaciones que generan clics sin ningún valor para el negocio.",
        ],
      },
      {
        id: "pujar-solo-marca",
        heading: "6. Bidding on your own brand only",
        headingEs: "6. Pujar solo por tu propia marca",
        body: [
          "Some accounts spend their entire budget defending brand searches — people who already knew your name and were going to click you anyway. That's not growth, it's insurance. A healthy account allocates real budget to category and competitor terms where you actually capture new demand.",
        ],
        bodyEs: [
          "Algunas cuentas gastan todo su presupuesto defendiendo búsquedas de marca: gente que ya conocía tu nombre e iba a darle clic de todas formas. Eso es un seguro, no crecimiento real. Una cuenta sana destina presupuesto real a términos de categoría y competencia donde realmente se captura demanda nueva.",
        ],
      },
      {
        id: "sin-dayparting",
        heading: "7. No dayparting or geo exclusions",
        headingEs: "7. Sin dayparting ni exclusiones geográficas",
        body: [
          "If your business only takes calls 9am–6pm, running ads at 2am wastes budget on leads nobody answers. Same with geography: a business that serves Tijuana shouldn't be paying for clicks from Mexico City unless it can actually fulfill there. Both are five-minute fixes that most accounts never make.",
        ],
        bodyEs: [
          "Si tu negocio solo contesta llamadas de 9am a 6pm, correr anuncios a las 2am desperdicia presupuesto en leads que nadie contesta. Lo mismo con la geografía: un negocio que atiende Tijuana no debería pagar por clics de Ciudad de México a menos que realmente pueda atender ahí. Ambos son ajustes de cinco minutos que la mayoría de las cuentas nunca hace.",
        ],
      },
      {
        id: "copy-no-coincide",
        heading: "8. Ad copy that doesn't match the keyword",
        headingEs: "8. Copy que no coincide con la palabra clave",
        body: [
          "A generic ad running across dozens of unrelated keyword groups gets a low Quality Score and a high cost-per-click as a result. Tighter ad groups with copy written specifically to the keyword's intent lower your costs and raise your click-through rate at the same time.",
        ],
        bodyEs: [
          "Un anuncio genérico corriendo en docenas de grupos de palabras clave sin relación obtiene un Nivel de Calidad bajo y, como resultado, un costo por clic alto. Grupos de anuncios más específicos con copy escrito para la intención exacta de la palabra clave bajan tus costos y suben tu tasa de clics al mismo tiempo.",
        ],
      },
      {
        id: "no-pausar-anuncios",
        heading: "9. Never pausing underperforming ads",
        headingEs: "9. Nunca pausar anuncios de bajo rendimiento",
        body: [
          "Accounts that launch and never touch their ad copy again miss the compounding value of testing. Running two or three ad variations per group and pausing the weakest every few weeks is a simple habit that steadily lowers cost per conversion over time.",
        ],
        bodyEs: [
          "Las cuentas que se lanzan y nunca vuelven a tocar el copy de sus anuncios pierden el valor acumulado de probar variaciones. Correr dos o tres variantes de anuncio por grupo y pausar la más débil cada pocas semanas es un hábito simple que baja el costo por conversión de forma constante con el tiempo.",
        ],
      },
      {
        id: "configurar-y-olvidar",
        heading: '10. Treating Google Ads as "set and forget"',
        headingEs: '10. Tratar Google Ads como "configurar y olvidar"',
        body: [
          "This is the root cause behind the other nine. Google Ads is not a one-time setup — it's a channel that needs weekly attention to stay efficient as competition, seasonality and your own business change. Accounts that get reviewed monthly instead of weekly consistently underperform accounts managed with real cadence.",
        ],
        bodyEs: [
          "Esta es la causa raíz detrás de los otros nueve errores. Google Ads no es una configuración de una sola vez, sino un canal que necesita atención semanal para mantenerse eficiente mientras cambian la competencia, la estacionalidad y tu propio negocio. Las cuentas que se revisan mensualmente en vez de semanalmente rinden consistentemente menos que las cuentas administradas con cadencia real.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Cómo sé si mi cuenta de Google Ads está desperdiciando dinero?",
        qEn: "How do I know if my Google Ads account is wasting money?",
        a: "Las señales más claras son: no sabes cuántas de tus conversiones vienen realmente de los anuncios, tus términos de búsqueda incluyen frases que no tienen que ver con tu negocio, y llevas meses sin revisar ni ajustar las campañas. Si al revisar el informe de términos de búsqueda encuentras clics por cosas que no vendes, ya estás perdiendo presupuesto ahí mismo.",
        aEn: "The clearest signs are: you don't actually know how many of your conversions come from the ads, your search terms include phrases unrelated to your business, and the campaigns haven't been reviewed or adjusted in months. If checking the search terms report turns up clicks for things you don't sell, you're already losing budget right there.",
      },
      {
        q: "¿Cada cuánto debo revisar mi cuenta de Google Ads?",
        qEn: "How often should I review my Google Ads account?",
        a: "Como mínimo, una revisión semanal de 20 a 30 minutos: términos de búsqueda, gasto por campaña y conversiones. Una revisión más profunda (pausar anuncios débiles, ajustar pujas, probar copy nuevo) cada dos a cuatro semanas. Las cuentas que se revisan mensualmente en vez de semanalmente casi siempre rinden peor, porque los problemas se acumulan antes de detectarse.",
        aEn: "At minimum, a weekly 20-to-30-minute review: search terms, spend per campaign, and conversions. A deeper review — pausing weak ads, adjusting bids, testing new copy — every two to four weeks. Accounts reviewed monthly instead of weekly almost always underperform, because problems pile up before they're caught.",
      },
      {
        q: "¿Puedo administrar Google Ads yo mismo o necesito contratar a alguien?",
        qEn: "Can I manage Google Ads myself or do I need to hire someone?",
        a: "Con presupuestos pequeños y una sola categoría de producto, es posible administrarlo tú mismo si dedicas tiempo real cada semana a revisarlo. El punto donde vale la pena contratar ayuda es cuando el presupuesto mensual supera lo que estás dispuesto a perder mientras aprendes, o cuando ya no tienes las horas para darle seguimiento constante, que es, en la práctica, el caso de la mayoría de los negocios.",
        aEn: "With small budgets and a single product category, it's possible to manage it yourself if you dedicate real time to reviewing it every week. The point where hiring help pays off is when the monthly budget exceeds what you're willing to lose while learning, or when you no longer have the hours to give it consistent attention — which, in practice, is most businesses.",
      },
      {
        q: "¿Qué es lo primero que debo revisar si sospecho que algo está mal en mi cuenta?",
        qEn: "What's the first thing I should check if I suspect something is wrong with my account?",
        a: "Empieza por el seguimiento de conversiones: confirma que esté configurado correctamente y contando las acciones correctas (llamadas, formularios, ventas). Si eso está roto, cualquier otra optimización parte de datos falsos. Después revisa el informe de términos de búsqueda de los últimos 30 días buscando gasto en frases irrelevantes.",
        aEn: "Start with conversion tracking: confirm it's set up correctly and counting the right actions (calls, forms, sales). If that's broken, every other optimization is built on false data. Then check the search terms report from the last 30 days looking for spend on irrelevant phrases.",
      },
      {
        q: "¿Vale la pena pedir una auditoría de mi cuenta actual?",
        qEn: "Is it worth getting an audit of my current account?",
        a: "Sí, especialmente si nunca se ha hecho una y llevas más de tres meses corriendo campañas. Una auditoría honesta revisa seguimiento de conversiones, estructura de campañas, calidad de landing pages y gasto desperdiciado, y suele pagarse sola con lo que encuentra en la primera revisión de términos de búsqueda.",
        aEn: "Yes, especially if one has never been done and you've been running campaigns for more than three months. An honest audit reviews conversion tracking, campaign structure, landing page quality and wasted spend, and usually pays for itself with what it finds in the first search terms review alone.",
      },
    ],
    schema: {
      keywords: [
        "Google Ads mistakes",
        "wasted ad spend",
        "Google Ads audit Mexico",
        "PPC mistakes",
      ],
      keywordsEs: [
        "errores Google Ads",
        "presupuesto desperdiciado",
        "auditoría Google Ads México",
        "errores PPC",
      ],
    },
  },
  {
    slug: "guia-marketing-inmobiliario",
    title: "Real Estate Marketing: The Complete 2026 Guide",
    titleEs: "Marketing Inmobiliario: Guía Completa 2026",
    category: "Real Estate Marketing",
    categoryEs: "Marketing Inmobiliario",
    excerpt:
      "The definitive guide to real estate marketing in Mexico: leads, campaigns, video, CRM and follow-up — with real examples from Baja California developments.",
    excerptEs:
      "La guía definitiva de marketing inmobiliario en México: leads, campañas, video, CRM y seguimiento — con casos reales de desarrollos en Baja California.",
    readingTime: 20,
    date: "2026-07-15",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Real estate marketing is the system that turns traffic into signed contracts: paid campaigns that reach the right buyer, a landing experience built around the property (not a brochure), a follow-up process that responds in minutes, and a CRM that never lets a lead go cold. Developments that treat these as one connected system consistently outsell those that treat them as separate tasks.",
    ledeEs:
      "El marketing inmobiliario es el sistema que convierte tráfico en contratos firmados: campañas pagadas que llegan al comprador correcto, una experiencia de aterrizaje construida alrededor de la propiedad (no un folleto), un proceso de seguimiento que responde en minutos, y un CRM que nunca deja enfriar un lead. Los desarrollos que tratan esto como un solo sistema conectado venden consistentemente más que los que lo tratan como tareas separadas.",
    sections: [
      {
        id: "que-es-marketing-inmobiliario",
        heading: "What real estate marketing actually means",
        headingEs: "Qué significa realmente el marketing inmobiliario",
        body: [
          "Real estate marketing isn't advertising a listing — it's the complete system that moves a stranger from seeing an ad to signing a contract. That system has four connected parts: traffic (getting the right people to see the property), capture (turning a visitor into a contact), follow-up (responding fast enough to stay top of mind), and nurture (staying in front of buyers who aren't ready yet). Most agencies and developers only build one or two of these well, which is why campaigns that generate plenty of clicks still generate few closings.",
        ],
        bodyEs: [
          "El marketing inmobiliario va mucho más allá de anunciar un listado: es el sistema completo que acompaña a un desconocido desde que ve un anuncio hasta que firma un contrato. Ese sistema tiene cuatro partes conectadas: tráfico (llevar a la gente correcta a ver la propiedad), captación (convertir a un visitante en un contacto), seguimiento (responder lo suficientemente rápido para seguir presente), y nutrición (mantenerse frente a compradores que aún no están listos). La mayoría de las agencias y desarrolladoras solo construyen bien una o dos de estas partes, por eso hay campañas que generan muchos clics pero pocos cierres.",
        ],
      },
      {
        id: "cuatro-pilares",
        heading: "The four pillars of a system that actually converts",
        headingEs: "Los cuatro pilares de un sistema que sí convierte",
        body: [
          "Traffic without capture wastes ad spend on visitors who leave and never come back. Capture without follow-up wastes the lead you already paid for. Follow-up without nurture wastes every buyer who wasn't ready on day one — which, in real estate, is most of them. The businesses that win aren't the ones with the biggest ad budget; they're the ones with no leaks anywhere in the four stages.",
        ],
        bodyEs: [
          "Tráfico sin captación desperdicia el gasto publicitario en visitantes que se van y no vuelven. Captación sin seguimiento desperdicia el lead que ya pagaste. Seguimiento sin nutrición desperdicia a todo comprador que no estaba listo el primer día, que en bienes raíces es la mayoría. Los negocios que ganan no son los que tienen el presupuesto publicitario más grande; son los que no tienen fugas en ninguna de las cuatro etapas.",
        ],
      },
      {
        id: "trafico-fuentes",
        heading: "Where real estate traffic actually comes from",
        headingEs: "De dónde viene realmente el tráfico inmobiliario",
        body: [
          'Meta Ads works best for visual, lifestyle-driven selling and for pre-sales where nothing is built yet — renders and drone footage generate desire before a search exists. Google Ads captures buyers who already search by area or property type. Portals like Inmuebles24 and Vivanuncios generate volume with weaker intent, and work best as a top-of-funnel source feeding your own retargeting rather than the final destination. See how we break down when to invest in each channel and how much in "how much to invest in real estate marketing."',
        ],
        bodyEs: [
          'Meta Ads funciona mejor para venta visual y de estilo de vida, y para preventas donde todavía no hay nada construido: ahí, renders y tomas de dron generan deseo incluso antes de que exista la búsqueda. Google Ads captura compradores que ya buscan por zona o tipo de propiedad. Portales como Inmuebles24 y Vivanuncios generan volumen con menor intención, y funcionan mejor como fuente de la parte alta del embudo que alimenta tu propio retargeting, no como destino final. Revisa cómo desglosamos cuánto invertir en cada canal en nuestra guía de "cuánto invertir en marketing inmobiliario."',
        ],
      },
      {
        id: "landing-y-mapas",
        heading: "Landing pages and interactive lot maps",
        headingEs: "Landing pages y mapas interactivos de lotes",
        body: [
          'A property page that shows everything for free — every photo, the full price list, every available lot — gives visitors no reason to leave their contact information. For land and pre-sale developments specifically, an interactive lot map that lets buyers explore availability and pricing in real time converts dramatically better than a static PDF brochure, because it turns browsing into an action. We cover exactly how these maps work in "interactive lot maps."',
        ],
        bodyEs: [
          'Una página de propiedad que muestra todo gratis (cada foto, la lista de precios completa, cada lote disponible) no le da al visitante ninguna razón para dejar su contacto. Para desarrollos de terrenos y preventas específicamente, un mapa interactivo de lotes que permite a los compradores explorar disponibilidad y precios en tiempo real convierte dramáticamente mejor que un PDF estático, porque convierte el navegar en una acción. Cubrimos exactamente cómo funcionan estos mapas en "mapas interactivos de lotes."',
        ],
      },
      {
        id: "seguimiento-clasificacion",
        heading: "Follow-up and lead classification: hot, warm, cold, ghost",
        headingEs: "Seguimiento y clasificación de leads: hot, warm, cold, ghost",
        body: [
          'Not every lead deserves the same follow-up. We classify every real estate lead into one of four buckets: hot (ready to schedule a visit this week), warm (interested but comparing options), cold (early research, months from deciding), and ghost (stopped responding entirely). Each bucket gets a different cadence and script — treating a cold lead like a hot one burns goodwill, and treating a hot lead like a cold one loses the sale to whoever calls back first. The full scripts and timing are in "real estate lead follow-up."',
        ],
        bodyEs: [
          'No todos los leads merecen el mismo seguimiento. Clasificamos cada lead inmobiliario en una de cuatro categorías: hot (listo para agendar una visita esta semana), warm (interesado pero comparando opciones), cold (investigación temprana, a meses de decidir), y ghost (dejó de responder por completo). Cada categoría recibe una cadencia y un guion distintos. Tratar a un lead cold como uno hot desgasta la relación, y tratar a un lead hot como uno cold pierde la venta frente a quien llame primero. Los guiones y tiempos completos están en "seguimiento de leads inmobiliarios."',
        ],
      },
      {
        id: "crm-nutricion",
        heading: "CRM and long-term nurture",
        headingEs: "CRM y nutrición a largo plazo",
        body: [
          "The real estate sales cycle runs weeks to months, which means most leads won't close from the first call — they close from consistent presence over time. Every lead needs a home in a CRM with an automated nurture sequence: new inventory matching their criteria, market updates, and a human check-in every one to two weeks. Leads that fall out of a spreadsheet after the first missed call are leads you already paid for and threw away.",
        ],
        bodyEs: [
          "El ciclo de venta inmobiliario dura semanas o meses, lo que significa que la mayoría de los leads no cierran en la primera llamada: cierran porque alguien estuvo presente, con constancia, el tiempo suficiente. Todo lead necesita un hogar en un CRM con una secuencia de nutrición automatizada: inventario nuevo que coincida con sus criterios, actualizaciones de mercado y un contacto humano cada una o dos semanas. Los leads que se caen de una hoja de cálculo después de la primera llamada perdida son leads que ya pagaste y tiraste a la basura.",
        ],
      },
      {
        id: "video-drone-preventas",
        heading: "Video, drone footage and pre-sale content",
        headingEs: "Video, dron y contenido para preventas",
        body: [
          "When there's nothing built yet, the sale happens entirely in the buyer's imagination — which means the content has to do the work a finished property would normally do. Drone footage of the land and surroundings, 3D renders of the finished product, and a clear narrative of the project's phases and timeline are what convert interest into a deposit. Developments that skip this step and rely only on floor plans and price sheets consistently sell slower than ones that invest in real production.",
        ],
        bodyEs: [
          "Cuando todavía no hay nada construido, la venta ocurre casi por completo en la imaginación del comprador, así que el contenido tiene que hacer el trabajo que normalmente haría una propiedad ya construida. Tomas de dron del terreno y los alrededores, renders 3D del producto final y una narrativa clara de las fases y el cronograma del proyecto son lo que convierte el interés en un apartado. Los desarrollos que se saltan este paso y dependen solo de planos y listas de precios venden consistentemente más lento que los que invierten en producción real.",
        ],
      },
      {
        id: "cuanto-cuesta-sistema",
        heading: "What a real estate marketing system actually costs",
        headingEs: "Cuánto cuesta realmente un sistema de marketing inmobiliario",
        body: [
          'Budget varies enormously by ticket size and inventory volume, but as a market range for 2026, a mid-size development running paid traffic, a proper landing page and CRM should plan for $15,000 to $25,000 MXN monthly in media spend, plus the one-time cost of the landing infrastructure. Premium developments and large pre-sales typically run higher because cost per qualified lead rises with price point. We break the full range down channel by channel in "how much to invest in real estate marketing."',
        ],
        bodyEs: [
          'El presupuesto varía enormemente según el ticket y el volumen de inventario, pero como rango de mercado para 2026, un desarrollo mediano que corre tráfico pagado, una landing adecuada y CRM debe planear entre $15,000 y $25,000 MXN mensuales en medios, más el costo único de la infraestructura de landing. Los desarrollos premium y las preventas grandes suelen costar más porque el costo por lead calificado sube con el ticket. Desglosamos el rango completo canal por canal en "cuánto invertir en marketing inmobiliario."',
        ],
      },
      {
        id: "errores-comunes",
        heading: "The most common mistakes in Mexican real estate marketing",
        headingEs: "Los errores más comunes del marketing inmobiliario en México",
        body: [
          "The three we see most often: showing the entire listing before capturing contact info, so there's no reason to leave a name and number; running ads without a CRM, so leads live and die in a WhatsApp inbox with no follow-up structure; and treating every lead the same regardless of how ready they are to buy. Each of these is fixable in weeks, not months — the system doesn't need to be perfect, it just needs every stage covered.",
        ],
        bodyEs: [
          "Los tres que vemos más seguido: mostrar todo el listado antes de capturar el contacto, así que no hay razón para dejar nombre y teléfono; correr anuncios sin CRM, así que los leads viven y mueren en un chat de WhatsApp sin estructura de seguimiento; y tratar a todos los leads igual sin importar qué tan listos estén para comprar. Cada uno de estos se puede corregir en semanas, no en meses. El sistema no necesita ser perfecto: solo necesita tener cubierta cada etapa.",
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cuánto cuesta un sistema completo de marketing inmobiliario?",
        qEn: "How much does a complete real estate marketing system cost?",
        a: "Como rango de mercado para 2026, un sistema completo (tráfico pagado, landing page, CRM y seguimiento) corre entre $15,000 y $25,000 MXN mensuales para un desarrollo mediano, sin contar el costo único de construir la infraestructura digital. Categorías premium o preventas grandes suelen costar más porque el costo por lead calificado es mayor. El desglose completo por canal está en nuestra guía de cuánto invertir en marketing inmobiliario.",
        aEn: "As a 2026 market range, a complete system — paid traffic, landing page, CRM and follow-up — runs between $15,000 and $25,000 MXN per month for a mid-size development, not counting the one-time cost of building the digital infrastructure. Premium categories or large pre-sales usually cost more because cost per qualified lead is higher. The full channel-by-channel breakdown is in our guide on how much to invest in real estate marketing.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados con marketing inmobiliario?",
        qEn: "How long does it take to see results with real estate marketing?",
        a: "El tráfico pagado puede generar los primeros leads en la primera semana, pero el ciclo de venta inmobiliario completo, de primer contacto a contrato firmado, suele correr de varias semanas a varios meses según el ticket. Por eso el sistema necesita nutrición constante, no solo generación de leads: la mayoría de los cierres vienen de leads que llevan un tiempo en seguimiento, no de la primera llamada.",
        aEn: "Paid traffic can generate the first leads within the first week, but the full real estate sales cycle — from first contact to signed contract — usually runs from several weeks to several months depending on the price point. That's why the system needs constant nurture, not just lead generation: most closings come from leads that have been in follow-up for a while, not from the first call.",
      },
      {
        q: "¿Necesito una agencia especializada en inmobiliario o cualquier agencia de marketing sirve?",
        qEn: "Do I need a real estate-specialized agency, or will any marketing agency work?",
        a: "Cualquier agencia puede correr anuncios, pero el marketing inmobiliario tiene particularidades (ciclos de venta largos, tickets altos y la necesidad de clasificar leads según qué tan listos están para comprar) que una agencia generalista no siempre entiende de entrada. Vale la pena preguntar directamente por casos reales en el sector inmobiliario, no solo experiencia general en publicidad.",
        aEn: "Any agency can run ads, but real estate marketing has particularities — long sales cycles, high price points, and the need to classify leads by how ready they are to buy — that a generalist agency doesn't always understand out of the gate. It's worth directly asking for real case studies in the real estate sector, not just general advertising experience.",
      },
      {
        q: "¿Funciona igual para preventa que para inventario terminado?",
        qEn: "Does it work the same for pre-sales as for finished inventory?",
        a: "No del todo. En preventa, el contenido tiene que generar deseo sin tener todavía un producto físico que mostrar. Ahí es donde el video, los renders y los mapas interactivos de lotes hacen el trabajo pesado. Con inventario terminado, la gente puede buscar y verificar directamente, así que Google Ads y contenido con fotos reales del producto suelen rendir mejor.",
        aEn: "Not entirely. In pre-sales, the content has to generate desire without a physical product to show — that's where video, renders and interactive lot maps do the heavy lifting. With finished inventory, people can search for and verify it directly, so Google Ads and content with real photos of the product tend to perform better.",
      },
      {
        q: "¿Qué es un mapa interactivo de lotes y realmente lo necesito?",
        qEn: "What is an interactive lot map and do I actually need one?",
        a: "Es una herramienta que le permite al comprador explorar la disponibilidad, ubicación y precio de cada lote en tiempo real, en vez de pedir esa información por WhatsApp o revisar un PDF desactualizado. No es indispensable para cualquier propiedad, pero para desarrollos de terrenos o preventas con múltiples unidades, suele ser la diferencia entre un visitante que se va sin dejar contacto y uno que aparta ahí mismo.",
        aEn: "It's a tool that lets buyers explore the availability, location and price of each lot in real time, instead of asking for that information over WhatsApp or checking an outdated PDF. It's not essential for every property, but for land developments or pre-sales with multiple units, it's often the difference between a visitor who leaves without contact info and one who reserves on the spot.",
      },
      {
        q: "¿Cómo empiezo si no tengo nada de esto todavía?",
        qEn: "How do I start if I don't have any of this yet?",
        a: "Empieza por la pieza que más duele: si tienes tráfico pero no conviertes, arregla la landing page primero. Si conviertes pero no cierras, el problema es seguimiento y clasificación de leads. Si ni siquiera tienes tráfico, ahí empieza la conversación de presupuesto. No necesitas construir las cuatro piezas el mismo mes, pero sí necesitas saber cuál te está costando más ventas ahora mismo.",
        aEn: "Start with the piece that hurts the most: if you have traffic but aren't converting, fix the landing page first. If you're converting but not closing, the problem is follow-up and lead classification. If you don't even have traffic yet, that's where the budget conversation starts. You don't need to build all four pieces the same month, but you do need to know which one is costing you the most sales right now.",
      },
    ],
    schema: {
      keywords: [
        "real estate marketing Mexico",
        "real estate marketing guide",
        "property marketing system",
        "Baja California real estate marketing",
      ],
      keywordsEs: [
        "marketing inmobiliario México",
        "guía marketing inmobiliario",
        "sistema de marketing inmobiliario",
        "marketing inmobiliario Baja California",
      ],
    },
  },
  {
    slug: "como-generar-leads-inmobiliarios",
    title: "How to Generate Real Estate Leads (Complete System)",
    titleEs: "Cómo Generar Leads Inmobiliarios (Sistema Completo)",
    category: "Real Estate Marketing",
    categoryEs: "Marketing Inmobiliario",
    excerpt:
      "A channel-by-channel system for generating real estate leads in Mexico — direct answers, real examples from Baja California, and verifiable numbers.",
    excerptEs:
      "Un sistema canal por canal para generar leads inmobiliarios en México — respuestas directas, ejemplos reales de Baja California y datos verificables.",
    readingTime: 10,
    date: "2026-07-17",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Generating real estate leads is a three-part system: paid traffic that targets buyer intent, a landing experience that captures contact before revealing the full listing, and an automated response within five minutes of the first inquiry. Skip any of the three and the other two lose most of their value — traffic without capture just raises your ad costs.",
    ledeEs:
      "Generar leads inmobiliarios es un sistema de tres partes: tráfico pagado dirigido a intención de compra, una experiencia de aterrizaje que captura el contacto antes de revelar todo el listado, y una respuesta automática en los primeros cinco minutos de la primera consulta. Si falta una de las tres, las otras dos pierden casi todo su valor: el tráfico sin captación solo sube tu costo publicitario, sin traerte nada a cambio.",
    sections: [
      {
        id: "canales-que-funcionan",
        heading: "Which channels actually generate leads",
        headingEs: "Qué canales realmente generan leads",
        body: [
          "Meta Ads generates volume through visual, interruption-based selling — video walkthroughs and drone footage that stop the scroll of people who weren't actively searching yet. Google Ads captures buyers already searching by area or property type, at a higher cost per click but with stronger intent. Portals like Inmuebles24 and Vivanuncios add volume but weaker intent, and work best feeding your own retargeting rather than as a final destination. Most developments need at least two of the three to keep a full pipeline.",
        ],
        bodyEs: [
          "Meta Ads genera volumen a través de venta visual e interruptiva: recorridos en video y tomas de dron que detienen el scroll de gente que todavía no buscaba activamente. Google Ads captura compradores que ya buscan por zona o tipo de propiedad, con un costo por clic más alto pero mayor intención. Portales como Inmuebles24 y Vivanuncios suman volumen con menor intención, y funcionan mejor alimentando tu propio retargeting que como destino final. La mayoría de los desarrollos necesita al menos dos de los tres para mantener un flujo completo.",
        ],
      },
      {
        id: "captura-antes-de-mostrar",
        heading: "Capture contact before you reveal everything",
        headingEs: "Captura el contacto antes de mostrarlo todo",
        body: [
          "A property page that shows every photo, the full price list and the floor plan without asking for anything in return gives a visitor no reason to leave contact information. The order that converts: a strong hero image and a one-line hook, a short form above the fold, then the full gallery and pricing below as the reward for engaging. This single change — reordering what's free versus what's earned — is usually the highest-leverage fix on an underperforming listing page.",
        ],
        bodyEs: [
          "Una página de propiedad que muestra cada foto, la lista de precios completa y el plano sin pedir nada a cambio no le da al visitante ninguna razón para dejar su contacto. El orden que convierte: una imagen principal fuerte y un gancho de una línea, un formulario corto arriba del pliegue, y luego la galería completa y los precios abajo como recompensa por interactuar. Ese solo cambio, reordenar qué es gratis y qué hay que ganarse, suele ser el ajuste de mayor impacto en una página de listado de bajo rendimiento.",
        ],
      },
      {
        id: "mapas-para-terrenos",
        heading: "For land and pre-sales, add an interactive map",
        headingEs: "Para terrenos y preventas, suma un mapa interactivo",
        body: [
          "When you're selling individual lots or units rather than a single property, a static price list forces the buyer to ask you for information you could just show them. An interactive lot map that displays real-time availability and pricing lets serious buyers self-qualify and reserve without a back-and-forth over WhatsApp. We go deeper on how these maps work and when they're worth building in \"interactive lot maps.\"",
        ],
        bodyEs: [
          'Cuando vendes lotes o unidades individuales en vez de una sola propiedad, una lista de precios estática obliga al comprador a pedirte información que podrías simplemente mostrarle. Un mapa interactivo de lotes que muestra disponibilidad y precios en tiempo real permite que los compradores serios se autocalifiquen y aparten sin ida y vuelta por WhatsApp. Profundizamos en cómo funcionan estos mapas y cuándo vale la pena construirlos en "mapas interactivos de lotes."',
        ],
      },
      {
        id: "respuesta-cinco-minutos",
        heading: "The five-minute response window",
        headingEs: "La ventana de respuesta de cinco minutos",
        body: [
          'Real estate leads decay fast, because buyers are often browsing several developments in the same session. A lead contacted within five minutes converts dramatically better than one contacted an hour later. That means an automated WhatsApp or SMS response the moment a form is submitted, followed by a human call within the same window — not a callback queued for later in the day. The full scripts and cadence by lead type are in "real estate lead follow-up."',
        ],
        bodyEs: [
          'Los leads inmobiliarios se enfrían rápido, porque los compradores suelen estar viendo varios desarrollos en la misma sesión. Un lead contactado en cinco minutos convierte dramáticamente mejor que uno contactado una hora después. Eso significa una respuesta automática por WhatsApp o SMS en el momento en que se envía el formulario, seguida de una llamada humana dentro de esa misma ventana, no de una devolución de llamada agendada para más tarde. Los guiones y la cadencia completa por tipo de lead están en "seguimiento de leads inmobiliarios."',
        ],
      },
      {
        id: "presupuesto-realista",
        heading: "What a realistic lead-generation budget looks like",
        headingEs: "Cómo luce un presupuesto realista de generación de leads",
        body: [
          'As a market range for 2026, expect to invest $15,000 to $25,000 MXN monthly across paid channels for a mid-size development, not counting the landing page and CRM setup. Premium categories and large pre-sales typically need more because cost per qualified lead rises with price point. A full breakdown of how to split that budget across channels is in "how much to invest in real estate marketing."',
        ],
        bodyEs: [
          'Como rango de mercado para 2026, considera invertir entre $15,000 y $25,000 MXN mensuales en canales pagados para un desarrollo mediano, sin contar la landing page ni la configuración del CRM. Las categorías premium y las preventas grandes suelen necesitar más porque el costo por lead calificado sube con el ticket. Un desglose completo de cómo repartir ese presupuesto por canal está en "cuánto invertir en marketing inmobiliario."',
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cuál es el canal más rápido para empezar a generar leads inmobiliarios?",
        qEn: "What's the fastest channel to start generating real estate leads?",
        a: "Google Ads suele generar los primeros leads más rápido porque intercepta gente que ya está buscando activamente por zona o tipo de propiedad. Meta Ads toma un poco más de tiempo porque el algoritmo necesita aprender a quién mostrarle el anuncio, pero suele generar mayor volumen una vez optimizado.",
        aEn: "Google Ads usually generates the first leads fastest because it intercepts people already actively searching by area or property type. Meta Ads takes a bit longer because the algorithm needs to learn who to show the ad to, but it usually generates higher volume once optimized.",
      },
      {
        q: "¿Cuántos leads necesito para cerrar una venta?",
        qEn: "How many leads do I need to close one sale?",
        a: "Varía mucho según el ticket y la categoría, pero como referencia de mercado, es común necesitar entre 20 y 50 leads calificados para cerrar una venta en categorías de ticket medio-alto, y menos en preventas con alta demanda. Lo importante no es solo el volumen, sino qué tan bien se clasifican y se les da seguimiento.",
        aEn: "It varies a lot by price point and category, but as a market reference, it's common to need between 20 and 50 qualified leads to close one sale in mid-to-high ticket categories, and fewer in high-demand pre-sales. What matters isn't just volume, but how well leads are classified and followed up.",
      },
      {
        q: "¿Los leads de portales como Inmuebles24 son de buena calidad?",
        qEn: "Are leads from portals like Inmuebles24 good quality?",
        a: "Suelen tener menor intención que los que vienen de tus propios anuncios, porque la persona está comparando varias propiedades en el mismo portal al mismo tiempo. Siguen siendo útiles para volumen, pero conviene tratarlos con un guion de calificación más riguroso antes de invertir tiempo de seguimiento intensivo.",
        aEn: "They tend to have lower intent than leads coming from your own ads, because the person is comparing several properties on the same portal at the same time. They're still useful for volume, but it's worth treating them with a more rigorous qualification script before investing intensive follow-up time.",
      },
      {
        q: "¿Necesito un CRM desde el inicio o puedo empezar con WhatsApp y Excel?",
        qEn: "Do I need a CRM from day one, or can I start with WhatsApp and a spreadsheet?",
        a: "Puedes empezar con herramientas simples si el volumen es bajo, pero en cuanto manejas más de unos cuantos leads a la semana, un CRM se vuelve indispensable. Sin uno, los leads se pierden entre conversaciones y nadie sabe con certeza a quién le toca dar seguimiento.",
        aEn: "You can start with simple tools if volume is low, but once you're handling more than a few leads a week, a CRM becomes essential — without one, leads get lost between conversations and nobody's sure who's responsible for following up.",
      },
      {
        q: "¿Qué hago si un lead deja de responder?",
        qEn: "What do I do if a lead stops responding?",
        a: "No lo elimines de inmediato. Clasifícalo como ghost y muévelo a una secuencia de nutrición de baja frecuencia (actualizaciones de inventario o de precio cada pocas semanas) en vez de seguir insistiendo con el mismo mensaje. Muchos leads ghost regresan meses después cuando su situación cambia.",
        aEn: "Don't delete it right away — classify it as ghost and move it to a lower-frequency nurture sequence (inventory or price updates every few weeks) instead of continuing to push the same message. Many ghost leads come back months later when their situation changes.",
      },
    ],
    schema: {
      keywords: [
        "real estate leads Mexico",
        "generate real estate leads",
        "real estate lead generation system",
      ],
      keywordsEs: [
        "leads inmobiliarios México",
        "generar leads inmobiliarios",
        "sistema de generación de leads",
      ],
    },
  },
  {
    slug: "mapa-interactivo-de-lotes",
    title: "Interactive Lot Maps: The Secret Weapon of Pre-Sales",
    titleEs: "Mapas Interactivos de Lotes: el Arma Secreta de las Preventas",
    category: "Real Estate Marketing",
    categoryEs: "Marketing Inmobiliario",
    excerpt:
      "How interactive lot maps turn browsing into reservations for land developments and pre-sales — a tactic almost nobody publishes about in Spanish.",
    excerptEs:
      "Cómo los mapas interactivos de lotes convierten el navegar en apartados para desarrollos de terrenos y preventas — una táctica que casi nadie publica en español.",
    readingTime: 7,
    date: "2026-07-19",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "An interactive lot map is a live, clickable site plan that shows real-time availability, pricing and location for every lot in a development, replacing the back-and-forth of asking an agent for a PDF price list. For land developments and pre-sales, it consistently outperforms static brochures because it lets serious buyers self-qualify and reserve in the same visit.",
    ledeEs:
      "Un mapa interactivo de lotes es un plano del desarrollo interactivo y en vivo que muestra disponibilidad, precio y ubicación de cada lote en tiempo real, reemplazando el ir y venir de pedirle a un asesor una lista de precios en PDF. Para desarrollos de terrenos y preventas, supera consistentemente a los folletos estáticos porque permite que compradores serios se autocalifiquen y aparten en la misma visita.",
    sections: [
      {
        id: "que-es-un-mapa-interactivo",
        heading: "What an interactive lot map actually is",
        headingEs: "Qué es realmente un mapa interactivo de lotes",
        body: [
          'It\'s a digital site plan, built on top of the actual development layout, where each lot is a clickable element showing its size, price, orientation and availability status in real time. Instead of a buyer messaging to ask "which lots are still available," they can see it themselves, filter by budget or size, and reserve directly. It turns a static sales document into a live inventory system.',
        ],
        bodyEs: [
          "Es un plano digital del desarrollo, construido sobre el trazo real del proyecto, donde cada lote es un elemento clickeable que muestra su tamaño, precio, orientación y estatus de disponibilidad en tiempo real. En vez de que el comprador escriba para preguntar qué lotes siguen disponibles, puede verlo él mismo, filtrar por presupuesto o tamaño, y apartar directamente. Convierte un documento de ventas estático en un sistema de inventario vivo.",
        ],
      },
      {
        id: "por-que-funciona",
        heading: "Why it converts better than a PDF price list",
        headingEs: "Por qué convierte mejor que una lista de precios en PDF",
        body: [
          'A PDF goes out of date the moment a lot sells, which means buyers are often looking at inaccurate availability without knowing it — and salespeople waste time answering the same "is this one still available" question over and over. A live map removes that friction entirely: what the buyer sees is what\'s actually available, which builds trust and shortens the path from interest to reservation. It also removes a specific bottleneck: on a development with 40 or more lots, a sales team can easily field a dozen "is this one still available" messages a day, time that a live map gives back entirely.',
        ],
        bodyEs: [
          'Un PDF se desactualiza en el momento en que un lote se vende, lo que significa que los compradores muchas veces están viendo disponibilidad incorrecta sin saberlo, y el equipo de ventas pierde tiempo respondiendo la misma pregunta de "¿este sigue disponible?" una y otra vez. Un mapa en vivo elimina esa fricción por completo: lo que el comprador ve es lo que realmente está disponible, lo que genera confianza y acorta el camino de interés a apartado. También elimina un cuello de botella específico: en un desarrollo con 40 lotes o más, un equipo de ventas fácilmente recibe una docena de mensajes al día preguntando "¿este sigue disponible?", tiempo que un mapa en vivo devuelve por completo.',
        ],
      },
      {
        id: "casos-reales",
        heading: "Where we've built this: Bruma Norte and Enya",
        headingEs: "Dónde lo hemos construido: Bruma Norte y Enya",
        body: [
          "We've built interactive lot maps for developments including Bruma Norte and Enya, where buyers can explore availability, pricing and lot dimensions without waiting on a sales team to respond. It's still a rare feature in the Mexican real estate market — most developments, even well-funded ones, still sell off a static PDF or a spreadsheet a sales rep updates by hand. Buyers filter by price range or lot size and see results in real time, the same information a sales rep would otherwise take minutes to pull up manually for each inquiry.",
        ],
        bodyEs: [
          "Hemos construido mapas interactivos de lotes para desarrollos como Bruma Norte y Enya, donde los compradores pueden explorar disponibilidad, precios y dimensiones de lote sin esperar a que un equipo de ventas responda. Sigue siendo una característica poco común en el mercado inmobiliario mexicano. La mayoría de los desarrollos, incluso los bien financiados, todavía venden desde un PDF estático o una hoja de cálculo que un vendedor actualiza a mano. Los compradores filtran por rango de precio o tamaño de lote y ven resultados en tiempo real, la misma información que un vendedor tardaría varios minutos en buscar manualmente para cada consulta.",
        ],
      },
      {
        id: "cuando-vale-la-pena",
        heading: "When it's worth building one",
        headingEs: "Cuándo vale la pena construir uno",
        body: [
          "It makes the most sense for developments with multiple lots or units for sale simultaneously — land developments, multi-phase pre-sales, or any project where buyers are choosing between many similar options. For a single property or a small handful of units, the return doesn't justify the build; a well-structured landing page is enough. The bigger the inventory, the bigger the leverage. As a rough threshold, developments under roughly 15-20 units rarely see enough volume of simultaneous inquiries to justify the build cost, while anything above that starts generating real time savings for the sales team every week.",
        ],
        bodyEs: [
          "Tiene más sentido para desarrollos con múltiples lotes o unidades a la venta simultáneamente: desarrollos de terrenos, preventas de varias fases, o cualquier proyecto donde los compradores eligen entre muchas opciones parecidas. Para una sola propiedad o un puñado de unidades, el retorno no justifica construirlo; una landing page bien estructurada es suficiente. Entre más grande el inventario, mayor la palanca. Como referencia aproximada, los desarrollos con menos de unas 15 a 20 unidades rara vez tienen suficiente volumen de consultas simultáneas para justificar el costo de construcción, mientras que por encima de eso el ahorro de tiempo semanal para el equipo de ventas empieza a ser real.",
        ],
      },
      {
        id: "integracion-sistema",
        heading: "How it fits into the rest of the lead system",
        headingEs: "Cómo encaja en el resto del sistema de leads",
        body: [
          'The map itself is a capture tool, not a replacement for follow-up — when a buyer reserves a lot through the map, that action should trigger the same five-minute response and CRM entry as any other lead. The map increases the quality of interest you capture; the follow-up system is still what turns that interest into a signed contract. See the complete framework in "how to generate real estate leads."',
        ],
        bodyEs: [
          'El mapa en sí es una herramienta de captación, no un reemplazo del seguimiento. Cuando un comprador aparta un lote a través del mapa, esa acción debe disparar la misma respuesta de cinco minutos y el mismo registro en CRM que cualquier otro lead. El mapa aumenta la calidad del interés que capturas; el sistema de seguimiento sigue siendo lo que convierte ese interés en un contrato firmado. Revisa el marco completo en "cómo generar leads inmobiliarios."',
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Un mapa interactivo de lotes solo sirve para terrenos?",
        qEn: "Does an interactive lot map only work for land developments?",
        a: "Funciona mejor para terrenos y preventas con múltiples unidades, pero el mismo concepto aplica a cualquier inventario donde el comprador elige entre varias opciones parecidas: condominios en preventa, locales comerciales en un desarrollo, o etapas de un fraccionamiento.",
        aEn: "It works best for land and pre-sales with multiple units, but the same concept applies to any inventory where the buyer is choosing between several similar options — pre-sale condos, commercial units in a development, or phases of a subdivision.",
      },
      {
        q: "¿Cuánto tiempo toma construir uno?",
        qEn: "How long does it take to build one?",
        a: "Depende del número de lotes y de qué tan definido esté el trazo del desarrollo, pero un mapa interactivo funcional suele tomar de tres a seis semanas, incluyendo la carga de disponibilidad y precios reales.",
        aEn: "It depends on the number of lots and how finalized the development's layout is, but a functional interactive map usually takes three to six weeks, including loading real availability and pricing.",
      },
      {
        q: "¿Cómo se mantiene actualizada la disponibilidad?",
        qEn: "How is availability kept up to date?",
        a: "El mapa se conecta a un panel simple donde el equipo de ventas marca un lote como apartado o vendido en segundos, y el cambio se refleja de inmediato para cualquiera que esté viendo el mapa. No requiere conocimiento técnico para actualizarse.",
        aEn: "The map connects to a simple panel where the sales team marks a lot as reserved or sold in seconds, and the change reflects immediately for anyone viewing the map. It doesn't require technical knowledge to update.",
      },
      {
        q: "¿Reemplaza al equipo de ventas?",
        qEn: "Does it replace the sales team?",
        a: "No: reemplaza las preguntas repetitivas sobre disponibilidad y precio, para que el equipo de ventas dedique su tiempo a cerrar a los compradores que ya se autocalificaron a través del mapa, en vez de contestar las mismas preguntas todo el día.",
        aEn: "No — it replaces the repetitive questions about availability and price, so the sales team spends their time closing buyers who already self-qualified through the map, instead of answering the same questions all day.",
      },
    ],
    schema: {
      keywords: [
        "interactive lot map",
        "real estate pre-sale marketing",
        "land development marketing Mexico",
      ],
      keywordsEs: [
        "mapa interactivo de lotes",
        "marketing de preventas inmobiliarias",
        "marketing desarrollos de terrenos",
      ],
    },
  },
  {
    slug: "seguimiento-de-leads-inmobiliarios",
    title: "Real Estate Lead Follow-Up: Scripts and Timing",
    titleEs: "Seguimiento de Leads Inmobiliarios: Guiones y Tiempos",
    category: "Real Estate Marketing",
    categoryEs: "Marketing Inmobiliario",
    excerpt:
      "The hot/warm/cold/ghost classification system and the exact scripts and timing that keep real estate leads from going cold.",
    excerptEs:
      "El sistema de clasificación hot/warm/cold/ghost y los guiones y tiempos exactos que evitan que los leads inmobiliarios se enfríen.",
    readingTime: 8,
    date: "2026-07-21",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Real estate leads need to be classified the moment they arrive — hot, warm, cold or ghost — because each category requires a different response speed, script and cadence. Treating every lead the same is the single most common reason developments generate plenty of leads but close few sales.",
    ledeEs:
      "Los leads inmobiliarios necesitan clasificarse en el momento en que llegan (hot, warm, cold o ghost), porque cada categoría requiere una velocidad de respuesta, un guion y una cadencia distintos. Tratar a todos los leads igual es la razón más común por la que los desarrollos generan muchos leads pero cierran pocas ventas.",
    sections: [
      {
        id: "la-clasificacion",
        heading: "The hot, warm, cold, ghost classification",
        headingEs: "La clasificación hot, warm, cold, ghost",
        body: [
          "Hot: asking specific questions about price, availability or scheduling a visit — ready this week. Warm: engaged and responsive but still comparing developments or waiting on financing. Cold: early research, months away from deciding, often just requested general information. Ghost: went completely silent after initial contact. This classification should happen on the first interaction, not after several follow-up attempts.",
        ],
        bodyEs: [
          "Hot: hace preguntas específicas sobre precio o disponibilidad, o quiere agendar una visita. Listo esta semana. Warm: responde y está interesado pero sigue comparando desarrollos o esperando financiamiento. Cold: investigación temprana, a meses de decidir, muchas veces solo pidió información general. Ghost: se quedó completamente en silencio después del contacto inicial. Esta clasificación debe hacerse en la primera interacción, no después de varios intentos de seguimiento.",
        ],
      },
      {
        id: "guion-hot",
        heading: "Hot leads: respond in five minutes, close the visit",
        headingEs: "Leads hot: responde en cinco minutos, cierra la visita",
        body: [
          "The script for a hot lead has one job: get a scheduled visit on the calendar before the conversation ends. Skip the general pitch — they already know what they're interested in. Confirm availability, offer two specific time slots, and follow up by phone if the WhatsApp message isn't answered within fifteen minutes. Every minute of delay here is a minute a competing development has to reach them first.",
        ],
        bodyEs: [
          "El guion para un lead hot tiene un solo trabajo: agendar una visita antes de que termine la conversación. Sáltate el discurso general: ya sabe en qué está interesado. Confirma disponibilidad, ofrece dos horarios específicos, y da seguimiento por teléfono si el mensaje de WhatsApp no se contesta en quince minutos. Cada minuto de demora aquí es un minuto que un desarrollo competidor tiene para contactarlo primero.",
        ],
      },
      {
        id: "guion-warm-cold",
        heading: "Warm and cold leads: nurture without pressure",
        headingEs: "Leads warm y cold: nutrir sin presionar",
        body: [
          "Warm leads respond well to specific, useful follow-up — new availability, financing options, or an invitation to a low-pressure open house — every five to seven days. Cold leads need a slower cadence: monthly updates on inventory or pricing changes, without a hard sell, because pushing too hard too early is what turns a cold lead into a ghost. The goal with both is staying present until they're ready, not rushing them there.",
        ],
        bodyEs: [
          "Los leads warm responden bien a seguimiento específico y útil (nueva disponibilidad, opciones de financiamiento, o una invitación a un open house sin presión) cada cinco a siete días. Los leads cold necesitan una cadencia más lenta: actualizaciones mensuales de inventario o cambios de precio, sin presionar la venta, porque insistir demasiado pronto es lo que convierte a un lead cold en un ghost. El objetivo con ambos es mantenerse presente hasta que estén listos, no apurarlos a llegar ahí.",
        ],
      },
      {
        id: "recuperar-ghost",
        heading: "Recovering ghost leads",
        headingEs: "Recuperar leads ghost",
        body: [
          "Don't delete a ghost lead — move it to a low-frequency, low-pressure sequence: a market update or a price change every few weeks, with no expectation of a reply. A meaningful percentage of ghost leads come back months later when their financial situation or timeline changes, and having stayed minimally present costs almost nothing compared to acquiring a new lead from scratch.",
        ],
        bodyEs: [
          "No elimines a un lead ghost. Muévelo, mejor, a una secuencia de baja frecuencia y sin presión: una actualización de mercado o un cambio de precio cada pocas semanas, sin esperar respuesta. Un porcentaje importante de los leads ghost regresa meses después cuando cambia su situación financiera o su tiempo, y haber mantenido una presencia mínima cuesta casi nada comparado con adquirir un lead nuevo desde cero.",
        ],
      },
      {
        id: "donde-vivir-esto",
        heading: "Where this whole system needs to live",
        headingEs: "Dónde tiene que vivir todo este sistema",
        body: [
          'None of this works from a WhatsApp inbox and memory — every lead, its classification, and its next follow-up date needs to live in a CRM that the whole sales team can see. Without it, classification decays within days as new leads arrive and old ones get forgotten. The complete lead-generation system this follow-up process fits into is in "how to generate real estate leads."',
        ],
        bodyEs: [
          'Nada de esto funciona desde un chat de WhatsApp y la memoria del equipo. Cada lead, su clasificación y su próxima fecha de seguimiento necesitan vivir en un CRM que todo el equipo de ventas pueda ver. Sin eso, la clasificación se degrada en días conforme llegan leads nuevos y se olvidan los anteriores. El sistema completo de generación de leads en el que encaja este proceso de seguimiento está en "cómo generar leads inmobiliarios."',
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cada cuánto debo reclasificar a un lead?",
        qEn: "How often should I reclassify a lead?",
        a: "Reclasifica cada vez que haya una interacción nueva: un lead cold que de repente pregunta por financiamiento pasa a warm de inmediato, y uno warm que agenda una visita pasa a hot. La clasificación no es estática, cambia con cada conversación.",
        aEn: "Reclassify every time there's a new interaction — a cold lead that suddenly asks about financing moves to warm immediately, and a warm lead that schedules a visit moves to hot. Classification isn't static, it changes with every conversation.",
      },
      {
        q: "¿Qué pasa si no tengo suficiente equipo para responder en cinco minutos?",
        qEn: "What if I don't have enough staff to respond within five minutes?",
        a: "Una respuesta automática por WhatsApp confirmando que recibiste el mensaje y dando un horario aproximado de respuesta humana cubre la mayor parte de la urgencia, incluso si la llamada real toma un poco más. Lo que hay que evitar es el silencio total durante horas.",
        aEn: "An automated WhatsApp response confirming you received the message and giving an approximate time for a human reply covers most of the urgency, even if the actual call takes a bit longer. What you need to avoid is total silence for hours.",
      },
      {
        q: "¿Debo usar el mismo guion para todos los desarrollos?",
        qEn: "Should I use the same script for every development?",
        a: "La estructura de clasificación y tiempos es la misma, pero el guion en sí debe ajustarse al desarrollo específico: preventa versus entrega inmediata, y el perfil del comprador, cambian lo que hay que preguntar y ofrecer en cada llamada.",
        aEn: "The classification and timing structure stays the same, but the script itself should adapt to the specific development — pre-sale versus immediate delivery, and buyer profile change what needs to be asked and offered on each call.",
      },
      {
        q: "¿Cuántos intentos de contacto debo hacer antes de considerar un lead perdido?",
        qEn: "How many contact attempts should I make before considering a lead lost?",
        a: "Para un lead hot, de tres a cinco intentos en la primera semana antes de bajarlo a warm. Para leads warm y cold, no hay un número fijo: mientras sigan en la secuencia de nutrición sin darse de baja, siguen siendo una oportunidad válida a futuro.",
        aEn: "For a hot lead, three to five attempts in the first week before downgrading to warm. For warm and cold leads, there's no fixed number — as long as they remain in the nurture sequence without unsubscribing, they're still a valid future opportunity.",
      },
    ],
    schema: {
      keywords: [
        "real estate lead follow-up",
        "real estate CRM Mexico",
        "lead classification real estate",
      ],
      keywordsEs: [
        "seguimiento de leads inmobiliarios",
        "CRM inmobiliario México",
        "clasificación de leads hot warm cold",
      ],
    },
  },
  {
    slug: "seo-local-guia",
    title: "Local SEO: The Complete Guide for Businesses in Mexico",
    titleEs: "SEO Local: Guía Completa para Negocios en México",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "A complete guide to local SEO for Mexican businesses — Google Business Profile, reviews, local citations and the ranking factors that actually move the needle.",
    excerptEs:
      "Guía completa de SEO local para negocios en México — perfil de Google Business, reseñas, citas locales y los factores que realmente mueven el posicionamiento.",
    readingTime: 11,
    date: "2026-07-25",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Local SEO is the set of tactics that make a business show up when someone nearby searches for what it sells — a Google Business Profile that's fully optimized, consistent business information across the web, and a steady stream of real reviews. For any business that serves customers in a specific city or region, local SEO usually returns more per peso than national SEO.",
    ledeEs:
      "El SEO local es el conjunto de tácticas que hacen que un negocio aparezca cuando alguien cercano busca lo que vende: un perfil de Google Business totalmente optimizado, información de negocio consistente en toda la web y un flujo constante de reseñas reales. Para cualquier negocio que atiende clientes en una ciudad o región específica, el SEO local suele rendir más por peso que el SEO nacional.",
    sections: [
      {
        id: "que-es-seo-local",
        heading: "What local SEO is and who it's for",
        headingEs: "Qué es el SEO local y para quién es",
        body: [
          'Local SEO targets searches with local intent — "plomero cerca de mí," "dentista en [ciudad]," "restaurante [zona]" — rather than broad national terms. It matters most for businesses with a physical location or a defined service area: restaurants, clinics, contractors, real estate agencies, retail. A national e-commerce brand with no physical presence gets little value from it; a business that lives and dies on local customers gets outsized value.',
        ],
        bodyEs: [
          'El SEO local se enfoca en búsquedas con intención local, como "plomero cerca de mí," "dentista en [ciudad]" o "restaurante [zona]", en vez de términos amplios nacionales. Importa más para negocios con ubicación física o un área de servicio definida: restaurantes, clínicas, contratistas, agencias inmobiliarias, retail. Una marca de e-commerce nacional sin presencia física obtiene poco valor de esto; un negocio que vive de clientes locales obtiene un valor desproporcionado.',
        ],
      },
      {
        id: "perfil-google-business",
        heading: "Google Business Profile: the single highest-leverage asset",
        headingEs: "Perfil de Google Business: el activo de mayor impacto",
        body: [
          "A complete, verified, and actively maintained Google Business Profile is the foundation of local SEO — it's what shows up in the map pack, which gets more clicks than the organic results below it for local searches. That means accurate categories, complete business hours, real photos updated regularly, and posts published consistently. Businesses that set it up once and never touch it again are leaving most of its value on the table.",
        ],
        bodyEs: [
          "Un perfil de Google Business completo, verificado y activamente mantenido es la base del SEO local: es lo que aparece en el paquete de mapas, que recibe más clics que los resultados orgánicos debajo para búsquedas locales. Eso significa categorías correctas, horarios completos, fotos reales actualizadas con regularidad y publicaciones constantes. Los negocios que lo configuran una vez y nunca lo vuelven a tocar están dejando la mayor parte de su valor sobre la mesa.",
        ],
      },
      {
        id: "consistencia-nap",
        heading: "NAP consistency: the boring detail that actually matters",
        headingEs: "Consistencia NAP: el detalle aburrido que sí importa",
        body: [
          "Your business Name, Address and Phone number (NAP) need to match exactly across your website, Google Business Profile, social media and any directory listing. Inconsistencies — a suite number here, an abbreviated street there — confuse the algorithms that verify your business is real and where it says it is, which quietly hurts ranking even when nothing else is wrong.",
        ],
        bodyEs: [
          "El Nombre, Dirección y Teléfono (NAP) de tu negocio necesitan coincidir exactamente en tu sitio web, tu perfil de Google Business, redes sociales y cualquier directorio. Las inconsistencias (un número de suite aquí, una calle abreviada allá) confunden a los algoritmos que verifican que tu negocio es real y está donde dice, lo que afecta el posicionamiento en silencio incluso cuando todo lo demás está bien.",
        ],
      },
      {
        id: "resenas",
        heading: "Reviews: volume, recency and how you respond",
        headingEs: "Reseñas: volumen, frecuencia y cómo respondes",
        body: [
          "Review count, average rating, and how recently reviews came in all factor into local ranking — a business with 200 reviews from three years ago ranks worse than one with 40 reviews trickling in every month. Responding to every review, positive or negative, signals an active business and often influences potential customers reading them more than the star rating itself.",
        ],
        bodyEs: [
          "La cantidad de reseñas, el promedio y qué tan recientes son influyen en el posicionamiento local. Un negocio con 200 reseñas de hace tres años posiciona peor que uno con 40 reseñas que van llegando cada mes. Responder a cada reseña, positiva o negativa, señala un negocio activo y muchas veces influye más en los clientes potenciales que la leen que la calificación en estrellas por sí sola.",
        ],
      },
      {
        id: "contenido-local",
        heading: "Local content and citations",
        headingEs: "Contenido local y citas",
        body: [
          'Pages built around specific neighborhoods, cities or service areas — not just a generic "services" page — help search engines understand exactly where you operate. Getting listed accurately in relevant local directories and industry-specific listings (citations) reinforces the same signal. Neither replaces a Google Business Profile, but both compound its effect over time.',
        ],
        bodyEs: [
          'Páginas construidas alrededor de colonias, ciudades o zonas de servicio específicas (no solo una página genérica de "servicios") ayudan a los buscadores a entender exactamente dónde operas. Aparecer correctamente en directorios locales relevantes y listados específicos de la industria (citas) refuerza la misma señal. Ninguna reemplaza al perfil de Google Business, pero ambas multiplican su efecto con el tiempo.',
        ],
      },
      {
        id: "errores-comunes-local",
        heading: "The most common local SEO mistakes",
        headingEs: "Los errores más comunes de SEO local",
        body: [
          'Using a P.O. box or a virtual address instead of a real, verifiable location; stuffing the business name with keywords it doesn\'t actually contain; ignoring negative reviews instead of responding professionally; and treating the Google Business Profile as a one-time setup instead of an ongoing channel. For a deeper look at mistakes that apply beyond just local SEO, see "12 SEO mistakes small businesses make."',
        ],
        bodyEs: [
          'Usar un apartado postal o una dirección virtual en vez de una ubicación real y verificable; rellenar el nombre del negocio con palabras clave que no contiene realmente; ignorar reseñas negativas en vez de responder profesionalmente; y tratar el perfil de Google Business como una configuración única en vez de un canal continuo. Para un vistazo más profundo a errores que aplican más allá del SEO local, revisa "12 errores de SEO que cometen las pymes."',
        ],
      },
    ],
    gradient: "from-neutral-800 to-neutral-950",
    faq: [
      {
        q: "¿Cuánto cuesta el SEO local en México?",
        qEn: "How much does local SEO cost in Mexico?",
        a: "Como rango de mercado para 2026, el SEO local para un negocio de una sola ubicación suele correr entre $6,000 y $12,000 MXN mensuales, más económico que el SEO nacional porque la competencia es más baja y el trabajo está más acotado a un área geográfica específica.",
        aEn: "As a 2026 market range, local SEO for a single-location business usually runs between $6,000 and $12,000 MXN per month, cheaper than national SEO because competition is lower and the work is more scoped to a specific geographic area.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados de SEO local?",
        qEn: "How long does it take to see local SEO results?",
        a: "Generalmente es más rápido que el SEO nacional: entre 6 y 10 semanas para movimiento inicial en el paquete de mapas, porque la competencia local suele ser menor que la nacional. Resultados sostenidos y consistentes toman de 3 a 6 meses.",
        aEn: "Generally faster than national SEO — 6 to 10 weeks for initial movement in the map pack, because local competition is usually lower than national. Sustained, consistent results take 3 to 6 months.",
      },
      {
        q: "¿Necesito un sitio web para hacer SEO local?",
        qEn: "Do I need a website to do local SEO?",
        a: "No es estrictamente obligatorio (un perfil de Google Business bien optimizado puede generar tráfico por sí solo), pero un sitio web le da a los buscadores más contenido para entender e indexar tu negocio, y es donde conviertes ese tráfico en algo más que una llamada.",
        aEn: "It's not strictly required — a well-optimized Google Business Profile can generate traffic on its own — but a website gives search engines more content to understand and index your business, and it's where you convert that traffic into something more than a phone call.",
      },
      {
        q: "¿Un negocio con varias sucursales necesita un perfil de Google Business por cada una?",
        qEn: "Does a multi-location business need a separate Google Business Profile for each location?",
        a: "Sí, cada sucursal con dirección física propia necesita su propio perfil verificado. Un solo perfil no puede representar varias ubicaciones, y Google penaliza los intentos de simular presencia en varios lugares desde un solo perfil.",
        aEn: "Yes, each branch with its own physical address needs its own verified profile — a single profile can't represent multiple locations, and Google penalizes attempts to simulate presence in several places from one profile.",
      },
      {
        q: "¿Las reseñas falsas ayudan a mejorar el posicionamiento?",
        qEn: "Do fake reviews help improve ranking?",
        a: "A corto plazo pueden inflar el promedio, pero Google detecta patrones de reseñas falsas cada vez mejor, y el riesgo es perder el perfil por completo. El retorno de pedirle reseñas reales a clientes satisfechos es más lento pero mucho más seguro.",
        aEn: "In the short term they might inflate the average, but Google detects fake review patterns increasingly well, and the risk is losing the profile entirely. The return from asking real satisfied customers for reviews is slower but far safer.",
      },
    ],
    schema: {
      keywords: ["local SEO Mexico", "Google Business Profile optimization", "local SEO guide"],
      keywordsEs: ["SEO local México", "optimización Google Business", "guía SEO local"],
    },
  },
  {
    slug: "cuanto-invertir-en-facebook-ads",
    title: "How Much Should You Invest in Facebook and Instagram Ads?",
    titleEs: "¿Cuánto Invertir en Publicidad de Facebook e Instagram?",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Real 2026 budget ranges for Meta Ads in Mexico by business type — what to spend, what to expect, and when it's too soon to scale.",
    excerptEs:
      "Rangos de presupuesto reales 2026 para Meta Ads en México según tipo de negocio — cuánto invertir, qué esperar, y cuándo es muy pronto para escalar.",
    readingTime: 7,
    date: "2026-07-28",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "As a 2026 market range for Mexico, a realistic Meta Ads budget starts at $8,000 to $12,000 MXN per month for a local business and rises to $20,000 MXN or more for national or high-ticket categories. Below that floor, the algorithm doesn't get enough data to optimize, and results become unpredictable regardless of how good the creative is.",
    ledeEs:
      "Como rango de mercado 2026 para México, un presupuesto realista de Meta Ads arranca en $8,000 a $12,000 MXN mensuales para un negocio local y sube a $20,000 MXN o más para categorías nacionales o de alto valor. Por debajo de ese piso, el algoritmo no recibe suficientes datos para optimizar, y los resultados se vuelven impredecibles sin importar qué tan bueno sea el creativo.",
    sections: [
      {
        id: "piso-minimo",
        heading: "The minimum floor to get real data",
        headingEs: "El piso mínimo para obtener datos reales",
        body: [
          "Meta's algorithm needs a minimum volume of clicks and conversions to exit the learning phase and start optimizing efficiently — roughly 50 conversions per ad set per week is the commonly cited benchmark. Below $8,000 MXN monthly, most Mexican businesses can't generate that volume, which means the algorithm never fully learns who to show the ad to, and cost per result stays erratic.",
        ],
        bodyEs: [
          "El algoritmo de Meta necesita un volumen mínimo de clics y conversiones para salir de la fase de aprendizaje y empezar a optimizar de forma eficiente. Aproximadamente 50 conversiones por conjunto de anuncios a la semana es el punto de referencia más citado. Por debajo de $8,000 MXN mensuales, la mayoría de los negocios mexicanos no puede generar ese volumen, lo que significa que el algoritmo nunca aprende del todo a quién mostrarle el anuncio, y el costo por resultado se mantiene errático.",
        ],
      },
      {
        id: "por-tipo-negocio",
        heading: "Budget ranges by business type",
        headingEs: "Rangos de presupuesto por tipo de negocio",
        body: [
          "Local services (restaurants, clinics, retail): $8,000–$15,000 MXN/month. E-commerce with a national audience: $15,000–$30,000 MXN/month, scaling with catalog size and margin. High-ticket categories (real estate, medical procedures, B2B): $20,000–$40,000 MXN/month, because cost per qualified lead is naturally higher and volume requirements to test creative are steeper.",
        ],
        bodyEs: [
          "Servicios locales (restaurantes, clínicas, retail): $8,000–$15,000 MXN/mes. E-commerce con audiencia nacional: $15,000–$30,000 MXN/mes, escalando con el tamaño del catálogo y el margen. Categorías de alto valor (bienes raíces, procedimientos médicos, B2B): $20,000–$40,000 MXN/mes, porque el costo por lead calificado es naturalmente más alto y se necesita más volumen para probar creativos.",
        ],
      },
      {
        id: "costo-por-resultado",
        heading: "What cost per result actually looks like",
        headingEs: "Cómo luce realmente el costo por resultado",
        body: [
          "As typical market ranges for 2026, expect $15–$50 MXN per link click depending on category competition, and $80–$350 MXN per qualified lead-form submission for most local service categories. High-ticket categories like real estate routinely run higher because the buyer pool is smaller and the algorithm has to work harder to find them.",
        ],
        bodyEs: [
          "Como rangos de mercado típicos para 2026, espera entre $15 y $50 MXN por clic al enlace según la competencia de la categoría, y entre $80 y $350 MXN por envío de formulario de lead calificado en la mayoría de las categorías de servicios locales. Las categorías de alto valor como bienes raíces suelen correr más alto porque el grupo de compradores es más pequeño y el algoritmo tiene que trabajar más para encontrarlos.",
        ],
      },
      {
        id: "cuando-escalar",
        heading: "When it's too soon to scale",
        headingEs: "Cuándo es muy pronto para escalar",
        body: [
          "Don't increase budget until an ad set has generated at least a week or two of stable, consistent results — scaling too early just amplifies an unoptimized campaign, and scaling too fast (more than roughly 20% per adjustment) resets the algorithm's learning phase and temporarily raises costs. Slow, steady increases beat aggressive jumps almost every time.",
        ],
        bodyEs: [
          "No subas el presupuesto hasta que un conjunto de anuncios haya generado al menos una o dos semanas de resultados estables y consistentes. Escalar demasiado pronto solo amplifica una campaña sin optimizar, y escalar demasiado rápido (más de aproximadamente 20% por ajuste) reinicia la fase de aprendizaje del algoritmo y sube los costos temporalmente. Incrementos lentos y constantes le ganan a los saltos agresivos casi siempre.",
        ],
      },
      {
        id: "donde-mas-conviene",
        heading: "When Meta Ads is the right first platform",
        headingEs: "Cuándo Meta Ads es la plataforma correcta para empezar",
        body: [
          'Meta Ads makes the most sense for visual, aspirational products and for categories where demand needs to be created rather than captured — new products, real estate pre-sales, restaurants, fashion. For categories where people already actively search by name or category, Google Ads often deserves the first dollar instead. We compare both directly in "Google Ads vs Meta Ads."',
        ],
        bodyEs: [
          'Meta Ads tiene más sentido para productos visuales y aspiracionales, y para categorías donde la demanda hay que crearla en vez de capturarla: productos nuevos, preventas inmobiliarias, restaurantes, moda. Para categorías donde la gente ya busca activamente por nombre o categoría, Google Ads suele merecer el primer peso en su lugar. Comparamos ambos directamente en "Google Ads vs Meta Ads."',
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Puedo empezar con menos de $8,000 MXN al mes?",
        qEn: "Can I start with less than $8,000 MXN per month?",
        a: "Puedes, pero con presupuestos menores es difícil que el algoritmo junte suficientes datos para optimizar bien, así que los resultados tienden a ser más impredecibles. Si el presupuesto es muy limitado, suele rendir mejor concentrarlo en una sola audiencia y un solo objetivo en vez de dividirlo entre varias campañas.",
        aEn: "You can, but with smaller budgets it's harder for the algorithm to gather enough data to optimize well, so results tend to be more unpredictable. If the budget is very limited, it usually performs better concentrated on a single audience and a single objective instead of split across several campaigns.",
      },
      {
        q: "¿Cuánto debo subir el presupuesto cuando algo funciona?",
        qEn: "How much should I raise the budget when something is working?",
        a: "Como referencia general, incrementos de alrededor del 20% cada tres a cuatro días permiten escalar sin reiniciar por completo la fase de aprendizaje del algoritmo. Saltos más grandes y repentinos suelen generar una caída temporal en el rendimiento.",
        aEn: "As a general reference, increases of around 20% every three to four days allow you to scale without fully resetting the algorithm's learning phase. Larger, sudden jumps usually cause a temporary drop in performance.",
      },
      {
        q: "¿Vale la pena anunciarme en Instagram y Facebook al mismo tiempo?",
        qEn: "Is it worth advertising on both Instagram and Facebook at the same time?",
        a: "Casi siempre sí: Meta optimiza automáticamente la distribución entre ambas plataformas dentro de la misma campaña, así que no hay razón para separarlas manualmente salvo que tengas una razón creativa o de marca específica para hacerlo.",
        aEn: "Almost always yes — Meta automatically optimizes distribution across both platforms within the same campaign, so there's no reason to separate them manually unless you have a specific creative or brand reason to do so.",
      },
      {
        q: "¿Qué pasa si mi presupuesto es fijo y no puedo subirlo?",
        qEn: "What if my budget is fixed and I can't raise it?",
        a: "Con presupuesto fijo, el mayor impacto viene de reducir el desperdicio, no de aumentar el gasto: segmentación más precisa, pausar creativos con bajo rendimiento, y asegurarte de que el seguimiento de conversiones esté configurado correctamente.",
        aEn: "With a fixed budget, the biggest impact comes from reducing waste, not increasing spend — tighter targeting, pausing underperforming creative, and making sure conversion tracking is set up correctly.",
      },
      {
        q: "¿Cómo sé si mi presupuesto de Meta Ads está dando buen retorno?",
        qEn: "How do I know if my Meta Ads budget is giving a good return?",
        a: "Compara el costo por lead o por venta contra tu margen y tu valor de cliente a largo plazo, no solo contra el costo por clic. Un costo por clic bajo con leads que no cierran es peor negocio que un costo por clic más alto con leads que sí convierten en ventas.",
        aEn: "Compare cost per lead or sale against your margin and long-term customer value, not just against cost per click. A low cost per click with leads that don't close is a worse deal than a higher cost per click with leads that actually convert into sales.",
      },
    ],
    schema: {
      keywords: [
        "Facebook Ads budget Mexico",
        "Meta Ads cost",
        "how much to spend on Instagram ads",
      ],
      keywordsEs: [
        "presupuesto Facebook Ads México",
        "costo Meta Ads",
        "cuánto invertir en Instagram ads",
      ],
    },
  },
  {
    slug: "errores-de-seo",
    title: "12 SEO Mistakes Small Businesses Make",
    titleEs: "12 Errores de SEO que Cometen las Pymes",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "The twelve SEO mistakes we see most often in small and medium Mexican businesses — and what actually fixes each one.",
    excerptEs:
      "Los doce errores de SEO que vemos con más frecuencia en pymes mexicanas — y qué corrige realmente cada uno.",
    readingTime: 7,
    date: "2026-07-30",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Most small business SEO problems in Mexico trace back to a handful of repeated mistakes: no Google Business Profile optimization, duplicate or thin content, a site that's slow on mobile, and simply publishing nothing new for months at a time. Fixing the first three alone usually recovers more visibility than any single new tactic.",
    ledeEs:
      "La mayoría de los problemas de SEO en pymes mexicanas se reducen a un puñado de errores repetidos: no optimizar el perfil de Google Business, contenido duplicado o pobre, un sitio lento en móvil, y simplemente no publicar nada nuevo durante meses. Corregir solo los primeros tres suele recuperar más visibilidad que cualquier táctica nueva por sí sola.",
    sections: [
      {
        id: "sin-google-business",
        heading: "1. No Google Business Profile optimization",
        headingEs: "1. Sin perfil de Google Business optimizado",
        body: [
          'For any business with a physical location, an unclaimed or incomplete Google Business Profile is the single biggest missed opportunity — it\'s often the first thing a local customer sees, before your website. We cover exactly how to fix this in "local SEO: the complete guide." Start by checking whether the listing is verified, has a current phone number and hours, and has at least a few recent photos, those three alone separate most claimed profiles from most unclaimed ones.',
        ],
        bodyEs: [
          'Para cualquier negocio con ubicación física, un perfil de Google Business sin reclamar o incompleto es la oportunidad perdida más grande. Muchas veces es lo primero que ve un cliente local, antes que tu sitio web. Cubrimos exactamente cómo corregir esto en "SEO local: guía completa." Empieza revisando si el perfil está verificado, tiene un teléfono y horario actualizados, y al menos algunas fotos recientes: esos tres puntos por sí solos separan a la mayoría de los perfiles reclamados de los que no lo están.',
        ],
      },
      {
        id: "contenido-duplicado",
        heading: "2. Duplicate or thin content across pages",
        headingEs: "2. Contenido duplicado o pobre entre páginas",
        body: [
          'Multiple pages targeting the same keyword with barely different content confuse search engines about which page to rank, and neither ends up performing well. Each page needs a distinct purpose and enough real substance to be worth indexing on its own. A quick way to spot this: search "site:tudominio.com" plus your main keyword in Google and see how many of your own pages compete for the same term.',
        ],
        bodyEs: [
          'Varias páginas apuntando a la misma palabra clave con contenido apenas distinto confunden a los buscadores sobre cuál posicionar, y ninguna termina rindiendo bien. Cada página necesita un propósito distinto y suficiente sustancia real para valer la pena indexarla por sí sola. Una forma rápida de detectarlo: busca "site:tudominio.com" más tu palabra clave principal en Google y revisa cuántas páginas propias compiten por el mismo término.',
        ],
      },
      {
        id: "velocidad-movil",
        heading: "3. Ignoring mobile page speed",
        headingEs: "3. Ignorar la velocidad en móvil",
        body: [
          "More than half of searches in Mexico happen on mobile, and a slow-loading site loses both ranking and visitors before they see anything. Unoptimized images and bloated page builders are the most common culprits — often fixable without a full rebuild. PageSpeed Insights (free, from Google) gives a specific score and a ranked list of what to fix first, rather than leaving it to guesswork.",
        ],
        bodyEs: [
          "La mayoría de las búsquedas hoy ocurren en móvil, una tendencia global que Google documenta de forma consistente, y un sitio lento pierde tanto posicionamiento como visitantes antes de que vean algo. Imágenes sin optimizar y constructores de página pesados son los culpables más comunes, y muchas veces se corrigen sin necesidad de reconstruir todo el sitio. PageSpeed Insights (gratis, de Google) da un puntaje específico y una lista priorizada de qué corregir primero, en vez de dejarlo a la adivinanza.",
        ],
      },
      {
        id: "sin-ssl",
        heading: "4. No SSL or mixed content warnings",
        headingEs: "4. Sin SSL o advertencias de contenido mixto",
        body: [
          'A site without HTTPS gets flagged as "not secure" by browsers, which erodes trust instantly and is treated as a negative ranking signal. This is one of the cheapest fixes on this list and there\'s rarely a good reason to leave it unresolved. Most hosting providers now include a free SSL certificate by default, so in most cases this is a settings change, not a purchase.',
        ],
        bodyEs: [
          'Un sitio sin HTTPS se marca como "no seguro" en los navegadores, lo que erosiona la confianza de inmediato y se trata como una señal negativa de posicionamiento. Es una de las correcciones más baratas de esta lista y rara vez hay una buena razón para dejarla sin resolver. La mayoría de los proveedores de hosting ya incluyen un certificado SSL gratuito por defecto, así que en la mayoría de los casos es un ajuste de configuración, no una compra.',
        ],
      },
      {
        id: "titulos-duplicados",
        heading: "5. Missing or duplicate title tags",
        headingEs: "5. Etiquetas de título faltantes o duplicadas",
        body: [
          'Every page needs a unique, descriptive title tag — generic titles like "Home" or the same title repeated across a dozen pages waste one of the most direct ranking signals a site has. This is usually a fast fix once identified. Google Search Console flags duplicate and missing titles directly under its "Coverage" and "Enhancements" reports, so it doesn\'t require manually checking every page.',
        ],
        bodyEs: [
          'Cada página necesita una etiqueta de título única y descriptiva. Títulos genéricos como "Inicio", o el mismo título repetido en una docena de páginas, desperdician una de las señales de posicionamiento más directas que tiene un sitio. Suele ser una corrección rápida una vez identificada. Google Search Console marca directamente los títulos duplicados o faltantes en sus reportes de "Cobertura" y "Mejoras", así que no hace falta revisar cada página a mano.',
        ],
      },
      {
        id: "saturar-keywords",
        heading: "6. Keyword stuffing",
        headingEs: "6. Saturar de palabras clave",
        body: [
          "Repeating the same keyword unnaturally throughout a page, hoping to rank higher, reads poorly to visitors and gets flagged by modern search algorithms as manipulative. Writing naturally for the person reading, with the keyword appearing where it makes sense, outperforms stuffing every time. A rough rule of thumb: if a sentence sounds odd read out loud because of how often a phrase repeats, it's already gone too far.",
        ],
        bodyEs: [
          "Repetir la misma palabra clave de forma antinatural en toda una página, con la esperanza de posicionar mejor, se lee mal para los visitantes y los algoritmos modernos lo marcan como manipulación. Escribir de forma natural para la persona que lee, con la palabra clave apareciendo donde tiene sentido, supera al relleno siempre. Una regla práctica: si una oración suena rara al leerla en voz alta por lo seguido que se repite una frase, ya se pasó de la raya.",
        ],
      },
      {
        id: "sin-enlaces-internos",
        heading: "7. No internal linking strategy",
        headingEs: "7. Sin estrategia de enlaces internos",
        body: [
          "Pages that exist in isolation, with no links pointing to or from other relevant pages on the site, make it harder for search engines to understand which content matters most and harder for visitors to find related information. Every new article should link to at least one or two related pages. A simple habit that covers most of the gap: whenever a new page publishes, add it as a related link from two or three existing pages that cover a similar topic.",
        ],
        bodyEs: [
          "Páginas que existen aisladas, sin enlaces que apunten hacia o desde otras páginas relevantes del sitio, le dificultan a los buscadores entender qué contenido importa más y a los visitantes encontrar información relacionada. Todo artículo nuevo debería enlazar al menos a una o dos páginas relacionadas. Un hábito simple que cubre la mayor parte del hueco: cada vez que se publica una página nueva, agregarla como enlace relacionado desde dos o tres páginas existentes que cubran un tema similar.",
        ],
      },
      {
        id: "core-web-vitals",
        heading: "8. Ignoring Core Web Vitals",
        headingEs: "8. Ignorar Core Web Vitals",
        body: [
          "Google's Core Web Vitals measure loading speed, interactivity and visual stability — and they factor directly into ranking. Most small business sites have never checked their scores, let alone acted on them, leaving an easy technical win unclaimed. The three specific metrics are Largest Contentful Paint (load speed), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability), all visible for free in Search Console's own Core Web Vitals report.",
        ],
        bodyEs: [
          "Los Core Web Vitals de Google miden velocidad de carga, interactividad y estabilidad visual, y afectan directamente el posicionamiento. La mayoría de los sitios de pymes nunca ha revisado sus puntajes, mucho menos actuado sobre ellos, dejando una victoria técnica fácil sin reclamar. Las tres métricas específicas son Largest Contentful Paint (velocidad de carga), Interaction to Next Paint (capacidad de respuesta) y Cumulative Layout Shift (estabilidad visual), y las tres se ven gratis en el propio reporte de Core Web Vitals de Search Console.",
        ],
      },
      {
        id: "publicar-y-olvidar",
        heading: "9. Publishing and forgetting",
        headingEs: "9. Publicar y olvidar",
        body: [
          "Content that was accurate two years ago — old prices, outdated services, stale statistics — quietly erodes both rankings and trust. Search engines favor content that shows signs of being maintained, and so do the people reading it. A basic content review every six months, checking prices, service details, and any date-sensitive claims, catches most of what quietly goes stale.",
        ],
        bodyEs: [
          "Contenido que era correcto hace dos años (precios viejos, servicios descontinuados, estadísticas desactualizadas) erosiona en silencio tanto el posicionamiento como la confianza. Los buscadores favorecen contenido que muestra señales de mantenimiento, y también lo hace la gente que lo lee. Una revisión de contenido básica cada seis meses, revisando precios, detalles de servicio y cualquier afirmación sensible a la fecha, detecta la mayor parte de lo que se desactualiza sin que nadie lo note.",
        ],
      },
      {
        id: "enlaces-rotos",
        heading: "10. Broken links and unfixed 404s",
        headingEs: "10. Enlaces rotos y 404 sin corregir",
        body: [
          "Links pointing to pages that no longer exist, whether internal or from other sites, waste the authority those links were passing and create a poor experience for anyone who clicks them. A quarterly check for broken links is a low-effort habit most sites skip entirely. Free tools like Screaming Frog (limited free tier) or Google Search Console's own crawl errors report can scan an entire site for broken links in minutes.",
        ],
        bodyEs: [
          "Enlaces que apuntan a páginas que ya no existen, sea internos o desde otros sitios, desperdician la autoridad que esos enlaces transmitían y generan una mala experiencia para quien les da clic. Una revisión trimestral de enlaces rotos es un hábito de bajo esfuerzo que la mayoría de los sitios se salta por completo. Herramientas gratuitas como Screaming Frog (con capa gratuita limitada) o el propio reporte de errores de rastreo de Search Console pueden escanear un sitio completo en busca de enlaces rotos en minutos.",
        ],
      },
      {
        id: "sin-schema",
        heading: "11. No schema markup",
        headingEs: "11. Sin marcado de schema",
        body: [
          "Schema markup tells search engines exactly what a page is about — a review, a product, an FAQ, an article — in a format they can read directly, which often earns richer, more clickable results. Most small business sites have none at all, leaving that extra visibility on the table. Schema doesn't require custom development, most modern site platforms and plugins can generate it automatically once the right fields (reviews, FAQ, business info) are filled in.",
        ],
        bodyEs: [
          "El marcado de schema le dice a los buscadores exactamente de qué trata una página (una reseña, un producto, un FAQ, un artículo) en un formato que pueden leer directamente, lo que muchas veces gana resultados más ricos y con más clics. La mayoría de los sitios de pymes no tiene ninguno, dejando esa visibilidad extra sobre la mesa. El schema no requiere desarrollo a medida, la mayoría de las plataformas y plugins modernos lo generan automáticamente una vez que se llenan los campos correctos (reseñas, FAQ, datos del negocio).",
        ],
      },
      {
        id: "esperar-sin-paciencia",
        heading: "12. Expecting results without patience",
        headingEs: "12. Esperar resultados sin paciencia",
        body: [
          "SEO compounds over months, not weeks — businesses that abandon it after six or eight weeks because they haven't seen dramatic movement are quitting right before the curve typically starts to bend. Consistency beats intensity in SEO more than in almost any other marketing channel. As a reference point, technical and structural fixes typically show measurable movement in 4 to 6 months, with results that compound meaningfully at 9 to 12 months.",
        ],
        bodyEs: [
          "El SEO se acumula en meses, no en semanas. Los negocios que lo abandonan después de seis u ocho semanas porque no han visto un movimiento dramático suelen renunciar justo antes de que la curva empiece a doblarse. La consistencia le gana a la intensidad en SEO más que en casi cualquier otro canal de marketing. Como referencia, las correcciones técnicas y de estructura suelen mostrar movimiento medible en 4 a 6 meses, con resultados que se acumulan de forma importante entre los 9 y 12 meses.",
        ],
      },
    ],
    gradient: "from-neutral-800 to-neutral-950",
    faq: [
      {
        q: "¿Cuál de estos errores tiene el mayor impacto si solo puedo corregir uno?",
        qEn: "Which of these mistakes has the biggest impact if I can only fix one?",
        a: "Para la mayoría de las pymes, optimizar el perfil de Google Business suele tener el retorno más rápido, porque afecta directamente cómo apareces en búsquedas locales, que son las que generan la mayoría del tráfico calificado para negocios pequeños.",
        aEn: "For most small businesses, optimizing the Google Business Profile usually has the fastest return, because it directly affects how you show up in local searches, which generate most of the qualified traffic for small businesses.",
      },
      {
        q: "¿Estos errores aplican igual a cualquier industria?",
        qEn: "Do these mistakes apply equally to any industry?",
        a: "La mayoría son universales: velocidad, SSL, contenido duplicado afectan a cualquier sitio. Algunos, como el perfil de Google Business, importan más para negocios con ubicación física que para servicios puramente digitales.",
        aEn: "Most are universal — speed, SSL, duplicate content affect any site. Some, like the Google Business Profile, matter more for businesses with a physical location than for purely digital services.",
      },
      {
        q: "¿Cómo sé si mi sitio tiene alguno de estos problemas?",
        qEn: "How do I know if my site has any of these problems?",
        a: "Herramientas gratuitas como Google Search Console y PageSpeed Insights identifican la mayoría de estos problemas técnicos directamente. Para contenido duplicado o estrategia de enlaces, una auditoría manual o profesional suele ser necesaria.",
        aEn: "Free tools like Google Search Console and PageSpeed Insights identify most of these technical problems directly. For duplicate content or linking strategy, a manual or professional audit is usually necessary.",
      },
      {
        q: "¿Corregir estos errores garantiza subir en el posicionamiento?",
        qEn: "Does fixing these mistakes guarantee a ranking boost?",
        a: "No hay garantías en SEO, pero corregir errores técnicos y de contenido elimina obstáculos que de otra forma limitan cualquier otro esfuerzo: es la base sobre la que todo lo demás (contenido, enlaces, autoridad) puede funcionar.",
        aEn: "There are no guarantees in SEO, but fixing technical and content mistakes removes obstacles that otherwise cap any other effort — it's the foundation everything else (content, links, authority) can actually work on top of.",
      },
    ],
    schema: {
      keywords: ["SEO mistakes", "small business SEO Mexico", "common SEO errors"],
      keywordsEs: ["errores de SEO", "SEO pymes México", "errores comunes de SEO"],
    },
  },
  {
    slug: "agencia-o-freelancer-marketing",
    title: "Agency, Freelancer or In-House Team? An Honest Comparison",
    titleEs: "¿Agencia, Freelancer o Equipo Interno? Comparación Honesta",
    category: "Marketing Strategy",
    categoryEs: "Estrategia de Marketing",
    excerpt:
      "An honest, no-spin comparison of hiring an agency, a freelancer, or building an in-house marketing team in Mexico — costs, trade-offs and when each makes sense.",
    excerptEs:
      "Una comparación honesta y sin sesgo entre contratar una agencia, un freelancer o armar un equipo interno de marketing en México — costos, trade-offs y cuándo conviene cada uno.",
    readingTime: 8,
    date: "2026-08-01",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "There's no universally correct choice between an agency, a freelancer and an in-house team — each fits a different stage and budget. As a rough rule: freelancers suit narrow, well-defined tasks; agencies suit businesses that need strategy plus execution across channels; in-house teams make sense once marketing spend is large enough to justify a full-time salary.",
    ledeEs:
      "No existe una elección universalmente correcta entre agencia, freelancer y equipo interno: cada uno encaja mejor en una etapa y un presupuesto distintos. Como regla general: los freelancers convienen para tareas acotadas y bien definidas; las agencias convienen para negocios que necesitan estrategia más ejecución en varios canales; los equipos internos tienen sentido cuando el gasto en marketing es suficientemente grande para justificar un sueldo de tiempo completo.",
    sections: [
      {
        id: "freelancer-cuando",
        heading: "When a freelancer is the right call",
        headingEs: "Cuándo un freelancer es la decisión correcta",
        body: [
          "Freelancers work best for narrow, well-defined deliverables — a logo, a batch of ad creative, a single landing page — where you already know exactly what you need and don't require ongoing strategy. Costs run lower than an agency for the same task, but there's no backup if the freelancer is unavailable, and coordinating multiple freelancers across channels becomes a part-time job in itself.",
        ],
        bodyEs: [
          "Los freelancers funcionan mejor para entregables acotados y bien definidos (un logo, un lote de creativos para anuncios, una landing page) donde ya sabes exactamente qué necesitas y no requieres estrategia continua. Los costos son más bajos que una agencia para la misma tarea, pero no hay respaldo si el freelancer no está disponible, y coordinar a varios freelancers en distintos canales se vuelve un trabajo de medio tiempo en sí mismo.",
        ],
      },
      {
        id: "agencia-cuando",
        heading: "When an agency makes more sense",
        headingEs: "Cuándo una agencia tiene más sentido",
        body: [
          "An agency makes sense when you need strategy and execution connected across multiple channels — SEO, ads, content, design — working from the same plan instead of disconnected freelancers pulling in different directions. The trade-off is cost: agencies typically run higher monthly retainers than a single freelancer, because you're paying for coordination and accountability, not just hours of work.",
        ],
        bodyEs: [
          "Una agencia tiene sentido cuando necesitas estrategia y ejecución conectadas en varios canales (SEO, anuncios, contenido, diseño) trabajando desde el mismo plan en vez de freelancers desconectados jalando en direcciones distintas. El trade-off es el costo: las agencias suelen tener tarifas mensuales más altas que un solo freelancer, porque estás pagando por coordinación y responsabilidad, no solo por horas de trabajo.",
        ],
      },
      {
        id: "equipo-interno-cuando",
        heading: "When an in-house team pays for itself",
        headingEs: "Cuándo un equipo interno se paga solo",
        body: [
          "Building an in-house team starts to make financial sense once monthly marketing spend and complexity are high enough that a full-time salary costs less than the equivalent agency retainer — commonly somewhere north of $60,000–$80,000 MXN monthly in combined marketing activity. Below that, the fixed cost of salary, benefits and management overhead usually outweighs what an agency or freelancer would charge for the same output.",
        ],
        bodyEs: [
          "Armar un equipo interno empieza a tener sentido financiero cuando el gasto y la complejidad mensual de marketing son suficientemente altos para que un sueldo de tiempo completo cueste menos que la tarifa equivalente de una agencia: comúnmente por arriba de $60,000–$80,000 MXN mensuales en actividad de marketing combinada. Por debajo de eso, el costo fijo de sueldo, prestaciones y gestión suele superar lo que cobraría una agencia o freelancer por el mismo resultado.",
        ],
      },
      {
        id: "costos-comparados",
        heading: "Costs compared, side by side",
        headingEs: "Costos comparados, lado a lado",
        body: [
          "As typical 2026 market ranges: a freelancer specialist runs $8,000–$20,000 MXN monthly for a single channel. A small agency retainer covering strategy plus two or three channels runs $20,000–$50,000 MXN monthly. A junior in-house marketing hire, fully loaded with benefits, runs $18,000–$30,000 MXN monthly — but covers only one person's skill set, not a full team's.",
        ],
        bodyEs: [
          "Como rangos de mercado típicos para 2026: un freelancer especializado cuesta $8,000–$20,000 MXN mensuales por un solo canal. Una tarifa de agencia pequeña que cubre estrategia más dos o tres canales cuesta $20,000–$50,000 MXN mensuales. Una contratación interna junior de marketing, con prestaciones incluidas, cuesta $18,000–$30,000 MXN mensuales, pero cubre solo el conjunto de habilidades de una persona, no las de un equipo completo.",
        ],
      },
      {
        id: "modelo-hibrido",
        heading: "The hybrid model most growing businesses land on",
        headingEs: "El modelo híbrido en el que terminan la mayoría de los negocios en crecimiento",
        body: [
          "A common pattern: start with a freelancer or small agency to validate what works, bring on an in-house marketing lead once volume justifies it, and keep an agency or freelancers for specialized work the in-house person doesn't have time or expertise for — like video production or a specific ad platform. Few businesses stay in just one category forever.",
        ],
        bodyEs: [
          "Un patrón común: empezar con un freelancer o una agencia pequeña para validar qué funciona, incorporar un líder de marketing interno cuando el volumen lo justifique, y mantener una agencia o freelancers para trabajo especializado que la persona interna no tiene el tiempo ni la experiencia para hacer, como producción de video o el manejo de una plataforma de anuncios específica. Pocos negocios se quedan en una sola categoría para siempre.",
        ],
      },
      {
        id: "preguntas-antes-de-decidir",
        heading: "The questions to ask before deciding",
        headingEs: "Las preguntas que hay que hacerse antes de decidir",
        body: [
          "How many channels need to work together right now? Is the need ongoing or a one-time project? What happens if the person or team is unavailable for two weeks? And honestly — is there enough internal capacity to manage a freelancer or agency relationship well, or does that management itself need to be outsourced too? The answers usually point clearly to one option.",
        ],
        bodyEs: [
          "¿Cuántos canales necesitan trabajar juntos ahora mismo? ¿La necesidad es continua o un proyecto único? ¿Qué pasa si la persona o el equipo no está disponible por dos semanas? Y, con honestidad, ¿hay suficiente capacidad interna para gestionar bien una relación con un freelancer o una agencia, o esa gestión también necesita externalizarse? Las respuestas suelen apuntar claramente a una opción.",
        ],
      },
    ],
    gradient: "from-neutral-800 to-zinc-950",
    faq: [
      {
        q: "¿Qué opción es más barata a corto plazo?",
        qEn: "Which option is cheapest in the short term?",
        a: "Un freelancer suele ser la opción más barata a corto plazo para una tarea específica, pero esa comparación cambia en cuanto necesitas coordinar varios canales. Ahí, el costo de gestionar a varios freelancers puede terminar superando el de una agencia.",
        aEn: "A freelancer is usually the cheapest short-term option for a specific task, but that comparison changes as soon as you need to coordinate multiple channels — at that point, the cost of managing multiple freelancers can end up exceeding an agency's.",
      },
      {
        q: "¿Puedo cambiar de opción después si no funciona?",
        qEn: "Can I switch options later if it's not working?",
        a: "Sí, y es un camino común: muchos negocios empiezan con freelancers, pasan a una agencia cuando necesitan más coordinación, y eventualmente construyen equipo interno. La transición es más fácil si desde el inicio documentas bien la estrategia y los accesos, en vez de que vivan solo en la cabeza de quien te ayuda.",
        aEn: "Yes, and it's common to do so — many businesses start with freelancers, move to an agency when they need more coordination, and eventually build an in-house team. The transition is easier if you document strategy and access well from the start, instead of it living only in your helper's head.",
      },
      {
        q: "¿Una agencia pequeña es mejor que una grande?",
        qEn: "Is a small agency better than a large one?",
        a: "Depende de lo que necesites: las agencias pequeñas suelen dar más atención directa y flexibilidad, mientras que las grandes tienen más recursos y especialistas por canal. Para pymes, una agencia pequeña con casos reales en tu industria suele rendir mejor que una grande genérica.",
        aEn: "It depends on what you need — small agencies usually give more direct attention and flexibility, while large ones have more resources and per-channel specialists. For small businesses, a small agency with real case studies in your industry usually performs better than a large generalist one.",
      },
      {
        q: "¿Qué señales indican que ya es momento de contratar equipo interno?",
        qEn: "What signals indicate it's time to hire an in-house team?",
        a: "Cuando el gasto en marketing y la coordinación entre canales crecen lo suficiente para que una persona de tiempo completo cueste menos que seguir pagando por fuera, y cuando necesitas a alguien presente todos los días para decisiones rápidas que no pueden esperar el ciclo de reportes de una agencia.",
        aEn: "When marketing spend and cross-channel coordination grow enough that a full-time person costs less than continuing to pay externally, and when you need someone present every day for fast decisions that can't wait for an agency's reporting cycle.",
      },
    ],
    schema: {
      keywords: ["agency vs freelancer", "marketing team Mexico", "hire marketing agency"],
      keywordsEs: [
        "agencia vs freelancer",
        "equipo de marketing México",
        "contratar agencia de marketing",
      ],
    },
  },
  {
    slug: "cuanto-invertir-en-marketing-inmobiliario",
    title: "How Much Should You Invest in Real Estate Marketing?",
    titleEs: "¿Cuánto Invertir en Marketing Inmobiliario?",
    category: "Real Estate Marketing",
    categoryEs: "Marketing Inmobiliario",
    excerpt:
      "Real 2026 budget ranges for real estate marketing in Mexico, broken down by channel — paid traffic, landing infrastructure and CRM.",
    excerptEs:
      "Rangos de presupuesto reales 2026 para marketing inmobiliario en México, desglosados por canal — tráfico pagado, infraestructura de landing y CRM.",
    readingTime: 7,
    date: "2026-08-04",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "As a 2026 market range, a mid-size real estate development should plan for $15,000 to $25,000 MXN monthly in paid traffic across Meta and Google, plus a one-time investment in landing infrastructure and CRM setup. Premium developments and large pre-sales typically run higher because cost per qualified lead rises with price point.",
    ledeEs:
      "Como rango de mercado 2026, un desarrollo inmobiliario mediano debe planear entre $15,000 y $25,000 MXN mensuales en tráfico pagado entre Meta y Google, más una inversión única en infraestructura de landing y configuración de CRM. Los desarrollos premium y las preventas grandes suelen costar más porque el costo por lead calificado sube con el ticket.",
    sections: [
      {
        id: "desglose-por-canal",
        heading: "The budget broken down by channel",
        headingEs: "El presupuesto desglosado por canal",
        body: [
          "As typical 2026 ranges: Meta Ads $6,000–$12,000 MXN/month for visual, awareness-driven traffic; Google Ads $5,000–$10,000 MXN/month for buyers actively searching by area or type; portal listings (Inmuebles24, Vivanuncios) $2,000–$5,000 MXN/month for additional volume. Most developments split spend across at least two channels rather than betting everything on one.",
        ],
        bodyEs: [
          "Como rangos típicos para 2026: Meta Ads $6,000–$12,000 MXN/mes para tráfico visual orientado a generar interés; Google Ads $5,000–$10,000 MXN/mes para compradores que ya buscan activamente por zona o tipo; listados en portales (Inmuebles24, Vivanuncios) $2,000–$5,000 MXN/mes para volumen adicional. La mayoría de los desarrollos reparte el gasto entre al menos dos canales en vez de apostarlo todo a uno.",
        ],
      },
      {
        id: "infraestructura-unica",
        heading: "The one-time infrastructure investment",
        headingEs: "La inversión única en infraestructura",
        body: [
          "Beyond monthly media spend, expect a one-time cost for a proper landing page ($25,000–$60,000 MXN) and, for land or multi-unit developments, an interactive lot map ($40,000–$90,000 MXN depending on complexity). CRM setup and integration typically adds $10,000–$25,000 MXN. These are build-once costs, not recurring ones.",
        ],
        bodyEs: [
          "Más allá del gasto mensual en medios, considera un costo único por una landing page adecuada ($25,000–$60,000 MXN) y, para desarrollos de terrenos o multiunidad, un mapa interactivo de lotes ($40,000–$90,000 MXN según la complejidad). La configuración e integración del CRM suele sumar $10,000–$25,000 MXN. Son costos de construcción única, no recurrentes.",
        ],
      },
      {
        id: "preventa-vs-entrega",
        heading: "Pre-sale budgets vs. finished inventory",
        headingEs: "Presupuestos de preventa vs. inventario terminado",
        body: [
          "Pre-sales typically need a higher share of budget in Meta Ads and content production (video, renders, drone footage) because the sale happens entirely in the buyer's imagination. Finished inventory shifts more naturally toward Google Ads and portal listings, since buyers can search for and verify what already exists.",
        ],
        bodyEs: [
          "Las preventas suelen necesitar una mayor proporción del presupuesto en Meta Ads y producción de contenido (video, renders, dron) porque la venta ocurre por completo en la imaginación del comprador. El inventario terminado se inclina más naturalmente hacia Google Ads y listados en portales, ya que los compradores pueden buscar y verificar lo que ya existe.",
        ],
      },
      {
        id: "retorno-esperado",
        heading: "What return to expect",
        headingEs: "Qué retorno esperar",
        body: [
          "Cost per qualified lead in real estate typically runs $300–$1,200 MXN depending on price point and category, higher than most other industries because the buyer pool is smaller and the decision more considered. Measuring against cost per closing, not just cost per lead, gives a truer picture of whether the budget is working.",
        ],
        bodyEs: [
          "El costo por lead calificado en bienes raíces suele correr entre $300 y $1,200 MXN según el ticket y la categoría, más alto que en la mayoría de las industrias porque el grupo de compradores es más pequeño y la decisión más meditada. Medir contra el costo por cierre, no solo contra el costo por lead, da una imagen más real de si el presupuesto está funcionando.",
        ],
      },
      {
        id: "cuando-ajustar",
        heading: "When to adjust the budget",
        headingEs: "Cuándo ajustar el presupuesto",
        body: [
          'Revisit the split every 4 to 6 weeks based on which channel is producing hot and warm leads, not just raw volume — a channel generating lots of cold or ghost leads is quietly wasting budget even if the cost per click looks attractive. The full classification system is in "real estate lead follow-up."',
        ],
        bodyEs: [
          'Revisa el reparto cada 4 a 6 semanas según qué canal está produciendo leads hot y warm, no solo volumen bruto. Un canal que genera muchos leads cold o ghost está desperdiciando presupuesto en silencio, aunque el costo por clic se vea atractivo. El sistema de clasificación completo está en "seguimiento de leads inmobiliarios."',
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cuál es el presupuesto mínimo para empezar a anunciar un desarrollo?",
        qEn: "What's the minimum budget to start advertising a development?",
        a: "Como piso realista para 2026, considera al menos $15,000 MXN mensuales combinados entre canales para generar suficiente volumen de leads y darle al algoritmo datos para optimizar. Por debajo de eso, es difícil sacar conclusiones confiables en el corto plazo.",
        aEn: "As a realistic 2026 floor, plan for at least $15,000 MXN combined per month across channels to generate enough lead volume and give the algorithm data to optimize. Below that, it's hard to draw reliable conclusions in the short term.",
      },
      {
        q: "¿Vale la pena invertir en un mapa interactivo de lotes si mi presupuesto es limitado?",
        qEn: "Is it worth investing in an interactive lot map if my budget is limited?",
        a: "Depende del tamaño del inventario. Para un desarrollo con muchos lotes o unidades, suele pagarse solo con reducir el tiempo de ventas al responder preguntas de disponibilidad. Para una sola propiedad, ese presupuesto rinde más en tráfico pagado.",
        aEn: "It depends on inventory size — for a development with many lots or units, it usually pays for itself by reducing sales time spent answering availability questions. For a single property, that budget performs better spent on paid traffic.",
      },
      {
        q: "¿El presupuesto debe ser el mismo todo el año?",
        qEn: "Should the budget stay the same all year?",
        a: "No necesariamente. Muchos desarrollos aumentan el presupuesto en el lanzamiento y en momentos clave de preventa, y lo mantienen más bajo en periodos de inventario estable. Ajustarlo según la etapa del proyecto suele rendir mejor que un gasto plano todo el año.",
        aEn: "Not necessarily — many developments increase budget at launch and at key pre-sale milestones, keeping it lower during stable inventory periods. Adjusting by project stage usually performs better than flat spend all year.",
      },
      {
        q: "¿Cómo se compara el presupuesto de un desarrollo pequeño contra uno grande?",
        qEn: "How does a small development's budget compare to a large one's?",
        a: "Los desarrollos pequeños pueden operar con presupuestos más ajustados porque necesitan menos volumen de leads para vender su inventario, pero el costo por lead no baja en la misma proporción: la eficiencia mínima del algoritmo aplica sin importar el tamaño del proyecto.",
        aEn: "Smaller developments can operate on tighter budgets because they need less lead volume to sell their inventory, but cost per lead doesn't drop proportionally — the algorithm's minimum efficiency threshold applies regardless of project size.",
      },
      {
        q: "¿Qué parte del sistema completo cubre este presupuesto?",
        qEn: "What part of the complete system does this budget cover?",
        a: "Este desglose cubre tráfico e infraestructura: landing, mapa y CRM. El resto del sistema, incluyendo seguimiento y clasificación de leads, depende más de tiempo y proceso que de presupuesto adicional. El panorama completo está en la guía de marketing inmobiliario.",
        aEn: "This breakdown covers traffic and infrastructure — landing, map and CRM. The rest of the system, including lead follow-up and classification, depends more on time and process than on additional budget. The full picture is in the real estate marketing guide.",
      },
    ],
    schema: {
      keywords: ["real estate marketing budget", "how much to spend real estate ads Mexico"],
      keywordsEs: [
        "presupuesto marketing inmobiliario",
        "cuánto invertir en publicidad inmobiliaria",
      ],
    },
  },
  {
    slug: "guia-seo",
    title: "SEO: The Complete 2026 Guide",
    titleEs: "SEO: Guía Completa 2026",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "What SEO is and how it actually works in 2026: local SEO, technical SEO, content and AI Search — with real examples from Baja California.",
    excerptEs:
      "Qué es el SEO y cómo funciona en 2026: SEO local, técnico, contenido y AI Search. Ejemplos reales de Baja California.",
    readingTime: 18,
    date: "2026-08-06",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "SEO is the practice of getting a website found in search results without paying per click — by fixing what search engines can't crawl, publishing content that answers real questions, and earning the signals that convince Google a page deserves to rank. It compounds over months rather than delivering instant traffic, which is exactly what makes it cheaper than ads over time.",
    ledeEs:
      "El SEO es la práctica de lograr que un sitio web aparezca en resultados de búsqueda sin pagar por clic: corrige lo que los buscadores no pueden rastrear, publica contenido que responde preguntas reales y gana las señales que convencen a Google de que una página merece posicionar. Se acumula en meses en vez de entregar tráfico instantáneo, que es justo lo que lo hace más barato que los anuncios con el tiempo.",
    gradient: "from-neutral-800 to-neutral-950",
    sections: [
      {
        id: "que-es-seo",
        heading: "What SEO actually is",
        headingEs: "Qué es realmente el SEO",
        body: [
          "SEO — search engine optimization — is the set of practices that help a website rank in organic (unpaid) search results. It has three connected disciplines: technical SEO (making sure search engines can crawl and understand the site), content SEO (publishing pages that answer what people are actually searching for), and authority (earning links and mentions that signal trustworthiness). A site missing any one of the three caps how well the other two can perform.",
        ],
        bodyEs: [
          "El SEO (optimización para motores de búsqueda) es el conjunto de prácticas que ayudan a un sitio web a posicionar en resultados orgánicos (no pagados). Tiene tres disciplinas conectadas: SEO técnico (asegurar que los buscadores puedan rastrear y entender el sitio), SEO de contenido (publicar páginas que respondan lo que la gente realmente busca), y autoridad (ganar enlaces y menciones que señalen confiabilidad). Un sitio al que le falte cualquiera de las tres limita qué tan bien pueden rendir las otras dos.",
        ],
      },
      {
        id: "como-funciona-google",
        heading: "How Google actually decides what to rank",
        headingEs: "Cómo decide Google realmente qué posicionar",
        body: [
          "Search engines crawl the web with automated bots, index what they find, and rank pages for a given search using hundreds of signals — relevance to the query, page speed and mobile usability, how authoritative the domain is, and increasingly, how directly and clearly a page answers the question. There's no single trick that moves rankings; it's the accumulation of many small, correct decisions over time.",
        ],
        bodyEs: [
          "Los buscadores rastrean la web con bots automatizados, indexan lo que encuentran, y posicionan páginas para una búsqueda usando cientos de señales: relevancia con la consulta, velocidad y usabilidad móvil, qué tan autorizado es el dominio y, cada vez más, qué tan directa y claramente responde una página la pregunta. No hay un solo truco que mueva el posicionamiento; es la acumulación de muchas decisiones correctas y pequeñas en el tiempo.",
        ],
      },
      {
        id: "seo-tecnico",
        heading: "Technical SEO: the foundation",
        headingEs: "SEO técnico: la base",
        body: [
          "If search engines can't crawl and load a site quickly, nothing else matters — great content on a broken foundation still won't rank. This covers site speed, mobile usability, a clean URL structure, HTTPS, and making sure important pages aren't accidentally blocked from indexing. It's invisible to visitors but foundational to everything else on this list.",
        ],
        bodyEs: [
          "Si los buscadores no pueden rastrear y cargar un sitio rápido, nada más importa. Un gran contenido sobre una base rota no va a posicionar de todas formas. Esto cubre velocidad del sitio, usabilidad móvil, una estructura de URL limpia, HTTPS, y asegurarse de que páginas importantes no estén bloqueadas de indexación por accidente. Es invisible para los visitantes pero es la base de todo lo demás en esta lista.",
        ],
      },
      {
        id: "seo-contenido",
        heading: "Content SEO: answering real questions",
        headingEs: "SEO de contenido: responder preguntas reales",
        body: [
          "Content that ranks is content built around what people actually type into a search bar, structured so both readers and search engines can find the answer fast — a clear, direct answer near the top, followed by the depth that earns trust. Content written to please an algorithm instead of a person reads poorly and, ironically, ranks worse over time as search engines get better at detecting the difference.",
        ],
        bodyEs: [
          "El contenido que posiciona es contenido construido alrededor de lo que la gente realmente escribe en un buscador, estructurado para que tanto lectores como buscadores encuentren la respuesta rápido: una respuesta clara y directa cerca del inicio, seguida de la profundidad que gana confianza. El contenido escrito para complacer a un algoritmo en vez de a una persona se lee mal y, irónicamente, posiciona peor con el tiempo conforme los buscadores mejoran detectando la diferencia.",
        ],
      },
      {
        id: "seo-local",
        heading: "Local SEO: for businesses that serve a specific area",
        headingEs: "SEO local: para negocios que atienden una zona específica",
        body: [
          'For any business with a physical location or a defined service area, local SEO — an optimized Google Business Profile, consistent business information, and real reviews — usually returns more per peso than national SEO. We cover it in full depth in "local SEO: the complete guide."',
        ],
        bodyEs: [
          'Para cualquier negocio con ubicación física o un área de servicio definida, el SEO local (un perfil de Google Business optimizado, información de negocio consistente y reseñas reales) suele rendir más por peso que el SEO nacional. Lo cubrimos a fondo en "SEO local: guía completa."',
        ],
      },
      {
        id: "ai-search",
        heading: "AI Search: the new layer on top of traditional SEO",
        headingEs: "AI Search: la nueva capa sobre el SEO tradicional",
        body: [
          "AI-powered answer engines and search overviews now summarize information directly, often without a click. Ranking well for these means the same fundamentals — clear, direct, well-structured answers — matter even more, because these systems pull from pages that state facts plainly instead of burying them in marketing language. Being citable is becoming as important as being clickable.",
        ],
        bodyEs: [
          "Los motores de respuesta con IA y los resúmenes de búsqueda ahora resumen información directamente, muchas veces sin un clic. Posicionar bien para esto significa que los mismos fundamentos (respuestas claras, directas y bien estructuradas) importan todavía más, porque estos sistemas toman de páginas que declaran hechos claramente en vez de enterrarlos en lenguaje de marketing. Ser citable se está volviendo tan importante como ser clickeable.",
        ],
      },
      {
        id: "cuanto-tarda-cuesta",
        heading: "How long it takes and what it costs",
        headingEs: "Cuánto tarda y cuánto cuesta",
        body: [
          'SEO takes 4 to 6 months for initial movement and 9 to 12 months to compound into meaningful traffic, and costs $8,000 to $35,000 MXN monthly in Mexico depending on competition and scope. We break both down in detail in "how long does SEO take" and "how much does SEO cost in Mexico."',
        ],
        bodyEs: [
          'El SEO toma de 4 a 6 meses para mostrar movimiento inicial y de 9 a 12 meses para acumularse en tráfico significativo, y cuesta entre $8,000 y $35,000 MXN mensuales en México según la competencia y el alcance. Desglosamos ambos a detalle en "cuánto tarda el SEO" y "cuánto cuesta el SEO en México."',
        ],
      },
      {
        id: "seo-vs-otros-canales",
        heading: "How SEO compares to paid channels",
        headingEs: "Cómo se compara el SEO con canales pagados",
        body: [
          'SEO and Google Ads solve different problems on different timelines — ads deliver traffic the day you turn them on and stop the day you stop paying; SEO takes months to build but keeps generating traffic without an ongoing per-click cost. Most businesses eventually need both, but rarely at the same intensity from day one. We go deeper on how to sequence the two in "SEO vs Google Ads."',
        ],
        bodyEs: [
          'El SEO y Google Ads resuelven problemas distintos en cronogramas distintos. Los anuncios entregan tráfico el día que los enciendes y se detienen el día que dejas de pagar; el SEO toma meses en construirse pero sigue generando tráfico sin un costo continuo por clic. La mayoría de los negocios eventualmente necesita ambos, pero rara vez con la misma intensidad desde el día uno. Profundizamos en cómo secuenciar los dos en "SEO vs Google Ads."',
        ],
      },
      {
        id: "errores-y-siguientes-pasos",
        heading: "Common mistakes and where to go next",
        headingEs: "Errores comunes y siguientes pasos",
        body: [
          'The most common SEO mistakes we see — no Google Business Profile optimization, thin or duplicate content, ignoring mobile speed — are covered in full in "12 SEO mistakes small businesses make." This guide is the starting point; each linked cluster goes deeper into one specific piece of the system, and we keep adding new ones as the SEO landscape shifts.',
        ],
        bodyEs: [
          'Los errores de SEO más comunes que vemos (sin perfil de Google Business optimizado, contenido pobre o duplicado, ignorar la velocidad móvil) están cubiertos a fondo en "12 errores de SEO que cometen las pymes." Esta guía es el punto de partida; cada cluster enlazado profundiza en una pieza específica del sistema, y seguimos sumando nuevos conforme cambia el panorama del SEO.',
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta el SEO en México?",
        qEn: "How much does SEO cost in Mexico?",
        a: "Como rango de mercado para 2026, el SEO cuesta entre $8,000 y $35,000 MXN mensuales dependiendo de la competencia, el tamaño del sitio y si incluye producción de contenido. El desglose completo por tipo de negocio está en cuánto cuesta el SEO en México.",
        aEn: "As a 2026 market range, SEO costs between $8,000 and $35,000 MXN per month depending on competition, site size, and whether content production is included. The full breakdown by business type is in how much does SEO cost in Mexico.",
      },
      {
        q: "¿Cuánto tarda el SEO en dar resultados?",
        qEn: "How long does SEO take to show results?",
        a: "Entre 4 y 6 meses para movimiento inicial, y de 9 a 12 meses para resultados que se acumulan de forma significativa. El desglose completo por escenario está en cuánto tarda el SEO.",
        aEn: "Between 4 and 6 months for initial movement, and 9 to 12 months for results that compound meaningfully. The full breakdown by scenario is in how long does SEO take.",
      },
      {
        q: "¿El SEO sirve para cualquier tipo de negocio?",
        qEn: "Does SEO work for any type of business?",
        a: "Sirve mejor para negocios donde la gente busca activamente antes de comprar: servicios, retail, salud, bienes raíces. Para categorías sin volumen de búsqueda real, el SEO tiene menos con qué trabajar y otros canales suelen rendir mejor.",
        aEn: "It works best for businesses where people actively search before buying — services, retail, health, real estate. For categories with no real search volume, SEO has less to work with and other channels usually perform better.",
      },
      {
        q: "¿Necesito SEO técnico, de contenido y local, o puedo elegir solo uno?",
        qEn: "Do I need technical, content and local SEO, or can I just pick one?",
        a: "Los tres trabajan juntos: el SEO técnico es la base sin la cual el contenido no puede posicionar, y el SEO local es la capa que importa más si tu negocio atiende una zona específica. La mayoría de los negocios necesita los tres en distintas proporciones, no uno solo.",
        aEn: "All three work together — technical SEO is the foundation without which content can't rank, and local SEO is the layer that matters most if your business serves a specific area. Most businesses need all three in different proportions, not just one.",
      },
      {
        q: "¿Cómo afecta la búsqueda con IA al SEO tradicional?",
        qEn: "How does AI search affect traditional SEO?",
        a: "Los fundamentos siguen siendo los mismos (contenido claro, estructurado y confiable), pero ahora también importa ser citable directamente por sistemas de IA, no solo aparecer en una lista de resultados clickeables.",
        aEn: "The fundamentals stay the same — clear, structured, trustworthy content — but now it also matters to be directly citable by AI systems, not just to appear in a list of clickable results.",
      },
      {
        q: "¿Puedo hacer SEO yo mismo o necesito una agencia?",
        qEn: "Can I do SEO myself or do I need an agency?",
        a: "Con tiempo y aprendizaje, se puede hacer SEO básico internamente, especialmente la parte local. Para SEO técnico avanzado y estrategias de contenido a escala, la mayoría de los negocios rinde mejor con ayuda especializada, aunque sea de forma parcial.",
        aEn: "With time and learning, basic SEO can be done in-house, especially the local piece. For advanced technical SEO and content strategy at scale, most businesses perform better with specialized help, even if only partially.",
      },
    ],
    schema: {
      keywords: ["what is SEO", "how SEO works", "SEO guide Mexico", "AI search SEO"],
      keywordsEs: ["qué es SEO", "cómo funciona el SEO", "guía SEO México", "AI Search SEO"],
    },
  },
  {
    slug: "guia-google-ads",
    title: "Google Ads: The Complete 2026 Guide",
    titleEs: "Google Ads: Guía Completa 2026",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "A complete guide to Google Ads: campaign types, budget, measuring with GA4, and the mistakes that burn the most money — with real benchmarks from Baja California.",
    excerptEs:
      "Guía completa de Google Ads: tipos de campaña, presupuesto, medición con GA4 y errores comunes. Con benchmarks reales de Baja California.",
    readingTime: 18,
    date: "2026-08-07",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Google Ads is a pay-per-click advertising system that shows your business at the top of search results, on YouTube, and across millions of partner sites, and charges only when someone clicks or takes a specific action. It works by intercepting existing demand — people already searching for what you sell — which is why it can generate leads within days rather than the months SEO takes.",
    ledeEs:
      "Google Ads es un sistema de publicidad de pago por clic que muestra tu negocio arriba de los resultados de búsqueda, en YouTube y en millones de sitios asociados, y cobra solo cuando alguien hace clic o realiza una acción específica. Funciona interceptando demanda que ya existe: gente que ya está buscando lo que vendes. Por eso puede generar leads en días, no en los meses que toma el SEO.",
    gradient: "from-slate-700 to-neutral-900",
    sections: [
      {
        id: "como-funciona",
        heading: "How Google Ads actually works",
        headingEs: "Cómo funciona realmente Google Ads",
        body: [
          "Advertisers bid on keywords relevant to their business, and Google runs an auction every time someone searches — the winner isn't just the highest bidder, but the combination of bid, ad relevance and expected click-through rate (Quality Score). A highly relevant, well-written ad can beat a bigger budget with a sloppy one. You pay only when someone clicks, not for the impression.",
        ],
        bodyEs: [
          "Los anunciantes pujan por palabras clave relevantes para su negocio, y Google corre una subasta cada vez que alguien busca. El ganador no es solo quien puja más alto, sino la combinación de la puja, la relevancia del anuncio y la tasa de clics esperada (Nivel de Calidad). Un anuncio muy relevante y bien escrito puede ganarle a un presupuesto mayor pero descuidado. Pagas solo cuando alguien da clic, no por la impresión.",
        ],
      },
      {
        id: "tipos-de-campana",
        heading: "The main campaign types",
        headingEs: "Los principales tipos de campaña",
        body: [
          "Search campaigns show text ads on the results page for specific keywords — the highest-intent option. Performance Max and Demand Gen use Google's automation to place ads across Search, YouTube, Display and Gmail from a single campaign. Display and YouTube campaigns build awareness visually rather than capturing active search intent. Most businesses should start with Search before layering in the others.",
        ],
        bodyEs: [
          "Las campañas de Búsqueda muestran anuncios de texto en la página de resultados para palabras clave específicas: la opción de mayor intención. Performance Max y Demand Gen usan la automatización de Google para colocar anuncios en Búsqueda, YouTube, Display y Gmail desde una sola campaña. Las campañas de Display y YouTube construyen conocimiento de marca de forma visual en vez de capturar intención de búsqueda activa. La mayoría de los negocios debería empezar con Búsqueda antes de sumar las demás.",
        ],
      },
      {
        id: "presupuesto",
        heading: "What it actually costs",
        headingEs: "Cuánto cuesta realmente",
        body: [
          'Cost per click in Mexico varies enormously by industry — from a few pesos in low-competition categories to well over $100 MXN in competitive ones like legal or medical services. We publish real CPC ranges by industry in "how much does Google Ads cost in Mexico."',
        ],
        bodyEs: [
          'El costo por clic en México varía enormemente por industria: desde unos cuantos pesos en categorías de baja competencia hasta más de $100 MXN en categorías competidas como servicios legales o médicos. Publicamos rangos reales de CPC por industria en "cuánto cuesta Google Ads en México."',
        ],
      },
      {
        id: "medicion",
        heading: "Measuring what actually matters",
        headingEs: "Medir lo que realmente importa",
        body: [
          'Google Ads is only as good as the data feeding its algorithm — without accurate conversion tracking through GA4 and Google Tag Manager, both you and Google are optimizing blind. This is the single most common gap we find when auditing accounts. The full setup process is in "how to actually measure conversions."',
        ],
        bodyEs: [
          'Google Ads es tan bueno como los datos que alimentan su algoritmo. Sin seguimiento de conversiones preciso a través de GA4 y Google Tag Manager, tanto tú como Google están optimizando a ciegas. Este es el hueco más común que encontramos al auditar cuentas. El proceso completo de configuración está en "cómo medir conversiones de verdad."',
        ],
      },
      {
        id: "errores-comunes",
        heading: "The mistakes that burn the most budget",
        headingEs: "Los errores que más queman presupuesto",
        body: [
          'Broad match keywords with no negatives, broken conversion tracking, and landing pages that do not match search intent account for most of the wasted spend we find in account audits. The full list of ten is in "10 Google Ads mistakes that burn your budget."',
        ],
        bodyEs: [
          'La concordancia amplia sin negativas, el seguimiento de conversiones roto y las landing pages que no coinciden con la intención de búsqueda explican la mayor parte del gasto desperdiciado que encontramos en auditorías de cuenta. La lista completa de diez está en "10 errores de Google Ads que queman tu presupuesto."',
        ],
      },
      {
        id: "google-ads-vs-seo",
        heading: "Google Ads vs. organic SEO",
        headingEs: "Google Ads vs. SEO orgánico",
        body: [
          'Google Ads delivers traffic immediately but stops the moment you stop paying; SEO takes months to build but keeps working without an ongoing per-click cost. Most businesses eventually run both — Ads for immediate demand, SEO to lower acquisition cost over time. We compare the two directly in "SEO vs Google Ads."',
        ],
        bodyEs: [
          'Google Ads entrega tráfico de inmediato pero se detiene en cuanto dejas de pagar; el SEO toma meses en construirse pero sigue funcionando sin un costo continuo por clic. La mayoría de los negocios eventualmente corre ambos: Ads para demanda inmediata, SEO para bajar el costo de adquisición con el tiempo. Comparamos los dos directamente en "SEO vs Google Ads."',
        ],
      },
      {
        id: "google-ads-vs-meta",
        heading: "Google Ads vs. Meta Ads",
        headingEs: "Google Ads vs. Meta Ads",
        body: [
          'Google Ads captures people already searching for what you sell; Meta Ads creates demand through visual, interruption-based selling. Which deserves the first dollar depends on whether your category has real search volume. We break down exactly how to decide in "Google Ads vs Meta Ads."',
        ],
        bodyEs: [
          'Google Ads captura gente que ya está buscando lo que vendes; Meta Ads genera demanda a través de venta visual e interruptiva. Cuál merece el primer peso depende de si tu categoría tiene volumen de búsqueda real. Desglosamos exactamente cómo decidir en "Google Ads vs Meta Ads."',
        ],
      },
      {
        id: "casos-especiales",
        heading: "Industries with special rules",
        headingEs: "Industrias con reglas especiales",
        body: [
          "Some categories — medical and dental services chief among them — face additional Google Ads policy restrictions around claims, certifications and landing page requirements. Getting these wrong doesn't just waste budget, it can get an account suspended. If you're in a regulated category, review the specific restrictions before launching.",
        ],
        bodyEs: [
          "Algunas categorías (servicios médicos y dentales entre las principales) enfrentan restricciones adicionales de política de Google Ads sobre declaraciones, certificaciones y requisitos de landing page. Hacerlo mal no solo desperdicia presupuesto, puede suspender la cuenta. Si estás en una categoría regulada, revisa las restricciones específicas antes de lanzar.",
        ],
      },
      {
        id: "como-empezar",
        heading: "How to get started",
        headingEs: "Cómo empezar",
        body: [
          "Start with one tightly scoped Search campaign around your highest-intent keywords, a landing page built to match that specific intent, and conversion tracking configured before the first peso is spent — not after. Everything else in this guide is about optimizing a foundation that needs to be solid first.",
        ],
        bodyEs: [
          "Empieza con una sola campaña de Búsqueda bien acotada alrededor de tus palabras clave de mayor intención, una landing page construida para coincidir con esa intención específica, y el seguimiento de conversiones configurado antes de gastar el primer peso, no después. Todo lo demás en esta guía es sobre optimizar una base que primero necesita ser sólida.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto necesito para empezar en Google Ads?",
        qEn: "How much do I need to start with Google Ads?",
        a: "Como piso realista para México en 2026, considera al menos $8,000 a $12,000 MXN mensuales para juntar suficientes datos y que el sistema pueda optimizar. El desglose completo por industria está en cuánto cuesta Google Ads en México.",
        aEn: "As a realistic floor for Mexico in 2026, plan for at least $8,000 to $12,000 MXN per month to gather enough data for the system to optimize. The full breakdown by industry is in how much does Google Ads cost in Mexico.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados en Google Ads?",
        qEn: "How long does it take to see results in Google Ads?",
        a: "A diferencia del SEO, Google Ads puede generar los primeros clics y leads el mismo día que se activa la campaña. La optimización completa del algoritmo suele tomar de dos a cuatro semanas.",
        aEn: "Unlike SEO, Google Ads can generate the first clicks and leads the same day the campaign goes live. Full algorithm optimization usually takes two to four weeks.",
      },
      {
        q: "¿Necesito un sitio web para anunciarme en Google Ads?",
        qEn: "Do I need a website to advertise on Google Ads?",
        a: "Sí, casi siempre: necesitas una landing page que coincida con la intención de la palabra clave. Anunciarte para una búsqueda específica y mandar a la gente a una página genérica reduce drásticamente la conversión.",
        aEn: "Yes, almost always — you need a landing page that matches the keyword's intent. Advertising for a specific search and sending people to a generic page drastically reduces conversion.",
      },
      {
        q: "¿Puedo administrar Google Ads yo mismo?",
        qEn: "Can I manage Google Ads myself?",
        a: "Con presupuestos pequeños y una sola categoría, es posible administrarlo tú mismo si le dedicas revisión semanal real. Para cuentas más grandes o complejas, la mayoría de los negocios rinde mejor con ayuda especializada.",
        aEn: "With small budgets and a single category, it's possible to manage it yourself if you dedicate real weekly review to it. For larger or more complex accounts, most businesses perform better with specialized help.",
      },
      {
        q: "¿Qué pasa si mi industria tiene restricciones especiales?",
        qEn: "What if my industry has special restrictions?",
        a: "Categorías como salud y servicios legales tienen políticas adicionales de Google sobre qué se puede anunciar y cómo. Vale la pena revisar las restricciones específicas de tu industria antes de lanzar para evitar que la cuenta se suspenda.",
        aEn: "Categories like healthcare and legal services have additional Google policies on what can be advertised and how. It's worth reviewing your industry's specific restrictions before launching to avoid account suspension.",
      },
      {
        q: "¿Google Ads o SEO primero?",
        qEn: "Google Ads or SEO first?",
        a: "Si necesitas resultados este mes, Google Ads. Si estás construyendo para los próximos años y quieres depender menos de presupuesto pagado con el tiempo, empieza a invertir en SEO en paralelo. Profundizamos en esta decisión en SEO vs Google Ads.",
        aEn: "If you need results this month, Google Ads. If you're building for the coming years and want to depend less on paid budget over time, start investing in SEO in parallel. We go deeper on this decision in SEO vs Google Ads.",
      },
    ],
    schema: {
      keywords: ["what is Google Ads", "how Google Ads works", "Google Ads guide Mexico"],
      keywordsEs: ["qué es Google Ads", "cómo funciona Google Ads", "guía Google Ads México"],
    },
  },
  {
    slug: "cuanto-cuesta-google-ads-en-mexico",
    title: "How Much Does Google Ads Cost in Mexico? (Real 2026 CPCs)",
    titleEs: "¿Cuánto Cuesta Google Ads en México? (CPCs Reales 2026)",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Real 2026 cost-per-click ranges by industry for Google Ads in Mexico — typical market estimates, not guesses.",
    excerptEs:
      "Rangos reales de costo por clic 2026 por industria para Google Ads en México — estimaciones de mercado típicas, no adivinanzas.",
    readingTime: 8,
    date: "2026-08-09",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Google Ads in Mexico costs anywhere from $5 to over $150 MXN per click depending on industry, with legal, medical and financial services at the high end and local retail or home services at the low end. Total monthly spend, not just CPC, is what determines whether a budget is viable — a low CPC with weak conversion still wastes money.",
    ledeEs:
      "Google Ads en México cuesta desde $5 hasta más de $150 MXN por clic según la industria, con servicios legales, médicos y financieros en el rango alto, y retail local o servicios del hogar en el rango bajo. El gasto mensual total, no solo el CPC, es lo que determina si un presupuesto es viable. Un CPC bajo con mala conversión igual desperdicia dinero.",
    gradient: "from-slate-700 to-neutral-900",
    sections: [
      {
        id: "tabla-cpc-industria",
        heading: "Typical CPC ranges by industry (2026 market estimates)",
        headingEs: "Rangos típicos de CPC por industria (estimaciones de mercado 2026)",
        body: [
          "As typical market estimates for Mexico in 2026 — not guarantees — these are the cost-per-click ranges we see most often by industry:",
          "Legal services: $60–$180 MXN per click.",
          "Medical and dental: $40–$120 MXN per click.",
          "Real estate: $25–$80 MXN per click.",
          "B2B / professional services: $30–$100 MXN per click.",
          "Home services (plumbing, electrical, contractors): $15–$45 MXN per click.",
          "Restaurants and local retail: $5–$20 MXN per click.",
          "E-commerce (general): $8–$30 MXN per click.",
        ],
        bodyEs: [
          "Como estimaciones de mercado típicas para México en 2026 (no garantías), estos son los rangos de costo por clic que vemos con más frecuencia por industria:",
          "Servicios legales: $60–$180 MXN por clic.",
          "Médico y dental: $40–$120 MXN por clic.",
          "Bienes raíces: $25–$80 MXN por clic.",
          "B2B / servicios profesionales: $30–$100 MXN por clic.",
          "Servicios del hogar (plomería, electricidad, contratistas): $15–$45 MXN por clic.",
          "Restaurantes y retail local: $5–$20 MXN por clic.",
          "E-commerce (general): $8–$30 MXN por clic.",
        ],
      },
      {
        id: "por-que-varia-tanto",
        heading: "Why CPC varies so much by industry",
        headingEs: "Por qué el CPC varía tanto por industria",
        body: [
          "CPC reflects how much competitors are willing to pay for the same click, which usually tracks how valuable a single customer is. A law firm can afford $150 MXN per click because one client can be worth tens of thousands of pesos; a restaurant can't justify that same click cost against an average ticket of a few hundred pesos. High CPC isn't inherently bad — it's a signal of a valuable category, not necessarily a broken campaign.",
        ],
        bodyEs: [
          "El CPC refleja cuánto están dispuestos a pagar los competidores por el mismo clic, lo que generalmente sigue qué tan valioso es un solo cliente. Un despacho legal puede pagar $150 MXN por clic porque un cliente puede valer decenas de miles de pesos; un restaurante no puede justificar ese mismo costo de clic contra un ticket promedio de unos cuantos cientos de pesos. Un CPC alto no es malo en sí mismo: es una señal de una categoría valiosa, no necesariamente de una campaña rota.",
        ],
      },
      {
        id: "cpc-no-es-todo",
        heading: "Why CPC alone doesn't tell the full story",
        headingEs: "Por qué el CPC solo no cuenta toda la historia",
        body: [
          "A lower CPC with a poor conversion rate can cost more per sale than a higher CPC with a landing page that actually converts. The number that matters most is cost per qualified lead or cost per sale, not cost per click in isolation — CPC is just one input into that larger equation.",
        ],
        bodyEs: [
          "Un CPC más bajo con una mala tasa de conversión puede costar más por venta que un CPC más alto con una landing page que sí convierte. El número que más importa es el costo por lead calificado o costo por venta, no el CPC de forma aislada. El CPC es solo un insumo dentro de esa ecuación más grande.",
        ],
      },
      {
        id: "presupuesto-mensual",
        heading: "What total monthly budget to plan for",
        headingEs: "Qué presupuesto mensual total planear",
        body: [
          "Beyond CPC, plan for enough monthly volume to generate meaningful data — as a market range, $8,000 to $15,000 MXN monthly for local service categories, and $15,000 MXN and up for competitive national categories like legal, medical or B2B. Below these floors, results tend to be inconsistent regardless of how well the account is built.",
        ],
        bodyEs: [
          "Más allá del CPC, planea un volumen mensual suficiente para generar datos significativos: como rango de mercado, $8,000 a $15,000 MXN mensuales para categorías de servicio local, y $15,000 MXN en adelante para categorías nacionales competidas como legal, médico o B2B. Por debajo de estos pisos, los resultados tienden a ser inconsistentes sin importar qué tan bien esté construida la cuenta.",
        ],
      },
      {
        id: "como-bajar-el-cpc",
        heading: "How to actually lower your CPC",
        headingEs: "Cómo bajar realmente tu CPC",
        body: [
          "Improving Quality Score — through tighter ad groups, more relevant ad copy, and a landing page that matches the keyword — lowers CPC more reliably than simply lowering bids, which just loses you the auction. Negative keywords that filter out irrelevant clicks also reduce wasted spend, which functionally lowers your effective cost per useful click.",
        ],
        bodyEs: [
          "Mejorar el Nivel de Calidad (con grupos de anuncios más específicos, copy más relevante y una landing page que coincida con la palabra clave) baja el CPC de forma más confiable que simplemente bajar las pujas, que solo te hace perder la subasta. Las palabras clave negativas que filtran clics irrelevantes también reducen el gasto desperdiciado, lo que en la práctica baja tu costo efectivo por clic útil.",
        ],
      },
      {
        id: "donde-profundizar",
        heading: "Where to go deeper",
        headingEs: "Dónde profundizar",
        body: [
          'For the full picture on campaign types, measurement and common mistakes, start with "Google Ads: the complete guide." For the tracking setup that makes any of these numbers trustworthy, see "how to actually measure conversions."',
        ],
        bodyEs: [
          'Para el panorama completo de tipos de campaña, medición y errores comunes, empieza con "Google Ads: guía completa." Para la configuración de seguimiento que hace que cualquiera de estos números sea confiable, revisa "cómo medir conversiones de verdad."',
        ],
      },
    ],
    faq: [
      {
        q: "¿Estos rangos de CPC son garantizados?",
        qEn: "Are these CPC ranges guaranteed?",
        a: "No: son estimaciones de mercado típicas basadas en lo que observamos con frecuencia en 2026, no una garantía para tu cuenta específica. El CPC real depende de tu ubicación, competencia directa y Nivel de Calidad.",
        aEn: "No — they're typical market estimates based on what we commonly observe in 2026, not a guarantee for your specific account. Actual CPC depends on your location, direct competition and Quality Score.",
      },
      {
        q: "¿Por qué mi CPC es más alto que el rango que publican aquí?",
        qEn: "Why is my CPC higher than the range published here?",
        a: "Un Nivel de Calidad bajo, palabras clave demasiado amplias, o competir en una zona geográfica de alta demanda pueden subir tu CPC por encima del rango típico de tu industria. Vale la pena revisar la estructura de la cuenta antes de asumir que el mercado simplemente es más caro.",
        aEn: "A low Quality Score, overly broad keywords, or competing in a high-demand geographic area can push your CPC above your industry's typical range. It's worth reviewing account structure before assuming the market is simply more expensive.",
      },
      {
        q: "¿Un CPC bajo significa una buena campaña?",
        qEn: "Does a low CPC mean a good campaign?",
        a: "No necesariamente: un CPC bajo con una landing page que no convierte puede costar más por venta que un CPC alto bien dirigido. El CPC es una sola métrica dentro de una ecuación más grande.",
        aEn: "Not necessarily — a low CPC with a landing page that doesn't convert can cost more per sale than a well-targeted high CPC. CPC is just one metric within a larger equation.",
      },
      {
        q: "¿El CPC es el mismo en todo México?",
        qEn: "Is CPC the same across all of Mexico?",
        a: "No: varía por zona geográfica además de por industria. Ciudades con más competidores pujando por los mismos términos suelen tener CPCs más altos que mercados con menos competencia directa.",
        aEn: "No — it varies by geographic area in addition to industry. Cities with more competitors bidding on the same terms usually have higher CPCs than markets with less direct competition.",
      },
      {
        q: "¿Cómo sé cuál es el CPC real para mi negocio específico?",
        qEn: "How do I find the actual CPC for my specific business?",
        a: "La Herramienta de Planificación de Palabras Clave de Google da estimaciones específicas para tus términos y ubicación exacta, y es más precisa que cualquier rango general publicado, incluyendo el de esta página.",
        aEn: "Google's Keyword Planner tool gives specific estimates for your exact terms and location, and is more precise than any general published range — including the one on this page.",
      },
    ],
    schema: {
      keywords: ["Google Ads cost Mexico", "CPC by industry Mexico", "Google Ads pricing"],
      keywordsEs: ["costo Google Ads México", "CPC por industria México", "precio Google Ads"],
    },
  },
  {
    slug: "cuanto-tarda-el-seo",
    title: "How Long Does SEO Take to Show Results?",
    titleEs: "¿Cuánto Tarda el SEO en Dar Resultados?",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "A direct answer with real timelines: how long SEO actually takes by scenario, and why anyone promising results in weeks is selling something else.",
    excerptEs:
      "Una respuesta directa con tiempos reales: cuánto tarda realmente el SEO según el escenario, y por qué quien promete resultados en semanas está vendiendo otra cosa.",
    readingTime: 6,
    date: "2026-08-11",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "SEO takes 4 to 6 months to show initial ranking movement, and 9 to 12 months to compound into meaningful, sustained traffic. Low-competition local categories can move faster; competitive national categories can take longer. Any timeline shorter than a couple of months is not realistic SEO — it's something else being sold under the same name.",
    ledeEs:
      "El SEO toma de 4 a 6 meses para mostrar movimiento inicial en el posicionamiento, y de 9 a 12 meses para acumularse en tráfico significativo y sostenido. Categorías locales de baja competencia pueden moverse más rápido; categorías nacionales competidas pueden tomar más. Cualquier plazo menor a un par de meses no es SEO real: es otra cosa vendida bajo el mismo nombre.",
    gradient: "from-neutral-800 to-neutral-950",
    sections: [
      {
        id: "linea-de-tiempo-general",
        heading: "The general timeline",
        headingEs: "El cronograma general",
        body: [
          "Weeks 1 to 4: technical fixes and foundational work, largely invisible in rankings. Months 2 to 4: initial movement on lower-competition keywords. Months 4 to 6: measurable traffic increase begins. Months 9 to 12: compounding effect where content and authority reinforce each other, and growth accelerates. This isn't a guarantee for every site, but it's the shape the curve typically takes.",
        ],
        bodyEs: [
          "Semanas 1 a 4: correcciones técnicas y trabajo de base, en gran parte invisible en el posicionamiento. Meses 2 a 4: movimiento inicial en palabras clave de menor competencia. Meses 4 a 6: empieza un aumento medible de tráfico. Meses 9 a 12: efecto acumulativo donde contenido y autoridad se refuerzan entre sí, y el crecimiento se acelera. No es una garantía para cada sitio, pero es la forma que la curva suele tomar.",
        ],
      },
      {
        id: "que-lo-acelera",
        heading: "What makes it faster",
        headingEs: "Qué lo hace más rápido",
        body: [
          "Low local competition, a domain with some existing history and authority, and a business category with clear, specific search intent all shorten the timeline. A local business in a low-competition category with a clean technical foundation can see meaningful movement in as little as 8 to 10 weeks.",
        ],
        bodyEs: [
          "Baja competencia local, un dominio con algo de historial y autoridad existente, y una categoría de negocio con intención de búsqueda clara y específica acortan el cronograma. Un negocio local en una categoría de baja competencia con una base técnica limpia puede ver movimiento significativo en tan solo 8 a 10 semanas.",
        ],
      },
      {
        id: "que-lo-retrasa",
        heading: "What slows it down",
        headingEs: "Qué lo retrasa",
        body: [
          "A brand-new domain with no history, high national competition, a large technical debt that needs fixing before content can even be evaluated fairly, or inconsistent publishing all extend the timeline significantly. Starting from a redesign or migration can also temporarily set rankings back before they recover.",
        ],
        bodyEs: [
          "Un dominio nuevo sin historial, alta competencia nacional, una deuda técnica grande que hay que corregir antes de que el contenido se pueda evaluar de forma justa, o publicación inconsistente extienden el cronograma significativamente. Empezar desde un rediseño o migración también puede retrasar temporalmente el posicionamiento antes de que se recupere.",
        ],
      },
      {
        id: "senales-de-alerta",
        heading: "Red flags in timeline promises",
        headingEs: "Señales de alerta en promesas de tiempo",
        body: [
          "Anyone promising first-page rankings in two to three weeks is either describing paid traffic mislabeled as SEO, or using tactics that risk a penalty later. Real SEO doesn't skip the timeline — it can only be executed faster within it, not compressed past what search engines need to build trust in a site.",
        ],
        bodyEs: [
          "Quien prometa rankings en primera página en dos o tres semanas está describiendo tráfico pagado mal etiquetado como SEO, o usando tácticas que arriesgan una penalización después. El SEO real no se salta el cronograma: solo se puede ejecutar más rápido dentro de él, no comprimirlo más allá de lo que los buscadores necesitan para confiar en un sitio.",
        ],
      },
      {
        id: "mientras-tanto",
        heading: "What to do while you wait",
        headingEs: "Qué hacer mientras tanto",
        body: [
          'If you need traffic before SEO compounds, running Google Ads or Meta Ads in parallel fills the gap without waiting. We cover how to think about that sequencing in "SEO vs Google Ads."',
        ],
        bodyEs: [
          'Si necesitas tráfico antes de que el SEO se acumule, correr Google Ads o Meta Ads en paralelo llena ese vacío sin esperar. Cubrimos cómo pensar esa secuencia en "SEO vs Google Ads."',
        ],
      },
    ],
    faq: [
      {
        q: "¿Por qué el SEO tarda tanto comparado con los anuncios?",
        qEn: "Why does SEO take so long compared to ads?",
        a: "Porque el SEO depende de que los buscadores rastreen, indexen y ganen confianza en un sitio con el tiempo. No hay forma de comprar ese proceso, solo de ejecutarlo correctamente y con consistencia.",
        aEn: "Because SEO depends on search engines crawling, indexing and building trust in a site over time — there's no way to buy that process, only to execute it correctly and consistently.",
      },
      {
        q: "¿Puedo acelerar el SEO pagando más?",
        qEn: "Can I speed up SEO by paying more?",
        a: "Hasta cierto punto: más presupuesto puede significar más contenido y más trabajo técnico en paralelo, pero no elimina el tiempo mínimo que los buscadores necesitan para confiar en un sitio nuevo o en cambios recientes.",
        aEn: "Up to a point — more budget can mean more content and more technical work in parallel, but it doesn't eliminate the minimum time search engines need to trust a new site or recent changes.",
      },
      {
        q: "¿Si mi sitio ya tiene tiempo, el SEO es más rápido?",
        qEn: "If my site is already established, is SEO faster?",
        a: "Sí, generalmente: un dominio con historial y algo de autoridad ya construida suele moverse más rápido que uno completamente nuevo, porque parte de la confianza con los buscadores ya existe.",
        aEn: "Yes, generally — a domain with history and some existing authority usually moves faster than a brand-new one, because part of the trust with search engines already exists.",
      },
      {
        q: "¿Qué pasa si dejo de invertir en SEO a la mitad del proceso?",
        qEn: "What happens if I stop investing in SEO halfway through?",
        a: "El progreso no desaparece de inmediato, pero se estanca y eventualmente los competidores que sí siguen invirtiendo lo superan. El SEO recompensa la consistencia más que la intensidad de corto plazo.",
        aEn: "Progress doesn't disappear immediately, but it stalls and competitors who keep investing eventually overtake it. SEO rewards consistency more than short-term intensity.",
      },
    ],
    schema: {
      keywords: ["how long does SEO take", "SEO timeline"],
      keywordsEs: ["cuánto tarda el SEO", "tiempo de resultados SEO"],
    },
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads: Where Should You Invest First?",
    titleEs: "SEO vs Google Ads: ¿Dónde Invertir Primero?",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "A direct comparison of SEO and Google Ads — cost, timeline and when each deserves your first peso.",
    excerptEs:
      "Una comparación directa entre SEO y Google Ads — costo, tiempo y cuándo merece cada uno tu primer peso.",
    readingTime: 8,
    date: "2026-08-12",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: 'Google Ads delivers traffic the day you turn it on and stops the day you stop paying; SEO takes months to build but keeps generating traffic without an ongoing per-click cost. The right first investment depends on how urgently you need results and how long you plan to be in business, not on which channel is objectively "better."',
    ledeEs:
      'Google Ads entrega tráfico el día que lo enciendes y se detiene el día que dejas de pagar; el SEO toma meses en construirse pero sigue generando tráfico sin un costo continuo por clic. La inversión correcta para empezar depende de qué tan urgente necesitas resultados y cuánto tiempo planeas seguir en el negocio, no de cuál canal es objetivamente "mejor."',
    gradient: "from-neutral-800 to-neutral-950",
    sections: [
      {
        id: "la-diferencia-fundamental",
        heading: "The fundamental difference",
        headingEs: "La diferencia fundamental",
        body: [
          "Google Ads is rented traffic — the moment the budget stops, the traffic stops with it. SEO is owned traffic — it takes real investment to build, but once ranking, it keeps generating visits without a direct per-click cost. Neither is better in the abstract; they solve different problems on different timelines.",
        ],
        bodyEs: [
          "Google Ads es tráfico rentado: en el momento en que se detiene el presupuesto, el tráfico se detiene con él. El SEO, en cambio, es tráfico propio. Toma inversión real construirlo, pero una vez posicionando, sigue generando visitas sin un costo directo por clic. Ninguno es mejor en abstracto; resuelven problemas distintos en cronogramas distintos.",
        ],
      },
      {
        id: "costo-comparado",
        heading: "Cost compared over time",
        headingEs: "Costo comparado en el tiempo",
        body: [
          "In the first six months, Google Ads usually costs less overall because SEO's investment hasn't paid off yet. Past month twelve, the comparison often flips — SEO's marginal cost per visit trends toward zero while Ads keeps costing the same per click indefinitely. The break-even point varies by category, but it's real.",
        ],
        bodyEs: [
          "En los primeros seis meses, Google Ads suele costar menos en total porque la inversión en SEO todavía no ha rendido frutos. Después del mes doce, la comparación muchas veces se invierte: el costo marginal por visita del SEO tiende a cero, mientras que Ads sigue costando lo mismo por clic indefinidamente. El punto de equilibrio varía por categoría, pero es real.",
        ],
      },
      {
        id: "cuando-empezar-con-ads",
        heading: "When to start with Google Ads",
        headingEs: "Cuándo empezar con Google Ads",
        body: [
          "Choose Ads first when you need revenue this quarter, when you're testing a new offer or market and need fast signal on what converts, or when your category is too competitive to realistically rank organically in a reasonable timeframe.",
        ],
        bodyEs: [
          "Elige Ads primero cuando necesitas ingresos este trimestre, cuando estás probando una oferta o mercado nuevo y necesitas señal rápida de qué convierte, o cuando tu categoría es demasiado competida para posicionar orgánicamente en un plazo razonable.",
        ],
      },
      {
        id: "cuando-empezar-con-seo",
        heading: "When to start with SEO",
        headingEs: "Cuándo empezar con SEO",
        body: [
          "Choose SEO first when you're building for the long term and want to reduce dependency on paid budget over time, when your category has clear, sustained search volume, or when cash flow is tight and you can afford to invest time before revenue.",
        ],
        bodyEs: [
          "Elige SEO primero cuando estás construyendo a largo plazo y quieres reducir la dependencia de presupuesto pagado con el tiempo, cuando tu categoría tiene volumen de búsqueda claro y sostenido, o cuando el flujo de efectivo está ajustado y puedes invertir tiempo antes que ingresos.",
        ],
      },
      {
        id: "por-que-no-es-o-uno-o-otro",
        heading: "Why it's rarely either/or",
        headingEs: "Por qué rara vez es uno u otro",
        body: [
          'Most established businesses eventually run both — Ads to fill the gap while SEO compounds, and SEO to lower blended acquisition cost over time. The sequencing question matters more than the choice itself. For platform-to-platform paid comparisons, see "Google Ads vs Meta Ads."',
        ],
        bodyEs: [
          'La mayoría de los negocios establecidos eventualmente corre ambos: Ads para llenar el vacío mientras el SEO se acumula, y SEO para bajar el costo de adquisición combinado con el tiempo. La pregunta de secuencia importa más que la elección en sí. Para comparaciones entre plataformas pagadas, revisa "Google Ads vs Meta Ads."',
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál da mejor retorno de inversión?",
        qEn: "Which gives a better return on investment?",
        a: "Depende del horizonte de tiempo: a corto plazo, Google Ads suele tener un retorno más predecible. A largo plazo (12+ meses), el SEO frecuentemente supera a los anuncios porque el costo marginal por visita baja con el tiempo.",
        aEn: "It depends on the time horizon — short term, Google Ads usually has a more predictable return. Long term (12+ months), SEO frequently outperforms ads because marginal cost per visit drops over time.",
      },
      {
        q: "¿Puedo hacer solo uno de los dos para siempre?",
        qEn: "Can I just do one of the two forever?",
        a: "Sí, algunos negocios operan exitosamente solo con uno, pero renuncian a las ventajas del otro: velocidad en el caso de SEO solo, o independencia de presupuesto en el caso de Ads solo.",
        aEn: "Yes, some businesses operate successfully with just one — but they give up the other's advantages: speed in the case of SEO-only, or budget independence in the case of Ads-only.",
      },
      {
        q: "¿Cuál requiere menos gestión continua?",
        qEn: "Which requires less ongoing management?",
        a: "Ninguno de los dos funciona bien en piloto automático, pero Google Ads necesita revisión más frecuente (semanal) mientras que el SEO puede revisarse con menor frecuencia (mensual) una vez establecido un ritmo de publicación.",
        aEn: "Neither works well on autopilot, but Google Ads needs more frequent review (weekly) while SEO can be reviewed less often (monthly) once a publishing rhythm is established.",
      },
      {
        q: "¿Cómo decido cuál probar primero si tengo presupuesto limitado?",
        qEn: "How do I decide which to try first with a limited budget?",
        a: "Pregúntate qué tan urgente necesitas resultados. Si es este trimestre, Google Ads. Si estás construyendo para los próximos dos o tres años, empieza a invertir en SEO ahora, aunque sea con un presupuesto modesto.",
        aEn: "Ask yourself how urgently you need results. If it's this quarter, Google Ads. If you're building for the next two or three years, start investing in SEO now, even with a modest budget.",
      },
      {
        q: "¿Cambia la respuesta según la industria?",
        qEn: "Does the answer change by industry?",
        a: "Sí: industrias con alto volumen de búsqueda y ciclos de compra largos favorecen al SEO; industrias con decisiones de compra urgentes o de bajo volumen de búsqueda favorecen a los anuncios.",
        aEn: "Yes — industries with high search volume and long purchase cycles favor SEO; industries with urgent purchase decisions or low search volume favor ads.",
      },
    ],
    schema: {
      keywords: ["SEO vs Google Ads", "SEO or ads first"],
      keywordsEs: ["SEO vs Google Ads", "SEO o ads primero"],
    },
  },
  {
    slug: "guia-marketing-medico",
    title: "Medical & Dental Marketing: The Complete 2026 Guide",
    titleEs: "Marketing Médico y Dental: Guía Completa 2026",
    category: "Medical Marketing",
    categoryEs: "Marketing Médico",
    excerpt:
      "A complete guide to medical and dental marketing in Mexico: local patients, U.S. patient acquisition, reputation, campaigns and compliance — with cases from Baja California.",
    excerptEs:
      "Guía completa de marketing médico y dental en México: pacientes locales, captación de pacientes de EE.UU., reputación, campañas y cumplimiento. Casos de Baja California.",
    readingTime: 18,
    date: "2026-08-14",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Medical and dental marketing has two audiences that need different systems: local patients who search, compare reviews and book close to home, and — for clinics near the border — U.S. patients drawn by cost savings who need a completely different trust-building process before they'll cross into Mexico for care. Both run on the same foundation: reputation, a compliant website, and campaigns that respect strict advertising rules.",
    ledeEs:
      "El marketing médico y dental tiene dos audiencias que necesitan sistemas distintos: pacientes locales que buscan, comparan reseñas y agendan cerca de casa, y, para clínicas cerca de la frontera, pacientes de EE.UU. atraídos por el ahorro que necesitan un proceso de confianza completamente distinto antes de cruzar a México por atención médica. Ambos corren sobre la misma base: reputación, un sitio web que cumple normativa, y campañas que respetan reglas publicitarias estrictas.",
    gradient: "from-neutral-800 to-zinc-950",
    sections: [
      {
        id: "dos-audiencias",
        heading: "Two audiences, two systems",
        headingEs: "Dos audiencias, dos sistemas",
        body: [
          'A local patient searching "dentista cerca de mí" is close to booking — they need a fast, trustworthy local presence. A U.S. patient researching dental work in Tijuana is earlier in a much longer trust journey — they need pricing transparency, credentials, reviews from other American patients, and a clear picture of what crossing the border for care actually looks like. Treating both audiences with the same content and campaigns wastes budget on both.',
        ],
        bodyEs: [
          'Un paciente local que busca "dentista cerca de mí" está cerca de agendar: necesita una presencia local rápida y confiable. Un paciente de EE.UU. investigando trabajo dental en Tijuana está más al principio de un proceso de confianza mucho más largo: necesita transparencia de precios, credenciales, reseñas de otros pacientes estadounidenses y una idea clara de cómo es realmente cruzar la frontera por atención médica. Tratar a ambas audiencias con el mismo contenido y campañas desperdicia presupuesto en ambas.',
        ],
      },
      {
        id: "reputacion",
        heading: "Reputation is the product before the product",
        headingEs: "La reputación es el producto antes del producto",
        body: [
          'For any medical or dental practice, reviews carry more weight than almost any other marketing asset — patients are choosing who touches their body or their family\'s health, and they research accordingly. A steady stream of recent, real reviews, and a habit of responding to every one, does more for patient acquisition than most paid campaigns. We cover the exact process in "how to get more Google reviews for doctors."',
        ],
        bodyEs: [
          'Para cualquier consultorio médico o dental, las reseñas pesan más que casi cualquier otro activo de marketing. Al final, los pacientes están eligiendo quién va a tocar su cuerpo o la salud de su familia, y investigan en consecuencia. Un flujo constante de reseñas reales y recientes, junto con el hábito de responder a cada una, hace más por la captación de pacientes que la mayoría de las campañas pagadas. Cubrimos el proceso exacto en "cómo conseguir más reseñas de Google para médicos."',
        ],
      },
      {
        id: "sitio-web-clinico",
        heading: "What a clinic's website actually needs",
        headingEs: "Qué necesita realmente el sitio de una clínica",
        body: [
          'Beyond standard trust signals, a medical or dental site needs visible credentials, clear service and pricing pages, and — this matters more here than in almost any other industry — content that meets Google\'s E-E-A-T standard (experience, expertise, authoritativeness, trustworthiness), since health content faces extra scrutiny in search rankings. We go deeper on this in "E-E-A-T for medical content" and "websites for clinics."',
        ],
        bodyEs: [
          'Más allá de las señales de confianza estándar, un sitio médico o dental necesita credenciales visibles, páginas claras de servicios y precios, y, esto importa más aquí que en casi cualquier otra industria, contenido que cumpla con el estándar E-E-A-T de Google (experiencia, especialización, autoridad, confiabilidad), ya que el contenido de salud enfrenta escrutinio extra en el posicionamiento de búsqueda. Profundizamos en esto en "E-E-A-T para contenido médico" y "sitios web para clínicas."',
        ],
      },
      {
        id: "pacientes-eeuu",
        heading: "The U.S. patient opportunity at the border",
        headingEs: "La oportunidad de pacientes de EE.UU. en la frontera",
        body: [
          'For clinics in Tijuana and other border cities, patients from California and Arizona represent one of the highest-value opportunities in Mexican healthcare marketing — driven by dental and medical costs that can run a fraction of U.S. prices for comparable care. This audience requires bilingual content, U.S.-facing advertising, and a completely different trust-building process. We cover the full system in "medical tourism in Tijuana: how to attract U.S. patients."',
        ],
        bodyEs: [
          'Para clínicas en Tijuana y otras ciudades fronterizas, los pacientes de California y Arizona representan una de las oportunidades de mayor valor en el marketing de salud mexicano, impulsada por costos dentales y médicos que pueden ser una fracción del precio en EE.UU. para atención comparable. Esta audiencia requiere contenido bilingüe, publicidad orientada a EE.UU., y un proceso de confianza completamente distinto. Cubrimos el sistema completo en "turismo médico en Tijuana: cómo captar pacientes de EE.UU."',
        ],
      },
      {
        id: "cumplimiento",
        heading: "Compliance and advertising restrictions",
        headingEs: "Cumplimiento y restricciones publicitarias",
        body: [
          'Medical and dental advertising faces restrictions that most other industries don\'t — on both the Mexican regulatory side (COFEPRIS) and the platform side (Google Ads has specific healthcare policies). Getting this wrong risks more than a wasted budget; it can mean a suspended ad account or regulatory issues. See the specific Google Ads restrictions in "Google Ads for doctors: the restrictions."',
        ],
        bodyEs: [
          'La publicidad médica y dental enfrenta restricciones que la mayoría de las otras industrias no tienen: tanto del lado regulatorio mexicano (COFEPRIS) como del lado de las plataformas (Google Ads tiene políticas específicas de salud). Hacerlo mal arriesga más que un presupuesto desperdiciado; puede significar una cuenta de anuncios suspendida o problemas regulatorios. Revisa las restricciones específicas de Google Ads en "Google Ads para médicos: las restricciones."',
        ],
      },
      {
        id: "comunicacion-directa",
        heading: "WhatsApp and direct communication",
        headingEs: "WhatsApp y comunicación directa",
        body: [
          'Patients — especially anxious ones researching a procedure — respond better to a direct WhatsApp line than a contact form that disappears into an inbox. For border-city clinics, this matters even more: a fast, clear answer to a nervous first message from a U.S. patient often decides whether they book at all. We cover setup and scripts in "WhatsApp for clinics."',
        ],
        bodyEs: [
          'Los pacientes, sobre todo los que están ansiosos investigando un procedimiento, responden mejor a una línea directa de WhatsApp que a un formulario de contacto que desaparece en una bandeja de entrada. Para clínicas en ciudades fronterizas, esto importa todavía más: una respuesta rápida y clara al primer mensaje nervioso de un paciente de EE.UU. muchas veces decide si agenda o no. Cubrimos la configuración y guiones en "WhatsApp para clínicas."',
        ],
      },
      {
        id: "redes-sociales",
        heading: "Social media for doctors and clinics",
        headingEs: "Redes sociales para médicos y clínicas",
        body: [
          'Social media works differently for healthcare than for most industries — the content that builds trust is educational and behind-the-scenes, not sales-driven, and testimonials need to be handled carefully to stay within advertising rules. We go deeper on what actually works in "social media for doctors."',
        ],
        bodyEs: [
          'Las redes sociales funcionan distinto para salud que para la mayoría de las industrias: el contenido que genera confianza es educativo y detrás de cámaras, no orientado a la venta, y los testimonios hay que manejarlos con cuidado para mantenerse dentro de las reglas publicitarias. Profundizamos en qué funciona realmente en "redes sociales para doctores."',
        ],
      },
      {
        id: "presupuesto",
        heading: "What to budget",
        headingEs: "Qué presupuestar",
        body: [
          'Medical and dental marketing typically costs more than average because patient acquisition value is high and the sales cycle involves more trust-building steps. The full budget breakdown is in "how much to invest in medical marketing."',
        ],
        bodyEs: [
          'El marketing médico y dental suele costar más que el promedio porque el valor de adquisición de paciente es alto y el ciclo de venta involucra más pasos de construcción de confianza. El desglose completo de presupuesto está en "cuánto invertir en marketing médico."',
        ],
      },
      {
        id: "errores-comunes",
        heading: "Common mistakes in medical marketing",
        headingEs: "Errores comunes en marketing médico",
        body: [
          'The most frequent ones we see: generic stock-photo websites with no real credentials shown, ignoring reviews entirely, and advertising claims that violate platform or regulatory rules without the practice realizing it. The full list is in "medical marketing mistakes."',
        ],
        bodyEs: [
          'Los más frecuentes que vemos: sitios web con fotos genéricas de banco de imágenes sin credenciales reales mostradas, ignorar las reseñas por completo, y declaraciones publicitarias que violan reglas de plataforma o regulatorias sin que el consultorio se dé cuenta. La lista completa está en "errores de marketing dental."',
        ],
      },
    ],
    faq: [
      {
        q: "¿El marketing médico es diferente al marketing de otras industrias?",
        qEn: "Is medical marketing different from marketing in other industries?",
        a: "Sí, en varios sentidos importantes: enfrenta más restricciones publicitarias, requiere más señales de confianza y credenciales, y las reseñas pesan más en la decisión del paciente que en la mayoría de las otras compras.",
        aEn: "Yes, in several important ways — it faces more advertising restrictions, requires more trust signals and credentials, and reviews weigh more heavily in a patient's decision than in most other purchases.",
      },
      {
        q: "¿Puedo anunciar tratamientos médicos en Google Ads sin restricciones?",
        qEn: "Can I advertise medical treatments on Google Ads without restrictions?",
        a: "No: Google tiene políticas específicas para salud que limitan ciertas declaraciones y requieren certificaciones en algunos casos. Revisa las restricciones específicas antes de lanzar campañas para evitar que la cuenta se suspenda.",
        aEn: "No — Google has specific health policies that limit certain claims and require certifications in some cases. Review the specific restrictions before launching campaigns to avoid account suspension.",
      },
      {
        q: "¿Vale la pena enfocarse en pacientes de EE.UU. si mi clínica no está en la frontera?",
        qEn: "Is it worth focusing on U.S. patients if my clinic isn't near the border?",
        a: "Es mucho más difícil sin la ventaja de proximidad geográfica. La mayoría de los pacientes de turismo médico buscan cercanía razonable a la frontera. Para clínicas fuera de ciudades fronterizas, el enfoque suele rendir más en pacientes locales o nacionales.",
        aEn: "It's much harder without the advantage of geographic proximity — most medical tourism patients look for reasonable closeness to the border. For clinics outside border cities, focus usually performs better on local or national patients.",
      },
      {
        q: "¿Cuánto cuesta el marketing médico comparado con otras industrias?",
        qEn: "How much does medical marketing cost compared to other industries?",
        a: "Generalmente, más: el valor de un paciente adquirido es alto y el proceso de generar confianza requiere más contenido, reputación y, en el caso de pacientes de EE.UU., campañas bilingües. El desglose completo está en cuánto invertir en marketing médico.",
        aEn: "Generally more — the value of an acquired patient is high and the trust-building process requires more content, reputation work, and, in the case of U.S. patients, bilingual campaigns. The full breakdown is in how much to invest in medical marketing.",
      },
      {
        q: "¿Las reseñas falsas son un riesgo mayor en salud?",
        qEn: "Are fake reviews a bigger risk in healthcare?",
        a: "Sí: más allá del riesgo general de que Google las detecte, en salud generan un riesgo de confianza mayor si un paciente descubre que fueron fabricadas, dado lo sensible de la decisión que está tomando.",
        aEn: "Yes — beyond the general risk of Google detecting them, in healthcare they create a bigger trust risk if a patient discovers they were fabricated, given how sensitive the decision they're making is.",
      },
      {
        q: "¿Necesito contenido en inglés si mi clínica está en México?",
        qEn: "Do I need English-language content if my clinic is in Mexico?",
        a: "Si buscas pacientes de EE.UU., sí, y no como una traducción automática: el contenido en inglés necesita hablarle directamente a las preocupaciones específicas de un paciente estadounidense sobre cruzar la frontera por atención médica.",
        aEn: "If you're targeting U.S. patients, yes, and not as an automatic translation — the English content needs to speak directly to a U.S. patient's specific concerns about crossing the border for care.",
      },
    ],
    schema: {
      keywords: ["medical marketing Mexico", "dental marketing", "healthcare marketing guide"],
      keywordsEs: ["marketing médico México", "marketing dental", "guía marketing salud"],
    },
  },
  {
    slug: "como-atraer-pacientes-de-estados-unidos",
    title: "Medical Tourism in Tijuana: How to Attract U.S. Patients",
    titleEs: "Turismo Médico en Tijuana: Cómo Captar Pacientes de EE.UU.",
    category: "Medical Marketing",
    categoryEs: "Marketing Médico",
    excerpt:
      "How Tijuana dental and medical clinics attract patients from California and Arizona — trust signals, bilingual content and the campaigns that actually convert cross-border patients.",
    excerptEs:
      "Cómo las clínicas dentales y médicas de Tijuana captan pacientes de California y Arizona — señales de confianza, contenido bilingüe y las campañas que sí convierten pacientes transfronterizos.",
    readingTime: 10,
    date: "2026-08-16",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "U.S. patients from California and Arizona come to Tijuana for dental and medical care that costs a fraction of U.S. prices, but they need a longer trust-building process than local patients before they'll cross the border. Bilingual content built specifically for an American audience, verifiable credentials, and reviews from other U.S. patients are what actually convert this audience, not translated Spanish marketing copy.",
    ledeEs:
      "Los pacientes de EE.UU. de California y Arizona llegan a Tijuana por atención dental y médica que cuesta una fracción del precio en EE.UU., pero necesitan un proceso de confianza más largo que los pacientes locales antes de cruzar la frontera. El contenido bilingüe construido específicamente para una audiencia estadounidense, credenciales verificables y reseñas de otros pacientes de EE.UU. son lo que realmente convierte a esta audiencia, no copy de marketing en español traducido.",
    gradient: "from-neutral-800 to-zinc-950",
    sections: [
      {
        id: "por-que-cruzan-la-frontera",
        heading: "Why U.S. patients cross the border",
        headingEs: "Por qué los pacientes de EE.UU. cruzan la frontera",
        body: [
          "Cost is the primary driver — dental implants, crowns, and many elective procedures in Tijuana commonly run a fraction of equivalent U.S. pricing, even accounting for travel. Proximity matters too: for patients in San Diego or Yuma, Tijuana is often closer than the nearest comparable U.S. provider. But cost alone doesn't convert a nervous first-time patient — trust does.",
        ],
        bodyEs: [
          "El costo es el motor principal: implantes dentales, coronas y muchos procedimientos electivos en Tijuana suelen costar una fracción del precio equivalente en EE.UU., incluso considerando el viaje. La cercanía también importa: para pacientes en San Diego o Yuma, Tijuana muchas veces está más cerca que el proveedor comparable más cercano en EE.UU. Pero el costo solo no convierte a un paciente nervioso de primera vez. La confianza sí.",
        ],
      },
      {
        id: "la-barrera-de-confianza",
        heading: "The trust barrier is the real obstacle",
        headingEs: "La barrera de confianza es el obstáculo real",
        body: [
          'A U.S. patient considering care in Mexico is working through real concerns — safety, credentials, what happens if something goes wrong, and whether the clinic is actually as good as it claims. Content that ignores these concerns and jumps straight to price loses the patient before they ever reach the "how much does it cost" question.',
        ],
        bodyEs: [
          'Un paciente de EE.UU. que considera atención en México está procesando preocupaciones reales: seguridad, credenciales, qué pasa si algo sale mal, y si la clínica realmente es tan buena como dice. El contenido que ignora estas preocupaciones y salta directo al precio pierde al paciente antes de que llegue a la pregunta de "cuánto cuesta".',
        ],
      },
      {
        id: "contenido-bilingue-real",
        heading: "Bilingual content means built for the audience, not translated",
        headingEs: "Contenido bilingüe significa construido para la audiencia, no traducido",
        body: [
          "English content for U.S. patients needs to be written from scratch for that audience's specific concerns and search behavior, not a direct translation of Spanish marketing copy. That means addressing border-crossing logistics, U.S. dollar pricing, credential verification in terms an American patient recognizes, and testimonials specifically from other U.S. patients, not just local ones.",
        ],
        bodyEs: [
          "El contenido en inglés para pacientes de EE.UU. necesita escribirse desde cero para las preocupaciones y el comportamiento de búsqueda específicos de esa audiencia, no una traducción directa del copy en español. Eso significa abordar la logística de cruzar la frontera, precios en dólares, verificación de credenciales en términos que un paciente estadounidense reconozca, y testimonios específicamente de otros pacientes de EE.UU., no solo locales.",
        ],
      },
      {
        id: "senales-de-confianza",
        heading: "The trust signals that actually matter",
        headingEs: "Las señales de confianza que realmente importan",
        body: [
          "Verifiable credentials and certifications displayed prominently, before-and-after cases with real patient consent, video testimonials specifically from U.S. patients describing the crossing and treatment experience, and transparent U.S.-dollar pricing all reduce the specific anxieties this audience has that local patients typically don't.",
        ],
        bodyEs: [
          "Credenciales y certificaciones verificables mostradas de forma prominente, casos de antes y después con consentimiento real del paciente, testimonios en video específicamente de pacientes de EE.UU. describiendo la experiencia de cruzar y el tratamiento, y precios transparentes en dólares reducen las ansiedades específicas que tiene esta audiencia y que los pacientes locales típicamente no tienen.",
        ],
      },
      {
        id: "donde-encontrarlos",
        heading: "Where to actually reach them",
        headingEs: "Dónde realmente encontrarlos",
        body: [
          'Google Ads targeting U.S. border-area zip codes for specific procedure searches, Meta Ads targeting the same geography with educational, testimonial-driven creative, and English-language SEO content built around the specific searches U.S. patients run — "dental implants Tijuana cost," "is it safe to get dental work in Mexico" — all outperform generic Spanish-language campaigns for this specific audience.',
        ],
        bodyEs: [
          'Google Ads dirigido a códigos postales de zonas fronterizas de EE.UU. para búsquedas de procedimientos específicos, Meta Ads dirigido a la misma geografía con creativos educativos y basados en testimonios, y contenido SEO en inglés construido alrededor de las búsquedas específicas que hacen los pacientes de EE.UU. (como "dental implants Tijuana cost" o "is it safe to get dental work in Mexico") superan a las campañas genéricas en español para esta audiencia específica.',
        ],
      },
      {
        id: "despues-del-primer-contacto",
        heading: "What happens after the first contact",
        headingEs: "Qué pasa después del primer contacto",
        body: [
          'A fast, clear response — ideally bilingual and available by WhatsApp or a direct phone line, not just an email form — often decides whether a nervous first-time patient books at all. The broader follow-up principles are the same ones covered in "real estate lead follow-up," adapted to a patient instead of a buyer: speed and reassurance win.',
        ],
        bodyEs: [
          'Una respuesta rápida y clara, idealmente bilingüe y disponible por WhatsApp o una línea telefónica directa (no solo un formulario de correo), muchas veces decide si un paciente nervioso de primera vez agenda o no. Los principios generales de seguimiento son los mismos que cubrimos en "seguimiento de leads inmobiliarios," adaptados a un paciente en vez de un comprador: velocidad y tranquilidad ganan.',
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué tan seguro es para un paciente de EE.UU. recibir atención dental en Tijuana?",
        qEn: "How safe is it for a U.S. patient to get dental care in Tijuana?",
        a: "Depende completamente de la clínica específica. Credenciales verificables, certificaciones reales y reseñas consistentes de otros pacientes de EE.UU. son las señales que un paciente debe buscar antes de decidir, igual que investigaría cualquier proveedor de salud en su propio país.",
        aEn: "It depends entirely on the specific clinic — verifiable credentials, real certifications and consistent reviews from other U.S. patients are the signals a patient should look for before deciding, the same way they'd research any healthcare provider in their own country.",
      },
      {
        q: "¿Cuánto pueden ahorrar los pacientes de EE.UU. viniendo a Tijuana?",
        qEn: "How much can U.S. patients save coming to Tijuana?",
        a: "Como referencia de mercado, muchos procedimientos dentales y médicos electivos cuestan una fracción del precio equivalente en EE.UU., aunque el ahorro exacto varía mucho por procedimiento y proveedor específico. Vale la pena cotizar directamente con la clínica.",
        aEn: "As a market reference, many dental and elective medical procedures cost a fraction of the equivalent U.S. price, though the exact savings vary a lot by procedure and specific provider — it's worth getting a direct quote from the clinic.",
      },
      {
        q: "¿Necesito seguro médico especial para recibir atención en México?",
        qEn: "Do I need special medical insurance to get care in Mexico?",
        a: "La mayoría de los pacientes de turismo médico pagan directamente, ya que la mayoría de los seguros de EE.UU. no cubren atención fuera del país. Esto es parte de por qué el ahorro de costo es el motor principal detrás de la decisión.",
        aEn: "Most medical tourism patients pay directly, since most U.S. insurance doesn't cover care outside the country — this is part of why cost savings is the primary driver behind the decision.",
      },
      {
        q: "¿El contenido en inglés debe estar en un dominio separado?",
        qEn: "Should English content live on a separate domain?",
        a: "No es necesario: funciona bien como una sección o subcarpeta en inglés dentro del mismo sitio, siempre que esté construida específicamente para la audiencia estadounidense y no sea solo una traducción automática del contenido en español.",
        aEn: "It's not necessary — it works well as an English section or subfolder within the same site, as long as it's built specifically for the U.S. audience and isn't just an automatic translation of the Spanish content.",
      },
      {
        q: "¿Qué plataforma publicitaria funciona mejor para llegar a pacientes de EE.UU.?",
        qEn: "Which advertising platform works best to reach U.S. patients?",
        a: "Google Ads captura a quienes ya están buscando activamente el procedimiento y el destino; Meta Ads funciona bien para generar conocimiento inicial con contenido testimonial. La mayoría de las clínicas fronterizas exitosas usa ambas.",
        aEn: "Google Ads captures people already actively searching for the procedure and destination; Meta Ads works well for building initial awareness with testimonial content. Most successful border clinics use both.",
      },
    ],
    schema: {
      keywords: ["medical tourism Tijuana", "dental tourism Mexico", "attract US patients Tijuana"],
      keywordsEs: [
        "turismo médico Tijuana",
        "turismo dental México",
        "captar pacientes de Estados Unidos",
      ],
    },
  },
  {
    slug: "optimizar-google-business-profile",
    title: "How to Optimize Your Google Business Profile (7 Steps)",
    titleEs: "Cómo Optimizar tu Perfil de Google Business (7 Pasos)",
    category: "SEO",
    categoryEs: "SEO",
    excerpt:
      "The exact sequence: verify, complete every field, add real photos weekly, build a review system, post updates, keep your name/address/phone consistent everywhere, and treat it as an ongoing channel.",
    excerptEs:
      "La secuencia exacta: verificar, completar cada campo, subir fotos reales cada semana, construir un sistema de reseñas, publicar actualizaciones, mantener nombre/dirección/teléfono consistentes en todas partes, y tratarlo como un canal continuo.",
    readingTime: 6,
    date: "2026-08-15",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Optimizing a Google Business Profile means claiming and verifying it, filling every field completely and accurately, uploading real photos on a regular schedule, and actively managing reviews, in that order. Most businesses claim it once and never touch it again, which is exactly why a profile that's kept active tends to outperform far larger competitors in the local map pack.",
    ledeEs:
      "Optimizar un perfil de Google Business significa reclamarlo y verificarlo, llenar cada campo de forma completa y precisa, subir fotos reales con regularidad, y gestionar activamente las reseñas, en ese orden. La mayoría de los negocios lo reclama una vez y nunca vuelve a tocarlo, que es justo la razón por la que un perfil que se mantiene activo suele superar en el paquete de mapas local a competidores mucho más grandes.",
    sections: [
      {
        id: "paso-1-reclamar-verificar",
        heading: "Step 1: Claim and verify the profile",
        headingEs: "Paso 1: Reclamar y verificar el perfil",
        body: [
          'Search the business name on Google Maps, click "Claim this business" if it appears unclaimed, and complete verification, usually by postcard mailed to the business address (5-14 days) or, when available, by phone or video call for faster approval. An unverified or unclaimed listing can\'t be edited and often carries incomplete or outdated information nobody controls.',
        ],
        bodyEs: [
          'Busca el nombre del negocio en Google Maps, da clic en "Reclamar este negocio" si aparece sin reclamar, y completa la verificación, normalmente por postal enviada a la dirección del negocio (5 a 14 días) o, cuando está disponible, por teléfono o videollamada para una aprobación más rápida. Un listado sin verificar o sin reclamar no se puede editar y muchas veces trae información incompleta o desactualizada que nadie controla.',
        ],
      },
      {
        id: "paso-2-informacion-completa",
        heading: "Step 2: Complete every field accurately",
        headingEs: "Paso 2: Completar cada campo con precisión",
        body: [
          "Business category (choose the most specific one available, not just the broadest), hours including holiday exceptions, service area, website, phone, and a full description using natural language, not keyword-stuffed copy. Profiles with every field completed get shown more often in relevant searches than partially filled ones, since Google explicitly favors complete listings in ranking.",
        ],
        bodyEs: [
          "Categoría del negocio (elige la más específica disponible, no la más genérica), horario incluyendo excepciones de días festivos, área de servicio, sitio web, teléfono, y una descripción completa en lenguaje natural, no copy relleno de palabras clave. Los perfiles con cada campo completo se muestran más seguido en búsquedas relevantes que los que están parcialmente llenos, ya que Google favorece explícitamente a los listados completos en el posicionamiento.",
        ],
      },
      {
        id: "paso-3-fotos",
        heading: "Step 3: Upload real photos regularly",
        headingEs: "Paso 3: Subir fotos reales con regularidad",
        body: [
          "Listings with photos receive substantially more requests for directions and website clicks than those without, according to Google's own guidance to businesses. Upload real photos, not stock images, weekly if possible: the storefront, the team, products or work in progress, since Google's algorithm treats a profile with recent uploads as more active and trustworthy than one that hasn't changed in a year.",
        ],
        bodyEs: [
          "Los listados con fotos reciben sustancialmente más solicitudes de direcciones y clics al sitio web que los que no tienen, según la propia guía de Google para negocios. Sube fotos reales, no imágenes de stock, idealmente cada semana: la fachada, el equipo, productos o trabajo en proceso, ya que el algoritmo de Google trata a un perfil con subidas recientes como más activo y confiable que uno que no ha cambiado en un año.",
        ],
      },
      {
        id: "paso-4-resenas",
        heading: "Step 4: Build a system for reviews",
        headingEs: "Paso 4: Construir un sistema para reseñas",
        body: [
          "Reviews are one of the strongest local ranking factors, and both volume and recency matter, a business with 40 reviews from three years ago ranks worse than one with 15 recent ones. Ask every satisfied customer directly, ideally with a shareable review link sent right after the service, and respond to every review, positive or negative, within a few days.",
        ],
        bodyEs: [
          "Las reseñas son uno de los factores de posicionamiento local más fuertes, y tanto el volumen como qué tan recientes son importan: un negocio con 40 reseñas de hace tres años posiciona peor que uno con 15 reseñas recientes. Pide reseñas directamente a cada cliente satisfecho, idealmente con un enlace para compartir enviado justo después del servicio, y responde a cada reseña, positiva o negativa, dentro de unos días.",
        ],
      },
      {
        id: "paso-5-publicaciones",
        heading: "Step 5: Use posts and Q&A actively",
        headingEs: "Paso 5: Usar publicaciones y preguntas y respuestas de forma activa",
        body: [
          "Google Business Posts (offers, updates, events) expire after seven days and give the profile a reason to look active in search results, and the Q&A section is public, meaning unanswered questions sit visible to every future visitor. Seeding a few common questions with clear answers, and monitoring for new ones weekly, closes a gap most competitors leave wide open.",
        ],
        bodyEs: [
          "Las publicaciones de Google Business (ofertas, actualizaciones, eventos) expiran después de siete días y le dan al perfil una razón para verse activo en los resultados de búsqueda, y la sección de preguntas y respuestas es pública, lo que significa que las preguntas sin responder quedan visibles para cada futuro visitante. Sembrar algunas preguntas comunes con respuestas claras, y revisar si hay preguntas nuevas cada semana, cierra un hueco que la mayoría de la competencia deja abierto de par en par.",
        ],
      },
      {
        id: "paso-6-consistencia-nap",
        heading: "Step 6: Keep name, address and phone consistent everywhere",
        headingEs: "Paso 6: Mantener nombre, dirección y teléfono consistentes en todas partes",
        body: [
          "The business name, address, and phone number (NAP) need to match exactly across the website, the Google profile, Facebook, and any directory listing, down to how the street type is abbreviated. Inconsistent NAP data is one of the most common, and most overlooked, reasons a listing underperforms in local rankings even when everything else looks optimized.",
        ],
        bodyEs: [
          "El nombre, dirección y teléfono del negocio (NAP) necesitan coincidir exactamente entre el sitio web, el perfil de Google, Facebook, y cualquier directorio, hasta en cómo se abrevia el tipo de calle. Los datos NAP inconsistentes son una de las razones más comunes, y más pasadas por alto, de que un listado rinda mal en el posicionamiento local aunque todo lo demás se vea optimizado.",
        ],
      },
      {
        id: "paso-7-mantenimiento",
        heading: "Step 7: Treat it as an ongoing channel, not a one-time setup",
        headingEs: "Paso 7: Tratarlo como un canal continuo, no una configuración de una sola vez",
        body: [
          "A profile updated once at setup and never touched again gradually loses the activity signals that keep it competitive against businesses that post, photograph, and respond weekly. Setting a recurring 15-minute monthly check (new reviews answered, a few new photos, hours confirmed for any upcoming holiday) keeps the profile performing instead of quietly falling behind.",
        ],
        bodyEs: [
          "Un perfil que se actualiza una vez en la configuración inicial y nunca más se vuelve a tocar va perdiendo poco a poco las señales de actividad que lo mantienen competitivo frente a negocios que publican, fotografían y responden cada semana. Poner una revisión mensual recurrente de 15 minutos (reseñas nuevas respondidas, algunas fotos nuevas, horario confirmado para cualquier día festivo próximo) mantiene al perfil rindiendo en vez de irse quedando atrás sin que nadie lo note.",
        ],
      },
    ],
    gradient: "from-neutral-800 to-neutral-950",
    faq: [
      {
        q: "¿Cuánto tiempo toma que se vea el efecto de optimizar mi perfil?",
        qEn: "How long does it take to see the effect of optimizing my profile?",
        a: "Los cambios de información (categoría, horario, fotos) pueden reflejarse en días. El efecto en el posicionamiento del paquete de mapas suele notarse en 4 a 8 semanas, conforme se acumulan reseñas nuevas y señales de actividad.",
        aEn: "Information changes (category, hours, photos) can show up within days. The effect on map pack ranking usually becomes noticeable in 4 to 8 weeks, as new reviews and activity signals accumulate.",
      },
      {
        q: "¿Con qué frecuencia debo subir fotos nuevas?",
        qEn: "How often should I upload new photos?",
        a: "Idealmente cada semana. Google trata a los perfiles con subidas recientes como más activos, y eso influye en cómo se posicionan frente a competidores que no han subido nada en meses.",
        aEn: "Ideally every week. Google treats profiles with recent uploads as more active, and that affects how they rank against competitors that haven't uploaded anything in months.",
      },
      {
        q: "¿Debo responder a las reseñas negativas?",
        qEn: "Should I respond to negative reviews?",
        a: "Sí, siempre, y de preferencia dentro de un par de días. Una respuesta profesional a una reseña negativa la ven todos los futuros visitantes, y suele importar más que la reseña misma.",
        aEn: "Yes, always, and ideally within a couple of days. A professional response to a negative review is seen by every future visitor, and it often matters more than the review itself.",
      },
      {
        q: "¿Qué es NAP y por qué importa tanto?",
        qEn: "What is NAP and why does it matter so much?",
        a: "NAP es nombre, dirección y teléfono. Necesitan ser exactamente iguales en el sitio web, el perfil de Google y cualquier directorio. Una inconsistencia, aunque parezca menor, puede afectar el posicionamiento local sin que sea obvio por qué.",
        aEn: "NAP is name, address, and phone. They need to be exactly the same on the website, the Google profile, and any directory. An inconsistency, even a minor-seeming one, can affect local ranking without it being obvious why.",
      },
      {
        q: "¿Puedo optimizar mi perfil yo mismo o necesito un experto?",
        qEn: "Can I optimize my profile myself, or do I need an expert?",
        a: "Los siete pasos son manejables por cuenta propia con disciplina y constancia. Donde suele fallar el esfuerzo propio es en la constancia a largo plazo, no en el conocimiento técnico inicial.",
        aEn: "The seven steps are manageable on your own with discipline and consistency. Where DIY effort usually falls short is long-term consistency, not the initial technical knowledge.",
      },
    ],
    schema: {
      keywords: ["Google Business Profile optimization", "GBP local SEO"],
      keywordsEs: ["optimizar perfil de google business", "gbp seo local"],
    },
  },
  {
    slug: "como-medir-conversiones-google-ads",
    title: "How to Actually Measure Conversions (GA4 + GTM)",
    titleEs: "Cómo Medir Conversiones de Verdad (GA4 + GTM)",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "A practical GA4 and Google Tag Manager setup for measuring Google Ads conversions correctly — written from the accounts we've had to fix, not theory.",
    excerptEs:
      "Una configuración práctica de GA4 y Google Tag Manager para medir conversiones de Google Ads correctamente — escrito desde las cuentas que hemos tenido que corregir, no desde la teoría.",
    readingTime: 9,
    date: "2026-08-20",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Measuring conversions correctly means GA4 tracking real business actions (calls, form fills, purchases) through Google Tag Manager, connected properly to Google Ads, not just pageviews mislabeled as conversions. In nearly every account audit we run, broken or incomplete conversion tracking is the first thing we find, and it invalidates every other optimization until it's fixed.",
    ledeEs:
      "Medir conversiones correctamente significa que GA4 rastree acciones de negocio reales (llamadas, formularios, compras) a través de Google Tag Manager, conectado correctamente a Google Ads, no solo vistas de página mal etiquetadas como conversiones. En casi cada auditoría de cuenta que hacemos, el seguimiento de conversiones roto o incompleto es lo primero que encontramos, e invalida cualquier otra optimización hasta que se corrige.",
    gradient: "from-slate-700 to-neutral-900",
    sections: [
      {
        id: "por-que-esto-importa-tanto",
        heading: "Why this matters more than any single ad tweak",
        headingEs: "Por qué esto importa más que cualquier ajuste de anuncio",
        body: [
          "Google Ads' bidding algorithm optimizes toward whatever it's told counts as a conversion. If that signal is wrong — counting every pageview instead of actual leads, or missing conversions that happen by phone — the algorithm spends money chasing the wrong outcome, confidently and consistently. No amount of creative or keyword optimization fixes a measurement problem underneath it.",
        ],
        bodyEs: [
          "El algoritmo de puja de Google Ads optimiza hacia lo que se le indique que cuenta como conversión. Si esa señal está mal (contando cada vista de página en vez de leads reales, o perdiendo conversiones que ocurren por teléfono), el algoritmo gasta dinero persiguiendo el resultado equivocado, de forma consistente y segura de sí mismo. Ninguna optimización de creativo o palabra clave corrige un problema de medición debajo de todo eso.",
        ],
      },
      {
        id: "ga4-vs-gtm",
        heading: "GA4 and Google Tag Manager: what each one actually does",
        headingEs: "GA4 y Google Tag Manager: qué hace cada uno realmente",
        body: [
          "GA4 is where conversion data lives and gets reported. Google Tag Manager is the tool that fires the tracking code that tells GA4 a conversion happened, without needing a developer to edit site code every time something changes. Together, GTM captures the event and GA4 records and reports it, and from there, Google Ads pulls that conversion data to optimize bidding.",
        ],
        bodyEs: [
          "GA4 es donde vive y se reporta la información de conversiones. Google Tag Manager es la herramienta que dispara el código de seguimiento que le dice a GA4 que ocurrió una conversión, sin necesitar que un desarrollador edite el código del sitio cada vez que algo cambia. Juntos, GTM captura el evento y GA4 lo registra y reporta, y de ahí, Google Ads toma esa información de conversión para optimizar la puja.",
        ],
      },
      {
        id: "que-contar-como-conversion",
        heading: "What actually counts as a conversion",
        headingEs: "Qué realmente cuenta como conversión",
        body: [
          "A conversion should be an action with real business value: a submitted lead form, a completed purchase, a phone call that lasts long enough to be a real inquiry, a WhatsApp click that starts a conversation. Pageviews, scroll depth, or time-on-site are engagement signals, not conversions — counting them as conversions is one of the most common mistakes we find.",
        ],
        bodyEs: [
          "Una conversión debería ser una acción con valor de negocio real: un formulario de lead enviado, una compra completada, una llamada que dura lo suficiente para ser una consulta real, un clic a WhatsApp que inicia una conversación. Las vistas de página, la profundidad de scroll o el tiempo en el sitio son señales de interacción, no conversiones. Contarlas como conversiones es uno de los errores más comunes que encontramos.",
        ],
      },
      {
        id: "rastreo-de-llamadas",
        heading: "Call tracking: the piece most accounts miss entirely",
        headingEs:
          "Seguimiento de llamadas: la pieza que la mayoría de las cuentas se pierde por completo",
        body: [
          "For service businesses, a large share of conversions happen by phone, and most accounts have zero visibility into which ads and keywords actually drove those calls. Dynamic number insertion and call tracking connect a phone call back to the specific campaign that generated it, closing a gap that otherwise makes half the conversion picture invisible.",
        ],
        bodyEs: [
          "Para negocios de servicio, una gran parte de las conversiones ocurre por teléfono, y la mayoría de las cuentas no tiene ninguna visibilidad de qué anuncios y palabras clave realmente generaron esas llamadas. La inserción dinámica de número y el seguimiento de llamadas conectan una llamada telefónica de vuelta con la campaña específica que la generó, cerrando un hueco que de otra forma vuelve invisible la mitad del panorama de conversión.",
        ],
      },
      {
        id: "lo-que-vemos-en-auditorias",
        heading: "What we consistently find when auditing accounts",
        headingEs: "Lo que consistentemente encontramos al auditar cuentas",
        body: [
          "Duplicate conversion tags firing twice and inflating results, conversions still tracking an old form after a site redesign silently broke it, and phone calls with no tracking at all are the three issues that show up most often — including in accounts we've audited like Velport's, where fixing the same three gaps was the first step before any campaign optimization made sense. None of this requires guessing; it requires actually checking the tags fire correctly, which most accounts never do after initial setup.",
        ],
        bodyEs: [
          "Etiquetas de conversión duplicadas disparándose dos veces e inflando los resultados, conversiones que siguen rastreando un formulario viejo después de que un rediseño del sitio lo rompió en silencio, y llamadas telefónicas sin ningún rastreo son los tres problemas que aparecen con más frecuencia. Los hemos visto, entre otras, en cuentas que hemos auditado como la de Velport, donde corregir esos mismos tres huecos fue el primer paso antes de que cualquier optimización de campaña tuviera sentido. Nada de esto requiere adivinar; requiere realmente revisar que las etiquetas disparen correctamente, algo que la mayoría de las cuentas nunca hace después de la configuración inicial.",
        ],
      },
      {
        id: "como-verificar-que-funciona",
        heading: "How to verify it's actually working",
        headingEs: "Cómo verificar que realmente funciona",
        body: [
          "Use GTM's Preview mode and GA4's DebugView to watch events fire in real time before trusting any report, and periodically complete a test conversion yourself to confirm it shows up correctly in both GA4 and Google Ads. The full list of related account mistakes, including tracking, is in \"10 Google Ads mistakes that burn your budget.\"",
        ],
        bodyEs: [
          'Usa el modo Vista Previa de GTM y el DebugView de GA4 para ver los eventos dispararse en tiempo real antes de confiar en cualquier reporte, y periódicamente completa tú mismo una conversión de prueba para confirmar que aparece correctamente tanto en GA4 como en Google Ads. La lista completa de errores de cuenta relacionados, incluyendo seguimiento, está en "10 errores de Google Ads que queman tu presupuesto."',
        ],
      },
    ],
    faq: [
      {
        q: "¿Necesito GTM si ya tengo GA4 instalado?",
        qEn: "Do I need GTM if I already have GA4 installed?",
        a: "No es obligatorio, pero facilita muchísimo agregar y modificar seguimiento sin depender de un desarrollador cada vez. Para cuentas con más de un par de eventos de conversión, GTM ahorra tiempo real.",
        aEn: "It's not mandatory, but it makes adding and modifying tracking without depending on a developer every time much easier. For accounts with more than a couple of conversion events, GTM saves real time.",
      },
      {
        q: "¿Cómo sé si mi seguimiento de conversiones está roto?",
        qEn: "How do I know if my conversion tracking is broken?",
        a: "Compara el número de conversiones reportadas contra las ventas o leads reales que sabes que recibiste en el mismo periodo. Una diferencia grande en cualquier dirección es la señal más clara de que algo está mal.",
        aEn: "Compare the number of reported conversions against the actual sales or leads you know you received in the same period — a large gap in either direction is the clearest sign something is wrong.",
      },
      {
        q: "¿Cada cuánto debo revisar que el seguimiento siga funcionando?",
        qEn: "How often should I check that tracking is still working?",
        a: "Después de cualquier cambio al sitio web, siempre. Como rutina general, una revisión mensual detecta la mayoría de los problemas antes de que distorsionen semanas de optimización de campaña.",
        aEn: "After any website change, always. As a general routine, a monthly check catches most problems before they distort weeks of campaign optimization.",
      },
      {
        q: "¿Las llamadas telefónicas realmente se pueden rastrear con precisión?",
        qEn: "Can phone calls actually be tracked accurately?",
        a: "Sí, con inserción dinámica de número y una herramienta de seguimiento de llamadas: se puede saber exactamente qué campaña y palabra clave generó cada llamada, con el mismo nivel de detalle que un formulario web.",
        aEn: "Yes, with dynamic number insertion and a call tracking tool — you can know exactly which campaign and keyword generated each call, with the same level of detail as a web form.",
      },
      {
        q: "¿Vale la pena pagar por una auditoría de tracking si sospecho que algo está mal?",
        qEn: "Is it worth paying for a tracking audit if I suspect something is wrong?",
        a: "Casi siempre sí: encontrar y corregir seguimiento roto suele pagarse solo de inmediato, porque cada semana que el algoritmo optimiza con datos incorrectos es presupuesto gastado persiguiendo el objetivo equivocado.",
        aEn: "Almost always yes — finding and fixing broken tracking usually pays for itself immediately, because every week the algorithm optimizes on incorrect data is budget spent chasing the wrong target.",
      },
    ],
    schema: {
      keywords: [
        "GA4 conversion tracking",
        "Google Tag Manager setup",
        "measure Google Ads conversions",
      ],
      keywordsEs: [
        "seguimiento de conversiones GA4",
        "configurar Google Tag Manager",
        "medir conversiones Google Ads",
      ],
    },
  },
  {
    slug: "cuanto-invertir-en-marketing-digital",
    title: "How Much Should a Small Business Invest in Digital Marketing?",
    titleEs: "¿Cuánto Debe Invertir una Pyme en Marketing Digital?",
    category: "Marketing Strategy",
    categoryEs: "Estrategia de Marketing",
    excerpt:
      "Real 2026 digital marketing budget ranges by business size in Mexico — from a solo operation to an established mid-size company.",
    excerptEs:
      "Rangos reales de presupuesto de marketing digital 2026 por tamaño de negocio en México — desde una operación individual hasta una empresa mediana establecida.",
    readingTime: 8,
    date: "2026-08-22",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "As a 2026 market range, a small business in Mexico should plan for roughly 7% to 12% of revenue on digital marketing if actively growing, or $10,000 to $60,000 MXN monthly depending on size — micro-businesses at the low end, established mid-size companies at the high end. Businesses spending far below this range typically plateau; those spending far above it without a clear system usually have a conversion problem, not a budget problem.",
    ledeEs:
      "Como rango de mercado 2026, un negocio pequeño en México debe planear entre 7% y 12% de sus ingresos en marketing digital si está en crecimiento activo, o entre $10,000 y $60,000 MXN mensuales según el tamaño: micronegocios en el rango bajo, empresas medianas establecidas en el rango alto. Los negocios que gastan muy por debajo de este rango suelen estancarse; los que gastan muy por encima sin un sistema claro suelen tener un problema de conversión, no de presupuesto.",
    gradient: "from-neutral-800 to-zinc-950",
    sections: [
      {
        id: "rangos-por-tamano",
        heading: "Budget ranges by business size",
        headingEs: "Rangos de presupuesto por tamaño de negocio",
        body: [
          "As typical 2026 market ranges for Mexico:",
          "Solo operator or micro-business: $10,000–$18,000 MXN/month.",
          "Small business (a handful of employees, one location): $18,000–$35,000 MXN/month.",
          "Established small-to-medium business (multiple locations or a national footprint): $35,000–$60,000 MXN/month.",
          "Larger, competitive categories or aggressive growth targets: $60,000 MXN/month and up.",
        ],
        bodyEs: [
          "Como rangos de mercado típicos 2026 para México:",
          "Operador individual o micronegocio: $10,000–$18,000 MXN/mes.",
          "Negocio pequeño (un puñado de empleados, una ubicación): $18,000–$35,000 MXN/mes.",
          "Pyme establecida (varias ubicaciones o presencia nacional): $35,000–$60,000 MXN/mes.",
          "Categorías más grandes y competidas o metas de crecimiento agresivas: $60,000 MXN/mes en adelante.",
        ],
      },
      {
        id: "porcentaje-de-ingresos",
        heading: "Why percentage of revenue is a better anchor than a flat number",
        headingEs: "Por qué el porcentaje de ingresos es un mejor ancla que un número fijo",
        body: [
          "A flat peso amount doesn't scale with the business, but a percentage does — 7% to 12% of revenue is a commonly cited range for businesses actively trying to grow, versus 3% to 6% for businesses mainly trying to maintain their current position. New businesses or those launching in a new market often need to spend at the higher end temporarily to build initial traction.",
        ],
        bodyEs: [
          "Un monto fijo en pesos no escala con el negocio, pero un porcentaje sí: 7% a 12% de los ingresos es un rango comúnmente citado para negocios que buscan crecer activamente, contra 3% a 6% para negocios que principalmente buscan mantener su posición actual. Los negocios nuevos o los que lanzan en un mercado nuevo suelen necesitar gastar en el rango alto temporalmente para construir tracción inicial.",
        ],
      },
      {
        id: "como-repartirlo",
        heading: "How to split the budget across channels",
        headingEs: "Cómo repartir el presupuesto entre canales",
        body: [
          "There's no universal split, but a common starting point for a small business is roughly 40% paid ads (Google and Meta combined), 30% SEO and content, 20% website and conversion infrastructure, and 10% held in reserve for testing new channels. This shifts significantly by industry — a real estate developer weighs differently than a local restaurant.",
        ],
        bodyEs: [
          "No existe un reparto universal, pero un punto de partida común para un negocio pequeño es aproximadamente 40% anuncios pagados (Google y Meta combinados), 30% SEO y contenido, 20% sitio web e infraestructura de conversión, y 10% en reserva para probar canales nuevos. Esto cambia significativamente por industria: una desarrolladora inmobiliaria pesa distinto que un restaurante local.",
        ],
      },
      {
        id: "senales-de-subinversion",
        heading: "Signs you're underinvesting",
        headingEs: "Señales de que estás subinvirtiendo",
        body: [
          "Flat or declining traffic despite a growing market, relying almost entirely on referrals with no scalable acquisition channel, and a website that hasn't been touched in years are all signs the budget is too low to support real growth, regardless of how good the product or service is.",
        ],
        bodyEs: [
          "Tráfico plano o en declive a pesar de un mercado en crecimiento, depender casi por completo de referidos sin un canal de adquisición escalable, y un sitio web que no se ha tocado en años son señales de que el presupuesto es demasiado bajo para sostener un crecimiento real, sin importar qué tan bueno sea el producto o servicio.",
        ],
      },
      {
        id: "senales-de-mala-asignacion",
        heading: "Signs the problem isn't budget, it's allocation",
        headingEs: "Señales de que el problema no es presupuesto, es asignación",
        body: [
          'A business spending at or above the recommended range but still not growing usually has a conversion or follow-up problem, not a spend problem — more traffic to a broken landing page or a slow response process just wastes more money faster. Before increasing budget, it\'s worth auditing where the current spend is actually going. See "agency, freelancer or in-house team" for who should be managing that allocation.',
        ],
        bodyEs: [
          'Un negocio que gasta en el rango recomendado o por encima pero sigue sin crecer generalmente tiene un problema de conversión o seguimiento, no de gasto. Más tráfico a una landing page rota o un proceso de respuesta lento solo desperdicia más dinero más rápido. Antes de subir el presupuesto, vale la pena auditar a dónde realmente se está yendo el gasto actual. Revisa "¿agencia, freelancer o equipo interno?" para saber quién debería gestionar esa asignación.',
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué porcentaje de ingresos debo destinar a marketing digital?",
        qEn: "What percentage of revenue should I allocate to digital marketing?",
        a: "Como rango de mercado, entre 7% y 12% para negocios en crecimiento activo, y entre 3% y 6% para negocios enfocados en mantener su posición actual. Negocios nuevos suelen necesitar temporalmente el extremo alto de ese rango.",
        aEn: "As a market range, between 7% and 12% for actively growing businesses, and between 3% and 6% for businesses focused on maintaining their current position. New businesses often temporarily need the higher end of that range.",
      },
      {
        q: "¿Un negocio muy pequeño realmente necesita presupuesto de marketing?",
        qEn: "Does a very small business really need a marketing budget?",
        a: "Sí, incluso un micronegocio se beneficia de un presupuesto mínimo consistente ($10,000 a $18,000 MXN mensuales), mejor que gastos esporádicos grandes seguidos de meses sin ninguna actividad.",
        aEn: "Yes, even a micro-business benefits from a consistent minimum budget — $10,000 to $18,000 MXN per month — better than large sporadic spending followed by months of no activity at all.",
      },
      {
        q: "¿Cómo sé si estoy gastando lo suficiente?",
        qEn: "How do I know if I'm spending enough?",
        a: "Si el tráfico y los leads están estancados a pesar de un mercado que crece, y dependes casi por completo de referidos, probablemente estás por debajo del rango que tu tamaño de negocio necesita.",
        aEn: "If traffic and leads are stagnant despite a growing market, and you rely almost entirely on referrals, you're probably below the range your business size needs.",
      },
      {
        q: "¿Gastar más siempre genera más crecimiento?",
        qEn: "Does spending more always generate more growth?",
        a: "No: si el problema real es conversión o seguimiento, más presupuesto solo desperdicia dinero más rápido. Hay que confirmar que el sistema completo funcione antes de escalar el gasto.",
        aEn: "No — if the real problem is conversion or follow-up, more budget just wastes money faster. It's worth confirming the full system works before scaling spend.",
      },
      {
        q: "¿El presupuesto debe ser el mismo todos los meses?",
        qEn: "Should the budget be the same every month?",
        a: "No necesariamente: muchos negocios ajustan el gasto según estacionalidad o momentos clave de lanzamiento, mientras mantienen un piso mínimo constante para no perder continuidad en canales como SEO.",
        aEn: "Not necessarily — many businesses adjust spend based on seasonality or key launch moments, while keeping a constant minimum floor so they don't lose continuity in channels like SEO.",
      },
    ],
    schema: {
      keywords: ["digital marketing budget Mexico", "how much to spend on marketing"],
      keywordsEs: ["presupuesto marketing digital México", "cuánto invertir en marketing"],
    },
  },
  {
    slug: "landing-page-vs-pagina-web",
    title: "Landing Page vs. Website: When to Use Each One",
    titleEs: "Landing Page vs Página Web: Cuándo Usar Cada Una",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "A landing page has one job: convert one campaign's traffic into one action. A website has a different job: exist permanently and represent your whole business. Confusing the two is why some ad campaigns look expensive without converting.",
    excerptEs:
      "Una landing page tiene un solo trabajo: convertir el tráfico de una campaña en una acción concreta. Una página web tiene otro trabajo: existir de forma permanente y representar tu negocio completo. Confundir ambas es la razón por la que algunas campañas de anuncios se ven caras sin convertir.",
    readingTime: 6,
    date: "2026-08-25",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A landing page is one page built for one campaign and one conversion goal: no navigation, no distractions, sent traffic that already knows what it's there for. A website is a permanent, multi-page presence built to be found through search and represent your entire business. Most businesses eventually need both, not one instead of the other.",
    ledeEs:
      "Una landing page es una sola página para una campaña y un objetivo de conversión: sin navegación, para tráfico que ya sabe a qué llegó. Una página web es una presencia permanente con varias páginas, hecha para que te encuentren por búsqueda y representar tu negocio completo. La mayoría necesita ambas, no una en lugar de la otra.",
    sections: [
      {
        id: "que-es-una-landing-page",
        heading: "What a landing page actually is",
        headingEs: "Qué es realmente una landing page",
        body: [
          "A landing page is a single page with a single objective: turn a visitor into a lead, a sale, or a booked call. It usually drops the site's main navigation on purpose, because every link that isn't the conversion button is an exit door. It exists to receive traffic from one specific source (a Google Ads campaign, a Meta Ads campaign, an email send) and to keep that visitor focused on the one offer that brought them there. The same call to action tends to repeat several times down the page, because the only path forward that matters is the one that converts.",
        ],
        bodyEs: [
          "Una landing page es una sola página con un solo objetivo: convertir a la persona que llega en un lead, una venta o una llamada agendada. Suele quitar la navegación principal del sitio a propósito, porque cada enlace que no sea el botón de conversión es una puerta de salida. Existe para recibir tráfico de una fuente específica (una campaña de Google Ads, una de Meta Ads, un envío de correo) y mantener a esa persona enfocada en la única oferta que la trajo ahí. El mismo llamado a la acción suele repetirse varias veces a lo largo de la página, porque el único camino que importa es el que convierte.",
        ],
      },
      {
        id: "que-es-una-pagina-web",
        heading: "What a professional website actually is",
        headingEs: "Qué es realmente una página web profesional",
        body: [
          "A website is a permanent, multi-page structure: home, services, about, contact, and usually more. It's built to be found by people who weren't specifically sent there, through a Google search, a business card, word of mouth. Its job isn't to close one specific offer. It's to represent the entire business, answer the objections a stranger has before trusting you, and rank for the searches people run when they're looking for what you do, not just when they clicked one ad. That last part compounds over time. Content published today keeps attracting search traffic months and years later, something a single campaign page was never built to do.",
        ],
        bodyEs: [
          "Una página web es una estructura permanente con varias páginas: inicio, servicios, nosotros, contacto, y normalmente más. Está hecha para que la encuentren personas que no llegaron por un enlace específico, sino por una búsqueda en Google, una tarjeta de presentación o una recomendación de boca en boca. Su trabajo no es cerrar una sola oferta. Es representar el negocio completo, resolver las objeciones que tiene un desconocido antes de confiar en ti, y posicionar para las búsquedas que la gente hace cuando busca lo que ofreces, no solo cuando dio clic en un anuncio. Esa última parte se acumula con el tiempo. El contenido que publicas hoy sigue atrayendo tráfico de búsqueda meses y años después, algo para lo que una página de campaña nunca estuvo pensada.",
        ],
      },
      {
        id: "cuando-usar-landing-page",
        heading: "When a landing page is the right tool",
        headingEs: "Cuándo la landing page es la herramienta correcta",
        body: [
          "Use a landing page when you're about to run a paid campaign for one specific service, product, or offer. If you're launching Google Ads for \"kitchen remodeling quotes\" or Meta Ads for a new product line, that traffic needs to land on a page that mirrors exactly what the ad promised, with one clear next step. Sending that same traffic anywhere else forces the visitor to go looking for what you advertised, and most of them won't bother. It's also the right call for a limited-time launch or a seasonal promotion, something that has a start date, an end date, and doesn't need to exist as part of the permanent site once the campaign is over.",
        ],
        bodyEs: [
          'Usa una landing page cuando estás por correr una campaña pagada para un servicio, producto u oferta específica. Si vas a lanzar Google Ads para "cotización de remodelación de cocina" o Meta Ads para una línea de producto nueva, ese tráfico necesita llegar a una página que refleje exactamente lo que prometió el anuncio, con un solo paso siguiente claro. Mandar ese mismo tráfico a cualquier otro lado obliga a la persona a buscar lo que anunciaste, y la mayoría no se va a molestar. También es la decisión correcta para un lanzamiento de tiempo limitado o una promoción de temporada: algo con fecha de inicio, fecha de fin, y que no necesita seguir existiendo como parte del sitio permanente una vez que termina la campaña.',
        ],
      },
      {
        id: "cuando-usar-pagina-web",
        heading: "When a website is the right tool",
        headingEs: "Cuándo la página web es la herramienta correcta",
        body: [
          "Use a website when you want to be found, not just clicked on. If your goal is organic search visibility, if people research a business before calling, or if you need one place that explains everything you do, a website is the tool. It's also the right choice the moment you have more than one offer to represent. A landing page can sell one thing well. It can't be the home for a business with five services and a reputation to build. And if a potential client or partner is going to check you out before a meeting, the website is what they're looking for, not a page built for someone else's ad click.",
        ],
        bodyEs: [
          "Usa una página web cuando quieres que te encuentren, no solo que te den clic. Si tu objetivo es visibilidad en búsqueda orgánica, si la gente investiga un negocio antes de llamar, o si necesitas un solo lugar que explique todo lo que haces, la página web es la herramienta. También es la opción correcta en cuanto tienes más de una oferta que representar. Una landing page puede vender una sola cosa bien. No puede ser la casa de un negocio con cinco servicios y una reputación por construir. Y si un cliente o socio potencial va a investigarte antes de una reunión, lo que busca es la página web, no una página construida para el clic de otra persona.",
        ],
      },
      {
        id: "el-error-de-mezclarlas",
        heading: "Why mixing them up is a common, expensive mistake",
        headingEs: "Por qué mezclarlas es un error común y caro",
        body: [
          "The most common version of this mistake is running a paid campaign and sending all of that traffic to the site's homepage instead of a dedicated landing page. The visitor clicked an ad about one specific thing, lands on a page built to represent everything, and now has to search the navigation to find what was promised. That extra step is where most of the conversion leaks out, and it happens quietly: the campaign still generates clicks, the cost per click still looks normal, but the cost per actual lead climbs because fewer of those clicks turn into anything. It's not that the website is bad, it's the wrong page for that particular job.",
        ],
        bodyEs: [
          "La versión más común de este error es correr una campaña pagada y mandar todo ese tráfico a la página de inicio del sitio en vez de a una landing page dedicada. La persona dio clic en un anuncio sobre algo específico, llega a una página construida para representar todo, y ahora tiene que buscar en la navegación lo que se le prometió. Ese paso extra es donde se pierde la mayor parte de la conversión, y pasa de forma silenciosa: la campaña sigue generando clics, el costo por clic se ve normal, pero el costo por lead real sube porque menos de esos clics se convierten en algo. No es que la página web esté mal, es la página equivocada para ese trabajo específico.",
        ],
      },
      {
        id: "no-son-excluyentes",
        heading: "Why they aren't competitors, most businesses need both",
        headingEs: "Por qué no son excluyentes y la mayoría necesita ambas",
        body: [
          "Most businesses that ask this question don't actually need to choose. The website is the permanent base, the place that exists whether or not a campaign is running, that ranks in search, that a referral checks before calling. Landing pages are the campaign-specific layer on top of that base: one per offer, one per audience, built and retired as campaigns start and end. A dental clinic, for example, keeps one website that covers every service it offers, and can still run a separate landing page for a specific promotion like teeth whitening during a particular month. A single website with no landing pages wastes ad spend. A pile of landing pages with no website has nothing permanent to fall back on.",
        ],
        bodyEs: [
          "La mayoría de los negocios que se hacen esta pregunta en realidad no tienen que elegir. La página web es la base permanente, el lugar que existe corra o no una campaña, que posiciona en búsqueda, que un referido revisa antes de llamar. Las landing pages son la capa específica de campaña sobre esa base: una por oferta, una por audiencia, que se construyen y se retiran conforme las campañas empiezan y terminan. Una clínica dental, por ejemplo, mantiene una sola página web que cubre todos sus servicios, y aun así puede correr una landing page aparte para una promoción específica, como blanqueamiento dental durante un mes en particular. Un solo sitio web sin landing pages desperdicia gasto publicitario. Un montón de landing pages sin un sitio web no tiene nada permanente en qué apoyarse.",
        ],
      },
      {
        id: "diferencia-de-costo-y-tiempo",
        heading: "The real cost and time difference",
        headingEs: "La diferencia real de costo y tiempo",
        body: [
          "A standalone landing page typically falls in the same $25,000–$60,000 MXN range as a Professional-tier website, because the work is concentrated strategy, copywriting, and conversion design instead of being spread across many pages. What changes is time. A Professional site with multiple pages takes 3 to 6 weeks to build, while a single landing page usually lands on the faster end of that same window. If you need landing pages built into ongoing campaign infrastructure with CRM integration, that moves into the Lead-Gen tier, $80,000–$150,000 MXN. Domain and hosting still apply either way, typically $1,500–$6,000 MXN per year, so a landing page doesn't remove that ongoing cost, it just removes the extra pages around it.",
        ],
        bodyEs: [
          "Una landing page independiente suele caer en el mismo rango de $25,000 a $60,000 MXN que un sitio de nivel Profesional, porque el trabajo se concentra en estrategia, copywriting y diseño de conversión, en vez de repartirse entre varias páginas. Lo que cambia es el tiempo. Un sitio Profesional con varias páginas toma de 3 a 6 semanas construirlo, mientras que una sola landing page suele quedar en el extremo más rápido de esa misma ventana. Si necesitas landing pages integradas a infraestructura de campaña continua con CRM, eso ya entra al nivel de Captación, $80,000 a $150,000 MXN. Dominio y hosting aplican de cualquier forma, entre $1,500 y $6,000 MXN al año, así que una landing page no elimina ese costo continuo, solo elimina las páginas extra alrededor de ella.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Puedo usar mi página web como landing page para mis anuncios?",
        qEn: "Can I just use my website as the landing page for my ads?",
        a: "Técnicamente sí, pero casi siempre baja la conversión. Si mandas tráfico de un anuncio específico a tu página de inicio, la persona tiene que buscar lo que anunciaste en vez de verlo de inmediato, y ese paso extra es donde se pierde la mayoría de las conversiones. Una página interna del sitio bien enfocada puede funcionar si ya está construida para esa oferta, pero rara vez convierte igual que una landing page dedicada.",
        aEn: "Technically yes, but it almost always lowers conversion. If you send traffic from a specific ad to your homepage, the visitor has to go looking for what was advertised instead of seeing it immediately, and that extra step is where most conversions leak out. A tightly focused internal page can work if it's already built around that offer, but it rarely converts as well as a dedicated landing page.",
      },
      {
        q: "¿Una landing page necesita estar conectada a mi sitio web principal?",
        qEn: "Does a landing page need to be connected to my main website?",
        a: "No necesariamente. Muchas landing pages viven en su propio subdominio o URL independiente, sin navegación de regreso al sitio principal, precisamente para no distraer al visitante. Si ya tienes un sitio web, tiene sentido que la landing page comparta la identidad visual, pero funcionalmente puede operar por separado.",
        aEn: "Not necessarily. Many landing pages live on their own subdomain or standalone URL with no navigation back to the main site, specifically so nothing distracts the visitor. If you already have a website, it makes sense for the landing page to share its visual identity, but functionally it can operate on its own.",
      },
      {
        q: "¿Qué necesito primero si estoy empezando desde cero: la página web o la landing page?",
        qEn: "If I'm starting from zero, which do I need first: the website or the landing page?",
        a: "Depende de qué vas a hacer primero. Si tu plan inmediato es correr una campaña de anuncios para una oferta puntual, empieza por la landing page: es más barata, más rápida de construir, y es lo único que necesitas para esa campaña. Si tu prioridad es que te encuentren orgánicamente o necesitas representar el negocio completo desde el día uno, empieza por la página web.",
        aEn: "It depends on what you're doing first. If your immediate plan is to run an ad campaign for one specific offer, start with the landing page: it's cheaper, faster to build, and it's all you need for that campaign. If your priority is being found organically or you need to represent the full business from day one, start with the website.",
      },
      {
        q: "¿Puedo tener varias landing pages para distintas campañas al mismo tiempo?",
        qEn: "Can I have multiple landing pages for different campaigns at the same time?",
        a: "Sí, y es lo normal cuando corres más de una campaña activa. Cada oferta, cada público o cada ubicación puede tener su propia landing page enfocada en ese mensaje específico. Es más barato y más simple construir varias landing pages puntuales que tratar de que una sola página le hable a todos.",
        aEn: "Yes, and it's normal once you're running more than one active campaign. Each offer, audience, or location can have its own landing page focused on that specific message. It's cheaper and simpler to build several targeted landing pages than to try to make one page speak to everyone.",
      },
      {
        q: "¿Una landing page ayuda con SEO?",
        qEn: "Does a landing page help with SEO?",
        a: "Muy poco, y no es su trabajo. Al no tener navegación ni estar conectada a la estructura del sitio, Google normalmente no la trata como parte del posicionamiento orgánico del negocio. Si buscas resultados de SEO, esa inversión va en la página web, no en la landing page. Son herramientas para objetivos distintos.",
        aEn: "Very little, and that's not its job. Without navigation or a connection to the site's structure, Google usually doesn't treat it as part of the business's organic ranking. If you're after SEO results, that investment belongs in the website, not the landing page. They're tools for different goals.",
      },
    ],
    schema: {
      keywords: [
        "landing page vs website",
        "landing page vs webpage",
        "when to use a landing page",
        "landing page or website Mexico",
      ],
      keywordsEs: [
        "landing page vs pagina web",
        "landing page vs página web",
        "cuándo usar landing page",
        "diferencia entre landing page y página web",
      ],
    },
  },
  {
    slug: "guia-meta-ads",
    title: "Meta Ads: The Complete 2026 Guide",
    titleEs: "Meta Ads: guía completa 2026",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Everything Meta Ads actually requires to work: targeting, creative, Pixel and CAPI, budget logic, and the mistakes that quietly burn spend on Facebook and Instagram.",
    excerptEs:
      "Todo lo que Meta Ads realmente necesita para funcionar: segmentación, creativos, Pixel y CAPI, lógica de presupuesto, y los errores que queman el gasto en Facebook e Instagram sin que se note de inmediato.",
    readingTime: 8,
    date: "2026-08-27",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Meta Ads works differently from Google Ads: instead of capturing a search, it interrupts attention and creates demand. That means the creative carries more weight than the targeting, tracking has to be set up correctly from day one, and results take longer to read than a search campaign's.",
    ledeEs:
      "Meta Ads funciona distinto a Google Ads: en vez de capturar una búsqueda, interrumpe la atención y genera demanda. Eso significa que el creativo pesa más que la segmentación, el tracking hay que configurarlo bien desde el día uno, y los resultados tardan más en leerse que en una campaña de búsqueda.",
    sections: [
      {
        id: "que-es-meta-ads",
        heading: "What Meta Ads actually is",
        headingEs: "Qué es realmente Meta Ads",
        body: [
          "Meta Ads is the ad platform behind Facebook and Instagram: image, video, carousel, and Reels placements bought through the same auction and the same campaign structure (campaign, ad set, ad). It runs on interruption, not search intent, so the algorithm optimizes toward whoever the creative and the initial targeting attract, not toward a keyword someone typed.",
        ],
        bodyEs: [
          "Meta Ads es la plataforma de anuncios detrás de Facebook e Instagram: ubicaciones de imagen, video, carrusel y Reels compradas a través de la misma subasta y la misma estructura de campaña (campaña, conjunto de anuncios, anuncio). Funciona por interrupción, no por intención de búsqueda, así que el algoritmo optimiza hacia quien atraiga el creativo y la segmentación inicial, no hacia una palabra clave que alguien escribió.",
        ],
      },
      {
        id: "estructura-de-cuenta",
        heading: "Campaign structure that actually scales",
        headingEs: "Estructura de cuenta que sí escala",
        body: [
          "A campaign sets the objective (leads, sales, traffic). Ad sets define budget, audience, and placement. Ads are the actual creative. Most wasted spend comes from too many ad sets splitting a small budget into pieces too thin for the algorithm to learn from. Fewer ad sets with real budget behind each one almost always outperforms a wide, thin spread.",
        ],
        bodyEs: [
          "Una campaña define el objetivo (leads, ventas, tráfico). Los conjuntos de anuncios definen presupuesto, audiencia y ubicación. Los anuncios son el creativo en sí. La mayor parte del gasto desperdiciado viene de tener demasiados conjuntos de anuncios repartiendo un presupuesto pequeño en pedazos muy delgados para que el algoritmo aprenda. Menos conjuntos con presupuesto real detrás casi siempre le gana a un reparto amplio y delgado.",
        ],
      },
      {
        id: "creativo-primero",
        heading: "Why the creative matters more than the targeting",
        headingEs: "Por qué el creativo pesa más que la segmentación",
        body: [
          "On Meta, the same audience sees dozens of ads a day; the creative decides which ones get a second look. A strong hook in the first two seconds of a video, a clear single message per ad, and a specific call to action outperform broad targeting tricks almost every time. Agencies that talk mostly about audiences and rarely about the actual ad are usually hiding a creative problem.",
        ],
        bodyEs: [
          "En Meta, la misma audiencia ve decenas de anuncios al día; el creativo decide cuáles reciben una segunda mirada. Un gancho fuerte en los primeros dos segundos de un video, un mensaje único y claro por anuncio, y un llamado a la acción específico le ganan casi siempre a los trucos de segmentación amplia. Las agencias que hablan sobre todo de audiencias y casi nada del anuncio en sí suelen estar tapando un problema de creativo.",
        ],
      },
      {
        id: "pixel-y-capi",
        heading: "Why the Pixel and CAPI aren't optional",
        headingEs: "Por qué el Pixel y el CAPI no son opcionales",
        body: [
          "Meta's Pixel tracks conversions on your site through the browser; the Conversions API (CAPI) sends the same events server-to-server, which keeps tracking accurate even when browsers block cookies. Running Meta Ads without both means the algorithm is optimizing on incomplete data, which shows up as campaigns that look worse than they actually perform.",
        ],
        bodyEs: [
          "El Pixel de Meta rastrea conversiones en tu sitio desde el navegador; la API de Conversiones (CAPI) envía los mismos eventos servidor a servidor, lo que mantiene el rastreo preciso incluso cuando los navegadores bloquean cookies. Correr Meta Ads sin ambos significa que el algoritmo está optimizando con datos incompletos, y eso se refleja en campañas que se ven peor de lo que realmente rinden.",
        ],
      },
      {
        id: "presupuesto-y-aprendizaje",
        heading: "Budget and the learning phase",
        headingEs: "Presupuesto y la fase de aprendizaje",
        body: [
          "Each ad set needs roughly 50 conversion events in a week to exit Meta's learning phase and stabilize. Below that, costs bounce around and performance looks inconsistent even when nothing is actually wrong. That's the real reason small, split-up budgets underperform: the algorithm never gets enough signal to settle.",
        ],
        bodyEs: [
          "Cada conjunto de anuncios necesita alrededor de 50 eventos de conversión en una semana para salir de la fase de aprendizaje de Meta y estabilizarse. Por debajo de eso, los costos rebotan y el rendimiento se ve inconsistente aunque no haya nada realmente mal. Esa es la razón real por la que los presupuestos chicos y repartidos rinden poco: el algoritmo nunca recibe suficiente señal para asentarse.",
        ],
      },
      {
        id: "meta-vs-google",
        heading: "Meta Ads vs. Google Ads, in practice",
        headingEs: "Meta Ads vs Google Ads, en la práctica",
        body: [
          "Google captures demand that already exists; Meta creates it. A plumber with clear local search volume usually gets faster returns from Google. A new product line or a high-ticket visual category (real estate, hospitality) usually needs Meta first to build awareness before search demand shows up at all.",
        ],
        bodyEs: [
          "Google captura demanda que ya existe; Meta la crea. Un plomero con volumen de búsqueda local claro suele obtener retornos más rápidos con Google. Una línea de producto nueva o una categoría visual de alto valor (bienes raíces, hospitalidad) suele necesitar primero Meta para generar conocimiento, antes de que aparezca demanda de búsqueda.",
        ],
      },
      {
        id: "errores-comunes",
        heading: "The mistakes that quietly burn budget",
        headingEs: "Los errores que queman presupuesto sin que se note",
        body: [
          "The most common ones: no CAPI backup for the Pixel, ad sets split too thin to learn, creative left running until it fatigues instead of refreshed on a schedule, and campaigns optimized for traffic when the real goal is leads or sales. Each one alone raises cost per result without an obvious red flag in the dashboard.",
        ],
        bodyEs: [
          "Los más comunes: sin CAPI de respaldo para el Pixel, conjuntos de anuncios repartidos demasiado delgado para aprender, creativo que sigue corriendo hasta fatigarse en vez de refrescarse con calendario, y campañas optimizadas para tráfico cuando el objetivo real es leads o ventas. Cada uno por sí solo sube el costo por resultado sin una alerta obvia en el panel.",
        ],
      },
      {
        id: "como-medir-resultados",
        heading: "How to actually read results",
        headingEs: "Cómo leer los resultados de verdad",
        body: [
          "Cost per result inside Meta's dashboard only tells part of the story; what closes matters more than what converts on the platform. Cross-check Meta's reported conversions against GA4 and, ideally, against what actually turns into revenue in your CRM. The three numbers rarely match exactly, and the gap is where the real read comes from.",
        ],
        bodyEs: [
          "El costo por resultado dentro del panel de Meta solo cuenta parte de la historia; lo que cierra importa más que lo que convierte en la plataforma. Cruza las conversiones que reporta Meta contra GA4 y, si es posible, contra lo que realmente se vuelve ingreso en tu CRM. Los tres números casi nunca coinciden exactamente, y en esa diferencia está la lectura real.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Cuánto presupuesto mínimo necesito para Meta Ads?",
        qEn: "What's the minimum budget I need for Meta Ads?",
        a: "Para que un conjunto de anuncios salga de la fase de aprendizaje necesitas generar cerca de 50 conversiones en una semana, así que el presupuesto mínimo depende de cuánto cuesta cada conversión en tu categoría. Como referencia práctica, la mayoría de las cuentas pequeñas empiezan a estabilizarse entre $6,000 y $12,000 MXN al mes en pauta.",
        aEn: "To exit the learning phase, an ad set needs roughly 50 conversions in a week, so the minimum budget depends on how much each conversion costs in your category. As a practical reference, most small accounts start to stabilize somewhere between $6,000 and $12,000 MXN per month in media spend.",
      },
      {
        q: "¿Meta Ads funciona sin un sitio web?",
        qEn: "Does Meta Ads work without a website?",
        a: "Puedes correr campañas dirigiendo tráfico a un formulario nativo de la plataforma, y funciona para volumen de leads. Pero pierdes control sobre el diseño de la conversión, el seguimiento completo con Pixel y CAPI, y la posibilidad de retargeting basado en comportamiento real en tu sitio.",
        aEn: "You can run campaigns sending traffic to a native platform form, and it works for lead volume. But you lose control over the conversion design, full Pixel and CAPI tracking, and the ability to retarget based on actual behavior on your site.",
      },
      {
        q: "¿Cada cuánto debo cambiar los creativos?",
        qEn: "How often should I change my creatives?",
        a: "Cuando la frecuencia (veces que la misma persona ve el anuncio) sube y el costo por resultado empieza a subir con ella, es señal de fatiga creativa. En la mayoría de las cuentas eso ocurre entre 2 y 4 semanas, dependiendo del tamaño de la audiencia.",
        aEn: "When frequency (how many times the same person sees the ad) climbs and cost per result climbs with it, that's creative fatigue. In most accounts that happens somewhere between 2 and 4 weeks, depending on audience size.",
      },
      {
        q: "¿Necesito un video profesional o sirve contenido grabado con celular?",
        qEn: "Do I need professional video, or is phone-shot content enough?",
        a: "Depende del objetivo. Para awareness y alcance, contenido nativo y menos producido suele rendir bien porque se siente parte del feed. Para categorías de ticket alto (inmobiliarias, clínicas) donde la percepción de calidad importa, un video con mejor producción sí mueve la aguja.",
        aEn: "It depends on the goal. For awareness and reach, native, less-produced content often performs well because it feels like part of the feed. For high-ticket categories (real estate, clinics) where quality perception matters, better-produced video does move the needle.",
      },
      {
        q: "¿Cómo sé si mi problema es de presupuesto o de creativo?",
        qEn: "How do I know if my problem is budget or creative?",
        a: "Si el costo por clic es razonable pero nadie convierte después de llegar a la página, el problema casi siempre es de landing page o de oferta, no de Meta Ads. Si el costo por clic ya es alto desde el inicio, el problema suele ser el creativo o la segmentación.",
        aEn: "If cost per click is reasonable but nobody converts once they land on the page, the problem is almost always the landing page or the offer, not Meta Ads. If cost per click is already high from the start, the problem is usually the creative or the targeting.",
      },
      {
        q: "¿Vale la pena correr Meta Ads y Google Ads al mismo tiempo?",
        qEn: "Is it worth running Meta Ads and Google Ads at the same time?",
        a: "La mayoría de los negocios termina necesitando ambos, pero rara vez al mismo tiempo desde el día uno. Un orden común: probar la oferta en la plataforma con señales de intención más claras primero, y sumar la segunda una vez que los números del primer canal ya se conocen.",
        aEn: "Most businesses end up needing both, but rarely at the same time from day one. A common sequence: prove the offer on the platform with clearer intent signals first, then add the second channel once the first one's numbers are already known.",
      },
    ],
    schema: {
      keywords: [
        "Meta Ads guide",
        "Facebook Ads guide",
        "Instagram Ads",
        "Meta Pixel CAPI",
        "Meta Ads strategy",
      ],
      keywordsEs: [
        "guía meta ads",
        "guía facebook ads",
        "publicidad instagram",
        "pixel meta capi",
        "estrategia meta ads",
      ],
    },
  },
  {
    slug: "facebook-ads-o-instagram-ads",
    title: "Facebook Ads or Instagram Ads? Where Your Customer Actually Is",
    titleEs: "¿Facebook Ads o Instagram Ads? Dónde está tu cliente",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Facebook and Instagram share the same ad platform, but they don't share the same audience or the same content style. Here's how to decide where to put your budget first.",
    excerptEs:
      "Facebook e Instagram comparten la misma plataforma de anuncios, pero no comparten la misma audiencia ni el mismo estilo de contenido. Así se decide dónde poner primero el presupuesto.",
    readingTime: 5,
    date: "2026-08-29",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Facebook and Instagram run on the same Meta Ads platform, so the question isn't really which platform, it's which placement fits your audience and your creative. Instagram skews younger and more visual; Facebook still reaches an older, broader audience with real purchasing power in many categories.",
    ledeEs:
      "Facebook e Instagram corren sobre la misma plataforma de Meta Ads, así que la pregunta no es realmente qué plataforma, sino qué ubicación le queda mejor a tu audiencia y a tu creativo. Instagram tiende a un público más joven y visual; Facebook todavía llega a una audiencia mayor y más amplia con poder de compra real en muchas categorías.",
    sections: [
      {
        id: "misma-plataforma",
        heading: "They're the same campaign, different placements",
        headingEs: "Son la misma campaña, distintas ubicaciones",
        body: [
          "When you set up a Meta Ads campaign, Facebook and Instagram are placement options inside the same ad set, not separate platforms with separate setups. You can run both together, or select just one, using the exact same creative, budget, and tracking.",
        ],
        bodyEs: [
          "Cuando configuras una campaña de Meta Ads, Facebook e Instagram son opciones de ubicación dentro del mismo conjunto de anuncios, no plataformas separadas con configuraciones distintas. Puedes correr ambas juntas, o elegir solo una, usando el mismo creativo, presupuesto y rastreo.",
        ],
      },
      {
        id: "quien-esta-en-cada-una",
        heading: "Who's actually on each one",
        headingEs: "Quién está realmente en cada una",
        body: [
          "Instagram tends to skew younger, more visual, and more engaged with Stories and Reels. Facebook still holds a broader, often older audience, including decision-makers in B2B and service categories who spend real time in Facebook Groups and Marketplace. Neither is objectively better, they just reach different slices of the same market.",
        ],
        bodyEs: [
          "Instagram tiende a un público más joven, visual y activo en Stories y Reels. Facebook todavía tiene una audiencia más amplia, muchas veces mayor, incluyendo tomadores de decisión en categorías B2B y de servicios que pasan tiempo real en Grupos y Marketplace de Facebook. Ninguna es objetivamente mejor, solo llegan a distintas partes del mismo mercado.",
        ],
      },
      {
        id: "tipo-de-negocio",
        heading: "Which fits which kind of business",
        headingEs: "Cuál le queda a qué tipo de negocio",
        body: [
          "Visual, lifestyle-driven categories (restaurants, boutiques, real estate, beauty) usually get more traction on Instagram. Service businesses, local businesses with a broader-age customer base, and anything selling through community trust often perform better weighted toward Facebook.",
        ],
        bodyEs: [
          "Categorías visuales y de estilo de vida (restaurantes, boutiques, bienes raíces, belleza) suelen tener más tracción en Instagram. Los negocios de servicios, negocios locales con clientela de edad más amplia, y cualquier cosa que se venda a través de confianza comunitaria suelen rendir mejor con más peso en Facebook.",
        ],
      },
      {
        id: "el-creativo-cambia",
        heading: "The creative usually needs to change too",
        headingEs: "El creativo casi siempre tiene que cambiar también",
        body: [
          "A vertical, fast-paced Reel built for Instagram often looks out of place as a Facebook feed ad, and a longer, more explanatory Facebook video can feel slow on Instagram. Running one identical creative across both placements without adjusting format is a common reason results look mixed.",
        ],
        bodyEs: [
          "Un Reel vertical y de ritmo rápido pensado para Instagram muchas veces se ve fuera de lugar como anuncio de Facebook, y un video más largo y explicativo de Facebook se siente lento en Instagram. Correr un solo creativo idéntico en ambas ubicaciones sin ajustar el formato es una razón común de que los resultados se vean mixtos.",
        ],
      },
      {
        id: "como-decidir",
        heading: "How to actually decide",
        headingEs: "Cómo decidir en la práctica",
        body: [
          "If budget is tight, start with automatic placements and let Meta's delivery data show which platform is actually converting before manually restricting anything. Once you have two to three weeks of data, split budget toward whichever placement is producing cheaper results for your specific offer.",
        ],
        bodyEs: [
          "Si el presupuesto es ajustado, empieza con ubicaciones automáticas y deja que los datos de entrega de Meta muestren cuál plataforma realmente está convirtiendo antes de restringir algo manualmente. Con dos o tres semanas de datos, reparte el presupuesto hacia la ubicación que esté produciendo resultados más baratos para tu oferta específica.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Puedo correr la misma campaña en Facebook e Instagram al mismo tiempo?",
        qEn: "Can I run the same campaign on Facebook and Instagram at the same time?",
        a: "Sí, es la configuración por default en Meta Ads: un mismo conjunto de anuncios puede entregar en ambas plataformas a la vez. La plataforma decide automáticamente cuánto presupuesto mandar a cada una según dónde esté convirtiendo mejor, a menos que tú lo restrinjas manualmente.",
        aEn: "Yes, it's the default setup in Meta Ads: one ad set can deliver on both platforms at once. The platform automatically decides how much budget to send to each based on where it's converting better, unless you manually restrict it.",
      },
      {
        q: "¿Instagram es más caro que Facebook?",
        qEn: "Is Instagram more expensive than Facebook?",
        a: "Depende de la categoría y de qué tan competido esté el espacio publicitario en cada una en ese momento. No hay una regla fija de que una siempre sea más cara; varía por industria, temporada y calidad del creativo.",
        aEn: "It depends on the category and how competitive the ad space on each is at that moment. There's no fixed rule that one is always more expensive; it varies by industry, season, and creative quality.",
      },
      {
        q: "¿Necesito una cuenta de Instagram separada para anunciarme ahí?",
        qEn: "Do I need a separate Instagram account to advertise there?",
        a: "Sí, necesitas una cuenta de Instagram profesional conectada a tu página de Facebook y a tu Administrador de Anuncios para poder correr campañas ahí, aunque el anuncio se administre desde la misma plataforma de Meta Ads.",
        aEn: "Yes, you need a professional Instagram account connected to your Facebook page and your Ads Manager to run campaigns there, even though the ad is managed from the same Meta Ads platform.",
      },
      {
        q: "¿Los Reels rinden mejor que los posts normales?",
        qEn: "Do Reels perform better than regular posts?",
        a: "En la mayoría de las cuentas sí, porque Meta está priorizando activamente el formato de video corto en ambas plataformas. Pero un Reel mal hecho rinde peor que una foto bien pensada; el formato no sustituye un buen creativo.",
        aEn: "In most accounts, yes, because Meta is actively prioritizing short-form video on both platforms right now. But a poorly made Reel underperforms a well-thought-out photo; the format doesn't replace a good creative.",
      },
    ],
    schema: {
      keywords: ["Facebook Ads vs Instagram Ads", "Instagram advertising", "Meta Ads placements"],
      keywordsEs: [
        "facebook ads o instagram ads",
        "publicidad en instagram",
        "ubicaciones meta ads",
      ],
    },
  },
  {
    slug: "que-es-el-pixel-de-meta",
    title: "Pixel and CAPI: Why Your Campaigns Measure Poorly Without Them",
    titleEs: "Pixel y CAPI: por qué tus campañas miden mal sin ellos",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "The Meta Pixel and the Conversions API aren't optional extras, they're what tells the algorithm who actually converted. Here's what each one does and why you need both.",
    excerptEs:
      "El Pixel de Meta y la API de Conversiones no son extras opcionales, son lo que le dice al algoritmo quién realmente convirtió. Aquí está lo que hace cada uno y por qué necesitas los dos.",
    readingTime: 5,
    date: "2026-08-31",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "The Pixel tracks what happens on your site through the visitor's browser. The Conversions API (CAPI) sends the same events directly from your server. Together they give Meta's algorithm a complete, accurate picture of who converted, which is what the whole ad auction depends on.",
    ledeEs:
      "El Pixel rastrea lo que pasa en tu sitio a través del navegador de quien visita. La API de Conversiones (CAPI) manda los mismos eventos directamente desde tu servidor. Juntos le dan al algoritmo de Meta una imagen completa y precisa de quién convirtió, que es de lo que depende toda la subasta de anuncios.",
    sections: [
      {
        id: "que-hace-el-pixel",
        heading: "What the Pixel actually does",
        headingEs: "Qué hace realmente el Pixel",
        body: [
          "The Pixel is a snippet of code installed on your site that reports events back to Meta: page views, add-to-cart actions, purchases, form submissions. Meta uses that data to learn who's likely to convert and to show your ads to more people who look like your past converters.",
        ],
        bodyEs: [
          "El Pixel es un fragmento de código instalado en tu sitio que reporta eventos de vuelta a Meta: vistas de página, agregar al carrito, compras, envíos de formulario. Meta usa esos datos para aprender quién es probable que convierta y para mostrar tus anuncios a más gente parecida a quienes ya convirtieron antes.",
        ],
      },
      {
        id: "por-que-falla-solo",
        heading: "Why the Pixel alone isn't enough anymore",
        headingEs: "Por qué el Pixel solo ya no basta",
        body: [
          "Browser privacy changes, ad blockers, and Safari's tracking restrictions all cut into how many events the Pixel actually captures. It doesn't fail loudly, it just quietly under-reports, which makes campaigns look like they're converting less than they really are.",
        ],
        bodyEs: [
          "Los cambios de privacidad en navegadores, los bloqueadores de anuncios y las restricciones de rastreo de Safari le quitan al Pixel una parte de los eventos que realmente captura. No falla de forma ruidosa, simplemente subreporta en silencio, lo que hace que las campañas se vean como si convirtieran menos de lo que realmente convierten.",
        ],
      },
      {
        id: "que-hace-capi",
        heading: "What CAPI adds",
        headingEs: "Qué suma el CAPI",
        body: [
          "The Conversions API sends the same conversion events from your server directly to Meta, bypassing the browser entirely. It doesn't replace the Pixel, it backs it up: when the browser misses an event, the server-side event fills the gap, which is what keeps measurement accurate.",
        ],
        bodyEs: [
          "La API de Conversiones manda los mismos eventos de conversión desde tu servidor directamente a Meta, sin pasar por el navegador. No reemplaza al Pixel, lo respalda: cuando el navegador se pierde un evento, el evento del lado del servidor llena ese hueco, y eso es lo que mantiene la medición precisa.",
        ],
      },
      {
        id: "que-significa-en-la-practica",
        heading: "What it means in practice",
        headingEs: "Qué significa en la práctica",
        body: [
          "Accounts running both typically report more conversions than Pixel-only setups, not because more people are actually converting, but because fewer real conversions go uncounted. That directly lowers your reported cost per result, and gives the algorithm better data to optimize toward.",
        ],
        bodyEs: [
          "Las cuentas que corren ambos normalmente reportan más conversiones que las que solo usan Pixel, no porque más gente esté convirtiendo en realidad, sino porque menos conversiones reales se quedan sin contar. Eso baja directamente tu costo por resultado reportado, y le da al algoritmo mejores datos para optimizar.",
        ],
      },
      {
        id: "como-se-instala",
        heading: "How it actually gets set up",
        headingEs: "Cómo se instala en la práctica",
        body: [
          "The Pixel is a code snippet added to your site's header. CAPI requires a server-side connection, either through a direct integration, a tag manager server container, or an e-commerce platform's built-in Meta integration. It's a one-time technical setup, not something that needs ongoing manual work once it's correctly configured.",
        ],
        bodyEs: [
          "El Pixel es un fragmento de código que se agrega al encabezado del sitio. El CAPI requiere una conexión del lado del servidor, ya sea con una integración directa, un contenedor de servidor de un gestor de etiquetas, o la integración nativa de Meta en una plataforma de e-commerce. Es una configuración técnica de una sola vez, no algo que necesite trabajo manual continuo una vez bien configurado.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Necesito programador para instalar el Pixel y el CAPI?",
        qEn: "Do I need a developer to install the Pixel and CAPI?",
        a: "El Pixel es relativamente simple si tu sitio usa un gestor de etiquetas como Google Tag Manager. El CAPI casi siempre requiere configuración técnica más profunda, especialmente si quieres enviar eventos de servidor con datos limpios y sin duplicados.",
        aEn: "The Pixel is relatively simple if your site uses a tag manager like Google Tag Manager. CAPI almost always requires deeper technical setup, especially if you want to send server-side events with clean, non-duplicated data.",
      },
      {
        q: "¿El Pixel funciona igual en todos los navegadores?",
        qEn: "Does the Pixel work the same across all browsers?",
        a: "No. Safari en particular limita agresivamente cuánto tiempo puede rastrear un Pixel a un visitante, y muchos usuarios de Chrome y Firefox usan extensiones que lo bloquean directamente. Esa variación es justo la razón por la que el CAPI existe.",
        aEn: "No. Safari in particular aggressively limits how long a Pixel can track a visitor, and many Chrome and Firefox users run extensions that block it outright. That variation is exactly why CAPI exists.",
      },
      {
        q: "¿Cómo sé si mi Pixel está funcionando bien?",
        qEn: "How do I know if my Pixel is working correctly?",
        a: "El Administrador de Eventos de Meta muestra en tiempo real qué eventos está recibiendo, de qué fuente (navegador o servidor), y si hay duplicados o errores de coincidencia. Es la primera revisión antes de gastar en cualquier campaña.",
        aEn: "Meta's Events Manager shows in real time what events it's receiving, from which source (browser or server), and whether there are duplicates or matching errors. It's the first check before spending on any campaign.",
      },
      {
        q: "¿El CAPI reemplaza al Pixel?",
        qEn: "Does CAPI replace the Pixel?",
        a: "No, funcionan juntos. Cuando ambos envían el mismo evento, Meta usa un sistema de deduplicación para no contarlo dos veces. La combinación es lo que da la medición más completa, no uno u otro por separado.",
        aEn: "No, they work together. When both send the same event, Meta uses a deduplication system so it doesn't get counted twice. The combination is what gives the most complete measurement, not either one alone.",
      },
    ],
    schema: {
      keywords: ["Meta Pixel", "Conversions API", "CAPI Facebook", "Meta tracking setup"],
      keywordsEs: [
        "pixel de meta",
        "api de conversiones",
        "capi facebook",
        "configuracion de rastreo meta",
      ],
    },
  },
  {
    slug: "errores-de-facebook-ads",
    title: "10 Meta Ads Mistakes Businesses Keep Making",
    titleEs: "10 errores de Meta Ads que cometen los negocios",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "The recurring, avoidable mistakes we see in Meta Ads accounts audits: from missing CAPI to creative fatigue nobody caught in time.",
    excerptEs:
      "Los errores recurrentes y evitables que encontramos en auditorías de cuentas de Meta Ads: desde CAPI ausente hasta fatiga creativa que nadie detectó a tiempo.",
    readingTime: 6,
    date: "2026-09-02",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Most wasted Meta Ads budget doesn't come from one dramatic mistake, it comes from a handful of small, quiet ones stacking up: incomplete tracking, split budgets, and creative left running long past its useful life.",
    ledeEs:
      "La mayor parte del presupuesto desperdiciado en Meta Ads no viene de un error dramático, viene de un puñado de errores chicos y silenciosos que se acumulan: rastreo incompleto, presupuesto repartido de más, y creativo que sigue corriendo mucho después de cumplir su ciclo.",
    sections: [
      {
        id: "sin-capi",
        heading: "1. No CAPI backing up the Pixel",
        headingEs: "1. Sin CAPI respaldando al Pixel",
        body: [
          "Running only the browser Pixel means losing a real share of conversion events to privacy restrictions and ad blockers. The fix is a one-time technical setup, not an ongoing cost, so there's rarely a good reason to skip it.",
        ],
        bodyEs: [
          "Correr solo el Pixel de navegador significa perder una parte real de eventos de conversión por restricciones de privacidad y bloqueadores de anuncios. La solución es una configuración técnica de una sola vez, no un costo continuo, así que rara vez hay una buena razón para saltársela.",
        ],
      },
      {
        id: "presupuesto-fragmentado",
        heading: "2. Budget split across too many ad sets",
        headingEs: "2. Presupuesto fragmentado en demasiados conjuntos",
        body: [
          "Each ad set needs enough volume to exit the learning phase. Splitting a modest budget across five or six ad sets almost guarantees none of them ever stabilizes, which shows up as inconsistent, expensive results across the board.",
        ],
        bodyEs: [
          "Cada conjunto de anuncios necesita suficiente volumen para salir de la fase de aprendizaje. Repartir un presupuesto modesto entre cinco o seis conjuntos casi garantiza que ninguno se estabilice nunca, y eso se refleja en resultados inconsistentes y caros en toda la cuenta.",
        ],
      },
      {
        id: "fatiga-creativa",
        heading: "3. Creative left running until it fatigues",
        headingEs: "3. Creativo que sigue corriendo hasta fatigarse",
        body: [
          "When the same audience sees the same ad too many times, cost per result climbs even though nothing about the offer changed. Refreshing creative on a schedule, before frequency climbs past a healthy range, keeps costs from creeping up unnoticed.",
        ],
        bodyEs: [
          "Cuando la misma audiencia ve el mismo anuncio demasiadas veces, el costo por resultado sube aunque nada de la oferta haya cambiado. Refrescar el creativo con calendario, antes de que la frecuencia suba más de la cuenta, evita que los costos se cuelen hacia arriba sin que nadie lo note.",
        ],
      },
      {
        id: "optimizar-para-trafico",
        heading: "4. Optimizing for traffic instead of the real goal",
        headingEs: "4. Optimizar para tráfico en vez del objetivo real",
        body: [
          "A traffic-optimized campaign brings clicks, but Meta's algorithm isn't looking for people likely to buy, it's looking for people likely to click. If the goal is leads or sales, the campaign objective needs to say so directly.",
        ],
        bodyEs: [
          "Una campaña optimizada para tráfico trae clics, pero el algoritmo de Meta no está buscando gente que probablemente compre, busca gente que probablemente haga clic. Si el objetivo es leads o ventas, la campaña tiene que decirlo directamente.",
        ],
      },
      {
        id: "un-solo-mensaje",
        heading: "5. One ad trying to say everything",
        headingEs: "5. Un solo anuncio tratando de decirlo todo",
        body: [
          "Ads that pack in every feature, every benefit, and every offer at once dilute the message and slow down the scroll-past decision instead of speeding it up. One clear message per ad, tested against a different single message, reads results far more clearly.",
        ],
        bodyEs: [
          "Los anuncios que meten cada característica, cada beneficio y cada oferta al mismo tiempo diluyen el mensaje y hacen más lenta la decisión de seguir viendo, en vez de acelerarla. Un solo mensaje claro por anuncio, comparado contra otro mensaje único distinto, deja leer los resultados con mucha más claridad.",
        ],
      },
      {
        id: "no-revisar-desglose",
        heading: "6. Never checking the placement breakdown",
        headingEs: "6. Nunca revisar el desglose por ubicación",
        body: [
          "Automatic placements can spend heavily on a placement that isn't actually converting for a given offer. Checking the breakdown by placement every couple of weeks catches this before it burns through real budget.",
        ],
        bodyEs: [
          "Las ubicaciones automáticas pueden gastar fuerte en una ubicación que en realidad no está convirtiendo para una oferta dada. Revisar el desglose por ubicación cada par de semanas atrapa esto antes de que queme presupuesto real.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Cuál es el error más caro de esta lista?",
        qEn: "Which mistake on this list is the most expensive?",
        a: "El más caro suele ser fragmentar el presupuesto en demasiados conjuntos de anuncios, porque afecta a toda la cuenta al mismo tiempo, no a una sola campaña. Es también el más fácil de arreglar: consolidar en menos conjuntos con más presupuesto cada uno.",
        aEn: "The most expensive one is usually splitting budget across too many ad sets, because it affects the whole account at once, not just one campaign. It's also the easiest to fix: consolidate into fewer ad sets with more budget each.",
      },
      {
        q: "¿Cómo sé si mi creativo ya se fatigó?",
        qEn: "How do I know if my creative has already fatigued?",
        a: "Revisa la frecuencia (veces que la misma persona ve el anuncio) junto con el costo por resultado. Si ambas suben al mismo tiempo sin que hayas cambiado nada más, es fatiga creativa, no un problema de la oferta.",
        aEn: "Check frequency (how many times the same person sees the ad) alongside cost per result. If both climb at the same time without you changing anything else, that's creative fatigue, not an offer problem.",
      },
      {
        q: "¿Estos errores aplican igual a cuentas chicas y grandes?",
        qEn: "Do these mistakes apply equally to small and large accounts?",
        a: "Sí, pero pegan más fuerte en cuentas chicas porque tienen menos margen para absorber el desperdicio. Una cuenta con presupuesto grande puede diluir un error en el volumen total; una cuenta chica lo siente de inmediato.",
        aEn: "Yes, but they hit harder on small accounts because there's less margin to absorb the waste. A large-budget account can dilute one mistake into the total volume; a small account feels it immediately.",
      },
      {
        q: "¿Vale la pena una auditoría si nunca he tenido una?",
        qEn: "Is an audit worth it if I've never had one?",
        a: "Especialmente si llevas más de tres meses corriendo campañas sin haber revisado tracking, estructura de cuenta y calidad de creativo. Una auditoría honesta suele encontrar suficiente desperdicio para pagarse sola con lo que corrige en la primera revisión.",
        aEn: "Especially if you've been running campaigns for more than three months without reviewing tracking, account structure, and creative quality. An honest audit usually finds enough waste to pay for itself with what it corrects in the first review.",
      },
    ],
    schema: {
      keywords: ["Meta Ads mistakes", "Facebook Ads mistakes", "Meta Ads audit"],
      keywordsEs: ["errores de facebook ads", "errores de meta ads", "auditoria meta ads"],
    },
  },
  {
    slug: "guia-video-marketing",
    title: "Video, Photography & Drone: The Complete 2026 Guide",
    titleEs: "Video, fotografía y dron: guía completa 2026",
    category: "Video & Drone",
    categoryEs: "Video y Drone",
    excerpt:
      "How professional video, photography, and drone production actually fit into a marketing strategy: what each format is for, what it costs, and when it's worth the investment.",
    excerptEs:
      "Cómo encajan realmente el video, la fotografía y el dron profesionales en una estrategia de marketing: para qué sirve cada formato, qué cuesta, y cuándo vale la pena invertir en ello.",
    readingTime: 7,
    date: "2026-09-04",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Video, photography, and drone content aren't interchangeable, each does a different job. Video builds trust and explains; photography sells the specific product or space; drone footage adds scale and context nothing else can capture from the ground.",
    ledeEs:
      "Video, fotografía y dron no son intercambiables, cada uno hace un trabajo distinto. El video genera confianza y explica; la fotografía vende el producto o espacio específico; el dron aporta escala y contexto que nada más puede capturar desde el suelo.",
    sections: [
      {
        id: "para-que-sirve-cada-formato",
        heading: "What each format is actually for",
        headingEs: "Para qué sirve realmente cada formato",
        body: [
          "Corporate video builds trust before a sale happens, it's what a prospect watches before calling. Commercial photography sells the specific thing, a product, a room, a dish. Drone footage adds scale, context, and a sense of place that ground-level content can't replicate on its own.",
        ],
        bodyEs: [
          "El video corporativo genera confianza antes de que ocurra la venta, es lo que un prospecto ve antes de llamar. La fotografía comercial vende lo específico: un producto, una habitación, un platillo. El material de dron aporta escala, contexto y sentido de lugar que el contenido a nivel de suelo no puede replicar solo.",
        ],
      },
      {
        id: "cuando-vale-la-pena",
        heading: "When it's actually worth investing",
        headingEs: "Cuándo realmente vale la pena invertir",
        body: [
          "High-ticket categories (real estate, hospitality, construction) see the clearest return, because buyers make slower decisions and need more visual proof before committing. Lower-ticket, high-frequency businesses often get more mileage from consistent photography than from occasional big video shoots.",
        ],
        bodyEs: [
          "Las categorías de ticket alto (bienes raíces, hospitalidad, construcción) tienen el retorno más claro, porque los compradores toman decisiones más lentas y necesitan más prueba visual antes de comprometerse. Los negocios de ticket bajo y alta frecuencia suelen sacarle más provecho a fotografía constante que a producciones de video grandes y ocasionales.",
        ],
      },
      {
        id: "el-dron-especificamente",
        heading: "What drone footage adds specifically",
        headingEs: "Qué aporta específicamente el dron",
        body: [
          "Aerial footage works for one campaign at a time, not a full site's worth of pages, it's built to receive traffic from a specific source and convert it. For real estate and construction, it shows scale and surroundings buyers can't get any other way. For events and hospitality, it captures a sense of place static ground photos miss entirely.",
        ],
        bodyEs: [
          "El material aéreo funciona para mostrar escala y entorno como ningún otro formato. Para bienes raíces y construcción, muestra escala y alrededores que los compradores no pueden obtener de ninguna otra forma. Para eventos y hospitalidad, captura un sentido de lugar que las fotos estáticas de piso no logran del todo.",
        ],
      },
      {
        id: "costos-reales",
        heading: "Real costs, roughly",
        headingEs: "Costos reales, a grandes rasgos",
        body: [
          "A single-location drone session runs a few thousand pesos for a few hours of work. A full corporate video production, with scripting, multiple locations, and post-production, runs considerably more and takes weeks rather than days. Photography sits somewhere in between, priced mostly by time on site and number of final images delivered.",
        ],
        bodyEs: [
          "Una sesión de dron en una sola locación cuesta unos cuantos miles de pesos por unas horas de trabajo. Una producción de video corporativo completa, con guion, varias locaciones y postproducción, cuesta considerablemente más y toma semanas en vez de días. La fotografía queda en un punto intermedio, con precio definido sobre todo por el tiempo en sitio y el número de imágenes finales entregadas.",
        ],
      },
      {
        id: "permisos-y-regulacion",
        heading: "Permits and regulation, briefly",
        headingEs: "Permisos y regulación, brevemente",
        body: [
          "Most locations in Mexico can be flown freely, but areas near airports or other restricted airspace require permit management through AFAC before the shoot. A production team that checks this before quoting, not the day of the shoot, is the difference between a smooth session and a cancelled one.",
        ],
        bodyEs: [
          "La mayoría de las ubicaciones en México se pueden volar libremente, pero las zonas cercanas a aeropuertos u otro espacio aéreo restringido requieren gestión de permiso ante AFAC antes de la sesión. Un equipo de producción que revisa esto antes de cotizar, no el día de la sesión, es la diferencia entre una sesión fluida y una cancelada.",
        ],
      },
      {
        id: "como-integrarlo-a-marketing",
        heading: "How to integrate it into the rest of your marketing",
        headingEs: "Cómo integrarlo al resto de tu marketing",
        body: [
          "Raw footage on its own doesn't sell anything, it needs to feed the channels that already carry your marketing: a landing page for a specific campaign, an ad creative, a listing, a proposal deck. Planning the shoot around where the content will actually be used gets more mileage than shooting first and figuring out placement later.",
        ],
        bodyEs: [
          "El material en bruto por sí solo no vende nada, tiene que alimentar los canales donde ya vive tu marketing: una landing page para una campaña específica, un creativo de anuncio, una ficha de propiedad, una presentación de ventas. Planear la sesión alrededor de dónde se va a usar el contenido rinde más que grabar primero y decidir el uso después.",
        ],
      },
    ],
    gradient: "from-stone-700 to-neutral-950",
    faq: [
      {
        q: "¿Necesito video, fotografía o dron, o los tres?",
        qEn: "Do I need video, photography, or drone, or all three?",
        a: "Depende de qué tan visual sea tu categoría y qué tan grande sea la decisión de compra de tu cliente. Un restaurante suele necesitar sobre todo fotografía constante; un desarrollo inmobiliario suele necesitar los tres trabajando juntos.",
        aEn: "It depends on how visual your category is and how big your customer's buying decision is. A restaurant usually needs mostly consistent photography; a real estate development usually needs all three working together.",
      },
      {
        q: "¿El dron sirve para negocios que no son inmobiliarios?",
        qEn: "Is drone footage useful for businesses outside real estate?",
        a: "Sí. Eventos, hoteles, restaurantes con terraza o ubicación destacada, y cualquier negocio donde el entorno físico sea parte de la venta se benefician del mismo tipo de contenido aéreo.",
        aEn: "Yes. Events, hotels, restaurants with a terrace or a standout location, and any business where the physical setting is part of the sale benefit from the same kind of aerial content.",
      },
      {
        q: "¿Cuánto tiempo toma una producción de video corporativo?",
        qEn: "How long does a corporate video production take?",
        a: "Desde el guion hasta la entrega final, una producción típica toma entre tres y seis semanas, dependiendo de cuántas locaciones y qué tan compleja sea la postproducción.",
        aEn: "From script to final delivery, a typical production takes three to six weeks, depending on how many locations and how complex the post-production is.",
      },
      {
        q: "¿Puedo empezar solo con dron y agregar video después?",
        qEn: "Can I start with just drone and add video later?",
        a: "Sí, no hay que construir las tres piezas al mismo tiempo. Muchos negocios empiezan con una sesión de dron puntual para una campaña específica y suman video corporativo más adelante cuando el presupuesto lo permite.",
        aEn: "Yes, you don't have to build all three pieces at once. Many businesses start with a one-off drone session for a specific campaign and add corporate video later once budget allows.",
      },
      {
        q: "¿Qué pasa si mi ubicación cae en zona restringida para dron?",
        qEn: "What happens if my location falls in a drone-restricted zone?",
        a: "Se confirma desde la cotización, antes de agendar la sesión. La mayoría de las zonas restringidas por cercanía a un aeropuerto sí se pueden volar, solo requieren gestión de permiso especial ante AFAC.",
        aEn: "It's confirmed at the quote stage, before the session is scheduled. Most zones restricted due to airport proximity can still be flown, they just require special permit management through AFAC.",
      },
    ],
    schema: {
      keywords: [
        "video marketing guide",
        "commercial photography",
        "drone video production",
        "corporate video",
      ],
      keywordsEs: [
        "guia video marketing",
        "fotografia comercial",
        "produccion video dron",
        "video corporativo",
      ],
    },
  },
  {
    slug: "cuanto-cuesta-un-video-corporativo",
    title: "How Much Does a Corporate Video Cost in Mexico? (2026 Prices)",
    titleEs: "¿Cuánto Cuesta un Video Corporativo en México? (Precios 2026)",
    category: "Video & Drone",
    categoryEs: "Video y Drone",
    excerpt:
      "Real 2026 prices: a single-location corporate video with drone starts around $2,990 MXN. Multi-location productions with script and full post run into the tens of thousands.",
    excerptEs:
      "Precios reales 2026: un video corporativo de una sola locación con dron arranca alrededor de $2,990 MXN. Producciones multi-locación con guion y postproducción completa suben a decenas de miles de pesos.",
    readingTime: 6,
    date: "2026-09-06",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A single-location corporate video with basic drone coverage runs from $2,990 MXN (up to one hour on site, one edited 30-45 second cut plus a vertical version, 10 selected aerial photos). A multi-visit production, like ongoing coverage of a construction project, runs $8,890 MXN for a 4-visit package. A fully scripted, multi-location brand documentary with a dedicated crew moves well past that, usually landing between $25,000 and $60,000 MXN depending on shoot days and post-production complexity.",
    ledeEs:
      "Un video corporativo de una sola locación con cobertura básica de dron arranca en $2,990 MXN (hasta una hora en sitio, un video editado de 30 a 45 segundos más versión vertical, 10 fotografías aéreas seleccionadas). Una producción de varias visitas, como el seguimiento continuo de una obra, cuesta $8,890 MXN por un paquete de 4 visitas. Un documental de marca guionizado y multi-locación con equipo dedicado sube bastante más de ahí, normalmente entre $25,000 y $60,000 MXN según los días de grabación y la complejidad de postproducción.",
    sections: [
      {
        id: "que-determina-el-precio",
        heading: "The four variables that actually set the price",
        headingEs: "Las cuatro variables que realmente definen el precio",
        body: [
          'Four things move the number: how many locations, how many shooting days, how much script and pre-production planning, and how much post-production work (color grading, sound design, motion graphics) the final cut needs. A single-location product video and a multi-day brand documentary both get called "corporate video," but they\'re not the same purchase, and pricing them the same way is how quotes end up feeling arbitrary.',
        ],
        bodyEs: [
          'Cuatro cosas mueven el número: cuántas locaciones, cuántos días de grabación, cuánta planeación de guion y preproducción, y cuánto trabajo de postproducción (corrección de color, diseño de sonido, motion graphics) necesita el corte final. Un video de producto de una sola locación y un documental de marca de varios días se llaman los dos "video corporativo", pero no son la misma compra, y cotizarlos igual es la razón por la que las cotizaciones a veces se sienten arbitrarias.',
        ],
      },
      {
        id: "rangos-tipicos",
        heading: "Real price tiers",
        headingEs: "Rangos reales de precio",
        body: [
          "A single-location shoot with an edited video and basic drone coverage starts at $2,990 MXN, matching our own Captura package: up to one hour on site, one 30-45 second edited video plus a vertical cut, 10 selected aerial photos, and delivery in 5 business days. An event-coverage shoot (activations, openings, weddings) with up to 4 continuous hours runs $4,990 MXN. A multi-visit project, like documenting a construction site or vineyard over time, runs $8,890 MXN for a 4-visit package with one edited clip per visit plus a final summary video.",
        ],
        bodyEs: [
          "Una grabación de una sola locación con video editado y cobertura básica de dron arranca en $2,990 MXN, el mismo precio de nuestro paquete Captura: hasta una hora en sitio, un video editado de 30 a 45 segundos más versión vertical, 10 fotografías aéreas seleccionadas, y entrega en 5 días hábiles. Una cobertura de evento (activaciones, inauguraciones, bodas) de hasta 4 horas continuas cuesta $4,990 MXN. Un proyecto de varias visitas, como documentar una obra o un viñedo con el tiempo, cuesta $8,890 MXN por un paquete de 4 visitas con un clip editado por visita más un video resumen final.",
        ],
      },
      {
        id: "que-incluye-la-cotizacion",
        heading: "What a real quote actually breaks down",
        headingEs: "Qué desglosa realmente una cotización real",
        body: [
          "A real quote itemizes pre-production (script, shot list, location scouting), production days, and post-production (edit rounds, color, sound, music licensing). If a quote is a single flat number with no breakdown, it's worth asking directly what happens if you need an extra round of edits, since that's almost always where an unclear quote turns into a surprise invoice later.",
        ],
        bodyEs: [
          "Una cotización real desglosa preproducción (guion, lista de tomas, exploración de locación), días de producción, y postproducción (rondas de edición, color, sonido, licencia de música). Si una cotización es un solo número plano sin desglose, vale la pena preguntar directamente qué pasa si necesitas una ronda extra de ediciones, porque ahí es casi siempre donde una cotización poco clara se convierte después en una factura sorpresa.",
        ],
      },
      {
        id: "costos-ocultos-reales",
        heading: "Real add-on costs, itemized",
        headingEs: "Costos adicionales reales, con cifras",
        body: [
          "Raw footage (original unedited files) typically adds $999 MXN. Advanced editing, motion graphics, ad-cut versions, or sound design starts at $3,500 MXN. Extra time on site beyond what's included runs $499 MXN per 30-minute block. An additional revision round beyond what's included in the package also runs $499 MXN. Rush delivery under 72 hours typically adds 25% on top of the package price. None of these are hidden on purpose, they're simply the line items that get left off a headline number.",
        ],
        bodyEs: [
          "El material RAW (archivos originales sin editar) normalmente suma $999 MXN. La edición avanzada, motion graphics, versiones para pauta, o diseño de sonido arranca en $3,500 MXN. El tiempo adicional en sitio, fuera del incluido, cuesta $499 MXN por bloque de 30 minutos. Una ronda de revisión adicional fuera de las incluidas en el paquete también cuesta $499 MXN. La entrega urgente en menos de 72 horas normalmente suma un 25% sobre el precio del paquete. Ninguno de estos está escondido a propósito, simplemente son las líneas que se quedan fuera de un número de encabezado.",
        ],
      },
      {
        id: "cuando-vale-la-pena-el-nivel-alto",
        heading: "When the higher tier is actually worth it",
        headingEs: "Cuándo el nivel alto realmente vale la pena",
        body: [
          "A single-location package fits a restaurant, hotel, or property that needs solid content fast. A multi-location, scripted production is worth the extra cost when the video needs to carry a specific narrative for investors, a major campaign launch, or a brand story that a single location can't tell, and where the cost of looking amateurish outweighs the price difference between tiers.",
        ],
        bodyEs: [
          "Un paquete de una sola locación le queda bien a un restaurante, hotel o propiedad que necesita contenido sólido y rápido. Una producción guionizada y multi-locación vale el costo extra cuando el video necesita cargar una narrativa específica para inversionistas, el lanzamiento de una campaña importante, o una historia de marca que una sola locación no puede contar, y donde el costo de verse amateur pesa más que la diferencia de precio entre niveles.",
        ],
      },
    ],
    gradient: "from-stone-700 to-neutral-950",
    faq: [
      {
        q: "¿Cuánto cuesta un video corporativo básico?",
        qEn: "How much does a basic corporate video cost?",
        a: "Un video de una sola locación con cobertura de dron básica arranca en $2,990 MXN, incluyendo hasta una hora en sitio, un video editado y 10 fotografías aéreas. Es nuestro paquete Captura.",
        aEn: "A single-location video with basic drone coverage starts at $2,990 MXN, including up to one hour on site, one edited video, and 10 aerial photos. That's our Captura package.",
      },
      {
        q: "¿Cuánto cuesta un video corporativo con varias locaciones?",
        qEn: "How much does a multi-location corporate video cost?",
        a: "Depende de cuántas locaciones y días de grabación, pero una producción guionizada de nivel empresarial con postproducción completa normalmente cae entre $25,000 y $60,000 MXN.",
        aEn: "It depends on how many locations and shooting days, but a scripted, enterprise-level production with full post-production typically falls between $25,000 and $60,000 MXN.",
      },
      {
        q: "¿El material RAW está incluido en el precio?",
        qEn: "Is raw footage included in the price?",
        a: "No, se cobra aparte, normalmente $999 MXN por los archivos originales sin editar. La mayoría de los paquetes solo incluye el video ya editado.",
        aEn: "No, it's billed separately, typically $999 MXN for the original unedited files. Most packages only include the already-edited video.",
      },
      {
        q: "¿Cuánto cuesta agregar una ronda de revisión extra?",
        qEn: "How much does an extra revision round cost?",
        a: "$499 MXN por ronda adicional fuera de las incluidas en el paquete. Vale la pena confirmar cuántas rondas incluye la cotización antes de empezar el proyecto.",
        aEn: "$499 MXN per additional round beyond what's included in the package. It's worth confirming how many rounds a quote includes before starting the project.",
      },
    ],
    schema: {
      keywords: ["corporate video cost Mexico", "video production pricing"],
      keywordsEs: ["cuanto cuesta un video corporativo", "precio produccion de video mexico"],
    },
  },
  {
    slug: "regulacion-de-drones-en-mexico",
    title: "Drones in Mexico: Regulation and Permits for Commercial Use",
    titleEs: "Drones en México: regulación y permisos para uso comercial",
    category: "Video & Drone",
    categoryEs: "Video y Drone",
    excerpt:
      "What commercial drone regulation in Mexico actually covers: AFAC oversight, restricted zones near airports, and how to confirm before a shoot, not on the day of it.",
    excerptEs:
      "Lo que realmente cubre la regulación de dron comercial en México: supervisión de AFAC, zonas restringidas cerca de aeropuertos, y cómo confirmarlo antes de la sesión, no el día de la sesión.",
    readingTime: 5,
    date: "2026-09-08",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Commercial drone use in Mexico falls under AFAC (Agencia Federal de Aviación Civil), and most locations can be flown without a special permit. The exception is airspace near airports and other officially restricted zones, which require permit management confirmed before the shoot is scheduled.",
    ledeEs:
      "El uso comercial de dron en México cae bajo la supervisión de AFAC (Agencia Federal de Aviación Civil), y la mayoría de las ubicaciones se pueden volar sin permiso especial. La excepción es el espacio aéreo cerca de aeropuertos y otras zonas oficialmente restringidas, que requieren gestión de permiso confirmada antes de agendar la sesión.",
    sections: [
      {
        id: "quien-regula",
        heading: "Who regulates drone use in Mexico",
        headingEs: "Quién regula el uso de dron en México",
        body: [
          "AFAC oversees civil aviation in Mexico, and that includes commercial drone operation. Regulations distinguish between recreational and commercial use, and commercial operators are expected to fly within the rules that apply to their specific category and location.",
        ],
        bodyEs: [
          "AFAC supervisa la aviación civil en México, y eso incluye la operación comercial de drones. La normativa distingue entre uso recreativo y comercial, y se espera que los operadores comerciales vuelen dentro de las reglas que aplican a su categoría y ubicación específicas.",
        ],
      },
      {
        id: "zonas-restringidas",
        heading: "What actually makes a zone restricted",
        headingEs: "Qué hace realmente que una zona esté restringida",
        body: [
          "The most common restriction is proximity to an airport, where controlled airspace requires coordination before any flight. Other restricted areas can include certain government facilities and event airspace during specific occasions. Most commercial and residential locations fall outside these zones entirely.",
        ],
        bodyEs: [
          "La restricción más común es la cercanía a un aeropuerto, donde el espacio aéreo controlado requiere coordinación antes de cualquier vuelo. Otras áreas restringidas pueden incluir ciertas instalaciones gubernamentales y espacio aéreo de eventos en ocasiones específicas. La mayoría de las ubicaciones comerciales y residenciales quedan completamente fuera de estas zonas.",
        ],
      },
      {
        id: "como-se-confirma",
        heading: "How this actually gets checked before a shoot",
        headingEs: "Cómo se confirma esto realmente antes de una sesión",
        body: [
          "A responsible production team checks the exact coordinates of a location against known restricted airspace before quoting, not on the day of the shoot. If a location falls inside a restricted zone, permit management is handled as a separate step ahead of the session, not improvised on site.",
        ],
        bodyEs: [
          "Un equipo de producción responsable revisa las coordenadas exactas de una ubicación contra el espacio aéreo restringido conocido antes de cotizar, no el día de la sesión. Si una ubicación cae dentro de una zona restringida, la gestión del permiso se maneja como un paso aparte antes de la sesión, no se improvisa en sitio.",
        ],
      },
      {
        id: "que-pasa-si-no-se-respeta",
        heading: "What's actually at stake if this gets skipped",
        headingEs: "Qué está realmente en juego si se salta este paso",
        body: [
          "Flying in restricted airspace without the proper coordination carries real regulatory risk for whoever is operating the drone, not just an inconvenience. It's one of the reasons it's worth confirming a production team actually checks this as a standard step, rather than assuming any location is fair game.",
        ],
        bodyEs: [
          "Volar en espacio aéreo restringido sin la coordinación adecuada implica un riesgo regulatorio real para quien está operando el dron, no solo una molestia. Es una de las razones por las que vale la pena confirmar que un equipo de producción realmente revisa esto como paso estándar, en vez de asumir que cualquier ubicación es válida sin más.",
        ],
      },
    ],
    gradient: "from-stone-700 to-neutral-950",
    faq: [
      {
        q: "¿Necesito permiso para grabar con dron en mi negocio?",
        qEn: "Do I need a permit to shoot drone footage at my business?",
        a: "En la mayoría de los casos no, si tu ubicación está fuera de zonas restringidas por cercanía a un aeropuerto u otra área controlada. Un equipo de producción serio confirma esto desde la cotización revisando la ubicación exacta.",
        aEn: "In most cases, no, if your location is outside zones restricted by airport proximity or another controlled area. A serious production team confirms this at the quote stage by checking the exact location.",
      },
      {
        q: "¿Cómo sé si mi ubicación está en zona restringida?",
        qEn: "How do I know if my location is in a restricted zone?",
        a: "Se revisa contra el espacio aéreo controlado conocido por AFAC antes de agendar la sesión. Es responsabilidad del equipo de producción hacer esta verificación, no algo que tengas que investigar tú mismo.",
        aEn: "It's checked against airspace known to be controlled by AFAC before the session is scheduled. It's the production team's responsibility to run this check, not something you need to research yourself.",
      },
      {
        q: "¿Cuánto tiempo toma tramitar un permiso si mi ubicación lo requiere?",
        qEn: "How long does it take to get a permit if my location requires one?",
        a: "Varía según la zona y la complejidad del trámite. Por eso conviene verificar la ubicación desde el primer contacto, para que el permiso, si aplica, no retrase la fecha de la sesión.",
        aEn: "It varies depending on the zone and how complex the process is. That's why it's worth checking the location from the first contact, so the permit, if it applies, doesn't delay the shoot date.",
      },
      {
        q: "¿La regulación es la misma para uso recreativo y comercial?",
        qEn: "Is the regulation the same for recreational and commercial use?",
        a: "No. El uso comercial está sujeto a supervisión más específica por parte de AFAC. Cualquier operador que ofrezca servicios de dron para negocios debería operar dentro de esa categoría, no bajo reglas recreativas.",
        aEn: "No. Commercial use is subject to more specific oversight from AFAC. Any operator offering drone services for businesses should be operating within that category, not under recreational rules.",
      },
    ],
    schema: {
      keywords: ["drone regulations Mexico", "AFAC drone permits", "commercial drone Mexico"],
      keywordsEs: ["regulacion de drones en mexico", "permisos afac dron", "dron comercial mexico"],
    },
  },
  {
    slug: "presupuesto-para-google-ads",
    title: "How to Set Your Google Ads Budget",
    titleEs: "Cómo definir tu presupuesto de Google Ads",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "A practical way to size a Google Ads budget: working backward from your close rate and average sale, not from a round number that feels safe.",
    excerptEs:
      "Una forma práctica de dimensionar un presupuesto de Google Ads: partiendo de tu tasa de cierre y venta promedio, no de un número redondo que se siente seguro.",
    readingTime: 5,
    date: "2026-09-10",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "The right Google Ads budget isn't a round number picked because it feels affordable, it's worked out backward from how much a customer is worth, what share of leads actually close, and how much competition drives up your cost per click.",
    ledeEs:
      "El presupuesto correcto de Google Ads no es un número redondo que se elige porque se siente accesible, se calcula al revés: cuánto vale un cliente, qué porcentaje de leads realmente cierra, y qué tanto la competencia sube tu costo por clic.",
    sections: [
      {
        id: "empieza-por-el-cierre",
        heading: "Start from your close rate, not your budget comfort",
        headingEs: "Empieza por tu tasa de cierre, no por lo que se siente cómodo gastar",
        body: [
          "If one in five leads becomes a customer and a customer is worth a known amount, that math tells you what you can afford to pay per lead and still profit. Working forward from a round monthly number skips this step entirely and often either overspends or underfunds the campaign.",
        ],
        bodyEs: [
          "Si uno de cada cinco leads se vuelve cliente y un cliente vale un monto conocido, esa cuenta te dice cuánto puedes pagar por lead y aun así ser rentable. Trabajar hacia adelante desde un número mensual redondo se salta este paso por completo y muchas veces gasta de más o financia de menos la campaña.",
        ],
      },
      {
        id: "el-cpc-de-tu-categoria",
        heading: "Your category's cost per click sets the floor",
        headingEs: "El costo por clic de tu categoría marca el piso",
        body: [
          "Competitive categories (legal, finance, real estate) carry a higher cost per click than low-competition local services. A budget that doesn't account for your category's actual auction dynamics either buys too few clicks to learn anything or runs out mid-month.",
        ],
        bodyEs: [
          "Las categorías competidas (legal, finanzas, bienes raíces) tienen un costo por clic más alto que servicios locales de baja competencia. Un presupuesto que no toma en cuenta la dinámica real de subasta de tu categoría, o compra muy pocos clics para aprender algo, o se acaba a media del mes.",
        ],
      },
      {
        id: "presupuesto-de-aprendizaje",
        heading: "Budget the learning phase separately",
        headingEs: "Presupuesta la fase de aprendizaje aparte",
        body: [
          "The first few weeks of a new campaign are for gathering data, not for judging final performance. Setting aside a specific budget for this period, and expecting a higher cost per result during it, avoids the common mistake of shutting a campaign down too early.",
        ],
        bodyEs: [
          "Las primeras semanas de una campaña nueva son para reunir datos, no para juzgar el rendimiento final. Apartar un presupuesto específico para este periodo, y esperar un costo por resultado más alto durante él, evita el error común de apagar una campaña demasiado pronto.",
        ],
      },
      {
        id: "como-ajustar-con-el-tiempo",
        heading: "How to adjust once real data comes in",
        headingEs: "Cómo ajustar una vez que llegan datos reales",
        body: [
          "Once a campaign has enough conversion volume to read reliably, the budget conversation shifts from guessing to scaling: increasing spend on what's already converting at an acceptable cost, and cutting what isn't, rather than adjusting the total number blindly.",
        ],
        bodyEs: [
          "Una vez que una campaña tiene suficiente volumen de conversión para leerse con confianza, la conversación de presupuesto cambia de adivinar a escalar: subir el gasto en lo que ya convierte a un costo aceptable, y cortar lo que no, en vez de ajustar el número total a ciegas.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Cuál es un presupuesto mínimo razonable para empezar?",
        qEn: "What's a reasonable minimum budget to get started?",
        a: "Depende del costo por clic de tu categoría, pero como referencia general, la mayoría de las cuentas necesita al menos unos cuantos miles de pesos mensuales para generar suficiente volumen de datos y salir de la fase de aprendizaje en un plazo razonable.",
        aEn: "It depends on your category's cost per click, but as a general reference, most accounts need at least a few thousand pesos per month to generate enough data volume and exit the learning phase within a reasonable timeframe.",
      },
      {
        q: "¿Debo bajar el presupuesto si los primeros resultados se ven caros?",
        qEn: "Should I lower the budget if the first results look expensive?",
        a: "No de inmediato. Los primeros resultados suelen verse más caros mientras el sistema aprende. Bajar el presupuesto en ese momento suele alargar el aprendizaje en vez de resolver el problema.",
        aEn: "Not immediately. Early results usually look more expensive while the system is learning. Lowering the budget at that point usually extends the learning period instead of solving the problem.",
      },
      {
        q: "¿Cómo sé cuándo es momento de subir el presupuesto?",
        qEn: "How do I know when it's time to increase the budget?",
        a: "Cuando el costo por resultado ya se estabilizó en un rango aceptable durante varias semanas seguidas. Subir presupuesto sobre una campaña que ya convierte de forma consistente suele escalar bien; subirlo sobre una que todavía no se estabiliza rara vez ayuda.",
        aEn: "When cost per result has already stabilized in an acceptable range for several weeks in a row. Increasing budget on a campaign that's already converting consistently usually scales well; increasing it on one that hasn't stabilized yet rarely helps.",
      },
      {
        q: "¿El presupuesto debe ser el mismo todos los meses?",
        qEn: "Should the budget be the same every month?",
        a: "No necesariamente. Muchos negocios ajustan el gasto según estacionalidad o momentos clave, mientras mantienen un piso mínimo constante para no perder el aprendizaje acumulado de la cuenta.",
        aEn: "Not necessarily. Many businesses adjust spend based on seasonality or key moments, while keeping a constant minimum floor so they don't lose the account's accumulated learning.",
      },
    ],
    schema: {
      keywords: ["Google Ads budget", "how much to spend on Google Ads"],
      keywordsEs: ["presupuesto para google ads", "cuanto gastar en google ads"],
    },
  },
  {
    slug: "agencia-google-ads-o-hacerlo-yo",
    title: "Agency or DIY: Who Should Run Your Google Ads",
    titleEs: "Agencia o hacerlo tú mismo: quién debería manejar tu Google Ads",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Running Google Ads yourself is possible. Whether it's the best use of your time depends less on the platform's complexity and more on what your time is worth doing something else.",
    excerptEs:
      "Manejar Google Ads tú mismo es posible. Si es el mejor uso de tu tiempo depende menos de qué tan compleja sea la plataforma y más de cuánto vale tu tiempo haciendo otra cosa.",
    readingTime: 5,
    date: "2026-09-12",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Google Ads' interface is accessible enough that anyone can launch a campaign in an afternoon. The real question isn't whether you're capable of running it, it's whether the hours it takes to run it well are better spent somewhere else in your business.",
    ledeEs:
      "La interfaz de Google Ads es lo bastante accesible como para que cualquiera lance una campaña en una tarde. La pregunta real no es si eres capaz de manejarla, es si las horas que toma manejarla bien están mejor invertidas en otra parte de tu negocio.",
    sections: [
      {
        id: "lo-que-si-puedes-hacer-solo",
        heading: "What's genuinely doable on your own",
        headingEs: "Lo que sí es genuinamente posible hacer solo",
        body: [
          "A small, simple campaign with a modest budget and one clear goal is realistic to run yourself, especially if you're willing to spend real time learning the platform. The tools are built to be usable by a beginner, and plenty of small businesses run their own account successfully.",
        ],
        bodyEs: [
          "Una campaña pequeña y simple, con un presupuesto modesto y un objetivo claro, es realista de manejar tú mismo, especialmente si estás dispuesto a invertir tiempo real en aprender la plataforma. Las herramientas están hechas para ser usables por un principiante, y muchos negocios pequeños manejan su propia cuenta con éxito.",
        ],
      },
      {
        id: "donde-se-complica",
        heading: "Where it stops being simple",
        headingEs: "Dónde deja de ser simple",
        body: [
          "Complexity shows up once you're running multiple campaign types, need to interpret conversion data correctly, or are trying to scale spend without wasting it. That's where the gap between a functioning campaign and a genuinely profitable one tends to open up, and where DIY accounts often plateau.",
        ],
        bodyEs: [
          "La complejidad aparece cuando manejas varios tipos de campaña, necesitas interpretar bien los datos de conversión, o intentas escalar el gasto sin desperdiciarlo. Ahí es donde suele abrirse la brecha entre una campaña que funciona y una que realmente es rentable, y donde las cuentas manejadas por cuenta propia suelen estancarse.",
        ],
      },
      {
        id: "el-costo-real-del-tiempo",
        heading: "The real cost isn't the agency fee, it's your time",
        headingEs: "El costo real no es la cuota de la agencia, es tu tiempo",
        body: [
          "Managing an account well takes ongoing weekly attention, not a one-time setup. For a business owner, that time comes directly out of hours that could go toward sales, operations, or product, which is often worth more than what an agency would charge to handle it.",
        ],
        bodyEs: [
          "Manejar bien una cuenta requiere atención semanal continua, no una configuración de una sola vez. Para un dueño de negocio, ese tiempo sale directamente de horas que podrían ir hacia ventas, operación o producto, lo cual muchas veces vale más que lo que cobraría una agencia por manejarla.",
        ],
      },
      {
        id: "cuando-si-conviene-una-agencia",
        heading: "When bringing in outside help actually pays off",
        headingEs: "Cuándo realmente conviene traer ayuda externa",
        body: [
          "An agency earns its cost when the account is complex enough, or the budget large enough, that expert management measurably improves results beyond what self-management would achieve, and when your own time is worth more spent elsewhere in the business.",
        ],
        bodyEs: [
          "Una agencia justifica su costo cuando la cuenta es lo bastante compleja, o el presupuesto lo bastante grande, como para que el manejo experto mejore de forma medible los resultados más allá de lo que lograría el manejo propio, y cuando tu propio tiempo vale más invertido en otra parte del negocio.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿Puedo manejar Google Ads yo mismo sin experiencia previa?",
        qEn: "Can I run Google Ads myself with no prior experience?",
        a: "Sí, para una campaña simple y de presupuesto modesto es totalmente posible, sobre todo si dedicas tiempo real a aprender la plataforma antes de lanzar.",
        aEn: "Yes, for a simple campaign with a modest budget it's entirely possible, especially if you dedicate real time to learning the platform before launching.",
      },
      {
        q: "¿Cuánto tiempo a la semana toma manejar bien una cuenta?",
        qEn: "How much time per week does it take to manage an account well?",
        a: "Varía según el tamaño de la cuenta, pero un manejo serio requiere revisión y ajuste semanal constante, no solo la configuración inicial.",
        aEn: "It varies with account size, but serious management requires consistent weekly review and adjustment, not just the initial setup.",
      },
      {
        q: "¿En qué momento debería considerar contratar una agencia?",
        qEn: "At what point should I consider hiring an agency?",
        a: "Cuando el tiempo que te toma manejar la cuenta empieza a costarte más, en oportunidad perdida en otras áreas del negocio, que lo que costaría delegarlo a un experto.",
        aEn: "When the time it takes you to manage the account starts costing you more, in lost opportunity elsewhere in the business, than it would cost to hand it to an expert.",
      },
      {
        q: "¿Una agencia garantiza mejores resultados que hacerlo yo mismo?",
        qEn: "Does an agency guarantee better results than doing it myself?",
        a: "No hay garantías en publicidad paga, pero el manejo experto reduce errores comunes y suele acelerar el tiempo hasta encontrar lo que funciona.",
        aEn: "There are no guarantees in paid advertising, but expert management reduces common mistakes and usually speeds up the time it takes to find what works.",
      },
    ],
    schema: {
      keywords: ["DIY Google Ads", "should I hire a Google Ads agency"],
      keywordsEs: ["manejar google ads yo mismo", "agencia de google ads"],
    },
  },
  {
    slug: "que-es-remarketing",
    title: "What Is Remarketing and Why It Usually Converts Better",
    titleEs: "Qué es el Remarketing y Por Qué Suele Convertir Mejor",
    category: "Paid Ads",
    categoryEs: "Publicidad",
    excerpt:
      "Remarketing targets people who already visited your site with Meta Pixel or Google Ads tags. It typically runs at a lower cost per result than cold traffic because the audience already has context.",
    excerptEs:
      "El remarketing apunta a personas que ya visitaron tu sitio usando el Pixel de Meta o las etiquetas de Google Ads. Normalmente corre a un costo por resultado más bajo que el tráfico frío porque la audiencia ya tiene contexto.",
    readingTime: 5,
    date: "2026-09-14",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Remarketing targets people who already visited your website or interacted with your business, tagged through the Meta Pixel or Google Ads' own tracking, rather than strangers seeing your brand for the first time. Because that audience already has context, it typically converts at a meaningfully higher rate than cold traffic, and often at a lower cost per result, since the platform isn't paying to introduce your brand from zero.",
    ledeEs:
      "El remarketing apunta a personas que ya visitaron tu sitio web o interactuaron con tu negocio, etiquetadas mediante el Pixel de Meta o el propio seguimiento de Google Ads, en vez de a extraños que ven tu marca por primera vez. Como esa audiencia ya tiene contexto, suele convertir a una tasa notablemente más alta que el tráfico frío, y muchas veces a un costo por resultado más bajo, porque la plataforma no está pagando por presentar tu marca desde cero.",
    sections: [
      {
        id: "como-funciona",
        heading: "How it actually works",
        headingEs: "Cómo funciona en realidad",
        body: [
          'A tracking tag, the Meta Pixel on Facebook and Instagram, or a similar tag inside Google Ads, logs visitors into an audience list the moment they land on the site. Once someone is on that list, usually within 24 to 48 hours of the visit, they can be shown ads specifically as they browse elsewhere online, reminding them of a business they already looked at instead of introducing them cold. Most platforms let you build lists as narrow as "visited this specific page but didn\'t fill out the form."',
        ],
        bodyEs: [
          'Una etiqueta de rastreo, el Pixel de Meta en Facebook e Instagram, o una etiqueta similar dentro de Google Ads, registra a los visitantes en una lista de audiencia en el momento que llegan al sitio. Una vez que alguien está en esa lista, normalmente dentro de las 24 a 48 horas después de la visita, se le pueden mostrar anuncios específicamente mientras navega en otros lugares en línea, recordándole un negocio que ya conoció en vez de presentárselo desde cero. La mayoría de las plataformas permiten construir listas tan específicas como "visitó esta página en particular pero no llenó el formulario".',
        ],
      },
      {
        id: "por-que-convierte-mejor",
        heading: "Why it converts better than cold traffic",
        headingEs: "Por qué convierte mejor que el tráfico frío",
        body: [
          "Someone who already visited your site has already decided you're relevant enough to click on once, which removes most of the trust-building work a cold ad still has to do. Remarketing campaigns commonly run at a lower cost per conversion than prospecting campaigns targeting cold audiences, because the platform's algorithm is optimizing toward people already primed to act, not toward strangers who need to be convinced from scratch.",
        ],
        bodyEs: [
          "Alguien que ya visitó tu sitio ya decidió que eras lo bastante relevante como para darle clic una vez, lo que elimina la mayor parte del trabajo de generar confianza que todavía tiene que hacer un anuncio frío. Las campañas de remarketing suelen correr a un costo por conversión más bajo que las campañas de prospección dirigidas a audiencias frías, porque el algoritmo de la plataforma está optimizando hacia gente ya predispuesta a actuar, no hacia desconocidos que hay que convencer desde cero.",
        ],
      },
      {
        id: "segmentos-comunes",
        heading: "Common ways to segment a remarketing audience",
        headingEs: "Formas comunes de segmentar una audiencia de remarketing",
        body: [
          "Not every past visitor should see the same ad. Common segments include people who viewed a specific service page but didn't convert (shown an ad addressing a likely objection), people who started a form and abandoned it (shown a reminder within a day or two, before intent fades), and past customers who might be ready to buy again (shown a different message entirely). Each deserves different messaging, and different messaging is exactly what most businesses skip, running one generic remarketing ad to everyone on the list.",
        ],
        bodyEs: [
          "No todo visitante pasado debería ver el mismo anuncio. Segmentos comunes incluyen personas que vieron una página de servicio específica pero no convirtieron (a quienes se les muestra un anuncio que atiende una objeción probable), personas que empezaron un formulario y lo abandonaron (a quienes se les muestra un recordatorio dentro de un día o dos, antes de que se enfríe la intención), y clientes pasados que podrían estar listos para comprar de nuevo (a quienes se les muestra un mensaje completamente distinto). Cada uno merece un mensaje distinto, y ese mensaje distinto es justo lo que la mayoría de los negocios se salta, corriendo un solo anuncio genérico de remarketing para toda la lista.",
        ],
      },
      {
        id: "cuando-no-usarlo",
        heading: "When remarketing isn't the right tool",
        headingEs: "Cuándo el remarketing no es la herramienta correcta",
        body: [
          "A brand-new business with little to no website traffic doesn't have an audience large enough yet to remarket to effectively, most platforms need at least a few hundred people in a list before an ad set can leave the learning phase reliably. In that case, the priority is building initial traffic and awareness first, with remarketing added once there's a real pool of past visitors to draw from, usually after the first month or two of active campaigns.",
        ],
        bodyEs: [
          "Un negocio completamente nuevo con poco o nada de tráfico en su sitio todavía no tiene una audiencia lo bastante grande como para hacer remarketing de forma efectiva, la mayoría de las plataformas necesita al menos unos cientos de personas en una lista para que un conjunto de anuncios salga de forma confiable de la fase de aprendizaje. En ese caso, la prioridad es construir tráfico y conocimiento inicial primero, y agregar remarketing una vez que exista un grupo real de visitantes pasados del cual partir, normalmente después del primer mes o dos de campañas activas.",
        ],
      },
    ],
    gradient: "from-slate-700 to-neutral-900",
    faq: [
      {
        q: "¿El remarketing es más barato que la publicidad normal?",
        qEn: "Is remarketing cheaper than regular advertising?",
        a: "Generalmente sí, en costo por resultado, porque se dirige a una audiencia que ya tiene contexto y familiaridad con tu marca, lo que suele traducirse en mejores tasas de conversión que una campaña de prospección hacia audiencias frías.",
        aEn: "Generally yes, in cost per result, because it targets an audience that already has context and familiarity with your brand, which usually translates into better conversion rates than a prospecting campaign targeting cold audiences.",
      },
      {
        q: "¿Necesito mucho tráfico en mi sitio para que el remarketing funcione?",
        qEn: "Do I need a lot of website traffic for remarketing to work?",
        a: "Necesitas una audiencia mínima, normalmente al menos unos cientos de visitantes recientes, para que la segmentación tenga sentido. Un sitio nuevo con muy poco tráfico debería enfocarse primero en generar visitas antes de invertir en remarketing.",
        aEn: "You need a minimum audience, typically at least a few hundred recent visitors, for segmentation to make sense. A new site with very little traffic should focus first on generating visits before investing in remarketing.",
      },
      {
        q: "¿El remarketing se siente invasivo para el usuario?",
        qEn: "Does remarketing feel invasive to the user?",
        a: "Puede sentirse así si se ejecuta sin límites de frecuencia o sin segmentación cuidadosa. Bien configurado, con límites razonables (por ejemplo, no más de un puñado de impresiones por semana), la mayoría de los usuarios lo percibe simplemente como un recordatorio relevante.",
        aEn: "It can feel that way if it's run without frequency limits or careful segmentation. Well configured, with reasonable limits (for example, no more than a handful of impressions per week), most users perceive it simply as a relevant reminder.",
      },
      {
        q: "¿Puedo usar remarketing junto con campañas normales de búsqueda?",
        qEn: "Can I use remarketing alongside regular search campaigns?",
        a: "Sí, de hecho suelen complementarse bien: la búsqueda captura intención activa y el remarketing recupera a quienes no convirtieron la primera vez, muchas veces a un costo por conversión menor que la campaña de búsqueda misma.",
        aEn: "Yes, in fact they usually complement each other well: search captures active intent and remarketing recovers people who didn't convert the first time, often at a lower cost per conversion than the search campaign itself.",
      },
    ],
    schema: {
      keywords: ["what is remarketing", "remarketing ads", "Meta Pixel remarketing"],
      keywordsEs: ["que es el remarketing", "anuncios de remarketing", "remarketing con pixel"],
    },
  },
  {
    slug: "guia-diseno-web",
    title: "Web Design: The Complete 2026 Guide",
    titleEs: "Diseño Web: Guía Completa 2026",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Everything a website actually needs to work as a business asset: which tier fits your stage, real timelines, what drives cost, and the mistakes that quietly cost you leads.",
    excerptEs:
      "Todo lo que una página web realmente necesita para funcionar como un activo de negocio: qué nivel te conviene, tiempos reales, qué determina el costo, y los errores que te cuestan leads sin que se note.",
    readingTime: 9,
    date: "2026-09-16",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A website is not a digital brochure, it's a system that either moves a stranger toward becoming a customer or doesn't. Most businesses buy the wrong tier for their stage, skip the strategy work that makes a site convert, and treat the launch as the finish line instead of the starting point.",
    ledeEs:
      "Una página web no es un folleto digital, es un sistema que mueve a un desconocido hacia convertirse en cliente o no lo hace. La mayoría de los negocios compra el nivel equivocado para su etapa, se salta el trabajo de estrategia que hace que un sitio convierta, y trata el lanzamiento como la meta en vez del punto de partida.",
    sections: [
      {
        id: "los-seis-niveles",
        heading: "The six tiers, and which one you actually need",
        headingEs: "Los seis niveles, y cuál necesitas en realidad",
        body: [
          "We group websites into six tiers: Presence (a digital business card), Professional (built to establish trust and answer objections), Lead-Gen (built around forms and calls-to-action), Automated (booking, quoting or scheduling built in), Commercial System (inventory, payments, client accounts), and custom SaaS (multi-tenant software). Most businesses overpay by buying tier four when tier two would do the job. The right tier depends on what the site needs to accomplish, not on what looks most impressive in a proposal.",
        ],
        bodyEs: [
          "Agrupamos los sitios web en seis niveles: Presencial (una tarjeta de presentación digital), Profesional (construido para generar confianza y resolver objeciones), Captación (construido alrededor de formularios y llamados a la acción), Automatizada (con reservas, cotizaciones o citas integradas), Sistema Comercial (inventario, pagos, cuentas de cliente) y SaaS a medida (software multiusuario). La mayoría de los negocios paga de más comprando el nivel cuatro cuando el nivel dos resolvería el problema. El nivel correcto depende de lo que el sitio necesita lograr, no de lo que se ve más impresionante en una propuesta.",
        ],
      },
      {
        id: "estrategia-antes-de-diseno",
        heading: "Strategy comes before any visual decision",
        headingEs: "La estrategia va antes de cualquier decisión visual",
        body: [
          "Before a single screen gets designed, the real questions are: who lands on this site, what do they need to believe before they act, and what's the one action the page should push them toward. Skipping this step is why so many sites look polished but convert poorly, the design solved a visual problem instead of a business one.",
        ],
        bodyEs: [
          "Antes de diseñar una sola pantalla, las preguntas reales son: quién llega a este sitio, qué necesita creer antes de actuar, y cuál es la única acción hacia la que debería empujarlo la página. Saltarse este paso es la razón por la que tantos sitios se ven pulidos pero convierten mal, el diseño resolvió un problema visual en vez de uno de negocio.",
        ],
      },
      {
        id: "copy-antes-que-diseno",
        heading: "Copy carries more weight than most businesses expect",
        headingEs: "El copy pesa más de lo que la mayoría de los negocios espera",
        body: [
          "A beautifully designed page with generic, self-focused copy still fails to convert, because visitors don't act on how a page looks, they act on whether it answers their specific doubt. Copy that speaks to a real objection (price, trust, timeline) consistently outperforms copy that just describes features, even on an identical layout.",
        ],
        bodyEs: [
          "Una página bien diseñada con copy genérico y centrado en la empresa sigue sin convertir, porque quien visita no actúa según cómo se ve la página, actúa según si responde su duda específica. El copy que habla a una objeción real (precio, confianza, tiempo) le gana consistentemente al copy que solo describe características, incluso sobre el mismo diseño.",
        ],
      },
      {
        id: "mobile-first-no-es-opcional",
        heading: "Mobile-first isn't a nice-to-have anymore",
        headingEs: "Mobile-first ya no es un extra deseable",
        body: [
          "For most local and service businesses in Mexico, mobile traffic is the majority, not the exception. Designing for desktop first and adapting down produces sites that technically work on mobile but weren't actually built for how most visitors experience them. Designing mobile-first, then expanding up, tends to produce a cleaner result at every size.",
        ],
        bodyEs: [
          "Para la mayoría de los negocios locales y de servicio en México, el tráfico móvil es la mayoría, no la excepción. Diseñar primero para escritorio y adaptar hacia abajo produce sitios que técnicamente funcionan en móvil pero que no fueron pensados para cómo la mayoría los experimenta. Diseñar primero para móvil, y expandir hacia arriba, suele dar un resultado más limpio en cualquier tamaño.",
        ],
      },
      {
        id: "velocidad-y-seo-tecnico",
        heading: "Speed and technical SEO aren't separate from design",
        headingEs: "Velocidad y SEO técnico no son algo aparte del diseño",
        body: [
          "A slow site loses visitors before they see any of the copy or design work that went into it, and search engines factor load speed into ranking. Technical foundations (clean code, optimized images, proper structure) aren't a phase that happens after design, they need to be part of the same decisions from the start.",
        ],
        bodyEs: [
          "Un sitio lento pierde visitantes antes de que vean el copy o el trabajo de diseño que se invirtió. Los buscadores también toman en cuenta la velocidad de carga para el posicionamiento. Los fundamentos técnicos (código limpio, imágenes optimizadas, estructura adecuada) no son una fase que pasa después del diseño, tienen que ser parte de las mismas decisiones desde el inicio.",
        ],
      },
      {
        id: "costo-y-tiempo-realistas",
        heading: "Realistic cost and timeline expectations",
        headingEs: "Expectativas realistas de costo y tiempo",
        body: [
          "A Presence or Professional-tier site runs $6,000 to $60,000 MXN and takes 3 to 6 weeks once content is approved. Lead-Gen or Automated tiers run $80,000 to $150,000 MXN and take 6 to 10 weeks. Custom commercial systems or SaaS start above $150,000 MXN and can take several months. The bottleneck is almost always content and client decisions, not the development itself.",
        ],
        bodyEs: [
          "Un sitio de nivel Presencial o Profesional cuesta entre $6,000 y $60,000 MXN y toma de 3 a 6 semanas desde que se aprueba el contenido. Los niveles de Captación o Automatizada van de $80,000 a $150,000 MXN y toman de 6 a 10 semanas. Los sistemas comerciales o SaaS a medida arrancan sobre los $150,000 MXN y pueden tomar varios meses. El cuello de botella casi siempre es el contenido y las decisiones del cliente, no el desarrollo en sí.",
        ],
      },
      {
        id: "el-lanzamiento-no-es-la-meta",
        heading: "Launch is the starting line, not the finish line",
        headingEs: "El lanzamiento es el punto de partida, no la meta",
        body: [
          "A site that never gets revisited after launch slowly falls behind: content ages, technology moves on, and what converted well at launch drifts as the market changes. Basic maintenance (security updates, backups, periodic content refreshes) keeps a site performing instead of quietly decaying while nobody's watching.",
        ],
        bodyEs: [
          "Un sitio que nunca se revisa después de lanzarse se va quedando atrás poco a poco: el contenido envejece, la tecnología avanza, y lo que convertía bien al lanzamiento se desactualiza conforme cambia el mercado. El mantenimiento básico (actualizaciones de seguridad, respaldos, actualizaciones periódicas de contenido) mantiene un sitio funcionando en vez de dejarlo decaer en silencio sin que nadie lo note.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Qué nivel de página web necesita mi negocio?",
        qEn: "What tier of website does my business actually need?",
        a: "Depende de lo que el sitio necesita lograr: si solo necesitas existir y dar confianza básica, un nivel Presencial o Profesional basta. Si necesitas captar y calificar leads activamente, necesitas el nivel de Captación o Automatizada en adelante.",
        aEn: "It depends on what the site needs to accomplish: if you just need to exist and provide basic trust, a Presence or Professional tier is enough. If you need to actively capture and qualify leads, you need Lead-Gen or Automated tier and up.",
      },
      {
        q: "¿Cuánto cuesta una página web profesional en México?",
        qEn: "How much does a professional website cost in Mexico?",
        a: "Un sitio de nivel Profesional va de $25,000 a $60,000 MXN. Los niveles con captación de leads e integraciones suben de $80,000 a $150,000 MXN. El detalle completo de precios por nivel está en nuestra guía de precios.",
        aEn: "A Professional-tier site runs $25,000 to $60,000 MXN. Tiers with lead capture and integrations run $80,000 to $150,000 MXN. Full pricing detail by tier is in our pricing guide.",
      },
      {
        q: "¿Cuánto tiempo toma construir un sitio web?",
        qEn: "How long does it take to build a website?",
        a: "Un sitio Presencial o Profesional toma de 3 a 6 semanas desde que se aprueba el contenido. Uno con captación e integraciones toma de 6 a 10 semanas. El contenido y las decisiones del cliente son el factor que más alarga el proceso, no el desarrollo.",
        aEn: "A Presence or Professional site takes 3 to 6 weeks once content is approved. One with lead capture and integrations takes 6 to 10 weeks. Content and client decisions are the factor that most extends the process, not development itself.",
      },
      {
        q: "¿El diseño o el copy importa más para convertir visitantes?",
        qEn: "Does design or copy matter more for converting visitors?",
        a: "Los dos importan, pero el copy suele pesar más de lo que se espera. Un diseño impecable con copy genérico sigue sin convertir, porque el visitante actúa según si el texto responde su duda específica, no según qué tan bonita se ve la página.",
        aEn: "Both matter, but copy usually carries more weight than expected. Flawless design with generic copy still fails to convert, because the visitor acts based on whether the text answers their specific doubt, not on how nice the page looks.",
      },
      {
        q: "¿Es necesario dar mantenimiento a un sitio web después de lanzarlo?",
        qEn: "Is website maintenance necessary after launch?",
        a: "Sí. Un sitio sin mantenimiento acumula riesgos de seguridad y contenido desactualizado con el tiempo. El mantenimiento básico debería presupuestarse como parte continua del sitio, no como un gasto sorpresa.",
        aEn: "Yes. A site without maintenance accumulates security risks and outdated content over time. Basic maintenance should be budgeted as an ongoing part of the site, not as a surprise expense.",
      },
      {
        q: "¿Wix o Squarespace son suficientes o necesito desarrollo a medida?",
        qEn: "Is Wix or Squarespace enough, or do I need custom development?",
        a: "Para un sitio de nivel Presencial con presupuesto ajustado, un builder puede ser suficiente. En el momento en que necesitas control real de SEO, lógica de conversión o integraciones, el desarrollo a medida se vuelve la opción más rentable a mediano plazo.",
        aEn: "For a Presence-tier site with a tight budget, a builder can be enough. The moment you need real SEO control, conversion logic, or integrations, custom development becomes the more cost-effective option in the medium term.",
      },
    ],
    schema: {
      keywords: ["web design guide", "professional website design", "website tiers pricing"],
      keywordsEs: ["guia diseno web", "diseño web profesional", "niveles de pagina web"],
    },
  },
  {
    slug: "cuanto-tarda-hacer-una-pagina-web",
    title: "How Long Does It Take to Build a Professional Website?",
    titleEs: "¿Cuánto Tarda Hacer una Página Web Profesional?",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Real timelines by tier: a Presence or Professional site takes 3 to 6 weeks, Lead-Gen or Automated tiers take 6 to 10. The real bottleneck is almost never development.",
    excerptEs:
      "Tiempos reales por nivel: un sitio Presencial o Profesional toma de 3 a 6 semanas, los niveles de Captación o Automatizada de 6 a 10. El cuello de botella real casi nunca es el desarrollo.",
    readingTime: 4,
    date: "2026-09-18",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A Presence or Professional-tier website takes 3 to 6 weeks once content is approved. A Lead-Gen or Automated site, with forms, integrations and conversion logic, takes 6 to 10 weeks. Custom commercial systems or SaaS can take several months. Development speed is rarely what determines these timelines.",
    ledeEs:
      "Un sitio de nivel Presencial o Profesional toma entre 3 y 6 semanas desde que se aprueba el contenido. Un sitio de Captación o Automatizado, con formularios, integraciones y lógica de conversión, toma de 6 a 10 semanas. Sistemas comerciales o SaaS a medida pueden tomar varios meses. La velocidad de desarrollo casi nunca es lo que determina estos tiempos.",
    sections: [
      {
        id: "tiempos-por-nivel",
        heading: "Timeline by tier",
        headingEs: "Tiempos por nivel",
        body: [
          "Presence and Professional tiers: 3 to 6 weeks. Lead-Gen and Automated tiers: 6 to 10 weeks, since they add forms, integrations and conversion logic that need testing. Commercial systems and custom SaaS: several months, because they involve custom development and often a database architecture built from scratch.",
        ],
        bodyEs: [
          "Niveles Presencial y Profesional: de 3 a 6 semanas. Niveles de Captación y Automatizada: de 6 a 10 semanas, porque suman formularios, integraciones y lógica de conversión que necesitan probarse. Sistemas comerciales y SaaS a medida: varios meses, porque implican desarrollo a la medida y muchas veces una arquitectura de base de datos construida desde cero.",
        ],
      },
      {
        id: "el-verdadero-cuello-de-botella",
        heading: "The real bottleneck: content, not code",
        headingEs: "El verdadero cuello de botella: el contenido, no el código",
        body: [
          "The clock starts once content is approved, not once the contract is signed, because most delays happen before that point: waiting on photos, copy revisions, or a final decision on messaging. A team that already has its content ready can move through a build noticeably faster than one that's writing copy as the project goes.",
        ],
        bodyEs: [
          "El reloj arranca cuando se aprueba el contenido, no cuando se firma el contrato, porque la mayoría de los retrasos pasan antes de ese punto: esperar fotos, revisiones de copy, o una decisión final sobre el mensaje. Un equipo que ya tiene su contenido listo avanza notablemente más rápido que uno que está escribiendo el copy sobre la marcha.",
        ],
      },
      {
        id: "que-acelera-el-proceso",
        heading: "What actually speeds things up",
        headingEs: "Qué acelera realmente el proceso",
        body: [
          "Having brand assets ready (logo, photos, existing copy), giving fast feedback on drafts instead of batching revisions, and having one clear decision-maker instead of a committee reviewing every screen are the three factors that most reliably shorten a timeline, more than anything on the development side.",
        ],
        bodyEs: [
          "Tener los activos de marca listos (logo, fotos, copy existente), dar retroalimentación rápida sobre los borradores en vez de acumular revisiones, y tener una sola persona que decide en vez de un comité revisando cada pantalla, son los tres factores que más confiablemente acortan un tiempo de entrega, más que cualquier cosa del lado del desarrollo.",
        ],
      },
      {
        id: "cuando-desconfiar-de-un-tiempo-prometido",
        heading: "When to be skeptical of a promised timeline",
        headingEs: "Cuándo desconfiar de un tiempo prometido",
        body: [
          "A quote promising a fully custom Lead-Gen site in a few days is either using a heavily templated base with minimal customization, or setting an expectation it won't meet. Realistic timelines account for real design, real copy, and real testing, not just filling in a pre-built shell.",
        ],
        bodyEs: [
          "Una cotización que promete un sitio de Captación totalmente a medida en unos días o está usando una base muy basada en plantilla con personalización mínima, o está creando una expectativa que no va a cumplir. Los tiempos realistas contemplan diseño real, copy real y pruebas reales, no solo llenar una plantilla ya hecha.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Puedo tener mi página web lista en una semana?",
        qEn: "Can I have my website ready in one week?",
        a: "Para un sitio muy básico de nivel Presencial con contenido ya listo, es posible en casos específicos. Para cualquier sitio con estrategia, copy real y estructura de conversión, una semana no es un tiempo realista.",
        aEn: "For a very basic Presence-tier site with content already ready, it's possible in specific cases. For any site with strategy, real copy, and conversion structure, one week isn't a realistic timeframe.",
      },
      {
        q: "¿Qué es lo que más retrasa un proyecto de página web?",
        qEn: "What most commonly delays a website project?",
        a: "Casi siempre el contenido: fotos que faltan, copy que no se aprueba, o decisiones de mensaje que se posponen. El desarrollo en sí rara vez es el factor que más alarga el proceso.",
        aEn: "It's almost always content: missing photos, copy that doesn't get approved, or messaging decisions that get postponed. Development itself is rarely the factor that most extends the process.",
      },
      {
        q: "¿El tiempo incluye SEO y copywriting o son procesos aparte?",
        qEn: "Does the timeline include SEO and copywriting, or are those separate processes?",
        a: "La estructura SEO y el copywriting van integrados dentro del tiempo de construcción, no como fases separadas después. Es parte de por qué el proceso toma semanas y no días.",
        aEn: "SEO structure and copywriting are integrated within the build timeline, not as separate phases afterward. That's part of why the process takes weeks, not days.",
      },
      {
        q: "¿Cómo puedo acortar el tiempo de entrega de mi lado?",
        qEn: "How can I shorten the delivery timeline on my end?",
        a: "Ten listos tus activos de marca desde el inicio, responde revisiones rápido en vez de acumularlas, y designa a una sola persona con autoridad para aprobar decisiones, en vez de un comité.",
        aEn: "Have your brand assets ready from the start, respond to revisions quickly instead of batching them, and designate one person with authority to approve decisions, instead of a committee.",
      },
    ],
    schema: {
      keywords: ["how long does website take", "website timeline"],
      keywordsEs: ["cuanto tarda una pagina web", "tiempo de entrega pagina web"],
    },
  },
  {
    slug: "wordpress-vs-desarrollo-a-medida",
    title: "WordPress vs. Custom Development vs. AI Builders",
    titleEs: "WordPress vs Desarrollo a Medida vs Builders con IA",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Three real paths to a website, and what each one actually trades off: WordPress's plugin ecosystem, custom development's control, and AI builders' speed.",
    excerptEs:
      "Tres caminos reales hacia una página web, y qué sacrifica cada uno en realidad: el ecosistema de plugins de WordPress, el control del desarrollo a medida, y la velocidad de los builders con IA.",
    readingTime: 6,
    date: "2026-09-20",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "WordPress, custom development, and AI-assisted builders each solve a different problem, not the same problem at different price points. Picking based on which one is trendiest, instead of which one fits the actual project, is how businesses end up migrating platforms a year later.",
    ledeEs:
      "WordPress, el desarrollo a medida y los builders asistidos por IA resuelven problemas distintos, no el mismo problema a distintos precios. Elegir según cuál está de moda, en vez de cuál encaja con el proyecto real, es la razón por la que tantos negocios terminan migrando de plataforma un año después.",
    sections: [
      {
        id: "wordpress-lo-bueno-y-lo-malo",
        heading: "WordPress: the plugin ecosystem, and its cost",
        headingEs: "WordPress: el ecosistema de plugins, y su costo",
        body: [
          "WordPress's real strength is its plugin ecosystem, almost any functionality already exists as a plugin, which makes it fast to add features without custom code. The tradeoff is that each plugin is a dependency that needs updates, can conflict with others, and adds a potential security vulnerability. A WordPress site with fifteen plugins is fifteen things that can break independently.",
        ],
        bodyEs: [
          "La verdadera fortaleza de WordPress es su ecosistema de plugins: casi cualquier funcionalidad ya existe como plugin, lo que lo hace rápido para agregar funciones sin código a medida. El costo es que cada plugin es una dependencia que necesita actualizarse, puede entrar en conflicto con otros, y suma una posible vulnerabilidad de seguridad. Un sitio de WordPress con quince plugins son quince cosas que pueden fallar de forma independiente.",
        ],
      },
      {
        id: "desarrollo-a-medida-lo-bueno-y-lo-malo",
        heading: "Custom development: full control, at a real cost",
        headingEs: "Desarrollo a medida: control total, a un costo real",
        body: [
          "Custom development means every piece of the site is built specifically for the business, with no unused features, no plugin bloat, and full control over performance and structure. It costs more upfront and takes longer than a template-based approach, but it removes the ceiling that pre-built systems eventually hit as a business grows.",
        ],
        bodyEs: [
          "El desarrollo a medida significa que cada parte del sitio se construye específicamente para el negocio, sin funciones sin usar, sin exceso de plugins, y con control total sobre rendimiento y estructura. Cuesta más de entrada y toma más tiempo que un enfoque basado en plantillas, pero elimina el techo con el que los sistemas prefabricados eventualmente chocan conforme el negocio crece.",
        ],
      },
      {
        id: "builders-con-ia-lo-nuevo",
        heading: "AI-assisted builders: real speed, with real limits",
        headingEs: "Builders con IA: velocidad real, con límites reales",
        body: [
          "Newer AI-assisted builders can generate a working site from a description in a fraction of the time either WordPress setup or fully custom development takes. That speed is genuinely useful for a first version or a Presence-tier site. It's a weaker fit once a project needs precise conversion logic, complex integrations, or design decisions that a generic AI-generated layout won't get right without significant hands-on refinement.",
        ],
        bodyEs: [
          "Los builders más nuevos asistidos por IA pueden generar un sitio funcional a partir de una descripción en una fracción del tiempo que toma tanto configurar WordPress como el desarrollo totalmente a medida. Esa velocidad es genuinamente útil para una primera versión o un sitio de nivel Presencial. Es un ajuste más débil en el momento en que un proyecto necesita lógica de conversión precisa, integraciones complejas, o decisiones de diseño que un layout genérico generado por IA no va a acertar sin un refinamiento manual importante.",
        ],
      },
      {
        id: "como-lo-usamos-en-aphelion",
        heading: "Where this fits into how we actually build",
        headingEs: "Dónde encaja esto en cómo construimos en realidad",
        body: [
          "In practice, the fastest path to a genuinely custom result combines both worlds: AI-assisted tooling accelerates the mechanical parts of building a site, while the strategy, copy, and conversion decisions stay entirely human. That combination produces something faster than pure custom development from scratch, without the generic feel of an unedited AI-generated site.",
        ],
        bodyEs: [
          "En la práctica, el camino más rápido hacia un resultado genuinamente a medida combina ambos mundos: las herramientas asistidas por IA aceleran las partes mecánicas de construir un sitio, mientras que la estrategia, el copy y las decisiones de conversión se quedan completamente en manos humanas. Esa combinación produce algo más rápido que el desarrollo a medida puro desde cero, sin el aire genérico de un sitio generado por IA sin editar.",
        ],
      },
      {
        id: "como-decidir",
        heading: "How to actually decide between the three",
        headingEs: "Cómo decidir realmente entre los tres",
        body: [
          "If the site needs to launch fast with a tight budget and modest ambitions, an AI-assisted or template approach fits. If the business already knows it needs specific integrations and plans to scale the site over years, custom development is worth the extra time and cost. WordPress sits in between: useful when the plugin ecosystem covers most of what's needed and the ongoing maintenance tradeoff is acceptable.",
        ],
        bodyEs: [
          "Si el sitio necesita lanzarse rápido con presupuesto ajustado y ambiciones modestas, un enfoque asistido por IA o basado en plantilla encaja. Si el negocio ya sabe que necesita integraciones específicas y planea escalar el sitio durante años, el desarrollo a medida vale el tiempo y costo extra. WordPress queda en medio: útil cuando el ecosistema de plugins cubre la mayor parte de lo necesario y el costo de mantenimiento continuo es aceptable.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿WordPress es mala opción para un negocio serio?",
        qEn: "Is WordPress a bad choice for a serious business?",
        a: "No necesariamente. Es una opción sólida cuando el ecosistema de plugins cubre lo que el negocio necesita y hay disposición a mantenerlo actualizado. El riesgo aparece cuando se acumulan demasiados plugins sin mantenimiento.",
        aEn: "Not necessarily. It's a solid option when the plugin ecosystem covers what the business needs and there's willingness to keep it updated. The risk shows up when too many plugins pile up without maintenance.",
      },
      {
        q: "¿Los builders con IA producen sitios de baja calidad?",
        qEn: "Do AI builders produce low-quality sites?",
        a: "No inherentemente, pero suelen necesitar refinamiento humano para no verse genéricos. Son más fuertes para velocidad inicial que para el resultado final sin edición.",
        aEn: "Not inherently, but they usually need human refinement to avoid looking generic. They're stronger for initial speed than for the final result without editing.",
      },
      {
        q: "¿El desarrollo a medida siempre vale la pena?",
        qEn: "Is custom development always worth it?",
        a: "Vale la pena cuando el negocio ya sabe que va a escalar el sitio con integraciones y funciones específicas. Para un sitio simple de presencia, puede ser más inversión de la que el proyecto necesita.",
        aEn: "It's worth it when the business already knows it's going to scale the site with specific integrations and features. For a simple presence site, it can be more investment than the project needs.",
      },
      {
        q: "¿Se puede migrar de WordPress a desarrollo a medida después?",
        qEn: "Can you migrate from WordPress to custom development later?",
        a: "Sí, es una migración común, pero implica reconstruir gran parte del sitio desde cero. Por eso conviene pensar el nivel correcto desde el inicio en vez de asumir que migrar después es trivial.",
        aEn: "Yes, it's a common migration, but it involves rebuilding much of the site from scratch. That's why it's worth thinking through the right tier from the start instead of assuming migrating later is trivial.",
      },
    ],
    schema: {
      keywords: ["WordPress vs custom development", "AI website builders"],
      keywordsEs: ["wordpress vs desarrollo a medida", "builders de paginas web con ia"],
    },
  },
  {
    slug: "errores-de-diseno-web",
    title: "Web Design Mistakes That Quietly Kill Your Sales",
    titleEs: "Errores de Diseño Web que Matan tus Ventas",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Five recurring, measurable mistakes: a CTA that only appears once, copy that opens with company history, untested mobile forms, competing CTAs, and launching with zero conversion tracking.",
    excerptEs:
      "Cinco errores recurrentes y medibles: un CTA que solo aparece una vez, copy que abre con la historia de la empresa, formularios sin probar en móvil, CTAs que compiten entre sí, y lanzar sin ningún seguimiento de conversión.",
    readingTime: 6,
    date: "2026-09-22",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A website can look professional in every screenshot and still fail at its actual job. In practice, it's rarely one dramatic mistake, it's five specific, recurring ones, each measurable with a free tool, that each quietly cost a fraction of the visitors who would have otherwise converted.",
    ledeEs:
      "Una página web puede verse profesional en cada captura de pantalla y aun así fallar en su verdadero trabajo. En la práctica, casi nunca es un error dramático, son cinco errores específicos y recurrentes, cada uno medible con una herramienta gratuita, que le cuestan en conjunto una fracción de los visitantes que de otra forma habrían convertido.",
    sections: [
      {
        id: "cta-escondido",
        heading: "Burying the call to action",
        headingEs: "Esconder el llamado a la acción",
        body: [
          "A call to action that only appears once, at the very bottom of a long page, misses every visitor who decides before scrolling that far. Heatmap tools like Microsoft Clarity (free) show exactly how far down a page most visitors actually scroll, and on most service pages, fewer than half of visitors reach the bottom third. The CTA should repeat at natural decision points throughout the page, ideally after every section that answers a distinct objection, not exist as a single afterthought at the end.",
        ],
        bodyEs: [
          "Un llamado a la acción que solo aparece una vez, hasta el fondo de una página larga, se pierde a todo visitante que decide antes de llegar tan lejos. Herramientas de mapa de calor como Microsoft Clarity (gratis) muestran exactamente hasta dónde hace scroll la mayoría de los visitantes, y en la mayoría de las páginas de servicio, menos de la mitad llega al tercio final. El llamado a la acción debería repetirse en los puntos naturales de decisión a lo largo de la página, idealmente después de cada sección que resuelve una objeción distinta, no existir como una idea tardía al final.",
        ],
      },
      {
        id: "copy-centrado-en-la-empresa",
        heading: "Writing copy about the business instead of the visitor",
        headingEs: "Escribir copy sobre la empresa en vez de sobre quien visita",
        body: [
          "Copy that opens with company history and credentials ('Somos una empresa con 10 años de experiencia...') before addressing what the visitor actually came looking for loses attention in the first few seconds, before the visitor ever reaches the part meant to convince them. Leading with the visitor's problem or the outcome they want, and only introducing the business as the answer to it a few lines in, holds attention far longer and gets to the CTA with the visitor already convinced instead of still deciding whether to keep reading.",
        ],
        bodyEs: [
          "El copy que abre con la historia y las credenciales de la empresa ('Somos una empresa con 10 años de experiencia...') antes de atender lo que el visitante realmente vino a buscar pierde la atención en los primeros segundos, antes de llegar siquiera a la parte pensada para convencerlo. Empezar con el problema del visitante o el resultado que busca, y presentar a la empresa recién unas líneas después como la respuesta a eso, sostiene la atención mucho más tiempo y llega al llamado a la acción con el visitante ya convencido, en vez de todavía decidiendo si seguir leyendo.",
        ],
      },
      {
        id: "no-probar-en-movil-real",
        heading: "Never testing on an actual phone",
        headingEs: "Nunca probar en un celular de verdad",
        body: [
          'A site reviewed only on a desktop browser can hide layout problems, tiny tap targets under the 44-pixel minimum Apple and Google both recommend, or slow load times that only show up on a real mobile connection. Testing on an actual phone, on real mobile data instead of office wifi, catches problems a desktop review never will, since browser "mobile preview" modes simulate screen size but not real touch behavior or connection speed.',
        ],
        bodyEs: [
          'Un sitio revisado solo en un navegador de escritorio puede esconder problemas de layout, botones más pequeños que el mínimo de 44 píxeles que recomiendan tanto Apple como Google, o tiempos de carga lentos que solo se notan en una conexión móvil real. Probar en un celular de verdad, con datos móviles reales en vez de wifi de oficina, detecta problemas que una revisión en escritorio nunca va a mostrar, porque los modos de "vista previa móvil" de los navegadores simulan el tamaño de pantalla pero no el comportamiento táctil real ni la velocidad de conexión.',
        ],
      },
      {
        id: "demasiadas-opciones",
        heading: "Giving the visitor too many competing options",
        headingEs: "Darle a quien visita demasiadas opciones que compiten entre sí",
        body: [
          "A homepage with five different calls to action of equal visual weight (Cotiza, Síguenos en Instagram, Suscríbete al boletín, Agenda una llamada, Descarga el catálogo) forces the visitor to decide which one matters, and many will simply leave rather than choose. One primary action per page, with everything else visually secondary (smaller, less contrast, positioned lower), converts more reliably than a page trying to accomplish five goals at once.",
        ],
        bodyEs: [
          "Una página de inicio con cinco llamados a la acción distintos y del mismo peso visual (Cotiza, Síguenos en Instagram, Suscríbete al boletín, Agenda una llamada, Descarga el catálogo) obliga al visitante a decidir cuál importa, y muchos simplemente se van en vez de elegir. Una acción principal por página, con todo lo demás visualmente secundario (más pequeño, menos contraste, más abajo), convierte de forma más confiable que una página que intenta lograr cinco objetivos a la vez.",
        ],
      },
      {
        id: "no-medir-nada",
        heading: "Launching without any way to measure results",
        headingEs: "Lanzar sin ninguna forma de medir resultados",
        body: [
          "A site that launches without Google Analytics (GA4) or basic conversion tracking makes every future decision a guess instead of a data-backed call, there's no way to know which page, which headline, or which CTA is actually working. Setting up GA4 and a simple event for each conversion point (form submitted, WhatsApp clicked, phone number tapped) before launch, not weeks after, is what turns a site into something that can actually be improved over time instead of something judged purely on how it feels.",
        ],
        bodyEs: [
          "Un sitio que se lanza sin Google Analytics (GA4) ni seguimiento básico de conversión convierte cada decisión futura en una suposición en vez de una decisión con datos: no hay forma de saber qué página, qué titular o qué llamado a la acción realmente está funcionando. Configurar GA4 y un evento simple por cada punto de conversión (formulario enviado, clic en WhatsApp, toque en el número de teléfono) antes del lanzamiento, no semanas después, es lo que convierte a un sitio en algo que realmente se puede mejorar con el tiempo, en vez de algo que se juzga solo por cómo se siente.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Cuál es el error de diseño web más común?",
        qEn: "What's the most common web design mistake?",
        a: "Esconder o diluir el llamado a la acción, ya sea porque aparece solo una vez hasta el final, o porque compite con demasiadas otras opciones en la misma página. Un mapa de calor gratuito como Microsoft Clarity suele hacer visible este problema en la primera semana de uso.",
        aEn: "Burying or diluting the call to action, whether because it only appears once at the very end, or because it competes with too many other options on the same page. A free heatmap tool like Microsoft Clarity usually makes this problem visible within the first week of use.",
      },
      {
        q: "¿Un sitio bonito puede convertir mal de todas formas?",
        qEn: "Can a nice-looking site still convert poorly?",
        a: "Sí, y es más común de lo que parece. El diseño visual y la conversión son cosas relacionadas pero distintas. Un sitio puede verse impecable y aun así fallar en guiar al visitante hacia una acción clara.",
        aEn: "Yes, and it's more common than it seems. Visual design and conversion are related but different things. A site can look flawless and still fail to guide the visitor toward a clear action.",
      },
      {
        q: "¿Cómo sé si mi sitio tiene estos errores?",
        qEn: "How do I know if my site has these mistakes?",
        a: "Una auditoría rápida ayuda: revisa el sitio en un celular real (no en modo vista previa del navegador), cronometra cuánto tarda en cargar en PageSpeed Insights, y pregúntate si en los primeros cinco segundos queda claro qué debe hacer el visitante.",
        aEn: "A quick audit helps: review the site on an actual phone (not the browser's preview mode), time how long it takes to load in PageSpeed Insights, and ask whether in the first five seconds it's clear what the visitor should do.",
      },
      {
        q: "¿Corregir estos errores requiere rediseñar todo el sitio?",
        qEn: "Does fixing these mistakes require redesigning the whole site?",
        a: "No en la mayoría de los casos. Muchos de estos errores se corrigen con ajustes puntuales de copy, jerarquía visual y llamados a la acción, sin necesidad de reconstruir el sitio desde cero.",
        aEn: "Not in most cases. Many of these mistakes get fixed with targeted adjustments to copy, visual hierarchy, and calls to action, without needing to rebuild the site from scratch.",
      },
    ],
    schema: {
      keywords: ["web design mistakes", "website conversion mistakes"],
      keywordsEs: ["errores de diseño web", "errores que matan conversion"],
    },
  },
  {
    slug: "checklist-para-lanzar-pagina-web",
    title: "Checklist Before Launching Your Website (30 Points)",
    titleEs: "Checklist Antes de Lanzar tu Página Web (30 Puntos)",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "The five categories that matter most before going live: content accuracy, mobile testing, tracking setup, technical basics, and a real conversion path.",
    excerptEs:
      "Las cinco categorías que más importan antes de salir en vivo: precisión del contenido, pruebas en móvil, configuración de seguimiento, fundamentos técnicos, y un camino de conversión real.",
    readingTime: 5,
    date: "2026-09-24",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Most launch-day problems fall into five categories: content that's wrong or outdated, a site that wasn't actually tested on mobile, missing analytics, technical basics left unchecked, and no clear path for a visitor to take action. Catching these before launch is far cheaper than fixing them after.",
    ledeEs:
      "La mayoría de los problemas del día del lanzamiento caen en cinco categorías: contenido incorrecto o desactualizado, un sitio que nunca se probó realmente en móvil, analítica ausente, fundamentos técnicos sin revisar, y ningún camino claro para que el visitante actúe. Detectar esto antes del lanzamiento sale mucho más barato que corregirlo después.",
    sections: [
      {
        id: "contenido-y-precision",
        heading: "Content accuracy",
        headingEs: "Precisión del contenido",
        body: [
          "Every phone number, address, price, and business hour on the site needs to be verified against the actual current information, not copied from an old brochure. A single wrong phone number can quietly cost real leads for weeks before anyone notices.",
        ],
        bodyEs: [
          "Cada teléfono, dirección, precio y horario en el sitio necesita verificarse contra la información real y actual, no copiarse de un folleto viejo. Un solo número de teléfono equivocado puede costar leads reales durante semanas antes de que alguien lo note.",
        ],
      },
      {
        id: "pruebas-en-movil-real",
        heading: "Real mobile testing",
        headingEs: "Pruebas reales en móvil",
        body: [
          "Every page needs to be checked on an actual phone, on real mobile data, not just in a browser's mobile preview mode. Forms, buttons, and load speed can all behave differently on a real device than they do in a simulated preview.",
        ],
        bodyEs: [
          "Cada página necesita revisarse en un celular de verdad, con datos móviles reales, no solo en el modo de vista previa móvil de un navegador. Los formularios, botones y velocidad de carga pueden comportarse distinto en un dispositivo real que en una vista previa simulada.",
        ],
      },
      {
        id: "seguimiento-y-analitica",
        heading: "Tracking and analytics",
        headingEs: "Seguimiento y analítica",
        body: [
          "Analytics, conversion tracking, and any ad pixels need to be installed and verified as working before launch, not added afterward. Confirming a test conversion actually registers is the only way to know tracking is truly set up correctly, not just installed.",
        ],
        bodyEs: [
          "La analítica, el seguimiento de conversión y cualquier pixel de anuncios necesitan estar instalados y verificados como funcionales antes del lanzamiento, no agregados después. Confirmar que una conversión de prueba realmente se registra es la única forma de saber que el seguimiento está bien configurado, no solo instalado.",
        ],
      },
      {
        id: "fundamentos-tecnicos",
        heading: "Technical basics",
        headingEs: "Fundamentos técnicos",
        body: [
          "SSL certificate active, all forms tested with a real submission, broken links checked, and page load speed confirmed on a real connection. These are unglamorous but they're the difference between a site that works and one that quietly fails for some visitors.",
        ],
        bodyEs: [
          "Certificado SSL activo, todos los formularios probados con un envío real, enlaces rotos revisados, y velocidad de carga confirmada en una conexión real. No son detalles llamativos, pero son la diferencia entre un sitio que funciona y uno que falla en silencio para algunos visitantes.",
        ],
      },
      {
        id: "un-camino-de-conversion-claro",
        heading: "One clear conversion path",
        headingEs: "Un camino de conversión claro",
        body: [
          "Before launch, walk through the site as a first-time visitor would and confirm there's exactly one obvious next step at every point, not several competing ones. If it's not immediately clear what to do next, a real visitor won't figure it out either.",
        ],
        bodyEs: [
          "Antes de lanzar, recorre el sitio como lo haría un visitante por primera vez y confirma que hay exactamente un siguiente paso obvio en cada punto, no varios compitiendo entre sí. Si no queda claro qué hacer a continuación, un visitante real tampoco lo va a averiguar.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Cuáles son los errores más comunes al lanzar una página web?",
        qEn: "What are the most common mistakes when launching a website?",
        a: "Información desactualizada, formularios sin probar, y analítica que nunca se verificó como funcional. Los tres son fáciles de detectar con una revisión metódica antes del lanzamiento.",
        aEn: "Outdated information, untested forms, and analytics that was never verified as working. All three are easy to catch with a methodical review before launch.",
      },
      {
        q: "¿Cuánto tiempo toma hacer esta revisión antes de lanzar?",
        qEn: "How long does this pre-launch review take?",
        a: "Para un sitio de tamaño moderado, una revisión completa suele tomar de un día a unos cuantos, dependiendo de cuántas páginas y formularios hay que verificar.",
        aEn: "For a moderately sized site, a full review usually takes anywhere from a day to a few, depending on how many pages and forms need verification.",
      },
      {
        q: "¿Es necesario probar el sitio en varios navegadores?",
        qEn: "Is it necessary to test the site across multiple browsers?",
        a: "Sí, al menos en los navegadores más usados por tu audiencia. Un sitio que se ve bien en un navegador puede tener problemas visuales o funcionales en otro.",
        aEn: "Yes, at least across the browsers most used by your audience. A site that looks fine in one browser can have visual or functional issues in another.",
      },
      {
        q: "¿Qué pasa si detecto un problema después de lanzar?",
        qEn: "What happens if I find a problem after launching?",
        a: "Se corrige lo antes posible, pero es mucho más caro en tiempo y en leads perdidos que haberlo detectado en la revisión previa al lanzamiento.",
        aEn: "It gets fixed as soon as possible, but it's far more costly in time and lost leads than catching it in the pre-launch review.",
      },
    ],
    schema: {
      keywords: ["website launch checklist", "pre-launch website checklist"],
      keywordsEs: ["checklist lanzar pagina web", "revision antes de lanzar sitio web"],
    },
  },
  {
    slug: "que-debe-incluir-una-pagina-web",
    title: "What Should a Professional Website Actually Include?",
    titleEs: "¿Qué Debe Incluir una Página Web Profesional?",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "The pages and elements a business site genuinely needs to do its job, and which commonly-added extras don't move the needle for most businesses.",
    excerptEs:
      "Las páginas y elementos que un sitio de negocio realmente necesita para cumplir su trabajo, y qué extras comunes no mueven la aguja para la mayoría de los negocios.",
    readingTime: 5,
    date: "2026-09-26",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A professional website needs a home page that states clearly what the business does and for whom, a services or products section, a way to establish trust, and one obvious way to take action. Everything beyond that should earn its place by serving a specific purpose, not by being expected.",
    ledeEs:
      "Una página web profesional necesita una página de inicio que diga con claridad qué hace el negocio y para quién, una sección de servicios o productos, una forma de generar confianza, y una manera obvia de tomar acción. Todo lo que va más allá de eso debería ganarse su lugar cumpliendo un propósito específico, no porque se espera que esté ahí.",
    sections: [
      {
        id: "la-pagina-de-inicio",
        heading: "The home page: clarity, not cleverness",
        headingEs: "La página de inicio: claridad, no ingenio",
        body: [
          "A visitor should understand what the business does and who it's for within a few seconds of landing, without needing to scroll or interpret a clever tagline. A home page trying to be memorable before being clear usually loses visitors who came looking for a straightforward answer.",
        ],
        bodyEs: [
          "Un visitante debería entender qué hace el negocio y para quién es en los primeros segundos, sin necesitar hacer scroll o interpretar un eslogan ingenioso. Una página de inicio que intenta ser memorable antes que clara suele perder visitantes que llegaron buscando una respuesta directa.",
        ],
      },
      {
        id: "servicios-o-productos",
        heading: "A clear services or products section",
        headingEs: "Una sección clara de servicios o productos",
        body: [
          "Whatever the business offers needs its own dedicated space, described in terms of what the visitor gets, not just a feature list. Pricing information, even as a range, tends to reduce friction rather than scare visitors away, since ambiguity about cost is a common reason people leave without contacting.",
        ],
        bodyEs: [
          "Lo que sea que ofrezca el negocio necesita su propio espacio dedicado, descrito en términos de lo que recibe el visitante, no solo como una lista de características. La información de precio, aunque sea un rango, tiende a reducir la fricción en vez de espantar visitantes, ya que la ambigüedad sobre el costo es una razón común por la que la gente se va sin contactar.",
        ],
      },
      {
        id: "prueba-social-y-confianza",
        heading: "Real trust signals, not generic ones",
        headingEs: "Señales de confianza reales, no genéricas",
        body: [
          "Real client names, specific results, or recognizable logos build more trust than generic testimonials with no attribution. A single detailed case with real numbers usually outperforms five vague, unverifiable quotes.",
        ],
        bodyEs: [
          "Nombres reales de clientes, resultados específicos, o logos reconocibles generan más confianza que testimonios genéricos sin atribución. Un solo caso detallado con números reales suele superar a cinco frases vagas y sin forma de verificarse.",
        ],
      },
      {
        id: "informacion-de-contacto-completa",
        heading: "Contact information that removes friction",
        headingEs: "Información de contacto que elimina fricción",
        body: [
          "Phone, WhatsApp, email, and physical address (if relevant) should be easy to find from any page, not buried three clicks deep. A visitor ready to act who can't quickly find how to reach the business often just leaves instead of hunting for it.",
        ],
        bodyEs: [
          "Teléfono, WhatsApp, correo y dirección física (si aplica) deberían ser fáciles de encontrar desde cualquier página, no estar escondidos a tres clics de distancia. Un visitante listo para actuar que no encuentra rápido cómo contactar al negocio muchas veces simplemente se va en vez de buscarlo.",
        ],
      },
      {
        id: "lo-que-no-siempre-hace-falta",
        heading: "What doesn't always need to be there",
        headingEs: "Lo que no siempre hace falta",
        body: [
          "A blog, a full team-bios page, or a chat widget aren't universally necessary, they earn their place depending on the business. A blog only helps if it's maintained consistently; an abandoned one with three posts from two years ago hurts more than it helps.",
        ],
        bodyEs: [
          "Un blog, una página completa de biografías del equipo, o un widget de chat no son universalmente necesarios, se ganan su lugar dependiendo del negocio. Un blog solo ayuda si se mantiene con constancia; uno abandonado con tres publicaciones de hace dos años perjudica más de lo que ayuda.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Es obligatorio tener un blog en mi página web?",
        qEn: "Is it mandatory to have a blog on my website?",
        a: "No. Un blog solo aporta si se mantiene con contenido nuevo de forma constante. Uno abandonado transmite lo contrario de lo que se busca: que el negocio ya no está activo.",
        aEn: "No. A blog only helps if it's kept up with consistent new content. An abandoned one sends the opposite signal from what's intended: that the business isn't active anymore.",
      },
      {
        q: "¿Debo mostrar precios en mi página web?",
        qEn: "Should I show pricing on my website?",
        a: "En la mayoría de los casos sí, al menos como rango. La ambigüedad sobre el costo es una razón común por la que la gente se va sin contactar, aunque el precio final varíe por proyecto.",
        aEn: "In most cases, yes, at least as a range. Ambiguity about cost is a common reason people leave without contacting, even if the final price varies by project.",
      },
      {
        q: "¿Qué páginas son realmente indispensables?",
        qEn: "Which pages are genuinely indispensable?",
        a: "Inicio, servicios o productos, una forma de generar confianza (casos, testimonios verificables), y contacto. Todo lo demás depende del tipo de negocio.",
        aEn: "Home, services or products, a way to build trust (cases, verifiable testimonials), and contact. Everything else depends on the type of business.",
      },
      {
        q: "¿Los testimonios genéricos ayudan o no sirven de nada?",
        qEn: "Do generic testimonials help, or are they useless?",
        a: "Ayudan poco comparados con un caso real con nombre y resultado específico. Un testimonio sin atribución es fácil de desconfiar, incluso si es genuino.",
        aEn: "They help little compared to a real case with a name and specific result. A testimonial with no attribution is easy to distrust, even when it's genuine.",
      },
    ],
    schema: {
      keywords: ["what should a website include", "essential website pages"],
      keywordsEs: ["que debe incluir una pagina web", "paginas esenciales sitio web"],
    },
  },
  {
    slug: "pagina-web-o-redes-sociales",
    title: "Website or Just Social Media? What Fits Your Business",
    titleEs: "¿Página Web o Solo Redes Sociales? Qué le Conviene a tu Negocio",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Social media alone works for some businesses. For most, it's a channel that should point back to a website you actually own, not a replacement for having one.",
    excerptEs:
      "Solo redes sociales funciona para algunos negocios. Para la mayoría, es un canal que debería apuntar de vuelta a una página web que realmente les pertenece, no un reemplazo de tenerla.",
    readingTime: 5,
    date: "2026-09-28",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Instagram or Facebook alone can be enough for a very small, hyper-local business with no ambition to scale. For almost everyone else, relying only on social media means the business doesn't own its own presence, a platform algorithm change or account issue can take away access to customers overnight.",
    ledeEs:
      "Instagram o Facebook solos pueden ser suficientes para un negocio muy pequeño, hiperlocal, sin ambición de crecer. Para casi todos los demás, depender solo de redes sociales significa que el negocio no es dueño de su propia presencia. Un cambio de algoritmo o un problema de cuenta puede quitarle el acceso a sus clientes de un día para otro.",
    sections: [
      {
        id: "cuando-redes-solas-si-alcanzan",
        heading: "When social media alone genuinely works",
        headingEs: "Cuándo solo redes sociales sí alcanza",
        body: [
          "A very small, informal business with a narrow local audience and no plans to grow beyond word of mouth can function on social media alone for a while. It works until the moment the business wants to run serious paid ads, needs to rank in search, or wants a professional presence that doesn't depend on a platform's rules.",
        ],
        bodyEs: [
          "Un negocio muy pequeño e informal, con una audiencia local acotada y sin planes de crecer más allá del boca en boca, puede funcionar solo con redes sociales por un tiempo. Funciona hasta el momento en que el negocio quiere correr anuncios pagados en serio, necesita posicionar en buscadores, o quiere una presencia profesional que no dependa de las reglas de una plataforma.",
        ],
      },
      {
        id: "el-riesgo-de-no-ser-dueño",
        heading: "The risk of not owning your own presence",
        headingEs: "El riesgo de no ser dueño de tu propia presencia",
        body: [
          "A social media account can be suspended, algorithm changes can crater organic reach overnight, and a platform can change its rules with no notice. A website is the one piece of a business's digital presence that the business actually controls end to end, nobody else can take it away.",
        ],
        bodyEs: [
          "Una cuenta de redes sociales puede suspenderse, un cambio de algoritmo puede desplomar el alcance orgánico de un día para otro, y una plataforma puede cambiar sus reglas sin previo aviso. La página web es la única parte de la presencia digital de un negocio que realmente controla de principio a fin, nadie más puede quitársela.",
        ],
      },
      {
        id: "busqueda-vs-descubrimiento",
        heading: "Search intent vs. social discovery, a different job",
        headingEs: "Intención de búsqueda vs descubrimiento social, un trabajo distinto",
        body: [
          "Social media is built for discovery, someone scrolling who wasn't necessarily looking for a business like yours. Search is built for intent, someone actively looking for exactly what you offer. A website captures that second group, the ones already looking, in a way a social profile alone cannot.",
        ],
        bodyEs: [
          "Las redes sociales están hechas para el descubrimiento: alguien que hace scroll sin buscar necesariamente un negocio como el tuyo. La búsqueda está hecha para la intención: alguien buscando activamente justo lo que ofreces. Una página web captura a ese segundo grupo, los que ya están buscando, de una forma que un perfil social por sí solo no logra.",
        ],
      },
      {
        id: "la-combinacion-que-funciona",
        heading: "The combination that actually works",
        headingEs: "La combinación que realmente funciona",
        body: [
          "The strongest setup uses social media to build awareness and relationship, and a website as the destination that converts that attention into an actual lead or sale. Every social post that doesn't eventually point somewhere the business owns is attention that gets spent without being captured.",
        ],
        bodyEs: [
          "El montaje más fuerte usa redes sociales para construir conocimiento y relación, y una página web como el destino que convierte esa atención en un lead o venta real. Cada publicación social que no termina apuntando a algo que el negocio posee es atención que se gasta sin capturarse.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Puedo tener solo Instagram y no página web?",
        qEn: "Can I have just Instagram and no website?",
        a: "Es posible para un negocio muy pequeño y local sin planes de crecer, pero deja de funcionar en el momento en que quieres pautar en serio, posicionar en buscadores, o dejar de depender de las reglas de una plataforma.",
        aEn: "It's possible for a very small, local business with no growth plans, but it stops working the moment you want to run serious paid ads, rank in search, or stop depending on a platform's rules.",
      },
      {
        q: "¿Las redes sociales reemplazan al SEO?",
        qEn: "Does social media replace SEO?",
        a: "No. Las redes sociales están hechas para el descubrimiento casual, mientras que el SEO captura a alguien que ya está buscando activamente lo que ofreces. Son complementarios, no sustitutos.",
        aEn: "No. Social media is built for casual discovery, while SEO captures someone who's already actively searching for what you offer. They're complementary, not substitutes.",
      },
      {
        q: "¿Qué pasa si mi cuenta de redes sociales se suspende?",
        qEn: "What happens if my social media account gets suspended?",
        a: "Pierdes acceso inmediato a esa audiencia sin ningún control sobre cuándo o si se restaura. Es el riesgo central de depender solo de una plataforma que no controlas.",
        aEn: "You lose immediate access to that audience with no control over when or whether it gets restored. That's the central risk of relying solely on a platform you don't control.",
      },
      {
        q: "¿Cómo deberían trabajar juntas la página web y las redes sociales?",
        qEn: "How should the website and social media work together?",
        a: "Las redes generan conocimiento y relación, y cada publicación debería apuntar de regreso al sitio, donde ocurre la conversión real. Sin ese puente, la atención social se gasta sin capturarse.",
        aEn: "Social media generates awareness and relationship, and every post should point back to the site, where the real conversion happens. Without that bridge, social attention gets spent without being captured.",
      },
    ],
    schema: {
      keywords: ["website vs social media", "do I need a website or just Instagram"],
      keywordsEs: ["pagina web o redes sociales", "necesito pagina web o solo instagram"],
    },
  },
  {
    slug: "velocidad-de-carga-pagina-web",
    title: "Page Load Speed: Why a Slow Site Is Costing You Customers",
    titleEs: "Velocidad de Carga: Por Qué tu Web Lenta te Cuesta Clientes",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Google's own research ties a jump from 1 to 3 seconds of load time to a large increase in bounce rate. Under 2.5 seconds for Largest Contentful Paint is the specific bar Google uses for ranking.",
    excerptEs:
      "La propia investigación de Google relaciona un salto de 1 a 3 segundos de carga con un aumento importante en la tasa de rebote. Menos de 2.5 segundos de Largest Contentful Paint es el estándar específico que usa Google para posicionar.",
    readingTime: 5,
    date: "2026-09-30",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Google's own research found that as load time goes from 1 to 3 seconds, the probability of a visitor bouncing increases by 32%, and it keeps climbing from there. Speed isn't a nice-to-have polish item, it directly determines how many of the visitors a business paid to attract actually see the page, and it's one of the concrete signals Google's Core Web Vitals use for ranking.",
    ledeEs:
      "La propia investigación de Google encontró que conforme el tiempo de carga sube de 1 a 3 segundos, la probabilidad de que un visitante rebote aumenta un 32%, y sigue subiendo de ahí. La velocidad no es un detalle de pulido, determina directamente cuántos de los visitantes que un negocio pagó por atraer realmente llegan a ver la página, y es una de las señales concretas que los Core Web Vitals de Google usan para el posicionamiento.",
    sections: [
      {
        id: "por-que-importa-tanto",
        heading: "Why speed matters more than it seems",
        headingEs: "Por qué la velocidad importa más de lo que parece",
        body: [
          "A slow-loading site loses visitors who arrived through paid ads before they see any of the message the ad promised, which means the wasted spend happens silently, with no obvious error to point to. Google's own Core Web Vitals report grades sites specifically on Largest Contentful Paint (LCP), the time it takes the main content to become visible, and anything above 2.5 seconds is flagged as needing improvement, directly affecting search ranking, not just user experience.",
        ],
        bodyEs: [
          "Un sitio de carga lenta pierde visitantes que llegaron por anuncios pagados antes de que vean nada del mensaje que el anuncio prometió, lo que significa que el gasto desperdiciado ocurre en silencio, sin un error obvio al cual apuntar. El propio reporte de Core Web Vitals de Google califica a los sitios específicamente en Largest Contentful Paint (LCP), el tiempo que tarda en verse el contenido principal, y cualquier cosa por encima de 2.5 segundos se marca como que necesita mejora, afectando directamente el posicionamiento en búsqueda, no solo la experiencia del usuario.",
        ],
      },
      {
        id: "las-causas-mas-comunes",
        heading: "The most common causes",
        headingEs: "Las causas más comunes",
        body: [
          "Unoptimized images are the single most common culprit, a handful of full-resolution photos straight from a phone camera (often 3-5 MB each) can add several seconds to load time on their own, when a properly compressed version of the same image runs under 200 KB with no visible quality loss. After that, too many third-party scripts (chat widgets, tracking pixels, embedded fonts) and a hosting plan that isn't suited to the site's actual traffic round out the usual list.",
        ],
        bodyEs: [
          "Las imágenes sin optimizar son la causa más común por sí sola: un puñado de fotos en resolución completa directo de la cámara de un celular (muchas veces 3 a 5 MB cada una) pueden sumar varios segundos de carga por su cuenta, cuando una versión correctamente comprimida de la misma imagen pesa menos de 200 KB sin pérdida visible de calidad. Después de eso, demasiados scripts de terceros (widgets de chat, pixeles de seguimiento, fuentes incrustadas) y un plan de hosting que no está a la altura del tráfico real del sitio completan la lista habitual.",
        ],
      },
      {
        id: "como-se-mide",
        heading: "How speed actually gets measured",
        headingEs: "Cómo se mide realmente la velocidad",
        body: [
          "PageSpeed Insights, free from Google, tests a site's real load time and gives a specific 0-100 score plus a ranked breakdown of exactly what's slowing it down, rather than guessing based on how fast it feels on a fast office connection. It tests on a throttled, simulated mobile connection by default, which gives a far more honest picture than testing on fiber internet in an office, since that's closer to what a real visitor on a phone actually experiences.",
        ],
        bodyEs: [
          "PageSpeed Insights, gratis y de Google, mide el tiempo real de carga de un sitio y da un puntaje específico de 0 a 100 más un desglose priorizado de qué lo está frenando exactamente, en vez de adivinar según qué tan rápido se siente en una conexión rápida de oficina. Por defecto prueba con una conexión móvil simulada y limitada, lo que da una imagen mucho más honesta que probar con fibra óptica en una oficina, ya que está más cerca de lo que realmente experimenta un visitante real desde su celular.",
        ],
      },
      {
        id: "que-lo-arregla",
        heading: "What actually fixes it",
        headingEs: "Qué lo arregla realmente",
        body: [
          "Compressing and properly sizing images almost always produces the biggest single improvement, often cutting load time by half or more on its own. After that, removing unnecessary scripts, using modern image formats like WebP (roughly 25-35% smaller than JPEG at equivalent quality), and choosing hosting that matches the site's traffic level close most of the remaining gap.",
        ],
        bodyEs: [
          "Comprimir y dimensionar correctamente las imágenes casi siempre produce la mejora individual más grande, muchas veces recortando el tiempo de carga a la mitad o más por su cuenta. Después de eso, quitar scripts innecesarios, usar formatos de imagen modernos como WebP (aproximadamente 25 a 35% más ligero que JPEG a calidad equivalente), y elegir un hosting acorde al nivel de tráfico del sitio cierran la mayor parte de lo que falta.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Qué tan rápido debería cargar mi página web?",
        qEn: "How fast should my website load?",
        a: 'Google usa 2.5 segundos como el umbral de Largest Contentful Paint para considerar un sitio como "bueno" en Core Web Vitals. Por debajo de ese número afecta tanto el posicionamiento como cuántos visitantes se quedan a ver el contenido.',
        aEn: 'Google uses 2.5 seconds as the Largest Contentful Paint threshold to consider a site "good" in Core Web Vitals. Staying under that number affects both ranking and how many visitors stick around to see the content.',
      },
      {
        q: "¿Cómo puedo saber si mi sitio es lento?",
        qEn: "How can I tell if my site is slow?",
        a: "PageSpeed Insights, gratis de Google, mide el tiempo de carga real y da un puntaje de 0 a 100 con un desglose de qué lo está frenando. Es mejor confiar en esa medición que en la sensación subjetiva de qué tan rápido se ve.",
        aEn: "PageSpeed Insights, free from Google, measures real load time and gives a 0-100 score with a breakdown of what's slowing it down. It's better to trust that measurement than the subjective feeling of how fast it looks.",
      },
      {
        q: "¿Las imágenes son realmente la causa principal?",
        qEn: "Are images really the main cause?",
        a: "En la mayoría de los casos sí. Una sola foto de celular sin comprimir puede pesar 3 a 5 MB, cuando la misma imagen bien comprimida pesa menos de 200 KB sin pérdida visible de calidad. Suele ser el primer lugar donde buscar.",
        aEn: "In most cases, yes. A single uncompressed phone photo can weigh 3 to 5 MB, when the same properly compressed image weighs under 200 KB with no visible quality loss. It's usually the first place to look.",
      },
      {
        q: "¿Vale la pena invertir en mejor hosting solo por velocidad?",
        qEn: "Is it worth investing in better hosting just for speed?",
        a: "Depende del tráfico del sitio. Para un sitio con volumen relevante de visitantes, un hosting adecuado puede ser la diferencia entre una experiencia consistente y una que se degrada en horas pico.",
        aEn: "It depends on the site's traffic. For a site with meaningful visitor volume, proper hosting can be the difference between a consistent experience and one that degrades during peak hours.",
      },
    ],
    schema: {
      keywords: ["website speed", "page load time", "Core Web Vitals"],
      keywordsEs: ["velocidad de carga pagina web", "sitio web lento", "core web vitals"],
    },
  },
  {
    slug: "que-es-hosting",
    title: "What Is Web Hosting and Which One to Choose in Mexico",
    titleEs: "¿Qué es el Hosting y Cuál Elegir en México?",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Hosting is the infrastructure that keeps a site online and accessible, not an optional add-on. What matters when choosing one, and what a $50 MXN/month plan usually can't handle.",
    excerptEs:
      "El hosting es la infraestructura que mantiene un sitio en línea y accesible, no un extra opcional. Qué importa al elegirlo, y qué es lo que un plan de $50 MXN al mes normalmente no puede manejar.",
    readingTime: 5,
    date: "2026-10-02",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Hosting is the server space where a website's files actually live, and it directly determines whether the site stays online, how fast it loads, and how well it holds up under real traffic. A cheap plan chosen without thinking about the site's actual needs is one of the most common causes of slow or unreliable sites.",
    ledeEs:
      "El hosting es el espacio en servidor donde realmente viven los archivos de un sitio web, y determina directamente si el sitio se mantiene en línea, qué tan rápido carga, y qué tan bien resiste tráfico real. Un plan barato elegido sin pensar en las necesidades reales del sitio es una de las causas más comunes de sitios lentos o poco confiables.",
    sections: [
      {
        id: "que-hace-el-hosting",
        heading: "What hosting actually does",
        headingEs: "Qué hace realmente el hosting",
        body: [
          "Every website needs to be stored somewhere accessible around the clock, and hosting is that infrastructure. The quality of the hosting directly affects load speed, uptime reliability, and how the site performs when traffic spikes, it's not just a technical detail behind the scenes.",
        ],
        bodyEs: [
          "Todo sitio web necesita almacenarse en algún lugar accesible las 24 horas, y el hosting es esa infraestructura. La calidad del hosting afecta directamente la velocidad de carga, la confiabilidad del tiempo activo, y cómo se comporta el sitio cuando hay picos de tráfico. No es solo un detalle técnico detrás de escena.",
        ],
      },
      {
        id: "tipos-de-hosting",
        heading: "The main types of hosting",
        headingEs: "Los tipos principales de hosting",
        body: [
          "Shared hosting splits server resources among many sites and is the cheapest option, fine for low-traffic sites but prone to slowdowns when a neighboring site spikes in traffic. VPS and cloud hosting dedicate resources specifically to one site, costing more but performing far more consistently. Managed hosting adds handled updates and security on top of either.",
        ],
        bodyEs: [
          "El hosting compartido divide los recursos del servidor entre muchos sitios y es la opción más barata, funciona bien para sitios de bajo tráfico pero es propenso a lentitud cuando un sitio vecino tiene un pico de tráfico. El hosting VPS y en la nube dedica recursos específicamente a un sitio, cuesta más pero rinde de forma mucho más consistente. El hosting administrado suma actualizaciones y seguridad gestionadas sobre cualquiera de los dos.",
        ],
      },
      {
        id: "que-considerar-al-elegir",
        heading: "What to actually consider when choosing",
        headingEs: "Qué considerar realmente al elegir",
        body: [
          "Match the hosting to the site's real traffic and complexity, not to the cheapest available price. A site expecting steady traffic from ad campaigns needs more reliable infrastructure than a low-traffic informational page. Uptime guarantees, support responsiveness, and backup policies matter more than the sticker price once something goes wrong.",
        ],
        bodyEs: [
          "Ajusta el hosting al tráfico y complejidad reales del sitio, no al precio más barato disponible. Un sitio que espera tráfico constante de campañas de anuncios necesita infraestructura más confiable que una página informativa de bajo tráfico. Las garantías de tiempo activo, la capacidad de respuesta del soporte, y las políticas de respaldo importan más que el precio de etiqueta en el momento en que algo falla.",
        ],
      },
      {
        id: "errores-comunes",
        heading: "Common hosting mistakes",
        headingEs: "Errores comunes con el hosting",
        body: [
          "Choosing the cheapest shared plan for a site that runs paid ad campaigns is a common mistake, the site can go down or slow to a crawl right when traffic (and ad spend) is highest. Never checking whether backups are actually running is another, a hosting failure without a backup can mean losing the entire site.",
        ],
        bodyEs: [
          "Elegir el plan compartido más barato para un sitio que corre campañas de anuncios pagados es un error común: el sitio puede caerse o volverse lentísimo justo cuando el tráfico (y el gasto en anuncios) está más alto. Nunca revisar si los respaldos realmente se están haciendo es otro, una falla de hosting sin respaldo puede significar perder el sitio completo.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Necesito hosting caro para un sitio pequeño?",
        qEn: "Do I need expensive hosting for a small site?",
        a: "No necesariamente. Un plan compartido básico suele ser suficiente para un sitio de bajo tráfico. El hosting más robusto se vuelve necesario conforme sube el tráfico o la complejidad del sitio.",
        aEn: "Not necessarily. A basic shared plan is usually enough for a low-traffic site. More robust hosting becomes necessary as traffic or site complexity increases.",
      },
      {
        q: "¿Qué pasa si mi hosting falla mientras corro anuncios pagados?",
        qEn: "What happens if my hosting fails while I'm running paid ads?",
        a: "El gasto en anuncios sigue corriendo mientras el sitio está caído, así que cada minuto fuera de línea es presupuesto desperdiciado. Es una de las razones para no elegir el hosting más barato sin pensar en el tráfico real esperado.",
        aEn: "Ad spend keeps running while the site is down, so every minute offline is wasted budget. It's one of the reasons not to pick the cheapest hosting without thinking about actual expected traffic.",
      },
      {
        q: "¿El hosting incluye seguridad y respaldos automáticos?",
        qEn: "Does hosting include security and automatic backups?",
        a: "Depende del plan. Muchos planes básicos no incluyen respaldos automáticos por defecto, hay que verificarlo específicamente antes de asumir que están cubiertos.",
        aEn: "It depends on the plan. Many basic plans don't include automatic backups by default, it needs to be specifically confirmed rather than assumed to be covered.",
      },
      {
        q: "¿Cómo sé si mi hosting actual ya no es suficiente?",
        qEn: "How do I know if my current hosting isn't enough anymore?",
        a: "Señales claras: el sitio se vuelve notablemente lento en horas de tráfico alto, o cae con cierta frecuencia. Ahí es cuando vale la pena revisar si el plan actual sigue siendo adecuado.",
        aEn: "Clear signs: the site becomes noticeably slow during high-traffic hours, or goes down with some frequency. That's when it's worth checking whether the current plan is still adequate.",
      },
    ],
    schema: {
      keywords: ["what is web hosting", "best hosting Mexico"],
      keywordsEs: ["que es el hosting", "mejor hosting mexico"],
    },
  },
  {
    slug: "como-elegir-un-dominio",
    title: "How to Choose the Right Domain Name for Your Business",
    titleEs: "Cómo Elegir el Dominio Correcto para tu Empresa",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      ".mx domains typically run $200-$400 MXN per year, .com around $250-$450 MXN. Both together protect the brand for under $1,000 MXN a year, cheap insurance against a competitor grabbing the other one.",
    excerptEs:
      "Los dominios .mx cuestan típicamente entre $200 y $400 MXN al año, los .com entre $250 y $450 MXN. Registrar ambos protege la marca por menos de $1,000 MXN al año, un seguro barato contra que un competidor tome el otro.",
    readingTime: 4,
    date: "2026-10-04",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A domain is the address customers will type, say out loud, and remember for years, which makes it a business decision, not just a technical checkbox during setup. A .mx domain typically costs $200-$400 MXN per year and a .com runs $250-$450 MXN, registering both together to protect the brand costs under $1,000 MXN a year combined, cheap compared to the cost of a competitor grabbing the other one later.",
    ledeEs:
      "El dominio es la dirección que los clientes van a escribir, decir en voz alta y recordar durante años, lo que lo convierte en una decisión de negocio, no solo en una casilla técnica que marcar durante la configuración. Un dominio .mx cuesta típicamente entre $200 y $400 MXN al año y un .com entre $250 y $450 MXN, registrar ambos juntos para proteger la marca cuesta menos de $1,000 MXN al año en conjunto, barato comparado con el costo de que un competidor tome el otro después.",
    sections: [
      {
        id: "que-hace-un-buen-dominio",
        heading: "What makes a good domain",
        headingEs: "Qué hace bueno a un dominio",
        body: [
          'Short (ideally under 15 characters), easy to spell out loud over the phone, and free of hyphens or numbers that force an explanation every time someone shares it. If a customer has to spell it letter by letter, or clarify "with a hyphen" every time, it\'s already working against the business every single time it gets shared.',
        ],
        bodyEs: [
          'Corto (idealmente menos de 15 caracteres), fácil de deletrear en voz alta por teléfono, y sin guiones ni números que obliguen a dar una explicación cada vez que alguien lo comparte. Si un cliente tiene que deletrearlo letra por letra, o aclarar "con guion" cada vez, ya está trabajando en contra del negocio cada vez que se comparte.',
        ],
      },
      {
        id: "mx-com-o-ambos",
        heading: ".mx, .com, or both",
        headingEs: ".mx, .com, o ambos",
        body: [
          "A .com signals broader, sometimes international reach, while a .mx signals a specifically Mexican business, which can build trust with a local audience. Pricing runs similarly, roughly $200-$400 MXN per year for .mx and $250-$450 MXN for .com depending on the registrar. When budget allows, registering both (under $1,000 MXN a year combined) and pointing one to the other protects the brand from a competitor grabbing the other extension later, a much cheaper problem to prevent than to fix.",
        ],
        bodyEs: [
          "Un .com transmite un alcance más amplio, a veces internacional, mientras que un .mx transmite un negocio específicamente mexicano, lo que puede generar confianza con una audiencia local. El precio es similar, aproximadamente $200 a $400 MXN al año para .mx y $250 a $450 MXN para .com según el registrador. Cuando el presupuesto lo permite, registrar ambos (menos de $1,000 MXN al año en conjunto) y apuntar uno hacia el otro protege la marca de que un competidor tome la otra extensión después, un problema mucho más barato de prevenir que de arreglar.",
        ],
      },
      {
        id: "que-evitar",
        heading: "What to avoid",
        headingEs: "Qué evitar",
        body: [
          "Avoid domains that only make sense with an explanation, that are hard to say out loud without spelling them, or that depend on a trendy extension (.io, .co, .biz) that might not exist or be trusted in a few years the way .com and .mx reliably will. A domain chosen for being clever today can become a liability once nobody remembers the joke, or once the novelty extension starts looking dated instead of fresh.",
        ],
        bodyEs: [
          "Evita dominios que solo tienen sentido con una explicación, que son difíciles de decir en voz alta sin deletrearlos, o que dependen de una extensión de moda (.io, .co, .biz) que podría no existir o no inspirar confianza en unos años de la forma confiable en que sí lo harán .com y .mx. Un dominio elegido por ser ingenioso hoy puede volverse un lastre cuando ya nadie recuerda el chiste, o cuando la extensión novedosa empieza a verse desactualizada en vez de fresca.",
        ],
      },
      {
        id: "que-pasa-si-ya-esta-tomado",
        heading: "What if the ideal domain is already taken",
        headingEs: "Qué pasa si el dominio ideal ya está tomado",
        body: [
          "Adding a relevant, short word (the city, the core service, e.g. tunegocio-ensenada.com instead of tunegocio2024.com) usually works better than adding a random number or an unrelated word just to make it available. Buying an already-registered but unused domain from its owner is also an option, prices vary widely (anywhere from a few hundred to several thousand pesos) but it's worth pricing out before settling for a weaker alternative.",
        ],
        bodyEs: [
          "Agregar una palabra relevante y corta (la ciudad, el servicio principal, por ejemplo tunegocio-ensenada.com en vez de tunegocio2024.com) suele funcionar mejor que agregar un número al azar o una palabra sin relación solo para que quede disponible. Comprarle a su dueño un dominio ya registrado pero sin uso también es una opción, los precios varían mucho (desde unos cuantos cientos hasta varios miles de pesos) pero vale la pena cotizarlo antes de conformarse con una alternativa más débil.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Es mejor un dominio .com o .mx?",
        qEn: "Is a .com or a .mx domain better?",
        a: "Depende del negocio. Un .mx refuerza que el negocio es local mexicano, mientras que un .com transmite un alcance más amplio. Ambos cuestan de forma similar (entre $200 y $450 MXN al año), así que si el presupuesto lo permite, registrar ambos es la opción más segura.",
        aEn: "It depends on the business. A .mx reinforces that the business is local Mexican, while a .com conveys broader reach. Both cost similarly (between $200 and $450 MXN per year), so if budget allows, registering both is the safest option.",
      },
      {
        q: "¿Puedo cambiar mi dominio después si elijo mal?",
        qEn: "Can I change my domain later if I choose wrong?",
        a: "Sí, pero implica perder autoridad de SEO acumulada y confundir a clientes que ya conocen el dominio anterior. Es mucho más barato elegir bien desde el inicio (menos de $1,000 MXN al año por ambas extensiones) que migrar después.",
        aEn: "Yes, but it means losing accumulated SEO authority and confusing customers who already know the old domain. It's far cheaper to choose well from the start (under $1,000 MXN a year for both extensions) than to migrate later.",
      },
      {
        q: "¿Debo incluir palabras clave de mi servicio en el dominio?",
        qEn: "Should I include service keywords in the domain?",
        a: "Puede ayudar un poco, pero no es tan importante como que el dominio sea corto, fácil de decir, y coincida con el nombre real del negocio.",
        aEn: "It can help a little, but it's not as important as the domain being short, easy to say, and matching the business's actual name.",
      },
      {
        q: "¿Qué hago si el dominio que quiero ya está tomado?",
        qEn: "What do I do if the domain I want is already taken?",
        a: "Agrega una palabra corta y relevante, como la ciudad o el servicio principal, en vez de un número al azar. También puedes intentar comprarle el dominio a su dueño actual, con precios que van desde unos cientos hasta varios miles de pesos.",
        aEn: "Add a short, relevant word, like the city or main service, instead of a random number. You can also try buying the domain from its current owner, with prices ranging from a few hundred to several thousand pesos.",
      },
    ],
    schema: {
      keywords: ["how to choose a domain name", "domain name for business", ".mx vs .com domain"],
      keywordsEs: ["como elegir un dominio", "dominio para mi negocio", "dominio mx o com"],
    },
  },
  {
    slug: "cuando-redisenar-pagina-web",
    title: "When Should You Redesign Your Website? 8 Clear Signs",
    titleEs: "¿Cuándo Rediseñar tu Página Web? 8 Señales Claras",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "Eight measurable triggers: a PageSpeed score under 50, a bounce rate that's climbed over several months, a site that isn't mobile-friendly under Google's test, and five more.",
    excerptEs:
      "Ocho señales medibles: un puntaje de PageSpeed por debajo de 50, una tasa de rebote que subió durante varios meses, un sitio que no pasa la prueba de compatibilidad móvil de Google, y cinco más.",
    readingTime: 5,
    date: "2026-10-06",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "A website doesn't need a redesign just because a few years have passed, it needs one when specific, measurable signals show up: a PageSpeed score consistently under 50, a bounce rate trending upward over several months in Google Analytics, or a site that fails Google's own mobile-friendliness test. Eight concrete triggers, not a vague feeling that the site \"looks old.\"",
    ledeEs:
      'Una página web no necesita rediseñarse solo porque pasaron unos cuantos años, necesita rediseñarse cuando aparecen señales específicas y medibles: un puntaje de PageSpeed consistentemente por debajo de 50, una tasa de rebote con tendencia al alza durante varios meses en Google Analytics, o un sitio que no pasa la propia prueba de compatibilidad móvil de Google. Ocho disparadores concretos, no una sensación vaga de que el sitio "se ve viejo".',
    sections: [
      {
        id: "las-senales-de-conversion",
        heading: "Falling conversion rates, tracked over time",
        headingEs: "Tasas de conversión que bajan, medidas con el tiempo",
        body: [
          "If leads or sales from the site have been declining for three months or more without an obvious external cause (seasonality, a paused ad campaign), the site itself is a reasonable place to look, and Google Analytics' own conversion reports make the trend visible without guesswork. Visual design that clearly looks dated compared to competitors also sends a quiet signal of being behind, even if the visitor can't articulate exactly why the site feels off, but a measurable drop in the data is the stronger signal to act on first.",
        ],
        bodyEs: [
          "Si los leads o ventas que llegan del sitio han venido bajando durante tres meses o más sin una causa externa obvia (estacionalidad, una campaña de anuncios pausada), el sitio mismo es un lugar razonable dónde buscar, y los propios reportes de conversión de Google Analytics hacen visible la tendencia sin necesidad de adivinar. Un diseño visual que claramente se ve desactualizado frente a la competencia también manda una señal silenciosa de estar atrasado, aunque el visitante no sepa articular exactamente por qué el sitio se siente mal, pero una caída medible en los datos es la señal más fuerte sobre la cual actuar primero.",
        ],
      },
      {
        id: "problemas-tecnicos-recurrentes",
        heading: "Recurring, measurable technical problems",
        headingEs: "Problemas técnicos recurrentes y medibles",
        body: [
          "A PageSpeed Insights score consistently under 50, a failing result on Google's Mobile-Friendly Test, or a site that's become difficult to update without a developer are all specific, checkable signals that the technical foundation itself has become the limiting factor, not just a cosmetic one. Any of these three can be checked in under five minutes with free tools, no audit required to get a first read.",
        ],
        bodyEs: [
          "Un puntaje de PageSpeed Insights consistentemente por debajo de 50, un resultado fallido en la Prueba de Compatibilidad Móvil de Google, o un sitio que se ha vuelto difícil de actualizar sin un desarrollador son señales específicas y verificables de que la base técnica misma se convirtió en el factor limitante, no solo algo cosmético. Cualquiera de estas tres se puede revisar en menos de cinco minutos con herramientas gratuitas, sin necesidad de una auditoría para tener una primera lectura.",
        ],
      },
      {
        id: "el-negocio-ya-cambio",
        heading: "The business itself has changed",
        headingEs: "El negocio mismo ya cambió",
        body: [
          "New services, a different target audience, a rebrand, or expansion into new markets that the site doesn't reflect at all is one of the clearest redesign triggers, and unlike the technical signals, it doesn't need a tool to detect, just an honest read of whether the current site describes the business as it operates today. A site describing a business as it was two years ago actively misrepresents what a visitor will actually get.",
        ],
        bodyEs: [
          "Nuevos servicios, una audiencia objetivo distinta, un cambio de marca, o una expansión a mercados nuevos que el sitio no refleja en absoluto es uno de los disparadores más claros de rediseño, y a diferencia de las señales técnicas, no necesita una herramienta para detectarse, solo una lectura honesta de si el sitio actual describe al negocio como opera hoy. Un sitio que describe al negocio como era hace dos años representa activamente mal lo que un visitante en realidad va a recibir.",
        ],
      },
      {
        id: "cuando-no-hace-falta-redisenar",
        heading: "When a redesign genuinely isn't needed",
        headingEs: "Cuándo un rediseño en realidad no hace falta",
        body: [
          "If PageSpeed scores above 70, the site passes the mobile-friendly test, conversion rates are flat or improving, and the site still accurately represents the business, age alone isn't a reason to rebuild it. Targeted updates (fresh copy, updated photos, a refreshed section) often solve the actual problem for a fraction of a full redesign's cost, roughly $6,000-$15,000 MXN for content and design touch-ups versus $25,000 MXN and up for a full rebuild.",
        ],
        bodyEs: [
          "Si PageSpeed marca arriba de 70, el sitio pasa la prueba de compatibilidad móvil, las tasas de conversión están estables o mejorando, y el sitio sigue representando bien al negocio, la edad por sí sola no es razón para reconstruirlo. Las actualizaciones puntuales (copy nuevo, fotos actualizadas, una sección renovada) muchas veces resuelven el problema real por una fracción del costo de un rediseño completo, aproximadamente $6,000 a $15,000 MXN por retoques de contenido y diseño contra $25,000 MXN en adelante por una reconstrucción completa.",
        ],
      },
      {
        id: "como-decidir-entre-refresh-y-rediseno",
        heading: "How to decide between a refresh and a full redesign",
        headingEs: "Cómo decidir entre un refresh y un rediseño completo",
        body: [
          "A refresh fits when PageSpeed and mobile-friendliness scores are healthy and the problems are cosmetic or content-related. A full redesign fits when the technical foundation itself is failing those same checks, or when the business has changed enough that the entire structure no longer matches what it needs to communicate. Running the PageSpeed and Mobile-Friendly tests first, before deciding, turns this into a five-minute data check instead of a guess.",
        ],
        bodyEs: [
          "Un refresh encaja cuando los puntajes de PageSpeed y compatibilidad móvil están sanos y los problemas son cosméticos o de contenido. Un rediseño completo encaja cuando la base técnica misma está fallando esas mismas pruebas, o cuando el negocio cambió lo suficiente como para que toda la estructura ya no coincida con lo que necesita comunicar. Correr las pruebas de PageSpeed y Compatibilidad Móvil primero, antes de decidir, convierte esto en una revisión de datos de cinco minutos en vez de una suposición.",
        ],
      },
    ],
    gradient: "from-zinc-700 to-neutral-950",
    faq: [
      {
        q: "¿Cada cuánto tiempo debería rediseñar mi página web?",
        qEn: "How often should I redesign my website?",
        a: "No hay un plazo fijo. La señal real es si el sitio pasa las pruebas técnicas (PageSpeed arriba de 70, compatible con móvil) y sigue convirtiendo bien, no una cantidad de años determinada.",
        aEn: "There's no fixed timeframe. The real signal is whether the site passes technical checks (PageSpeed above 70, mobile-friendly) and still converts well, not a set number of years.",
      },
      {
        q: "¿Un rediseño completo siempre es la mejor opción?",
        qEn: "Is a full redesign always the best option?",
        a: "No. Si la base técnica sigue funcionando bien, actualizaciones puntuales de contenido y diseño (unos $6,000 a $15,000 MXN) suelen resolver el problema por mucho menos costo que un rediseño completo.",
        aEn: "No. If the technical foundation is still working well, targeted content and design updates (roughly $6,000-$15,000 MXN) usually solve the problem for far less than a full redesign.",
      },
      {
        q: "¿Cómo sé si mis problemas son técnicos o de diseño?",
        qEn: "How do I know if my problems are technical or design-related?",
        a: "Corre PageSpeed Insights y la Prueba de Compatibilidad Móvil de Google, ambas gratis. Si fallan, es técnico. Si el sitio pasa esas pruebas pero no convierte, suele ser un problema de copy, jerarquía visual o estructura de conversión.",
        aEn: "Run PageSpeed Insights and Google's Mobile-Friendly Test, both free. If they fail, it's technical. If the site passes those tests but doesn't convert, it's usually a copy, visual hierarchy, or conversion structure problem.",
      },
      {
        q: "¿Perderé mi posicionamiento SEO si rediseño mi sitio?",
        qEn: "Will I lose my SEO rankings if I redesign my site?",
        a: "Es un riesgo real si no se planea con cuidado, especialmente si cambian las URLs. Un rediseño bien ejecutado mantiene las redirecciones 301 y la estructura SEO existente en vez de empezar de cero.",
        aEn: "It's a real risk if not planned carefully, especially if URLs change. A well-executed redesign preserves 301 redirects and existing SEO structure instead of starting from zero.",
      },
    ],
    schema: {
      keywords: ["when to redesign website", "website redesign signs", "PageSpeed score"],
      keywordsEs: ["cuando redisenar pagina web", "señales de rediseño web", "puntaje pagespeed"],
    },
  },
];

export type BlogCategory = { key: string; en: string; es: string };

export const BLOG_CATEGORIES: BlogCategory[] = Array.from(
  new Map(
    BLOG_POSTS.map((p) => [p.category, { key: p.category, en: p.category, es: p.categoryEs }]),
  ).values(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);

  const sameCategory = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = BLOG_POSTS.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export function postTitle(post: BlogPost, lang: Lang): string {
  return lang === "es" ? post.titleEs : post.title;
}

export function postExcerpt(post: BlogPost, lang: Lang): string {
  return lang === "es" ? post.excerptEs : post.excerpt;
}

export function postCategory(post: BlogPost, lang: Lang): string {
  return lang === "es" ? post.categoryEs : post.category;
}

export function postLede(post: BlogPost, lang: Lang): string {
  return lang === "es" ? post.ledeEs : post.lede;
}

export function postAuthorRole(post: BlogPost, lang: Lang): string {
  return lang === "es" ? post.authorRoleEs : post.authorRole;
}

export function formatPostDate(date: string, lang: Lang): string {
  const d = new Date(`${date}T12:00:00Z`);
  return new Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

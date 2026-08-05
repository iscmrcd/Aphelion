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
    slug: "cuanto-cuesta-seo-mexico",
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
          "Negocios locales (una ciudad, competencia baja o media) suelen pagar $8,000–$15,000 MXN/mes. E-commerce nacional o servicios con competencia real están en $18,000–$35,000 MXN/mes. Empresas grandes o categorías muy competidas — legal, finanzas, desarrolladoras inmobiliarias — corren desde $40,000 MXN/mes, muchas veces con presupuesto de contenido aparte de la tarifa base.",
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
          "Pide una muestra de auditoría técnica, casos reales con números de tráfico e ingresos (no solo capturas de rankings), y un cronograma honesto. El SEO toma mínimo 4 a 6 meses para mostrar movimiento real, y 9 a 12 meses para acumular resultados. Si una propuesta promete resultados en tres semanas, está prometiendo otra cosa — normalmente tráfico pagado disfrazado de orgánico.",
        ],
      },
    ],
    gradient: "from-neutral-800 to-neutral-950",
    faq: [
      {
        q: "¿Cuánto tiempo toma ver resultados de SEO?",
        qEn: "How long does it take to see SEO results?",
        a: "El SEO técnico y de estructura empieza a mostrar movimiento en 4 a 6 meses, pero los resultados que realmente importan — tráfico calificado y conversiones — se acumulan entre 9 y 12 meses. Cualquier agencia que prometa el primer lugar en tres semanas está vendiendo otra cosa, normalmente tráfico pagado disfrazado. La paciencia no es opcional en SEO, es parte del modelo.",
        aEn: "Technical and structural SEO starts showing movement in 4 to 6 months, but the results that actually matter — qualified traffic and conversions — compound over 9 to 12 months. Any agency promising a first-page ranking in three weeks is selling something else, usually paid traffic dressed up as organic. Patience isn't optional in SEO, it's part of the model.",
      },
      {
        q: "¿El SEO vale la pena para un negocio pequeño o solo para empresas grandes?",
        qEn: "Is SEO worth it for a small business or only for large companies?",
        a: "Vale la pena para negocios de cualquier tamaño, pero el retorno es más rápido y barato para negocios locales con competencia baja o media — un plomero en Ensenada puede posicionar en semanas lo que a una fintech nacional le toma un año. La clave es ajustar el alcance: no necesitas competir a nivel nacional si tu negocio solo atiende una ciudad. Un negocio pequeño con SEO bien enfocado suele ganarle a uno grande con presupuesto disperso.",
        aEn: "It's worth it for businesses of any size, but the return is faster and cheaper for local businesses with low-to-medium competition — a plumber in Ensenada can rank in weeks for something a national fintech takes a year to achieve. The key is matching scope to reality: you don't need to compete nationally if your business only serves one city. A small business with tightly focused SEO often beats a large one with scattered budget.",
      },
      {
        q: "¿Qué pasa si dejo de pagar SEO después de unos meses?",
        qEn: "What happens if I stop paying for SEO after a few months?",
        a: "A diferencia de los anuncios pagados, que se apagan el mismo día que dejas de pagar, el contenido y las mejoras técnicas de SEO no desaparecen de inmediato — el sitio conserva parte de su posicionamiento por un tiempo. Pero sin mantenimiento, los competidores que sí siguen invirtiendo eventualmente te rebasan, y el contenido se vuelve obsoleto. Piénsalo como ejercicio: dejar de entrenar no borra el músculo de inmediato, pero tampoco lo mantiene.",
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
        a: "Pide acceso completo a tu propio Google Search Console y Analytics — si la agencia se resiste, es una señal de alerta. Pide casos reales con números de tráfico e ingresos, no solo capturas de rankings. Pide un cronograma honesto de 4 a 12 meses, y pide que te expliquen en qué se va cada peso del presupuesto: contenido, enlaces, técnico. Un proveedor serio no tiene problema en mostrar su trabajo.",
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
      "Un sitio web básico con plantilla en México cuesta entre $6,000 y $15,000 MXN. Un sitio profesional a medida va de $25,000 a $60,000 MXN. Una plataforma de captación o e-commerce arranca en $80,000 MXN. La diferencia no es el diseño — es la estrategia, el copy, la configuración de conversión y si el sitio está realmente construido para vender.",
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
          "La cotización que recibes casi nunca es el costo total de tenencia. Dominio y hosting cuestan $1,500–$6,000 MXN/año según el tráfico. Fotografía o video profesional para el sitio puede sumar $10,000–$30,000 MXN. El copywriting, si no está incluido, es otra línea. Y el mantenimiento — actualizaciones de seguridad, respaldos, cambios menores — debe presupuestarse en $1,500–$4,000 MXN/mes, no tratarse como una sorpresa.",
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
          "Wix, Squarespace y constructores similares tienen sentido para un sitio de nivel Presencial con presupuesto ajustado y sin ambición de crecer más allá de eso. En el momento en que necesitas control real de SEO, lógica de conversión a medida, integraciones con un CRM, o un sitio que pueda escalar a un sistema, los constructores con plantilla se vuelven el techo en vez del punto de partida — y migrar fuera de ellos después cuesta más que construir a medida desde el día uno.",
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
          "Pregunta cuál es el trabajo del sitio. Si es una tarjeta digital para referidos, con Presencial basta. Si la gente te investiga antes de llamar, Profesional. Si estás invirtiendo activamente en anuncios y necesitas que el sitio convierta ese tráfico, Captación o Automatizada. Si procesas transacciones o administras clientes desde el propio sitio, estás en territorio de Sistema Comercial o SaaS — y esa es una conversación de presupuesto completamente distinta.",
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
          "Los precios varían menos por región de lo que la gente espera — un sitio de nivel Profesional cuesta más o menos lo mismo sin importar si la agencia está en Ciudad de México, Guadalajara o una ciudad más pequeña como Ensenada, porque el trabajo (estrategia, diseño, desarrollo) se entrega remoto de cualquier forma. Lo que sí varía por región es el costo de extras que requieren presencia local, como fotografía de producto en sitio o consultas presenciales, que suelen ser más baratas fuera de las grandes zonas metropolitanas.",
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
        a: "Sí, y no son lo mismo. Las redes sociales las controla la plataforma — pueden cambiar el algoritmo, suspender tu cuenta, o simplemente dejar de mostrarte a tus seguidores. Tu sitio web es el único activo digital que realmente te pertenece y controlas por completo. Además, para negocios de servicios o alto valor, un sitio profesional sigue siendo la referencia que la gente busca antes de confiar en ti.",
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
        a: "Sí, siempre y cuando esté construido sobre una base que pueda crecer. El problema no es empezar simple — es empezar con un constructor DIY con plantillas cerradas que después tienes que reconstruir desde cero para escalar. Si desde el inicio usas una arquitectura que permite agregar formularios, integraciones o un sistema de pagos, subir de nivel es una extensión, no una reconstrucción.",
        aEn: "Yes, as long as it's built on a foundation that can grow. The problem isn't starting simple — it's starting on a DIY builder with closed templates that you later have to rebuild from scratch to scale. If you start with an architecture that allows adding forms, integrations or a payment system, upgrading is an extension, not a rebuild.",
      },
      {
        q: "¿Qué pasa si ya tengo un sitio y solo quiero un rediseño?",
        qEn: "What if I already have a site and just want a redesign?",
        a: "Un rediseño real no es solo cambiar colores y fotos — es la oportunidad de corregir estructura, velocidad y conversión al mismo tiempo. Antes de rediseñar, vale la pena auditar qué páginas ya generan tráfico o leads, para no perder ese posicionamiento en el proceso. El costo de un rediseño suele ser similar al de un sitio Profesional nuevo, porque el trabajo de estrategia y copy es prácticamente el mismo.",
        aEn: "A real redesign isn't just changing colors and photos — it's the chance to fix structure, speed and conversion at the same time. Before redesigning, it's worth auditing which pages already generate traffic or leads, so you don't lose that ranking in the process. A redesign's cost is usually similar to a new Professional-tier site, because the strategy and copywriting work is nearly the same.",
      },
      {
        q: "¿Cómo evito pagar de más por funciones que no voy a usar?",
        qEn: "How do I avoid overpaying for features I won't use?",
        a: "Define primero cuál es el trabajo del sitio — ¿es una tarjeta de presentación, o necesita vender o capturar leads directamente? La mayoría del sobrecosto viene de comprar el nivel Comercial o SaaS cuando el negocio en realidad necesita un sitio Profesional. Pide que te expliquen qué nivel corresponde a tu objetivo actual, no al que podrías tener en tres años.",
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
      "Google Ads gana cuando la gente ya busca lo que vendes — plomeros, abogados, SaaS con categoría conocida. Meta Ads gana cuando necesitas interrumpir la atención y generar deseo — productos nuevos, bienes raíces de alto valor, cualquier cosa visual. La mayoría de los negocios necesita ambos eventualmente, pero rara vez al mismo tiempo o con el mismo reparto de presupuesto.",
    sections: [
      {
        id: "intencion-vs-interrupcion",
        heading: "Intent vs. interruption",
        headingEs: "Intención vs. interrupción",
        body: [
          'This is the core distinction. Google Ads shows up when someone is already looking — they typed "plomero urgente CDMX" because they have a leak right now. Meta Ads shows up while someone is scrolling, with no active intent — you have to earn their attention with the creative itself. One platform meets demand, the other manufactures it. Confusing the two is where most ad budgets get wasted.',
        ],
        bodyEs: [
          'Esta es la distinción central. Google Ads aparece cuando alguien ya está buscando — escribió "plomero urgente CDMX" porque tiene una fuga ahora mismo. Meta Ads aparece mientras alguien navega sin intención activa — tienes que ganarte su atención con el propio creativo. Una plataforma responde a demanda, la otra la fabrica. Confundir las dos es donde se desperdicia la mayoría del presupuesto publicitario.',
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
          "Google Ads es la mejor primera opción cuando tu categoría tiene volumen de búsqueda claro, cuando vendes algo que la gente investiga antes de comprar (legal, médico, software B2B), o cuando la compra es urgente y local. Si nadie está buscando lo que haces por nombre o categoría, Google Ads no tiene nada que interceptar — ningún presupuesto arregla un problema de demanda.",
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
          "Meta Ads es la mejor primera opción para productos visuales, aspiracionales o de categoría nueva — desarrollos inmobiliarios, restaurantes, moda, cualquier cosa donde verlo es lo que vende. También gana en segmentación precisa por interés, comportamiento o audiencias similares construidas a partir de tus clientes actuales, algo que el modelo de intención de búsqueda de Google no puede replicar.",
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
          "Como rango aproximado para 2026: los leads de servicios locales en Google Ads cuestan entre $150 y $600 MXN cada uno según la competencia de la categoría. Las campañas de formulario de leads en Meta suelen salir más bajas por lead ($80–$350 MXN) pero con menor intención de compra, lo que implica más trabajo de seguimiento para calificarlos. Las categorías de alto valor — bienes raíces, médico, legal — cuestan más en ambas plataformas y deben medirse por costo por lead calificado, no por costo por clic bruto.",
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
        a: "Google Ads suele mostrar resultados más rápido porque intercepta una búsqueda activa — la persona ya decidió que necesita algo, solo falta que te encuentre. Meta Ads necesita más tiempo para que el algoritmo aprenda a quién mostrarle tu anuncio y para que la audiencia desarrolle interés, generalmente de dos a cuatro semanas de optimización antes de estabilizarse.",
        aEn: "Google Ads usually shows results faster because it intercepts an active search — the person already decided they need something, they just need to find you. Meta Ads needs more time for the algorithm to learn who to show your ad to and for the audience to develop interest, typically two to four weeks of optimization before it stabilizes.",
      },
      {
        q: "¿Necesito un sitio web para anunciarme, o puedo usar solo la página de Facebook o Instagram?",
        qEn: "Do I need a website to advertise, or can I just use my Facebook or Instagram page?",
        a: "Puedes lanzar campañas de Meta dirigiendo tráfico a un formulario nativo de la plataforma sin sitio web, y funciona para volumen de leads. Pero para Google Ads casi siempre necesitas una landing page — no puedes anunciarte para una búsqueda específica y mandar a la gente a un perfil genérico de redes sociales. Un sitio propio también te da control total de la conversión y de los datos, algo que la plataforma no te va a dar.",
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
        a: "Pregúntate si la gente ya busca activamente lo que vendes por nombre o categoría — si sí, empieza en Google. Si tu producto es visual, nuevo en el mercado, o depende de generar deseo antes de que exista la búsqueda, empieza en Meta. Si no estás seguro, revisa el volumen de búsqueda de tu categoría en Google Keyword Planner: si hay volumen real, ahí está tu respuesta.",
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
    slug: "errores-google-ads",
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
      "La mayor parte del presupuesto desperdiciado en Google Ads en México viene de palabras clave en concordancia amplia sin negativas, Smart Campaigns en piloto automático y landing pages que no coinciden con la intención de búsqueda. Corregir solo estos tres suele recuperar 20–40% del gasto en el primer ciclo de facturación.",
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
          "Este informe muestra las frases exactas que activaron tus anuncios — y es la herramienta menos usada en la mayoría de las cuentas. Revisarlo semanalmente y agregar negativas es la forma más rápida y barata de mejorar el ROAS. Las cuentas que no han tocado este informe en meses casi siempre están desperdiciando presupuesto en tráfico irrelevante.",
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
          "Si no le puedes decir a Google qué clics se convirtieron en llamadas, formularios o ventas, su algoritmo de puja está optimizando a ciegas — y tú también. El seguimiento de conversiones roto o inexistente es el problema más común que encontramos en las auditorías de cuenta, e invalida cualquier otra optimización hasta que se corrige.",
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
          "Algunas cuentas gastan todo su presupuesto defendiendo búsquedas de marca — gente que ya conocía tu nombre e iba a darle clic de todas formas. Eso no es crecimiento, es un seguro. Una cuenta sana destina presupuesto real a términos de categoría y competencia donde realmente se captura demanda nueva.",
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
          "Esta es la causa raíz detrás de los otros nueve errores. Google Ads no es una configuración de una sola vez — es un canal que necesita atención semanal para mantenerse eficiente mientras cambian la competencia, la estacionalidad y tu propio negocio. Las cuentas que se revisan mensualmente en vez de semanalmente rinden consistentemente menos que las cuentas administradas con cadencia real.",
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
        a: "Como mínimo, una revisión semanal de 20 a 30 minutos: términos de búsqueda, gasto por campaña y conversiones. Una revisión más profunda — pausar anuncios débiles, ajustar pujas, probar copy nuevo — cada dos a cuatro semanas. Las cuentas que se revisan mensualmente en vez de semanalmente casi siempre rinden peor, porque los problemas se acumulan antes de detectarse.",
        aEn: "At minimum, a weekly 20-to-30-minute review: search terms, spend per campaign, and conversions. A deeper review — pausing weak ads, adjusting bids, testing new copy — every two to four weeks. Accounts reviewed monthly instead of weekly almost always underperform, because problems pile up before they're caught.",
      },
      {
        q: "¿Puedo administrar Google Ads yo mismo o necesito contratar a alguien?",
        qEn: "Can I manage Google Ads myself or do I need to hire someone?",
        a: "Con presupuestos pequeños y una sola categoría de producto, es posible administrarlo tú mismo si dedicas tiempo real cada semana a revisarlo. El punto donde vale la pena contratar ayuda es cuando el presupuesto mensual supera lo que estás dispuesto a perder mientras aprendes, o cuando ya no tienes las horas para darle seguimiento constante — que es, en la práctica, la mayoría de los negocios.",
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
          "El marketing inmobiliario no es anunciar un listado — es el sistema completo que mueve a un desconocido desde ver un anuncio hasta firmar un contrato. Ese sistema tiene cuatro partes conectadas: tráfico (llevar a la gente correcta a ver la propiedad), captación (convertir a un visitante en un contacto), seguimiento (responder lo suficientemente rápido para seguir presente), y nutrición (mantenerse frente a compradores que aún no están listos). La mayoría de las agencias y desarrolladoras solo construyen bien una o dos de estas partes, por eso hay campañas que generan muchos clics pero pocos cierres.",
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
          "Tráfico sin captación desperdicia el gasto publicitario en visitantes que se van y no vuelven. Captación sin seguimiento desperdicia el lead que ya pagaste. Seguimiento sin nutrición desperdicia a todo comprador que no estaba listo el primer día — que, en bienes raíces, es la mayoría. Los negocios que ganan no son los que tienen el presupuesto publicitario más grande; son los que no tienen fugas en ninguna de las cuatro etapas.",
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
          'Meta Ads funciona mejor para venta visual y de estilo de vida, y para preventas donde todavía no hay nada construido — renders y tomas de dron generan deseo antes de que exista la búsqueda. Google Ads captura compradores que ya buscan por zona o tipo de propiedad. Portales como Inmuebles24 y Vivanuncios generan volumen con menor intención, y funcionan mejor como fuente de la parte alta del embudo que alimenta tu propio retargeting, no como destino final. Revisa cómo desglosamos cuánto invertir en cada canal en nuestra guía de "cuánto invertir en marketing inmobiliario."',
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
          'Una página de propiedad que muestra todo gratis — cada foto, la lista de precios completa, cada lote disponible — no le da al visitante ninguna razón para dejar su contacto. Para desarrollos de terrenos y preventas específicamente, un mapa interactivo de lotes que permite a los compradores explorar disponibilidad y precios en tiempo real convierte dramáticamente mejor que un PDF estático, porque convierte el navegar en una acción. Cubrimos exactamente cómo funcionan estos mapas en "mapas interactivos de lotes."',
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
          'No todos los leads merecen el mismo seguimiento. Clasificamos cada lead inmobiliario en una de cuatro categorías: hot (listo para agendar una visita esta semana), warm (interesado pero comparando opciones), cold (investigación temprana, a meses de decidir), y ghost (dejó de responder por completo). Cada categoría recibe una cadencia y un guion distintos — tratar a un lead cold como uno hot desgasta la relación, y tratar a un lead hot como uno cold pierde la venta contra quien llame primero. Los guiones y tiempos completos están en "seguimiento de leads inmobiliarios."',
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
          "El ciclo de venta inmobiliario dura semanas o meses, lo que significa que la mayoría de los leads no cierran en la primera llamada — cierran por presencia constante en el tiempo. Todo lead necesita un hogar en un CRM con una secuencia de nutrición automatizada: inventario nuevo que coincida con sus criterios, actualizaciones de mercado y un contacto humano cada una o dos semanas. Los leads que se caen de una hoja de cálculo después de la primera llamada perdida son leads que ya pagaste y tiraste a la basura.",
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
          "Cuando todavía no hay nada construido, la venta ocurre por completo en la imaginación del comprador — lo que significa que el contenido tiene que hacer el trabajo que normalmente haría una propiedad terminada. Tomas de dron del terreno y los alrededores, renders 3D del producto final y una narrativa clara de las fases y el cronograma del proyecto son lo que convierte el interés en un apartado. Los desarrollos que se saltan este paso y dependen solo de planos y listas de precios venden consistentemente más lento que los que invierten en producción real.",
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
          "Los tres que vemos más seguido: mostrar todo el listado antes de capturar el contacto, así que no hay razón para dejar nombre y teléfono; correr anuncios sin CRM, así que los leads viven y mueren en un chat de WhatsApp sin estructura de seguimiento; y tratar a todos los leads igual sin importar qué tan listos estén para comprar. Cada uno de estos se puede corregir en semanas, no meses — el sistema no necesita ser perfecto, solo necesita tener cubierta cada etapa.",
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cuánto cuesta un sistema completo de marketing inmobiliario?",
        qEn: "How much does a complete real estate marketing system cost?",
        a: "Como rango de mercado para 2026, un sistema completo — tráfico pagado, landing page, CRM y seguimiento — corre entre $15,000 y $25,000 MXN mensuales para un desarrollo mediano, sin contar el costo único de construir la infraestructura digital. Categorías premium o preventas grandes suelen costar más porque el costo por lead calificado es mayor. El desglose completo por canal está en nuestra guía de cuánto invertir en marketing inmobiliario.",
        aEn: "As a 2026 market range, a complete system — paid traffic, landing page, CRM and follow-up — runs between $15,000 and $25,000 MXN per month for a mid-size development, not counting the one-time cost of building the digital infrastructure. Premium categories or large pre-sales usually cost more because cost per qualified lead is higher. The full channel-by-channel breakdown is in our guide on how much to invest in real estate marketing.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados con marketing inmobiliario?",
        qEn: "How long does it take to see results with real estate marketing?",
        a: "El tráfico pagado puede generar los primeros leads en la primera semana, pero el ciclo de venta inmobiliario completo — de primer contacto a contrato firmado — suele correr de varias semanas a varios meses según el ticket. Por eso el sistema necesita nutrición constante, no solo generación de leads: la mayoría de los cierres vienen de leads que llevan un tiempo en seguimiento, no de la primera llamada.",
        aEn: "Paid traffic can generate the first leads within the first week, but the full real estate sales cycle — from first contact to signed contract — usually runs from several weeks to several months depending on the price point. That's why the system needs constant nurture, not just lead generation: most closings come from leads that have been in follow-up for a while, not from the first call.",
      },
      {
        q: "¿Necesito una agencia especializada en inmobiliario o cualquier agencia de marketing sirve?",
        qEn: "Do I need a real estate-specialized agency, or will any marketing agency work?",
        a: "Cualquier agencia puede correr anuncios, pero el marketing inmobiliario tiene particularidades — ciclos de venta largos, tickets altos, y la necesidad de clasificar leads por qué tan listos están para comprar — que una agencia generalista no siempre entiende de entrada. Vale la pena preguntar directamente por casos reales en el sector inmobiliario, no solo experiencia general en publicidad.",
        aEn: "Any agency can run ads, but real estate marketing has particularities — long sales cycles, high price points, and the need to classify leads by how ready they are to buy — that a generalist agency doesn't always understand out of the gate. It's worth directly asking for real case studies in the real estate sector, not just general advertising experience.",
      },
      {
        q: "¿Funciona igual para preventa que para inventario terminado?",
        qEn: "Does it work the same for pre-sales as for finished inventory?",
        a: "No del todo. En preventa, el contenido tiene que generar deseo sin tener un producto físico que mostrar — ahí es donde el video, los renders y los mapas interactivos de lotes hacen el trabajo pesado. Con inventario terminado, la gente puede buscar y verificar directamente, así que Google Ads y contenido con fotos reales del producto suelen rendir mejor.",
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
      "Generar leads inmobiliarios es un sistema de tres partes: tráfico pagado dirigido a intención de compra, una experiencia de aterrizaje que captura el contacto antes de revelar todo el listado, y una respuesta automática en los primeros cinco minutos de la primera consulta. Si falta una de las tres, las otras dos pierden casi todo su valor — el tráfico sin captación solo sube tu costo publicitario.",
    sections: [
      {
        id: "canales-que-funcionan",
        heading: "Which channels actually generate leads",
        headingEs: "Qué canales realmente generan leads",
        body: [
          "Meta Ads generates volume through visual, interruption-based selling — video walkthroughs and drone footage that stop the scroll of people who weren't actively searching yet. Google Ads captures buyers already searching by area or property type, at a higher cost per click but with stronger intent. Portals like Inmuebles24 and Vivanuncios add volume but weaker intent, and work best feeding your own retargeting rather than as a final destination. Most developments need at least two of the three to keep a full pipeline.",
        ],
        bodyEs: [
          "Meta Ads genera volumen a través de venta visual e interruptiva — recorridos en video y tomas de dron que detienen el scroll de gente que aún no buscaba activamente. Google Ads captura compradores que ya buscan por zona o tipo de propiedad, con un costo por clic más alto pero mayor intención. Portales como Inmuebles24 y Vivanuncios suman volumen con menor intención, y funcionan mejor alimentando tu propio retargeting que como destino final. La mayoría de los desarrollos necesita al menos dos de los tres para mantener un flujo completo.",
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
          "Una página de propiedad que muestra cada foto, la lista de precios completa y el plano sin pedir nada a cambio no le da al visitante ninguna razón para dejar su contacto. El orden que convierte: una imagen principal fuerte y un gancho de una línea, un formulario corto arriba del pliegue, y luego la galería completa y los precios abajo como recompensa por interactuar. Este solo cambio — reordenar qué es gratis y qué se gana — suele ser el ajuste de mayor impacto en una página de listado de bajo rendimiento.",
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
          'Los leads inmobiliarios se enfrían rápido, porque los compradores suelen estar viendo varios desarrollos en la misma sesión. Un lead contactado en cinco minutos convierte dramáticamente mejor que uno contactado una hora después. Eso significa una respuesta automática por WhatsApp o SMS en el momento en que se envía el formulario, seguida de una llamada humana dentro de la misma ventana — no una devolución de llamada agendada para más tarde. Los guiones y la cadencia completa por tipo de lead están en "seguimiento de leads inmobiliarios."',
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
        a: "Puedes empezar con herramientas simples si el volumen es bajo, pero en cuanto manejas más de unos cuantos leads a la semana, un CRM se vuelve indispensable — sin uno, los leads se pierden entre conversaciones y nadie sabe con certeza a quién le toca dar seguimiento.",
        aEn: "You can start with simple tools if volume is low, but once you're handling more than a few leads a week, a CRM becomes essential — without one, leads get lost between conversations and nobody's sure who's responsible for following up.",
      },
      {
        q: "¿Qué hago si un lead deja de responder?",
        qEn: "What do I do if a lead stops responding?",
        a: "No lo elimines de inmediato — clasifícalo como ghost y muévelo a una secuencia de nutrición de más baja frecuencia (actualizaciones de inventario o de precio cada pocas semanas) en vez de seguir insistiendo con el mismo mensaje. Muchos leads ghost regresan meses después cuando su situación cambia.",
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
          'A PDF goes out of date the moment a lot sells, which means buyers are often looking at inaccurate availability without knowing it — and salespeople waste time answering the same "is this one still available" question over and over. A live map removes that friction entirely: what the buyer sees is what\'s actually available, which builds trust and shortens the path from interest to reservation.',
        ],
        bodyEs: [
          'Un PDF se desactualiza en el momento en que un lote se vende, lo que significa que los compradores muchas veces están viendo disponibilidad incorrecta sin saberlo — y el equipo de ventas pierde tiempo respondiendo la misma pregunta de "¿este sigue disponible?" una y otra vez. Un mapa en vivo elimina esa fricción por completo: lo que el comprador ve es lo que realmente está disponible, lo que genera confianza y acorta el camino de interés a apartado.',
        ],
      },
      {
        id: "casos-reales",
        heading: "Where we've built this: Bruma Norte and Enya",
        headingEs: "Dónde lo hemos construido: Bruma Norte y Enya",
        body: [
          "We've built interactive lot maps for developments including Bruma Norte and Enya, where buyers can explore availability, pricing and lot dimensions without waiting on a sales team to respond. It's still a rare feature in the Mexican real estate market — most developments, even well-funded ones, still sell off a static PDF or a spreadsheet a sales rep updates by hand.",
        ],
        bodyEs: [
          "Hemos construido mapas interactivos de lotes para desarrollos como Bruma Norte y Enya, donde los compradores pueden explorar disponibilidad, precios y dimensiones de lote sin esperar a que un equipo de ventas responda. Sigue siendo una característica poco común en el mercado inmobiliario mexicano — la mayoría de los desarrollos, incluso los bien financiados, todavía venden desde un PDF estático o una hoja de cálculo que un vendedor actualiza a mano.",
        ],
      },
      {
        id: "cuando-vale-la-pena",
        heading: "When it's worth building one",
        headingEs: "Cuándo vale la pena construir uno",
        body: [
          "It makes the most sense for developments with multiple lots or units for sale simultaneously — land developments, multi-phase pre-sales, or any project where buyers are choosing between many similar options. For a single property or a small handful of units, the return doesn't justify the build; a well-structured landing page is enough. The bigger the inventory, the bigger the leverage.",
        ],
        bodyEs: [
          "Tiene más sentido para desarrollos con múltiples lotes o unidades a la venta simultáneamente — desarrollos de terrenos, preventas de varias fases, o cualquier proyecto donde los compradores eligen entre muchas opciones similares. Para una sola propiedad o un puñado de unidades, el retorno no justifica construirlo; una landing page bien estructurada es suficiente. Entre más grande el inventario, mayor la palanca.",
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
          'El mapa en sí es una herramienta de captación, no un reemplazo del seguimiento — cuando un comprador aparta un lote a través del mapa, esa acción debe disparar la misma respuesta de cinco minutos y el mismo registro en CRM que cualquier otro lead. El mapa aumenta la calidad del interés que capturas; el sistema de seguimiento sigue siendo lo que convierte ese interés en un contrato firmado. Revisa el marco completo en "cómo generar leads inmobiliarios."',
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Un mapa interactivo de lotes solo sirve para terrenos?",
        qEn: "Does an interactive lot map only work for land developments?",
        a: "Funciona mejor para terrenos y preventas con múltiples unidades, pero el mismo concepto aplica a cualquier inventario donde el comprador elige entre varias opciones similares — condominios en preventa, locales comerciales en un desarrollo, o etapas de un fraccionamiento.",
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
        a: "No — reemplaza las preguntas repetitivas sobre disponibilidad y precio, para que el equipo de ventas dedique su tiempo a cerrar a los compradores que ya se autocalificaron a través del mapa, en vez de contestar las mismas preguntas todo el día.",
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
      "Los leads inmobiliarios necesitan clasificarse en el momento en que llegan — hot, warm, cold o ghost — porque cada categoría requiere una velocidad de respuesta, un guion y una cadencia distintos. Tratar a todos los leads igual es la razón más común por la que los desarrollos generan muchos leads pero cierran pocas ventas.",
    sections: [
      {
        id: "la-clasificacion",
        heading: "The hot, warm, cold, ghost classification",
        headingEs: "La clasificación hot, warm, cold, ghost",
        body: [
          "Hot: asking specific questions about price, availability or scheduling a visit — ready this week. Warm: engaged and responsive but still comparing developments or waiting on financing. Cold: early research, months away from deciding, often just requested general information. Ghost: went completely silent after initial contact. This classification should happen on the first interaction, not after several follow-up attempts.",
        ],
        bodyEs: [
          "Hot: hace preguntas específicas sobre precio, disponibilidad o quiere agendar una visita — listo esta semana. Warm: responde y está interesado pero sigue comparando desarrollos o esperando financiamiento. Cold: investigación temprana, a meses de decidir, muchas veces solo pidió información general. Ghost: se quedó completamente en silencio después del contacto inicial. Esta clasificación debe hacerse en la primera interacción, no después de varios intentos de seguimiento.",
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
          "El guion para un lead hot tiene un solo trabajo: agendar una visita antes de que termine la conversación. Sáltate el discurso general — ya sabe en qué está interesado. Confirma disponibilidad, ofrece dos horarios específicos, y da seguimiento por teléfono si el mensaje de WhatsApp no se contesta en quince minutos. Cada minuto de demora aquí es un minuto que un desarrollo competidor tiene para contactarlo primero.",
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
          "Los leads warm responden bien a seguimiento específico y útil — nueva disponibilidad, opciones de financiamiento, o una invitación a un open house sin presión — cada cinco a siete días. Los leads cold necesitan una cadencia más lenta: actualizaciones mensuales de inventario o cambios de precio, sin presionar la venta, porque insistir demasiado pronto es lo que convierte a un lead cold en un ghost. El objetivo con ambos es mantenerse presente hasta que estén listos, no apurarlos a llegar ahí.",
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
          "No elimines a un lead ghost — muévelo a una secuencia de baja frecuencia y sin presión: una actualización de mercado o un cambio de precio cada pocas semanas, sin esperar respuesta. Un porcentaje importante de los leads ghost regresa meses después cuando cambia su situación financiera o su tiempo, y haber mantenido una presencia mínima cuesta casi nada comparado con adquirir un lead nuevo desde cero.",
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
          'Nada de esto funciona desde un chat de WhatsApp y la memoria — cada lead, su clasificación y su próxima fecha de seguimiento necesitan vivir en un CRM que todo el equipo de ventas pueda ver. Sin eso, la clasificación se degrada en días conforme llegan leads nuevos y se olvidan los anteriores. El sistema completo de generación de leads en el que encaja este proceso de seguimiento está en "cómo generar leads inmobiliarios."',
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cada cuánto debo reclasificar a un lead?",
        qEn: "How often should I reclassify a lead?",
        a: "Reclasifica cada vez que haya una interacción nueva — un lead cold que de repente pregunta por financiamiento pasa a warm de inmediato, y uno warm que agenda una visita pasa a hot. La clasificación no es estática, cambia con cada conversación.",
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
        a: "La estructura de clasificación y tiempos es la misma, pero el guion en sí debe ajustarse al desarrollo específico — preventa versus entrega inmediata, y el perfil del comprador cambian lo que hay que preguntar y ofrecer en cada llamada.",
        aEn: "The classification and timing structure stays the same, but the script itself should adapt to the specific development — pre-sale versus immediate delivery, and buyer profile change what needs to be asked and offered on each call.",
      },
      {
        q: "¿Cuántos intentos de contacto debo hacer antes de considerar un lead perdido?",
        qEn: "How many contact attempts should I make before considering a lead lost?",
        a: "Para un lead hot, de tres a cinco intentos en la primera semana antes de bajarlo a warm. Para leads warm y cold, no hay un número fijo — mientras sigan en la secuencia de nutrición sin darse de baja, siguen siendo una oportunidad válida a futuro.",
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
      "El SEO local es el conjunto de tácticas que hacen que un negocio aparezca cuando alguien cercano busca lo que vende — un perfil de Google Business totalmente optimizado, información de negocio consistente en toda la web, y un flujo constante de reseñas reales. Para cualquier negocio que atiende clientes en una ciudad o región específica, el SEO local suele rendir más por peso que el SEO nacional.",
    sections: [
      {
        id: "que-es-seo-local",
        heading: "What local SEO is and who it's for",
        headingEs: "Qué es el SEO local y para quién es",
        body: [
          'Local SEO targets searches with local intent — "plomero cerca de mí," "dentista en [ciudad]," "restaurante [zona]" — rather than broad national terms. It matters most for businesses with a physical location or a defined service area: restaurants, clinics, contractors, real estate agencies, retail. A national e-commerce brand with no physical presence gets little value from it; a business that lives and dies on local customers gets outsized value.',
        ],
        bodyEs: [
          'El SEO local se enfoca en búsquedas con intención local — "plomero cerca de mí," "dentista en [ciudad]," "restaurante [zona]" — en vez de términos amplios nacionales. Importa más para negocios con ubicación física o un área de servicio definida: restaurantes, clínicas, contratistas, agencias inmobiliarias, retail. Una marca de e-commerce nacional sin presencia física obtiene poco valor de esto; un negocio que vive de clientes locales obtiene un valor desproporcionado.',
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
          "Un perfil de Google Business completo, verificado y activamente mantenido es la base del SEO local — es lo que aparece en el paquete de mapas, que recibe más clics que los resultados orgánicos debajo para búsquedas locales. Eso significa categorías correctas, horarios completos, fotos reales actualizadas con regularidad y publicaciones constantes. Los negocios que lo configuran una vez y nunca lo vuelven a tocar están dejando la mayor parte de su valor sobre la mesa.",
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
          "El Nombre, Dirección y Teléfono (NAP) de tu negocio necesitan coincidir exactamente en tu sitio web, tu perfil de Google Business, redes sociales y cualquier directorio. Las inconsistencias — un número de suite aquí, una calle abreviada allá — confunden a los algoritmos que verifican que tu negocio es real y está donde dice, lo que afecta el posicionamiento en silencio incluso cuando todo lo demás está bien.",
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
          "La cantidad de reseñas, el promedio y qué tan recientes son influyen en el posicionamiento local — un negocio con 200 reseñas de hace tres años posiciona peor que uno con 40 reseñas que van llegando cada mes. Responder a cada reseña, positiva o negativa, señala un negocio activo y muchas veces influye más en los clientes potenciales que la leen que la calificación en estrellas por sí sola.",
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
          'Páginas construidas alrededor de colonias, ciudades o zonas de servicio específicas — no solo una página genérica de "servicios" — ayudan a los buscadores a entender exactamente dónde operas. Aparecer correctamente en directorios locales relevantes y listados específicos de la industria (citas) refuerza la misma señal. Ninguna reemplaza al perfil de Google Business, pero ambas multiplican su efecto con el tiempo.',
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
        a: "Generalmente más rápido que el SEO nacional — entre 6 y 10 semanas para movimiento inicial en el paquete de mapas, porque la competencia local suele ser menor que la nacional. Resultados sostenidos y consistentes toman de 3 a 6 meses.",
        aEn: "Generally faster than national SEO — 6 to 10 weeks for initial movement in the map pack, because local competition is usually lower than national. Sustained, consistent results take 3 to 6 months.",
      },
      {
        q: "¿Necesito un sitio web para hacer SEO local?",
        qEn: "Do I need a website to do local SEO?",
        a: "No es estrictamente obligatorio — un perfil de Google Business bien optimizado puede generar tráfico por sí solo — pero un sitio web le da a los buscadores más contenido para entender e indexar tu negocio, y es donde conviertes ese tráfico en algo más que una llamada.",
        aEn: "It's not strictly required — a well-optimized Google Business Profile can generate traffic on its own — but a website gives search engines more content to understand and index your business, and it's where you convert that traffic into something more than a phone call.",
      },
      {
        q: "¿Un negocio con varias sucursales necesita un perfil de Google Business por cada una?",
        qEn: "Does a multi-location business need a separate Google Business Profile for each location?",
        a: "Sí, cada sucursal con dirección física propia necesita su propio perfil verificado — un solo perfil no puede representar varias ubicaciones, y Google penaliza los intentos de simular presencia en varios lugares desde un solo perfil.",
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
          "El algoritmo de Meta necesita un volumen mínimo de clics y conversiones para salir de la fase de aprendizaje y empezar a optimizar de forma eficiente — aproximadamente 50 conversiones por conjunto de anuncios a la semana es el punto de referencia más citado. Por debajo de $8,000 MXN mensuales, la mayoría de los negocios mexicanos no puede generar ese volumen, lo que significa que el algoritmo nunca aprende del todo a quién mostrarle el anuncio, y el costo por resultado se mantiene errático.",
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
          "No subas el presupuesto hasta que un conjunto de anuncios haya generado al menos una o dos semanas de resultados estables y consistentes — escalar demasiado pronto solo amplifica una campaña sin optimizar, y escalar demasiado rápido (más de aproximadamente 20% por ajuste) reinicia la fase de aprendizaje del algoritmo y sube los costos temporalmente. Incrementos lentos y constantes le ganan a los saltos agresivos casi siempre.",
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
          'Meta Ads tiene más sentido para productos visuales y aspiracionales, y para categorías donde la demanda hay que crearla en vez de capturarla — productos nuevos, preventas inmobiliarias, restaurantes, moda. Para categorías donde la gente ya busca activamente por nombre o categoría, Google Ads suele merecer el primer peso en su lugar. Comparamos ambos directamente en "Google Ads vs Meta Ads."',
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
        a: "Casi siempre sí — Meta optimiza automáticamente la distribución entre ambas plataformas dentro de la misma campaña, así que no hay razón para separarlas manualmente salvo que tengas una razón creativa o de marca específica para hacerlo.",
        aEn: "Almost always yes — Meta automatically optimizes distribution across both platforms within the same campaign, so there's no reason to separate them manually unless you have a specific creative or brand reason to do so.",
      },
      {
        q: "¿Qué pasa si mi presupuesto es fijo y no puedo subirlo?",
        qEn: "What if my budget is fixed and I can't raise it?",
        a: "Con presupuesto fijo, el mayor impacto viene de reducir el desperdicio, no de aumentar el gasto — segmentación más precisa, pausar creativos con bajo rendimiento, y asegurarte de que el seguimiento de conversiones esté configurado correctamente.",
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
          'For any business with a physical location, an unclaimed or incomplete Google Business Profile is the single biggest missed opportunity — it\'s often the first thing a local customer sees, before your website. We cover exactly how to fix this in "local SEO: the complete guide."',
        ],
        bodyEs: [
          'Para cualquier negocio con ubicación física, un perfil de Google Business sin reclamar o incompleto es la oportunidad perdida más grande — muchas veces es lo primero que ve un cliente local, antes que tu sitio web. Cubrimos exactamente cómo corregir esto en "SEO local: guía completa."',
        ],
      },
      {
        id: "contenido-duplicado",
        heading: "2. Duplicate or thin content across pages",
        headingEs: "2. Contenido duplicado o pobre entre páginas",
        body: [
          "Multiple pages targeting the same keyword with barely different content confuse search engines about which page to rank, and neither ends up performing well. Each page needs a distinct purpose and enough real substance to be worth indexing on its own.",
        ],
        bodyEs: [
          "Varias páginas apuntando a la misma palabra clave con contenido apenas distinto confunden a los buscadores sobre cuál posicionar, y ninguna termina rindiendo bien. Cada página necesita un propósito distinto y suficiente sustancia real para valer la pena indexarla por sí sola.",
        ],
      },
      {
        id: "velocidad-movil",
        heading: "3. Ignoring mobile page speed",
        headingEs: "3. Ignorar la velocidad en móvil",
        body: [
          "More than half of searches in Mexico happen on mobile, and a slow-loading site loses both ranking and visitors before they see anything. Unoptimized images and bloated page builders are the most common culprits — often fixable without a full rebuild.",
        ],
        bodyEs: [
          "Más de la mitad de las búsquedas en México ocurren en móvil, y un sitio lento pierde tanto posicionamiento como visitantes antes de que vean algo. Imágenes sin optimizar y constructores de página pesados son los culpables más comunes — muchas veces se corrige sin necesidad de reconstruir todo.",
        ],
      },
      {
        id: "sin-ssl",
        heading: "4. No SSL or mixed content warnings",
        headingEs: "4. Sin SSL o advertencias de contenido mixto",
        body: [
          'A site without HTTPS gets flagged as "not secure" by browsers, which erodes trust instantly and is treated as a negative ranking signal. This is one of the cheapest fixes on this list and there\'s rarely a good reason to leave it unresolved.',
        ],
        bodyEs: [
          'Un sitio sin HTTPS se marca como "no seguro" en los navegadores, lo que erosiona la confianza de inmediato y se trata como una señal negativa de posicionamiento. Es una de las correcciones más baratas de esta lista y rara vez hay una buena razón para dejarla sin resolver.',
        ],
      },
      {
        id: "titulos-duplicados",
        heading: "5. Missing or duplicate title tags",
        headingEs: "5. Etiquetas de título faltantes o duplicadas",
        body: [
          'Every page needs a unique, descriptive title tag — generic titles like "Home" or the same title repeated across a dozen pages waste one of the most direct ranking signals a site has. This is usually a fast fix once identified.',
        ],
        bodyEs: [
          'Cada página necesita una etiqueta de título única y descriptiva — títulos genéricos como "Inicio" o el mismo título repetido en una docena de páginas desperdician una de las señales de posicionamiento más directas que tiene un sitio. Suele ser una corrección rápida una vez identificada.',
        ],
      },
      {
        id: "saturar-keywords",
        heading: "6. Keyword stuffing",
        headingEs: "6. Saturar de palabras clave",
        body: [
          "Repeating the same keyword unnaturally throughout a page, hoping to rank higher, reads poorly to visitors and gets flagged by modern search algorithms as manipulative. Writing naturally for the person reading, with the keyword appearing where it makes sense, outperforms stuffing every time.",
        ],
        bodyEs: [
          "Repetir la misma palabra clave de forma antinatural en toda una página, con la esperanza de posicionar mejor, se lee mal para los visitantes y los algoritmos modernos lo marcan como manipulación. Escribir de forma natural para la persona que lee, con la palabra clave apareciendo donde tiene sentido, supera al relleno siempre.",
        ],
      },
      {
        id: "sin-enlaces-internos",
        heading: "7. No internal linking strategy",
        headingEs: "7. Sin estrategia de enlaces internos",
        body: [
          "Pages that exist in isolation, with no links pointing to or from other relevant pages on the site, make it harder for search engines to understand which content matters most and harder for visitors to find related information. Every new article should link to at least one or two related pages.",
        ],
        bodyEs: [
          "Páginas que existen aisladas, sin enlaces que apunten hacia o desde otras páginas relevantes del sitio, le dificultan a los buscadores entender qué contenido importa más y a los visitantes encontrar información relacionada. Todo artículo nuevo debería enlazar al menos a una o dos páginas relacionadas.",
        ],
      },
      {
        id: "core-web-vitals",
        heading: "8. Ignoring Core Web Vitals",
        headingEs: "8. Ignorar Core Web Vitals",
        body: [
          "Google's Core Web Vitals measure loading speed, interactivity and visual stability — and they factor directly into ranking. Most small business sites have never checked their scores, let alone acted on them, leaving an easy technical win unclaimed.",
        ],
        bodyEs: [
          "Los Core Web Vitals de Google miden velocidad de carga, interactividad y estabilidad visual — y afectan directamente el posicionamiento. La mayoría de los sitios de pymes nunca ha revisado sus puntajes, mucho menos actuado sobre ellos, dejando una victoria técnica fácil sin reclamar.",
        ],
      },
      {
        id: "publicar-y-olvidar",
        heading: "9. Publishing and forgetting",
        headingEs: "9. Publicar y olvidar",
        body: [
          "Content that was accurate two years ago — old prices, outdated services, stale statistics — quietly erodes both rankings and trust. Search engines favor content that shows signs of being maintained, and so do the people reading it.",
        ],
        bodyEs: [
          "Contenido que era correcto hace dos años — precios viejos, servicios descontinuados, estadísticas desactualizadas — erosiona en silencio tanto el posicionamiento como la confianza. Los buscadores favorecen contenido que muestra señales de mantenimiento, y también lo hace la gente que lo lee.",
        ],
      },
      {
        id: "enlaces-rotos",
        heading: "10. Broken links and unfixed 404s",
        headingEs: "10. Enlaces rotos y 404 sin corregir",
        body: [
          "Links pointing to pages that no longer exist, whether internal or from other sites, waste the authority those links were passing and create a poor experience for anyone who clicks them. A quarterly check for broken links is a low-effort habit most sites skip entirely.",
        ],
        bodyEs: [
          "Enlaces que apuntan a páginas que ya no existen, sea internos o desde otros sitios, desperdician la autoridad que esos enlaces transmitían y generan una mala experiencia para quien les da clic. Una revisión trimestral de enlaces rotos es un hábito de bajo esfuerzo que la mayoría de los sitios se salta por completo.",
        ],
      },
      {
        id: "sin-schema",
        heading: "11. No schema markup",
        headingEs: "11. Sin marcado de schema",
        body: [
          "Schema markup tells search engines exactly what a page is about — a review, a product, an FAQ, an article — in a format they can read directly, which often earns richer, more clickable results. Most small business sites have none at all, leaving that extra visibility on the table.",
        ],
        bodyEs: [
          "El marcado de schema le dice a los buscadores exactamente de qué trata una página — una reseña, un producto, un FAQ, un artículo — en un formato que pueden leer directamente, lo que muchas veces gana resultados más ricos y con más clics. La mayoría de los sitios de pymes no tiene ninguno, dejando esa visibilidad extra sobre la mesa.",
        ],
      },
      {
        id: "esperar-sin-paciencia",
        heading: "12. Expecting results without patience",
        headingEs: "12. Esperar resultados sin paciencia",
        body: [
          "SEO compounds over months, not weeks — businesses that abandon it after six or eight weeks because they haven't seen dramatic movement are quitting right before the curve typically starts to bend. Consistency beats intensity in SEO more than in almost any other marketing channel.",
        ],
        bodyEs: [
          "El SEO se acumula en meses, no en semanas — los negocios que lo abandonan después de seis u ocho semanas porque no han visto un movimiento dramático están renunciando justo antes de que la curva normalmente empiece a doblarse. La consistencia le gana a la intensidad en SEO más que en casi cualquier otro canal de marketing.",
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
        a: "La mayoría son universales — velocidad, SSL, contenido duplicado afectan a cualquier sitio. Algunos, como el perfil de Google Business, importan más para negocios con ubicación física que para servicios puramente digitales.",
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
        a: "No hay garantías en SEO, pero corregir errores técnicos y de contenido elimina obstáculos que de otra forma limitan cualquier otro esfuerzo — es la base sobre la que todo lo demás (contenido, enlaces, autoridad) puede funcionar.",
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
      "No existe una elección universalmente correcta entre agencia, freelancer y equipo interno — cada uno encaja en una etapa y presupuesto distintos. Como regla general: los freelancers convienen para tareas acotadas y bien definidas; las agencias convienen para negocios que necesitan estrategia más ejecución en varios canales; los equipos internos tienen sentido cuando el gasto en marketing es suficientemente grande para justificar un sueldo de tiempo completo.",
    sections: [
      {
        id: "freelancer-cuando",
        heading: "When a freelancer is the right call",
        headingEs: "Cuándo un freelancer es la decisión correcta",
        body: [
          "Freelancers work best for narrow, well-defined deliverables — a logo, a batch of ad creative, a single landing page — where you already know exactly what you need and don't require ongoing strategy. Costs run lower than an agency for the same task, but there's no backup if the freelancer is unavailable, and coordinating multiple freelancers across channels becomes a part-time job in itself.",
        ],
        bodyEs: [
          "Los freelancers funcionan mejor para entregables acotados y bien definidos — un logo, un lote de creativos para anuncios, una landing page — donde ya sabes exactamente qué necesitas y no requieres estrategia continua. Los costos son más bajos que una agencia para la misma tarea, pero no hay respaldo si el freelancer no está disponible, y coordinar a varios freelancers en distintos canales se vuelve un trabajo de medio tiempo en sí mismo.",
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
          "Una agencia tiene sentido cuando necesitas estrategia y ejecución conectadas en varios canales — SEO, anuncios, contenido, diseño — trabajando desde el mismo plan en vez de freelancers desconectados jalando en direcciones distintas. El trade-off es el costo: las agencias suelen tener tarifas mensuales más altas que un solo freelancer, porque estás pagando por coordinación y responsabilidad, no solo por horas de trabajo.",
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
          "Armar un equipo interno empieza a tener sentido financiero cuando el gasto y la complejidad mensual de marketing son suficientemente altos para que un sueldo de tiempo completo cueste menos que la tarifa equivalente de una agencia — comúnmente por arriba de $60,000–$80,000 MXN mensuales en actividad de marketing combinada. Por debajo de eso, el costo fijo de sueldo, prestaciones y gestión suele superar lo que cobraría una agencia o freelancer por el mismo resultado.",
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
          "Como rangos de mercado típicos para 2026: un freelancer especializado cuesta $8,000–$20,000 MXN mensuales por un solo canal. Una tarifa de agencia pequeña que cubre estrategia más dos o tres canales cuesta $20,000–$50,000 MXN mensuales. Una contratación interna junior de marketing, con prestaciones incluidas, cuesta $18,000–$30,000 MXN mensuales — pero cubre solo el conjunto de habilidades de una persona, no las de un equipo completo.",
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
          "Un patrón común: empezar con un freelancer o una agencia pequeña para validar qué funciona, incorporar un líder de marketing interno cuando el volumen lo justifique, y mantener una agencia o freelancers para trabajo especializado que la persona interna no tiene el tiempo o la experiencia para hacer — como producción de video o una plataforma de anuncios específica. Pocos negocios se quedan en una sola categoría para siempre.",
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
          "¿Cuántos canales necesitan trabajar juntos ahora mismo? ¿La necesidad es continua o un proyecto único? ¿Qué pasa si la persona o el equipo no está disponible por dos semanas? Y honestamente — ¿hay suficiente capacidad interna para gestionar bien una relación con un freelancer o una agencia, o esa gestión también necesita externalizarse? Las respuestas suelen apuntar claramente a una opción.",
        ],
      },
    ],
    gradient: "from-neutral-800 to-zinc-950",
    faq: [
      {
        q: "¿Qué opción es más barata a corto plazo?",
        qEn: "Which option is cheapest in the short term?",
        a: "Un freelancer suele ser la opción más barata a corto plazo para una tarea específica, pero esa comparación cambia en cuanto necesitas coordinar varios canales — ahí el costo de gestionar múltiples freelancers puede terminar superando el de una agencia.",
        aEn: "A freelancer is usually the cheapest short-term option for a specific task, but that comparison changes as soon as you need to coordinate multiple channels — at that point, the cost of managing multiple freelancers can end up exceeding an agency's.",
      },
      {
        q: "¿Puedo cambiar de opción después si no funciona?",
        qEn: "Can I switch options later if it's not working?",
        a: "Sí, y es común hacerlo — muchos negocios empiezan con freelancers, pasan a una agencia cuando necesitan más coordinación, y eventualmente construyen equipo interno. La transición es más fácil si desde el inicio documentas bien la estrategia y los accesos, en vez de que vivan solo en la cabeza de quien te ayuda.",
        aEn: "Yes, and it's common to do so — many businesses start with freelancers, move to an agency when they need more coordination, and eventually build an in-house team. The transition is easier if you document strategy and access well from the start, instead of it living only in your helper's head.",
      },
      {
        q: "¿Una agencia pequeña es mejor que una grande?",
        qEn: "Is a small agency better than a large one?",
        a: "Depende de lo que necesites — las agencias pequeñas suelen dar más atención directa y flexibilidad, mientras que las grandes tienen más recursos y especialistas por canal. Para pymes, una agencia pequeña con casos reales en tu industria suele rendir mejor que una grande genérica.",
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
          'Revisa el reparto cada 4 a 6 semanas según qué canal está produciendo leads hot y warm, no solo volumen bruto — un canal que genera muchos leads cold o ghost está desperdiciando presupuesto en silencio aunque el costo por clic se vea atractivo. El sistema de clasificación completo está en "seguimiento de leads inmobiliarios."',
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
        a: "Depende del tamaño del inventario — para un desarrollo con muchos lotes o unidades, suele pagarse solo al reducir el tiempo de ventas respondiendo preguntas de disponibilidad. Para una sola propiedad, ese presupuesto rinde más en tráfico pagado.",
        aEn: "It depends on inventory size — for a development with many lots or units, it usually pays for itself by reducing sales time spent answering availability questions. For a single property, that budget performs better spent on paid traffic.",
      },
      {
        q: "¿El presupuesto debe ser el mismo todo el año?",
        qEn: "Should the budget stay the same all year?",
        a: "No necesariamente — muchos desarrollos aumentan el presupuesto en el lanzamiento y en momentos clave de preventa, y lo mantienen más bajo en periodos de inventario estable. Ajustarlo según la etapa del proyecto suele rendir mejor que un gasto plano todo el año.",
        aEn: "Not necessarily — many developments increase budget at launch and at key pre-sale milestones, keeping it lower during stable inventory periods. Adjusting by project stage usually performs better than flat spend all year.",
      },
      {
        q: "¿Cómo se compara el presupuesto de un desarrollo pequeño contra uno grande?",
        qEn: "How does a small development's budget compare to a large one's?",
        a: "Los desarrollos pequeños pueden operar con presupuestos más ajustados porque necesitan menos volumen de leads para vender su inventario, pero el costo por lead no baja proporcionalmente — la eficiencia mínima del algoritmo aplica sin importar el tamaño del proyecto.",
        aEn: "Smaller developments can operate on tighter budgets because they need less lead volume to sell their inventory, but cost per lead doesn't drop proportionally — the algorithm's minimum efficiency threshold applies regardless of project size.",
      },
      {
        q: "¿Qué parte del sistema completo cubre este presupuesto?",
        qEn: "What part of the complete system does this budget cover?",
        a: "Este desglose cubre tráfico e infraestructura — landing, mapa y CRM. El resto del sistema, incluyendo seguimiento y clasificación de leads, depende más de tiempo y proceso que de presupuesto adicional. El panorama completo está en la guía de marketing inmobiliario.",
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

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
    slug: "cuanto-cuesta-pagina-web",
    title: "How Much Does a Website Cost in Mexico? 2026 Prices",
    titleEs: "¿Cuánto cuesta una página web en México? Precios 2026",
    category: "Web Design",
    categoryEs: "Diseño Web",
    excerpt:
      "A breakdown of real website prices in Mexico for 2026, from a $6,000 MXN template site to a $150,000+ custom platform, and what separates them.",
    excerptEs:
      "Un desglose de precios reales de páginas web en México para 2026, desde un sitio con plantilla en $6,000 MXN hasta una plataforma a medida de $150,000+, y qué las diferencia.",
    readingTime: 8,
    date: "2026-06-22",
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
      ],
      keywordsEs: [
        "costo página web México",
        "precio diseño web",
        "página web a medida México",
        "niveles de sitio web",
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
    slug: "marketing-inmobiliario-guia",
    title: "How to Generate Real Estate Leads: A Complete System",
    titleEs: "Cómo generar leads inmobiliarios: sistema completo",
    category: "Real Estate Marketing",
    categoryEs: "Marketing Inmobiliario",
    excerpt:
      "A complete lead-generation system for real estate in Mexico — from the listing page that actually converts to the follow-up sequence that closes.",
    excerptEs:
      "Un sistema completo de generación de leads inmobiliarios en México — desde la página de propiedad que sí convierte hasta la secuencia de seguimiento que cierra.",
    readingTime: 8,
    date: "2026-07-13",
    author: "Isaac",
    authorRole: "Creative Director, Aphelion",
    authorRoleEs: "Director Creativo, Aphelion",
    lede: "Real estate leads don't come from a pretty listing page — they come from a system: paid traffic aimed at buyer intent, a landing page built to capture contact info before the listing loads fully, and a follow-up sequence that starts within five minutes. Miss any piece and the other two waste money.",
    ledeEs:
      "Los leads inmobiliarios no vienen de una página de propiedad bonita — vienen de un sistema: tráfico pagado dirigido a intención de compra, una landing diseñada para capturar el contacto antes de que cargue todo el listado, y una secuencia de seguimiento que arranca en menos de cinco minutos. Si falta una pieza, las otras dos desperdician dinero.",
    sections: [
      {
        id: "por-que-listing-no-basta",
        heading: "Why listing pages alone don't generate leads",
        headingEs: "Por qué las páginas de propiedad solas no generan leads",
        body: [
          "A beautiful gallery of a property is not a lead-generation asset — it's a brochure. If a visitor can see every photo, the floor plan, and the price without giving up their contact info, most of them will leave and never come back. The listing needs to be structured to trade information for access, not give everything away for free upfront.",
        ],
        bodyEs: [
          "Una galería hermosa de una propiedad no es un activo de generación de leads — es un folleto. Si un visitante puede ver todas las fotos, el plano y el precio sin dejar su contacto, la mayoría se irá y nunca volverá. El listado tiene que estar estructurado para intercambiar información por acceso, no regalar todo desde el inicio.",
        ],
      },
      {
        id: "fuentes-de-trafico",
        heading: "The traffic sources that actually work",
        headingEs: "Las fuentes de tráfico que sí funcionan",
        body: [
          "Meta Ads works best for lifestyle-driven, visual selling — video walkthroughs and drone footage that stop the scroll for people who weren't actively looking yet. Google Ads works for buyers already searching by area or property type. Portals like Inmuebles24 and Vivanuncios generate volume but weaker intent, and are best treated as a top-of-funnel source that feeds your own retargeting, not the final destination.",
        ],
        bodyEs: [
          "Meta Ads funciona mejor para venta visual y de estilo de vida — recorridos en video y tomas de dron que detienen el scroll de gente que aún no buscaba activamente. Google Ads funciona para compradores que ya buscan por zona o tipo de propiedad. Portales como Inmuebles24 y Vivanuncios generan volumen pero con menor intención, y se manejan mejor como fuente de la parte alta del embudo que alimenta tu propio retargeting, no como el destino final.",
        ],
      },
      {
        id: "estructura-de-landing",
        heading: "Landing page structure that converts",
        headingEs: "Estructura de landing que convierte",
        body: [
          "Lead first, listing second: hero with the strongest photo and a one-line hook, a short form above the fold (name, phone, budget range), then the gallery and details below as the reward for engaging. Every version of the property page that outperforms a generic listing follows this order — capture intent before delivering the full information.",
        ],
        bodyEs: [
          "Primero el lead, luego el listado: hero con la mejor foto y un gancho de una línea, un formulario corto arriba del pliegue (nombre, teléfono, rango de presupuesto), y luego la galería y detalles abajo como recompensa por interactuar. Toda versión de página de propiedad que supera a un listado genérico sigue este orden — capturar la intención antes de entregar toda la información.",
        ],
      },
      {
        id: "regla-cinco-minutos",
        heading: "The five-minute follow-up rule",
        headingEs: "La regla de los cinco minutos de seguimiento",
        body: [
          'Real estate leads decay fast — a lead contacted within five minutes converts dramatically better than one contacted an hour later, because they\'re often browsing multiple developments at once. This means automated instant response (WhatsApp or SMS) plus a human call within the same window, not a callback queued for "sometime today."',
        ],
        bodyEs: [
          'Los leads inmobiliarios se enfrían rápido — un lead contactado en cinco minutos convierte dramáticamente mejor que uno contactado una hora después, porque suelen estar viendo varios desarrollos a la vez. Esto significa respuesta automática instantánea (WhatsApp o SMS) más una llamada humana dentro de la misma ventana, no una devolución de llamada agendada para "algún momento del día".',
        ],
      },
      {
        id: "crm-y-nutricion",
        heading: "CRM and nurture: what happens after the first call",
        headingEs: "CRM y nutrición: qué pasa después de la primera llamada",
        body: [
          "Most buyers don't close on the first call — the real estate sales cycle runs weeks to months. Every lead needs to land in a CRM with a follow-up cadence: a nurture sequence with new listings matching their criteria, market updates, and a human check-in every one to two weeks. Leads that fall out of a spreadsheet after the first missed call are leads you already paid for and threw away.",
        ],
        bodyEs: [
          "La mayoría de los compradores no cierra en la primera llamada — el ciclo de venta inmobiliario dura semanas o meses. Todo lead debe entrar a un CRM con una cadencia de seguimiento: una secuencia de nutrición con nuevos listados que coincidan con sus criterios, actualizaciones de mercado y un contacto humano cada una o dos semanas. Los leads que se caen de una hoja de cálculo después de la primera llamada perdida son leads que ya pagaste y tiraste a la basura.",
        ],
      },
    ],
    gradient: "from-neutral-700 to-stone-900",
    faq: [
      {
        q: "¿Cuánto presupuesto necesito para empezar a generar leads inmobiliarios?",
        qEn: "How much budget do I need to start generating real estate leads?",
        a: "Para un desarrollo o inventario mediano, un piso realista es de $15,000 a $25,000 MXN mensuales entre Meta y Google, sin contar el costo de la landing page y el CRM. Categorías de alto valor como preventas o desarrollos premium suelen necesitar más presupuesto porque el costo por lead calificado es más alto y el ciclo de decisión es más largo.",
        aEn: "For a mid-size development or inventory, a realistic floor is $15,000 to $25,000 MXN per month across Meta and Google, not counting the landing page and CRM cost. High-ticket categories like pre-sales or premium developments usually need more budget because the cost per qualified lead is higher and the decision cycle is longer.",
      },
      {
        q: "¿Los portales como Inmuebles24 son suficientes o necesito publicidad pagada aparte?",
        qEn: "Are portals like Inmuebles24 enough, or do I need separate paid advertising?",
        a: "Los portales generan volumen, pero la intención suele ser más baja y compites directamente al lado de otros desarrollos en el mismo listado. La publicidad pagada propia (Meta y Google) te da control sobre a quién le hablas y hacia dónde los mandas, sin la competencia visual inmediata del portal. Lo ideal es usar los portales como una fuente más, no como la única.",
        aEn: "Portals generate volume, but intent tends to be lower and you compete directly next to other developments in the same listing. Your own paid advertising (Meta and Google) gives you control over who you target and where you send them, without the portal's immediate visual competition. The ideal setup uses portals as one source among several, not the only one.",
      },
      {
        q: "¿Cuánto tiempo tarda en cerrar un lead inmobiliario en promedio?",
        qEn: "How long does it typically take to close a real estate lead?",
        a: "El ciclo de venta inmobiliario suele correr de varias semanas a varios meses, dependiendo del ticket y si es preventa o entrega inmediata. Por eso un solo seguimiento no es suficiente — el lead necesita una secuencia de nutrición constante durante todo ese periodo, no solo una llamada inicial y luego silencio.",
        aEn: "The real estate sales cycle typically runs from several weeks to several months, depending on the price point and whether it's pre-sale or immediate delivery. That's why a single follow-up isn't enough — the lead needs a consistent nurture sequence through that entire period, not just an initial call followed by silence.",
      },
      {
        q: "¿Qué necesito además de anuncios para que el sistema de leads funcione?",
        qEn: "What do I need besides ads for the lead system to actually work?",
        a: "Necesitas una landing page diseñada para capturar contacto antes de mostrar todo el listado, un sistema de respuesta automática (WhatsApp o SMS) que conteste en los primeros cinco minutos, y un CRM donde ningún lead se pierda entre llamadas. Sin estas tres piezas, el tráfico pagado se desperdicia sin importar qué tan bueno sea el anuncio.",
        aEn: "You need a landing page designed to capture contact before showing the full listing, an automated response system (WhatsApp or SMS) that replies within the first five minutes, and a CRM where no lead gets lost between calls. Without these three pieces, paid traffic gets wasted no matter how good the ad is.",
      },
      {
        q: "¿Meta Ads funciona para preventas donde todavía no hay nada construido?",
        qEn: "Does Meta Ads work for pre-sales where nothing is built yet?",
        a: "Sí, y de hecho suele funcionar mejor que Google Ads en esa etapa, porque nadie está buscando activamente algo que no existe todavía — hay que generar el deseo con renders, recorridos virtuales y la narrativa del proyecto. Google Ads se vuelve más útil cuando ya hay unidades entregadas o construcción avanzada que la gente puede buscar y verificar.",
        aEn: "Yes, and it often works better than Google Ads at that stage, because nobody is actively searching for something that doesn't exist yet — you have to generate desire with renders, virtual walkthroughs and the project's narrative. Google Ads becomes more useful once units are delivered or construction is advanced enough that people can search for and verify it.",
      },
    ],
    schema: {
      keywords: [
        "real estate leads Mexico",
        "real estate marketing",
        "property lead generation",
        "real estate ads",
      ],
      keywordsEs: [
        "leads inmobiliarios México",
        "marketing inmobiliario",
        "generación de leads propiedades",
        "publicidad inmobiliaria",
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

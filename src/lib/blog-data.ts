import type { Lang } from "./i18n";

export type BlogSection = {
  id: string;
  heading: string;
  headingEs: string;
  body: string[];
  bodyEs: string[];
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

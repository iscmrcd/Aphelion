/**
 * Content for the city pages (Tijuana, Ensenada and Rosarito).
 *
 * Every page carries its own copy. City pages that share templated prose with
 * the city name swapped are doorway pages, which Google treats as spam, so the
 * substance here is genuinely different per service and leans on what actually
 * makes marketing in Tijuana different: a bilingual audience, a border that
 * ad platforms happily spend across, and buyers who compare local shops
 * against San Diego agencies.
 *
 * No client counts, results or case studies appear here. None are verified.
 */

export type LocalSection = {
  id: string;
  heading: string;
  headingEs: string;
  body: string[];
  bodyEs: string[];
};

export type LocalFaq = { q: string; qEs: string; a: string; aEs: string };

export type LocalPage = {
  path: string;
  service: string;
  serviceEs: string;
  /** H1 */
  h1: string;
  h1Es: string;
  kicker: string;
  kickerEs: string;
  intro: string;
  introEs: string;
  seoTitle: string;
  seoTitleEs: string;
  seoDescription: string;
  seoDescriptionEs: string;
  serviceType: string;
  sections: LocalSection[];
  faq: LocalFaq[];
  /** Related city pages rendered at the bottom. */
  related: string[];
  /**
   * The service page this city page belongs under. Diseño web points at
   * /servicios/websites rather than a root /diseno-web, because that URL is
   * already indexed and moving it was not worth the temporary ranking dip.
   */
  parentPath?: string;
  parentLabel?: string;
  parentLabelEs?: string;
};

export const TIJUANA_HUB: LocalPage = {
  path: "/agencia-marketing-digital-tijuana",
  service: "Digital marketing",
  serviceEs: "Marketing digital",
  h1: "Digital Marketing Agency in Tijuana",
  h1Es: "Agencia de marketing digital en Tijuana",
  kicker: "Tijuana, Baja California",
  kickerEs: "Tijuana, Baja California",
  intro:
    "We build websites, run paid campaigns and set up the tracking behind them for businesses in Tijuana. Everything below is what we actually do and how we price the thinking, not a list of adjectives.",
  introEs:
    "Construimos sitios web, operamos campañas pagadas y montamos la medición que va detrás para negocios en Tijuana. Todo lo que sigue es lo que realmente hacemos y cómo cobramos el criterio, no una lista de adjetivos.",
  seoTitle: "Digital Marketing Agency in Tijuana | Aphelion",
  seoTitleEs: "Agencia de Marketing Digital en Tijuana | Aphelion",
  seoDescription:
    "Digital marketing agency in Tijuana: web design, SEO, Google Ads, Meta Ads and automation. Bilingual work built for a border market. Book a diagnostic.",
  seoDescriptionEs:
    "Agencia de marketing digital en Tijuana: diseño web, SEO, Google Ads, Meta Ads y automatización. Trabajo bilingüe para la frontera. Agenda tu diagnóstico.",
  serviceType: "Digital marketing agency services",
  sections: [
    {
      id: "por-que-tijuana-es-distinto",
      heading: "Why marketing in Tijuana is not marketing anywhere else in Mexico",
      headingEs: "Por qué el marketing en Tijuana no es el marketing del resto de México",
      body: [
        "Tijuana runs on a bilingual, cross-border economy, and that changes the mechanics of almost everything downstream.",
        "Your customers search in two languages, sometimes in the same session. A Tijuana resident may search for a dentist in Spanish and read the reviews in English. Campaigns built around a single language quietly miss half the demand.",
        "The border is close enough that ad platforms will spend across it if you let them. A radius target set around your location can leak impressions into San Diego County, where you are bidding against advertisers with dollar budgets for clicks that will never walk into your business.",
        "And a meaningful share of Tijuana businesses sell to buyers who are comparing them against options in the United States. That raises the bar on the things that signal legitimacy: a real site, a working phone, visible credentials, reviews that read like people wrote them.",
      ],
      bodyEs: [
        "Tijuana corre sobre una economía bilingüe y fronteriza, y eso cambia la mecánica de casi todo lo que viene después.",
        "Tus clientes buscan en dos idiomas, a veces en la misma sesión. Un tijuanense puede buscar dentista en español y leer las reseñas en inglés. Las campañas construidas alrededor de un solo idioma pierden en silencio la mitad de la demanda.",
        "La frontera está lo bastante cerca para que las plataformas gasten del otro lado si las dejas. Un radio configurado alrededor de tu ubicación puede derramar impresiones en el condado de San Diego, donde estás pujando contra anunciantes con presupuesto en dólares por clics que nunca van a entrar a tu negocio.",
        "Y una parte relevante de los negocios de Tijuana le vende a compradores que los están comparando contra opciones en Estados Unidos. Eso sube la vara en las cosas que señalan seriedad: un sitio real, un teléfono que contesta, credenciales visibles, reseñas que se lean escritas por personas.",
      ],
    },
    {
      id: "servicios",
      heading: "What we do",
      headingEs: "Qué hacemos",
      body: [
        "Websites and landing pages, built to load fast on a phone on mobile data and to convert rather than to win design awards.",
        "Local SEO: the Google Business Profile, the city pages, the review system, and the technical work that lets any of it rank.",
        "Google Ads and Meta Ads, with the geographic and language configuration a border city actually needs.",
        "Measurement, which is the part most agencies skip: call tracking, conversion setup, and a straight answer about which channel produced which customer.",
        "Automation and AI agents for the repetitive half of customer conversations, so enquiries get answered at ten at night without anyone staffing ten at night.",
      ],
      bodyEs: [
        "Sitios web y landing pages, construidos para cargar rápido en un teléfono con datos móviles y para convertir, no para ganar premios de diseño.",
        "SEO local: el Perfil de Empresa de Google, las páginas de ciudad, el sistema de reseñas y el trabajo técnico que permite que algo de eso posicione.",
        "Google Ads y Meta Ads, con la configuración geográfica y de idioma que una ciudad fronteriza realmente necesita.",
        "Medición, que es la parte que casi todas las agencias se saltan: rastreo de llamadas, configuración de conversiones y una respuesta directa sobre qué canal produjo qué cliente.",
        "Automatización y agentes de IA para la mitad repetitiva de las conversaciones con clientes, para que las consultas se respondan a las diez de la noche sin que nadie trabaje a las diez de la noche.",
      ],
    },
    {
      id: "como-trabajamos",
      heading: "How we work",
      headingEs: "Cómo trabajamos",
      body: [
        "We start by finding the bottleneck, which is often not the thing you came in asking about. A business getting plenty of calls and converting few of them does not need more traffic.",
        "We publish what we are going to measure before we start spending, along with the number that would make us continue or stop. Deciding that afterwards is how agencies stay hired on campaigns that are not working.",
        "We do not sell retainers for activity. A monthly report full of reach and impressions with nothing about customers is a report designed to be unfalsifiable.",
        "Everything we build is yours: the ad accounts, the analytics, the site, the domain. If you leave, you leave with them.",
      ],
      bodyEs: [
        "Empezamos por encontrar el cuello de botella, que muchas veces no es aquello por lo que llegaste preguntando. Un negocio que recibe muchas llamadas y convierte pocas no necesita más tráfico.",
        "Publicamos qué vamos a medir antes de empezar a gastar, junto con el número que nos haría continuar o parar. Decidir eso después es como las agencias se mantienen contratadas en campañas que no funcionan.",
        "No vendemos igualas por actividad. Un reporte mensual lleno de alcance e impresiones sin nada sobre clientes es un reporte diseñado para no poder refutarse.",
        "Todo lo que construimos es tuyo: las cuentas de anuncios, la analítica, el sitio, el dominio. Si te vas, te vas con ellos.",
      ],
    },
  ],
  faq: [
    {
      q: "Do you have an office in Tijuana?",
      qEs: "¿Tienen oficina en Tijuana?",
      a: "We serve Tijuana as a service-area business and work remotely with clients across Baja California. Meetings happen by video or in person by arrangement. We say this plainly because agencies listing an address they do not occupy is common, and it is a Google Business Profile violation.",
      aEs: "Atendemos Tijuana como negocio de área de servicio y trabajamos de forma remota con clientes de todo Baja California. Las reuniones son por video o presenciales previo acuerdo. Lo decimos claro porque es común que las agencias publiquen una dirección que no ocupan, y eso es una infracción a las políticas del Perfil de Empresa de Google.",
    },
    {
      q: "How much does it cost?",
      qEs: "¿Cuánto cuesta?",
      a: "It depends on what the bottleneck is, so we quote after a diagnostic call rather than from a price list. What we can tell you upfront is how we structure it: a fixed scope for build work, and for campaigns a management fee separate from ad spend, so you always know which is which.",
      aEs: "Depende de cuál sea el cuello de botella, así que cotizamos después de una llamada de diagnóstico y no desde una lista de precios. Lo que sí te podemos decir de entrada es cómo lo estructuramos: alcance fijo para el trabajo de construcción, y para campañas una cuota de gestión separada de la inversión publicitaria, para que siempre sepas cuál es cuál.",
    },
    {
      q: "Do you work in English or Spanish?",
      qEs: "¿Trabajan en inglés o en español?",
      a: "Both, and in Tijuana that is not a nicety. We build bilingual sites, run campaigns in both languages, and write content that works for a reader who might switch mid-search.",
      aEs: "En los dos, y en Tijuana eso no es un detalle de cortesía. Construimos sitios bilingües, operamos campañas en ambos idiomas y escribimos contenido que funciona para un lector que puede cambiar de idioma a media búsqueda.",
    },
    {
      q: "How long before I see results?",
      qEs: "¿En cuánto tiempo veo resultados?",
      a: "Paid search captures demand that already exists and produces calls within days, though the cost per enquiry takes weeks to stabilise. Local SEO and content take months by construction. We set the evaluation window before starting so neither of us is deciding what counts as success after seeing the result.",
      aEs: "La búsqueda pagada captura demanda que ya existe y produce llamadas en días, aunque el costo por consulta tarda semanas en estabilizarse. El SEO local y el contenido tardan meses por construcción. Fijamos la ventana de evaluación antes de empezar, para que ninguno de los dos decida qué cuenta como éxito después de ver el resultado.",
    },
  ],
  related: [
    "/seo-tijuana",
    "/diseno-web-tijuana",
    "/google-ads-tijuana",
    "/meta-ads-tijuana",
    "/agencia-marketing-digital-ensenada",
  ],
};

export const SEO_TIJUANA: LocalPage = {
  path: "/seo-tijuana",
  service: "SEO",
  serviceEs: "SEO",
  h1: "SEO in Tijuana",
  h1Es: "SEO en Tijuana",
  kicker: "Local search, two languages",
  kickerEs: "Búsqueda local, dos idiomas",
  intro:
    "Ranking in Tijuana means competing for queries typed in two languages, from both sides of a border, against results Google assembles differently depending on where the searcher is standing.",
  introEs:
    "Posicionar en Tijuana significa competir por búsquedas escritas en dos idiomas, desde ambos lados de una frontera, contra resultados que Google arma distinto según dónde esté parado quien busca.",
  seoTitle: "SEO in Tijuana: Local Search Positioning | Aphelion",
  seoTitleEs: "SEO en Tijuana: Posicionamiento en Búsqueda Local | Aphelion",
  seoDescription:
    "SEO for Tijuana businesses: Google Business Profile, bilingual keyword work, local landing pages and technical fixes. Book a diagnostic call.",
  seoDescriptionEs:
    "SEO para negocios de Tijuana: Perfil de Empresa de Google, keywords en dos idiomas, páginas locales y correcciones técnicas. Agenda tu diagnóstico.",
  serviceType: "Search engine optimization",
  sections: [
    {
      id: "el-perfil-pesa-mas",
      heading: "The Business Profile outranks your website for local queries",
      headingEs: "El Perfil de Empresa pesa más que tu sitio en búsquedas locales",
      body: [
        "For a search like plomero en Tijuana, the block of three businesses with a map above the normal results is what most people click. That block is populated from Google Business Profiles, not from websites.",
        "Which means the highest-return SEO work for a local business is often not on the site at all. A complete profile with the right primary category, real photographs, current hours, and a steady flow of recent reviews moves that block more than a month of content does.",
        "The profile also needs to agree with your site. Name, address and phone that differ between the two is a signal of an unmaintained business, and it is one of the most common problems we find.",
        "Reviews belong to this work, and they have rules. Google prohibits offering incentives for reviews and prohibits selectively soliciting only the happy customers. We wrote the compliant system up in detail for clinics, and the mechanics apply to any local business.",
      ],
      bodyEs: [
        "Para una búsqueda como plomero en Tijuana, el bloque de tres negocios con mapa arriba de los resultados normales es lo que la mayoría de la gente clickea. Ese bloque se llena desde los Perfiles de Empresa de Google, no desde los sitios web.",
        "Lo que significa que el trabajo de SEO de mayor retorno para un negocio local muchas veces no está en el sitio. Un perfil completo con la categoría principal correcta, fotografías reales, horarios al día y un flujo constante de reseñas recientes mueve ese bloque más que un mes de contenido.",
        "El perfil además tiene que coincidir con tu sitio. Nombre, dirección y teléfono distintos entre los dos es señal de un negocio sin mantenimiento, y es uno de los problemas más comunes que encontramos.",
        "Las reseñas son parte de este trabajo y tienen reglas. Google prohíbe ofrecer incentivos por reseñas y prohíbe solicitarlas selectivamente solo a los clientes contentos. Escribimos el sistema que cumple con detalle para clínicas, y la mecánica aplica a cualquier negocio local.",
      ],
    },
    {
      id: "dos-idiomas",
      heading: "Keyword research in a bilingual city",
      headingEs: "Investigación de palabras clave en una ciudad bilingüe",
      body: [
        "Standard keyword research on a Tijuana business tends to produce a Spanish list, because that is what the tools default to for a Mexican location. It is usually half the picture.",
        "Real Tijuana search behaviour mixes: English terms typed by residents who work or studied across the border, Spanglish variants, and English queries from San Diego residents shopping for services in Tijuana, which is a substantial market in dentistry, medical treatment, and vehicle work.",
        "Handling that properly is a site architecture decision, not a translation task. Machine-translating your Spanish pages into English produces pages that rank for nothing, because the English terms people actually search are not literal translations of the Spanish ones.",
        "It also means hreflang and language targeting have to be right, or Google shows the wrong version to the wrong searcher and the bounce rate quietly tells it your page is a poor answer.",
      ],
      bodyEs: [
        "La investigación de palabras clave estándar sobre un negocio de Tijuana suele producir una lista en español, porque es lo que las herramientas asumen para una ubicación mexicana. Normalmente es la mitad del cuadro.",
        "El comportamiento real de búsqueda en Tijuana se mezcla: términos en inglés tecleados por residentes que trabajan o estudiaron del otro lado, variantes en spanglish, y búsquedas en inglés de residentes de San Diego que buscan servicios en Tijuana, que es un mercado sustancial en odontología, tratamiento médico y trabajo automotriz.",
        "Atender eso bien es una decisión de arquitectura del sitio, no una tarea de traducción. Traducir tus páginas en español al inglés con máquina produce páginas que no posicionan para nada, porque los términos en inglés que la gente realmente busca no son traducciones literales de los del español.",
        "También significa que el hreflang y la segmentación por idioma tienen que estar bien, o Google le muestra la versión equivocada a la persona equivocada y la tasa de rebote le va diciendo en silencio que tu página es una mala respuesta.",
      ],
    },
    {
      id: "paginas-locales",
      heading: "One page per service, per city",
      headingEs: "Una página por servicio, por ciudad",
      body: [
        "A single page listing every service you offer will not rank for any of them. Search engines match a query to a page, and a page about eight things is a weak answer to a question about one.",
        "The structure that works is a page per service, and where you genuinely serve more than one city, a page per service per city. This page is an example of the pattern.",
        "The trap is building those pages by copying one template and swapping the city name. Google calls those doorway pages and treats them as spam. If a Tijuana page and a Mexicali page say the same thing with two words changed, neither deserves to rank and eventually neither will.",
        "Which means city pages are only worth building where you have something specific to say about that city, and where you actually serve it.",
      ],
      bodyEs: [
        "Una sola página que enlista todos los servicios que ofreces no va a posicionar para ninguno. Los buscadores emparejan una búsqueda con una página, y una página sobre ocho cosas es una respuesta débil a una pregunta sobre una.",
        "La estructura que funciona es una página por servicio, y donde de verdad atiendes más de una ciudad, una página por servicio por ciudad. Esta página es un ejemplo del patrón.",
        "La trampa es construir esas páginas copiando una plantilla y cambiando el nombre de la ciudad. Google las llama doorway pages y las trata como spam. Si una página de Tijuana y una de Mexicali dicen lo mismo con dos palabras cambiadas, ninguna merece posicionar y eventualmente ninguna lo hará.",
        "Lo que significa que las páginas de ciudad solo valen la pena donde tienes algo específico que decir sobre esa ciudad, y donde de verdad la atiendes.",
      ],
    },
    {
      id: "tecnico",
      heading: "The technical floor",
      headingEs: "El piso técnico",
      body: [
        "None of the above survives a site Google cannot crawl or a user abandons before it paints.",
        "Speed on mobile data matters more here than the lab scores suggest, because a lot of local search happens on a phone away from wifi.",
        "A sitemap that reflects the site as it actually is. This is more often broken than people expect: a sitemap generated once by hand and never updated tells search engines your newest pages do not exist.",
        "Structured data that matches reality. Marking up an address you do not occupy or reviews you did not receive is a risk, not a shortcut.",
        "And internal links that connect the pages to each other. Pages nobody links to are pages search engines find last and value least.",
      ],
      bodyEs: [
        "Nada de lo anterior sobrevive a un sitio que Google no puede rastrear o que el usuario abandona antes de que pinte.",
        "La velocidad en datos móviles importa aquí más de lo que sugieren las mediciones de laboratorio, porque mucha búsqueda local ocurre en un teléfono lejos del wifi.",
        "Un sitemap que refleje el sitio como realmente es. Esto está roto más seguido de lo que la gente cree: un sitemap generado una vez a mano y nunca actualizado le dice a los buscadores que tus páginas más nuevas no existen.",
        "Datos estructurados que coincidan con la realidad. Marcar una dirección que no ocupas o reseñas que no recibiste es un riesgo, no un atajo.",
        "Y enlaces internos que conecten las páginas entre sí. Las páginas que nadie enlaza son las que los buscadores encuentran al final y valoran menos.",
      ],
    },
  ],
  faq: [
    {
      q: "How long does SEO take in Tijuana?",
      qEs: "¿Cuánto tarda el SEO en Tijuana?",
      a: "Business Profile work can move the map results in weeks because it is the fastest-reacting surface. Rankings for competitive service terms take months. Anyone quoting you a fixed date for a first-page position is describing something they cannot control.",
      aEs: "El trabajo sobre el Perfil de Empresa puede mover los resultados del mapa en semanas porque es la superficie que reacciona más rápido. Las posiciones para términos de servicio competidos tardan meses. Quien te cotice una fecha fija para una primera página está describiendo algo que no controla.",
    },
    {
      q: "Do I need my site in English too?",
      qEs: "¿Necesito mi sitio también en inglés?",
      a: "It depends on whether you sell to English-speaking buyers, which in Tijuana many businesses do without having measured it. Check your analytics for browser language and for traffic originating in California before deciding. If the answer is yes, it needs real English pages, not machine translation.",
      aEs: "Depende de si le vendes a compradores de habla inglesa, cosa que en Tijuana muchos negocios hacen sin haberlo medido. Revisa en tu analítica el idioma del navegador y el tráfico originado en California antes de decidir. Si la respuesta es sí, necesita páginas reales en inglés, no traducción automática.",
    },
    {
      q: "Is SEO better than Google Ads?",
      qEs: "¿Es mejor el SEO que Google Ads?",
      a: "They answer different questions. Ads buy demand today and stop the moment you stop paying. SEO compounds and keeps working, but slowly and with no guaranteed date. Most Tijuana businesses we work with need ads to generate cash flow while the SEO work matures.",
      aEs: "Responden preguntas distintas. Los anuncios compran demanda hoy y se detienen en el momento en que dejas de pagar. El SEO se acumula y sigue trabajando, pero lento y sin fecha garantizada. La mayoría de los negocios de Tijuana con los que trabajamos necesita anuncios para generar flujo mientras el SEO madura.",
    },
    {
      q: "Can you guarantee first place?",
      qEs: "¿Pueden garantizar el primer lugar?",
      a: "No, and neither can anyone else. Nobody controls the ranking algorithm, and a guarantee of position is either a misunderstanding or a sales tactic. What we can commit to is the work, the measurement, and telling you when something is not working.",
      aEs: "No, y nadie más puede. Nadie controla el algoritmo de posicionamiento, y una garantía de posición es o un malentendido o una táctica de venta. A lo que sí nos comprometemos es al trabajo, a la medición y a decirte cuando algo no está funcionando.",
    },
  ],
  related: ["/agencia-marketing-digital-tijuana", "/diseno-web-tijuana", "/google-ads-tijuana"],
  parentPath: "/seo",
  parentLabel: "SEO",
  parentLabelEs: "SEO",
};

export const DISENO_WEB_TIJUANA: LocalPage = {
  path: "/diseno-web-tijuana",
  service: "Web design",
  serviceEs: "Diseño web",
  h1: "Web Design in Tijuana",
  h1Es: "Diseño web en Tijuana",
  kicker: "Sites built to convert",
  kickerEs: "Sitios construidos para convertir",
  intro:
    "A website in a border city is doing an extra job: convincing a buyer who can compare you against options in San Diego that you are a real operation worth calling.",
  introEs:
    "Un sitio web en una ciudad fronteriza hace un trabajo extra: convencer a un comprador que puede compararte contra opciones en San Diego de que eres una operación real que vale la pena llamar.",
  seoTitle: "Web Design in Tijuana: Sites That Convert | Aphelion",
  seoTitleEs: "Diseño Web en Tijuana: Sitios que Convierten | Aphelion",
  seoDescription:
    "Web design for Tijuana businesses: fast, bilingual, mobile-first sites with real contact paths and measurement. Book a diagnostic call.",
  seoDescriptionEs:
    "Diseño web para negocios de Tijuana: sitios rápidos, bilingües y pensados para celular, con rutas de contacto reales y medición. Agenda tu diagnóstico.",
  serviceType: "Web design and development",
  sections: [
    {
      id: "la-decision",
      heading: "What the visitor is deciding",
      headingEs: "Qué está decidiendo el visitante",
      body: [
        "Almost nobody browses a local business website. They arrived with a need and are deciding whether to contact you or the next result.",
        "That decision is made on a small number of signals, and they are not the ones most redesigns focus on. Does this look like a business that still exists. Is there a phone number and will someone answer it. How much is this going to cost, roughly. Where are they and can I get there.",
        "A site organised around those questions outperforms one organised around the company's internal structure, which is how most are built. The About page is rarely the reason anyone calls.",
        "For businesses selling across the border there is one more: does this look like an operation a foreign buyer can trust. Clear pricing, real photographs of the actual premises, named people, and a site that does not look like it was assembled from a template in 2016.",
      ],
      bodyEs: [
        "Casi nadie navega el sitio de un negocio local. Llegaron con una necesidad y están decidiendo si te contactan a ti o al siguiente resultado.",
        "Esa decisión se toma sobre un número pequeño de señales, y no son las que atiende la mayoría de los rediseños. ¿Esto parece un negocio que sigue existiendo? ¿Hay un teléfono y va a contestar alguien? ¿Cuánto va a costar, aproximadamente? ¿Dónde están y puedo llegar?",
        "Un sitio organizado alrededor de esas preguntas rinde más que uno organizado alrededor de la estructura interna de la empresa, que es como están construidos casi todos. La página de Nosotros rara vez es la razón por la que alguien llama.",
        "Para negocios que venden del otro lado de la frontera hay una más: ¿esto parece una operación en la que un comprador extranjero puede confiar? Precios claros, fotografías reales del local, personas con nombre, y un sitio que no parezca armado con una plantilla de 2016.",
      ],
    },
    {
      id: "movil",
      heading: "Mobile first, on mobile data",
      headingEs: "Móvil primero, con datos móviles",
      body: [
        "The majority of local traffic arrives on a phone, often on a mobile connection rather than wifi, and often in a hurry.",
        "That makes weight a business problem rather than an engineering preference. The most common cause of a slow local business site is uncompressed images uploaded straight from a camera or a phone, and it is also the easiest thing on this page to fix.",
        "The phone number should be a tappable link in the header on every page. Making someone scroll to a contact page to find a number is friction placed exactly where you least want it.",
        "Forms should be short. Every field you add is a reason to abandon, and for a first contact you rarely need more than a name, a way to reach them, and what they want.",
      ],
      bodyEs: [
        "La mayoría del tráfico local llega en un teléfono, seguido con conexión de datos y no wifi, y seguido con prisa.",
        "Eso convierte el peso en un problema de negocio y no en una preferencia de ingeniería. La causa más común de un sitio local lento son imágenes sin comprimir subidas directo de una cámara o un teléfono, y es también lo más fácil de arreglar de toda esta página.",
        "El número de teléfono debe ser un enlace tocable en el encabezado de cada página. Obligar a alguien a hacer scroll hasta una página de contacto para encontrar un número es fricción puesta justo donde menos la quieres.",
        "Los formularios deben ser cortos. Cada campo que agregas es una razón para abandonar, y para un primer contacto rara vez necesitas más que un nombre, una forma de contactarlos y qué quieren.",
      ],
    },
    {
      id: "bilingue",
      heading: "Bilingual done properly",
      headingEs: "Bilingüe hecho en serio",
      body: [
        "A translate widget bolted onto a Spanish site is not a bilingual site. Search engines cannot index what a script generates on the fly, so the English version effectively does not exist to them.",
        "A real bilingual site has separate, indexable URLs per language, hreflang tags declaring the relationship, and copy written rather than machine-translated, because the English terms your buyers search are not literal translations of the Spanish ones.",
        "It also means deciding what happens on first visit. Guessing the language from the browser and redirecting is convenient and occasionally wrong; the safer pattern is to serve a default and make switching obvious and one click away.",
        "Not every Tijuana business needs this. Check your analytics for browser language and California traffic first. Building and maintaining two languages for an audience that is entirely local is work that could have gone somewhere else.",
      ],
      bodyEs: [
        "Un widget de traducción encima de un sitio en español no es un sitio bilingüe. Los buscadores no pueden indexar lo que un script genera al vuelo, así que la versión en inglés efectivamente no existe para ellos.",
        "Un sitio bilingüe real tiene URLs separadas e indexables por idioma, etiquetas hreflang que declaran la relación, y textos escritos y no traducidos por máquina, porque los términos en inglés que buscan tus compradores no son traducciones literales de los del español.",
        "También implica decidir qué pasa en la primera visita. Adivinar el idioma desde el navegador y redirigir es cómodo y ocasionalmente equivocado; el patrón más seguro es servir un idioma por defecto y hacer que cambiar sea obvio y esté a un clic.",
        "No todo negocio de Tijuana necesita esto. Revisa primero en tu analítica el idioma del navegador y el tráfico de California. Construir y mantener dos idiomas para un público completamente local es trabajo que pudo haber ido a otro lado.",
      ],
    },
    {
      id: "medicion",
      heading: "A site you can measure",
      headingEs: "Un sitio que puedas medir",
      body: [
        "A website with no measurement is an expense you cannot evaluate, and it is the norm rather than the exception.",
        "At minimum: analytics installed and actually configured, conversion events on the actions that matter, and call tracking if the phone is how customers reach you, which for most local businesses it is.",
        "That last one is where most local sites go dark. The site generates calls, the calls are not attributed, and six months later nobody can say whether the site paid for itself.",
        "Build it in from the start. Retrofitting measurement onto a finished site is more expensive and usually gets postponed until it is never done.",
      ],
      bodyEs: [
        "Un sitio web sin medición es un gasto que no puedes evaluar, y es la norma más que la excepción.",
        "Como mínimo: analítica instalada y de verdad configurada, eventos de conversión sobre las acciones que importan, y rastreo de llamadas si el teléfono es como te contactan los clientes, que para la mayoría de los negocios locales lo es.",
        "Ese último punto es donde la mayoría de los sitios locales se queda a oscuras. El sitio genera llamadas, las llamadas no se atribuyen, y seis meses después nadie puede decir si el sitio se pagó solo.",
        "Constrúyelo desde el inicio. Agregar medición a un sitio terminado es más caro y normalmente se pospone hasta que nunca se hace.",
      ],
    },
  ],
  faq: [
    {
      q: "How much does a website cost in Tijuana?",
      qEs: "¿Cuánto cuesta un sitio web en Tijuana?",
      a: "It depends on how many pages, whether it is bilingual, and whether it needs booking, payments or a catalogue. We quote after understanding scope. We wrote a breakdown of what actually drives the price in our guide to website costs in Mexico.",
      aEs: "Depende de cuántas páginas, si es bilingüe y si necesita agenda, pagos o catálogo. Cotizamos después de entender el alcance. Escribimos un desglose de lo que realmente mueve el precio en nuestra guía de cuánto cuesta una página web en México.",
    },
    {
      q: "WordPress or custom?",
      qEs: "¿WordPress o a la medida?",
      a: "Whichever fits how you will maintain it. WordPress makes sense when non-technical staff need to publish regularly and you accept the plugin and update maintenance that comes with it. Custom makes sense when speed and a specific experience matter more than self-service editing. The wrong answer is choosing before anyone asked who updates the site.",
      aEs: "La que encaje con cómo lo vas a mantener. WordPress tiene sentido cuando personal no técnico necesita publicar seguido y aceptas el mantenimiento de plugins y actualizaciones que trae. A la medida tiene sentido cuando la velocidad y una experiencia específica importan más que editar sin ayuda. La respuesta equivocada es elegir antes de que alguien preguntara quién actualiza el sitio.",
    },
    {
      q: "Do I need the site in English?",
      qEs: "¿Necesito el sitio en inglés?",
      a: "Only if you sell to English-speaking buyers. Many Tijuana businesses do without having checked. Look at browser language and California-originated traffic in your analytics, then decide. If yes, it needs written English pages, not a translate widget.",
      aEs: "Solo si le vendes a compradores de habla inglesa. Muchos negocios de Tijuana lo hacen sin haberlo verificado. Revisa el idioma del navegador y el tráfico originado en California en tu analítica, y luego decide. Si es que sí, necesita páginas escritas en inglés, no un widget de traducción.",
    },
    {
      q: "Who owns the site when we finish?",
      qEs: "¿De quién es el sitio cuando terminamos?",
      a: "You do: the domain, the code, the hosting account and the analytics. We say this explicitly because holding a client's domain hostage is a real practice in this industry and it is worth asking any agency before you sign.",
      aEs: "Tuyo: el dominio, el código, la cuenta de hosting y la analítica. Lo decimos explícitamente porque retener el dominio de un cliente es una práctica real en esta industria y vale la pena preguntárselo a cualquier agencia antes de firmar.",
    },
  ],
  related: ["/agencia-marketing-digital-tijuana", "/seo-tijuana", "/meta-ads-tijuana"],
  parentPath: "/servicios/websites",
  parentLabel: "Web design",
  parentLabelEs: "Diseño web",
};

export const GOOGLE_ADS_TIJUANA: LocalPage = {
  path: "/google-ads-tijuana",
  service: "Google Ads",
  serviceEs: "Google Ads",
  h1: "Google Ads in Tijuana",
  h1Es: "Google Ads en Tijuana",
  kicker: "Paid search on a border",
  kickerEs: "Búsqueda pagada en una frontera",
  intro:
    "The single most expensive mistake in a Tijuana Google Ads account is geographic, and the default settings make it easy to commit without noticing.",
  introEs:
    "El error más caro en una cuenta de Google Ads de Tijuana es geográfico, y la configuración por defecto hace fácil cometerlo sin notarlo.",
  seoTitle: "Google Ads in Tijuana: Campaign Management | Aphelion",
  seoTitleEs: "Google Ads en Tijuana: Gestión de Campañas | Aphelion",
  seoDescription:
    "Google Ads for Tijuana businesses: border geo-targeting, bilingual keywords, call tracking and clear reporting. Book a diagnostic call.",
  seoDescriptionEs:
    "Google Ads para negocios de Tijuana: segmentación fronteriza, keywords en dos idiomas, rastreo de llamadas y reportes claros. Agenda tu diagnóstico.",
  serviceType: "Google Ads campaign management",
  sections: [
    {
      id: "la-frontera",
      heading: "The border will spend your budget if you let it",
      headingEs: "La frontera se va a gastar tu presupuesto si la dejas",
      body: [
        "Set a radius around a business in Tijuana and a large part of that circle lands in San Diego County. The map looks reasonable. The spend is not.",
        "Two things go wrong at once. You compete in auctions against advertisers bidding dollars, which raises what you pay for every click you do win. And the clicks you win come from people who are not going to cross an international border to use a local service.",
        "There is a second, subtler setting behind this. Google's location options historically default to including people who show interest in your targeted locations, not only people physically in them. On a border that quietly widens your audience in the exact direction you did not want.",
        "The fix is unglamorous: target the city and municipality explicitly rather than a radius, set the location option to presence rather than presence-or-interest, and add exclusions for the areas across the border. Then read the geographic report weekly for the first month, because the report is where you find out what the settings actually did.",
        "Businesses that genuinely want cross-border customers, and in Tijuana many do, should run that as a separate campaign with its own budget, language and copy. Mixing both audiences in one campaign means neither gets optimised.",
      ],
      bodyEs: [
        "Configura un radio alrededor de un negocio en Tijuana y buena parte de ese círculo cae en el condado de San Diego. El mapa se ve razonable. El gasto no.",
        "Dos cosas salen mal a la vez. Compites en subastas contra anunciantes que pujan en dólares, lo que sube lo que pagas por cada clic que sí ganas. Y los clics que ganas vienen de personas que no van a cruzar una frontera internacional para usar un servicio local.",
        "Hay una segunda configuración, más sutil, detrás de esto. Las opciones de ubicación de Google históricamente incluyen por defecto a personas que muestran interés en tus ubicaciones objetivo, no solo a quienes están físicamente en ellas. En una frontera eso ensancha tu público justo en la dirección que no querías.",
        "El arreglo es poco vistoso: segmenta la ciudad y el municipio de forma explícita en lugar de un radio, pon la opción de ubicación en presencia y no en presencia o interés, y agrega exclusiones para las zonas del otro lado. Después lee el reporte geográfico cada semana durante el primer mes, porque el reporte es donde te enteras de lo que la configuración realmente hizo.",
        "Los negocios que sí quieren clientes transfronterizos, y en Tijuana muchos los quieren, deberían correr eso como campaña aparte con su propio presupuesto, idioma y textos. Mezclar ambos públicos en una campaña significa que ninguno se optimiza.",
      ],
    },
    {
      id: "idioma",
      heading: "Language targeting is not translation",
      headingEs: "La segmentación por idioma no es traducción",
      body: [
        "Google's language targeting works on the user's interface and content-language signals, not on the language of the query. Which means a Tijuana resident browsing with an English interface may not see your Spanish-only campaign even while searching in Spanish.",
        "In a bilingual city that is a real gap, and it is invisible in the account because you cannot see impressions you never entered the auction for.",
        "Running both languages is usually right here, but as separate ad groups or campaigns with their own keywords and copy. Translating your Spanish ads into English produces English ads that sound translated, and they underperform against advertisers writing natively.",
        "Keyword research has to happen twice for the same reason. The English terms your buyers use are rarely literal translations, particularly in the categories where cross-border demand is strongest.",
      ],
      bodyEs: [
        "La segmentación por idioma de Google opera sobre la interfaz del usuario y sus señales de idioma de contenido, no sobre el idioma de la búsqueda. Lo que significa que un tijuanense navegando con interfaz en inglés puede no ver tu campaña configurada solo en español, incluso buscando en español.",
        "En una ciudad bilingüe eso es un hueco real, y es invisible en la cuenta porque no puedes ver impresiones de subastas en las que nunca entraste.",
        "Correr ambos idiomas normalmente es lo correcto aquí, pero como grupos de anuncios o campañas separadas con sus propias keywords y textos. Traducir tus anuncios en español al inglés produce anuncios en inglés que suenan traducidos, y rinden menos contra anunciantes que escriben de forma nativa.",
        "La investigación de palabras clave tiene que hacerse dos veces por la misma razón. Los términos en inglés que usan tus compradores rara vez son traducciones literales, sobre todo en las categorías donde la demanda transfronteriza es más fuerte.",
      ],
    },
    {
      id: "llamadas",
      heading: "Most local conversions are phone calls",
      headingEs: "La mayoría de las conversiones locales son llamadas",
      body: [
        "For a local service business the conversion is usually a call, not a form. A campaign optimised on clicks or form fills in that context is optimising the wrong end.",
        "That means call extensions, call-only campaigns where they fit, and call tracking that reports which campaign and which query produced the call. Without tracking, the platform reports its best guess, and its best guess flatters whichever campaign got the most impressions.",
        "Then close the loop backwards. What matters is not the call, it is whether the caller became a customer. Someone has to record that outcome against the source, and it is the step that gets dropped in almost every account we inherit.",
        "Judge the account on cost per customer, not cost per click. Those two numbers can point in opposite directions, and the second one is the one agencies put in reports.",
      ],
      bodyEs: [
        "Para un negocio local de servicios la conversión suele ser una llamada, no un formulario. Una campaña optimizada a clics o envíos de formulario en ese contexto está optimizando el extremo equivocado.",
        "Eso significa extensiones de llamada, campañas de solo llamada donde encajen, y rastreo de llamadas que reporte qué campaña y qué búsqueda produjeron la llamada. Sin rastreo, la plataforma reporta su mejor suposición, y su mejor suposición favorece a la campaña que consiguió más impresiones.",
        "Después cierra el circuito hacia atrás. Lo que importa no es la llamada, es si quien llamó se volvió cliente. Alguien tiene que registrar ese desenlace contra la fuente, y es el paso que se cae en casi toda cuenta que heredamos.",
        "Juzga la cuenta por costo por cliente, no por costo por clic. Esos dos números pueden apuntar en direcciones opuestas, y el segundo es el que las agencias ponen en los reportes.",
      ],
    },
    {
      id: "desperdicio",
      heading: "Where the waste usually is",
      headingEs: "Dónde suele estar el desperdicio",
      body: [
        "Broad match with no negative keyword list. Broad match will find you traffic; without negatives it finds you traffic for things you do not sell.",
        "Search partners and display expansion left enabled on a search campaign, which quietly moves budget onto inventory that converts very differently.",
        "Every ad pointing at the homepage. If someone searched for a specific service and lands on a general page, they have to find it again, and a share of them will not.",
        "No conversion tracking at all, which is more common than it should be and makes every other optimisation guesswork.",
        "Automated bidding running without enough conversion data to learn from. Smart bidding needs volume; switched on too early it optimises toward noise.",
      ],
      bodyEs: [
        "Concordancia amplia sin lista de palabras clave negativas. La amplia te va a encontrar tráfico; sin negativas te encuentra tráfico de cosas que no vendes.",
        "Socios de búsqueda y expansión a display dejados activos en una campaña de búsqueda, lo que mueve presupuesto en silencio hacia inventario que convierte de forma muy distinta.",
        "Todos los anuncios apuntando a la portada. Si alguien buscó un servicio específico y aterriza en una página general, tiene que volver a encontrarlo, y una parte no lo hará.",
        "Sin seguimiento de conversiones, que es más común de lo que debería y convierte en adivinanza cualquier otra optimización.",
        "Puja automática corriendo sin suficientes datos de conversión de los cuales aprender. La puja inteligente necesita volumen; encendida demasiado pronto optimiza hacia ruido.",
      ],
    },
  ],
  faq: [
    {
      q: "What is the minimum budget worth starting with?",
      qEs: "¿Cuál es el presupuesto mínimo con el que vale la pena empezar?",
      a: "It is set by your cost per click and how many conversions you need before the account can learn, not by a universal figure. We work it out from your numbers on the diagnostic call. Anyone quoting a minimum before seeing your category is quoting from habit.",
      aEs: "Lo fija tu costo por clic y cuántas conversiones necesitas antes de que la cuenta pueda aprender, no una cifra universal. Lo calculamos con tus números en la llamada de diagnóstico. Quien te cotice un mínimo antes de ver tu categoría está cotizando por costumbre.",
    },
    {
      q: "Are my ads showing in San Diego?",
      qEs: "¿Mis anuncios se están mostrando en San Diego?",
      a: "Check the geographic report in your account, which shows where impressions and clicks actually happened. If you used a radius around a Tijuana location and left the default location option on, some almost certainly are.",
      aEs: "Revisa el reporte geográfico de tu cuenta, que muestra dónde ocurrieron realmente las impresiones y los clics. Si usaste un radio alrededor de una ubicación de Tijuana y dejaste la opción de ubicación por defecto, casi con seguridad algunos sí.",
    },
    {
      q: "Google Ads or Meta Ads?",
      qEs: "¿Google Ads o Meta Ads?",
      a: "Google captures demand that already exists, so it fits services people search for when they need them. Meta creates demand, so it fits things people do not search for but respond to when shown. Most local businesses start with Google because the intent is already there.",
      aEs: "Google captura demanda que ya existe, así que encaja con servicios que la gente busca cuando los necesita. Meta genera demanda, así que encaja con cosas que la gente no busca pero a las que responde cuando se las muestras. La mayoría de los negocios locales empieza con Google porque la intención ya está ahí.",
    },
    {
      q: "Do you charge a percentage of ad spend?",
      qEs: "¿Cobran un porcentaje de la inversión publicitaria?",
      a: "We quote management separately from spend so the two are never confused. A percentage model rewards an agency for spending more of your money, which is a conflict of interest worth naming out loud whoever you hire.",
      aEs: "Cotizamos la gestión por separado de la inversión, para que nunca se confundan. Un modelo por porcentaje premia a la agencia por gastar más de tu dinero, que es un conflicto de interés que vale la pena nombrar en voz alta con quien sea que contrates.",
    },
  ],
  related: ["/agencia-marketing-digital-tijuana", "/meta-ads-tijuana", "/seo-tijuana"],
  parentPath: "/google-ads",
  parentLabel: "Google Ads",
  parentLabelEs: "Google Ads",
};

export const META_ADS_TIJUANA: LocalPage = {
  path: "/meta-ads-tijuana",
  service: "Meta Ads",
  serviceEs: "Meta Ads",
  h1: "Meta Ads in Tijuana",
  h1Es: "Meta Ads en Tijuana",
  kicker: "Facebook and Instagram",
  kickerEs: "Facebook e Instagram",
  intro:
    "Meta does not capture demand, it creates it. That makes it a different tool from search, and it fails for different reasons in a border city.",
  introEs:
    "Meta no captura demanda, la genera. Eso lo vuelve una herramienta distinta a la búsqueda, y falla por razones distintas en una ciudad fronteriza.",
  seoTitle: "Meta Ads in Tijuana: Facebook & Instagram | Aphelion",
  seoTitleEs: "Meta Ads en Tijuana: Facebook e Instagram | Aphelion",
  seoDescription:
    "Facebook and Instagram ads for Tijuana businesses: local audiences, bilingual creative, pixel setup and clear measurement. Book a diagnostic call.",
  seoDescriptionEs:
    "Anuncios en Facebook e Instagram para negocios de Tijuana: públicos locales, creativos bilingües, pixel configurado y medición clara. Agenda tu diagnóstico.",
  serviceType: "Meta Ads campaign management",
  sections: [
    {
      id: "demanda",
      heading: "You are interrupting, not answering",
      headingEs: "Estás interrumpiendo, no respondiendo",
      body: [
        "Someone on Google typed a query. Someone on Instagram was looking at their friends. That difference decides everything about how the ad should work.",
        "Search ads can be plain and still convert, because the intent arrived with the user. Social ads have to earn the attention first, which is why creative carries most of the performance here and targeting carries less than people expect.",
        "It also changes what you should measure early. A social campaign that produces no sales in week one may still be working; a search campaign that produces no calls in week one usually is not.",
        "The practical consequence for a local business is that Meta suits things people do not search for: a new location opening, a promotion with a deadline, a service people did not know existed, or a category where the buyer needs to see it to want it.",
      ],
      bodyEs: [
        "Alguien en Google tecleó una búsqueda. Alguien en Instagram estaba viendo a sus amigos. Esa diferencia decide todo sobre cómo debe funcionar el anuncio.",
        "Los anuncios de búsqueda pueden ser sobrios y aun así convertir, porque la intención llegó con el usuario. Los anuncios sociales tienen que ganarse la atención primero, y por eso el creativo carga con la mayor parte del rendimiento aquí y la segmentación carga menos de lo que la gente cree.",
        "También cambia qué deberías medir al inicio. Una campaña social que no produce ventas la primera semana puede seguir funcionando; una de búsqueda que no produce llamadas la primera semana normalmente no.",
        "La consecuencia práctica para un negocio local es que Meta encaja con lo que la gente no busca: la apertura de una sucursal, una promoción con fecha límite, un servicio que no sabían que existía, o una categoría donde el comprador necesita verlo para quererlo.",
      ],
    },
    {
      id: "publico-local",
      heading: "Local audiences on a border",
      headingEs: "Públicos locales en una frontera",
      body: [
        "Meta's location targeting has the same border problem as search, with an extra wrinkle: its default includes people recently in a location, not only residents.",
        "For a business in Tijuana that can be an advantage or an expensive accident. If you want San Diego residents who visit Tijuana, that setting is the feature. If you want people who live and shop locally, switch it to residents and watch the delivery change.",
        "Radius targeting deserves the same suspicion here. A twenty-kilometre radius drawn from most of Tijuana crosses an international border.",
        "Keep audiences broad enough to let the system work. Over-segmenting a local audience produces audiences too small to optimise, and Meta's delivery gets worse, not more precise, when you starve it.",
      ],
      bodyEs: [
        "La segmentación por ubicación de Meta tiene el mismo problema fronterizo que la búsqueda, con un pliegue extra: su opción por defecto incluye a personas que estuvieron recientemente en una ubicación, no solo a residentes.",
        "Para un negocio en Tijuana eso puede ser una ventaja o un accidente caro. Si quieres residentes de San Diego que visitan Tijuana, esa configuración es la función. Si quieres gente que vive y compra localmente, cámbiala a residentes y observa cómo cambia la entrega.",
        "La segmentación por radio merece la misma sospecha aquí. Un radio de veinte kilómetros trazado desde casi cualquier punto de Tijuana cruza una frontera internacional.",
        "Mantén los públicos lo bastante amplios para que el sistema trabaje. Sobre-segmentar un público local produce públicos demasiado chicos para optimizar, y la entrega de Meta empeora, no se vuelve más precisa, cuando la matas de hambre.",
      ],
    },
    {
      id: "creativo",
      heading: "Creative is the campaign",
      headingEs: "El creativo es la campaña",
      body: [
        "On Meta the creative does most of the work. Two ads to the same audience with the same budget routinely differ by more than any targeting change would produce.",
        "Video shot on a phone inside your actual business tends to outperform polished stock production, because it looks like the platform it is on rather than like an advertisement placed on it.",
        "Bilingual matters here too, and it is not a translation job. Run separate creative per language and let the results tell you the split, rather than assuming the city's mix.",
        "Plan for fatigue. A local audience is small, so people see the same ad repeatedly and stop responding faster than a national advertiser would experience. Rotating creative on a schedule is cheaper than diagnosing the decline every time it happens.",
      ],
      bodyEs: [
        "En Meta el creativo hace la mayor parte del trabajo. Dos anuncios al mismo público con el mismo presupuesto rutinariamente difieren más de lo que produciría cualquier cambio de segmentación.",
        "El video grabado con teléfono dentro de tu negocio real suele rendir más que la producción pulida de banco, porque se parece a la plataforma en la que está en lugar de parecer un anuncio colocado ahí.",
        "El bilingüe importa aquí también, y no es un trabajo de traducción. Corre creativos separados por idioma y deja que los resultados te digan la proporción, en lugar de asumir la mezcla de la ciudad.",
        "Planea para la fatiga. Un público local es chico, así que la gente ve el mismo anuncio repetidamente y deja de responder más rápido de lo que le pasaría a un anunciante nacional. Rotar creativos con calendario es más barato que diagnosticar la caída cada vez que ocurre.",
      ],
    },
    {
      id: "medicion-meta",
      heading: "Measuring something Meta measures generously",
      headingEs: "Medir algo que Meta mide con generosidad",
      body: [
        "Meta reports conversions using its own attribution model, and that model is inclined to take credit. The numbers in the dashboard are usually higher than the ones in your bank account.",
        "This is not an argument against the channel, it is an argument for a second source of truth. Compare platform-reported conversions against actual customers recorded on your side, and manage to the gap rather than pretending it is not there.",
        "Install the pixel properly and set up conversion events for the actions that matter. A pixel firing only page views tells the optimiser nothing useful to optimise toward.",
        "For a local business, add the offline half: ask new customers how they found you, and record it. It is the least sophisticated measurement on this page and frequently the most accurate.",
      ],
      bodyEs: [
        "Meta reporta conversiones con su propio modelo de atribución, y ese modelo tiende a atribuirse el crédito. Los números del panel normalmente son más altos que los de tu cuenta bancaria.",
        "Esto no es un argumento contra el canal, es un argumento a favor de una segunda fuente de verdad. Compara las conversiones que reporta la plataforma contra los clientes reales registrados de tu lado, y administra la brecha en lugar de fingir que no está.",
        "Instala el pixel bien y configura eventos de conversión sobre las acciones que importan. Un pixel que solo dispara vistas de página no le dice al optimizador nada útil hacia lo cual optimizar.",
        "Para un negocio local, agrega la mitad offline: pregúntale a los clientes nuevos cómo te encontraron, y regístralo. Es la medición menos sofisticada de esta página y con frecuencia la más exacta.",
      ],
    },
  ],
  faq: [
    {
      q: "Is Meta cheaper than Google in Tijuana?",
      qEs: "¿Meta es más barato que Google en Tijuana?",
      a: "Cost per click is usually lower and cost per customer often is not, because the traffic arrives without intent. Compare the two on cost per customer, which is the only comparison that means anything.",
      aEs: "El costo por clic suele ser más bajo y el costo por cliente muchas veces no, porque el tráfico llega sin intención. Compara los dos por costo por cliente, que es la única comparación que significa algo.",
    },
    {
      q: "How much creative do I need to start?",
      qEs: "¿Cuánto creativo necesito para empezar?",
      a: "Enough to test more than one idea, which in practice means at least three or four distinct concepts rather than three crops of the same photo. Testing one creative tells you whether that creative works, not whether the channel does.",
      aEs: "Suficiente para probar más de una idea, lo que en la práctica significa al menos tres o cuatro conceptos distintos y no tres recortes de la misma foto. Probar un creativo te dice si ese creativo funciona, no si el canal funciona.",
    },
    {
      q: "Can I target only people in Tijuana?",
      qEs: "¿Puedo segmentar solo a gente en Tijuana?",
      a: "Yes, by setting the location option to people living in the location rather than the default that also includes recent visitors. Worth checking on an existing account, because the default is not the local-residents one.",
      aEs: "Sí, poniendo la opción de ubicación en personas que viven en el lugar y no en la opción por defecto que también incluye a visitantes recientes. Vale la pena revisarlo en una cuenta existente, porque la opción por defecto no es la de residentes locales.",
    },
    {
      q: "My ads got rejected. Why?",
      qEs: "Me rechazaron los anuncios. ¿Por qué?",
      a: "Most rejections come from copy that addresses a personal attribute in the second person, which Meta restricts, or from category rules in health, finance, housing and employment. The fix is usually rewriting the ad to describe what you offer rather than who the reader is.",
      aEs: "La mayoría de los rechazos vienen de textos que se dirigen a un atributo personal en segunda persona, que Meta restringe, o de reglas de categoría en salud, finanzas, vivienda y empleo. El arreglo suele ser reescribir el anuncio para describir lo que ofreces en lugar de quién es el lector.",
    },
  ],
  related: ["/agencia-marketing-digital-tijuana", "/google-ads-tijuana", "/diseno-web-tijuana"],
  parentPath: "/meta-ads",
  parentLabel: "Meta Ads",
  parentLabelEs: "Meta Ads",
};

/**
 * Ensenada hub. Written separately from the Tijuana pages, not templated: the
 * economy here runs on tourism, the Valle de Guadalupe wine route, the port
 * and the sea, and the marketing problems differ accordingly.
 */
export const ENSENADA_HUB: LocalPage = {
  path: "/agencia-marketing-digital-ensenada",
  service: "Digital marketing",
  serviceEs: "Marketing digital",
  h1: "Digital Marketing Agency in Ensenada",
  h1Es: "Agencia de marketing digital en Ensenada",
  kicker: "Ensenada and Valle de Guadalupe",
  kickerEs: "Ensenada y Valle de Guadalupe",
  intro:
    "We build websites, run campaigns and produce video, including drone footage, for businesses in Ensenada and the Valle de Guadalupe. Here is what changes when your customers are as likely to be visitors planning a weekend as neighbours down the street.",
  introEs:
    "Hacemos sitios web, campañas y video, incluida la toma con dron, para negocios en Ensenada y el Valle de Guadalupe. Aquí está lo que cambia cuando tus clientes pueden ser tanto visitantes que planean un fin de semana como vecinos de la misma colonia.",
  seoTitle: "Digital Marketing Agency in Ensenada | Aphelion",
  seoTitleEs: "Agencia de Marketing Digital en Ensenada | Aphelion",
  seoDescription:
    "Digital marketing in Ensenada and Valle de Guadalupe: websites, Google and Meta ads, Google Maps, drone video and WhatsApp automation for tourism and local business.",
  seoDescriptionEs:
    "Marketing digital en Ensenada y Valle de Guadalupe: páginas web, Google y Meta Ads, Google Maps, video con dron y WhatsApp para turismo y negocios locales.",
  serviceType: "Digital marketing agency services",
  sections: [
    {
      id: "por-que-ensenada-es-distinto",
      heading: "Why marketing in Ensenada works differently",
      headingEs: "Por qué el marketing en Ensenada funciona distinto",
      body: [
        "Ensenada has two markets living in the same city. One is local: families and companies who choose a dentist, a workshop or a supplier and stay with them for years. The other is visitors: people from Tijuana, San Diego, Los Angeles and the cruise ships who decide where to eat, sleep or taste wine before they arrive, often in English and always on a phone.",
        "In the local market, reputation travels fast and Google Maps does most of the work. A complete profile, recent reviews and a phone that gets answered decide more than any campaign. In the visitor market, the decision happens days or weeks earlier and somewhere else, so your website, your photos and your presence on maps have to convince someone who has never been here.",
        "Visitors also do not search the way locals talk. They search for “Valle de Guadalupe”, “wineries near Ensenada” or “things to do in Ensenada”, not for your colonia. If your pages do not use the names people actually type, you are invisible to the very customers you most want.",
      ],
      bodyEs: [
        "Ensenada tiene dos mercados viviendo en la misma ciudad. Uno es local: familias y empresas que eligen un dentista, un taller o un proveedor y se quedan con él durante años. El otro son los visitantes: gente de Tijuana, San Diego, Los Ángeles y de los cruceros que decide dónde comer, dormir o probar vino antes de llegar, muchas veces en inglés y siempre desde el celular.",
        "En el mercado local, la reputación corre rápido y Google Maps hace la mayor parte del trabajo. Un perfil completo, reseñas recientes y un teléfono que sí contesta deciden más que cualquier campaña. En el mercado de visitantes, la decisión pasa días o semanas antes y en otro lugar, así que tu página, tus fotos y tu presencia en mapas tienen que convencer a alguien que nunca ha estado aquí.",
        "Además, los visitantes no buscan como hablan los locales. Buscan “Valle de Guadalupe”, “vinícolas cerca de Ensenada” o “qué hacer en Ensenada”, no tu colonia. Si tus páginas no usan los nombres que la gente escribe de verdad, eres invisible justo para los clientes que más quieres.",
      ],
    },
    {
      id: "turismo-y-valle",
      heading: "Tourism and the Valle: selling before they arrive",
      headingEs: "Turismo y el Valle: vender antes de que lleguen",
      body: [
        "For a hotel, a winery, a restaurant or a tour, the most expensive mistake is depending entirely on booking platforms and their commissions. We cover the numbers in [direct bookings for hotels](/blog/reservas-directas-hotel) and [direct bookings for tours](/blog/reservas-directas-tours); the short version is that your own website has to make booking direct as easy as booking through a platform.",
        "Here, unlike a border business in Tijuana, advertising across the border is often the point. A winery or a hotel in Ensenada may want its ads in San Diego and Los Angeles on purpose, timed to the weekends and seasons when people plan their trips. The opposite mistake also exists: spending on visitors when your business lives off locals.",
        "And the place sells itself on camera. The coast, the vineyards and the port photograph well from the air, and we produce that footage ourselves: [drone video in Ensenada](/video-con-dron-ensenada), integrated with the same team that runs your site and your ads.",
      ],
      bodyEs: [
        "Para un hotel, una vinícola, un restaurante o un tour, el error más caro es depender por completo de las plataformas de reservas y sus comisiones. Los números los vemos en [reservas directas para hoteles](/blog/reservas-directas-hotel) y [reservas directas para tours](/blog/reservas-directas-tours); la versión corta es que tu propia página tiene que hacer que reservar directo sea tan fácil como hacerlo en una plataforma.",
        "Aquí, a diferencia de un negocio fronterizo en Tijuana, anunciarse del otro lado muchas veces es justo el objetivo. Una vinícola o un hotel en Ensenada puede querer sus anuncios en San Diego y Los Ángeles a propósito, en los fines de semana y temporadas en que la gente planea su viaje. El error contrario también existe: gastar en visitantes cuando tu negocio vive de los locales.",
        "Y el lugar se vende solo frente a la cámara. La costa, los viñedos y el puerto se ven muy bien desde el aire, y esa toma la producimos nosotros: [video con dron en Ensenada](/video-con-dron-ensenada), integrado al mismo equipo que lleva tu página y tus anuncios.",
      ],
    },
    {
      id: "servicios",
      heading: "What we do in Ensenada",
      headingEs: "Qué hacemos en Ensenada",
      body: [
        "Bilingual websites that load fast on a phone and make it easy to call, write on WhatsApp or book. We explain how we build them in [web design in Ensenada](/diseno-web-ensenada).",
        "Google Business Profile and reviews, which in a city this size are often the first and only thing a customer checks.",
        "Google Ads and Meta Ads with the geography set on purpose: local when you sell to Ensenada, California when you sell to visitors.",
        "Video and photography, aerial and on the ground, for tourism, real estate and products.",
        "WhatsApp automation so reservations and quotes get an answer at night and on weekends, when visitors plan.",
      ],
      bodyEs: [
        "Páginas web bilingües que cargan rápido en el celular y facilitan llamar, escribir por WhatsApp o reservar. Te contamos cómo las hacemos en [diseño web en Ensenada](/diseno-web-ensenada).",
        "Perfil de Empresa de Google y reseñas, que en una ciudad de este tamaño muchas veces son lo primero y lo único que revisa un cliente.",
        "Google Ads y Meta Ads con la geografía puesta a propósito: local cuando le vendes a Ensenada, California cuando le vendes a visitantes.",
        "Video y fotografía, aérea y en tierra, para turismo, bienes raíces y productos.",
        "Automatización de WhatsApp para que las reservas y cotizaciones tengan respuesta de noche y en fin de semana, que es cuando planean los visitantes.",
      ],
    },
    {
      id: "como-trabajamos",
      heading: "How we work",
      headingEs: "Cómo trabajamos",
      body: [
        "We start with the season, not the campaign. A business that sells most of its year in summer and around the harvest festivals in August needs its site, its content and its ads ready before those months, not during them.",
        "We agree on what we will measure before spending a peso: calls, WhatsApp messages, bookings or quotes, not likes. And we set the number that would make us continue or stop.",
        "Everything we build stays in your name: the domain, the website, the ad accounts, the analytics and the footage.",
      ],
      bodyEs: [
        "Empezamos por la temporada, no por la campaña. Un negocio que vende la mayor parte de su año en verano y alrededor de las fiestas de la vendimia en agosto necesita su página, su contenido y sus anuncios listos antes de esos meses, no durante.",
        "Acordamos qué vamos a medir antes de gastar un peso: llamadas, mensajes de WhatsApp, reservas o cotizaciones, no likes. Y fijamos el número que nos haría seguir o parar.",
        "Todo lo que construimos queda a tu nombre: el dominio, la página, las cuentas de anuncios, la analítica y el material grabado.",
      ],
    },
  ],
  faq: [
    {
      q: "Are you based in Ensenada?",
      qEs: "¿Están en Ensenada?",
      a: "We are a Baja California team that works as a service-area business across the state, and our phone line is an Ensenada number. We meet in person in Ensenada and the Valle de Guadalupe by arrangement, and drone and video shoots happen on location. We do not publish a street address we do not occupy.",
      aEs: "Somos un equipo de Baja California que trabaja como negocio de área de servicio en todo el estado, y nuestra línea es un número de Ensenada. Nos reunimos en persona en Ensenada y el Valle de Guadalupe previo acuerdo, y las grabaciones con dron y video se hacen en el lugar. No publicamos una dirección que no ocupamos.",
    },
    {
      q: "Do you work with wineries, hotels and restaurants?",
      qEs: "¿Trabajan con vinícolas, hoteles y restaurantes?",
      a: "Yes. Tourism is a large part of what makes marketing in Ensenada different: direct bookings, bilingual content, Google Maps and visual content that sells the place. We also work with local service businesses, real estate and companies that sell to other companies.",
      aEs: "Sí. El turismo es buena parte de lo que hace distinto el marketing en Ensenada: reservas directas, contenido bilingüe, Google Maps y contenido visual que vende el lugar. También trabajamos con negocios de servicios locales, bienes raíces y empresas que le venden a otras empresas.",
    },
    {
      q: "How much does it cost?",
      qEs: "¿Cuánto cuesta?",
      a: "We quote after a short diagnostic, because a winery that needs bookings and a workshop that needs calls need different things. Build work has a fixed scope, and campaigns have a management fee separate from ad spend.",
      aEs: "Cotizamos después de un diagnóstico corto, porque una vinícola que necesita reservas y un taller que necesita llamadas necesitan cosas distintas. El trabajo de construcción tiene alcance fijo, y las campañas una cuota de gestión separada de la inversión en anuncios.",
    },
    {
      q: "Should I advertise in the United States?",
      qEs: "¿Me conviene anunciarme en Estados Unidos?",
      a: "If you sell to visitors, usually yes, but only in the cities and dates when they plan their trips, and with an English landing page that makes booking easy. If your customers are local, no: that budget is better spent in Ensenada.",
      aEs: "Si le vendes a visitantes, normalmente sí, pero solo en las ciudades y fechas en que planean su viaje, y con una página en inglés que facilite reservar. Si tus clientes son locales, no: ese presupuesto rinde más en Ensenada.",
    },
  ],
  related: ["/diseno-web-ensenada", "/google-ads-ensenada", "/video-con-dron-ensenada"],
};

/* ------------------------------------------------------------------ */
/* Ensenada service pages                                              */
/* ------------------------------------------------------------------ */

export const DISENO_WEB_ENSENADA: LocalPage = {
  path: "/diseno-web-ensenada",
  service: "Web design",
  serviceEs: "Diseño web",
  h1: "Web Design in Ensenada",
  h1Es: "Diseño web en Ensenada",
  kicker: "Ensenada and Valle de Guadalupe",
  kickerEs: "Ensenada y Valle de Guadalupe",
  intro:
    "Websites for businesses in Ensenada that have to work for two very different visitors: the neighbour who already knows you and wants your number, and the traveller in San Diego who has never been here and is deciding where to spend a weekend.",
  introEs:
    "Páginas web para negocios en Ensenada que tienen que funcionar para dos visitantes muy distintos: el vecino que ya te conoce y solo quiere tu número, y el viajero en San Diego que nunca ha venido y está decidiendo dónde pasar un fin de semana.",
  seoTitle: "Web Design in Ensenada: Bilingual Websites | Aphelion",
  seoTitleEs: "Diseño Web en Ensenada: Páginas Bilingües | Aphelion",
  seoDescription:
    "Web design in Ensenada and Valle de Guadalupe: fast bilingual websites with direct booking, WhatsApp and Google Maps for tourism, wineries and local business.",
  seoDescriptionEs:
    "Diseño web en Ensenada y Valle de Guadalupe: páginas rápidas y bilingües con reservas directas, WhatsApp y Google Maps para turismo, vinícolas y negocios locales.",
  serviceType: "Web design",
  sections: [
    {
      id: "dos-visitantes",
      heading: "A website that has to convince someone who has never been here",
      headingEs: "Una página que tiene que convencer a alguien que nunca ha venido",
      body: [
        "For a local business, the website is mostly a confirmation: the customer already heard of you and wants the phone, the hours and how to get there. That page has to load fast on a phone and put WhatsApp and the map one tap away. Nothing more.",
        "For a hotel, a winery, a restaurant or a tour, the website does a much harder job. It has to sell the place to someone who is comparing you, from another country and often in English, against every other option on the route. Photos, prices or at least a price range, how to get there and how to book decide that comparison.",
        "Most sites in Ensenada are built for only one of those two visitors, usually the first. That is why so many tourism businesses end up depending on booking platforms: their own site does not close the sale.",
      ],
      bodyEs: [
        "Para un negocio local, la página es sobre todo una confirmación: el cliente ya oyó de ti y quiere el teléfono, el horario y cómo llegar. Esa página tiene que cargar rápido en el celular y dejar WhatsApp y el mapa a un toque. Nada más.",
        "Para un hotel, una vinícola, un restaurante o un tour, la página hace un trabajo mucho más difícil. Tiene que venderle el lugar a alguien que te está comparando, desde otro país y muchas veces en inglés, contra todas las demás opciones de la ruta. Fotos, precios o al menos un rango, cómo llegar y cómo reservar deciden esa comparación.",
        "La mayoría de los sitios en Ensenada están hechos para uno solo de esos dos visitantes, normalmente el primero. Por eso tantos negocios de turismo terminan dependiendo de las plataformas de reservas: su propia página no cierra la venta.",
      ],
    },
    {
      id: "reservas-directas",
      heading: "Direct bookings instead of commissions",
      headingEs: "Reservas directas en lugar de comisiones",
      body: [
        "Every booking that comes through a platform pays a commission. Every booking that comes through your own site does not. The difference over a season is usually enough to pay for the website several times, and we walk through the numbers in [direct bookings for hotels](/blog/reservas-directas-hotel) and [for tours](/blog/reservas-directas-tours).",
        "Making that happen is less about design and more about friction: availability visible without writing first, a price before the last step, payment or a deposit that works for a visitor with a US card, and a WhatsApp button for whoever still prefers to ask.",
        "Platforms do not disappear. They stay as a channel for people who would never have found you. The goal is that someone who already chose you does not have to go through them to pay you.",
      ],
      bodyEs: [
        "Cada reserva que llega por una plataforma paga comisión. Cada reserva que llega por tu propia página no. La diferencia en una temporada normalmente alcanza para pagar la página varias veces, y hacemos las cuentas en [reservas directas para hoteles](/blog/reservas-directas-hotel) y [para tours](/blog/reservas-directas-tours).",
        "Lograrlo tiene menos que ver con el diseño y más con la fricción: disponibilidad visible sin tener que escribir primero, un precio antes del último paso, un pago o anticipo que funcione para un visitante con tarjeta de Estados Unidos, y un botón de WhatsApp para quien todavía prefiere preguntar.",
        "Las plataformas no desaparecen. Se quedan como canal para la gente que nunca te habría encontrado. El objetivo es que quien ya te eligió no tenga que pasar por ellas para pagarte.",
      ],
    },
    {
      id: "que-incluye",
      heading: "What the site includes",
      headingEs: "Qué incluye la página",
      body: [
        "Spanish and English versions written separately, not machine-translated, with the names visitors actually search: Valle de Guadalupe, La Bufadora, Todos Santos Bay, the wine route.",
        "Photography and video produced by the same team, including aerial footage. In a place that sells on how it looks, stock photos are the fastest way to look like everyone else.",
        "Speed on a phone over a weak signal, because a good share of your visitors will open the site on the road, between wineries, or on a cruise ship's data plan.",
        "Google Business Profile connected to the site, call and WhatsApp tracking, and everything registered in your name: domain, hosting, analytics and content. The full scope and packages are in [websites](/servicios/websites).",
      ],
      bodyEs: [
        "Versiones en español e inglés escritas por separado, no traducidas a máquina, con los nombres que de verdad buscan los visitantes: Valle de Guadalupe, La Bufadora, Bahía de Todos Santos, la ruta del vino.",
        "Fotografía y video hechos por el mismo equipo, incluida la toma aérea. En un lugar que se vende por cómo se ve, las fotos de banco son la forma más rápida de parecerse a todos los demás.",
        "Velocidad en el celular con mala señal, porque buena parte de tus visitantes va a abrir la página en carretera, entre vinícolas o con los datos de un crucero.",
        "Perfil de Empresa de Google conectado a la página, medición de llamadas y WhatsApp, y todo registrado a tu nombre: dominio, hosting, analítica y contenido. El alcance completo y los paquetes están en [páginas web](/servicios/websites).",
      ],
    },
  ],
  faq: [
    {
      q: "Do I need the site in English?",
      qEs: "¿Necesito la página en inglés?",
      a: "If any meaningful part of your customers are visitors, yes. If you sell to people who live in Ensenada, a well-made Spanish site is enough and the budget is better spent elsewhere.",
      aEs: "Si una parte importante de tus clientes son visitantes, sí. Si le vendes a gente que vive en Ensenada, una buena página en español es suficiente y el presupuesto rinde más en otra cosa.",
    },
    {
      q: "Can you connect my booking system?",
      qEs: "¿Pueden conectar mi sistema de reservas?",
      a: "Usually, yes. Most booking and channel-management tools can be embedded or linked so availability shows on your own site. We check which one you use before quoting, because that decides the work involved.",
      aEs: "Normalmente sí. La mayoría de las herramientas de reservas y de gestión de canales se pueden integrar o enlazar para que la disponibilidad aparezca en tu propia página. Revisamos cuál usas antes de cotizar, porque eso define el trabajo.",
    },
    {
      q: "Do you take the photos?",
      qEs: "¿Ustedes toman las fotos?",
      a: "Yes. Photography, video and drone footage are produced in-house and on location in Ensenada and the Valle, so the site and the content are planned together.",
      aEs: "Sí. La fotografía, el video y la toma con dron los producimos nosotros, en el lugar, en Ensenada y el Valle, así que la página y el contenido se planean juntos.",
    },
    {
      q: "Who owns the website?",
      qEs: "¿De quién es la página?",
      a: "You do: domain, hosting, content and analytics are registered in your name from the start.",
      aEs: "Tuya: el dominio, el hosting, el contenido y la analítica quedan a tu nombre desde el inicio.",
    },
  ],
  related: ["/agencia-marketing-digital-ensenada", "/seo-ensenada", "/video-con-dron-ensenada"],
  parentPath: "/servicios/websites",
  parentLabel: "Web design",
  parentLabelEs: "Diseño web",
};

export const SEO_ENSENADA: LocalPage = {
  path: "/seo-ensenada",
  service: "SEO",
  serviceEs: "SEO",
  h1: "SEO in Ensenada",
  h1Es: "SEO en Ensenada",
  kicker: "Local and tourism search",
  kickerEs: "Búsqueda local y turística",
  intro:
    "Ranking in Ensenada is two separate problems. Locals find businesses on Google Maps; visitors find them weeks before the trip, from another city, with searches that often do not even contain the word Ensenada.",
  introEs:
    "Posicionarse en Ensenada son dos problemas distintos. Los locales encuentran negocios en Google Maps; los visitantes los encuentran semanas antes del viaje, desde otra ciudad, con búsquedas que muchas veces ni siquiera llevan la palabra Ensenada.",
  seoTitle: "SEO in Ensenada: Google Maps and Tourism Search | Aphelion",
  seoTitleEs: "SEO en Ensenada: Google Maps y Búsqueda Turística | Aphelion",
  seoDescription:
    "SEO in Ensenada and Valle de Guadalupe: Google Business Profile, reviews and bilingual content that ranks for the searches visitors make before they travel.",
  seoDescriptionEs:
    "SEO en Ensenada y Valle de Guadalupe: Perfil de Empresa de Google, reseñas y contenido bilingüe que aparece en las búsquedas que hacen los visitantes antes de viajar.",
  serviceType: "Search engine optimization",
  sections: [
    {
      id: "maps-primero",
      heading: "For local customers, Google Maps comes first",
      headingEs: "Para el cliente local, Google Maps va primero",
      body: [
        "In a city the size of Ensenada, someone looking for a dentist, a mechanic or a supplier rarely scrolls past the map. The three businesses that show up there take most of the calls, and what puts them there is mostly the Google Business Profile: correct category, complete services, real photos, consistent hours and recent reviews.",
        "That is unglamorous work and it is where we start, because it moves results in weeks rather than months. A website with good content helps the profile rank, but a strong website with a neglected profile still loses on the map.",
        "Reviews deserve a system, not a hope. We set up how and when you ask for them, so they keep arriving steadily instead of in one burst after a campaign and then nothing.",
      ],
      bodyEs: [
        "En una ciudad del tamaño de Ensenada, quien busca un dentista, un mecánico o un proveedor casi nunca baja más allá del mapa. Los tres negocios que aparecen ahí se llevan la mayoría de las llamadas, y lo que los pone ahí es sobre todo el Perfil de Empresa de Google: categoría correcta, servicios completos, fotos reales, horario consistente y reseñas recientes.",
        "Es un trabajo poco vistoso y es donde empezamos, porque mueve resultados en semanas y no en meses. Una página con buen contenido ayuda a que el perfil se posicione, pero una página fuerte con un perfil descuidado igual pierde en el mapa.",
        "Las reseñas merecen un sistema, no una esperanza. Dejamos definido cómo y cuándo pedirlas, para que lleguen de forma constante y no todas de golpe después de una campaña y luego nada.",
      ],
    },
    {
      id: "busqueda-turistica",
      heading: "For visitors, the search happens far away and in advance",
      headingEs: "Para el visitante, la búsqueda pasa lejos y con anticipación",
      body: [
        "Visitors search from San Diego, Los Angeles, Tijuana or Mexico City, days or weeks before they come. Their searches name places and plans, not businesses: “wineries in Valle de Guadalupe”, “where to eat in Ensenada”, “boutique hotel near La Bufadora”, “whale watching Ensenada”.",
        "Ranking for those takes pages that answer them, in the language they were typed in. That usually means content in English as well as Spanish, written for the question rather than translated from the homepage.",
        "It also takes time. Local map results can move in weeks; content that ranks for competitive tourism searches takes months. We say that upfront so the plan is judged on the right timeline.",
      ],
      bodyEs: [
        "Los visitantes buscan desde San Diego, Los Ángeles, Tijuana o la Ciudad de México, días o semanas antes de venir. Sus búsquedas nombran lugares y planes, no negocios: “vinícolas en Valle de Guadalupe”, “dónde comer en Ensenada”, “hotel boutique cerca de La Bufadora”, “avistamiento de ballenas Ensenada”.",
        "Aparecer en esas búsquedas requiere páginas que las respondan, en el idioma en que se escribieron. Normalmente eso significa contenido en inglés además de español, escrito para la pregunta y no traducido de la portada.",
        "También requiere tiempo. Los resultados en el mapa se pueden mover en semanas; el contenido que se posiciona en búsquedas turísticas competidas toma meses. Lo decimos desde el principio para que el plan se juzgue en el plazo correcto.",
      ],
    },
    {
      id: "como-trabajamos-seo",
      heading: "How the work is organised",
      headingEs: "Cómo se organiza el trabajo",
      body: [
        "First month: audit of the Google Business Profile, the website and how you appear today for the searches that matter, plus fixing whatever is broken. Most of the early gains come from here.",
        "Then a monthly cycle: content for the searches your customers make, the review system running, technical fixes, and a report on calls, WhatsApp messages and bookings that came from search, not just positions.",
        "The engagement and how we price it are explained in [SEO](/seo). If your customers are in Tijuana as well, see [SEO in Tijuana](/seo-tijuana), because that market behaves differently.",
      ],
      bodyEs: [
        "Primer mes: auditoría del Perfil de Empresa de Google, de la página y de cómo apareces hoy en las búsquedas que importan, y corregir lo que esté roto. La mayor parte de las mejoras tempranas sale de aquí.",
        "Después un ciclo mensual: contenido para las búsquedas que hacen tus clientes, el sistema de reseñas funcionando, correcciones técnicas y un reporte de llamadas, mensajes de WhatsApp y reservas que llegaron por búsqueda, no solo de posiciones.",
        "El servicio y cómo lo cotizamos están explicados en [SEO](/seo). Si tus clientes también están en Tijuana, revisa [SEO en Tijuana](/seo-tijuana), porque ese mercado se comporta distinto.",
      ],
    },
  ],
  faq: [
    {
      q: "How long until I see results?",
      qEs: "¿En cuánto tiempo veo resultados?",
      a: "Google Maps changes can show in a few weeks. Ranking for competitive tourism searches takes several months of steady content. Anyone promising the first page in a month for a competitive search is guessing.",
      aEs: "Los cambios en Google Maps se pueden ver en unas semanas. Posicionarse en búsquedas turísticas competidas toma varios meses de contenido constante. Quien te prometa primera página en un mes para una búsqueda competida está adivinando.",
    },
    {
      q: "Do I need content in English?",
      qEs: "¿Necesito contenido en inglés?",
      a: "Only if you sell to visitors who search in English. A local service business usually does not, and that budget is better spent on the profile and reviews.",
      aEs: "Solo si le vendes a visitantes que buscan en inglés. Un negocio de servicios locales normalmente no, y ese presupuesto rinde más en el perfil y las reseñas.",
    },
    {
      q: "Can you manage my Google Business Profile?",
      qEs: "¿Pueden manejar mi Perfil de Empresa de Google?",
      a: "Yes, and it is usually the first thing we fix. We work inside your profile with access you grant, so it stays yours.",
      aEs: "Sí, y normalmente es lo primero que arreglamos. Trabajamos dentro de tu perfil con el acceso que tú nos das, así que sigue siendo tuyo.",
    },
    {
      q: "Do you guarantee positions?",
      qEs: "¿Garantizan posiciones?",
      a: "No. Nobody controls Google's results. We commit to the work and report on what reaches your business: calls, messages and bookings.",
      aEs: "No. Nadie controla los resultados de Google. Nos comprometemos con el trabajo y reportamos lo que llega a tu negocio: llamadas, mensajes y reservas.",
    },
  ],
  related: ["/agencia-marketing-digital-ensenada", "/diseno-web-ensenada", "/google-ads-ensenada"],
  parentPath: "/seo",
  parentLabel: "SEO",
  parentLabelEs: "SEO",
};

export const GOOGLE_ADS_ENSENADA: LocalPage = {
  path: "/google-ads-ensenada",
  service: "Google Ads",
  serviceEs: "Google Ads",
  h1: "Google Ads in Ensenada",
  h1Es: "Google Ads en Ensenada",
  kicker: "Paid search in Ensenada",
  kickerEs: "Búsqueda pagada en Ensenada",
  intro:
    "In Ensenada the most important Google Ads setting is not the bid. It is where your ads show: in Ensenada when you sell to locals, in California and Tijuana when you sell to visitors, and timed to the season either way.",
  introEs:
    "En Ensenada la configuración más importante de Google Ads no es la puja. Es dónde salen tus anuncios: en Ensenada cuando le vendes a locales, en California y Tijuana cuando le vendes a visitantes, y en los dos casos al ritmo de la temporada.",
  seoTitle: "Google Ads in Ensenada: Local and Tourism Campaigns | Aphelion",
  seoTitleEs: "Google Ads en Ensenada: Campañas Locales y Turísticas | Aphelion",
  seoDescription:
    "Google Ads in Ensenada and Valle de Guadalupe: campaigns with deliberate geography, seasonal budgets and call tracking for local service and tourism businesses.",
  seoDescriptionEs:
    "Google Ads en Ensenada y Valle de Guadalupe: campañas con la geografía bien puesta, presupuesto por temporada y rastreo de llamadas para servicios locales y turismo.",
  serviceType: "Google Ads campaign management",
  sections: [
    {
      id: "geografia",
      heading: "Geography decides who you are paying for",
      headingEs: "La geografía decide por quién estás pagando",
      body: [
        "A local business in Ensenada, a clinic, a workshop or a supplier, should target Ensenada and its surroundings explicitly and nothing else. Left on defaults, Google also shows ads to people who are merely interested in Ensenada, which in a tourist city means paying for clicks from people who live hundreds of kilometres away and will never call.",
        "A hotel, a winery or a tour wants exactly the opposite: ads in San Diego, Los Angeles, Tijuana or Mexicali, in English where it matters, reaching people while they plan. Showing those ads only in Ensenada reaches visitors when they are already here and have already decided.",
        "Getting this wrong does not look like an error in the account. Clicks still arrive and the cost per click may even look good. The problem only shows up as calls that never come.",
      ],
      bodyEs: [
        "Un negocio local en Ensenada, una clínica, un taller o un proveedor, debe apuntar explícitamente a Ensenada y sus alrededores y a nada más. Con la configuración por defecto, Google también muestra los anuncios a gente que solo está interesada en Ensenada, que en una ciudad turística significa pagar clics de personas que viven a cientos de kilómetros y nunca van a llamar.",
        "Un hotel, una vinícola o un tour quiere justo lo contrario: anuncios en San Diego, Los Ángeles, Tijuana o Mexicali, en inglés donde importa, llegando a la gente mientras planea. Mostrar esos anuncios solo en Ensenada alcanza al visitante cuando ya está aquí y ya decidió.",
        "Equivocarse en esto no se ve como un error en la cuenta. Los clics siguen llegando y el costo por clic hasta puede verse bien. El problema solo aparece como llamadas que nunca llegan.",
      ],
    },
    {
      id: "temporada",
      heading: "Budget follows the season",
      headingEs: "El presupuesto sigue a la temporada",
      body: [
        "Tourism in Ensenada has peaks, summer, long weekends, the harvest festivals in August, and quiet months in between. A flat monthly budget overspends in the slow months and runs out in the busy ones.",
        "We plan the year in advance: more budget in the weeks before each peak, when people search and book, and less once they are already travelling. For local services the curve is flatter, but it still exists.",
        "The calculation of how much to invest, and why there is no universal minimum, is in [Google Ads](/google-ads).",
      ],
      bodyEs: [
        "El turismo en Ensenada tiene picos, el verano, los fines de semana largos, las fiestas de la vendimia en agosto, y meses tranquilos en medio. Un presupuesto mensual parejo gasta de más en los meses lentos y se acaba en los fuertes.",
        "Planeamos el año por adelantado: más presupuesto en las semanas antes de cada pico, cuando la gente busca y reserva, y menos cuando ya está viajando. En servicios locales la curva es más plana, pero también existe.",
        "Cómo calculamos cuánto invertir, y por qué no hay un mínimo universal, está en [Google Ads](/google-ads).",
      ],
    },
    {
      id: "medicion-ensenada",
      heading: "Measure the call, not the click",
      headingEs: "Medir la llamada, no el clic",
      body: [
        "In Ensenada a large share of customers call or write on WhatsApp instead of filling in a form. If the account only measures forms, it is blind to most of what it produces and will optimise toward the wrong thing.",
        "So call tracking and WhatsApp tracking go in before spending. Reports are on cost per enquiry and cost per customer, not cost per click.",
        "And someone has to answer. Ads that generate calls on Saturday afternoon to a phone nobody picks up are paying for your competitors' business.",
      ],
      bodyEs: [
        "En Ensenada una gran parte de los clientes llama o escribe por WhatsApp en lugar de llenar un formulario. Si la cuenta solo mide formularios, no ve la mayor parte de lo que produce y va a optimizar hacia lo equivocado.",
        "Por eso el rastreo de llamadas y de WhatsApp se instala antes de gastar. Los reportes son de costo por consulta y costo por cliente, no de costo por clic.",
        "Y alguien tiene que contestar. Anuncios que generan llamadas un sábado en la tarde a un teléfono que nadie levanta están pagando el negocio de tu competencia.",
      ],
    },
  ],
  faq: [
    {
      q: "Should I advertise in the United States?",
      qEs: "¿Me conviene anunciarme en Estados Unidos?",
      a: "If you sell to visitors, usually yes, but only in the cities and dates when they plan, and with an English landing page. If your customers live in Ensenada, no.",
      aEs: "Si le vendes a visitantes, normalmente sí, pero solo en las ciudades y fechas en que planean, y con una landing page en inglés. Si tus clientes viven en Ensenada, no.",
    },
    {
      q: "Do you charge a percentage of ad spend?",
      qEs: "¿Cobran porcentaje de la inversión?",
      a: "No. Management is quoted separately and you pay Google directly.",
      aEs: "No. La gestión se cotiza aparte y la inversión la pagas directo a Google.",
    },
    {
      q: "How soon will it bring calls?",
      qEs: "¿Qué tan pronto llegan llamadas?",
      a: "Usually within days. Getting the cost per customer to a stable number takes several weeks of data.",
      aEs: "Normalmente en días. Que el costo por cliente se estabilice toma varias semanas de datos.",
    },
    {
      q: "Can you run it alongside Meta Ads?",
      qEs: "¿Lo pueden manejar junto con Meta Ads?",
      a: "Yes. Google captures people already searching; Meta reaches people before they search. For tourism the two together usually work better than either alone. See Meta Ads in Ensenada.",
      aEs: "Sí. Google capta a quien ya está buscando; Meta llega a la gente antes de que busque. En turismo los dos juntos normalmente funcionan mejor que cualquiera por separado. Revisa Meta Ads en Ensenada.",
    },
  ],
  related: ["/agencia-marketing-digital-ensenada", "/meta-ads-ensenada", "/seo-ensenada"],
  parentPath: "/google-ads",
  parentLabel: "Google Ads",
  parentLabelEs: "Google Ads",
};

export const META_ADS_ENSENADA: LocalPage = {
  path: "/meta-ads-ensenada",
  service: "Meta Ads",
  serviceEs: "Meta Ads",
  h1: "Meta Ads in Ensenada",
  h1Es: "Meta Ads en Ensenada",
  kicker: "Facebook and Instagram in Ensenada",
  kickerEs: "Facebook e Instagram en Ensenada",
  intro:
    "Ensenada sells on how it looks: the coast, the vineyards, the food. Meta is where that works best, because it puts the image in front of people before they were looking for anything.",
  introEs:
    "Ensenada se vende por cómo se ve: la costa, los viñedos, la comida. Meta es donde eso funciona mejor, porque pone la imagen frente a la gente antes de que estuviera buscando algo.",
  seoTitle: "Meta Ads in Ensenada: Facebook and Instagram Campaigns | Aphelion",
  seoTitleEs: "Meta Ads en Ensenada: Campañas en Facebook e Instagram | Aphelion",
  seoDescription:
    "Facebook and Instagram ads in Ensenada and Valle de Guadalupe: video and drone creative, audiences in California and Baja, and WhatsApp follow-up that books.",
  seoDescriptionEs:
    "Anuncios en Facebook e Instagram en Ensenada y Valle de Guadalupe: creativos en video y dron, audiencias en California y Baja, y seguimiento por WhatsApp que reserva.",
  serviceType: "Meta Ads campaign management",
  sections: [
    {
      id: "creativo",
      heading: "The creative does most of the work",
      headingEs: "El creativo hace la mayor parte del trabajo",
      body: [
        "On Meta, targeting has become largely automatic. What decides whether a campaign works is the video or the image: whether it stops someone mid-scroll and makes them want to be there.",
        "That is an advantage for Ensenada, because the material is outside the door. It is also why we produce the creative ourselves, including [drone footage](/video-con-dron-ensenada), instead of asking you for photos from your phone. A winery at golden hour from the air and the same winery photographed from the parking lot are two different campaigns.",
        "We also plan for fatigue. The same video shown for months to the same audience stops working, so production includes enough variations to rotate through a season.",
      ],
      bodyEs: [
        "En Meta la segmentación ya es en buena parte automática. Lo que decide si una campaña funciona es el video o la imagen: si detiene a alguien mientras hace scroll y le dan ganas de estar ahí.",
        "Eso es una ventaja para Ensenada, porque el material está afuera de la puerta. También es la razón por la que producimos los creativos nosotros, incluida la [toma con dron](/video-con-dron-ensenada), en lugar de pedirte fotos de tu celular. Una vinícola al atardecer desde el aire y la misma vinícola fotografiada desde el estacionamiento son dos campañas distintas.",
        "También planeamos el desgaste. El mismo video mostrado durante meses a la misma audiencia deja de funcionar, así que la producción incluye suficientes variaciones para rotar durante una temporada.",
      ],
    },
    {
      id: "audiencias",
      heading: "Who sees it: locals or visitors",
      headingEs: "Quién lo ve: locales o visitantes",
      body: [
        "For a business that lives off locals, the audience is Ensenada and a reasonable radius, in Spanish. The common mistake is letting Meta expand that audience on its own until half the budget is spent in places you do not serve.",
        "For tourism, the audience is in Southern California, Tijuana and Mexicali, with English creative for English speakers. That is not a translation of the Spanish ad; it is a different ad, because the reasons someone from San Diego comes to Ensenada are not the reasons someone from Tijuana does.",
        "The full approach to targeting and budget is in [Meta Ads](/meta-ads).",
      ],
      bodyEs: [
        "Para un negocio que vive de los locales, la audiencia es Ensenada y un radio razonable, en español. El error común es dejar que Meta amplíe esa audiencia por su cuenta hasta gastar la mitad del presupuesto en lugares que no atiendes.",
        "Para turismo, la audiencia está en el sur de California, Tijuana y Mexicali, con creativos en inglés para quien habla inglés. No es una traducción del anuncio en español; es otro anuncio, porque las razones por las que alguien de San Diego viene a Ensenada no son las mismas que las de alguien de Tijuana.",
        "El enfoque completo de segmentación y presupuesto está en [Meta Ads](/meta-ads).",
      ],
    },
    {
      id: "whatsapp-seguimiento",
      heading: "The sale happens on WhatsApp",
      headingEs: "La venta pasa en WhatsApp",
      body: [
        "Most Meta campaigns in Ensenada end in a WhatsApp conversation, not a purchase. That conversation is where the money is won or lost: a reply in five minutes books, a reply the next day usually does not.",
        "So before scaling a campaign we check who answers, how fast and with what information. Where it helps, we set up automatic first replies so nights and weekends, when visitors plan, do not go unanswered.",
        "And we measure what comes out of those conversations: bookings and quotes, not messages.",
      ],
      bodyEs: [
        "La mayoría de las campañas de Meta en Ensenada terminan en una conversación de WhatsApp, no en una compra. Esa conversación es donde se gana o se pierde el dinero: una respuesta en cinco minutos reserva, una respuesta al día siguiente normalmente no.",
        "Por eso antes de escalar una campaña revisamos quién contesta, qué tan rápido y con qué información. Donde ayuda, dejamos respuestas automáticas iniciales para que las noches y los fines de semana, cuando planean los visitantes, no se queden sin respuesta.",
        "Y medimos lo que sale de esas conversaciones: reservas y cotizaciones, no mensajes.",
      ],
    },
  ],
  faq: [
    {
      q: "Is Meta or Google better for my business?",
      qEs: "¿Me conviene más Meta o Google?",
      a: "Google captures people already searching for what you sell. Meta creates interest in people who were not looking yet. Tourism and visual products usually start with Meta; urgent local services usually start with Google.",
      aEs: "Google capta a quien ya busca lo que vendes. Meta genera interés en gente que todavía no buscaba. El turismo y los productos visuales normalmente arrancan con Meta; los servicios locales urgentes normalmente con Google.",
    },
    {
      q: "Do you produce the videos?",
      qEs: "¿Ustedes hacen los videos?",
      a: "Yes, on location in Ensenada and the Valle, including drone footage. Production is quoted separately from campaign management.",
      aEs: "Sí, en el lugar, en Ensenada y el Valle, incluida la toma con dron. La producción se cotiza aparte de la gestión de campañas.",
    },
    {
      q: "Who owns the ad account and the page?",
      qEs: "¿De quién son la cuenta de anuncios y la página?",
      a: "You do. We work inside your Business Manager with access you grant.",
      aEs: "Tuyas. Trabajamos dentro de tu Business Manager con el acceso que tú nos das.",
    },
    {
      q: "How much should I invest?",
      qEs: "¿Cuánto debo invertir?",
      a: "It depends on what a customer is worth to you and how many you can serve. We calculate it on the call and start small until the data justifies more.",
      aEs: "Depende de cuánto vale un cliente para ti y de cuántos puedes atender. Lo calculamos en la llamada y arrancamos chico hasta que los datos justifiquen más.",
    },
  ],
  related: ["/agencia-marketing-digital-ensenada", "/google-ads-ensenada", "/video-con-dron-ensenada"],
  parentPath: "/meta-ads",
  parentLabel: "Meta Ads",
  parentLabelEs: "Meta Ads",
};

export const DRON_ENSENADA: LocalPage = {
  path: "/video-con-dron-ensenada",
  service: "Drone video",
  serviceEs: "Video con dron",
  h1: "Drone Video in Ensenada",
  h1Es: "Video con dron en Ensenada",
  kicker: "Ensenada, Valle de Guadalupe and the coast",
  kickerEs: "Ensenada, Valle de Guadalupe y la costa",
  intro:
    "Aerial video and photography for wineries, hotels, real estate, construction and events in Ensenada and the Valle de Guadalupe, shot by the same team that will later use it on your website and in your ads.",
  introEs:
    "Video y fotografía aérea para vinícolas, hoteles, bienes raíces, obra y eventos en Ensenada y el Valle de Guadalupe, grabados por el mismo equipo que después lo usa en tu página y en tus anuncios.",
  seoTitle: "Drone Video in Ensenada and Valle de Guadalupe | Aphelion",
  seoTitleEs: "Video con Dron en Ensenada y Valle de Guadalupe | Aphelion",
  seoDescription:
    "Drone video and aerial photography in Ensenada and Valle de Guadalupe for wineries, hotels, real estate, construction and events. Planned for web and ads.",
  seoDescriptionEs:
    "Video con dron y fotografía aérea en Ensenada y Valle de Guadalupe para vinícolas, hoteles, bienes raíces, obra y eventos. Pensado para tu página y tus anuncios.",
  serviceType: "Aerial drone videography",
  sections: [
    {
      id: "para-que-sirve",
      heading: "What it is used for here",
      headingEs: "Para qué se usa aquí",
      body: [
        "Wineries and hotels: showing the place in its setting, the vineyard rows, the valley, the view from the terrace, which is exactly what a ground-level photo cannot do and what a visitor wants to see before booking.",
        "Real estate and developments: the lot, the ocean view, the distance to the beach or to the road, and how a development is progressing. For buyers who are in another country, aerial footage replaces a good part of the first visit.",
        "Construction and processes: periodic flights over the same points to document progress for investors, partners or the record.",
        "Events: weddings in the Valle, openings and activations, from angles that a photographer on the ground does not reach.",
      ],
      bodyEs: [
        "Vinícolas y hoteles: mostrar el lugar en su entorno, las hileras del viñedo, el valle, la vista desde la terraza, justo lo que una foto a nivel de piso no logra y lo que un visitante quiere ver antes de reservar.",
        "Bienes raíces y desarrollos: el terreno, la vista al mar, la distancia a la playa o a la carretera, y cómo avanza un desarrollo. Para compradores que están en otro país, la toma aérea sustituye buena parte de la primera visita.",
        "Obra y procesos: vuelos periódicos sobre los mismos puntos para documentar el avance para inversionistas, socios o el registro.",
        "Eventos: bodas en el Valle, inauguraciones y activaciones, desde ángulos a los que un fotógrafo en tierra no llega.",
      ],
    },
    {
      id: "luz-y-clima",
      heading: "Light, wind and fog",
      headingEs: "Luz, viento y neblina",
      body: [
        "On the coast, morning fog is common and can cover the bay for hours; in the Valle, wind picks up in the afternoon. Both decide when we fly more than the calendar does.",
        "We plan the session around the light the footage needs, usually early morning or the last hour before sunset, and confirm the forecast the day before. If the weather does not allow a usable flight, we reschedule once at no cost.",
        "That is also why shooting with a local team matters: rescheduling a flight across town is simple; rescheduling a crew that drove down from somewhere else is not.",
      ],
      bodyEs: [
        "En la costa, la neblina de la mañana es común y puede cubrir la bahía durante horas; en el Valle, el viento sube en la tarde. Las dos cosas deciden cuándo volamos más que el calendario.",
        "Planeamos la sesión alrededor de la luz que necesita el material, normalmente temprano en la mañana o la última hora antes del atardecer, y confirmamos el pronóstico un día antes. Si el clima no permite un vuelo útil, reprogramamos una vez sin costo.",
        "Por eso también importa grabar con un equipo local: reprogramar un vuelo al otro lado de la ciudad es sencillo; reprogramar a un equipo que vino manejando desde otra ciudad, no.",
      ],
    },
    {
      id: "permisos-y-entrega",
      heading: "Permissions and delivery",
      headingEs: "Permisos y entrega",
      body: [
        "Most areas around Ensenada can be flown normally. Some cannot without a permit, such as the zone around the airport, and private property needs the owner's authorisation. We check the exact location before quoting and tell you if a permit applies.",
        "The material is delivered edited for where it will be used: horizontal for the website, vertical cuts for Instagram and ads, and raw stills for listings. It includes a licence of use for your business.",
        "Packages, extras and what each includes are in [drone video](/servicios/video-con-dron).",
      ],
      bodyEs: [
        "La mayoría de las zonas alrededor de Ensenada se pueden volar normalmente. Algunas no sin permiso, como la zona cercana al aeropuerto, y una propiedad privada necesita la autorización del dueño. Revisamos la ubicación exacta antes de cotizar y te avisamos si aplica un permiso.",
        "El material se entrega editado para donde se va a usar: horizontal para la página, cortes verticales para Instagram y anuncios, y fotos fijas para publicaciones de venta. Incluye licencia de uso para tu negocio.",
        "Los paquetes, extras y qué incluye cada uno están en [video con dron](/servicios/video-con-dron).",
      ],
    },
  ],
  faq: [
    {
      q: "Do you fly in the Valle de Guadalupe?",
      qEs: "¿Vuelan en el Valle de Guadalupe?",
      a: "Yes. Wineries, hotels and events in the Valle are a large part of the aerial work we do, always with the property's authorisation.",
      aEs: "Sí. Las vinícolas, hoteles y eventos del Valle son buena parte del trabajo aéreo que hacemos, siempre con autorización de la propiedad.",
    },
    {
      q: "What happens if there is fog or wind?",
      qEs: "¿Qué pasa si hay neblina o viento?",
      a: "We confirm the forecast the day before and reschedule once at no cost if the weather does not allow a usable flight.",
      aEs: "Confirmamos el pronóstico un día antes y reprogramamos una vez sin costo si el clima no permite un vuelo útil.",
    },
    {
      q: "Can I use the footage in ads?",
      qEs: "¿Puedo usar el material en anuncios?",
      a: "Yes, the licence covers your business's website, social media and advertising. Reselling or transferring it to third parties requires authorisation.",
      aEs: "Sí, la licencia cubre la página, redes sociales y publicidad de tu negocio. Revenderlo o cederlo a terceros requiere autorización.",
    },
    {
      q: "Do you also do ground photography?",
      qEs: "¿También hacen fotografía en tierra?",
      a: "Yes, and it is usually worth doing both in the same visit, so the website and the campaigns have aerial and ground material that match.",
      aEs: "Sí, y normalmente conviene hacer las dos en la misma visita, para que la página y las campañas tengan material aéreo y en tierra que combinen.",
    },
  ],
  related: ["/agencia-marketing-digital-ensenada", "/diseno-web-ensenada", "/meta-ads-ensenada"],
  parentPath: "/servicios/video-con-dron",
  parentLabel: "Drone video",
  parentLabelEs: "Video con dron",
};

/* ------------------------------------------------------------------ */
/* Rosarito                                                            */
/* ------------------------------------------------------------------ */

/**
 * One page only. Rosarito is small enough that a page per service would be
 * the same page with the city swapped, which is the doorway pattern this file
 * exists to avoid. Add service pages here only once there is real Rosarito
 * work to talk about.
 */
export const ROSARITO_HUB: LocalPage = {
  path: "/agencia-marketing-digital-rosarito",
  service: "Digital marketing",
  serviceEs: "Marketing digital",
  h1: "Digital Marketing Agency in Rosarito",
  h1Es: "Agencia de marketing digital en Rosarito",
  kicker: "Playas de Rosarito and Puerto Nuevo",
  kickerEs: "Playas de Rosarito y Puerto Nuevo",
  intro:
    "Websites, campaigns and video for businesses in Rosarito, where a large share of customers live or spend their weekends on the other side of the border and decide in English before they cross.",
  introEs:
    "Páginas web, campañas y video para negocios en Rosarito, donde una buena parte de los clientes vive o pasa sus fines de semana del otro lado de la frontera y decide en inglés antes de cruzar.",
  seoTitle: "Digital Marketing Agency in Rosarito | Aphelion",
  seoTitleEs: "Agencia de Marketing Digital en Rosarito | Aphelion",
  seoDescription:
    "Digital marketing in Rosarito: bilingual websites, Google and Meta ads aimed at Southern California, Google Maps and drone video for real estate, restaurants and hotels.",
  seoDescriptionEs:
    "Marketing digital en Rosarito: páginas bilingües, Google y Meta Ads dirigidos al sur de California, Google Maps y video con dron para bienes raíces, restaurantes y hoteles.",
  serviceType: "Digital marketing agency services",
  sections: [
    {
      id: "mercado-rosarito",
      heading: "Rosarito sells across the border",
      headingEs: "Rosarito le vende al otro lado de la frontera",
      body: [
        "Rosarito's economy leans on people who are not from Rosarito: weekend visitors from San Diego and Los Angeles, Americans and Canadians who own or rent homes here, and buyers looking at beachfront property from another country.",
        "That changes the basics. The website needs a real English version, not an afterthought. Ads often belong in Southern California rather than in Rosarito itself. And Google Maps matters twice: for the visitor deciding where to eat in Puerto Nuevo tonight, and for the resident looking for a service they trust.",
        "At the same time there is a local market, and Tijuana is next door. Part of the work is deciding which of those audiences you actually sell to, because trying to reach all of them with one budget usually reaches none of them well.",
      ],
      bodyEs: [
        "La economía de Rosarito se apoya en gente que no es de Rosarito: visitantes de fin de semana de San Diego y Los Ángeles, estadounidenses y canadienses que tienen o rentan casa aquí, y compradores que ven propiedades frente al mar desde otro país.",
        "Eso cambia lo básico. La página necesita una versión en inglés de verdad, no un agregado. Los anuncios muchas veces van en el sur de California y no en Rosarito mismo. Y Google Maps importa doble: para el visitante que decide dónde cenar en Puerto Nuevo esta noche, y para el residente que busca un servicio de confianza.",
        "Al mismo tiempo hay un mercado local, y Tijuana está al lado. Parte del trabajo es decidir a cuál de esas audiencias le vendes de verdad, porque intentar llegar a todas con un solo presupuesto normalmente no llega bien a ninguna.",
      ],
    },
    {
      id: "inmobiliario",
      heading: "Real estate: selling to a buyer who is not here",
      headingEs: "Bienes raíces: venderle a un comprador que no está aquí",
      body: [
        "For developments and agents, the buyer often sees the property first on a screen in the United States or Canada. Aerial video of the lot and the coastline, clear information about ownership for foreigners, and a fast reply in English do more than another listing portal.",
        "We produce that material ourselves, including [drone video](/servicios/video-con-dron), and connect it to a website and campaigns aimed where the buyers are. How we approach paid campaigns for property is in [Meta Ads](/meta-ads) and [Google Ads](/google-ads).",
      ],
      bodyEs: [
        "Para desarrollos y agentes, el comprador muchas veces ve la propiedad primero en una pantalla en Estados Unidos o Canadá. Un video aéreo del terreno y la costa, información clara sobre cómo compra un extranjero y una respuesta rápida en inglés hacen más que otro portal de anuncios.",
        "Ese material lo producimos nosotros, incluido el [video con dron](/servicios/video-con-dron), y lo conectamos a una página y a campañas dirigidas a donde están los compradores. Cómo trabajamos las campañas para inmuebles está en [Meta Ads](/meta-ads) y [Google Ads](/google-ads).",
      ],
    },
    {
      id: "que-hacemos-rosarito",
      heading: "What we do in Rosarito",
      headingEs: "Qué hacemos en Rosarito",
      body: [
        "Bilingual websites built to convert a visitor from another country: see [websites](/servicios/websites).",
        "Google Business Profile and reviews, for restaurants, hotels and services that live off people passing through.",
        "Google Ads and Meta Ads aimed at Southern California, Tijuana or Rosarito, depending on who actually buys.",
        "Video and aerial photography of the coast, properties and venues.",
        "WhatsApp automation so enquiries from the United States get an answer in English at night and on weekends.",
      ],
      bodyEs: [
        "Páginas bilingües hechas para convertir a un visitante de otro país: revisa [páginas web](/servicios/websites).",
        "Perfil de Empresa de Google y reseñas, para restaurantes, hoteles y servicios que viven de la gente de paso.",
        "Google Ads y Meta Ads dirigidos al sur de California, a Tijuana o a Rosarito, según quién compra de verdad.",
        "Video y fotografía aérea de la costa, propiedades y lugares.",
        "Automatización de WhatsApp para que las consultas desde Estados Unidos tengan respuesta en inglés de noche y en fin de semana.",
      ],
    },
  ],
  faq: [
    {
      q: "Do you work in Rosarito?",
      qEs: "¿Trabajan en Rosarito?",
      a: "Yes. We are a Baja California team working across the state, and we meet and shoot on location in Rosarito by arrangement.",
      aEs: "Sí. Somos un equipo de Baja California que trabaja en todo el estado, y nos reunimos y grabamos en Rosarito previo acuerdo.",
    },
    {
      q: "Should my ads run in the United States?",
      qEs: "¿Mis anuncios deben salir en Estados Unidos?",
      a: "If your customers are visitors or foreign buyers, usually yes, in the cities and on the days when they plan. If you sell to people who live in Rosarito or Tijuana, no.",
      aEs: "Si tus clientes son visitantes o compradores extranjeros, normalmente sí, en las ciudades y los días en que planean. Si le vendes a gente que vive en Rosarito o Tijuana, no.",
    },
    {
      q: "Do you work with real estate developments?",
      qEs: "¿Trabajan con desarrollos inmobiliarios?",
      a: "Yes: website, aerial video, campaigns aimed at buyers in the United States and Canada, and follow-up of enquiries.",
      aEs: "Sí: página, video aéreo, campañas dirigidas a compradores en Estados Unidos y Canadá, y seguimiento de las consultas.",
    },
    {
      q: "How much does it cost?",
      qEs: "¿Cuánto cuesta?",
      a: "We quote after a short diagnostic. Build work has a fixed scope, and campaigns have a management fee separate from ad spend. Packages are on pricing.",
      aEs: "Cotizamos después de un diagnóstico corto. El trabajo de construcción tiene alcance fijo, y las campañas una cuota de gestión separada de la inversión. Los paquetes están en precios.",
    },
  ],
  related: ["/agencia-marketing-digital-tijuana", "/agencia-marketing-digital-ensenada", "/diseno-web-tijuana"],
};

export const LOCAL_PAGES: LocalPage[] = [
  TIJUANA_HUB,
  ENSENADA_HUB,
  SEO_TIJUANA,
  DISENO_WEB_TIJUANA,
  GOOGLE_ADS_TIJUANA,
  META_ADS_TIJUANA,
  DISENO_WEB_ENSENADA,
  SEO_ENSENADA,
  GOOGLE_ADS_ENSENADA,
  META_ADS_ENSENADA,
  DRON_ENSENADA,
  ROSARITO_HUB,
];

export const getLocalPage = (path: string) => LOCAL_PAGES.find((p) => p.path === path);

/**
 * Content for the Tijuana city pages.
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
    "Digital marketing agency serving Tijuana: web design, SEO, Google Ads, Meta Ads and automation. Bilingual work built for a border market. Book a diagnostic call.",
  seoDescriptionEs:
    "Agencia de marketing digital en Tijuana: diseño web, SEO, Google Ads, Meta Ads y automatización. Trabajo bilingüe pensado para un mercado fronterizo. Agenda una llamada de diagnóstico.",
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
  related: ["/seo-tijuana", "/diseno-web-tijuana", "/google-ads-tijuana", "/meta-ads-tijuana"],
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
    "SEO para negocios de Tijuana: Perfil de Empresa de Google, keywords en dos idiomas, páginas locales y correcciones técnicas. Agenda una llamada de diagnóstico.",
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
    "Web design and development for Tijuana businesses: fast, bilingual, mobile-first sites with real booking paths and measurement. Book a diagnostic call.",
  seoDescriptionEs:
    "Diseño y desarrollo web para negocios de Tijuana: sitios rápidos, bilingües y mobile-first, con rutas de contacto reales y medición. Agenda una llamada de diagnóstico.",
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
    "Google Ads management for Tijuana businesses: border geo-targeting, bilingual keywords, call tracking and honest reporting. Book a diagnostic call.",
  seoDescriptionEs:
    "Gestión de Google Ads para negocios de Tijuana: segmentación geográfica fronteriza, keywords en dos idiomas, rastreo de llamadas y reportes honestos. Agenda una llamada de diagnóstico.",
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
    "Facebook and Instagram advertising for Tijuana businesses: local audiences, bilingual creative, pixel setup and honest measurement. Book a diagnostic call.",
  seoDescriptionEs:
    "Publicidad en Facebook e Instagram para negocios de Tijuana: públicos locales, creativos bilingües, configuración de pixel y medición honesta. Agenda una llamada de diagnóstico.",
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

export const LOCAL_PAGES: LocalPage[] = [
  TIJUANA_HUB,
  SEO_TIJUANA,
  DISENO_WEB_TIJUANA,
  GOOGLE_ADS_TIJUANA,
  META_ADS_TIJUANA,
];

export const getLocalPage = (path: string) => LOCAL_PAGES.find((p) => p.path === path);

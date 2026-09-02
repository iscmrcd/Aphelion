/**
 * Standalone service pages.
 *
 * These sit in a three-layer structure and each layer answers a different
 * question, which is the only reason three pages about SEO can coexist without
 * cannibalising each other:
 *
 *   /blog/guia-seo   -> how SEO works (educational)
 *   /seo             -> what the engagement is (commercial, this file)
 *   /seo-tijuana     -> what changes in a border city (local)
 *
 * So nothing here explains what the channel is. It covers deliverables,
 * onboarding, pricing and disqualification. The "when not to hire us" section
 * is deliberate: it is the section a prospect remembers, and it filters the
 * enquiries that waste a diagnostic call.
 *
 * Ecommerce and branding carry a PENDIENTE marker on deliverables and price.
 * Isaac confirmed both are offered, but there is no package data in the
 * codebase to derive from and none was invented.
 */

export type ServiceSection = {
  id: string;
  heading: string;
  headingEs: string;
  body: string[];
  bodyEs: string[];
};

export type ServiceFaq = { q: string; qEs: string; a: string; aEs: string };

export type ServicePage = {
  path: string;
  name: string;
  nameEs: string;
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
  /** Bullet list rendered as "what you get". */
  deliverables: string[];
  deliverablesEs: string[];
  /** True when the deliverables list still needs Isaac's input. */
  deliverablesPending?: boolean;
  /** Pricing note. Never a figure invented here. */
  pricing: string;
  pricingEs: string;
  /** True when no figure exists yet anywhere. */
  pricingPending?: boolean;
  sections: ServiceSection[];
  faq: ServiceFaq[];
  /** Local page for this service, if one exists. */
  localPath?: string;
  /** Educational guide on the blog. */
  guidePath?: string;
};

export const SEO_SERVICE: ServicePage = {
  path: "/seo",
  name: "SEO",
  nameEs: "SEO",
  h1: "SEO",
  h1Es: "SEO",
  kicker: "Organic search",
  kickerEs: "Búsqueda orgánica",
  intro:
    "Search work that compounds instead of stopping the day you stop paying. Slower than ads, cheaper over time, and impossible to guarantee a date for, which is why we tell you upfront what we can and cannot commit to.",
  introEs:
    "Trabajo de búsqueda que se acumula en lugar de detenerse el día que dejas de pagar. Más lento que los anuncios, más barato con el tiempo, e imposible de garantizar con fecha, y por eso te decimos de entrada qué sí y qué no podemos comprometer.",
  seoTitle: "SEO Services | Aphelion",
  seoTitleEs: "Servicios de SEO | Aphelion",
  seoDescription:
    "SEO as an engagement: technical fixes, content, local search and measurement. What you get, how we start and how it is priced. Serving Tijuana and Baja California.",
  seoDescriptionEs:
    "SEO como encargo: correcciones técnicas, contenido, búsqueda local y medición. Qué recibes, cómo arrancamos y cómo se cotiza. Atendemos Tijuana y Baja California.",
  serviceType: "Search engine optimization",
  deliverables: [
    "A technical audit at the start, with the fixes prioritised by impact rather than by how many there are",
    "Keyword and intent research, in both languages where the market needs it",
    "On-page work: titles, structure, internal linking, the pages that already rank and are one step from ranking better",
    "Google Business Profile setup and the review system that feeds it, for local businesses",
    "Content written for queries that exist, not for a monthly word count",
    "Monthly reporting on positions, traffic and enquiries, with the enquiries weighted highest",
  ],
  deliverablesEs: [
    "Auditoría técnica al inicio, con las correcciones priorizadas por impacto y no por cuántas son",
    "Investigación de palabras clave e intención, en los dos idiomas cuando el mercado lo pide",
    "Trabajo on-page: títulos, estructura, enlazado interno, y las páginas que ya posicionan y están a un paso de posicionar mejor",
    "Configuración del Perfil de Empresa de Google y el sistema de reseñas que lo alimenta, para negocios locales",
    "Contenido escrito para búsquedas que existen, no para un conteo mensual de palabras",
    "Reporte mensual de posiciones, tráfico y consultas entrantes, con las consultas pesando más",
  ],
  pricing:
    "SEO is included in the ongoing marketing packages rather than sold as a separate retainer. If you only want search work, we scope it after the audit, because the honest number depends on what the technical state of the site turns out to be.",
  pricingEs:
    "El SEO va dentro de los paquetes continuos de marketing en lugar de venderse como iguala aparte. Si solo quieres trabajo de búsqueda, lo cotizamos después de la auditoría, porque el número honesto depende de en qué estado técnico resulte estar el sitio.",
  sections: [
    {
      id: "primeros-90-dias",
      heading: "The first ninety days",
      headingEs: "Los primeros noventa días",
      body: [
        "Month one is diagnosis and the fixes that do not need permission. Technical audit, crawl issues, the sitemap, page speed, structured data, and the Business Profile if it is a local business. This month rarely moves rankings and always makes the later months possible.",
        "Month two is the pages that already exist. Most sites have pages ranking on the second page for terms they could win, and improving them is faster than writing new ones. This is also when internal linking gets fixed, which is the cheapest ranking work there is and the most commonly skipped.",
        "Month three is new content against researched queries, plus whatever the first two months revealed. By the end of it you should see movement in positions, though enquiries usually lag positions by another month or two.",
        "We say ninety days because that is when the work becomes evaluable, not because it is finished. Anyone describing SEO as a three-month project is describing something else.",
      ],
      bodyEs: [
        "El primer mes es diagnóstico y las correcciones que no necesitan permiso. Auditoría técnica, problemas de rastreo, el sitemap, velocidad, datos estructurados, y el Perfil de Empresa si es un negocio local. Este mes rara vez mueve posiciones y siempre es lo que hace posibles los meses siguientes.",
        "El segundo mes son las páginas que ya existen. Casi todos los sitios tienen páginas en segunda página para términos que podrían ganar, y mejorarlas es más rápido que escribir nuevas. Aquí también se arregla el enlazado interno, que es el trabajo de posicionamiento más barato que hay y el que más se salta.",
        "El tercer mes es contenido nuevo contra búsquedas investigadas, más lo que hayan revelado los dos primeros. Al cerrarlo deberías ver movimiento en posiciones, aunque las consultas entrantes normalmente van uno o dos meses detrás de las posiciones.",
        "Decimos noventa días porque es cuando el trabajo se vuelve evaluable, no porque esté terminado. Quien describa el SEO como un proyecto de tres meses está describiendo otra cosa.",
      ],
    },
    {
      id: "que-reportamos",
      heading: "What we report, and what we refuse to report",
      headingEs: "Qué reportamos, y qué nos negamos a reportar",
      body: [
        "We report positions for the terms agreed at the start, organic traffic, and enquiries attributed to search. Those three, in that order of increasing importance.",
        "We do not report impressions as a headline metric, because impressions rise when you rank badly for more things. We do not report a proprietary score, because a number only we can calculate cannot be checked. And we do not report keyword counts, because ranking for four hundred terms nobody searches is not an achievement.",
        "If the numbers are flat we say they are flat and explain what we think is happening. An agency that has never delivered bad news has either been extraordinarily lucky or is managing your perception rather than your rankings.",
      ],
      bodyEs: [
        "Reportamos posiciones para los términos acordados al inicio, tráfico orgánico, y consultas entrantes atribuidas a búsqueda. Esos tres, en ese orden de importancia creciente.",
        "No reportamos impresiones como métrica principal, porque las impresiones suben cuando posicionas mal para más cosas. No reportamos un puntaje propietario, porque un número que solo nosotros podemos calcular no se puede verificar. Y no reportamos conteo de keywords, porque posicionar para cuatrocientos términos que nadie busca no es un logro.",
        "Si los números están planos decimos que están planos y explicamos qué creemos que está pasando. Una agencia que nunca ha dado una mala noticia o tuvo una suerte extraordinaria o está administrando tu percepción en lugar de tus posiciones.",
      ],
    },
    {
      id: "cuando-no",
      heading: "When you should not hire us for SEO",
      headingEs: "Cuándo no deberías contratarnos SEO",
      body: [
        "If you need customers this quarter. SEO does not work on that timescale and paid search does. We will tell you this on the call rather than sell you a retainer that disappoints in month two.",
        "If your site is about to be rebuilt. Optimising a site that will be replaced wastes both the work and your money. Do the rebuild first, with SEO in the brief.",
        "If the bottleneck is not traffic. If enquiries arrive and do not convert, more traffic multiplies the leak. That is a sales or site problem and it is cheaper to fix.",
        "If you want guaranteed positions. Nobody controls the ranking algorithm, and any guarantee is either a misunderstanding or a sales tactic. We would rather lose the deal than make that promise.",
      ],
      bodyEs: [
        "Si necesitas clientes este trimestre. El SEO no opera en esa escala de tiempo y la búsqueda pagada sí. Te lo decimos en la llamada en lugar de venderte una iguala que decepciona en el segundo mes.",
        "Si tu sitio está por rehacerse. Optimizar un sitio que va a ser reemplazado desperdicia el trabajo y tu dinero. Haz primero el rediseño, con el SEO en el brief.",
        "Si el cuello de botella no es el tráfico. Si las consultas llegan y no convierten, más tráfico multiplica la fuga. Eso es un problema de venta o de sitio y es más barato de arreglar.",
        "Si quieres posiciones garantizadas. Nadie controla el algoritmo, y cualquier garantía es o un malentendido o una táctica de venta. Preferimos perder el trato antes que hacer esa promesa.",
      ],
    },
  ],
  faq: [
    {
      q: "How long until I see results?",
      qEs: "¿En cuánto tiempo veo resultados?",
      a: "Movement in positions usually shows in three to four months, and enquiries lag that by another month or two. Local Business Profile work can move the map results faster, sometimes in weeks. Anyone quoting a fixed date is describing something they do not control.",
      aEs: "El movimiento en posiciones suele verse en tres o cuatro meses, y las consultas van uno o dos meses detrás. El trabajo sobre el Perfil de Empresa puede mover el mapa más rápido, a veces en semanas. Quien te dé una fecha fija está describiendo algo que no controla.",
    },
    {
      q: "Do I have to sign a long contract?",
      qEs: "¿Tengo que firmar un contrato largo?",
      a: "The ongoing marketing packages have minimum terms, listed on the pricing page. The reason is not lock-in, it is that three months of SEO is not enough time to evaluate it and stopping early wastes the setup work you already paid for.",
      aEs: "Los paquetes continuos de marketing tienen plazos mínimos, listados en la página de precios. La razón no es amarrarte, es que tres meses de SEO no alcanzan para evaluarlo y parar temprano desperdicia el trabajo de arranque que ya pagaste.",
    },
    {
      q: "What if I already have an agency?",
      qEs: "¿Y si ya tengo agencia?",
      a: "Ask them for three things: which terms you rank for that you did not before, how many enquiries came from organic search last month, and what they will do next month. If those answers are vague, the problem is diagnosable without changing agencies.",
      aEs: "Pídeles tres cosas: para qué términos posicionas hoy que antes no, cuántas consultas llegaron de búsqueda orgánica el mes pasado, y qué van a hacer el mes que entra. Si esas respuestas son vagas, el problema se puede diagnosticar sin cambiar de agencia.",
    },
    {
      q: "Do you do link building?",
      qEs: "¿Hacen construcción de enlaces?",
      a: "Not by buying links, which violates Google's spam policies and puts the site at risk for a short-term gain. Links that come from being cited, listed in real local directories, and covered by real publications are slower and do not get the site penalised.",
      aEs: "No comprando enlaces, que viola las políticas de spam de Google y pone el sitio en riesgo por una ganancia de corto plazo. Los enlaces que vienen de ser citado, estar en directorios locales reales y ser cubierto por publicaciones reales son más lentos y no te penalizan el sitio.",
    },
  ],
  localPath: "/seo-tijuana",
  guidePath: "/blog/guia-seo",
};

export const GOOGLE_ADS_SERVICE: ServicePage = {
  path: "/google-ads",
  name: "Google Ads",
  nameEs: "Google Ads",
  h1: "Google Ads",
  h1Es: "Google Ads",
  kicker: "Paid search",
  kickerEs: "Búsqueda pagada",
  intro:
    "The fastest way to find out whether people are looking for what you sell. Campaigns produce calls within days; what takes weeks is getting the cost per customer to a number that works.",
  introEs:
    "La forma más rápida de averiguar si alguien está buscando lo que vendes. Las campañas producen llamadas en días; lo que tarda semanas es llevar el costo por cliente a un número que funcione.",
  seoTitle: "Google Ads Management | Aphelion",
  seoTitleEs: "Gestión de Google Ads | Aphelion",
  seoDescription:
    "Google Ads managed with call tracking and honest reporting. What we do, how we start, and management quoted separately from ad spend. Tijuana and Baja California.",
  seoDescriptionEs:
    "Google Ads gestionado con rastreo de llamadas y reportes honestos. Qué hacemos, cómo arrancamos, y gestión cotizada aparte de la inversión. Tijuana y Baja California.",
  serviceType: "Google Ads campaign management",
  deliverables: [
    "Account build or audit: campaign structure, keywords, match types and the negative list most accounts never get",
    "Conversion tracking and call tracking, installed before spending rather than after",
    "Ad copy and extensions, written per ad group instead of one set reused everywhere",
    "Landing page review, because sending paid traffic to a page that does not convert is the most expensive way to learn that",
    "Weekly optimisation: search terms, bids, budget between campaigns, and pausing what is not paying",
    "Monthly reporting on cost per enquiry and cost per customer, not cost per click",
  ],
  deliverablesEs: [
    "Construcción o auditoría de la cuenta: estructura de campañas, palabras clave, concordancias y la lista de negativas que casi ninguna cuenta tiene",
    "Seguimiento de conversiones y rastreo de llamadas, instalados antes de gastar y no después",
    "Textos y extensiones, escritos por grupo de anuncios en lugar de un juego reutilizado en todos lados",
    "Revisión de la landing page, porque mandar tráfico pagado a una página que no convierte es la forma más cara de descubrirlo",
    "Optimización semanal: términos de búsqueda, pujas, presupuesto entre campañas, y pausar lo que no está pagando",
    "Reporte mensual de costo por consulta y costo por cliente, no de costo por clic",
  ],
  pricing:
    "Management is quoted separately from ad spend, and the spend goes directly from you to Google. We do not charge a percentage of spend, because that model rewards an agency for spending more of your money. Campaign management sits inside the ongoing marketing packages.",
  pricingEs:
    "La gestión se cotiza aparte de la inversión, y la inversión la pagas directo a Google. No cobramos porcentaje de la inversión, porque ese modelo premia a la agencia por gastar más de tu dinero. La gestión de campañas va dentro de los paquetes continuos de marketing.",
  sections: [
    {
      id: "antes-de-gastar",
      heading: "What happens before a single peso is spent",
      headingEs: "Qué pasa antes de gastar un solo peso",
      body: [
        "Tracking first. Conversion actions defined, call tracking installed, and a way to tell later which campaign produced which customer. Accounts that start spending before this exist in permanent guesswork, and it is the single most common condition of accounts we inherit.",
        "Then the negative keyword list, built from what you do not sell rather than discovered later from wasted spend. Broad match will find traffic; without negatives it finds traffic for adjacent things you cannot serve.",
        "Then the landing pages. If the ad promises a specific service, the click should land on that service, not the homepage. This is boring and it moves conversion rate more than bid strategy does.",
        "Only then does spend start, deliberately small, until the data says which queries convert.",
      ],
      bodyEs: [
        "La medición primero. Acciones de conversión definidas, rastreo de llamadas instalado, y una forma de saber después qué campaña produjo qué cliente. Las cuentas que empiezan a gastar antes de esto viven en adivinanza permanente, y es la condición más común de las cuentas que heredamos.",
        "Después la lista de palabras clave negativas, construida desde lo que no vendes en lugar de descubrirla después por el gasto desperdiciado. La concordancia amplia va a encontrar tráfico; sin negativas encuentra tráfico de cosas adyacentes que no puedes atender.",
        "Después las landing pages. Si el anuncio promete un servicio específico, el clic debe caer en ese servicio, no en la portada. Esto es aburrido y mueve la tasa de conversión más que la estrategia de puja.",
        "Solo entonces empieza el gasto, deliberadamente chico, hasta que los datos digan qué búsquedas convierten.",
      ],
    },
    {
      id: "presupuesto",
      heading: "How much budget it needs",
      headingEs: "Cuánto presupuesto necesita",
      body: [
        "There is no universal minimum, and any agency quoting one before seeing your category is quoting from habit.",
        "The number is set by two things: what a click costs in your industry, and how many conversions the account needs before automated bidding has anything to learn from. A category with expensive clicks and a long sales cycle needs more runway than one with cheap clicks and same-day decisions.",
        "We work it out from your numbers on the call: what a customer is worth, what share of enquiries become customers, and how many customers you can actually serve. That last one matters and gets skipped. Spending to generate demand you cannot fulfil produces complaints, not revenue.",
        "If the arithmetic says paid search does not work at your customer value, we say so. That is a real outcome and it is cheaper to learn on a call than after three months.",
      ],
      bodyEs: [
        "No hay un mínimo universal, y cualquier agencia que cotice uno antes de ver tu categoría está cotizando por costumbre.",
        "El número lo fijan dos cosas: cuánto cuesta un clic en tu industria, y cuántas conversiones necesita la cuenta antes de que la puja automática tenga de qué aprender. Una categoría con clics caros y ciclo de venta largo necesita más pista que una con clics baratos y decisiones el mismo día.",
        "Lo calculamos con tus números en la llamada: cuánto vale un cliente, qué proporción de consultas se vuelven clientes, y cuántos clientes puedes atender realmente. Ese último importa y se salta. Gastar para generar demanda que no puedes cumplir produce quejas, no ingresos.",
        "Si la aritmética dice que la búsqueda pagada no funciona a tu valor de cliente, lo decimos. Ese es un resultado real y es más barato aprenderlo en una llamada que después de tres meses.",
      ],
    },
    {
      id: "cuando-no-ads",
      heading: "When Google Ads is the wrong answer",
      headingEs: "Cuándo Google Ads es la respuesta equivocada",
      body: [
        "When nobody searches for what you sell. Paid search captures existing demand; it does not create it. For a genuinely new category, Meta or content does that job and Google does not.",
        "When your capacity is full. Buying more enquiries you cannot serve generates waiting lists and irritated prospects.",
        "When the phone goes unanswered during business hours. You would be paying to generate calls for your competitors, and the platform will still report those calls as conversions.",
        "When the margin cannot absorb the click cost. In some categories the auction is priced by advertisers with better unit economics, and no amount of optimisation fixes a structural gap.",
      ],
      bodyEs: [
        "Cuando nadie busca lo que vendes. La búsqueda pagada captura demanda existente; no la genera. Para una categoría genuinamente nueva, Meta o el contenido hacen ese trabajo y Google no.",
        "Cuando tu capacidad está llena. Comprar más consultas que no puedes atender genera listas de espera y prospectos molestos.",
        "Cuando el teléfono no se contesta en horario hábil. Estarías pagando por generarle llamadas a tu competencia, y la plataforma va a seguir reportando esas llamadas como conversiones.",
        "Cuando el margen no aguanta el costo del clic. En algunas categorías la subasta la fijan anunciantes con mejor economía unitaria, y ninguna cantidad de optimización arregla una brecha estructural.",
      ],
    },
  ],
  faq: [
    {
      q: "Do you charge a percentage of ad spend?",
      qEs: "¿Cobran porcentaje de la inversión?",
      a: "No. Management is quoted separately and the spend goes directly from you to Google. A percentage model rewards an agency for spending more of your money, which is a conflict of interest worth naming with whoever you hire.",
      aEs: "No. La gestión se cotiza aparte y la inversión la pagas directo a Google. Un modelo por porcentaje premia a la agencia por gastar más de tu dinero, que es un conflicto de interés que vale la pena nombrar con quien sea que contrates.",
    },
    {
      q: "Who owns the ad account?",
      qEs: "¿De quién es la cuenta de anuncios?",
      a: "You do. We work inside your account rather than a sub-account of ours, so if you leave you keep the account, the history and the learning it accumulated. Ask this of any agency, because the alternative is common and it means starting over when you switch.",
      aEs: "Tuya. Trabajamos dentro de tu cuenta y no en una subcuenta nuestra, así que si te vas conservas la cuenta, el historial y el aprendizaje acumulado. Pregúntaselo a cualquier agencia, porque lo contrario es común y significa empezar de cero al cambiar.",
    },
    {
      q: "How soon will it work?",
      qEs: "¿Qué tan pronto funciona?",
      a: "Calls usually start within days. Cost per enquiry stabilising takes weeks, because that is how long it takes to learn which queries convert and to build the negative list from real data. Judge it at week six, not week two.",
      aEs: "Las llamadas normalmente empiezan en días. Que el costo por consulta se estabilice toma semanas, porque ese es el tiempo que lleva aprender qué búsquedas convierten y construir la lista de negativas con datos reales. Júzgalo en la semana seis, no en la dos.",
    },
    {
      q: "Can you fix an account someone else built?",
      qEs: "¿Pueden arreglar una cuenta que armó alguien más?",
      a: "Usually, and usually the first finding is missing or misconfigured conversion tracking. We audit before proposing changes, because an account that looks broken sometimes just has a measurement problem making good performance invisible.",
      aEs: "Normalmente sí, y normalmente el primer hallazgo es seguimiento de conversiones ausente o mal configurado. Auditamos antes de proponer cambios, porque una cuenta que se ve rota a veces solo tiene un problema de medición que hace invisible un buen desempeño.",
    },
  ],
  localPath: "/google-ads-tijuana",
  guidePath: "/blog/guia-google-ads",
};

export const META_ADS_SERVICE: ServicePage = {
  path: "/meta-ads",
  name: "Meta Ads",
  nameEs: "Meta Ads",
  h1: "Meta Ads",
  h1Es: "Meta Ads",
  kicker: "Facebook and Instagram",
  kickerEs: "Facebook e Instagram",
  intro:
    "For the things people do not search for but respond to when shown. Creative carries most of the performance here, which is why this is a production engagement as much as a media one.",
  introEs:
    "Para lo que la gente no busca pero a lo que responde cuando se lo muestras. Aquí el creativo carga con la mayor parte del rendimiento, y por eso esto es tanto un encargo de producción como de medios.",
  seoTitle: "Meta Ads Management | Aphelion",
  seoTitleEs: "Gestión de Meta Ads | Aphelion",
  seoDescription:
    "Facebook and Instagram advertising with creative production, pixel setup and reporting that accounts for Meta's generous attribution. Tijuana and Baja California.",
  seoDescriptionEs:
    "Publicidad en Facebook e Instagram con producción de creativos, configuración de pixel y reportes que consideran la atribución generosa de Meta. Tijuana y Baja California.",
  serviceType: "Meta Ads campaign management",
  deliverables: [
    "Pixel and conversions API setup, with events on the actions that matter rather than page views only",
    "Campaign and audience structure sized so the system has enough volume to optimise",
    "Creative production: video and static, shot for the platform rather than repurposed from a brochure",
    "A creative rotation schedule, because local audiences are small and fatigue arrives faster than advertisers expect",
    "Weekly optimisation and monthly reporting that compares platform-reported conversions against customers you actually recorded",
  ],
  deliverablesEs: [
    "Configuración de pixel y API de conversiones, con eventos sobre las acciones que importan y no solo vistas de página",
    "Estructura de campañas y públicos dimensionada para que el sistema tenga volumen suficiente para optimizar",
    "Producción de creativos: video y estáticos, grabados para la plataforma en lugar de reciclados de un folleto",
    "Un calendario de rotación de creativos, porque los públicos locales son chicos y la fatiga llega más rápido de lo que los anunciantes esperan",
    "Optimización semanal y reporte mensual que compara las conversiones que reporta la plataforma contra los clientes que registraste de verdad",
  ],
  pricing:
    "Management sits inside the ongoing marketing packages, which include content production. Ad spend is separate and paid directly to Meta. Where a campaign needs production beyond the package, that is quoted per shoot.",
  pricingEs:
    "La gestión va dentro de los paquetes continuos de marketing, que incluyen producción de contenido. La inversión publicitaria es aparte y se paga directo a Meta. Cuando una campaña necesita producción más allá del paquete, eso se cotiza por sesión.",
  sections: [
    {
      id: "creativo-primero",
      heading: "This is a production problem before it is a media problem",
      headingEs: "Esto es un problema de producción antes que de medios",
      body: [
        "Two ads to the same audience with the same budget routinely differ in result by more than any targeting change would produce. That is the central fact about this channel and it decides how the engagement is shaped.",
        "So the work is weighted toward making things: video shot inside your actual business, offers written to be understood in two seconds, and enough distinct concepts to test rather than three crops of one photo.",
        "Testing one creative tells you whether that creative works. It does not tell you whether the channel works, which is the question you are actually paying to answer.",
        "Fatigue is planned for rather than diagnosed. A local audience sees the same ad repeatedly, so rotation is scheduled from the start instead of being a reaction to a decline.",
      ],
      bodyEs: [
        "Dos anuncios al mismo público con el mismo presupuesto rutinariamente difieren en resultado más de lo que produciría cualquier cambio de segmentación. Ese es el hecho central de este canal y decide cómo se arma el encargo.",
        "Así que el trabajo se carga hacia producir: video grabado dentro de tu negocio real, ofertas escritas para entenderse en dos segundos, y suficientes conceptos distintos para probar en lugar de tres recortes de una foto.",
        "Probar un creativo te dice si ese creativo funciona. No te dice si el canal funciona, que es la pregunta que en realidad estás pagando por responder.",
        "La fatiga se planea en lugar de diagnosticarse. Un público local ve el mismo anuncio repetidamente, así que la rotación se agenda desde el inicio en vez de ser una reacción a una caída.",
      ],
    },
    {
      id: "atribucion",
      heading: "Reporting against a platform that flatters itself",
      headingEs: "Reportar contra una plataforma que se halaga sola",
      body: [
        "Meta reports conversions using its own attribution model, and that model is inclined to take credit. The dashboard number is usually higher than the number in your bank account.",
        "This is not a reason to avoid the channel, it is a reason to keep a second source of truth. We compare platform-reported conversions against customers recorded on your side and manage the gap explicitly rather than pretending it is not there.",
        "For a local business the least sophisticated measurement is often the most accurate: ask new customers how they found you and write it down. We set that up as part of the engagement because it is what makes the rest of the reporting checkable.",
      ],
      bodyEs: [
        "Meta reporta conversiones con su propio modelo de atribución, y ese modelo tiende a atribuirse el crédito. El número del panel normalmente es más alto que el de tu cuenta bancaria.",
        "Esto no es razón para evitar el canal, es razón para mantener una segunda fuente de verdad. Comparamos las conversiones que reporta la plataforma contra los clientes registrados de tu lado y administramos la brecha de forma explícita en lugar de fingir que no está.",
        "Para un negocio local la medición menos sofisticada suele ser la más exacta: pregúntale al cliente nuevo cómo te encontró y anótalo. Lo montamos como parte del encargo porque es lo que vuelve verificable el resto del reporte.",
      ],
    },
    {
      id: "cuando-no-meta",
      heading: "When Meta is not the channel",
      headingEs: "Cuándo Meta no es el canal",
      body: [
        "When people already search for what you sell. If demand exists, capturing it on Google is a shorter path than creating it on Meta.",
        "When you have nothing to show. This channel runs on images and video. A business that cannot produce or permit filming will underperform here regardless of budget.",
        "When your category is restricted. Health, finance, housing and employment carry targeting and copy rules that remove most of what makes the channel effective, and ads that address the reader's personal attributes get rejected.",
        "When you need attributable results this month for a board meeting. The attribution gap described above makes this the hardest channel to defend with a single clean number.",
      ],
      bodyEs: [
        "Cuando la gente ya busca lo que vendes. Si la demanda existe, capturarla en Google es un camino más corto que generarla en Meta.",
        "Cuando no tienes qué mostrar. Este canal corre sobre imagen y video. Un negocio que no puede producir ni permitir que se grabe va a rendir por debajo aquí sin importar el presupuesto.",
        "Cuando tu categoría está restringida. Salud, finanzas, vivienda y empleo cargan reglas de segmentación y de texto que quitan buena parte de lo que hace efectivo al canal, y los anuncios que se dirigen a atributos personales del lector se rechazan.",
        "Cuando necesitas resultados atribuibles este mes para un consejo. La brecha de atribución que describimos arriba hace de este el canal más difícil de defender con un solo número limpio.",
      ],
    },
  ],
  faq: [
    {
      q: "Do you produce the creative or do I supply it?",
      qEs: "¿Ustedes producen el creativo o yo lo pongo?",
      a: "We produce it. The ongoing marketing packages include content production for this reason, since a media engagement without creative production on this channel is managing a budget with no lever to pull.",
      aEs: "Nosotros lo producimos. Los paquetes continuos de marketing incluyen producción de contenido justo por eso, porque un encargo de medios sin producción de creativos en este canal es administrar un presupuesto sin palanca que mover.",
    },
    {
      q: "Why did my ads get rejected?",
      qEs: "¿Por qué me rechazaron los anuncios?",
      a: "Most rejections come from copy addressing a personal attribute in the second person, which Meta restricts, or from category rules in health, finance, housing and employment. The fix is usually rewriting to describe what you offer instead of who the reader is.",
      aEs: "La mayoría de los rechazos vienen de textos que se dirigen a un atributo personal en segunda persona, que Meta restringe, o de reglas de categoría en salud, finanzas, vivienda y empleo. El arreglo suele ser reescribir para describir lo que ofreces en lugar de quién es el lector.",
    },
    {
      q: "Is Meta cheaper than Google?",
      qEs: "¿Meta es más barato que Google?",
      a: "Cost per click usually is. Cost per customer often is not, because the traffic arrives without intent. Compare them on cost per customer, which is the only comparison that means anything.",
      aEs: "El costo por clic normalmente sí. El costo por cliente muchas veces no, porque el tráfico llega sin intención. Compáralos por costo por cliente, que es la única comparación que significa algo.",
    },
    {
      q: "Can I run both Meta and Google?",
      qEs: "¿Puedo correr Meta y Google a la vez?",
      a: "Yes, and for most businesses that is the right answer eventually. Start with the one that matches where your demand is, get it measurable, then add the second. Running both from day one with no measurement makes it impossible to tell which is working.",
      aEs: "Sí, y para la mayoría de los negocios esa es la respuesta correcta eventualmente. Empieza por el que coincida con dónde está tu demanda, hazlo medible, y luego agrega el segundo. Correr ambos desde el día uno sin medición hace imposible saber cuál está funcionando.",
    },
  ],
  localPath: "/meta-ads-tijuana",
  guidePath: "/blog/guia-meta-ads",
};

/**
 * Ecommerce and branding: Isaac confirmed both are offered, but the codebase
 * carries no package or price data for either, so nothing specific about
 * deliverables or cost is asserted here. The sections below cover the
 * decisions and trade-offs in each domain, which is defensible expertise, and
 * the deliverables lists are flagged pending so the page renders an honest
 * placeholder instead of an invented scope.
 */

export const ECOMMERCE_SERVICE: ServicePage = {
  path: "/ecommerce",
  name: "Ecommerce",
  nameEs: "Ecommerce",
  h1: "Ecommerce",
  h1Es: "Tiendas en línea",
  kicker: "Online stores",
  kickerEs: "Comercio electrónico",
  intro:
    "An online store is the hardest thing on this list to get right, because it fails quietly. Traffic arrives, carts fill, and the revenue does not appear, usually for reasons that have nothing to do with the design.",
  introEs:
    "Una tienda en línea es lo más difícil de esta lista, porque falla en silencio. Llega tráfico, se llenan carritos, y el ingreso no aparece, normalmente por razones que no tienen nada que ver con el diseño.",
  seoTitle: "Ecommerce Development | Aphelion",
  seoTitleEs: "Desarrollo de Tiendas en Línea | Aphelion",
  seoDescription:
    "Online stores built around the platform decision, payments and shipping in Mexico, and the checkout details that decide conversion. Tijuana and Baja California.",
  seoDescriptionEs:
    "Tiendas en línea construidas alrededor de la decisión de plataforma, pagos y envíos en México, y los detalles de checkout que deciden la conversión. Tijuana y Baja California.",
  serviceType: "Ecommerce website development",
  // PENDIENTE: Isaac define qué incluye cada paquete de ecommerce
  deliverables: [],
  deliverablesEs: [],
  deliverablesPending: true,
  // PENDIENTE: agregar precios de ecommerce cuando Isaac los defina
  pricing: "",
  pricingEs: "",
  pricingPending: true,
  sections: [
    {
      id: "la-plataforma",
      heading: "The platform decision, and why it is not about features",
      headingEs: "La decisión de plataforma, y por qué no se trata de funciones",
      body: [
        "Every platform comparison you will read lists features. Almost none of them matter, because the platforms have converged and they all do the obvious things.",
        "What actually decides it is who maintains the store afterwards. A hosted platform charges a monthly fee and handles security, updates and uptime, so a business without technical staff is buying the absence of a problem. A self-hosted store is cheaper monthly and hands you the plugin conflicts, the update schedule and the security patching.",
        "The second factor is catalogue complexity. Fifteen products with two variants each is a different problem from four thousand SKUs with inventory syncing to a physical shop, and the second one rules out most of the easy answers.",
        "The third is what has to connect: invoicing, inventory, a CRM, a shipping account. Integrations are where ecommerce projects overrun, and they should be listed before anyone quotes, not discovered in month two.",
        "We do not have a default platform we push. The right answer changes with those three inputs, and an agency with one answer for everyone is describing what they like to build.",
      ],
      bodyEs: [
        "Toda comparación de plataformas que vas a leer enlista funciones. Casi ninguna importa, porque las plataformas convergieron y todas hacen lo obvio.",
        "Lo que de verdad decide es quién mantiene la tienda después. Una plataforma alojada cobra una mensualidad y se encarga de seguridad, actualizaciones y disponibilidad, así que un negocio sin personal técnico está comprando la ausencia de un problema. Una tienda autoalojada es más barata al mes y te entrega los conflictos de plugins, el calendario de actualizaciones y el parcheo de seguridad.",
        "El segundo factor es la complejidad del catálogo. Quince productos con dos variantes cada uno es un problema distinto a cuatro mil SKUs con inventario sincronizado a una tienda física, y el segundo descarta casi todas las respuestas fáciles.",
        "El tercero es qué tiene que conectarse: facturación, inventario, un CRM, una cuenta de paquetería. Las integraciones son donde se desbordan los proyectos de ecommerce, y deben enlistarse antes de que alguien cotice, no descubrirse en el segundo mes.",
        "No tenemos una plataforma por defecto que empujemos. La respuesta correcta cambia con esos tres insumos, y una agencia con una sola respuesta para todos está describiendo lo que le gusta construir.",
      ],
    },
    {
      id: "pagos-y-envios",
      heading: "Payments and shipping are the Mexican part",
      headingEs: "Pagos y envíos son la parte mexicana",
      body: [
        "This is where stores built from international tutorials break, because the assumptions do not transfer.",
        "Card penetration is not universal, so a checkout that only takes cards excludes buyers who would have paid. Cash-based and transfer-based methods are still a meaningful share of Mexican ecommerce, and supporting them is a revenue decision rather than a technical one.",
        "Months without interest are an expectation in higher-ticket categories, and whether your processor and your margin can absorb them changes what you can sell online.",
        "Shipping has to be real, not a flat number invented at launch. Rates by zone, a delivery window the customer sees before paying, and tracking that does not require them to write to you. Surprise shipping cost at the final step is one of the most reliable causes of abandonment anywhere.",
        "Invoicing matters more here than in most markets, because a business buyer who cannot get a CFDI will buy elsewhere. If your customers are businesses, this belongs in the first conversation.",
      ],
      bodyEs: [
        "Aquí es donde se rompen las tiendas construidas con tutoriales internacionales, porque los supuestos no se transfieren.",
        "La penetración de tarjeta no es universal, así que un checkout que solo acepta tarjeta excluye compradores que sí habrían pagado. Los métodos en efectivo y por transferencia siguen siendo una parte relevante del comercio electrónico mexicano, y soportarlos es una decisión de ingresos más que técnica.",
        "Los meses sin intereses son una expectativa en categorías de ticket alto, y si tu procesador y tu margen los aguantan cambia qué puedes vender en línea.",
        "El envío tiene que ser real, no un número plano inventado al lanzar. Tarifas por zona, una ventana de entrega que el cliente ve antes de pagar, y rastreo que no lo obligue a escribirte. El costo de envío sorpresa en el último paso es una de las causas más confiables de abandono en cualquier mercado.",
        "La facturación pesa aquí más que en otros mercados, porque un comprador empresa que no puede obtener CFDI compra en otro lado. Si tus clientes son empresas, esto va en la primera conversación.",
      ],
    },
    {
      id: "donde-se-pierde",
      heading: "Where the revenue actually leaks",
      headingEs: "Por dónde se fuga realmente el ingreso",
      body: [
        "Forced account creation before checkout. Guest checkout costs nothing to enable and removes a step that loses buyers who were ready.",
        "Shipping cost revealed at the last step. If it cannot be shown earlier, show the rule earlier.",
        "Product photography that does not answer the question. Buyers cannot hold the item, so the photograph is doing the job of the shelf. Scale, texture and what is in the box are worth more than a styled hero shot.",
        "No abandoned-cart follow-up. It is the highest-return automation in ecommerce and it is frequently not installed.",
        "Mobile checkout that was never completed on a phone by the person who built it. Test it on a phone, on mobile data, with a real card.",
        "Tracking that reports sessions but not revenue by source, which makes every later marketing decision guesswork.",
      ],
      bodyEs: [
        "Obligar a crear cuenta antes de pagar. El checkout como invitado no cuesta nada habilitarlo y quita un paso que pierde compradores que ya estaban listos.",
        "Costo de envío revelado hasta el último paso. Si no se puede mostrar antes, muestra la regla antes.",
        "Fotografía de producto que no responde la pregunta. El comprador no puede tomar el artículo, así que la foto hace el trabajo del anaquel. Escala, textura y qué viene en la caja valen más que una foto de portada estilizada.",
        "Sin seguimiento de carrito abandonado. Es la automatización de mayor retorno en ecommerce y con frecuencia no está instalada.",
        "Checkout móvil que nunca completó en un teléfono quien lo construyó. Pruébalo en un teléfono, con datos móviles y con una tarjeta real.",
        "Medición que reporta sesiones pero no ingreso por fuente, lo que vuelve adivinanza toda decisión de marketing posterior.",
      ],
    },
  ],
  faq: [
    {
      q: "Which platform do you recommend?",
      qEs: "¿Qué plataforma recomiendan?",
      a: "It depends on who maintains the store, how complex the catalogue is, and what has to integrate. Those three answers point clearly, and they point differently for different businesses. We give a recommendation after the evaluation rather than before it.",
      aEs: "Depende de quién mantiene la tienda, qué tan complejo es el catálogo y qué tiene que integrarse. Esas tres respuestas apuntan con claridad, y apuntan distinto según el negocio. Damos una recomendación después de la evaluación, no antes.",
    },
    {
      q: "Can you migrate my existing store?",
      qEs: "¿Pueden migrar mi tienda actual?",
      a: "Usually. The parts that need care are the URLs, since losing them loses the rankings and any links pointing at product pages, and the historical order and customer data. Both are scoped in the evaluation because both are where migrations go wrong.",
      aEs: "Normalmente sí. Las partes que requieren cuidado son las URLs, porque perderlas pierde el posicionamiento y los enlaces que apuntan a páginas de producto, y el histórico de pedidos y clientes. Ambas se dimensionan en la evaluación porque ambas son donde las migraciones salen mal.",
    },
    {
      q: "Do I need a store or is a catalogue enough?",
      qEs: "¿Necesito tienda o me basta un catálogo?",
      a: "If most of your sales close by conversation, a catalogue with a clear contact path often converts better and costs a fraction. Building a full checkout for a business whose customers want to negotiate is a common and expensive mismatch.",
      aEs: "Si la mayoría de tus ventas se cierran conversando, un catálogo con una ruta de contacto clara muchas veces convierte mejor y cuesta una fracción. Construir un checkout completo para un negocio cuyos clientes quieren negociar es un desajuste común y caro.",
    },
    {
      q: "How long does it take?",
      qEs: "¿Cuánto tarda?",
      a: "The build is rarely the long part. What sets the timeline is product data: photographs, descriptions, variants, prices and stock, which usually have to be produced rather than exported. Businesses that underestimate an ecommerce timeline almost always underestimated this.",
      aEs: "La construcción rara vez es lo largo. Lo que fija el tiempo son los datos de producto: fotografías, descripciones, variantes, precios e inventario, que normalmente hay que producir y no exportar. Los negocios que subestiman el tiempo de un ecommerce casi siempre subestimaron esto.",
    },
  ],
};

export const BRANDING_SERVICE: ServicePage = {
  path: "/branding",
  name: "Branding",
  nameEs: "Branding",
  h1: "Branding",
  h1Es: "Branding",
  kicker: "Identity and positioning",
  kickerEs: "Identidad y posicionamiento",
  intro:
    "Most branding projects are bought as a logo and needed as a decision about who you are for. The logo is the easy part and the part that matters least.",
  introEs:
    "Casi todo proyecto de branding se compra como un logo y se necesita como una decisión sobre para quién eres. El logo es la parte fácil y la que menos importa.",
  seoTitle: "Branding and Brand Identity | Aphelion",
  seoTitleEs: "Branding e Identidad de Marca | Aphelion",
  seoDescription:
    "Brand positioning and identity: who you are for, what you say, and a system the rest of your marketing can actually run on. Tijuana and Baja California.",
  seoDescriptionEs:
    "Posicionamiento e identidad de marca: para quién eres, qué dices, y un sistema sobre el que sí pueda correr el resto de tu marketing. Tijuana y Baja California.",
  serviceType: "Brand identity and positioning",
  // PENDIENTE: Isaac define qué incluye cada paquete de branding
  deliverables: [],
  deliverablesEs: [],
  deliverablesPending: true,
  // PENDIENTE: agregar precios de branding cuando Isaac los defina
  pricing: "",
  pricingEs: "",
  pricingPending: true,
  sections: [
    {
      id: "posicionamiento",
      heading: "Positioning is the part that changes revenue",
      headingEs: "El posicionamiento es la parte que cambia los ingresos",
      body: [
        "A brand is the answer to three questions: who is this for, what does it replace, and why should someone believe it. Everything visual is downstream of those answers.",
        "Businesses that skip this end up with an identity that looks fine and communicates nothing, which is why the rebrand does not move sales and everyone concludes branding does not work.",
        "The most useful output of this work is usually subtraction. Deciding who you are not for is what lets the messaging get specific, and specific messaging is what makes ads cheaper, because relevance is priced into every auction you enter.",
        "It also settles arguments that otherwise recur monthly. When the positioning is written down, questions like whether to discount, whether to take a particular client, and what to say in an ad stop being matters of opinion.",
      ],
      bodyEs: [
        "Una marca es la respuesta a tres preguntas: para quién es esto, a qué sustituye, y por qué alguien debería creerlo. Todo lo visual va después de esas respuestas.",
        "Los negocios que se saltan esto terminan con una identidad que se ve bien y no comunica nada, y por eso el rediseño de marca no mueve las ventas y todos concluyen que el branding no funciona.",
        "El resultado más útil de este trabajo suele ser una resta. Decidir para quién no eres es lo que permite que el mensaje se vuelva específico, y el mensaje específico es lo que abarata los anuncios, porque la relevancia está incorporada al precio de cada subasta en la que entras.",
        "También zanja discusiones que si no se repiten cada mes. Cuando el posicionamiento está por escrito, preguntas como si descontar, si tomar a cierto cliente y qué decir en un anuncio dejan de ser materia de opinión.",
      ],
    },
    {
      id: "sistema",
      heading: "An identity is a system, not a file",
      headingEs: "Una identidad es un sistema, no un archivo",
      body: [
        "The deliverable that fails is a logo in three formats and nothing else. Two months later nobody knows which blue is the blue, the presentations use a different font, and the ads look like a different company.",
        "What holds up is a system someone can apply without asking: the type, the palette with the accessible contrast pairs already worked out, spacing, how photography is treated, and rules for the situations that actually recur.",
        "It should include the awkward cases, because those are where systems break. What the logo does on a dark background, on a photograph, at the size of a social avatar, and when someone needs it in a single colour for a supplier.",
        "And it should be usable by the people who will actually use it, which is often a receptionist making a flyer rather than a designer. A system only a designer can execute quietly stops being applied.",
      ],
      bodyEs: [
        "El entregable que fracasa es un logo en tres formatos y nada más. Dos meses después nadie sabe cuál azul es el azul, las presentaciones usan otra tipografía, y los anuncios parecen de otra empresa.",
        "Lo que aguanta es un sistema que alguien pueda aplicar sin preguntar: la tipografía, la paleta con los pares de contraste accesibles ya resueltos, el espaciado, cómo se trata la fotografía, y reglas para las situaciones que de verdad se repiten.",
        "Debe incluir los casos incómodos, porque ahí es donde se rompen los sistemas. Qué hace el logo sobre fondo oscuro, sobre una fotografía, al tamaño de un avatar de redes, y cuando alguien lo necesita a un solo color para un proveedor.",
        "Y debe ser usable por quien realmente lo va a usar, que muchas veces es una recepcionista haciendo un volante y no un diseñador. Un sistema que solo un diseñador puede ejecutar deja de aplicarse en silencio.",
      ],
    },
    {
      id: "cuando-no-branding",
      heading: "When branding is premature",
      headingEs: "Cuándo el branding es prematuro",
      body: [
        "This is the section most agencies leave out, because branding is profitable to sell and easy to justify.",
        "If you do not yet know who your best customer is, positioning work is guessing. Sell to more people first; the pattern that emerges is the input this work needs.",
        "If the problem is that nobody knows you exist, a new identity does not fix it. Distribution does. A beautiful brand nobody sees performs identically to an ugly one nobody sees.",
        "If enquiries arrive and do not close, the issue is usually the offer, the price or the follow-up. Rebranding is an expensive way to avoid looking at those.",
        "If cash is tight, this is the wrong first purchase. Something that generates enquiries pays for the branding later; branding does not pay for itself first.",
      ],
      bodyEs: [
        "Esta es la sección que la mayoría de las agencias omite, porque el branding es rentable de vender y fácil de justificar.",
        "Si todavía no sabes quién es tu mejor cliente, el trabajo de posicionamiento es adivinar. Véndele a más gente primero; el patrón que emerge es el insumo que este trabajo necesita.",
        "Si el problema es que nadie sabe que existes, una identidad nueva no lo arregla. La distribución sí. Una marca bella que nadie ve rinde igual que una fea que nadie ve.",
        "Si las consultas llegan y no cierran, el problema normalmente es la oferta, el precio o el seguimiento. Rehacer la marca es una forma cara de evitar mirar eso.",
        "Si el flujo está apretado, esta es la compra equivocada para empezar. Algo que genere consultas paga el branding después; el branding no se paga solo primero.",
      ],
    },
  ],
  faq: [
    {
      q: "Is this just a logo?",
      qEs: "¿Esto es solo un logo?",
      a: "No, and a project that is only a logo usually disappoints. The logo is one output of a decision about positioning, and without that decision it is decoration that nobody knows how to apply consistently.",
      aEs: "No, y un proyecto que es solo un logo normalmente decepciona. El logo es una salida de una decisión de posicionamiento, y sin esa decisión es decoración que nadie sabe cómo aplicar de forma consistente.",
    },
    {
      q: "Do I need a rebrand or a refresh?",
      qEs: "¿Necesito rebranding o solo refrescar?",
      a: "A refresh updates the execution and keeps the recognition you have built. A rebrand changes what you stand for and resets that recognition. If customers still recognise you and the problem is that the materials look dated, a refresh is cheaper and less risky.",
      aEs: "Refrescar actualiza la ejecución y conserva el reconocimiento que ya construiste. Rehacer la marca cambia lo que representas y reinicia ese reconocimiento. Si tus clientes todavía te reconocen y el problema es que los materiales se ven viejos, refrescar es más barato y menos riesgoso.",
    },
    {
      q: "Will a new brand increase sales?",
      qEs: "¿Una marca nueva aumenta las ventas?",
      a: "Not directly, and anyone promising that is selling. What it does is make the rest of the marketing work better: clearer messaging converts more of the same traffic, and relevance lowers what you pay in ad auctions. If sales are the goal and the funnel is broken, fix the funnel first.",
      aEs: "No de forma directa, y quien prometa eso está vendiendo. Lo que hace es que el resto del marketing funcione mejor: un mensaje más claro convierte más del mismo tráfico, y la relevancia baja lo que pagas en las subastas de anuncios. Si el objetivo son ventas y el embudo está roto, arregla el embudo primero.",
    },
    {
      q: "Do I own the files and the rights?",
      qEs: "¿Los archivos y los derechos son míos?",
      a: "Yes, including the working files, not only exported images. Worth confirming with any studio before signing, because receiving flattened files means paying someone every time you need a variation.",
      aEs: "Sí, incluidos los archivos editables y no solo las imágenes exportadas. Vale la pena confirmarlo con cualquier estudio antes de firmar, porque recibir archivos aplanados significa pagarle a alguien cada vez que necesites una variación.",
    },
  ],
};

export const SERVICE_PAGES: ServicePage[] = [
  SEO_SERVICE,
  GOOGLE_ADS_SERVICE,
  META_ADS_SERVICE,
  ECOMMERCE_SERVICE,
  BRANDING_SERVICE,
];

export const getServicePage = (path: string) => SERVICE_PAGES.find((p) => p.path === path);

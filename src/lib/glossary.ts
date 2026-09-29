/**
 * Plain-language definitions shown in a bubble when a reader hovers or taps a
 * marked term inside a blog post, so they learn the word without leaving the
 * article. `href` points to the post that explains it in depth ("Leer más").
 *
 * Usage inside a post body or lede in blog-data.ts:
 *   [[texto visible|clave]]   e.g.  "instala el [[pixel de Meta|pixel]] en tu página"
 *
 * Keep each definition to one or two short sentences a restaurant owner can
 * read in five seconds. The build fails if a post uses a key that is missing
 * here or an href that does not resolve (scripts/generate-sitemap.mjs).
 */
export type GlossaryEntry = {
  term: string;
  termEn: string;
  def: string;
  defEn: string;
  href?: string;
};

export const GLOSSARY: Record<string, GlossaryEntry> = {
  pixel: {
    term: "Pixel de Meta",
    termEn: "Meta Pixel",
    def: "Un código gratuito de Meta que se instala una vez en tu página web. Le avisa a Meta quién la visitó para que después puedas mostrarle anuncios en Facebook e Instagram a esas personas y a otras parecidas. Tú no ves nombres ni datos personales.",
    defEn: "A free code from Meta that is installed once on your website. It tells Meta who visited so you can later show ads on Facebook and Instagram to those people and to others like them. You never see names or personal data.",
    href: "/blog/que-es-el-pixel-de-meta",
  },
  dominio: {
    term: "Dominio",
    termEn: "Domain",
    def: "La dirección de tu negocio en internet, como turestaurante.com. Es tuya mientras la renueves, y lo que construyes ahí (visitas, reputación en Google) se queda contigo.",
    defEn: "Your business’s address on the internet, like yourrestaurant.com. It is yours as long as you renew it, and what you build there (visits, reputation on Google) stays with you.",
    href: "/blog/como-elegir-un-dominio",
  },
  remarketing: {
    term: "Remarketing",
    termEn: "Remarketing",
    def: "Volver a mostrarle anuncios a gente que ya te conoce, por ejemplo a quien visitó tu página o vio tu menú. Funciona porque le hablas a alguien que ya tuvo contacto contigo.",
    defEn: "Showing ads again to people who already know you, for example those who visited your website or viewed your menu. It works because you are talking to someone who has already been in touch with you.",
    href: "/blog/que-es-remarketing",
  },
  "publico-personalizado": {
    term: "Público personalizado",
    termEn: "Custom audience",
    def: "Una lista dentro de Meta con las personas que ya tuvieron contacto con tu negocio: visitaron tu página, te escribieron o te compraron. Sirve para anunciarte solo a ellas o para excluirlas de un anuncio.",
    defEn: "A list inside Meta of the people who have already been in touch with your business: they visited your website, messaged you or bought from you. You can advertise only to them or exclude them from an ad.",
    href: "/blog/guia-meta-ads",
  },
  "publico-similar": {
    term: "Público similar (lookalike)",
    termEn: "Lookalike audience",
    def: "Meta toma una lista de tus clientes o visitantes y busca personas que se parecen a ellos pero que todavía no te conocen. Es la forma de encontrar más clientes como los que ya tienes.",
    defEn: "Meta takes a list of your customers or visitors and finds people who resemble them but do not know you yet. It is how you find more customers like the ones you already have.",
    href: "/blog/guia-meta-ads",
  },
  "google-analytics": {
    term: "Google Analytics",
    termEn: "Google Analytics",
    def: "La herramienta gratuita de Google para ver cuánta gente entra a tu página, de dónde llega y qué hace ahí.",
    defEn: "Google’s free tool to see how many people visit your website, where they come from and what they do there.",
  },
  "qr-estatico": {
    term: "QR estático",
    termEn: "Static QR code",
    def: "Un código QR que lleva la dirección guardada en el propio dibujo. No depende de ningún servicio y nunca vence; si apunta a tu página, cambias el contenido sin reimprimir.",
    defEn: "A QR code that stores the address in the pattern itself. It depends on no service and never expires; if it points to your website, you change the content without reprinting.",
  },
  "qr-dinamico": {
    term: "QR dinámico",
    termEn: "Dynamic QR code",
    def: "Un código QR que primero pasa por el servidor de la empresa que lo generó y de ahí redirige. Te deja cambiar el destino, pero si el servicio cierra o dejas de pagar, puede dejar de funcionar.",
    defEn: "A QR code that first goes through the server of the company that generated it, which then redirects. You can change the destination, but if the service shuts down or you stop paying, it can stop working.",
  },
  "punto-de-venta": {
    term: "Punto de venta (POS)",
    termEn: "Point of sale (POS)",
    def: "El sistema con el que cobras. Registra ventas, precios e inventario, y los buenos se pueden conectar con tu página o tu contabilidad.",
    defEn: "The system you charge with. It records sales, prices and inventory, and good ones can connect to your website or your accounting.",
    href: "/blog/mejor-punto-de-venta-mexico",
  },
  "seo-local": {
    term: "SEO local",
    termEn: "Local SEO",
    def: "Lo que hace que tu negocio aparezca en Google y Google Maps cuando alguien busca algo cerca, como “restaurante de mariscos en Ensenada”.",
    defEn: "What makes your business show up on Google and Google Maps when someone searches for something nearby, like “seafood restaurant in Ensenada”.",
    href: "/blog/seo-local-guia",
  },
  "aviso-de-privacidad": {
    term: "Aviso de privacidad",
    termEn: "Privacy notice",
    def: "El documento que la ley te pide mostrar antes de pedir datos personales. Explica qué datos recabas, para qué los usas y cómo la persona puede ejercer sus derechos sobre ellos.",
    defEn: "The document the law requires you to show before asking for personal data. It explains what data you collect, what you use it for and how the person can exercise their rights over it.",
  },
  "pagina-de-acceso": {
    term: "Página de acceso al WiFi",
    termEn: "Wi-Fi login page",
    def: "La pantalla que aparece al conectarte al WiFi de un hotel o un aeropuerto, antes de dejarte navegar. Ahí puedes pedir un correo a cambio de la conexión.",
    defEn: "The screen that appears when you connect to the Wi-Fi at a hotel or an airport, before letting you browse. That is where you can ask for an email in exchange for the connection.",
  },
  "email-marketing": {
    term: "Email marketing",
    termEn: "Email marketing",
    def: "Mandar correos a tu lista de clientes con promociones, novedades o recordatorios. La lista es tuya y no depende de ningún algoritmo.",
    defEn: "Sending emails to your customer list with offers, news or reminders. The list is yours and does not depend on any algorithm.",
    href: "/blog/email-marketing-para-pymes",
  },
  "pagina-de-enlaces": {
    term: "Página de enlaces",
    termEn: "Link-in-bio page",
    def: "Una página con una lista de botones, como Linktree, que muchos negocios ponen en su perfil de Instagram. Vive en el dominio de esa empresa, no en el tuyo.",
    defEn: "A page with a list of buttons, like Linktree, that many businesses put in their Instagram profile. It lives on that company’s domain, not yours.",
  },
  crm: {
    term: "CRM",
    termEn: "CRM",
    def: "Un sistema donde guardas a tus clientes y prospectos con su historial de mensajes, citas y compras, para darles seguimiento sin depender de la memoria ni de una libreta.",
    defEn: "A system where you keep your customers and prospects with their history of messages, appointments and purchases, so you can follow up without relying on memory or a notebook.",
    href: "/blog/que-es-un-crm",
  },
  "landing-page": {
    term: "Landing page",
    termEn: "Landing page",
    def: "Una página hecha para una sola acción, como pedir una cotización o reservar. Se usa sobre todo como destino de los anuncios.",
    defEn: "A page built for a single action, like requesting a quote or booking. It is used mainly as the destination for ads.",
    href: "/blog/guia-landing-pages",
  },
  hosting: {
    term: "Hosting",
    termEn: "Hosting",
    def: "El servicio que guarda los archivos de tu página web y la mantiene disponible en internet las 24 horas.",
    defEn: "The service that stores your website’s files and keeps it available on the internet around the clock.",
    href: "/blog/que-es-hosting",
  },
  "google-business-profile": {
    term: "Perfil de Google (Google Business Profile)",
    termEn: "Google Business Profile",
    def: "Tu ficha gratuita en Google y Google Maps con dirección, horario, fotos y reseñas. Es lo primero que ve mucha gente al buscar tu negocio.",
    defEn: "Your free listing on Google and Google Maps with your address, hours, photos and reviews. It is the first thing many people see when they search for your business.",
    href: "/blog/optimizar-google-business-profile",
  },
  ota: {
    term: "OTA (agencia de viajes en línea)",
    termEn: "OTA (online travel agency)",
    def: "Plataformas como Booking, Expedia, Airbnb, Viator o GetYourGuide. Te traen clientes a cambio de una comisión por cada reserva.",
    defEn: "Platforms like Booking, Expedia, Airbnb, Viator or GetYourGuide. They bring you customers in exchange for a commission on every booking.",
  },
  "motor-de-reservas": {
    term: "Motor de reservas",
    termEn: "Booking engine",
    def: "El sistema dentro de tu propia página donde el cliente ve disponibilidad, elige fecha y paga, sin pasar por una plataforma que cobre comisión.",
    defEn: "The system on your own website where customers check availability, pick a date and pay, without going through a platform that charges commission.",
  },
  "channel-manager": {
    term: "Channel manager",
    termEn: "Channel manager",
    def: "Un programa que sincroniza tu disponibilidad y tus precios entre Booking, Airbnb y tu propia página, para no vender dos veces el mismo cuarto o el mismo lugar.",
    defEn: "Software that keeps your availability and prices in sync across Booking, Airbnb and your own website, so you never sell the same room or seat twice.",
  },
  lead: {
    term: "Lead (prospecto)",
    termEn: "Lead",
    def: "Una persona que mostró interés en lo que vendes y te dejó sus datos o te escribió, pero todavía no te compra.",
    defEn: "Someone who showed interest in what you sell and left their details or messaged you, but has not bought yet.",
  },
  "sistema-de-citas": {
    term: "Sistema de citas en línea",
    termEn: "Online booking system",
    def: "Una agenda en internet donde el cliente elige servicio, día y hora sin mandarte mensaje. Guarda su teléfono y puede enviarle recordatorios automáticos.",
    defEn: "An online calendar where customers pick a service, day and time without messaging you. It stores their phone number and can send automatic reminders.",
  },
  seo: {
    term: "SEO (posicionamiento en buscadores)",
    termEn: "SEO (search engine optimisation)",
    def: "Todo lo que haces para que tu página aparezca en los primeros resultados de Google sin pagar por cada clic: contenido, estructura, velocidad y reputación.",
    defEn: "Everything you do so your website shows up in Google’s top results without paying per click: content, structure, speed and reputation.",
    href: "/blog/guia-seo",
  },
  "google-ads": {
    term: "Google Ads",
    termEn: "Google Ads",
    def: "La plataforma de anuncios de Google. Te permite aparecer arriba en los resultados de búsqueda, en YouTube o en Maps, y normalmente pagas cada vez que alguien da clic.",
    defEn: "Google’s advertising platform. It lets you appear at the top of search results, on YouTube or on Maps, and you usually pay each time someone clicks.",
    href: "/blog/guia-google-ads",
  },
  "meta-ads": {
    term: "Meta Ads",
    termEn: "Meta Ads",
    def: "La plataforma de anuncios de Meta para aparecer en Facebook, Instagram y Messenger, o llevar a la gente directo a tu WhatsApp.",
    defEn: "Meta’s advertising platform to appear on Facebook, Instagram and Messenger, or send people straight to your WhatsApp.",
    href: "/blog/guia-meta-ads",
  },
  conversion: {
    term: "Conversión",
    termEn: "Conversion",
    def: "La acción que quieres que haga una persona después de ver tu anuncio o tu página: escribirte, llamar, agendar o comprar. Es lo que de verdad hay que medir.",
    defEn: "The action you want someone to take after seeing your ad or website: message you, call, book or buy. It is what you really need to measure.",
    href: "/blog/como-medir-conversiones-google-ads",
  },
  "tasa-de-conversion": {
    term: "Tasa de conversión",
    termEn: "Conversion rate",
    def: "De cada 100 personas que visitan tu página o ven tu anuncio, cuántas hacen lo que buscabas: escribirte, agendar o comprar.",
    defEn: "Out of every 100 people who visit your website or see your ad, how many do what you wanted: message you, book or buy.",
    href: "/blog/como-medir-conversiones-google-ads",
  },
  "palabra-clave": {
    term: "Palabra clave (keyword)",
    termEn: "Keyword",
    def: "Las palabras que la gente escribe en Google, como “dentista en Tijuana”. Con ellas decides en qué búsquedas quieres que aparezca tu página o tu anuncio.",
    defEn: "The words people type into Google, like “dentist in Tijuana”. They decide which searches your website or ad should appear for.",
    href: "/blog/guia-seo",
  },
  cpc: {
    term: "CPC (costo por clic)",
    termEn: "CPC (cost per click)",
    def: "Lo que pagas cada vez que alguien da clic en tu anuncio. No es un precio fijo: depende de cuánta competencia hay por esa búsqueda o ese público.",
    defEn: "What you pay each time someone clicks your ad. It is not a fixed price: it depends on how much competition there is for that search or audience.",
    href: "/blog/cuanto-cuesta-google-ads-en-mexico",
  },
  cpa: {
    term: "CPA (costo por adquisición)",
    termEn: "CPA (cost per acquisition)",
    def: "Lo que te cuesta en publicidad conseguir un cliente o un prospecto. Se calcula dividiendo lo que gastaste entre los resultados que obtuviste.",
    defEn: "What it costs you in advertising to get a customer or a lead. It is what you spent divided by the results you got.",
    href: "/blog/cuanto-invertir-en-marketing-digital",
  },
  "nivel-de-calidad": {
    term: "Nivel de calidad (Quality Score)",
    termEn: "Quality Score",
    def: "Una calificación del 1 al 10 que Google Ads le da a tus palabras clave según qué tan relevantes son tu anuncio y tu página para esa búsqueda. Sirve para saber dónde mejorar.",
    defEn: "A 1 to 10 rating Google Ads gives your keywords based on how relevant your ad and landing page are to that search. It helps you see where to improve.",
    href: "/blog/errores-de-google-ads",
  },
  ssl: {
    term: "Certificado SSL",
    termEn: "SSL certificate",
    def: "Lo que hace que tu página cargue con https y el candado en el navegador. Protege los datos entre el visitante y tu sitio; sin él, el navegador avisa que la página no es segura.",
    defEn: "What makes your website load with https and the padlock in the browser. It protects data between the visitor and your site; without it, the browser warns that the page is not secure.",
    href: "/blog/checklist-para-lanzar-pagina-web",
  },
  "core-web-vitals": {
    term: "Core Web Vitals",
    termEn: "Core Web Vitals",
    def: "Tres medidas de Google sobre la experiencia de usar tu página: qué tan rápido carga lo principal, qué tan rápido responde al tocarla y qué tanto se mueve mientras carga.",
    defEn: "Three Google measurements of what using your website feels like: how fast the main content loads, how quickly it responds when tapped and how much it shifts while loading.",
    href: "/blog/velocidad-de-carga-pagina-web",
  },
  "datos-estructurados": {
    term: "Datos estructurados (schema)",
    termEn: "Structured data (schema)",
    def: "Código que describe tu página en un formato que Google entiende: horario, precios, preguntas frecuentes o reseñas. Puede ayudar a que aparezcas con más información en los resultados.",
    defEn: "Code that describes your page in a format Google understands: hours, prices, FAQs or reviews. It can help you appear with more information in the results.",
  },
  "search-console": {
    term: "Google Search Console",
    termEn: "Google Search Console",
    def: "La herramienta gratuita de Google que te dice en qué búsquedas aparece tu página, cuántos clics recibe y si hay errores que impiden que Google la lea.",
    defEn: "Google’s free tool that shows which searches your website appears for, how many clicks it gets and whether errors stop Google from reading it.",
    href: "/blog/guia-seo",
  },
  eeat: {
    term: "E-E-A-T",
    termEn: "E-E-A-T",
    def: "Las siglas en inglés de experiencia, conocimiento, autoridad y confiabilidad. Es como Google describe lo que busca en el contenido, sobre todo en temas de salud y dinero.",
    defEn: "Experience, expertise, authoritativeness and trustworthiness. It is how Google describes what it looks for in content, especially on health and money topics.",
    href: "/blog/eeat-contenido-medico",
  },
  cofepris: {
    term: "COFEPRIS",
    termEn: "COFEPRIS",
    def: "La Comisión Federal para la Protección contra Riesgos Sanitarios. Entre otras cosas, regula la publicidad de productos y servicios de salud en México; algunos anuncios requieren su permiso.",
    defEn: "Mexico’s Federal Commission for Protection against Sanitary Risks. Among other things, it regulates the advertising of health products and services; some ads require its approval.",
    href: "/blog/google-ads-para-medicos-restricciones",
  },
  afac: {
    term: "AFAC",
    termEn: "AFAC",
    def: "La Agencia Federal de Aviación Civil, la autoridad que regula la aviación en México, incluido el uso de drones.",
    defEn: "Mexico’s Federal Civil Aviation Agency, the authority that regulates aviation in Mexico, including the use of drones.",
    href: "/blog/regulacion-de-drones-en-mexico",
  },
  "whatsapp-api": {
    term: "WhatsApp Business API",
    termEn: "WhatsApp Business API",
    def: "La versión de WhatsApp para empresas que se conecta con otros sistemas: permite varios agentes en un mismo número, respuestas automáticas y guardar las conversaciones en tu CRM.",
    defEn: "The business version of WhatsApp that connects to other systems: several agents on one number, automatic replies and conversations saved in your CRM.",
    href: "/blog/whatsapp-business-api",
  },
  "api-conversiones": {
    term: "API de Conversiones de Meta",
    termEn: "Meta Conversions API",
    def: "Una forma de mandarle a Meta los resultados (compras, citas, prospectos) desde tu servidor o tu CRM, no solo desde el navegador. Complementa al pixel cuando el navegador bloquea el rastreo.",
    defEn: "A way to send Meta your results (purchases, bookings, leads) from your server or CRM, not only from the browser. It complements the pixel when the browser blocks tracking.",
    href: "/blog/que-es-el-pixel-de-meta",
  },
  chatbot: {
    term: "Chatbot",
    termEn: "Chatbot",
    def: "Un programa que contesta mensajes solo, en tu página o en WhatsApp. Los que usan inteligencia artificial entienden preguntas escritas con palabras propias, no solo opciones de menú.",
    defEn: "A program that answers messages on its own, on your website or on WhatsApp. Those that use AI understand questions written in people’s own words, not just menu options.",
    href: "/blog/chatbot-con-ia-para-negocios",
  },
  embudo: {
    term: "Embudo de ventas",
    termEn: "Sales funnel",
    def: "El camino que recorre un cliente desde que te conoce hasta que te compra. Se le dice embudo porque en cada paso se queda menos gente.",
    defEn: "The path a customer takes from first hearing about you to buying. It is called a funnel because fewer people remain at each step.",
  },
  api: {
    term: "API",
    termEn: "API",
    def: "Una conexión entre dos sistemas para que se pasen información solos, por ejemplo tu página web y tu CRM, sin que nadie tenga que copiar y pegar.",
    defEn: "A connection between two systems so they pass information on their own, for example your website and your CRM, without anyone copying and pasting.",
  },
};

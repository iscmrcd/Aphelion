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
};

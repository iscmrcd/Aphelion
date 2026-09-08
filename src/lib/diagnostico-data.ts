/**
 * Diagnostic engine data.
 *
 * The engine is generic and the questions are data, the same way blog-data.ts
 * feeds one blog.$slug.tsx component. Adding a vertical means appending a
 * block here; the component, the scoring and the route are untouched.
 *
 * Two design rules that are not negotiable, because breaking either turns a
 * credible tool into a disguised quote form:
 *
 * 1. The score must be able to come out high. A quiz rigged to always report a
 *    problem gets sniffed out, and a clinic scoring 80 is not bad news, it is
 *    the best prospect for the top tier.
 * 2. The first recommendation must be something free that Aphelion does not
 *    sell. That is what makes the paid recommendations below it believable.
 */

export type DiagnosticoOption = {
  label: string;
  labelEn: string;
  /** Fraction of the question's weight this answer earns, 0 to 1. */
  value: number;
};

export type DiagnosticoQuestion = {
  id: string;
  /** Short label for the progress rail. */
  topic: string;
  topicEn: string;
  question: string;
  questionEn: string;
  /** Points this question contributes to the 100-point total. */
  weight: number;
  options: DiagnosticoOption[];
  /**
   * Shown in the result when this question scores low. `free` marks advice the
   * clinic can act on without hiring anyone, which is what earns the trust to
   * make the rest of the plan credible.
   */
  gap: {
    title: string;
    titleEn: string;
    why: string;
    whyEn: string;
    free?: boolean;
    /** Internal page that goes deeper, when one exists. */
    href?: string;
  };
};

export type DiagnosticoVertical = {
  slug: string;
  /** Audience label used in headings. */
  audience: string;
  audienceEn: string;
  title: string;
  titleEn: string;
  intro: string;
  introEn: string;
  seoTitle: string;
  seoTitleEs: string;
  seoDescription: string;
  seoDescriptionEs: string;
  questions: DiagnosticoQuestion[];
};

const SI_NO = (siValue = 1): DiagnosticoOption[] => [
  { label: "Sí", labelEn: "Yes", value: siValue },
  { label: "No", labelEn: "No", value: 0 },
];

export const CLINICAS: DiagnosticoVertical = {
  slug: "clinicas",
  audience: "tu clínica",
  audienceEn: "your practice",
  title: "¿Qué tan preparada está tu clínica para captar pacientes?",
  titleEn: "How ready is your practice to attract patients?",
  intro:
    "Diez preguntas, dos minutos. Al final te decimos qué te falta y en qué orden conviene arreglarlo. La primera recomendación casi siempre es gratis.",
  introEn:
    "Ten questions, two minutes. At the end you get what is missing and the order worth fixing it in. The first recommendation is almost always free.",
  seoTitle: "Diagnóstico digital para clínicas y consultorios | Aphelion",
  seoTitleEs: "Diagnóstico digital para clínicas y consultorios | Aphelion",
  seoDescription:
    "Free two-minute diagnostic for medical and dental practices: score your digital setup and get a prioritised plan. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de dos minutos para consultorios médicos y dentales: califica tu presencia digital y recibe un plan priorizado. Sin llamada.",
  questions: [
    {
      id: "sitio",
      topic: "Sitio propio",
      topicEn: "Own website",
      question: "¿Tienes página web propia, con tu propio dominio?",
      questionEn: "Do you have your own website, on your own domain?",
      weight: 10,
      options: [
        { label: "Sí, con dominio propio", labelEn: "Yes, on my own domain", value: 1 },
        {
          label: "Solo perfiles (Doctoralia, redes, Google)",
          labelEn: "Only profiles (directories, social, Google)",
          value: 0.15,
        },
        { label: "No tengo nada", labelEn: "Nothing yet", value: 0 },
      ],
      gap: {
        title: "No tienes un sitio propio",
        titleEn: "You have no site of your own",
        why: "Todo lo demás de esta lista se construye encima de un dominio tuyo. Sin eso, cada paciente que ganas se lo acreditas a la plataforma donde te encontró.",
        whyEn:
          "Everything else on this list is built on top of a domain you own. Without one, every patient you win is credited to the platform that found them.",
        href: "/sitio-web-para-clinicas",
      },
    },
    {
      id: "gbp",
      topic: "Perfil de Google",
      topicEn: "Google profile",
      question: "¿Tienes Perfil de Empresa de Google verificado, con fotos y horarios al día?",
      questionEn: "Do you have a verified Google Business Profile, with current photos and hours?",
      weight: 15,
      options: [
        { label: "Sí, verificado y actualizado", labelEn: "Yes, verified and current", value: 1 },
        { label: "Existe pero está abandonado", labelEn: "It exists but is neglected", value: 0.4 },
        { label: "No lo tengo o no sé", labelEn: "I do not have one, or I am not sure", value: 0 },
      ],
      gap: {
        title: "Tu Perfil de Empresa de Google no está trabajando",
        titleEn: "Your Google Business Profile is not working",
        why: "Es lo que decide el bloque de mapas, que es donde cae la mayoría de la búsqueda local de pacientes. Es gratis, lo administras tú, y pesa más que cualquier página que alguien te pueda vender.",
        whyEn:
          "It decides the map block, which is where most local patient search lands. It is free, you control it, and it outweighs any page anyone can sell you.",
        free: true,
      },
    },
    {
      id: "respuesta",
      topic: "Respuesta",
      topicEn: "Response",
      question: "En horario de consulta, ¿alguien contesta el teléfono y los mensajes?",
      questionEn: "During clinic hours, does someone answer the phone and messages?",
      weight: 15,
      options: [
        { label: "Sí, siempre hay alguien", labelEn: "Yes, someone is always there", value: 1 },
        { label: "A veces se quedan sin contestar", labelEn: "Some go unanswered", value: 0.35 },
        {
          label: "Se contestan cuando se puede",
          labelEn: "They get answered when there is time",
          value: 0,
        },
      ],
      gap: {
        title: "Estás perdiendo pacientes que ya te buscaron",
        titleEn: "You are losing patients who already reached out",
        why: "Un paciente que llama y no recibe respuesta le llama a la siguiente clínica. Si además estás pagando anuncios, estás pagando por generarle llamadas a tu competencia.",
        whyEn:
          "A patient who calls and gets no answer calls the next clinic. If you are also running ads, you are paying to generate calls for your competitors.",
        free: true,
      },
    },
    {
      id: "recordatorios",
      topic: "Recordatorios",
      topicEn: "Reminders",
      question: "¿Mandas recordatorio automático antes de cada cita?",
      questionEn: "Do you send an automatic reminder before each appointment?",
      weight: 12,
      options: [
        {
          label: "Sí, y el paciente puede confirmar o cancelar",
          labelEn: "Yes, and the patient can confirm or cancel",
          value: 1,
        },
        { label: "Sí, pero manual", labelEn: "Yes, but manually", value: 0.5 },
        { label: "No mandamos recordatorios", labelEn: "We do not send reminders", value: 0 },
      ],
      gap: {
        title: "Las inasistencias te están costando espacios ya vendidos",
        titleEn: "No-shows are costing you slots you already sold",
        why: "Una inasistencia es un espacio que no generó nada y no se recupera. Recuperar una cita agendada es mucho más barato que comprar un paciente nuevo, y casi nadie trabaja en ello.",
        whyEn:
          "A no-show is a slot that generated nothing and cannot be recovered. Recovering a booked appointment is far cheaper than buying a new patient, and almost nobody works on it.",
        href: "/blog/whatsapp-para-clinicas",
      },
    },
    {
      id: "atribucion",
      topic: "Origen",
      topicEn: "Attribution",
      question: "¿Puedes decir de dónde vino cada paciente nuevo del mes pasado?",
      questionEn: "Can you say where each new patient came from last month?",
      weight: 12,
      options: [
        { label: "Sí, lo registramos", labelEn: "Yes, we record it", value: 1 },
        { label: "Más o menos, por impresión", labelEn: "Roughly, by impression", value: 0.3 },
        { label: "No tengo idea", labelEn: "No idea", value: 0 },
      ],
      gap: {
        title: "No sabes qué está funcionando",
        titleEn: "You cannot tell what is working",
        why: "Mientras no puedas responder esto, cualquier decisión de presupuesto es apuesta. Se arregla con una columna en la agenda donde recepción anota cómo se enteró el paciente, preguntado al agendar y no en el sillón.",
        whyEn:
          "Until you can answer this, every budget decision is a bet. It is fixed with a column in the appointment book where reception notes how the patient heard about you, asked at booking rather than in the chair.",
        free: true,
      },
    },
    {
      id: "paginas-tratamiento",
      topic: "Tratamientos",
      topicEn: "Treatments",
      question: "¿Tienes una página por tratamiento, o una sola de servicios?",
      questionEn: "Do you have a page per treatment, or a single services page?",
      weight: 10,
      options: [
        { label: "Una página por tratamiento", labelEn: "A page per treatment", value: 1 },
        {
          label: "Una sola página con todo en lista",
          labelEn: "One page listing everything",
          value: 0.2,
        },
        { label: "No tengo sitio", labelEn: "I have no site", value: 0 },
      ],
      gap: {
        title: "Una sola página de servicios no posiciona para ninguno",
        titleEn: "A single services page ranks for none of them",
        why: "Los pacientes buscan por procedimiento, y cada procedimiento trae preocupaciones distintas. Una lista de veinte viñetas no responde ninguna de esas búsquedas.",
        whyEn:
          "Patients search by procedure, and each procedure carries different worries. A list of twenty bullets answers none of those searches.",
        href: "/blog/sitio-web-para-clinicas",
      },
    },
    {
      id: "resenas",
      topic: "Reseñas",
      topicEn: "Reviews",
      question: "¿Tienes un sistema para pedirle reseña a todos los pacientes?",
      questionEn: "Do you have a system to ask every patient for a review?",
      weight: 10,
      options: [
        { label: "Sí, se le pide a todos", labelEn: "Yes, we ask everyone", value: 1 },
        { label: "Solo cuando nos acordamos", labelEn: "Only when we remember", value: 0.35 },
        { label: "No pedimos reseñas", labelEn: "We do not ask", value: 0 },
      ],
      gap: {
        title: "Tus reseñas dependen de la suerte",
        titleEn: "Your reviews depend on luck",
        why: "Las reseñas espontáneas se inclinan a lo negativo, porque el enojo motiva más que la satisfacción. Pedírselas a todos, sin filtrar, es lo que cumple las reglas de Google y además da mejor promedio.",
        whyEn:
          "Unprompted reviews skew negative, because irritation motivates more than satisfaction. Asking everyone, without filtering, is what complies with Google's rules and also produces a better average.",
        href: "/blog/como-conseguir-resenas-google-medicos",
      },
    },
    {
      id: "seguimiento",
      topic: "Seguimiento",
      topicEn: "Follow-up",
      question: "¿Le das seguimiento a quien preguntó y no agendó?",
      questionEn: "Do you follow up with people who asked and did not book?",
      weight: 8,
      options: [
        { label: "Sí, con un proceso definido", labelEn: "Yes, with a defined process", value: 1 },
        { label: "A veces", labelEn: "Sometimes", value: 0.35 },
        { label: "No", labelEn: "No", value: 0 },
      ],
      gap: {
        title: "Dejas enfriar prospectos que ya pagaste",
        titleEn: "You let already-paid-for prospects go cold",
        why: "Alguien que preguntó y no agendó ya te costó dinero conseguirlo. Un solo mensaje de seguimiento a los pocos días recupera una parte, y es de las cosas más baratas de esta lista.",
        whyEn:
          "Someone who asked and did not book already cost you money to acquire. A single follow-up message a few days later recovers a share of them, and it is among the cheapest items on this list.",
      },
    },
    {
      id: "contenido",
      topic: "Contenido",
      topicEn: "Content",
      question: "¿Publicas contenido propio con autor y credencial visible?",
      questionEn: "Do you publish your own content with a named author and credential?",
      weight: 5,
      options: [
        {
          label: "Sí, firmado por el profesional",
          labelEn: "Yes, signed by the professional",
          value: 1,
        },
        { label: "Publico, pero sin firma", labelEn: "I publish, but unsigned", value: 0.4 },
        { label: "No publico", labelEn: "I do not publish", value: 0 },
      ],
      gap: {
        title: "Tu contenido no acredita quién lo escribió",
        titleEn: "Your content does not say who wrote it",
        why: "El contenido de salud se evalúa con un estándar más estricto. Firmar con nombre, institución y cédula no cuesta nada, y además el artículo 19 del reglamento de publicidad sanitaria ya te obliga a expresar esos datos en tu publicidad.",
        whyEn:
          "Health content is judged against a stricter standard. Signing with a name, institution and licence number costs nothing, and article 19 of the health advertising regulation already requires you to state those details in your advertising.",
        href: "/blog/eeat-contenido-medico",
      },
    },
    {
      id: "remarketing",
      topic: "Campañas",
      topicEn: "Campaigns",
      question: "¿Corres campañas y puedes medir qué pacientes trajeron?",
      questionEn: "Do you run campaigns and can you measure which patients they brought?",
      weight: 3,
      options: [
        { label: "Sí, con medición conectada", labelEn: "Yes, with tracking connected", value: 1 },
        {
          label: "Corro campañas pero no mido",
          labelEn: "I run campaigns but do not measure",
          value: 0.25,
        },
        { label: "No corro campañas", labelEn: "I do not run campaigns", value: 0 },
      ],
      gap: {
        title: "Campañas sin medición",
        titleEn: "Campaigns without measurement",
        why: "Vale poco en este diagnóstico a propósito: si falta lo de arriba, invertir en campañas amplifica la fuga en lugar de traer pacientes. Esto se arregla al final, no al principio.",
        whyEn:
          "This is weighted low on purpose: if the items above are missing, spending on campaigns amplifies the leak rather than bringing patients. This gets fixed last, not first.",
        href: "/blog/google-ads-para-medicos-restricciones",
      },
    },
  ],
};

export const VERTICALES: DiagnosticoVertical[] = [CLINICAS];

export const getVertical = (slug: string) => VERTICALES.find((v) => v.slug === slug);

/** Total is 100 by construction; asserted at runtime so a bad edit is loud. */
export function totalWeight(v: DiagnosticoVertical) {
  return v.questions.reduce((a, q) => a + q.weight, 0);
}

export type Banda = { min: number; label: string; labelEn: string; blurb: string; blurbEn: string };

export const BANDAS: Banda[] = [
  {
    min: 80,
    label: "Ecosistema",
    labelEn: "Ecosystem",
    blurb:
      "Tu clínica ya tiene infraestructura, no nada más presencia. Lo que queda es afinar y medir, no reconstruir.",
    blurbEn:
      "Your practice has infrastructure, not just presence. What is left is tuning and measurement, not rebuilding.",
  },
  {
    min: 55,
    label: "Captación",
    labelEn: "Acquisition",
    blurb:
      "Ya tienes con qué trabajar y algunas piezas están sueltas. Los huecos de abajo son los que más te están costando hoy.",
    blurbEn:
      "You have something to work with and some pieces are loose. The gaps below are what is costing you most today.",
  },
  {
    min: 30,
    label: "Presencia",
    labelEn: "Presence",
    blurb:
      "Existes en internet pero todavía no tienes un sistema que traiga pacientes. Empieza por lo gratuito de la lista.",
    blurbEn:
      "You exist online but do not yet have a system that brings patients. Start with the free items on the list.",
  },
  {
    min: 0,
    label: "Sin base",
    labelEn: "No foundation",
    blurb:
      "Casi todo está por construirse, lo cual también significa que las primeras dos o tres cosas van a mover mucho.",
    blurbEn:
      "Almost everything is still to be built, which also means the first two or three things will move a lot.",
  },
];

export const bandaFor = (score: number) =>
  BANDAS.find((b) => score >= b.min) ?? BANDAS[BANDAS.length - 1];

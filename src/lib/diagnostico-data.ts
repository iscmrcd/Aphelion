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
 * 2. The first recommendation is usually a free tool or process, but Aphelion
 *    charges to set it up correctly, review it and keep it moving as part of a
 *    package. That honesty is what makes the paid work below it believable.
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
   * Shown in the result when this question scores low. `free` marks a tool or
   * process that costs nothing by itself, but Aphelion packages the proper
   * setup, review and ongoing handling as a paid service.
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
    "Responde diez preguntas en dos minutos y recibe un diagnóstico claro de qué le falta a tu clínica y qué conviene atender primero. Si una herramienta gratuita resuelve el punto, nosotros la configuramos y la operamos como parte del servicio.",
  introEn:
    "Answer ten questions in two minutes and receive a clear diagnostic of what your practice is missing and what to address first. When a free tool solves the gap, we configure and operate it as part of the service.",
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
      question: "¿Tienes tu propia página web, con tu propia dirección de internet?",
      questionEn: "Do you have your own website, at your own web address?",
      weight: 10,
      options: [
        { label: "Sí, es mía", labelEn: "Yes, it is mine", value: 1 },
        {
          label: "Solo perfiles (Doctoralia, redes, Google)",
          labelEn: "Only profiles (directories, social, Google)",
          value: 0.15,
        },
        { label: "No tengo nada", labelEn: "Nothing yet", value: 0 },
      ],
      gap: {
        title: "No cuentas con un sitio propio",
        titleEn: "You do not have a website of your own",
        why: "El resto de los puntos dependen de una página bajo tu control. Sin ella, cada paciente que atraes se lo atribuye a la plataforma en la que te encontró.",
        whyEn:
          "The rest of the diagnostic depends on a page you control. Without it, every patient you attract is attributed to the platform where they found you.",
        href: "/blog/sitio-web-para-clinicas",
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
        title: "Tu Perfil de Empresa de Google no está optimizado",
        titleEn: "Your Google Business Profile is not optimised",
        why: "El bloque de mapas concentra la mayor parte de la búsqueda local de pacientes. La herramienta no tiene costo, pero requiere alta, verificación y revisión periódica para que genere citas. Eso lo hacemos como parte del paquete de configuración.",
        whyEn:
          "The map block captures most local patient searches. The tool itself is free, but it needs setup, verification and regular review to generate appointments. We handle that as part of the configuration package.",
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
        title: "Estás perdiendo pacientes que ya te contactaron",
        titleEn: "You are losing patients who already contacted you",
        why: "Un paciente que no recibe respuesta llama a la siguiente opción. Si además inviertes en anuncios, terminas pagando para que tu competencia atienda esas llamadas.",
        whyEn:
          "A patient who does not get an answer calls the next option. If you are also running ads, you end up paying for your competitors to take those calls.",
        free: true,
        href: "/servicios/agente-ia",
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
        title: "Las inasistencias te dejan espacios sin producir",
        titleEn: "No-shows leave you with unproductive slots",
        why: "Un espacio cancelado no se recupera. Recuperar una cita agendada cuesta menos que generar un paciente nuevo, por eso los recordatorios y la confirmación automática son prioridad.",
        whyEn:
          "A cancelled slot cannot be recovered. Recovering a booked appointment costs less than acquiring a new patient, which is why automated reminders and confirmations are a priority.",
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
        title: "No hay trazabilidad de qué genera pacientes",
        titleEn: "There is no traceability of what generates patients",
        why: "Sin este dato, cada decisión de presupuesto es una apuesta. Se resuelve registrando en la agenda cómo se enteró el paciente, preguntado al momento de agendar. Te ayudamos a implementar el proceso y a interpretar los resultados.",
        whyEn:
          "Without this data, every budget decision is a guess. It is solved by recording in the appointment book how the patient heard about you, asked at the time of booking. We help you implement the process and interpret the results.",
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
        title: "Una sola página de servicios no posiciona",
        titleEn: "A single services page does not rank",
        why: "Los pacientes buscan por procedimiento, y cada uno tiene preguntas distintas. Una lista genérica no responde esas búsquedas específicas ni genera confianza.",
        whyEn:
          "Patients search by procedure, and each one raises different questions. A generic list does not answer those specific searches or build trust.",
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
        title: "Tus reseñas dependen del azar",
        titleEn: "Your reviews are left to chance",
        why: "Las reseñas espontáneas suelen inclinarse a lo negativo. Solicitarlas a todos los pacientes, sin filtrar, cumple con las políticas de Google y mejora el promedio de calificación.",
        whyEn:
          "Unprompted reviews tend to skew negative. Asking every patient, without filtering, complies with Google's policies and improves the average rating.",
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
        title: "Se pierden prospectos que ya costaron conseguir",
        titleEn: "Already-acquired prospects are lost",
        why: "Quien preguntó y no agendó representa una inversión de marketing. Un mensaje de seguimiento oportuno recupera parte de esos casos y es uno de los puntos de menor costo de esta lista.",
        whyEn:
          "Someone who asked and did not book represents a marketing investment. A timely follow-up message recovers some of those cases and is one of the lowest-cost items on this list.",
        href: "/servicios/agente-ia",
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

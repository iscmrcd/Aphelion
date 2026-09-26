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
 *    problem gets sniffed out, and a business scoring 80 is not bad news, it is
 *    the best prospect for the top tier.
 * 2. The first recommendation is usually a free tool or process, but Aphelion
 *    charges to set it up correctly, review it and keep it moving as part of a
 *    package. That honesty is what makes the paid work below it believable.
 *
 * Two more that came with the multi-vertical version:
 *
 * 3. "No lo sé" is not a zero. Not knowing and not having are different
 *    answers, so an unknown is left out of the score and listed as something
 *    to confirm. "No aplica" is left out entirely.
 * 4. A manual process that works is a strength. Nothing here penalises a
 *    business for not using software or AI it does not need.
 *
 * The scoring lives in scoreDiagnostic() below and is imported by both the
 * browser (instant result) and the server (which recomputes before storing,
 * so a crafted request cannot write a fake score).
 */

import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Building2,
  Compass,
  HardHat,
  Scissors,
  Smile,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";

export type DiagnosticoOption = {
  label: string;
  labelEn: string;
  /**
   * Fraction of the question's weight this answer earns, 0 to 1.
   * null means the answer carries no score: "No lo sé" (listed as something
   * to confirm) or, when `na` is set, "No aplica" (left out entirely).
   */
  value: number | null;
  na?: boolean;
};

export type DiagnosticoGap = {
  title: string;
  titleEn: string;
  why: string;
  whyEn: string;
  /**
   * Marks a tool or process that costs nothing by itself, but Aphelion
   * packages the proper setup, review and ongoing handling as a paid service.
   */
  free?: boolean;
  /** Internal page that goes deeper, when one exists. */
  href?: string;
};

export type DiagnosticoQuestion = {
  id: string;
  /** Short label for the progress rail. */
  topic: string;
  topicEn: string;
  question: string;
  questionEn: string;
  /** Optional examples shown under the question. */
  hint?: string;
  hintEn?: string;
  /** Points this question contributes to the 100-point total. 0 for context. */
  weight: number;
  /**
   * Context questions (what to improve first, how ads are run today) are kept
   * for the lead summary and never change the score.
   */
  context?: boolean;
  options: DiagnosticoOption[];
  /** Shown in the result when this question scores low. */
  gap?: DiagnosticoGap;
};

export type Banda = { min: number; label: string; labelEn: string; blurb: string; blurbEn: string };

export type DiagnosticoVertical = {
  slug: string;
  /**
   * Bumped whenever questions or values change, and stored with every
   * result, so an edit never silently rewrites how an old result was scored.
   */
  version: string;
  /** Card label on the industry selector. */
  label: string;
  labelEn: string;
  /** Who falls under this industry, shown under the label on the selector. */
  includes: string;
  includesEn: string;
  icon: LucideIcon;
  /**
   * Visual treatment. The clinical blues stay scoped to health verticals, as
   * they were before; every other vertical uses the site's neutral palette.
   */
  palette: "clinical" | "neutral";
  /** Blog categories surfaced when the result has nothing left to fix. */
  blogCategories: string[];
  /** Audience label used in copy. */
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
  /** Result bands. Falls back to the generic business bands. */
  bandas?: Banda[];
  questions: DiagnosticoQuestion[];
};

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

const NO_SE: DiagnosticoOption = { label: "No lo sé", labelEn: "Not sure", value: null };

const na = (label: string, labelEn: string): DiagnosticoOption => ({
  label,
  labelEn,
  value: null,
  na: true,
});

/**
 * Four-step scale for the industry-specific process questions. A process
 * that exists and the team actually uses already counts as a strength; the
 * top step only adds that someone checks it works.
 */
function proceso(notApplicable?: DiagnosticoOption): DiagnosticoOption[] {
  return [
    {
      label: "Tenemos un proceso y un registro al día, y revisamos que funcione",
      labelEn: "We have a process and an up-to-date record, and we check it works",
      value: 1,
    },
    {
      label: "Tenemos un proceso y un registro que el equipo usa",
      labelEn: "We have a process and a record the team uses",
      value: 0.75,
    },
    {
      label: "Lo resolvemos sobre la marcha y a veces se pierden datos",
      labelEn: "We handle it on the fly and details sometimes get lost",
      value: 0.3,
    },
    {
      label: "No tenemos una forma definida",
      labelEn: "We have no defined way to do it",
      value: 0,
    },
    ...(notApplicable ? [notApplicable] : []),
    NO_SE,
  ];
}

type ComunesOpts = {
  /** Examples of trust signals for this industry. */
  trustHint: string;
  trustHintEn: string;
  /** "pedir informes o una cotización", "reservar", ... */
  contactVerb: string;
  contactVerbEn: string;
  /** "compra", "contrata", "reserva" — the step after asking. */
  convertVerb: string;
  convertVerbEn: string;
  /** Businesses without a place to show on a map are not penalised for it. */
  googleNa?: boolean;
  /** Businesses that only sell on the spot have nobody to follow up with. */
  followUpNa?: boolean;
};

/**
 * The eight scored questions every vertical shares, grouped in four blocks of
 * two: presence, trust, contact and measurement, response and follow-up. Each
 * weighs 10, which leaves 20 for the four industry-specific questions, so the
 * five blocks weigh the same in the total.
 */
function comunes(o: ComunesOpts): DiagnosticoQuestion[] {
  return [
    {
      id: "sitio",
      topic: "Sitio propio",
      topicEn: "Own website",
      question: "¿Tienes una página web propia donde se entienda qué ofreces?",
      questionEn: "Do you have your own website that explains what you offer?",
      weight: 10,
      options: [
        {
          label: "Sí, actualizada y fácil de usar en celular",
          labelEn: "Yes, up to date and easy to use on a phone",
          value: 1,
        },
        {
          label: "Sí, pero está desactualizada o es difícil de usar",
          labelEn: "Yes, but it is outdated or hard to use",
          value: 0.5,
        },
        {
          label: "Solo tengo redes sociales o directorios",
          labelEn: "Only social media or directories",
          value: 0.2,
        },
        { label: "No tengo nada en internet", labelEn: "Nothing online yet", value: 0 },
        NO_SE,
      ],
      gap: {
        title: "Tu página no está trabajando para ti",
        titleEn: "Your website is not working for you",
        why: "Si no existe, está desactualizada o se usa mal en celular, quien te busca no encuentra lo que ofreces ni cómo contactarte. Es el único canal cuyo contenido controlas tú, a diferencia de redes y directorios.",
        whyEn:
          "If it does not exist, is outdated or works poorly on a phone, people looking for you cannot find what you offer or how to reach you. It is the only channel whose content you control, unlike social media and directories.",
        href: "/blog/que-debe-incluir-una-pagina-web",
      },
    },
    {
      id: "google",
      topic: "Perfil de Google",
      topicEn: "Google profile",
      question: "Cuando alguien busca tu negocio en Google, ¿encuentra información correcta?",
      questionEn:
        "When someone searches for your business on Google, do they find accurate information?",
      weight: 10,
      options: [
        {
          label: "Sí, perfil verificado, al día y lo revisamos seguido",
          labelEn: "Yes, a verified profile, up to date and checked often",
          value: 1,
        },
        {
          label: "Tenemos perfil verificado con datos al día",
          labelEn: "We have a verified profile with current details",
          value: 0.75,
        },
        {
          label: "Aparece, pero con datos viejos o incompletos",
          labelEn: "It shows up, but with old or incomplete details",
          value: 0.35,
        },
        {
          label: "No tenemos perfil o no aparece",
          labelEn: "We have no profile, or it does not show up",
          value: 0,
        },
        ...(o.googleNa
          ? [
              na(
                "No aplica: no atendemos en un lugar ni en una zona",
                "Not applicable: we do not serve a location or area",
              ),
            ]
          : []),
        NO_SE,
      ],
      gap: {
        title: "Tu información en Google no está al día",
        titleEn: "Your information on Google is not up to date",
        why: "Mucha gente decide desde el resultado de Google sin entrar a ninguna página: horario, teléfono, fotos y reseñas. El perfil de empresa es gratuito, pero necesita verificación y mantenimiento; eso lo configuramos y operamos como parte del servicio.",
        whyEn:
          "Many people decide straight from the Google result without opening a website: hours, phone, photos and reviews. The business profile is free, but it needs verification and upkeep; we set it up and run it as part of the service.",
        free: true,
        href: "/blog/optimizar-google-business-profile",
      },
    },
    {
      id: "claridad",
      topic: "Claridad",
      topicEn: "Clarity",
      question: "¿Tu información explica claramente qué ofreces y cómo contratarte?",
      questionEn: "Does your information clearly explain what you offer and how to hire you?",
      weight: 10,
      options: [
        {
          label: "Sí: servicios, precios o rangos, y preguntas frecuentes",
          labelEn: "Yes: services, prices or ranges, and FAQs",
          value: 1,
        },
        {
          label: "Explica servicios y cómo pedir información",
          labelEn: "It explains services and how to ask for information",
          value: 0.75,
        },
        {
          label: "Solo hay una descripción general",
          labelEn: "Only a general description",
          value: 0.35,
        },
        {
          label: "No está explicado en ningún lado",
          labelEn: "It is not explained anywhere",
          value: 0,
        },
        NO_SE,
      ],
      gap: {
        title: "Tu cliente tiene que preguntar lo básico",
        titleEn: "Your customers have to ask the basics",
        why: "Cuando no queda claro qué ofreces y cómo empezar, el cliente pregunta lo básico por mensaje o se va. Cada respuesta que tu información ya da es una conversación que tu equipo se ahorra.",
        whyEn:
          "When it is unclear what you offer and how to start, customers ask the basics by message or leave. Every answer your information already gives is a conversation your team does not have to have.",
        href: "/servicios/websites",
      },
    },
    {
      id: "confianza",
      topic: "Confianza",
      topicEn: "Trust",
      question: "Antes de contactarte, ¿qué pruebas puede ver alguien de que tu trabajo es bueno?",
      questionEn: "Before contacting you, what proof can someone see that your work is good?",
      hint: o.trustHint,
      hintEn: o.trustHintEn,
      weight: 10,
      options: [
        {
          label: "Reseñas y trabajos recientes, y un sistema para conseguir más",
          labelEn: "Recent reviews and work, and a system to get more",
          value: 1,
        },
        {
          label: "Hay reseñas o trabajos reales recientes",
          labelEn: "There are recent real reviews or work samples",
          value: 0.75,
        },
        {
          label: "Hay pocas o están viejas",
          labelEn: "A few, or they are old",
          value: 0.35,
        },
        { label: "Ninguna", labelEn: "None", value: 0 },
        NO_SE,
      ],
      gap: {
        title: "Hay pocas pruebas de que tu trabajo es bueno",
        titleEn: "There is little proof that your work is good",
        why: "Quien no te conoce busca señales antes de escribirte: reseñas, fotos reales, casos. Pedirlas a cada cliente de forma sistemática no cuesta nada, y es de lo que más confianza genera.",
        whyEn:
          "People who do not know you look for signals before writing: reviews, real photos, past work. Asking every customer for them systematically costs nothing, and it is one of the strongest trust builders.",
        free: true,
        href: "/blog/seo-local-guia",
      },
    },
    {
      id: "contacto",
      topic: "Contacto",
      topicEn: "Contact",
      question: `Desde tu web o tus perfiles, ¿qué tan fácil es ${o.contactVerb}?`,
      questionEn: `From your website or profiles, how easy is it to ${o.contactVerbEn}?`,
      weight: 10,
      options: [
        {
          label: "Muy fácil, y probamos seguido que funcione",
          labelEn: "Very easy, and we test often that it works",
          value: 1,
        },
        {
          label: "Hay un botón o formulario claro que funciona",
          labelEn: "There is a clear button or form that works",
          value: 0.75,
        },
        {
          label: "Existe, pero no lo hemos probado o a veces falla",
          labelEn: "It exists, but we have not tested it or it sometimes fails",
          value: 0.35,
        },
        { label: "No hay una forma clara", labelEn: "There is no clear way", value: 0 },
        NO_SE,
      ],
      gap: {
        title: "Contactarte no es tan fácil como debería",
        titleEn: "Reaching you is not as easy as it should be",
        why: "Un botón roto o un formulario que nadie revisa pierde clientes sin que te enteres. El primer paso es probar el recorrido completo desde el celular, como si fueras cliente.",
        whyEn:
          "A broken button or a form nobody checks loses customers without you noticing. The first step is to walk the whole path on a phone, as if you were the customer.",
        href: "/blog/errores-de-diseno-web",
      },
    },
    {
      id: "origen",
      topic: "Origen",
      topicEn: "Attribution",
      question: "¿Sabes de dónde llegan tus clientes o solicitudes nuevas?",
      questionEn: "Do you know where your new customers or enquiries come from?",
      weight: 10,
      options: [
        {
          label: "Sí, lo registramos y lo usamos para decidir",
          labelEn: "Yes, we record it and use it to decide",
          value: 1,
        },
        {
          label: "Lo anotamos con regularidad",
          labelEn: "We note it down regularly",
          value: 0.75,
        },
        { label: "Más o menos, de memoria", labelEn: "Roughly, from memory", value: 0.3 },
        { label: "No", labelEn: "No", value: 0 },
      ],
      gap: {
        title: "No sabes qué canal te trae clientes",
        titleEn: "You do not know which channel brings customers",
        why: "Sin ese dato, cada peso en publicidad o redes es una apuesta. Basta con preguntar cómo te conocieron y anotarlo; te ayudamos a implementarlo y a leer los resultados.",
        whyEn:
          "Without that data, every peso spent on ads or social is a guess. Asking how people heard about you and writing it down is enough; we help you set it up and read the results.",
        free: true,
        href: "/blog/como-medir-conversiones-google-ads",
      },
    },
    {
      id: "respuesta",
      topic: "Respuesta",
      topicEn: "Response",
      question: "¿Cómo se atienden los mensajes y llamadas que recibe tu negocio?",
      questionEn: "How are the messages and calls your business receives handled?",
      weight: 10,
      options: [
        {
          label: "Hay un responsable, tiempos definidos y revisamos pendientes",
          labelEn: "There is an owner, set response times and we review what is pending",
          value: 1,
        },
        {
          label: "Hay una persona o proceso responsable",
          labelEn: "A person or process is responsible",
          value: 0.75,
        },
        {
          label: "Se contesta cuando alguien puede",
          labelEn: "They get answered when someone has time",
          value: 0.3,
        },
        {
          label: "Muchos se quedan sin contestar",
          labelEn: "Many go unanswered",
          value: 0,
        },
        NO_SE,
      ],
      gap: {
        title: "Hay mensajes que se quedan sin respuesta",
        titleEn: "Some messages go unanswered",
        why: "Quien no recibe respuesta pronto le escribe al siguiente. Si además inviertes en anuncios, pagas por clientes que termina atendiendo tu competencia. Se resuelve con un responsable y tiempos claros, y cuando el volumen lo pide, con un agente automático.",
        whyEn:
          "Anyone who does not get a quick reply writes to the next option. If you are also running ads, you pay for customers your competitors end up serving. It is solved with an owner and clear response times, and when volume calls for it, an automated agent.",
        href: "/servicios/agente-ia",
      },
    },
    {
      id: "seguimiento",
      topic: "Seguimiento",
      topicEn: "Follow-up",
      question: `¿Qué pasa con quien pidió información y todavía no ${o.convertVerb}?`,
      questionEn: `What happens to people who asked for information and have not ${o.convertVerbEn} yet?`,
      weight: 10,
      options: [
        {
          label: "Lo registramos, le damos seguimiento y cerramos cada caso",
          labelEn: "We record them, follow up and close every case",
          value: 1,
        },
        {
          label: "Anotamos a los interesados y su siguiente paso",
          labelEn: "We note down leads and their next step",
          value: 0.75,
        },
        {
          label: "Depende de que alguien se acuerde",
          labelEn: "It depends on someone remembering",
          value: 0.3,
        },
        { label: "No hay seguimiento", labelEn: "There is no follow-up", value: 0 },
        ...(o.followUpNa
          ? [na("No aplica: se vende en el momento", "Not applicable: sales happen on the spot")]
          : []),
        NO_SE,
      ],
      gap: {
        title: "Se pierden interesados que ya te buscaron",
        titleEn: "You lose people who already reached out",
        why: "Quien ya preguntó cuesta menos de convertir que un cliente nuevo. Un registro simple, con responsable y siguiente paso, recupera parte de esos casos.",
        whyEn:
          "Someone who already asked is cheaper to convert than a new customer. A simple record with an owner and a next step recovers some of those cases.",
        href: "/blog/automatizar-seguimiento-de-ventas",
      },
    },
  ];
}

/** Two context questions every new vertical closes with. They never score. */
function contexto(): DiagnosticoQuestion[] {
  return [
    {
      id: "objetivo",
      topic: "Prioridad",
      topicEn: "Priority",
      question: "¿Qué te gustaría mejorar primero?",
      questionEn: "What would you like to improve first?",
      weight: 0,
      context: true,
      options: [
        { label: "Que me encuentren más fácil", labelEn: "Be easier to find", value: null },
        { label: "Recibir más solicitudes", labelEn: "Get more enquiries", value: null },
        {
          label: "Responder mejor y más rápido",
          labelEn: "Respond better and faster",
          value: null,
        },
        {
          label: "Organizar citas o reservas",
          labelEn: "Organise appointments or bookings",
          value: null,
        },
        { label: "Vender en línea", labelEn: "Sell online", value: null },
        { label: "Dar seguimiento a cotizaciones", labelEn: "Follow up on quotes", value: null },
        {
          label: "Organizar pagos, pedidos o inventario",
          labelEn: "Organise payments, orders or inventory",
          value: null,
        },
        { label: "Entender qué me funciona", labelEn: "Understand what works", value: null },
        { label: "Necesito orientación", labelEn: "I need guidance", value: null },
      ],
    },
    {
      id: "publicidad",
      topic: "Publicidad",
      topicEn: "Advertising",
      question: "¿Cómo manejas hoy tu publicidad digital?",
      questionEn: "How do you run your digital advertising today?",
      weight: 0,
      context: true,
      options: [
        { label: "No hago anuncios", labelEn: "I do not run ads", value: null },
        { label: "Los manejo yo", labelEn: "I run them myself", value: null },
        {
          label: "Los lleva alguien de mi equipo",
          labelEn: "Someone on my team runs them",
          value: null,
        },
        { label: "Trabajo con una agencia", labelEn: "I work with an agency", value: null },
        NO_SE,
      ],
    },
  ];
}

const introNuevo = (aud: string) =>
  `Responde 14 preguntas rápidas sobre la presencia en internet y la forma de trabajar de ${aud}. Recibes tu resultado al momento, con tus prioridades en orden. Si no sabes una respuesta, elige "No lo sé": no te baja el puntaje.`;

const introNuevoEn = (aud: string) =>
  `Answer 14 quick questions about the online presence and the way ${aud} works. You get your result instantly, with your priorities in order. If you do not know an answer, pick "Not sure": it does not lower your score.`;

/* ------------------------------------------------------------------ */
/* Verticals                                                           */
/* ------------------------------------------------------------------ */

/** Bands for the medical vertical, unchanged from the original diagnostic. */
export const BANDAS_CLINICA: Banda[] = [
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

/** Bands for every other vertical. Aphelion's own labels, not an industry benchmark. */
export const BANDAS_NEGOCIO: Banda[] = [
  {
    min: 80,
    label: "Base consolidada",
    labelEn: "Solid foundation",
    blurb:
      "Tu negocio ya tiene un sistema, no nada más presencia. Lo que sigue es afinar y medir, no reconstruir.",
    blurbEn:
      "Your business already has a system, not just presence. What comes next is tuning and measurement, not rebuilding.",
  },
  {
    min: 55,
    label: "Bien encaminado",
    labelEn: "On track",
    blurb:
      "Tienes con qué trabajar y algunas piezas están sueltas. Los puntos de abajo son los que más te están costando hoy.",
    blurbEn:
      "You have something to work with and some pieces are loose. The points below are what is costing you most today.",
  },
  {
    min: 30,
    label: "En desarrollo",
    labelEn: "In progress",
    blurb:
      "Tu negocio ya existe en internet, pero todavía no hay un sistema que traiga y atienda clientes. Empieza por lo más sencillo de la lista.",
    blurbEn:
      "Your business exists online, but there is no system yet that brings in and serves customers. Start with the simplest items on the list.",
  },
  {
    min: 0,
    label: "Primeros pasos",
    labelEn: "First steps",
    blurb:
      "Casi todo está por construirse, lo cual también significa que las primeras dos o tres mejoras se van a notar mucho.",
    blurbEn:
      "Almost everything is still to be built, which also means the first two or three improvements will show a lot.",
  },
];

/**
 * Medical practices. Questions, weights and URL are the original ones: this
 * vertical already has traffic and results, so it only gained the selector
 * metadata. Its questions have no "No lo sé" option, which keeps its scoring
 * identical to what it was.
 */
export const CLINICAS: DiagnosticoVertical = {
  slug: "clinicas",
  version: "2026-09-25",
  label: "Médicos y clínicas",
  labelEn: "Doctors and clinics",
  includes: "Consultorios, clínicas, especialidades y medicina estética",
  includesEn: "Medical offices, clinics, specialists and aesthetic medicine",
  icon: Stethoscope,
  palette: "clinical",
  blogCategories: ["Medical Marketing"],
  bandas: BANDAS_CLINICA,
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
    "Free two-minute diagnostic for medical practices: score your digital setup and get a prioritised plan. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de dos minutos para consultorios y clínicas médicas: califica tu presencia digital y recibe un plan priorizado. Sin llamada.",
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

/* ------------------------------------------------------------------ */
/* Industry-specific questions                                         */
/* ------------------------------------------------------------------ */

type EspecificaInput = Omit<DiagnosticoQuestion, "weight" | "options" | "context"> & {
  /** Custom answers. Defaults to the four-step process scale. */
  options?: DiagnosticoOption[];
  /** Adds a "No aplica" answer to the default process scale. */
  notApplicable?: DiagnosticoOption;
};

/** Each vertical adds four of these, 5 points each, for 20 of the 100. */
function especifica({ options, notApplicable, ...q }: EspecificaInput): DiagnosticoQuestion {
  return { ...q, weight: 5, options: options ?? proceso(notApplicable) };
}

/** Confirming appointments by hand is a real process, so it scores as one. */
const confirmacion = (): DiagnosticoOption[] => [
  {
    label: "Sí, automático, y pueden confirmar o reagendar",
    labelEn: "Yes, automatically, and they can confirm or reschedule",
    value: 1,
  },
  {
    label: "Sí, por mensaje o llamada, a mano",
    labelEn: "Yes, by message or call, manually",
    value: 0.75,
  },
  { label: "Solo a veces", labelEn: "Only sometimes", value: 0.3 },
  { label: "No confirmamos", labelEn: "We do not confirm", value: 0 },
  NO_SE,
];

/* ------------------------------------------------------------------ */

export const DENTAL: DiagnosticoVertical = {
  slug: "dental",
  version: "2026-09-25",
  label: "Dentistas",
  labelEn: "Dentists",
  includes: "Consultorios y clínicas dentales, ortodoncia e implantes",
  includesEn: "Dental offices and clinics, orthodontics and implants",
  icon: Smile,
  palette: "clinical",
  blogCategories: ["Medical Marketing"],
  bandas: BANDAS_CLINICA,
  audience: "tu consultorio dental",
  audienceEn: "your dental practice",
  title: "¿Qué tan preparado está tu consultorio dental para captar pacientes?",
  titleEn: "How ready is your dental practice to attract patients?",
  intro: introNuevo("tu consultorio dental"),
  introEn: introNuevoEn("your dental practice"),
  seoTitle: "Free digital diagnostic for dental practices | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para dentistas | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for dental practices: presence, response, reminders and treatment plan follow-up, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para consultorios dentales: presencia, respuesta, recordatorios y seguimiento de presupuestos, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint:
        "Por ejemplo: reseñas en Google, casos antes y después documentados con permiso del paciente, credenciales visibles.",
      trustHintEn:
        "For example: Google reviews, before-and-after cases documented with patient consent, visible credentials.",
      contactVerb: "agendar una valoración",
      contactVerbEn: "book an assessment",
      convertVerb: "agendó",
      convertVerbEn: "booked",
    }),
    especifica({
      id: "agenda",
      topic: "Agenda",
      topicEn: "Schedule",
      question: "¿Cómo manejan la agenda de cada doctor y cada sillón?",
      questionEn: "How do you manage the schedule for each dentist and chair?",
      hint: "Libreta, Google Calendar o un software dental: cualquiera cuenta si el equipo lo usa.",
      hintEn:
        "A notebook, Google Calendar or dental software: any of them counts if the team uses it.",
      gap: {
        title: "La agenda depende de una sola persona",
        titleEn: "The schedule depends on one person",
        why: "Cuando la agenda vive en una libreta o en la memoria de alguien, se empalman citas y quedan huecos sin llenar. Una agenda compartida por doctor, con estados claros, evita dobles citas y deja ver los espacios libres.",
        whyEn:
          "When the schedule lives in a notebook or in someone's memory, appointments overlap and gaps go unfilled. A shared schedule per dentist, with clear statuses, avoids double bookings and shows the free slots.",
        href: "/blog/que-automatizar-en-mi-negocio",
      },
    }),
    especifica({
      id: "recordatorios",
      topic: "Confirmación",
      topicEn: "Confirmation",
      question: "¿Confirman las citas con los pacientes antes de que lleguen?",
      questionEn: "Do you confirm appointments with patients before they arrive?",
      options: confirmacion(),
      gap: {
        title: "Las inasistencias te dejan sillones vacíos",
        titleEn: "No-shows leave chairs empty",
        why: "Un espacio que nadie ocupa no se recupera. Confirmar un día antes, a mano o automático, y dar la opción de reagendar, libera el espacio a tiempo para otro paciente.",
        whyEn:
          "A slot nobody fills cannot be recovered. Confirming a day ahead, by hand or automatically, with the option to reschedule, frees the slot in time for another patient.",
        href: "/blog/whatsapp-para-clinicas",
      },
    }),
    especifica({
      id: "presupuestos",
      topic: "Presupuestos",
      topicEn: "Treatment plans",
      question:
        "¿Qué pasa con los planes de tratamiento que presentan y el paciente no acepta en la consulta?",
      questionEn:
        "What happens to treatment plans you present that the patient does not accept during the visit?",
      gap: {
        title: "Los presupuestos sin respuesta se enfrían",
        titleEn: "Unanswered treatment plans go cold",
        why: "Un paciente que ya se valoró y recibió presupuesto es el más cercano a iniciar tratamiento. Sin un registro y un seguimiento con fecha, la mayoría de esos planes se quedan en el cajón.",
        whyEn:
          "A patient who was assessed and received a plan is the closest one to starting treatment. Without a record and a dated follow-up, most of those plans stay in a drawer.",
        href: "/blog/automatizar-seguimiento-de-ventas",
      },
    }),
    especifica({
      id: "pagos",
      topic: "Pagos",
      topicEn: "Payments",
      question: "¿Cómo llevan los pagos, abonos y saldos de tratamientos largos?",
      questionEn: "How do you track payments, instalments and balances on long treatments?",
      hint: "Ortodoncia, implantes, rehabilitaciones.",
      hintEn: "Orthodontics, implants, full rehabilitations.",
      gap: {
        title: "Los saldos de tratamientos largos no están claros",
        titleEn: "Balances on long treatments are unclear",
        why: "Cuando no está claro cuánto lleva pagado cada paciente, se generan cobros incómodos o saldos que nadie reclama. Un registro por paciente, con abonos y saldo, lo resuelve.",
        whyEn:
          "When it is unclear how much each patient has paid, you get awkward charges or balances nobody collects. A record per patient, with payments and balance, solves it.",
      },
    }),
    ...contexto(),
  ],
};

export const BELLEZA: DiagnosticoVertical = {
  slug: "belleza-bienestar",
  version: "2026-09-25",
  label: "Belleza y bienestar",
  labelEn: "Beauty and wellness",
  includes: "Salones, barberías, spas, uñas, estética y centros de bienestar",
  includesEn: "Salons, barbershops, spas, nails, aesthetics and wellness centres",
  icon: Scissors,
  palette: "neutral",
  blogCategories: ["Marketing Strategy", "Automation"],
  audience: "tu salón o spa",
  audienceEn: "your salon or spa",
  title: "¿Qué tan preparado está tu salón o spa para atraer y retener clientes?",
  titleEn: "How ready is your salon or spa to attract and keep clients?",
  intro: introNuevo("tu salón o spa"),
  introEn: introNuevoEn("your salon or spa"),
  seoTitle: "Free digital diagnostic for salons and spas | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para salones y spas | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for salons, barbershops and spas: presence, bookings, confirmations and packages, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para salones, barberías y spas: presencia, citas, confirmaciones y paquetes, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint:
        "Por ejemplo: reseñas en Google, fotos reales de tus trabajos, perfiles de tu equipo.",
      trustHintEn: "For example: Google reviews, real photos of your work, profiles of your team.",
      contactVerb: "agendar una cita",
      contactVerbEn: "book an appointment",
      convertVerb: "agendó",
      convertVerbEn: "booked",
    }),
    especifica({
      id: "agenda",
      topic: "Agenda",
      topicEn: "Schedule",
      question: "¿Cómo manejan la agenda de cada persona del equipo?",
      questionEn: "How do you manage each team member's schedule?",
      hint: "Libreta, WhatsApp, Google Calendar o una app de citas: cualquiera cuenta si el equipo la usa.",
      hintEn:
        "A notebook, WhatsApp, Google Calendar or a booking app: any of them counts if the team uses it.",
      gap: {
        title: "La agenda no está organizada por persona",
        titleEn: "The schedule is not organised per person",
        why: "Si no se ve de un vistazo quién tiene espacio y a qué hora, se pierden citas que sí cabían y se empalman otras. Una agenda por persona, visible para todo el equipo, lo resuelve.",
        whyEn:
          "If you cannot see at a glance who has room and when, you lose appointments that would have fit and double up others. A schedule per person, visible to the whole team, solves it.",
        href: "/blog/que-automatizar-en-mi-negocio",
      },
    }),
    especifica({
      id: "confirmacion",
      topic: "Confirmación",
      topicEn: "Confirmation",
      question: "¿Confirman las citas con tus clientes antes de que lleguen?",
      questionEn: "Do you confirm appointments with clients before they arrive?",
      options: confirmacion(),
      gap: {
        title: "Las citas que no llegan son horas perdidas",
        titleEn: "Missed appointments are lost hours",
        why: "Una silla vacía a media tarde no se recupera. Confirmar un día antes y facilitar reagendar libera el espacio a tiempo para alguien más.",
        whyEn:
          "An empty chair in the middle of the afternoon cannot be recovered. Confirming a day ahead and making rescheduling easy frees the slot in time for someone else.",
      },
    }),
    especifica({
      id: "paquetes",
      topic: "Paquetes",
      topicEn: "Packages",
      question: "¿Cómo registran los paquetes, membresías o sesiones prepagadas?",
      questionEn: "How do you track packages, memberships or prepaid sessions?",
      notApplicable: na(
        "No vendemos paquetes ni membresías",
        "We do not sell packages or memberships",
      ),
      gap: {
        title: "Las sesiones prepagadas no tienen control",
        titleEn: "Prepaid sessions are not tracked",
        why: "Cuando no está claro cuántas sesiones le quedan a cada cliente, se generan discusiones y se regalan servicios sin querer. Un registro por cliente evita ambas cosas y te dice a quién ofrecerle renovar.",
        whyEn:
          "When it is unclear how many sessions each client has left, you get disputes and give away services by accident. A record per client avoids both and tells you who to offer a renewal.",
      },
    }),
    especifica({
      id: "productos",
      topic: "Inventario",
      topicEn: "Inventory",
      question: "¿Cómo controlan el inventario de productos que venden o usan en servicio?",
      questionEn: "How do you track the inventory of products you sell or use in services?",
      notApplicable: na(
        "No manejamos inventario de productos",
        "We do not keep a product inventory",
      ),
      gap: {
        title: "No sabes con certeza qué producto tienes",
        titleEn: "You are not sure what stock you have",
        why: "Quedarte sin el tinte o el producto que un cliente ya pidió cuesta la cita y la confianza. Un conteo simple, con mínimo por producto, avisa antes de que falte.",
        whyEn:
          "Running out of the colour or product a client already asked for costs the appointment and their trust. A simple count, with a minimum per product, warns you before it runs out.",
      },
    }),
    ...contexto(),
  ],
};

export const CONSTRUCCION: DiagnosticoVertical = {
  slug: "construccion",
  version: "2026-09-25",
  label: "Construcción y remodelación",
  labelEn: "Construction and remodelling",
  includes: "Constructoras, remodelación, arquitectura, acabados e instalaciones",
  includesEn: "Builders, remodelling, architecture, finishes and installations",
  icon: HardHat,
  palette: "neutral",
  blogCategories: ["Real Estate Marketing", "Web Design"],
  audience: "tu empresa",
  audienceEn: "your company",
  title: "¿Qué tan preparada está tu empresa para convertir cotizaciones en obras?",
  titleEn: "How ready is your company to turn quotes into projects?",
  intro: introNuevo("tu empresa"),
  introEn: introNuevoEn("your company"),
  seoTitle: "Free digital diagnostic for construction companies | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para constructoras y remodelación | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for builders and remodelling companies: presence, quotes, follow-up and project updates, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para constructoras y empresas de remodelación: presencia, cotizaciones, seguimiento y avances de obra, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint:
        "Por ejemplo: fotos de obras terminadas, antes y después, reseñas, tiempos de entrega reales.",
      trustHintEn:
        "For example: photos of finished projects, before and after, reviews, real delivery times.",
      contactVerb: "pedir una cotización",
      contactVerbEn: "request a quote",
      convertVerb: "contrató",
      convertVerbEn: "hired you",
    }),
    especifica({
      id: "cotizar",
      topic: "Datos para cotizar",
      topicEn: "Quote details",
      question: "Cuando alguien pide cotización, ¿cómo reúnen la información para cotizar?",
      questionEn: "When someone asks for a quote, how do you gather the information you need?",
      hint: "Medidas, fotos, ubicación, tipo de trabajo, presupuesto aproximado.",
      hintEn: "Measurements, photos, location, type of work, rough budget.",
      gap: {
        title: "Cotizar toma más vueltas de las necesarias",
        titleEn: "Quoting takes more back-and-forth than it should",
        why: "Si cada cotización arranca con diez mensajes para pedir medidas y fotos, el cliente se enfría y tu equipo pierde horas. Pedir lo necesario desde el primer contacto acelera la respuesta.",
        whyEn:
          "If every quote starts with ten messages asking for measurements and photos, the customer cools off and your team loses hours. Asking for what you need at first contact speeds up the answer.",
      },
    }),
    especifica({
      id: "cotizaciones",
      topic: "Cotizaciones",
      topicEn: "Quotes",
      question: "¿Cómo dan seguimiento a las cotizaciones que ya enviaron?",
      questionEn: "How do you follow up on quotes you have already sent?",
      gap: {
        title: "Las cotizaciones enviadas se quedan sin seguimiento",
        titleEn: "Sent quotes get no follow-up",
        why: "Una cotización enviada es trabajo ya invertido. Sin una lista con fecha de seguimiento, muchas se pierden por olvido, no porque el cliente haya dicho que no.",
        whyEn:
          "A sent quote is work already invested. Without a list with follow-up dates, many are lost to forgetting, not because the customer said no.",
        href: "/blog/que-es-un-crm",
      },
    }),
    especifica({
      id: "avances",
      topic: "Avances",
      topicEn: "Progress",
      question: "¿Cómo informan a tus clientes del avance de su obra?",
      questionEn: "How do you keep clients informed on their project's progress?",
      notApplicable: na(
        "No aplica: solo hacemos trabajos cortos",
        "Not applicable: we only do short jobs",
      ),
      gap: {
        title: "El cliente tiene que preguntar cómo va su obra",
        titleEn: "Clients have to ask how their project is going",
        why: "Un cliente sin noticias se pone nervioso y llama; uno informado recomienda. Un reporte breve y periódico, con fotos, reduce llamadas y genera referencias.",
        whyEn:
          "A client without news gets nervous and calls; an informed one refers you. A short periodic update, with photos, cuts calls and earns referrals.",
      },
    }),
    especifica({
      id: "pagos",
      topic: "Pagos",
      topicEn: "Payments",
      question: "¿Cómo controlan anticipos y pagos por etapa?",
      questionEn: "How do you track deposits and stage payments?",
      gap: {
        title: "Los pagos por etapa no están claros",
        titleEn: "Stage payments are unclear",
        why: "Cuando no está claro qué etapa ya se pagó, el flujo de la obra se complica y aparecen discusiones al final. Un registro por proyecto, con anticipo, etapas y saldo, evita ambas cosas.",
        whyEn:
          "When it is unclear which stage has been paid, the project's cash flow gets messy and disputes show up at the end. A record per project, with deposit, stages and balance, avoids both.",
      },
    }),
    ...contexto(),
  ],
};

export const INMOBILIARIAS: DiagnosticoVertical = {
  slug: "inmobiliarias",
  version: "2026-09-25",
  label: "Inmobiliarias y desarrollos",
  labelEn: "Real estate and developments",
  includes: "Inmobiliarias, asesores, desarrolladores y venta de lotes",
  includesEn: "Agencies, agents, developers and land sales",
  icon: Building2,
  palette: "neutral",
  blogCategories: ["Real Estate Marketing"],
  audience: "tu inmobiliaria",
  audienceEn: "your real estate business",
  title: "¿Qué tan preparada está tu inmobiliaria para convertir interesados en ventas?",
  titleEn: "How ready is your real estate business to turn leads into sales?",
  intro: introNuevo("tu inmobiliaria"),
  introEn: introNuevoEn("your real estate business"),
  seoTitle: "Free digital diagnostic for real estate businesses | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para inmobiliarias | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for real estate agencies and developers: presence, inventory, lead assignment and pipeline, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para inmobiliarias y desarrolladores: presencia, inventario, asignación de prospectos y embudo, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint:
        "Por ejemplo: reseñas, operaciones cerradas, fotos y videos reales de las propiedades.",
      trustHintEn: "For example: reviews, closed deals, real photos and videos of the properties.",
      contactVerb: "pedir información de una propiedad",
      contactVerbEn: "ask about a property",
      convertVerb: "compró ni rentó",
      convertVerbEn: "bought or rented",
    }),
    especifica({
      id: "inventario",
      topic: "Inventario",
      topicEn: "Inventory",
      question: "¿Cómo mantienen al día el inventario de propiedades o lotes disponibles?",
      questionEn: "How do you keep the inventory of available properties or lots up to date?",
      gap: {
        title: "Tu inventario disponible no está al día",
        titleEn: "Your available inventory is not up to date",
        why: "Anunciar algo que ya se vendió quema al interesado y al asesor. Una sola fuente de disponibilidad, que todos consultan, evita promesas que no se pueden cumplir.",
        whyEn:
          "Advertising something already sold burns both the lead and the agent. A single source of availability, checked by everyone, prevents promises you cannot keep.",
        href: "/blog/mapa-interactivo-de-lotes",
      },
    }),
    especifica({
      id: "asignacion",
      topic: "Asignación",
      topicEn: "Assignment",
      question: "Cuando llega un interesado, ¿cómo se asigna a un asesor?",
      questionEn: "When a lead comes in, how is it assigned to an agent?",
      gap: {
        title: "Los interesados no tienen un asesor claro",
        titleEn: "Leads have no clear owner",
        why: "Un prospecto que nadie toma, o que toman dos asesores, se pierde. Una regla de asignación simple y un tiempo máximo de primer contacto cambian la tasa de cierre.",
        whyEn:
          "A lead nobody picks up, or that two agents pick up, is lost. A simple assignment rule and a maximum time to first contact change the close rate.",
        href: "/blog/seguimiento-de-leads-inmobiliarios",
      },
    }),
    especifica({
      id: "visitas",
      topic: "Visitas",
      topicEn: "Viewings",
      question: "¿Cómo agendan y confirman las visitas a propiedades?",
      questionEn: "How do you schedule and confirm property viewings?",
      gap: {
        title: "Las visitas se agendan sin confirmar",
        titleEn: "Viewings are booked without confirmation",
        why: "Una visita a la que nadie llega le cuesta al asesor medio día. Confirmar el día anterior, con ubicación y hora, reduce las visitas perdidas.",
        whyEn:
          "A viewing nobody shows up to costs the agent half a day. Confirming the day before, with location and time, reduces missed viewings.",
      },
    }),
    especifica({
      id: "embudo",
      topic: "Etapas",
      topicEn: "Pipeline",
      question: "¿Saben en qué etapa está cada prospecto?",
      questionEn: "Do you know which stage each lead is in?",
      hint: "Por ejemplo: primer contacto, visita, apartado, crédito, cierre.",
      hintEn: "For example: first contact, viewing, reservation, financing, closing.",
      gap: {
        title: "No hay visibilidad de la etapa de cada prospecto",
        titleEn: "There is no visibility into each lead's stage",
        why: "Sin etapas, no sabes dónde se caen las ventas ni cuánto hay en proceso. Un tablero sencillo con cinco etapas basta para empezar a verlo.",
        whyEn:
          "Without stages, you do not know where sales drop off or how much is in progress. A simple board with five stages is enough to start seeing it.",
        href: "/blog/que-es-un-crm",
      },
    }),
    ...contexto(),
  ],
};

export const RESTAURANTES: DiagnosticoVertical = {
  slug: "restaurantes",
  version: "2026-09-25",
  label: "Restaurantes y cafeterías",
  labelEn: "Restaurants and cafés",
  includes: "Restaurantes, cafeterías, bares, food trucks y comida para llevar",
  includesEn: "Restaurants, cafés, bars, food trucks and takeaway",
  icon: UtensilsCrossed,
  palette: "neutral",
  blogCategories: ["Marketing Strategy", "Web Design"],
  audience: "tu restaurante",
  audienceEn: "your restaurant",
  title: "¿Qué tan preparado está tu restaurante para atraer y atender más clientes?",
  titleEn: "How ready is your restaurant to attract and serve more guests?",
  intro: introNuevo("tu restaurante"),
  introEn: introNuevoEn("your restaurant"),
  seoTitle: "Free digital diagnostic for restaurants and cafés | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para restaurantes y cafeterías | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for restaurants, cafés and bars: presence, menu, reservations and orders, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para restaurantes, cafeterías y bares: presencia, menú, reservaciones y pedidos, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint: "Por ejemplo: reseñas en Google, fotos reales de platillos y del lugar.",
      trustHintEn: "For example: Google reviews, real photos of dishes and the place.",
      contactVerb: "reservar o hacer un pedido",
      contactVerbEn: "book a table or place an order",
      convertVerb: "reservó",
      convertVerbEn: "booked",
      followUpNa: true,
    }),
    especifica({
      id: "menu",
      topic: "Menú",
      topicEn: "Menu",
      question: "¿Tu menú está en línea, fácil de leer en celular y con precios al día?",
      questionEn: "Is your menu online, easy to read on a phone and with current prices?",
      options: [
        {
          label: "Sí, en mi web o perfil, al día y lo revisamos con cada cambio",
          labelEn: "Yes, on my website or profile, current and checked with every change",
          value: 1,
        },
        {
          label: "Está en línea con precios al día",
          labelEn: "It is online with current prices",
          value: 0.75,
        },
        {
          label: "Solo una foto o un PDF viejo",
          labelEn: "Only a photo or an old PDF",
          value: 0.3,
        },
        { label: "No está en línea", labelEn: "It is not online", value: 0 },
        NO_SE,
      ],
      gap: {
        title: "Tu menú en línea no ayuda a decidir",
        titleEn: "Your online menu does not help people decide",
        why: "Mucha gente elige dónde comer viendo el menú en el celular. Una foto borrosa o precios viejos generan dudas y llamadas que tu equipo tiene que contestar en plena hora pico.",
        whyEn:
          "Many people choose where to eat by checking the menu on their phone. A blurry photo or old prices raise doubts and calls your team has to answer at peak time.",
      },
    }),
    especifica({
      id: "reservaciones",
      topic: "Reservaciones",
      topicEn: "Reservations",
      question: "¿Cómo manejan las reservaciones?",
      questionEn: "How do you handle reservations?",
      notApplicable: na("No tomamos reservaciones", "We do not take reservations"),
      gap: {
        title: "Las reservaciones dependen de quien conteste",
        titleEn: "Reservations depend on whoever answers",
        why: "Una reservación anotada en un papel que se perdió es una mesa y un cliente molesto. Un solo lugar para registrarlas, que todo el turno consulta, evita el problema.",
        whyEn:
          "A reservation written on a lost piece of paper is an empty table and an upset guest. A single place to record them, checked by the whole shift, avoids the problem.",
      },
    }),
    especifica({
      id: "pedidos",
      topic: "Pedidos",
      topicEn: "Orders",
      question: "¿Cómo reciben los pedidos para llevar o a domicilio?",
      questionEn: "How do you take takeaway or delivery orders?",
      notApplicable: na("No hacemos pedidos para llevar", "We do not do takeaway or delivery"),
      gap: {
        title: "Los pedidos por mensaje se prestan a errores",
        titleEn: "Orders by message invite mistakes",
        why: "Un pedido tomado por chat, sin confirmar total ni dirección, termina en cambios y reclamos. Un formato fijo, o un menú con pedido en línea, reduce errores y tiempo al teléfono.",
        whyEn:
          "An order taken by chat, without confirming the total or address, ends in changes and complaints. A fixed format, or a menu with online ordering, cuts mistakes and time on the phone.",
        href: "/ecommerce",
      },
    }),
    especifica({
      id: "insumos",
      topic: "Insumos",
      topicEn: "Supplies",
      question: "¿Cómo controlan insumos e inventario?",
      questionEn: "How do you track supplies and inventory?",
      gap: {
        title: "No sabes con certeza qué insumos te quedan",
        titleEn: "You are not sure what supplies you have left",
        why: "Quedarte sin un ingrediente a media noche obliga a quitar platillos o a comprar caro de emergencia. Un conteo simple, con mínimos por insumo, avisa antes de que falte.",
        whyEn:
          "Running out of an ingredient mid-service forces you to pull dishes or buy at emergency prices. A simple count, with a minimum per item, warns you before it runs out.",
      },
    }),
    ...contexto(),
  ],
};

export const HOSPEDAJE: DiagnosticoVertical = {
  slug: "hospedaje",
  version: "2026-09-25",
  label: "Hoteles y hospedaje",
  labelEn: "Hotels and lodging",
  includes: "Hoteles, casas de huéspedes, rentas vacacionales, glamping y cabañas",
  includesEn: "Hotels, guesthouses, vacation rentals, glamping and cabins",
  icon: BedDouble,
  palette: "neutral",
  blogCategories: ["Marketing Strategy", "Automation"],
  audience: "tu hospedaje",
  audienceEn: "your property",
  title: "¿Qué tan preparado está tu hospedaje para recibir más reservas directas?",
  titleEn: "How ready is your property to get more direct bookings?",
  intro: introNuevo("tu hospedaje"),
  introEn: introNuevoEn("your property"),
  seoTitle: "Free digital diagnostic for hotels and vacation rentals | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para hoteles y rentas vacacionales | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for hotels, guesthouses and vacation rentals: presence, availability, direct bookings and guest communication, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para hoteles, casas de huéspedes y rentas vacacionales: presencia, disponibilidad, reservas directas y comunicación con huéspedes, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint:
        "Por ejemplo: reseñas en Google o en plataformas, fotos reales de habitaciones y áreas comunes.",
      trustHintEn:
        "For example: reviews on Google or booking platforms, real photos of rooms and common areas.",
      contactVerb: "reservar directo contigo",
      contactVerbEn: "book directly with you",
      convertVerb: "reservó",
      convertVerbEn: "booked",
    }),
    especifica({
      id: "disponibilidad",
      topic: "Disponibilidad",
      topicEn: "Availability",
      question: "¿Cómo mantienen la disponibilidad al día entre todos tus canales?",
      questionEn: "How do you keep availability in sync across all your channels?",
      hint: "Booking, Airbnb, reservas directas, llamadas.",
      hintEn: "Booking, Airbnb, direct bookings, phone calls.",
      gap: {
        title: "Tu disponibilidad no está sincronizada",
        titleEn: "Your availability is not in sync",
        why: "Una sobreventa cuesta una reseña mala y a veces una penalización de la plataforma. Un calendario central, conectado o actualizado en el momento, evita reservar dos veces la misma noche.",
        whyEn:
          "An overbooking costs a bad review and sometimes a platform penalty. A central calendar, synced or updated on the spot, avoids selling the same night twice.",
      },
    }),
    especifica({
      id: "directas",
      topic: "Reserva directa",
      topicEn: "Direct booking",
      question: "¿Pueden tus huéspedes reservar directo contigo, sin pasar por una plataforma?",
      questionEn: "Can guests book directly with you, without going through a platform?",
      options: [
        {
          label: "Sí, en línea y con pago o anticipo",
          labelEn: "Yes, online with payment or a deposit",
          value: 1,
        },
        {
          label: "Sí, por mensaje o llamada, con un proceso claro",
          labelEn: "Yes, by message or call, with a clear process",
          value: 0.75,
        },
        {
          label: "Se puede, pero es complicado",
          labelEn: "It is possible, but complicated",
          value: 0.3,
        },
        { label: "Solo por plataformas", labelEn: "Only through platforms", value: 0 },
        NO_SE,
      ],
      gap: {
        title: "Dependes de las plataformas para cada reserva",
        titleEn: "You depend on platforms for every booking",
        why: "Las plataformas traen huéspedes nuevos, pero cobran comisión en cada noche. Una vía directa y clara, sobre todo para quien ya te conoce o regresa, mejora el margen sin dejar las plataformas.",
        whyEn:
          "Platforms bring new guests, but charge a commission on every night. A clear direct path, especially for guests who already know you or return, improves margin without leaving the platforms.",
        href: "/servicios/websites",
      },
    }),
    especifica({
      id: "llegada",
      topic: "Llegada",
      topicEn: "Arrival",
      question: "¿Cómo envían las indicaciones de llegada e información para el huésped?",
      questionEn: "How do you send arrival instructions and guest information?",
      gap: {
        title: "Tus huéspedes preguntan lo mismo cada vez",
        titleEn: "Guests ask the same questions every time",
        why: "Ubicación, horario de entrada, estacionamiento y wifi se preguntan en casi todas las reservas. Un mensaje o guía fija, enviada antes de la llegada, ahorra horas de chat.",
        whyEn:
          "Location, check-in time, parking and wifi come up in almost every booking. A fixed message or guide, sent before arrival, saves hours of chat.",
        href: "/blog/que-automatizar-en-mi-negocio",
      },
    }),
    especifica({
      id: "rotacion",
      topic: "Limpieza",
      topicEn: "Turnover",
      question: "¿Cómo coordinan limpieza y pendientes entre una salida y la siguiente llegada?",
      questionEn:
        "How do you coordinate cleaning and to-dos between check-out and the next check-in?",
      gap: {
        title: "Los cambios de huésped dependen de la memoria de alguien",
        titleEn: "Turnovers depend on someone's memory",
        why: "Un cuarto que no quedó listo a tiempo es la primera impresión del siguiente huésped. Una lista por salida, con responsable y hora, evita que se escape algo.",
        whyEn:
          "A room not ready on time is the next guest's first impression. A checklist per check-out, with an owner and a time, keeps anything from slipping.",
      },
    }),
    ...contexto(),
  ],
};

export const TURISMO: DiagnosticoVertical = {
  slug: "turismo",
  version: "2026-09-25",
  label: "Tours y experiencias",
  labelEn: "Tours and experiences",
  includes: "Tours, actividades, renta de equipo, viñedos y experiencias",
  includesEn: "Tours, activities, equipment rental, wineries and experiences",
  icon: Compass,
  palette: "neutral",
  blogCategories: ["Marketing Strategy", "Video & Drone"],
  audience: "tu negocio de tours o experiencias",
  audienceEn: "your tour or experience business",
  title: "¿Qué tan preparado está tu negocio de tours para llenar más salidas?",
  titleEn: "How ready is your tour business to fill more departures?",
  intro: introNuevo("tu negocio de tours o experiencias"),
  introEn: introNuevoEn("your tour or experience business"),
  seoTitle: "Free digital diagnostic for tours and experiences | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para tours y experiencias | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for tour operators and experience businesses: presence, capacity, deposits and guest communication, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para tours y experiencias: presencia, cupos, anticipos y comunicación con clientes, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint:
        "Por ejemplo: reseñas, fotos y videos reales de las experiencias, permisos o certificaciones.",
      trustHintEn:
        "For example: reviews, real photos and videos of the experiences, permits or certifications.",
      contactVerb: "reservar una experiencia",
      contactVerbEn: "book an experience",
      convertVerb: "reservó",
      convertVerbEn: "booked",
    }),
    especifica({
      id: "cupos",
      topic: "Cupos",
      topicEn: "Capacity",
      question: "¿Cómo controlan los cupos disponibles por fecha y horario?",
      questionEn: "How do you track available spots by date and time?",
      gap: {
        title: "Los cupos disponibles no están claros",
        titleEn: "Available spots are unclear",
        why: "Sin un control de cupos, se vende de más o se rechaza gente cuando sí había lugar. Un calendario por salida, que todo el equipo consulta, lo resuelve.",
        whyEn:
          "Without tracking capacity, you oversell or turn people away when there was room. A calendar per departure, checked by the whole team, solves it.",
      },
    }),
    especifica({
      id: "anticipos",
      topic: "Anticipos",
      topicEn: "Deposits",
      question: "¿Cómo cobran anticipos o pagos para confirmar una reserva?",
      questionEn: "How do you take deposits or payments to confirm a booking?",
      gap: {
        title: "Las reservas sin anticipo se caen",
        titleEn: "Bookings without a deposit fall through",
        why: "Una reserva sin compromiso ocupa un lugar que otro cliente sí habría pagado. Un anticipo con instrucciones claras, y un registro de quién ya pagó, reduce las cancelaciones de último momento.",
        whyEn:
          "A booking without commitment holds a spot another customer would have paid for. A deposit with clear instructions, and a record of who has paid, cuts last-minute cancellations.",
      },
    }),
    especifica({
      id: "encuentro",
      topic: "Indicaciones",
      topicEn: "Instructions",
      question: "¿Cómo envían punto de encuentro, horario y qué llevar?",
      questionEn: "How do you send the meeting point, time and what to bring?",
      gap: {
        title: "Tus clientes preguntan lo mismo antes de cada salida",
        titleEn: "Customers ask the same things before every departure",
        why: "Punto de encuentro, hora y qué llevar se preguntan en casi todas las reservas. Un mensaje fijo, enviado un día antes, reduce retrasos y horas de chat.",
        whyEn:
          "Meeting point, time and what to bring come up in almost every booking. A fixed message, sent the day before, cuts delays and hours of chat.",
        href: "/blog/que-automatizar-en-mi-negocio",
      },
    }),
    especifica({
      id: "cambios",
      topic: "Cambios",
      topicEn: "Changes",
      question: "¿Cómo manejan cambios, cancelaciones o ajustes por clima?",
      questionEn: "How do you handle changes, cancellations or weather adjustments?",
      gap: {
        title: "Los cambios de último momento se manejan sobre la marcha",
        titleEn: "Last-minute changes are handled on the fly",
        why: "Sin una política clara y un aviso rápido a todos los afectados, un cambio de clima se vuelve reembolsos, reclamos y reseñas malas. Tener la política escrita y los contactos a la mano lo evita.",
        whyEn:
          "Without a clear policy and a quick notice to everyone affected, a weather change turns into refunds, complaints and bad reviews. A written policy and contacts at hand prevent it.",
      },
    }),
    ...contexto(),
  ],
};

export const OTROS: DiagnosticoVertical = {
  slug: "otros",
  version: "2026-09-25",
  label: "Otro tipo de negocio",
  labelEn: "Another kind of business",
  includes: "Servicios profesionales, comercios, talleres y cualquier otro giro",
  includesEn: "Professional services, retail, workshops and any other industry",
  icon: Store,
  palette: "neutral",
  blogCategories: ["Marketing Strategy", "Automation"],
  audience: "tu negocio",
  audienceEn: "your business",
  title: "¿Qué tan preparado está tu negocio para atraer y atender clientes?",
  titleEn: "How ready is your business to attract and serve customers?",
  intro: introNuevo("tu negocio"),
  introEn: introNuevoEn("your business"),
  seoTitle: "Free digital diagnostic for small businesses | Aphelion",
  seoTitleEs: "Diagnóstico digital gratuito para negocios | Aphelion",
  seoDescription:
    "Free three-minute diagnostic for any business: presence, contact, follow-up and day-to-day operations, with a prioritised result. No call required.",
  seoDescriptionEs:
    "Diagnóstico gratuito de tres minutos para cualquier negocio: presencia, contacto, seguimiento y operación diaria, con un resultado priorizado. Sin llamada.",
  questions: [
    ...comunes({
      trustHint: "Por ejemplo: reseñas, fotos de trabajos reales, clientes o casos.",
      trustHintEn: "For example: reviews, photos of real work, clients or case studies.",
      contactVerb: "pedir informes o una cotización",
      contactVerbEn: "ask for information or a quote",
      convertVerb: "compró ni contrató",
      convertVerbEn: "bought or hired you",
      googleNa: true,
      followUpNa: true,
    }),
    especifica({
      id: "solicitudes",
      topic: "Solicitudes",
      topicEn: "Requests",
      question: "¿Cómo registran las solicitudes y pedidos que reciben?",
      questionEn: "How do you record the requests and orders you receive?",
      gap: {
        title: "Las solicitudes se pierden entre canales",
        titleEn: "Requests get lost across channels",
        why: "Cuando llegan por WhatsApp, llamada, correo y redes sin un lugar común, algunas se quedan sin atender. Un solo registro, aunque sea una hoja compartida, lo resuelve.",
        whyEn:
          "When requests arrive by WhatsApp, phone, email and social with no common place, some go unanswered. A single record, even a shared sheet, solves it.",
        href: "/blog/que-es-un-crm",
      },
    }),
    especifica({
      id: "tareas",
      topic: "Tareas",
      topicEn: "Tasks",
      question: "¿Cómo se reparten y se da seguimiento a las tareas del equipo?",
      questionEn: "How are team tasks assigned and followed up?",
      gap: {
        title: "Las tareas dependen de que alguien se acuerde",
        titleEn: "Tasks depend on someone remembering",
        why: "Sin responsable y fecha, los pendientes se acumulan y el cliente lo nota. Una lista compartida con dueño y fecha es suficiente para empezar; lo repetitivo se puede automatizar después.",
        whyEn:
          "Without an owner and a date, to-dos pile up and customers notice. A shared list with owner and date is enough to start; the repetitive parts can be automated later.",
        href: "/blog/que-automatizar-en-mi-negocio",
      },
    }),
    especifica({
      id: "cobros",
      topic: "Cobros",
      topicEn: "Collections",
      question: "¿Cómo controlan cobros y pagos pendientes?",
      questionEn: "How do you track pending charges and payments?",
      gap: {
        title: "Los cobros pendientes no están claros",
        titleEn: "Pending payments are unclear",
        why: "Cuando no está claro quién debe qué, se cobra tarde o no se cobra. Un registro con fecha de vencimiento y un recordatorio amable recupera dinero que ya es tuyo.",
        whyEn:
          "When it is unclear who owes what, you collect late or not at all. A record with due dates and a friendly reminder recovers money that is already yours.",
      },
    }),
    especifica({
      id: "estado",
      topic: "Estado del pedido",
      topicEn: "Order status",
      question: "¿Cómo le informan al cliente en qué va su pedido o servicio?",
      questionEn: "How do you keep customers informed on their order or service?",
      notApplicable: na(
        "No aplica: entregamos en el momento",
        "Not applicable: we deliver on the spot",
      ),
      gap: {
        title: "El cliente tiene que preguntar en qué va lo suyo",
        titleEn: "Customers have to ask how their order is going",
        why: 'Cada "¿cómo va lo mío?" es una interrupción para tu equipo y una señal de desorden para el cliente. Avisos en los momentos clave, a mano o automáticos, lo evitan.',
        whyEn:
          'Every "how is my order going?" is an interruption for your team and a sign of disorder for the customer. Updates at key moments, manual or automatic, prevent it.',
      },
    }),
    ...contexto(),
  ],
};

/* ------------------------------------------------------------------ */
/* Registry and scoring                                                */
/* ------------------------------------------------------------------ */

/** Selector order. "Otros" stays last so nobody has to scroll past it. */
export const VERTICALES: DiagnosticoVertical[] = [
  CLINICAS,
  DENTAL,
  BELLEZA,
  CONSTRUCCION,
  INMOBILIARIAS,
  RESTAURANTES,
  HOSPEDAJE,
  TURISMO,
  OTROS,
];

export const getVertical = (slug: string) => VERTICALES.find((v) => v.slug === slug);

/** Questions that count toward the score. Context questions weigh 0. */
export const scoredQuestions = (v: DiagnosticoVertical) =>
  v.questions.filter((q) => !q.context && q.weight > 0);

/** Total is 100 by construction; asserted in the build check so a bad edit is loud. */
export function totalWeight(v: DiagnosticoVertical) {
  return scoredQuestions(v).reduce((a, q) => a + q.weight, 0);
}

/** Answers are stored as the index of the chosen option, keyed by question id. */
export type Answers = Record<string, number>;

/**
 * Below this share of known answers the result is shown as partial, without
 * a big number, because a score built on half the questions is not honest.
 */
export const MIN_COVERAGE = 0.75;

/** Below this fraction of a question's weight, the question is a gap. */
export const GAP_THRESHOLD = 0.6;

export type ContextAnswer = {
  id: string;
  topic: string;
  topicEn: string;
  label: string;
  labelEn: string;
};

export type DiagnosticResult = {
  /** 0-100 over the answers that are known. null when the result is partial. */
  score: number | null;
  /** Same figure, always computed, for storage and the lead summary. */
  rawScore: number;
  /** Share of applicable weight with a known answer, 0 to 1. */
  coverage: number;
  partial: boolean;
  /** Low-scoring questions, biggest weight first, then lowest answer first. */
  gaps: DiagnosticoQuestion[];
  wins: DiagnosticoQuestion[];
  /** Answered "No lo sé", or left unanswered. Listed as "Por confirmar". */
  unknown: DiagnosticoQuestion[];
  notApplicable: DiagnosticoQuestion[];
  context: ContextAnswer[];
};

/**
 * The one scoring function. The browser uses it for the instant result and
 * the server re-runs it on the raw answers before storing anything.
 */
export function scoreDiagnostic(v: DiagnosticoVertical, answers: Answers): DiagnosticResult {
  let applicable = 0;
  let known = 0;
  let earned = 0;
  const valueOf = new Map<string, number>();
  const gaps: DiagnosticoQuestion[] = [];
  const wins: DiagnosticoQuestion[] = [];
  const unknown: DiagnosticoQuestion[] = [];
  const notApplicable: DiagnosticoQuestion[] = [];
  const context: ContextAnswer[] = [];

  for (const q of v.questions) {
    const idx = answers[q.id];
    const opt = Number.isInteger(idx) ? q.options[idx] : undefined;

    if (q.context || q.weight === 0) {
      if (opt) {
        context.push({
          id: q.id,
          topic: q.topic,
          topicEn: q.topicEn,
          label: opt.label,
          labelEn: opt.labelEn,
        });
      }
      continue;
    }

    if (opt?.na) {
      notApplicable.push(q);
      continue;
    }

    applicable += q.weight;
    if (!opt || opt.value === null) {
      unknown.push(q);
      continue;
    }

    known += q.weight;
    earned += opt.value * q.weight;
    valueOf.set(q.id, opt.value);
    (opt.value < GAP_THRESHOLD ? gaps : wins).push(q);
  }

  gaps.sort((a, b) => b.weight - a.weight || (valueOf.get(a.id) ?? 0) - (valueOf.get(b.id) ?? 0));
  wins.sort((a, b) => b.weight - a.weight);

  const coverage = applicable > 0 ? known / applicable : 0;
  const rawScore = known > 0 ? Math.round((earned / known) * 100) : 0;
  const partial = coverage < MIN_COVERAGE;

  return {
    score: partial ? null : rawScore,
    rawScore,
    coverage: Math.round(coverage * 100) / 100,
    partial,
    gaps,
    wins,
    unknown,
    notApplicable,
    context,
  };
}

export const bandasFor = (v: DiagnosticoVertical) => v.bandas ?? BANDAS_NEGOCIO;

export const bandaFor = (score: number, v: DiagnosticoVertical) => {
  const bandas = bandasFor(v);
  return bandas.find((b) => score >= b.min) ?? bandas[bandas.length - 1];
};

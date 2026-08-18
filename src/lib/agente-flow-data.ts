/**
 * Fixed-flow data for the "Automatizado" tier demo on /servicios/agente-ia.
 *
 * Lives in lib/ rather than beside the component so the component file only
 * exports components (fast refresh) and so the diagram and the chat widget can
 * both read from one source — if they drifted, the diagram would misrepresent
 * what the widget actually does.
 *
 * Fictional demo business.
 */

export type FlowOption = {
  id: string;
  label: string;
  labelEs: string;
  answer: string;
  answerEs: string;
  /** Second-level branch. Only "precios" has one, matching the diagram. */
  followUps?: Array<{
    id: string;
    label: string;
    labelEs: string;
    answer: string;
    answerEs: string;
  }>;
};

export const FLOW_OPTIONS: FlowOption[] = [
  {
    id: "horarios",
    label: "Hours",
    labelEs: "Horarios",
    answer:
      "We're open Monday to Friday, 9:00 to 19:00, and Saturdays 9:00 to 14:00. Closed Sundays.",
    answerEs:
      "Abrimos de lunes a viernes de 9:00 a 19:00, y sábados de 9:00 a 14:00. Domingos cerrado.",
  },
  {
    id: "ubicacion",
    label: "Location",
    labelEs: "Ubicación",
    answer: "We're at Av. Reforma 1120, Zona Centro, Ensenada. There's parking on site.",
    answerEs:
      "Estamos en Av. Reforma 1120, Zona Centro, Ensenada. Hay estacionamiento en el lugar.",
  },
  {
    id: "precios",
    label: "Pricing",
    labelEs: "Precios",
    answer: "It depends on the type of project. Which one is yours?",
    answerEs: "Depende del tipo de proyecto. ¿Cuál es el tuyo?",
    followUps: [
      {
        id: "residencial",
        label: "Residential",
        labelEs: "Residencial",
        answer:
          "Residential installations start at $8,500 MXN, including an on-site assessment. An advisor can send you the exact quote.",
        answerEs:
          "Las instalaciones residenciales arrancan en $8,500 MXN, incluyendo la visita de evaluación. Un asesor te puede mandar la cotización exacta.",
      },
      {
        id: "comercial",
        label: "Commercial",
        labelEs: "Comercial",
        answer:
          "Commercial projects are quoted per square meter after a site visit. An advisor can schedule one with you.",
        answerEs:
          "Los proyectos comerciales se cotizan por metro cuadrado después de una visita. Un asesor te la puede agendar.",
      },
    ],
  },
];

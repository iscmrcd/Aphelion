export type DronePackage = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  price: number;
  ideal: string[];
  features: string[];
};

export type FaqItem = { q: string; a: string };

export const DRONE_PACKAGES: DronePackage[] = [
  {
    id: 1,
    slug: "captura",
    name: "Captura",
    tagline: "Grabación aérea de una locación — restaurantes, propiedades, hoteles, negocios",
    duration: "Hasta 1 hora en sitio",
    price: 2990,
    ideal: ["Restaurantes", "Hoteles", "Inmobiliarias", "Negocios locales"],
    features: [
      "Planeación de tomas",
      "Captura en 4K",
      "1 video editado (30–45 seg) + versión vertical",
      "10 fotografías aéreas seleccionadas",
      "1 ronda de ajustes",
      "Entrega en 5 días hábiles",
    ],
  },
  {
    id: 2,
    slug: "cobertura",
    name: "Cobertura",
    tagline: "Documentación aérea de un evento — activaciones, inauguraciones, bodas",
    duration: "Hasta 4 horas continuas",
    price: 4990,
    ideal: ["Bodas", "Inauguraciones", "Activaciones de marca"],
    features: [
      "Todo lo de Captura",
      "1 video editado (60–90 seg) + versión vertical",
      "20 fotografías aéreas seleccionadas",
      "2 rondas de ajustes",
      "Entrega en 8 días hábiles",
    ],
  },
  {
    id: 3,
    slug: "seguimiento",
    name: "Seguimiento",
    tagline: "Registro aéreo de un proceso — obra, construcción, viñedo, desarrollo",
    duration: "Paquete de 4 visitas, cadencia acordada",
    price: 8890,
    ideal: ["Constructoras", "Desarrollos inmobiliarios", "Viñedos"],
    features: [
      "Antes de la primera visita, verificamos la ubicación exacta: la mayoría de las zonas se puede volar libremente, pero algunas (como el radio cercano a un aeropuerto) requieren gestión de permiso especial ante AFAC. Te avisamos desde la cotización si tu proyecto aplica.",
      "Hasta 2 horas por visita",
      "1 clip editado por visita, entrega en 72 hrs",
      "1 video resumen final (90 seg), 2 rondas de ajustes",
      "Organización del material en la nube",
      "Visita adicional fuera del paquete: $2,490 MXN",
    ],
  },
];

export const DRONE_EXTRAS: string[] = [
  "Material RAW (archivos originales): $999 MXN",
  "Edición avanzada — motion graphics, cortes para pauta, sound design: desde $3,500 MXN",
  "Tiempo adicional en sitio — bloques de 30 min: $499 c/u",
  "Revisión adicional fuera de las incluidas: $499 c/u",
  "Entrega urgente (menos de 72 hrs): +25% sobre el paquete",
  "Gestión de permiso de vuelo en zona restringida (AFAC/SCT): $999 MXN",
];

export type DroneZone = { zone: string; charge: string };

export const DRONE_ZONES: DroneZone[] = [
  { zone: "Ensenada y Valle de Guadalupe", charge: "Incluido" },
  { zone: "Rosarito / Tecate", charge: "+$1,200 MXN" },
  { zone: "Tijuana", charge: "+$1,499 MXN" },
  { zone: "San Quintín", charge: "+$1,900 MXN" },
  { zone: "Mexicali", charge: "+$2,700 MXN" },
  { zone: "Fuera de BC", charge: "Cotización con viáticos" },
];

export const DRONE_POLICY: string[] = [
  "El tiempo de espera en sitio cuenta como tiempo contratado",
  "Reprogramación gratuita una vez por clima; después aplica cargo",
  "Si la ubicación cae dentro de una zona restringida (radio de aeropuerto u otra restricción AFAC), se confirma antes de la sesión — aplica el cargo de Gestión de permiso en Extras",
  "El material incluye licencia de uso para el cliente contratante — reventa o cesión a terceros requiere autorización",
  "Anticipo del 50% para reservar fecha",
];

export const FAQ_DRONE: FaqItem[] = [
  {
    q: "¿Qué pasa si el clima no permite volar?",
    a: "Reprogramamos una vez sin costo. Después de eso aplica un cargo.",
  },
  {
    q: "¿Necesito permisos para volar en mi ubicación?",
    a: "La mayoría de zonas se puede volar libremente. Si tu ubicación cae en un área restringida (radio de aeropuerto u otra restricción AFAC), te lo confirmamos desde la cotización.",
  },
  {
    q: "¿Puedo usar el video en campañas pagadas (Meta/Google Ads)?",
    a: "Sí, el material incluye licencia de uso para el cliente contratante. Reventa o cesión a terceros requiere autorización.",
  },
  {
    q: "¿Entregan los archivos originales (RAW)?",
    a: "Se puede agregar como extra ($999 MXN); no viene incluido por default.",
  },
  {
    q: "¿Qué pasa si necesito más tiempo el día de la sesión?",
    a: "Se cobra en bloques de 30 minutos ($499 c/u). El tiempo de espera en sitio cuenta como tiempo contratado.",
  },
  {
    q: "¿Cómo se reserva la fecha?",
    a: "Con un anticipo del 50%.",
  },
];

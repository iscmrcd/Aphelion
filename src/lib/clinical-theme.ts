/**
 * Clinical palette, shared by the diagnostic tool and the medical landing.
 *
 * Every value here was contrast-checked against the surfaces it actually sits
 * on, in both themes. The light accent is #2A7488 rather than the #2E7F97 it
 * started as, because the original failed AA at 4.06:1 over the wash gradient.
 *
 * This palette is scoped to the medical vertical on purpose. The rest of the
 * site stays neutral, and the colour ramp with a gradient is reserved for
 * Conversational AI.
 */
export type ClinicalPalette = {
  deep: string;
  mid: string;
  soft: string;
  wash: string;
  glass: string;
  glassBorder: string;
  card: string;
  bg: string;
  onDeep: string;
};

export const CLINIC_LIGHT: ClinicalPalette = {
  deep: "#12414F",
  mid: "#2A7488",
  soft: "#8FC2D4",
  wash: "#EAF3F7",
  glass: "rgba(255,255,255,0.72)",
  glassBorder: "rgba(255,255,255,0.85)",
  card: "rgba(255,255,255,0.85)",
  bg: "linear-gradient(170deg, #EAF3F7 0%, #F7FAFC 45%, #FFFFFF 100%)",
  onDeep: "#FFFFFF",
};

export const CLINIC_DARK: ClinicalPalette = {
  deep: "#CFE6EE",
  mid: "#7FB8CC",
  soft: "#2A7488",
  wash: "#0E1A1F",
  glass: "rgba(255,255,255,0.05)",
  glassBorder: "rgba(255,255,255,0.10)",
  card: "rgba(255,255,255,0.04)",
  bg: "linear-gradient(170deg, #0E1A1F 0%, #101A1E 45%, #0C1215 100%)",
  onDeep: "#0E1A1F",
};

export const clinicalPalette = (theme: "light" | "dark") =>
  theme === "dark" ? CLINIC_DARK : CLINIC_LIGHT;

/**
 * Palette for the diagnostic, per vertical.
 *
 * Health verticals keep the clinical blues they always had. Every other
 * vertical uses the site's neutral palette: black on white, white on black,
 * no accent colour, because the colour ramp is reserved for Conversational AI
 * and inventing a colour per industry would fragment the brand.
 *
 * Same shape as ClinicalPalette so the diagnostic component does not care
 * which one it gets. `soft` stays a 6-digit hex because the component appends
 * alpha suffixes to it.
 */
import { clinicalPalette, type ClinicalPalette } from "@/lib/clinical-theme";
import type { DiagnosticoVertical } from "@/lib/diagnostico-data";

export type DiagnosticoPalette = ClinicalPalette & {
  /** Card shadow, tinted for clinical and plain for neutral. */
  shadow: string;
};

const NEUTRAL_LIGHT: ClinicalPalette = {
  deep: "#0A0A0A",
  mid: "#404040",
  soft: "#A3A3A3",
  wash: "#FAFAFA",
  glass: "rgba(255,255,255,0.85)",
  glassBorder: "#E5E5E5",
  card: "#FFFFFF",
  // Transparent so the site's own background shows through, including its
  // night-mode remap, instead of a second, slightly different grey.
  bg: "transparent",
  onDeep: "#FFFFFF",
};

const NEUTRAL_DARK: ClinicalPalette = {
  deep: "#FAFAFA",
  mid: "#D4D4D4",
  soft: "#525252",
  wash: "#0A0A0A",
  glass: "rgba(255,255,255,0.04)",
  glassBorder: "rgba(255,255,255,0.10)",
  card: "rgba(255,255,255,0.04)",
  bg: "transparent",
  onDeep: "#0A0A0A",
};

export function diagnosticoPalette(
  palette: DiagnosticoVertical["palette"],
  theme: "light" | "dark",
): DiagnosticoPalette {
  if (palette === "clinical") {
    return {
      ...clinicalPalette(theme),
      shadow: "0 20px 60px -30px rgba(18,65,79,0.45)",
    };
  }
  return {
    ...(theme === "dark" ? NEUTRAL_DARK : NEUTRAL_LIGHT),
    shadow: theme === "dark" ? "none" : "0 20px 60px -34px rgba(0,0,0,0.25)",
  };
}

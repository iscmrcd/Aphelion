import { AI_FROM, AI_ICON_GRADIENT_ID, AI_TO } from "@/lib/whatsapp-ia-data";

/**
 * Renders the SVG gradient that lucide icons reference via stroke="url(#id)".
 *
 * lucide glyphs are stroked, not filled, so background-clip (what the text
 * gradient uses) doesn't apply to them. Pointing the stroke at a real SVG
 * gradient is the equivalent, and reading the stops from the same constants
 * keeps the icons on the exact two colours as every other gradient on the page.
 *
 * Mount once per page; the id is document-wide.
 */
export function AiGradientDefs() {
  return (
    <svg width="0" height="0" aria-hidden focusable="false" className="absolute">
      <defs>
        <linearGradient id={AI_ICON_GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
      </defs>
    </svg>
  );
}

import { AI_FROM, AI_ICON_GRADIENT_ID, AI_TO, AI_VIA } from "@/lib/whatsapp-ia-data";

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
        {/*
          userSpaceOnUse, not the objectBoundingBox default. Several lucide
          glyphs are built from <line> elements and M..h.01 dots, whose
          bounding boxes have zero width or height — a bounding-box gradient
          is undefined there, so those parts silently vanish and only the
          outer shape survives (Calculator rendered as a bare rectangle).
          Mapping the ramp to lucide's fixed 24x24 viewBox avoids that, which is
          why this keeps user-space coordinates rather than 0%/100% — those are
          bounding-box units and would bring the bug straight back.

          Axis is horizontal (y1 == y2) to match AI_GRADIENT and
          AI_GRADIENT_TEXT, both bg-gradient-to-r.
        */}
        <linearGradient
          id={AI_ICON_GRADIENT_ID}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="24"
          y2="0"
        >
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="50%" stopColor={AI_VIA} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
      </defs>
    </svg>
  );
}

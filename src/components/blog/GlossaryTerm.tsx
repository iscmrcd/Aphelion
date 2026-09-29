import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { GLOSSARY } from "@/lib/glossary";

/**
 * A term inside an article that explains itself in a bubble, so a reader who
 * does not know the word learns it without leaving the page.
 *
 * Desktop: opens on hover or keyboard focus (CSS). Touch: opens on tap and
 * closes on a tap elsewhere or Escape. The bubble is rendered in the HTML from
 * the start (only visually hidden), so the definition and the "Leer más" link
 * are visible to search engines, and the page needs no portal or library.
 */
export function GlossaryTerm({ label, k, lang }: { label: string; k: string; lang: "en" | "es" }) {
  const entry = GLOSSARY[k];
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);
  const [below, setBelow] = useState(false);
  const wrap = useRef<HTMLSpanElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const id = useId();

  // Keep the bubble inside the viewport: slide it sideways near the edges and
  // flip it under the term when there is no room above (sticky header).
  const place = useCallback(() => {
    const w = wrap.current;
    const b = bubble.current;
    if (!w || !b) return;
    const r = w.getBoundingClientRect();
    const bw = b.offsetWidth;
    const vw = document.documentElement.clientWidth;
    const margin = 12;
    const left = r.left + r.width / 2 - bw / 2;
    let dx = 0;
    if (left < margin) dx = margin - left;
    else if (left + bw > vw - margin) dx = vw - margin - (left + bw);
    setShift(dx);
    setBelow(r.top - b.offsetHeight < 90);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!entry) return <>{label}</>;

  const term = lang === "es" ? entry.term : entry.termEn;
  const def = lang === "es" ? entry.def : entry.defEn;

  return (
    <span ref={wrap} className="group relative inline" onMouseEnter={place} onFocus={place}>
      <button
        type="button"
        aria-expanded={open}
        aria-describedby={id}
        onClick={() => {
          place();
          setOpen((o) => !o);
        }}
        className="inline cursor-help bg-transparent p-0 text-left align-baseline text-neutral-950 underline decoration-neutral-400 decoration-dotted decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-neutral-950 dark:decoration-neutral-500 dark:hover:decoration-neutral-200"
      >
        {label}
      </button>
      <span
        ref={bubble}
        id={id}
        role="tooltip"
        style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
        className={`absolute left-1/2 z-30 block w-72 max-w-[calc(100vw-24px)] transition-opacity duration-150 ${
          below ? "top-full pt-2" : "bottom-full pb-2"
        } ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        }`}
      >
        <span className="block rounded-xl bg-neutral-950 p-4 text-left text-sm leading-relaxed text-white shadow-xl">
          <span className="mb-1 block font-medium">{term}</span>
          <span className="block opacity-80">{def}</span>
          {entry.href && (
            <Link
              to={entry.href}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block font-medium text-white underline underline-offset-2"
            >
              {lang === "es" ? "Leer más →" : "Read more →"}
            </Link>
          )}
        </span>
      </span>
    </span>
  );
}

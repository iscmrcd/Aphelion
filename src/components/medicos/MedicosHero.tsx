import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope } from "lucide-react";
import { useT } from "@/lib/i18n";

/**
 * Medical hero with a scroll-driven reveal.
 *
 * The first mobile version was a flat near-black scrim at 0.78, which held
 * contrast and buried the photograph. The fix is not a lighter scrim over
 * everything, it is moving the contrast job to where the text actually is: the
 * copy now sits inside its own glass card that carries its own background, so
 * the veil over the rest of the image can be light.
 *
 * Numbers were measured against the brightest pixel in the photograph rather
 * than picked by eye. Veil at 0.38 in the deep clinical blue, card at 0.68 on
 * top of it: white text lands at 8.92:1 and white at 85% at 7.00:1. Both clear
 * AA with room, at the lightest point of the coat.
 *
 * The reveal lifts the veil from 0.38 to 0.12 across the first screen of
 * scrolling and eases the image up slightly. It only ever makes the image more
 * visible, never the text less readable, because the card is self-sufficient.
 * Visitors who ask for reduced motion get the revealed state immediately and
 * no listener is attached.
 */
const VEIL_START = 0.38;
const VEIL_END = 0.12;
const TINT = "10, 32, 44"; // deep clinical blue, not black

export function MedicosHero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const raf = useRef<number | null>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    const onScroll = () => {
      if (raf.current !== null) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        const el = ref.current;
        if (!el) return;
        const h = el.offsetHeight || 1;
        // 0 at rest, 1 once the hero has scrolled by one of its own heights.
        setP(Math.min(1, Math.max(0, window.scrollY / h)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  const veil = VEIL_START + (VEIL_END - VEIL_START) * p;
  /*
   * The chip and the WhatsApp button sit on the veil rather than inside the
   * card, so lifting the veil would have taken them with it. Measured, the
   * WhatsApp button fell to 3.44:1 at full reveal. Their own backgrounds now
   * darken as the veil lightens, which keeps both above AA across the whole
   * animation instead of only at rest.
   */
  const chipAlpha = 0.55 + 0.17 * p; // 0.55 -> 0.72
  const waAlpha = 0.45 + 0.27 * p; // 0.45 -> 0.72

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#08141A" }} />

      <picture>
        <source media="(max-width: 767px)" srcSet="/img/bata-aphelion-sm.webp" />
        <img
          src="/img/bata-aphelion.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[68%_top] transition-transform duration-700 ease-out md:inset-y-0 md:right-0 md:left-auto md:h-full md:w-auto md:object-right"
          style={{ transform: `scale(${1.06 - 0.06 * p})` }}
        />
      </picture>

      {/* Mobile: light blue veil that lifts as you scroll. */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{ backgroundColor: `rgba(${TINT}, ${veil})` }}
      />
      {/* Desktop: directional, so the coat stays visible on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background: `linear-gradient(100deg, #08141A 0%, #08141A 46%, rgba(${TINT},0.83) 62%, rgba(${TINT},0.30) 80%, rgba(${TINT},0) 100%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-[0.08em] text-white uppercase backdrop-blur-md"
            style={{
              borderColor: "rgba(255,255,255,0.24)",
              backgroundColor: `rgba(${TINT}, ${chipAlpha})`,
            }}
          >
            <Stethoscope className="h-3.5 w-3.5" />
            {t("Doctors and clinics", "Médicos y clínicas")}
          </span>

          {/*
            Heading and paragraph share one glass card on mobile. That card is
            what guarantees contrast, which is what lets the veil behind it be
            light enough to actually see the coat.
          */}
          <div
            className="mt-6 rounded-3xl border p-5 backdrop-blur-xl sm:p-7 md:border-transparent md:bg-transparent md:p-0 md:backdrop-blur-none"
            style={{
              borderColor: "rgba(255,255,255,0.14)",
              backgroundColor: `rgba(${TINT}, 0.68)`,
            }}
          >
            <h1 className="text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl">
              {t(
                "Doctoralia can help patients find you. It should not be where you build your practice.",
                "Doctoralia puede ayudarte a que te encuentren. No debería ser donde construyes tu consultorio.",
              )}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              {t(
                "We register our own clients on Doctoralia, and we would tell you to take the free profile. The problem is not being there. The problem is that being there is all you have.",
                "Nosotros damos de alta a nuestros clientes en Doctoralia, y te diríamos que tomes el perfil gratuito. El problema no es estar ahí. El problema es que estar ahí sea todo lo que tienes.",
              )}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/recursos/diagnostico/$industria"
              params={{ industria: "clinicas" }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              style={{ backgroundImage: "linear-gradient(120deg, #2A7488 0%, #12414F 100%)" }}
            >
              {t("Diagnose your practice, 2 min", "Diagnostica tu consultorio, 2 min")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://wa.me/526461293352?text=Hola%20Aphelion%2C%20soy%20de%20una%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:border-white"
              style={{
                borderColor: "rgba(255,255,255,0.30)",
                backgroundColor: `rgba(${TINT}, ${waAlpha})`,
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

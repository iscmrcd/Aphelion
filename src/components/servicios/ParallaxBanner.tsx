import { useEffect, useRef, type ReactNode } from "react";

type ParallaxBannerProps = {
  /** Background image URL. */
  image: string;
  children?: ReactNode;
  className?: string;
};

const SCALE = 1.18;
const STRENGTH = 0.18; // fraction of section height applied as max parallax shift

/**
 * Single-image hero with a scroll-linked parallax shift.
 *
 * Uses a continuous rAF loop (gated by IntersectionObserver so it's paused
 * while off-screen) rather than a `scroll` event listener. Event-driven
 * parallax can silently no-op in some desktop/preview contexts where the
 * page scrolls inside a nested container instead of `window` — sampling
 * getBoundingClientRect() every frame sidesteps that entirely and just
 * tracks wherever the section actually is on screen.
 */
export function ParallaxBanner({ image, children, className = "" }: ParallaxBannerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    if (reduceMotion) {
      layer.style.transform = `scale(${SCALE})`;
      return;
    }

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const shift = progress * rect.height * STRENGTH;
      layer.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${SCALE})`;
      if (visibleRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(tick);
    };
    const stopLoop = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    // Paint one frame immediately so the shift is correct even before the
    // observer fires (matches server-rendered scale so there's no flash).
    tick();
    stopLoop();

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(section);

    return () => {
      io.disconnect();
      stopLoop();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`on-dark relative flex min-h-[420px] items-center overflow-hidden bg-neutral-950 px-5 pt-24 pb-16 sm:min-h-[520px] sm:pt-32 sm:pb-20 ${className}`}
    >
      <div
        ref={layerRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90 will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${SCALE})`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/30 to-neutral-950"
      />
      <div className="relative w-full">{children}</div>
    </section>
  );
}

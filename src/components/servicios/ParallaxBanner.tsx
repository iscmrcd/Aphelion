import { useEffect, useRef, type ReactNode } from "react";

type ParallaxBannerProps = {
  /** Background image URL. */
  image: string;
  children?: ReactNode;
  className?: string;
};

const SCALE = 1.18;
const STRENGTH = 0.18; // fraction of scroll delta applied as parallax shift

/**
 * Single-image hero with a scroll-linked parallax shift, GPU-accelerated via
 * translate3d and rAF-throttled like ScrollDrivenBanner. Falls back to a
 * static, slightly-zoomed frame for prefers-reduced-motion.
 */
export function ParallaxBanner({ image, children, className = "" }: ParallaxBannerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        const layer = layerRef.current;
        if (!section || !layer) return;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // Distance the section has scrolled through the viewport, centered
        // around 0 so the image drifts up as the section scrolls up.
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const shift = progress * rect.height * STRENGTH;
        layer.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${SCALE})`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
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

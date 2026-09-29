import { useEffect, useRef } from "react";

/** A quiet, scroll-responsive field of soft ribbons and fine points. */
export function HeroWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.parentElement;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !hero || !ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let scroll = 0;
    let target = 0;
    let lastDraw = 0;
    let visible = true;
    let dark = false;

    const colors = () => {
      const styles = getComputedStyle(hero);
      dark = document.documentElement.classList.contains("dark");
      return {
        base: styles.getPropertyValue("--hero-base").trim(),
        edge: styles.getPropertyValue("--hero-edge").trim(),
        wave: styles.getPropertyValue("--hero-wave").trim(),
        waveAlt: styles.getPropertyValue("--hero-wave-alt").trim(),
        dot: styles.getPropertyValue("--hero-dot").trim(),
      };
    };

    const render = (seconds: number) => {
      if (!width || !height) return;
      const palette = colors();
      const drift = motion.matches ? 0 : seconds * 0.095;
      const phase = scroll * 2.2 + drift;

      const background = ctx.createLinearGradient(0, 0, width, height);
      background.addColorStop(0, palette.edge);
      background.addColorStop(0.42, palette.base);
      background.addColorStop(0.7, palette.base);
      background.addColorStop(1, palette.edge);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      // Each translucent ribbon follows the same slow current, at its own depth.
      for (let layer = 0; layer < 4; layer++) {
        const yAt = (x: number) => height * (
          [-0.18, 0.18, 0.76, 1.08][layer] +
          Math.sin(x / width * 5.4 + phase + layer * 1.7) * [0.22, 0.16, 0.2, 0.13][layer] +
          Math.sin(x / width * 9.2 - phase * 0.45 + layer) * 0.035
        );
        const ribbon = ctx.createLinearGradient(0, yAt(0) - height * 0.14, 0, yAt(0) + height * 0.14);
        ribbon.addColorStop(0, palette.base);
        ribbon.addColorStop(0.5, layer % 2 ? palette.waveAlt : palette.wave);
        ribbon.addColorStop(1, palette.base);
        ctx.globalAlpha = dark ? 0.3 : 0.46;
        ctx.strokeStyle = ribbon;
        ctx.lineWidth = height * (layer % 2 ? 0.24 : 0.3);
        ctx.lineCap = "round";
        ctx.beginPath();
        for (let x = -width * 0.1; x <= width * 1.1; x += 12) {
          const y = yAt(x);
          if (x === -width * 0.1) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // The dotted weave echoes the reference, but recedes around the headline.
      const gap = width < 600 ? 9 : 10;
      ctx.fillStyle = palette.dot;
      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          const nx = x / width;
          const ny = y / height;
          const field = Math.sin(nx * 8 + ny * 7 + phase) * 0.5 + Math.sin(nx * 13 - ny * 4 - phase * 0.7) * 0.3;
          const center = Math.exp(-((nx - 0.5) ** 2 / 0.105 + (ny - 0.46) ** 2 / 0.15));
          const strength = (dark ? 0.18 : 0.17) + Math.max(0, field) * 0.25;
          ctx.globalAlpha = strength * (1 - center * 0.88);
          const radius = 0.75 + Math.max(0, field) * 0.35;
          ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        }
      }
      ctx.globalAlpha = 1;
    };

    const measure = () => {
      const rect = hero.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      render(0);
    };
    const onScroll = () => {
      target = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / Math.max(height, 1)));
    };
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible || now - lastDraw < 32) return;
      lastDraw = now;
      scroll += (target - scroll) * 0.065;
      render(now / 1000);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(hero);
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibilityObserver.observe(hero);
    const themeObserver = new MutationObserver(() => { if (dark !== document.documentElement.classList.contains("dark")) render(performance.now() / 1000); });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    measure();
    onScroll();
    if (!motion.matches) frame = requestAnimationFrame(tick);
    const onMotion = () => { cancelAnimationFrame(frame); scroll = target; render(0); if (!motion.matches) frame = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    motion.addEventListener("change", onMotion);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />;
}
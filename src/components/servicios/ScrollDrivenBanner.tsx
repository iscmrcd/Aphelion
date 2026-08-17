import { useEffect, useRef, useState, type ReactNode } from "react";

type AssetJson = { url: string };

const desktopMods = import.meta.glob<AssetJson>(
  "@/assets/banners/scroll-desktop/*.asset.json",
  { eager: true, import: "default" },
);
const mobileMods = import.meta.glob<AssetJson>(
  "@/assets/banners/scroll-mobile/*.asset.json",
  { eager: true, import: "default" },
);

const waDesktopMods = import.meta.glob<AssetJson>(
  "@/assets/banners/wa-scroll-desktop/*.asset.json",
  { eager: true, import: "default" },
);
const waMobileMods = import.meta.glob<AssetJson>(
  "@/assets/banners/wa-scroll-mobile/*.asset.json",
  { eager: true, import: "default" },
);

const toUrls = (mods: Record<string, AssetJson>) =>
  Object.keys(mods)
    .sort()
    .map((k) => mods[k].url);

const SETS = {
  websites: { desktop: toUrls(desktopMods), mobile: toUrls(mobileMods) },
  whatsapp: { desktop: toUrls(waDesktopMods), mobile: toUrls(waMobileMods) },
} as const;

export type ScrollBannerVariant = keyof typeof SETS;

export function ScrollDrivenBanner({
  children,
  variant = "websites",
  ariaLabel = "Banner",
}: {
  children?: ReactNode;
  variant?: ScrollBannerVariant;
  ariaLabel?: string;
}) {
  const pickUrls = (): string[] => {
    const set = SETS[variant];
    if (typeof window === "undefined") return set.desktop;
    return window.matchMedia("(max-width: 767px)").matches
      ? set.mobile
      : set.desktop;
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      const urls = pickUrls();
      const imgs: HTMLImageElement[] = urls.map((u) => {
        const img = new Image();
        img.src = u;
        return img;
      });
      imagesRef.current = imgs;

      // Wait for first frame to draw something asap.
      const first = imgs[0];
      if (first.complete) {
        if (!cancelled) {
          drawFrame(0);
          setReady(true);
        }
      } else {
        first.addEventListener("load", () => {
          if (!cancelled) {
            drawFrame(0);
            setReady(true);
          }
        });
      }
    };

    const drawFrame = (i: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const imgs = imagesRef.current;
      let img = imgs[i];
      if (!img) return;
      if (!img.complete || img.naturalWidth === 0) {
        // Draw the nearest already-decoded frame instead of freezing on frame 0.
        let nearest: HTMLImageElement | null = null;
        for (let d = 1; d < imgs.length; d++) {
          const a = imgs[i - d];
          const b = imgs[i + d];
          if (a && a.complete && a.naturalWidth > 0) {
            nearest = a;
            break;
          }
          if (b && b.complete && b.naturalWidth > 0) {
            nearest = b;
            break;
          }
        }
        img.addEventListener("load", () => drawFrame(i), { once: true });
        if (!nearest) return;
        img = nearest;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;
      }

      const cnvW = canvas.width;
      const cnvH = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      // cover
      const scale = Math.max(cnvW / iw, cnvH / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cnvW - dw) / 2;
      const dy = (cnvH - dh) / 2;
      ctx.clearRect(0, 0, cnvW, cnvH);
      ctx.drawImage(img, dx, dy, dw, dh);
      lastFrameRef.current = i;
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        // Advance from the very first pixel of scroll: the whole sequence plays
        // over roughly half the banner height.
        const total = Math.max(1, section.offsetHeight * 0.5);
        const progress = Math.min(1, Math.max(0, -rect.top / total));
        const frames = imagesRef.current.length;
        const idx = Math.min(frames - 1, Math.floor(progress * frames));
        if (idx !== lastFrameRef.current) drawFrame(idx);
      });
    };


    const onResize = () => {
      // Re-pick image set if breakpoint crossed.
      const urls = pickUrls();
      if (
        urls.length !== imagesRef.current.length ||
        urls[0] !== imagesRef.current[0]?.src
      ) {
        load();
      }
      drawFrame(Math.max(0, lastFrameRef.current));
      onScroll();
    };

    load();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <section
      ref={sectionRef}
      className="on-dark relative flex min-h-[460px] items-center overflow-hidden bg-neutral-950 px-5 pt-20 pb-24 sm:min-h-[620px] sm:pt-28 sm:pb-32"
      aria-label={ariaLabel}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 400ms ease" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/10 to-neutral-950"
      />
      <div className="relative w-full">{children}</div>
    </section>
  );
}


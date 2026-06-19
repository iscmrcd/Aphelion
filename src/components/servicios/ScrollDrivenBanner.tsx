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

const DESKTOP_URLS = Object.keys(desktopMods)
  .sort()
  .map((k) => desktopMods[k].url);
const MOBILE_URLS = Object.keys(mobileMods)
  .sort()
  .map((k) => mobileMods[k].url);

function pickUrls(): string[] {
  if (typeof window === "undefined") return DESKTOP_URLS;
  return window.matchMedia("(max-width: 767px)").matches
    ? MOBILE_URLS
    : DESKTOP_URLS;
}

export function ScrollDrivenBanner({ children }: { children?: ReactNode }) {
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
      const img = imagesRef.current[i];
      if (!img || !img.complete || img.naturalWidth === 0) return;
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
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / Math.max(1, total)),
        );
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950"
      style={{ height: "180vh" }}
      aria-label="Websites banner"
    >
      <div className="sticky top-0 w-full overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 400ms ease" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/10 to-neutral-950"
        />
        <div className="relative flex items-center justify-center px-5">
          {children}
        </div>
      </div>
    </section>
  );
}

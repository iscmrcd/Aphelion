import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Keep server-rendered content readable if JavaScript is unavailable.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    element.dataset.reveal = "waiting";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.reveal = "visible";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-block ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Reuses the site's gradient reveal on hover and at the centre of a touch screen. */
export function InteractiveSurface({
  children,
  className = "",
  image,
}: {
  children: ReactNode;
  className?: string;
  image?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.matchMedia("(hover: none)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        element.dataset.active = String(entry.isIntersecting);
      },
      { rootMargin: "-25% 0px -25% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`interactive-surface group relative isolate overflow-hidden ${className}`}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
      }}
    >
      {image && (
        <div
          aria-hidden="true"
          className="surface-image absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div aria-hidden="true" className="surface-spotlight pointer-events-none absolute inset-0" />
      {children}
    </div>
  );
}

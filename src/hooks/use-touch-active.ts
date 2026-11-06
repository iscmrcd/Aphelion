import { useEffect, useRef, useState } from "react";

/**
 * Touch screens have no hover, so cards that reveal a gradient on hover would
 * never show it on a phone. This marks the element active while it crosses
 * the middle band of the viewport instead, the same behaviour the website
 * tier cards already use. On devices with a mouse it never activates.
 */
export function useTouchActive<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (!window.matchMedia("(hover: none)").matches) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setActive(e.isIntersecting)),
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, active };
}

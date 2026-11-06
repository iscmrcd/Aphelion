import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AphelionLogo } from "@/components/Brand";
import { useT, useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

function ThemeToggle() {
  const t = useT();
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        dark
          ? t("Switch to day mode", "Cambiar a modo día")
          : t("Switch to night mode", "Cambiar a modo noche")
      }
      aria-pressed={dark}
      title={dark ? t("Day", "Día") : t("Night", "Noche")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-950 transition hover:bg-neutral-100"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-full border border-neutral-300 p-0.5 text-[11px] font-medium ${
        compact ? "" : "bg-white"
      }`}
    >
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-label={l === "en" ? "Switch to English" : "Cambiar a español"}
          aria-pressed={lang === l}
          className={`rounded-full px-2 py-0.5 uppercase tracking-[0.08em] transition ${
            lang === l ? "bg-neutral-950 text-white" : "text-neutral-500 hover:text-neutral-950"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/servicios", label: t("Services", "Servicios") },
    { to: "/trabajo", label: t("Work", "Trabajo") },
    { to: "/precios", label: t("Pricing", "Precios") },
    { to: "/recursos/diagnostico", label: t("Free diagnostic", "Diagnóstico gratis") },
    { to: "/blog", label: "Blog" },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-neutral-200 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-neutral-50/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" aria-label="Aphelion" className="inline-flex items-center">
          <AphelionLogo className="h-6 w-auto" />
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6"
          aria-label={t("Main navigation", "Navegación principal")}
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-neutral-950" }}
              className="text-sm text-neutral-500 transition hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LangSwitch />

          <Link
            to="/contacto"
            className="hidden rounded-full bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800 sm:inline-flex"
          >
            {t("Let's talk", "Hablemos")}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("Close menu", "Cerrar menú") : t("Open menu", "Abrir menú")}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-950 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav
            id="mobile-navigation"
            className="mx-auto flex max-w-6xl flex-col px-5 py-2"
            aria-label={t("Mobile navigation", "Navegación móvil")}
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-100 py-3 text-sm text-neutral-700 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="my-3 rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-medium text-white"
            >
              {t("Let's talk about your project", "Hablemos de tu proyecto")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

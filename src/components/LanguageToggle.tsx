import { useLang } from "@/lib/i18n";

/** Minimal EN/ES switch. Fixed bottom-left so it never fights the WhatsApp FAB. */
export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center rounded-full border border-neutral-300 bg-white/90 p-0.5 text-[11px] font-medium shadow-sm backdrop-blur">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={l === "en" ? "Switch to English" : "Cambiar a español"}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-[0.08em] transition ${
            lang === l
              ? "bg-neutral-950 text-white"
              : "text-neutral-500 hover:text-neutral-950"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

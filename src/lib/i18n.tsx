import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

export const DEFAULT_LANG: Lang = "en";
const STORAGE_KEY = "aphelion.lang";

/** Reads ?lang=es|en from the current URL (client only). */
function langFromUrl(): Lang | null {
  if (typeof window === "undefined") return null;
  const v = new URLSearchParams(window.location.search).get("lang");
  return v === "es" || v === "en" ? v : null;
}

function langFromStorage(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "es" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

function langFromBrowser(): Lang | null {
  if (typeof navigator === "undefined") return null;
  const list = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of list) {
    if (!raw) continue;
    const code = raw.toLowerCase();
    if (code.startsWith("es")) return "es";
    if (code.startsWith("en")) return "en";
  }
  return null;
}

/** URL param > saved choice > browser language > English. */
export function detectLang(): Lang {
  return langFromUrl() ?? langFromStorage() ?? langFromBrowser() ?? DEFAULT_LANG;
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; ready: boolean };

const LangContext = createContext<Ctx>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  ready: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  // SSR always renders the default (English) markup; detection runs after hydration.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const detected = detectLang();
    setLangState(detected);
    setReady(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "es" ? "es-MX" : "en";
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href);
    if (l === DEFAULT_LANG) url.searchParams.delete("lang");
    else url.searchParams.set("lang", l);
    window.history.replaceState({}, "", url.toString());
  }, []);

  const value = useMemo(() => ({ lang, setLang, ready }), [lang, setLang, ready]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick between an English and a Spanish value for the active language. */
export function useT() {
  const { lang } = useLang();
  return useCallback(<T,>(en: T, es: T): T => (lang === "es" ? es : en), [lang]);
}

export function pick<T>(lang: Lang, en: T, es: T): T {
  return lang === "es" ? es : en;
}

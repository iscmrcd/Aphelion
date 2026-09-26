import type { Lang } from "@/lib/i18n";

/**
 * Internal links carry ?lang explicitly. Without it, a visitor who arrived on
 * ?lang=es with a phone set to English is switched to English on the next page.
 */
export const langSearch = (lang: Lang) => ({
  lang: lang === "es" ? ("es" as const) : undefined,
});

/** Set by the selector so a diagnostic started from it is counted as such. */
export const ENTRY_KEY = "aphelion.diag.entry";

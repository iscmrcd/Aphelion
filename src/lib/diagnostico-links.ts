import type { Lang } from "@/lib/i18n";

/**
 * Internal links carry ?lang explicitly. Spanish is the default, so only
 * English needs the parameter; without it an English visitor would land on
 * the Spanish version of the next page.
 */
export const langSearch = (lang: Lang) => ({
  lang: lang === "en" ? ("en" as const) : undefined,
});

/** Set by the selector so a diagnostic started from it is counted as such. */
export const ENTRY_KEY = "aphelion.diag.entry";

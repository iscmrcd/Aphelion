/** No-banner route: unresolved/consent-required regions cannot load Meta. */
export const META_HOSTS = ["aphelion.mx", "www.aphelion.mx"] as const;
const CONSENT_REGIONS = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
]);

export function isMetaHost(hostname: string): boolean {
  return META_HOSTS.some((host) => host === hostname.toLowerCase());
}

export function regionAllowsMeta(trace: string, hostname: string): boolean {
  const fields = Object.fromEntries(trace.split("\n").map((line) => line.split("=")));
  return fields.h?.toLowerCase() === hostname.toLowerCase()
    && /^[A-Z]{2}$/.test(fields.loc ?? "")
    && fields.loc !== "XX" && fields.loc !== "T1"
    && !CONSENT_REGIONS.has(fields.loc);
}

export function hasAdvertisingOptOut(): boolean {
  try {
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
    if (nav.globalPrivacyControl || nav.doNotTrack === "1") return true;
    const saved = localStorage.getItem("cookie_consent");
    if (saved === "false" || saved === "denied" || saved === "rejected") return true;
    if (saved) {
      const choice = JSON.parse(saved);
      if (choice === false || choice?.advertising === false || choice?.marketing === false) return true;
    }
    return false;
  } catch {
    return true;
  }
}
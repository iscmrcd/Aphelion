import { useMemo } from "react";
import { useLang } from "./i18n";

import { MARKETING_PACKAGES, MARKETING_REPLACES, FAQ_MARKETING } from "./marketing-data";
import {
  MARKETING_PACKAGES_EN,
  MARKETING_REPLACES_EN,
  FAQ_MARKETING_EN,
} from "./marketing-data.en";
import {
  WEB_LEVELS,
  COMPARE_HEADERS,
  COMPARE_GROUPS,
  FAQ_WEB,
  OTHER_CATEGORIES,
} from "./websites-data";
import {
  WEB_LEVELS_EN,
  COMPARE_HEADERS_EN,
  COMPARE_GROUPS_EN,
  FAQ_WEB_EN,
  OTHER_CATEGORIES_EN,
} from "./websites-data.en";
import { DRONE_PACKAGES, DRONE_EXTRAS, DRONE_ZONES, DRONE_POLICY } from "./dron-data";
import {
  DRONE_PACKAGES_EN,
  DRONE_EXTRAS_EN,
  DRONE_ZONES_EN,
  DRONE_POLICY_EN,
} from "./dron-data.en";

/** Language-aware marketing content. */
export function useMarketingData() {
  const { lang } = useLang();
  return useMemo(
    () =>
      lang === "es"
        ? {
            MARKETING_PACKAGES,
            MARKETING_REPLACES,
            FAQ_MARKETING,
          }
        : {
            MARKETING_PACKAGES: MARKETING_PACKAGES_EN,
            MARKETING_REPLACES: MARKETING_REPLACES_EN,
            FAQ_MARKETING: FAQ_MARKETING_EN,
          },
    [lang],
  );
}

/** Language-aware websites content. */
export function useWebsitesData() {
  const { lang } = useLang();
  return useMemo(
    () =>
      lang === "es"
        ? { WEB_LEVELS, COMPARE_HEADERS, COMPARE_GROUPS, FAQ_WEB, OTHER_CATEGORIES }
        : {
            WEB_LEVELS: WEB_LEVELS_EN,
            COMPARE_HEADERS: COMPARE_HEADERS_EN,
            COMPARE_GROUPS: COMPARE_GROUPS_EN,
            FAQ_WEB: FAQ_WEB_EN,
            OTHER_CATEGORIES: OTHER_CATEGORIES_EN,
          },
    [lang],
  );
}

/** Language-aware drone services content. */
export function useDroneData() {
  const { lang } = useLang();
  return useMemo(
    () =>
      lang === "es"
        ? { DRONE_PACKAGES, DRONE_EXTRAS, DRONE_ZONES, DRONE_POLICY }
        : {
            DRONE_PACKAGES: DRONE_PACKAGES_EN,
            DRONE_EXTRAS: DRONE_EXTRAS_EN,
            DRONE_ZONES: DRONE_ZONES_EN,
            DRONE_POLICY: DRONE_POLICY_EN,
          },
    [lang],
  );
}

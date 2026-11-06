import { useT } from "@/lib/i18n";

/**
 * Client names as plain wordmarks until the real logo files are in. Only list
 * clients who agreed to be shown; remove any name that has not.
 */
export const CLIENTS = [
  "Velport Shipyard",
  "HAIMA Banco de Sangre",
  "Primitivo",
  "CANACO Ensenada",
  "Transportes HARF",
  "Bluesea",
  "Buena Mano",
];

export function ClientsStrip() {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 px-5 py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:gap-10">
        <p className="shrink-0 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {t("They trust us", "Confían en nosotros")}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-start">
          {CLIENTS.map((c) => (
            <li
              key={c}
              className="text-base font-medium tracking-[-0.01em] text-neutral-400 transition hover:text-neutral-950 sm:text-lg"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

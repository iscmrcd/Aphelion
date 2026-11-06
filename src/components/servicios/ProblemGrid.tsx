import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export type ProblemItem = { problem: string; solution: string };

/**
 * Opens a service page with the client's problem instead of our package
 * structure: each card states the pain in their words, then what we do.
 */
export function ProblemGrid({
  items,
  eyebrow,
  title,
}: {
  items: ProblemItem[];
  eyebrow?: string;
  title: string;
}) {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {eyebrow ?? t("What it solves", "Lo que resuelve")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {items.map((it) => (
            <div
              key={it.problem}
              className="group flex flex-col rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-950 sm:p-7"
            >
              <p className="text-lg font-medium leading-snug tracking-[-0.01em] text-neutral-950">
                “{it.problem}”
              </p>
              <div className="mt-6 flex items-start gap-3 border-t border-dashed border-neutral-300 pt-5">
                <ArrowRight
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-950"
                  strokeWidth={2}
                />
                <p className="text-sm leading-relaxed text-neutral-500">{it.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

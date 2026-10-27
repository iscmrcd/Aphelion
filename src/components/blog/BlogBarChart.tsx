import type { BlogChart } from "@/lib/blog-data";

/**
 * Horizontal bar chart for blog articles. Plain HTML and CSS, so it renders on
 * the server, needs no chart library and reads correctly without JavaScript:
 * every bar carries its label and value as text, which is also what screen
 * readers announce.
 */
export function BlogBarChart({ chart, lang }: { chart: BlogChart; lang: "en" | "es" }) {
  const es = lang === "es";
  const max = Math.max(...chart.bars.map((b) => b.value), 0) || 1;

  return (
    <figure className="mt-8 rounded-3xl border border-neutral-200 bg-white p-5 sm:p-7">
      <figcaption className="text-sm font-medium text-neutral-950 sm:text-base">
        {es ? chart.titleEs : chart.title}
      </figcaption>
      <ul className="mt-5 space-y-4">
        {chart.bars.map((b) => {
          const label = es ? b.labelEs : b.label;
          const shown = es ? b.displayEs : b.display;
          return (
            <li key={b.label}>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="text-neutral-700">{label}</span>
                <span className="shrink-0 font-medium tabular-nums text-neutral-950">{shown}</span>
              </div>
              <div
                className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-neutral-100"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-neutral-950"
                  style={{ width: `${Math.max((b.value / max) * 100, 1.5)}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500">
        {es ? "Fuente: " : "Source: "}
        {es ? chart.sourceEs : chart.source}
      </p>
    </figure>
  );
}

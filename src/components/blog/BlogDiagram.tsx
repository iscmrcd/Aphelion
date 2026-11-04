import type { BlogDiagram } from "@/lib/blog-data";

/**
 * Schematics for blog articles: funnels, numbered flows and comparison tables.
 * Plain HTML and CSS so they render on the server, need no image per language
 * and stay readable for search engines and screen readers.
 */
export function BlogDiagramView({ diagram, lang }: { diagram: BlogDiagram; lang: "en" | "es" }) {
  const es = lang === "es";
  const note = es ? diagram.noteEs : diagram.note;

  return (
    <figure className="mt-8 rounded-3xl border border-neutral-200 bg-white p-5 sm:p-7">
      <figcaption className="text-sm font-medium text-neutral-950 sm:text-base">
        {es ? diagram.titleEs : diagram.title}
      </figcaption>

      {diagram.kind === "funnel" && diagram.steps && (
        <ol className="mt-5 space-y-2.5">
          {diagram.steps.map((s, i) => {
            const n = diagram.steps!.length;
            const width = 100 - (i * 44) / Math.max(n - 1, 1);
            return (
              <li key={s.label} className="flex flex-col items-center text-center">
                <div
                  className="rounded-2xl px-4 py-3 text-white"
                  style={{
                    width: `${width}%`,
                    minWidth: "11rem",
                    backgroundColor: `rgb(${10 + i * 28}, ${10 + i * 28}, ${10 + i * 28})`,
                  }}
                >
                  <span className="block text-sm font-medium">{es ? s.labelEs : s.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-white/75">
                    {es ? s.detailEs : s.detail}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {diagram.kind === "flow" && diagram.steps && (
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {diagram.steps.map((s, i) => (
            <li
              key={s.label}
              className="relative rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-xs font-medium text-white">
                {i + 1}
              </span>
              <span className="mt-3 block text-sm font-medium text-neutral-950">
                {es ? s.labelEs : s.label}
              </span>
              <span className="mt-1 block text-sm leading-snug text-neutral-600">
                {es ? s.detailEs : s.detail}
              </span>
            </li>
          ))}
        </ol>
      )}

      {/* On phones a wide table becomes one card per row, so nothing is cut off. */}
      {diagram.kind === "table" && diagram.columns && diagram.rows && (
        <ul className="mt-5 space-y-3 sm:hidden">
          {diagram.rows.map((r) => (
            <li key={r.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <span className="block text-sm font-medium text-neutral-950">
                {es ? r.labelEs : r.label}
              </span>
              <dl className="mt-2 space-y-1.5">
                {r.cells.map((c, i) => {
                  const col = diagram.columns![i + 1];
                  return (
                    <div key={i}>
                      {col && (
                        <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500">
                          {es ? col.labelEs : col.label}
                        </dt>
                      )}
                      <dd className="text-sm leading-snug text-neutral-700">
                        {es ? c.textEs : c.text}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </li>
          ))}
        </ul>
      )}

      {diagram.kind === "table" && diagram.columns && diagram.rows && (
        <div className="mt-5 -mx-1 hidden overflow-x-auto sm:block">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead>
              <tr>
                {diagram.columns.map((c) => (
                  <th
                    key={c.label}
                    scope="col"
                    className="border-b border-neutral-200 px-3 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-neutral-500"
                  >
                    {es ? c.labelEs : c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diagram.rows.map((r) => (
                <tr key={r.label} className="align-top">
                  <th
                    scope="row"
                    className="border-b border-neutral-100 px-3 py-3 font-medium text-neutral-950"
                  >
                    {es ? r.labelEs : r.label}
                  </th>
                  {r.cells.map((c, i) => (
                    <td key={i} className="border-b border-neutral-100 px-3 py-3 text-neutral-700">
                      {es ? c.textEs : c.text}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {note && <p className="mt-5 text-xs leading-relaxed text-neutral-500">{note}</p>}
    </figure>
  );
}

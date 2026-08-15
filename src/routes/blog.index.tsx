import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT, useLang } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  postTitle,
  postExcerpt,
  postCategory,
  type BlogPost,
} from "@/lib/blog-data";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function matchesQuery(post: BlogPost, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  const haystack = normalize(
    [
      post.title,
      post.titleEs,
      post.excerpt,
      post.excerptEs,
      post.category,
      post.categoryEs,
      ...post.schema.keywords,
      ...post.schema.keywordsEs,
    ].join(" "),
  );
  return q
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export const Route = createFileRoute("/blog/")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/blog",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Resources — SEO, Ads & Marketing Guides | Aphelion",
        description:
          "Practical guides on SEO pricing, website costs, Google Ads, Meta Ads and real estate marketing in Mexico — written by the team that runs the campaigns.",
        ogTitle: "Resources — Aphelion",
        ogDescription:
          "SEO, Ads and marketing guides for Mexican businesses, written by the team that runs the campaigns.",
      },
      es: {
        title: "Recursos — Guías de SEO, Ads y Marketing | Aphelion",
        description:
          "Guías prácticas sobre precios de SEO, costos de páginas web, Google Ads, Meta Ads y marketing inmobiliario en México — escritas por el equipo que corre las campañas.",
        ogTitle: "Recursos — Aphelion",
        ogDescription:
          "Guías de SEO, Ads y marketing para negocios mexicanos, escritas por el equipo que corre las campañas.",
      },
      jsonLd: {
        "@type": "CollectionPage",
        name: "Aphelion Resources",
        url: `${SITE_URL}/blog`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: BLOG_POSTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        },
      },
    }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const t = useT();
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const inCategory = !activeCategory || p.category === activeCategory;
      return inCategory && matchesQuery(p, query);
    });
  }, [activeCategory, query]);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <section className="border-b border-neutral-200 px-5 pt-20 pb-14 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            {t("Resources", "Recursos")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-neutral-950">
            {t(
              "Straight answers on SEO, ads and growth.",
              "Respuestas directas sobre SEO, ads y crecimiento.",
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            {t(
              "Real prices, real mistakes, and the systems that actually move the needle — written by the team that runs the campaigns.",
              "Precios reales, errores reales y los sistemas que realmente mueven la aguja — escrito por el equipo que corre las campañas.",
            )}
          </p>

          <div className="relative mx-auto mt-10 max-w-md">
            <Search
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search articles", "Buscar en el blog")}
              aria-label={t("Search articles", "Buscar artículos")}
              className="w-full rounded-full border-[0.5px] border-neutral-300 bg-white py-2.5 pl-10 pr-10 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t("Clear search", "Borrar búsqueda")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 transition hover:text-neutral-950"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              aria-pressed={activeCategory === null}
              className={`rounded-full border-[0.5px] px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === null
                  ? "border-neutral-950 bg-neutral-950 text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
              }`}
            >
              {t("All", "Todos")}
            </button>
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveCategory(c.key)}
                aria-pressed={activeCategory === c.key}
                className={`rounded-full border-[0.5px] px-4 py-1.5 text-sm font-medium transition ${
                  activeCategory === c.key
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-300 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
                }`}
              >
                {lang === "es" ? c.es : c.en}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-neutral-200 bg-white p-3 transition hover:border-neutral-950"
              >
                <div
                  aria-hidden
                  className={`flex h-48 items-center justify-center rounded-xl bg-gradient-to-br ${post.gradient}`}
                >
                  <span className="text-sm font-medium uppercase tracking-[0.16em] text-white opacity-60">
                    {postCategory(post, lang)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border-[0.5px] border-neutral-300 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                      {postCategory(post, lang)}
                    </span>
                  </div>

                  <h2 className="text-lg font-medium leading-snug tracking-[-0.01em] text-neutral-950">
                    {postTitle(post, lang)}
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                    <span>Isaac · Aphelion</span>
                    <span aria-hidden>·</span>
                    <span>
                      {post.readingTime} {t("min read", "min de lectura")}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">
                    {postExcerpt(post, lang)}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-neutral-950">
                    {t("Read article", "Leer artículo")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-sm text-neutral-500">
              {query
                ? t(
                    "No articles match your search.",
                    "No se encontraron artículos que coincidan con tu búsqueda.",
                  )
                : t(
                    "No articles in this category yet.",
                    "Todavía no hay artículos en esta categoría.",
                  )}
            </p>
          )}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}

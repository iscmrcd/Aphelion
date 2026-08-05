import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT, useLang } from "@/lib/i18n";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD } from "@/lib/seo";
import {
  getPostBySlug,
  getRelatedPosts,
  postTitle,
  postExcerpt,
  postCategory,
  postLede,
  postAuthorRole,
  formatPostDate,
  type BlogPost,
} from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps, params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return deps;
  },
  head: ({ loaderData, params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return {};
    const lang = loaderData?.lang ?? "en";
    const url = `${SITE_URL}/blog/${post.slug}`;

    return buildHead({
      path: `/blog/${post.slug}`,
      lang,
      en: {
        title: `${post.title} | Aphelion`,
        description: post.excerpt,
        ogTitle: post.title,
        ogDescription: post.excerpt,
      },
      es: {
        title: `${post.titleEs} | Aphelion`,
        description: post.excerptEs,
        ogTitle: post.titleEs,
        ogDescription: post.excerptEs,
      },
      ogType: "article",
      jsonLd: [
        {
          "@type": "Article",
          headline: lang === "es" ? post.titleEs : post.title,
          description: lang === "es" ? post.excerptEs : post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
          keywords: (lang === "es" ? post.schema.keywordsEs : post.schema.keywords).join(", "),
          author: { "@type": "Person", name: post.author, jobTitle: post.authorRole },
          publisher: ORGANIZATION_JSONLD,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Aphelion", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            {
              "@type": "ListItem",
              position: 3,
              name: lang === "es" ? post.titleEs : post.title,
              item: url,
            },
          ],
        },
      ],
    });
  },
  component: BlogArticlePage,
  notFoundComponent: BlogArticleNotFound,
});

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-neutral-950 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function BlogArticleNotFound() {
  const t = useT();
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-5 text-neutral-950">
      <div className="max-w-md text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">404</p>
        <h1 className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
          {t("Article not found", "Artículo no encontrado")}
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          {t(
            "This article doesn't exist or has been moved.",
            "Este artículo no existe o fue movido.",
          )}
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {t("Back to Resources", "Volver a Recursos")}
        </Link>
      </div>
    </main>
  );
}

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug);
  const t = useT();
  const { lang } = useLang();

  if (!post) return null;

  const related = getRelatedPosts(slug, 2);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <ReadingProgressBar />

      <ArticleHero post={post} lang={lang} />

      <article className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ArticleByline post={post} lang={lang} />

          <div className="my-10 border-l-[3px] border-neutral-950 pl-6">
            <p className="text-lg leading-relaxed text-neutral-800 sm:text-xl">
              {postLede(post, lang)}
            </p>
          </div>

          <TableOfContents post={post} lang={lang} />

          <div className="mt-12 space-y-12">
            {post.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
                  {lang === "es" ? s.headingEs : s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {(lang === "es" ? s.bodyEs : s.body).map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-neutral-700">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <InlineCTA />
        </div>
      </article>

      {related.length > 0 && <RelatedArticles posts={related} lang={lang} />}

      <CTAFooter />
    </main>
  );
}

function ArticleHero({ post, lang }: { post: BlogPost; lang: "en" | "es" }) {
  const t = useT();
  return (
    <section className="border-b border-neutral-200 bg-neutral-50 px-5 pt-24 pb-14 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-950"
        >
          ← {t("Resources", "Recursos")}
        </Link>
        <div className="mb-5">
          <span className="rounded-full border-[0.5px] border-neutral-300 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-neutral-600">
            {postCategory(post, lang)}
          </span>
        </div>
        <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
          {postTitle(post, lang)}
        </h1>
      </div>
    </section>
  );
}

function ArticleByline({ post, lang }: { post: BlogPost; lang: "en" | "es" }) {
  const t = useT();
  return (
    <div className="flex items-center gap-3 border-b border-neutral-200 pb-8">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
        I
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-950">Isaac · {postAuthorRole(post, lang)}</p>
        <p className="text-xs text-neutral-500">
          {t("Updated", "Actualizado")} {formatPostDate(post.date, lang)} · {post.readingTime}{" "}
          {t("min read", "min de lectura")}
        </p>
      </div>
    </div>
  );
}

function TableOfContents({ post, lang }: { post: BlogPost; lang: "en" | "es" }) {
  const t = useT();
  return (
    <nav
      aria-label={t("Table of contents", "Tabla de contenido")}
      className="rounded-2xl border-[0.5px] border-neutral-200 bg-white p-6"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
        {t("In this article", "En este artículo")}
      </p>
      <ol className="space-y-2">
        {post.sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="flex items-start gap-2 text-sm text-neutral-600 transition hover:text-neutral-950"
            >
              <span className="text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
              <span>{lang === "es" ? s.headingEs : s.heading}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function InlineCTA() {
  const t = useT();
  return (
    <div className="on-dark mt-16 rounded-3xl bg-neutral-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
      <h3 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
        {t(
          "Want this handled instead of researched?",
          "¿Prefieres que lo resolvamos en vez de investigarlo?",
        )}
      </h3>
      <p className="mx-auto mt-4 max-w-md text-sm text-white/60 sm:text-base">
        {t(
          "Tell us what you're working with. We reply within 24 hours.",
          "Cuéntanos qué tienes en mente. Te respondemos en menos de 24 horas.",
        )}
      </p>
      <Link
        to="/contacto"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
      >
        {t("Book a call", "Agendar llamada")}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function RelatedArticles({ posts, lang }: { posts: BlogPost[]; lang: "en" | "es" }) {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {t("Related articles", "Artículos relacionados")}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-neutral-200 bg-white transition hover:border-neutral-950"
            >
              <div
                aria-hidden
                className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-50" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 w-fit rounded-full border-[0.5px] border-neutral-300 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                  {postCategory(post, lang)}
                </span>
                <h3 className="text-base font-medium leading-snug tracking-[-0.01em] text-neutral-950">
                  {postTitle(post, lang)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
                  {postExcerpt(post, lang)}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-neutral-950">
                  {t("Read article", "Leer artículo")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

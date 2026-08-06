import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useT, type Lang } from "@/lib/i18n";
import { BLOG_POSTS, postTitle, postExcerpt, postCategory, type BlogPost } from "@/lib/blog-data";

type BlogTeaserSectionProps = {
  /** Post categories (English key, matches BlogPost.category) to pull from. */
  categories: string[];
  /**
   * Optional pre-selected posts (e.g. from getRelatedPosts) that bypass the
   * categories filter entirely. Use this when a page already has its own
   * selection logic and just needs the shared card grid.
   */
  posts?: BlogPost[];
  /** Number of posts to show. Defaults to 2. */
  count?: number;
  /** Section label, English. Has brand-safe copy if omitted. */
  title?: string;
  /** Section label, Spanish. Has brand-safe copy if omitted. */
  titleEs?: string;
  lang: Lang;
};

/**
 * Reusable teaser grid that surfaces recent blog posts matching one or more
 * categories (or a pre-selected list). Used at the end of blog articles
 * (related reading) and on service pages (as an internal-linking +
 * trust-signal block before the CTA).
 *
 * Renders nothing if no posts match — safe to drop into any page.
 */
export function BlogTeaserSection({
  categories,
  posts,
  count = 2,
  title = "What we know",
  titleEs = "Lo que sabemos",
  lang,
}: BlogTeaserSectionProps) {
  const t = useT();

  // Matches against both the English and Spanish category labels, so callers
  // can pass either ("Paid Ads" or "Publicidad") without silently matching nothing.
  const selected = posts
    ? posts.slice(0, count)
    : BLOG_POSTS.filter((p) => categories.includes(p.category) || categories.includes(p.categoryEs))
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
        .slice(0, count);

  if (selected.length === 0) return null;

  return (
    <section className="border-t border-neutral-200 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {lang === "es" ? titleEs : title}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {selected.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-neutral-200 bg-white transition hover:border-neutral-950"
            >
              <div
                aria-hidden
                className={`m-3 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${post.gradient}`}
              >
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white opacity-60">
                  {postCategory(post, lang)}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6">
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

/**
 * Regenerates public/sitemap.xml from the real routes and BLOG_POSTS.
 *
 * The sitemap used to be maintained by hand and drifted badly: it listed 30
 * URLs while the site had 63 posts and two unlisted service pages, with a
 * lastmod frozen weeks in the past. Anything added here is derived, so it
 * cannot fall out of sync again.
 *
 * Run: npm run sitemap  (also runs automatically on prebuild)
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://aphelion.mx";

/** Pull slug + date straight out of the blog data module without importing TS. */
function readPosts() {
  const src = readFileSync(join(root, "src/lib/blog-data.ts"), "utf8");
  const slugs = [...src.matchAll(/^ {4}slug: "([^"]+)"/gm)].map((m) => m[1]);
  const dates = [...src.matchAll(/^ {4}date: "([^"]+)"/gm)].map((m) => m[1]);
  if (slugs.length !== dates.length) {
    throw new Error(`slug/date mismatch: ${slugs.length} slugs vs ${dates.length} dates`);
  }
  return slugs.map((slug, i) => ({ slug, date: dates[i] }));
}

/** Diagnostic verticals, so the dynamic route emits one URL per industry. */
function readVerticales() {
  const src = readFileSync(join(root, "src/lib/diagnostico-data.ts"), "utf8");
  return [...src.matchAll(/^ {2}slug: "([^"]+)",$/gm)].map((m) => m[1]);
}

/** Every file route that should be indexed, derived from src/routes. */
function readRoutes() {
  const skip = new Set([
    "__root",
    "blog.$slug", // emitted per post below
    "blog.index",
    "servicios", // layout wrapper
    "servicios.whatsapp-ia", // 301 redirect stub, must stay out of the sitemap
    "privacidad",
    "recursos.diagnostico.$industria", // emitted per vertical below
  ]);
  return readdirSync(join(root, "src/routes"))
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => f.replace(/\.tsx$/, ""))
    .filter((n) => !skip.has(n))
    .map((n) =>
      n === "index"
        ? "/"
        : "/" +
          n
            .replace(/\.index$/, "")
            .split(".")
            .join("/"),
    )
    .sort();
}

const today = new Date().toISOString().slice(0, 10);

function entry(path, { priority, lastmod, changefreq }) {
  const base = `${SITE_URL}${path === "/" ? "/" : path}`;
  return `  <url>
    <loc>${base}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${base}" />
    <xhtml:link rel="alternate" hreflang="es-MX" href="${base}?lang=es" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${base}" />
    <lastmod>${lastmod}</lastmod>${changefreq ? `\n    <changefreq>${changefreq}</changefreq>` : ""}
    <priority>${priority}</priority>
  </url>`;
}

const posts = readPosts();
const routes = readRoutes();
const verticales = readVerticales();

/**
 * Internal links written as data (diagnostic gap hrefs, article inline links)
 * are typed as plain strings, so TypeScript cannot catch a wrong path. One
 * shipped broken before this check existed. Validate them here and fail the
 * build instead of discovering it in production.
 */
function validateInternalLinks() {
  const slugs = new Set(posts.map((p) => p.slug));
  const routeSet = new Set(routes);
  const files = ["src/lib/diagnostico-data.ts", "src/lib/blog-data.ts", "src/lib/local-data.ts"];
  const broken = [];
  for (const f of files) {
    let src;
    try {
      src = readFileSync(join(root, f), "utf8");
    } catch {
      continue;
    }
    const hrefs = [
      ...[...src.matchAll(/href: "(\/[^"]*)"/g)].map((m) => m[1]),
      ...[...src.matchAll(/\]\((\/[a-z0-9/-]+)\)/g)].map((m) => m[1]),
      ...[...src.matchAll(/parentPath: "(\/[^"]*)"/g)].map((m) => m[1]),
    ];
    for (const h of new Set(hrefs)) {
      const ok = h.startsWith("/blog/")
        ? slugs.has(h.slice("/blog/".length))
        : routeSet.has(h) || h === "/blog" || h === "/";
      if (!ok) broken.push(`${f}: ${h}`);
    }
  }
  if (broken.length) {
    console.error("Broken internal links:\n  " + broken.join("\n  "));
    process.exit(1);
  }
  console.log(`internal links: all resolve`);
}

validateInternalLinks();

// Local city pages outrank generic service pages for the queries that convert,
// so they carry the highest priority after the homepage.
const isLocal = (p) => /-tijuana$|-ensenada$|tijuana$/.test(p);

const urls = [
  entry("/", { priority: "1.0", lastmod: today, changefreq: "weekly" }),
  ...routes
    .filter((p) => p !== "/")
    .map((p) =>
      entry(p, {
        priority: isLocal(p) ? "0.9" : "0.8",
        lastmod: today,
        changefreq: "monthly",
      }),
    ),
  entry("/blog", { priority: "0.8", lastmod: today, changefreq: "weekly" }),
  ...verticales.map((v) =>
    entry(`/recursos/diagnostico/${v}`, {
      priority: "0.8",
      lastmod: today,
      changefreq: "monthly",
    }),
  ),
  ...posts.map((p) =>
    entry(`/blog/${p.slug}`, { priority: "0.7", lastmod: p.date, changefreq: "monthly" }),
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(
  `sitemap.xml: ${urls.length} URLs (${routes.length} routes + ${verticales.length} diagnostics + ${posts.length} posts)`,
);

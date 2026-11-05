import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  retainSearchParams,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AphelionChatWidget } from "@/components/AphelionChatWidget";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { validateLangSearch } from "@/lib/seo";
import { captureAttribution } from "@/lib/attribution";
import { initializeMetaPixel, installContactTracking } from "@/lib/pixel";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  validateSearch: validateLangSearch,
  // Every internal <Link> keeps ?lang. Without this a Spanish visitor clicking
  // a related article landed on /blog/x with no lang, LangProvider re-synced
  // the URL with a second navigation, and that one (resetScroll: false)
  // cancelled the scroll to top: the new article opened at the bottom.
  // Switching language still works: syncUrl sets lang explicitly.
  search: { middlewares: [retainSearchParams(["lang"])] },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "author", content: "Aphelion" },
      { property: "og:site_name", content: "Aphelion" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32 48x48" },
      { rel: "icon", type: "image/png", href: "/favicon-256.png", sizes: "256x256" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  /*
   * Read straight from the router rather than from the provider: this element
   * is outside LangProvider, and lang="en" on a Spanish page is the single
   * strongest signal telling a search engine to file it as English.
   */
  const urlLang = useRouterState({ select: (s) => s.location.search?.lang });

  return (
    <html lang={urlLang === "es" ? "es-MX" : "en"}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // Known on the server, so the first paint is already in the right language.
  const { lang } = Route.useSearch();

  // First touch, before the first client-side navigation drops utm_* from the
  // URL. No PageView here: the Pixel already fires one on history changes.
  useEffect(() => {
    captureAttribution();
    void initializeMetaPixel();
    return installContactTracking();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LangProvider initialLang={lang}>
          <div className="flex min-h-screen flex-col bg-neutral-50">
            <SiteHeader />
            <div className="flex-1">
              {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
              <Outlet />
            </div>
            <SiteFooter />
          </div>
          <AphelionChatWidget />
        </LangProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

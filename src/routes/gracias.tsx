import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { buildHead, validateLangSearch } from "@/lib/seo";

export const Route = createFileRoute("/gracias")({
  validateSearch: validateLangSearch,
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const head = buildHead({
      path: "/gracias",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Thank you for contacting us | Aphelion",
        description: "We have your message. The Aphelion team will reply within 24 hours.",
      },
      es: {
        title: "Gracias por contactarnos | Aphelion",
        description:
          "Ya tenemos tu mensaje. El equipo de Aphelion te responderá en menos de 24 horas.",
      },
    });
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex, follow" }] };
  },
  component: GraciasPage,
});

// Lead belongs to the successful server response in /contacto. Visiting or
// refreshing this page must never create a conversion.
function GraciasPage() {
  const t = useT();
  const { lang } = useLang();
  const whatsapp =
    "https://wa.me/526461293352?text=" +
    encodeURIComponent(
      t(
        "Hi Aphelion, I just sent a request through your website.",
        "Hola Aphelion, acabo de enviar una solicitud desde su página web.",
      ),
    );

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-5 py-20 text-neutral-950 sm:py-28">
      <section className="w-full max-w-2xl rounded-3xl border border-neutral-200 bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white">
          <Check className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {t("Message received", "Mensaje recibido")}
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
          {t("Thank you for reaching out.", "Gracias por escribirnos.")}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-neutral-500">
          {t(
            "We have your message. Our team will review your request and reply within 24 hours.",
            "Ya tenemos tu mensaje. Nuestro equipo revisará tu solicitud y te responderá en menos de 24 horas.",
          )}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t("Continue on WhatsApp", "Seguir por WhatsApp")}
          </a>
          <Link
            to="/"
            search={{ lang }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-neutral-950 sm:w-auto"
          >
            {t("Back to home", "Volver al inicio")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

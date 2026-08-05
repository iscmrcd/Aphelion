import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/contacto",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Contact Aphelion — Start Your Project",
        description:
          "Tell us about your project. Websites, marketing, content, video, branding or custom SaaS — we reply within 24 hours.",
        ogTitle: "Contact — Aphelion",
        ogDescription: "Tell us about your project. We reply within 24 hours.",
      },
      es: {
        title: "Contacto — Inicia tu proyecto con Aphelion",
        description:
          "Cuéntanos tu proyecto. Websites, marketing, contenido, video, branding o SaaS personalizado — te respondemos en menos de 24 horas.",
        ogTitle: "Contacto — Aphelion",
        ogDescription: "Cuéntanos tu proyecto. Te respondemos en menos de 24 horas.",
      },
      jsonLd: {
        "@type": "ContactPage",
        name: "Contact Aphelion",
        url: `${SITE_URL}/contacto`,
      },
    }),
  component: ContactoPage,
});

function ContactoPage() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [service, setService] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const SERVICES = [
    t("Websites", "Websites"),
    t("Digital Marketing", "Marketing Digital"),
    t("Social Media Content", "Contenido para Redes"),
    t("Commercial & Drone Video", "Video Comercial & Drone"),
    t("Branding", "Branding"),
    t("Custom SaaS", "SaaS Personalizado"),
    t("Not sure yet", "Aún no estoy seguro"),
  ];

  const BUDGETS = [
    t("Less than $20,000 MXN", "Menos de $20,000 MXN"),
    t("$20,000 – $50,000 MXN", "$20,000 – $50,000 MXN"),
    t("$50,000 – $150,000 MXN", "$50,000 – $150,000 MXN"),
    t("More than $150,000 MXN", "Más de $150,000 MXN"),
    t("Monthly / recurring contract", "Mensualidad / contrato recurrente"),
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = t(
      [
        `Hi, I'm ${data.get("name")}.`,
        `Company: ${data.get("company") || "—"}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "—"}`,
        `Service: ${service || "—"}`,
        `Budget: ${budget || "—"}`,
        "",
        `${data.get("message")}`,
      ],
      [
        `Hola, soy ${data.get("name")}.`,
        `Empresa: ${data.get("company") || "—"}`,
        `Email: ${data.get("email")}`,
        `Teléfono: ${data.get("phone") || "—"}`,
        `Servicio: ${service || "—"}`,
        `Presupuesto: ${budget || "—"}`,
        "",
        `${data.get("message")}`,
      ],
    ).join("\n");
    const url = `https://wa.me/526461293352?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Contact", "Contacto")}
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              {t("Tell us what's on your mind.", "Cuéntanos qué tienes en mente.")}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500">
              {t(
                "We reply within 24 hours. If your project fits, we'll set up a free 30-minute call to understand scope, timelines and budget.",
                "Respondemos en menos de 24 horas. Si tu proyecto encaja, agendamos una llamada de 30 minutos sin compromiso para entender alcance, tiempos y presupuesto.",
              )}
            </p>

            <div className="mt-10 space-y-4 border-t border-neutral-200 pt-8">
              <Item
                label={t("Email", "Email")}
                value="hola@aphelion.mx"
                href="mailto:hola@aphelion.mx"
              />
              <Item
                label="WhatsApp"
                value={t("Message us directly", "Escríbenos directo")}
                href="https://wa.me/526461293352"
              />
              <Item
                label={t("Location", "Ubicación")}
                value={t(
                  "Ensenada · Valle de Guadalupe · Mexico",
                  "Ensenada · Valle de Guadalupe · México",
                )}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white">
                  <Check className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-medium tracking-[-0.02em]">
                  {t("Message ready to send", "Mensaje listo para enviar")}
                </h2>
                <p className="mt-3 max-w-sm text-sm text-neutral-500">
                  {t(
                    "We opened WhatsApp with your message pre-filled. You can also write to us at hola@aphelion.mx.",
                    "Abrimos WhatsApp con tu mensaje precargado. Si prefieres, también puedes escribirnos a hola@aphelion.mx.",
                  )}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs font-medium text-neutral-500 underline-offset-4 hover:text-neutral-950 hover:underline"
                >
                  {t("Send another message", "Enviar otro mensaje")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label={t("Name *", "Nombre *")} required />
                  <Field name="company" label={t("Company", "Empresa")} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="email" label={t("Email *", "Email *")} type="email" required />
                  <Field
                    name="phone"
                    label={t("Phone / WhatsApp", "Teléfono / WhatsApp")}
                    type="tel"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                    {t("Service", "Servicio")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <Chip key={s} active={service === s} onClick={() => setService(s)}>
                        {s}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                    {t("Estimated budget", "Presupuesto estimado")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
                        {b}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500"
                  >
                    {t("Tell us about the project *", "Cuéntanos del proyecto *")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={1000}
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    placeholder={t(
                      "What's your business, what do you need to solve, timelines…",
                      "Qué es tu negocio, qué necesitas resolver, tiempos…",
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 sm:w-auto"
                >
                  {t("Send message", "Enviar mensaje")}
                </button>
                <p className="text-xs text-neutral-400">
                  {t(
                    "By submitting you agree to be contacted about your request. We don't share your information.",
                    "Al enviar aceptas que te contactemos sobre tu solicitud. No compartimos tu información.",
                  )}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
      />
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
        active
          ? "border-neutral-950 bg-neutral-950 text-white"
          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950"
      }`}
    >
      {children}
    </button>
  );
}

function Item({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
        {label}
      </span>
      <span className="text-sm text-neutral-950">{value}</span>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block transition hover:opacity-70">
        {content}
      </a>
    );
  }
  return content;
}

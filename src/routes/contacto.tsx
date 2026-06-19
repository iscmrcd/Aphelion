import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { AphelionLogo } from "@/components/Brand";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Aphelion" },
      {
        name: "description",
        content:
          "Cuéntanos tu proyecto. Websites, marketing, contenido, video, branding o SaaS personalizado — te respondemos en menos de 24 horas.",
      },
      { property: "og:title", content: "Contacto — Aphelion" },
      {
        property: "og:description",
        content:
          "Cuéntanos tu proyecto. Te respondemos en menos de 24 horas.",
      },
    ],
  }),
  component: ContactoPage,
});

const SERVICES = [
  "Websites",
  "Marketing Digital",
  "Contenido para Redes",
  "Video Comercial & Drone",
  "Branding",
  "SaaS Personalizado",
  "Aún no estoy seguro",
];

const BUDGETS = [
  "Menos de $20,000 MXN",
  "$20,000 – $50,000 MXN",
  "$50,000 – $150,000 MXN",
  "Más de $150,000 MXN",
  "Mensualidad / contrato recurrente",
];

function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hola, soy ${data.get("name")}.`,
      `Empresa: ${data.get("company") || "—"}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("phone") || "—"}`,
      `Servicio: ${service || "—"}`,
      `Presupuesto: ${budget || "—"}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const url = `https://wa.me/?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <header className="border-b border-neutral-200 px-5 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <AphelionLogo className="h-6 w-auto" />
          </Link>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 transition hover:text-neutral-950"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Servicios
          </Link>
        </div>
      </header>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              Contacto
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              Cuéntanos qué tienes en mente.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500">
              Respondemos en menos de 24 horas. Si tu proyecto encaja, agendamos una
              llamada de 30 minutos sin compromiso para entender alcance, tiempos y
              presupuesto.
            </p>

            <div className="mt-10 space-y-4 border-t border-neutral-200 pt-8">
              <Item label="Email" value="hola@aphelion.mx" href="mailto:hola@aphelion.mx" />
              <Item label="WhatsApp" value="Escríbenos directo" href="https://wa.me/" />
              <Item label="Ubicación" value="Ensenada · Valle de Guadalupe · México" />
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white">
                  <Check className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-medium tracking-[-0.02em]">
                  Mensaje listo para enviar
                </h2>
                <p className="mt-3 max-w-sm text-sm text-neutral-500">
                  Abrimos WhatsApp con tu mensaje precargado. Si prefieres, también
                  puedes escribirnos a hola@aphelion.mx.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs font-medium text-neutral-500 underline-offset-4 hover:text-neutral-950 hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Nombre *" required />
                  <Field name="company" label="Empresa" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="email" label="Email *" type="email" required />
                  <Field name="phone" label="Teléfono / WhatsApp" type="tel" />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                    Servicio
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <Chip
                        key={s}
                        active={service === s}
                        onClick={() => setService(s)}
                      >
                        {s}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                    Presupuesto estimado
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <Chip
                        key={b}
                        active={budget === b}
                        onClick={() => setBudget(b)}
                      >
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
                    Cuéntanos del proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={1000}
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    placeholder="Qué es tu negocio, qué necesitas resolver, tiempos…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 sm:w-auto"
                >
                  Enviar mensaje
                </button>
                <p className="text-xs text-neutral-400">
                  Al enviar aceptas que te contactemos sobre tu solicitud. No
                  compartimos tu información.
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

function Item({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
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

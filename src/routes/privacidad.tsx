import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AphelionLogo } from "@/components/Brand";
import { useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/privacidad",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Privacy Notice — Aphelion",
        description:
          "Aphelion's privacy notice: how we collect, use and protect your personal data under Mexico's LFPDPPP.",
        ogTitle: "Privacy Notice — Aphelion",
        ogDescription: "How Aphelion collects, uses and protects your personal data.",
      },
      es: {
        title: "Aviso de Privacidad — Aphelion",
        description:
          "Aviso de privacidad de Aphelion. Cómo recopilamos, usamos y protegemos tus datos personales conforme a la LFPDPPP.",
        ogTitle: "Aviso de Privacidad — Aphelion",
        ogDescription: "Cómo Aphelion recopila, usa y protege tus datos personales.",
      },
      jsonLd: {
        "@type": "WebPage",
        name: "Aphelion Privacy Notice",
        url: `${SITE_URL}/privacidad`,
      },
    }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          {t("Legal notice", "Aviso legal")}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
          {t("Privacy Notice", "Aviso de Privacidad")}
        </h1>
        <p className="text-neutral-600 mb-12">
          {t("Last updated: July 22, 2026", "Última actualización: 22 de julio de 2026")}
        </p>

        <div className="prose prose-neutral max-w-none space-y-10 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("1. Data controller", "1. Responsable del tratamiento")}
            </h2>
            <p className="text-neutral-700">
              {t(
                'Aphelion ("Aphelion", "we") based in Valle de Guadalupe, Baja California, Mexico, is responsible for processing your personal data in accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its regulations. For any questions related to this notice, you can contact us at ',
                'Aphelion (en adelante, "Aphelion", "nosotros") con domicilio en Valle de Guadalupe, Baja California, México, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento. Para cualquier duda relacionada con este aviso, puedes contactarnos en '
              )}
              <a
                href="mailto:hola@aphelion.mx"
                className="underline underline-offset-2"
              >
                hola@aphelion.mx
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("2. Personal data we collect", "2. Datos personales que recabamos")}
            </h2>
            <p className="text-neutral-700 mb-3">
              {t(
                "We collect the data you provide directly when filling out our contact form, scheduling a call, or starting a conversation via WhatsApp or email:",
                "Recabamos los datos que tú mismo nos proporcionas al llenar nuestro formulario de contacto, agendar una llamada o iniciar una conversación por WhatsApp o correo:"
              )}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700">
              <li>{t("Full name", "Nombre completo")}</li>
              <li>{t("Company or project name", "Nombre de empresa o proyecto")}</li>
              <li>{t("Email address", "Correo electrónico")}</li>
              <li>{t("Phone number", "Número de teléfono")}</li>
              <li>
                {t(
                  "Project information (service of interest, estimated budget, message)",
                  "Información del proyecto (servicio de interés, presupuesto estimado, mensaje)"
                )}
              </li>
            </ul>
            <p className="text-neutral-700 mt-3">
              {t(
                "We do not collect sensitive personal data or financial data.",
                "No recabamos datos personales sensibles ni datos financieros."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("3. Purposes of processing", "3. Finalidades del tratamiento")}
            </h2>
            <p className="text-neutral-700 mb-3">
              <strong>{t("Primary purposes", "Finalidades primarias")}</strong>{" "}
              {t("(necessary for the relationship):", "(necesarias para la relación):")}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700 mb-4">
              <li>{t("Respond to your request and prepare a quote.", "Responder tu solicitud y elaborar una cotización.")}</li>
              <li>{t("Schedule meetings and provide sales follow-up.", "Agendar reuniones y dar seguimiento comercial.")}</li>
              <li>{t("Deliver contracted services.", "Prestar los servicios contratados.")}</li>
              <li>{t("Issue invoices when applicable.", "Emitir facturación cuando corresponda.")}</li>
            </ul>
            <p className="text-neutral-700 mb-3">
              <strong>{t("Secondary purposes", "Finalidades secundarias")}</strong>{" "}
              {t("(you may opt out without affecting the relationship):", "(puedes oponerte sin que afecte la relación):")}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700">
              <li>{t("Sending news, case studies or promotions.", "Envío de novedades, casos de estudio o promociones.")}</li>
              <li>{t("Internal analytics to improve our services.", "Analítica interna para mejorar nuestros servicios.")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("4. Data transfers", "4. Transferencias de datos")}
            </h2>
            <p className="text-neutral-700">
              {t(
                "We do not sell or trade your personal data. We may share it with technology providers that enable our operations (for example, hosting, email, messaging, and web analytics services), who act as data processors under a contractual duty of confidentiality. No additional consent from you is required under article 37 of the LFPDPPP.",
                "No vendemos ni comercializamos tus datos personales. Podemos compartirlos con proveedores tecnológicos que nos permiten operar (por ejemplo, servicios de hosting, correo, mensajería y análisis web), quienes actúan como encargados del tratamiento bajo obligación contractual de confidencialidad. En ningún caso se requiere tu consentimiento adicional conforme al artículo 37 de la LFPDPPP."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("5. ARCO Rights", "5. Derechos ARCO")}
            </h2>
            <p className="text-neutral-700">
              {t("You have the right to ", "Tienes derecho a ")}
              <strong>{t("Access, Rectify, Cancel", "Acceder, Rectificar, Cancelar")}</strong>{" "}
              {t("or ", "u ")}
              <strong>{t("Object", "Oponerte")}</strong>
              {t(
                " to the processing of your data, as well as to revoke any consent given. To exercise any of these rights, send a request to ",
                " al tratamiento de tus datos, así como a revocar el consentimiento otorgado. Para ejercer cualquiera de estos derechos envía una solicitud a "
              )}
              <a
                href="mailto:hola@aphelion.mx"
                className="underline underline-offset-2"
              >
                hola@aphelion.mx
              </a>{" "}
              {t(
                "stating your name, the right you wish to exercise, and a copy of an official ID. We will respond within a maximum of 20 business days.",
                "indicando tu nombre, el derecho que deseas ejercer y una copia de identificación oficial. Responderemos en un plazo máximo de 20 días hábiles."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("6. Cookies and tracking technologies", "6. Cookies y tecnologías de seguimiento")}
            </h2>
            <p className="text-neutral-700">
              {t(
                "Our site may use cookies and similar technologies to remember preferences and measure traffic (for example, through analytics tools). You can disable cookies through your browser settings; some site features may be affected.",
                "Nuestro sitio puede utilizar cookies y tecnologías similares para recordar preferencias y medir el tráfico (por ejemplo, mediante herramientas de analítica). Puedes desactivar las cookies desde la configuración de tu navegador; algunas funciones del sitio podrían verse afectadas."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("7. Security measures", "7. Medidas de seguridad")}
            </h2>
            <p className="text-neutral-700">
              {t(
                "We implement reasonable administrative, technical and physical measures to protect your data against damage, loss, alteration, destruction or unauthorized use, including encryption in transit, access controls and periodic backups.",
                "Implementamos medidas administrativas, técnicas y físicas razonables para proteger tus datos contra daño, pérdida, alteración, destrucción o uso no autorizado, incluyendo cifrado en tránsito, control de accesos y respaldos periódicos."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              {t("8. Changes to this notice", "8. Cambios al aviso")}
            </h2>
            <p className="text-neutral-700">
              {t(
                "We may update this notice at any time. The current version will always be available on this page with the last-updated date.",
                "Podemos actualizar este aviso en cualquier momento. La versión vigente estará siempre disponible en esta página con la fecha de última actualización."
              )}
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-70 transition-opacity"
          >
            {t("Questions? Contact us →", "¿Dudas? Contáctanos →")}
          </Link>
        </div>
      </main>
    </div>
  );
}

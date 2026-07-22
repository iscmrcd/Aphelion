import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AphelionLogo } from "@/components/Brand";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de Privacidad — Aphelion" },
      {
        name: "description",
        content:
          "Aviso de privacidad de Aphelion. Cómo recopilamos, usamos y protegemos tus datos personales conforme a la LFPDPPP.",
      },
      { property: "og:title", content: "Aviso de Privacidad — Aphelion" },
      {
        property: "og:description",
        content:
          "Cómo Aphelion recopila, usa y protege tus datos personales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <AphelionLogo className="h-6 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Aviso legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
          Aviso de Privacidad
        </h1>
        <p className="text-neutral-600 mb-12">
          Última actualización: 22 de julio de 2026
        </p>

        <div className="prose prose-neutral max-w-none space-y-10 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Responsable del tratamiento
            </h2>
            <p className="text-neutral-700">
              Aphelion (en adelante, "Aphelion", "nosotros") con domicilio en
              Valle de Guadalupe, Baja California, México, es responsable del
              tratamiento de tus datos personales conforme a la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares
              (LFPDPPP) y su reglamento. Para cualquier duda relacionada con
              este aviso, puedes contactarnos en{" "}
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
              2. Datos personales que recabamos
            </h2>
            <p className="text-neutral-700 mb-3">
              Recabamos los datos que tú mismo nos proporcionas al llenar
              nuestro formulario de contacto, agendar una llamada o iniciar una
              conversación por WhatsApp o correo:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700">
              <li>Nombre completo</li>
              <li>Nombre de empresa o proyecto</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>
                Información del proyecto (servicio de interés, presupuesto
                estimado, mensaje)
              </li>
            </ul>
            <p className="text-neutral-700 mt-3">
              No recabamos datos personales sensibles ni datos financieros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Finalidades del tratamiento
            </h2>
            <p className="text-neutral-700 mb-3">
              <strong>Finalidades primarias</strong> (necesarias para la
              relación):
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700 mb-4">
              <li>Responder tu solicitud y elaborar una cotización.</li>
              <li>Agendar reuniones y dar seguimiento comercial.</li>
              <li>Prestar los servicios contratados.</li>
              <li>Emitir facturación cuando corresponda.</li>
            </ul>
            <p className="text-neutral-700 mb-3">
              <strong>Finalidades secundarias</strong> (puedes oponerte sin que
              afecte la relación):
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700">
              <li>Envío de novedades, casos de estudio o promociones.</li>
              <li>Analítica interna para mejorar nuestros servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Transferencias de datos
            </h2>
            <p className="text-neutral-700">
              No vendemos ni comercializamos tus datos personales. Podemos
              compartirlos con proveedores tecnológicos que nos permiten operar
              (por ejemplo, servicios de hosting, correo, mensajería y análisis
              web), quienes actúan como encargados del tratamiento bajo
              obligación contractual de confidencialidad. En ningún caso se
              requiere tu consentimiento adicional conforme al artículo 37 de
              la LFPDPPP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Derechos ARCO
            </h2>
            <p className="text-neutral-700">
              Tienes derecho a <strong>Acceder, Rectificar, Cancelar</strong> u{" "}
              <strong>Oponerte</strong> al tratamiento de tus datos, así como a
              revocar el consentimiento otorgado. Para ejercer cualquiera de
              estos derechos envía una solicitud a{" "}
              <a
                href="mailto:hola@aphelion.mx"
                className="underline underline-offset-2"
              >
                hola@aphelion.mx
              </a>{" "}
              indicando tu nombre, el derecho que deseas ejercer y una copia de
              identificación oficial. Responderemos en un plazo máximo de 20
              días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              6. Cookies y tecnologías de seguimiento
            </h2>
            <p className="text-neutral-700">
              Nuestro sitio puede utilizar cookies y tecnologías similares para
              recordar preferencias y medir el tráfico (por ejemplo, mediante
              herramientas de analítica). Puedes desactivar las cookies desde la
              configuración de tu navegador; algunas funciones del sitio
              podrían verse afectadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. Medidas de seguridad
            </h2>
            <p className="text-neutral-700">
              Implementamos medidas administrativas, técnicas y físicas
              razonables para proteger tus datos contra daño, pérdida,
              alteración, destrucción o uso no autorizado, incluyendo cifrado
              en tránsito, control de accesos y respaldos periódicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              8. Cambios al aviso
            </h2>
            <p className="text-neutral-700">
              Podemos actualizar este aviso en cualquier momento. La versión
              vigente estará siempre disponible en esta página con la fecha de
              última actualización.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-70 transition-opacity"
          >
            ¿Dudas? Contáctanos →
          </Link>
        </div>
      </main>
    </div>
  );
}

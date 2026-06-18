export function CTAFooter() {
  return (
    <section id="contacto" className="border-t border-neutral-200 bg-neutral-950 px-5 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
          Trabajamos con clientes que valoran el detalle.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-white/60">
          Si tu marca quiere crecer con la estructura correcta, cuéntanos qué tienes
          en mente. Te respondemos en menos de 24 horas.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hola@aphelion.mx"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            Agendar llamada
          </a>
          <a
            href="https://wa.me/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Aphelion. Todos los derechos reservados.</span>
        <span>Ensenada · Valle de Guadalupe · México</span>
      </div>
    </section>
  );
}

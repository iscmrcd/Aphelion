import { Link } from "@tanstack/react-router";
import { AphelionLogo } from "@/components/Brand";
import { FacebookIcon, InstagramIcon, PinterestIcon, XIcon } from "@/components/SocialIcons";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-t border-white/10 bg-neutral-950 px-5 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Aphelion" className="inline-flex">
            <AphelionLogo className="h-6 w-auto brightness-0 invert" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            {t(
              "Digital infrastructure for brands that refuse to settle.",
              "Infraestructura digital para marcas que no se conforman.",
            )}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.facebook.com/aphelion.mx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/60 transition hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/aphelion.mx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/60 transition hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://mx.pinterest.com/aphelionmx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-white/60 transition hover:text-white"
            >
              <PinterestIcon className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/aphelionmx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-white/60 transition hover:text-white"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
            {t("Services", "Servicios")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/" className="transition hover:text-white">
                {t("All services", "Todos los servicios")}
              </Link>
            </li>
            <li>
              <Link to="/servicios/websites" className="transition hover:text-white">
                Websites
              </Link>
            </li>
            <li>
              <Link to="/servicios/marketing" className="transition hover:text-white">
                {t("Marketing & Content", "Marketing y Contenido")}
              </Link>
            </li>
            <li>
              <Link to="/servicios/video-con-dron" className="transition hover:text-white">
                {t("Drone Video", "Video con Dron")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
            {t("Company", "Compañía")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/contacto" className="transition hover:text-white">
                {t("Contact", "Contacto")}
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="transition hover:text-white">
                {t("Privacy notice", "Aviso de privacidad")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
            {t("Get in touch", "Contáctanos")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="mailto:hola@aphelion.mx" className="transition hover:text-white">
                hola@aphelion.mx
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/526461293352"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp +52 646 129 3352
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40">
        <span>© {year} Aphelion.</span>
        <span>
          {t(
            "Ensenada · Valle de Guadalupe · Tijuana · Mexico",
            "Ensenada · Valle de Guadalupe · Tijuana · México",
          )}
        </span>
      </div>
    </footer>
  );
}

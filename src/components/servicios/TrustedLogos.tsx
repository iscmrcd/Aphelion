import { useT } from "@/lib/i18n";

// Minimalist trusted-platforms strip. Inline monochrome SVGs so it stays B&W.
const Logo = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div
    aria-label={label}
    className="flex h-8 items-center justify-center text-neutral-400 transition hover:text-neutral-950"
  >
    {children}
  </div>
);

export function TrustedLogos() {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          {t("We integrate the platforms you already use", "Integramos las plataformas que ya usas")}
        </p>
        <div className="grid grid-cols-2 items-center gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          <Logo label="Meta">
            <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current" aria-hidden>
              <text x="0" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.5">Meta</text>
            </svg>
          </Logo>
          <Logo label="Google">
            <svg viewBox="0 0 120 24" className="h-5 w-auto fill-current" aria-hidden>
              <text x="0" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" fontSize="20" letterSpacing="-0.5">Google</text>
            </svg>
          </Logo>
          <Logo label="TikTok">
            <svg viewBox="0 0 110 24" className="h-5 w-auto fill-current" aria-hidden>
              <text x="0" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-1">TikTok</text>
            </svg>
          </Logo>
          <Logo label="Stripe">
            <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current" aria-hidden>
              <text x="0" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.5" fontStyle="italic">stripe</text>
            </svg>
          </Logo>
          <Logo label="WhatsApp">
            <svg viewBox="0 0 140 24" className="h-5 w-auto fill-current" aria-hidden>
              <text x="0" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" fontSize="20" letterSpacing="-0.5">WhatsApp</text>
            </svg>
          </Logo>
          <Logo label="Supabase">
            <svg viewBox="0 0 130 24" className="h-5 w-auto fill-current" aria-hidden>
              <text x="0" y="18" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" fontSize="20" letterSpacing="-0.5">Supabase</text>
            </svg>
          </Logo>
        </div>
      </div>
    </section>
  );
}

import iconAsset from "@/assets/brand/aphelion-icon.svg.asset.json";
import logoAsset from "@/assets/brand/aphelion-logo.svg.asset.json";

export function AphelionIcon({ className = "h-6 w-auto" }: { className?: string }) {
  return <img src={iconAsset.url} alt="Aphelion" className={className} />;
}

export function AphelionLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Aphelion" className={className} />;
}

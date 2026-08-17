import type { ReactNode } from "react";
import { AI_GRADIENT } from "@/lib/whatsapp-ia-data";

/**
 * Hairline gradient outline around a solid child.
 *
 * A CSS border can't hold a gradient and border-image ignores border-radius,
 * so the gradient paints this 1px-padded wrapper and the child's own solid
 * background covers everything but the edge.
 *
 * Scope note: the ramp is otherwise reserved for Conversational AI. This frame
 * is the deliberate exception for CTAs that represent BOTH tiers equally —
 * they take the accent as an outline only, never as a fill, so the
 * solid-background rule for non-AI elements still holds.
 */
export function GradientBorderFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-block rounded-full p-px ${AI_GRADIENT} ${className}`}>{children}</span>
  );
}

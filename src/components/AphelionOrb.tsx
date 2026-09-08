/**
 * The assistant's face: a small liquid orb, in the spirit of Siri's.
 *
 * Deliberately not a video or a GIF. The two places this appears are 32 and
 * 44 pixels wide; a clip would weigh hundreds of times more than the pixels it
 * paints, would keep a <video> element decoding on every page of the site, and
 * would still go soft on a retina screen. Everything here is vector and CSS,
 * so it is sharp at any size and free to render.
 *
 * It also does something a clip cannot: `busy` speeds the motion up while the
 * assistant is composing a reply, which is a status indicator the visitor
 * reads without being told.
 *
 * The animation is defined in styles.css under .aph-orb, next to the reduced
 * motion rule that parks it.
 */
export function AphelionOrb({
  size = 32,
  busy = false,
  className = "",
}: {
  size?: number;
  busy?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`aph-orb${busy ? " aph-orb-busy" : ""} ${className}`}
      style={
        {
          width: size,
          height: size,
          "--orb-size": `${size}px`,
          flex: "0 0 auto",
        } as React.CSSProperties
      }
    >
      <span className="aph-orb-blob aph-orb-a" />
      <span className="aph-orb-blob aph-orb-b" />
      <span className="aph-orb-blob aph-orb-c" />
    </span>
  );
}

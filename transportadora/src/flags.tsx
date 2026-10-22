import { useId } from "react";

type FlagProps = { className?: string; title?: string };

// Points of a five-pointed star centred on (cx, cy), with one tip at `angle`.
function starPoints(cx: number, cy: number, r: number, angle = -Math.PI / 2) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.382;
    const a = angle + (i * Math.PI) / 5;
    return `${(cx + radius * Math.cos(a)).toFixed(3)},${(cy + radius * Math.sin(a)).toFixed(3)}`;
  }).join(" ");
}

function a11y(title?: string) {
  return title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true as const };
}

/** Spain, without the coat of arms (common at small sizes). */
export function FlagES({ className, title }: FlagProps) {
  return (
    <svg viewBox="0 0 750 500" className={className} {...a11y(title)}>
      <rect width="750" height="500" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
    </svg>
  );
}

/** United Kingdom (Union Flag), cropped to 3:2. */
export function FlagUK({ className, title }: FlagProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 60 30"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      {...a11y(title)}
    >
      <clipPath id={`${id}t`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${id}t)`}
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

/** People's Republic of China: small stars point at the large one. */
export function FlagCN({ className, title }: FlagProps) {
  const smallStars: [number, number][] = [
    [10, 2],
    [12, 4],
    [12, 7],
    [10, 9],
  ];
  return (
    <svg viewBox="0 0 30 20" className={className} {...a11y(title)}>
      <rect width="30" height="20" fill="#EE1C25" />
      <polygon points={starPoints(5, 5, 3)} fill="#FFFF00" />
      {smallStars.map(([x, y]) => (
        <polygon
          key={`${x}-${y}`}
          points={starPoints(x, y, 1, Math.atan2(5 - y, 5 - x))}
          fill="#FFFF00"
        />
      ))}
    </svg>
  );
}

/** Casanare: red upper-left, green lower-right, eight-pointed yellow star. */
export function FlagCasanare({ className, title }: FlagProps) {
  const points = Array.from({ length: 16 }, (_, i) => {
    const r = i % 2 === 0 ? 120 : 52;
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    return `${(450 + r * Math.cos(a)).toFixed(1)},${(300 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 900 600" className={className} {...a11y(title)}>
      <polygon points="0,0 900,0 0,600" fill="#D91218" />
      <polygon points="900,0 900,600 0,600" fill="#088B30" />
      <polygon points={points} fill="#FDDB00" />
    </svg>
  );
}

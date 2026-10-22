type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconBus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="3" width="16" height="15" rx="2.5" />
      <path d="M4 11h16M8 3v8M16 3v8" />
      <circle cx="8" cy="15" r="0.8" fill="currentColor" />
      <circle cx="16" cy="15" r="0.8" fill="currentColor" />
      <path d="M6.5 18v2.5M17.5 18v2.5" />
    </svg>
  );
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2.5 15.5V11l2.5-4.5h7.5L15 11h5a1.5 1.5 0 0 1 1.5 1.5v3h-2" />
      <path d="M5.5 11h9.5M9 6.5V11" />
      <circle cx="6.5" cy="16" r="2" />
      <circle cx="17.5" cy="16" r="2" />
      <path d="M8.5 16h7" />
    </svg>
  );
}

export function IconHeli({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 5h14M10 5v3" />
      <path d="M5 8h8a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H9a4 4 0 0 1-4-4z" />
      <path d="M17 11.5h4.5M21.5 9.5v4" />
      <path d="M8 15v3M14 15v3M6 18h10" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8z" />
      <path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
    </svg>
  );
}

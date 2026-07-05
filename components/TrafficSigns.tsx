type SignProps = { size?: number };

export function DurSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Dur işareti">
      <polygon
        points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30"
        fill="#c1272d"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#ffffff"
        letterSpacing="2"
      >
        DUR
      </text>
    </svg>
  );
}

export function YayaGecidiSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Yaya geçidi işareti">
      <polygon points="50,6 94,90 6,90" fill="#f4c430" stroke="#12182b" strokeWidth="3" />
      <g transform="translate(50,58)">
        <circle cx="0" cy="-14" r="5" fill="#12182b" />
        <path
          d="M -8 -4 L 8 -4 L 6 20 L 2 20 L 0 4 L -2 20 L -6 20 Z"
          fill="#12182b"
        />
      </g>
    </svg>
  );
}

export function GirisYokSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Girişi olmayan yol işareti">
      <circle cx="50" cy="50" r="46" fill="#c1272d" stroke="#12182b" strokeWidth="2" />
      <rect x="20" y="42" width="60" height="16" rx="2" fill="#ffffff" />
    </svg>
  );
}

export function KavsakSenaryo({ size = 220 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-label="Kavşak senaryosu">
      <circle cx="100" cy="100" r="95" fill="#eef0f3" />
      <rect x="0" y="80" width="200" height="40" fill="#c9ccd3" />
      <rect x="80" y="0" width="40" height="200" fill="#c9ccd3" />
      <circle cx="100" cy="100" r="34" fill="#a9832f" opacity="0.25" />
      <circle cx="100" cy="100" r="34" fill="none" stroke="#a9832f" strokeWidth="3" strokeDasharray="6 6" />
      <g fill="#12182b">
        <rect x="150" y="88" width="26" height="14" rx="3" />
        <rect x="24" y="98" width="26" height="14" rx="3" transform="rotate(180 37 105)" />
        <rect x="88" y="150" width="14" height="26" rx="3" />
      </g>
      <text x="100" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#565f75">
        Dönel kavşak
      </text>
    </svg>
  );
}

export const signRegistry: Record<string, React.ComponentType<SignProps>> = {
  dur: DurSign,
  yayaGecidi: YayaGecidiSign,
  girisYok: GirisYokSign,
  kavsakSenaryo: KavsakSenaryo,
};

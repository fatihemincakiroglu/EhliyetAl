/** Direksiyon simidi işareti — EhliyetAl logosu. */
export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[11px] bg-primary shrink-0"
      style={{
        width: size,
        height: size,
        boxShadow: "0 3px 0 0 var(--color-primary-deep)",
      }}
      aria-hidden="true"
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3v6.5M4.5 15.5l5.3-2.2M19.5 15.5l-5.3-2.2" />
      </svg>
    </span>
  );
}

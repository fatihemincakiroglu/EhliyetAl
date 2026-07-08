import Link from "next/link";

const links = [
  { href: "/ara", label: "Soru Ara" },
  { href: "/sozluk", label: "Sözlük" },
  { href: "/rehber", label: "Hazırlık Rehberi" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-navy mt-8">
      <div className="h-[3px] hazard-stripe" />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/70 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-[11px] text-white/50 font-data">
          © {new Date().getFullYear()} EhliyetAl —{" "}
          <a
            href="https://fatihemincakiroglu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Fatih Emin Çakıroğlu
          </a>
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const links = [
  { href: "/sinav", label: "Deneme Sınavı" },
  { href: "/ara", label: "Soru Ara" },
  { href: "/blog", label: "Blog" },
  { href: "/sozluk", label: "Sözlük" },
  { href: "/rehber", label: "Hazırlık Rehberi" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="app-footer mt-12 border-t-2 border-line bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <LogoMark size={30} />
          <span className="font-display font-black text-lg text-ink">EhliyetAl</span>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Alt bağlantılar">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-ink-soft hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
        <p className="text-xs font-semibold text-ink-soft">
          © {new Date().getFullYear()} EhliyetAl —{" "}
          <a
            href="https://fatihemincakiroglu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline hover:text-primary"
          >
            Fatih Emin Çakıroğlu
          </a>
        </p>
      </div>
    </footer>
  );
}

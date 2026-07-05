import Link from "next/link";
import { Home, Search, TrafficCone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <main className="max-w-md mx-auto px-6 py-14 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-gold-wash text-gold p-4 mb-6">
          <TrafficCone size={32} />
        </div>
        <p className="font-data text-xs uppercase tracking-wider text-gold mb-2">
          Hata 404
        </p>
        <h1 className="font-display text-3xl text-ink mb-3">
          Bu yol kapalı görünüyor
        </h1>
        <p className="text-ink-soft text-sm leading-relaxed mb-8">
          Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Ama merak
          etme, doğru yönü gösterelim.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full gold-gradient text-ink px-6 py-3 hover:bg-gold-soft transition-colors"
          >
            <Home size={16} />
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/ara"
            className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full border border-line text-ink px-6 py-3 hover:bg-gold-wash hover:border-gold-soft transition-colors"
          >
            <Search size={16} />
            Soru Ara
          </Link>
        </div>
      </main>
    </div>
  );
}

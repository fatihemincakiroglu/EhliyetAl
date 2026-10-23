import Link from "next/link";
import { Home, Search, TrafficCone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-paper flex items-center justify-center min-h-[70vh]">
      <main className="max-w-md w-full mx-auto px-4 sm:px-6 py-10">
        <div className="card bg-surface border-2 border-line rounded-3xl p-6 sm:p-8 text-center">
          <span className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-tangerine-wash text-tangerine flex items-center justify-center">
            <TrafficCone size={32} strokeWidth={2.3} />
          </span>
          <p className="text-[13px] font-extrabold text-tangerine-ink mb-1">Hata 404</p>
          <h1 className="font-display font-black text-[28px] sm:text-3xl leading-tight text-ink mb-2">
            Bu yol kapalı görünüyor
          </h1>
          <p className="text-ink-soft font-semibold leading-relaxed mb-6">
            Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Ama merak
            etme, doğru yönü gösterelim.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="btn-primary rounded-2xl h-[52px] flex items-center justify-center gap-2 text-[15px] tracking-wide"
            >
              <Home size={18} strokeWidth={2.6} />
              ANA SAYFAYA DÖN
            </Link>
            <Link
              href="/ara"
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px]"
            >
              <Search size={17} strokeWidth={2.6} />
              Soru Ara
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

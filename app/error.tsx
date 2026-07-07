"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <main className="max-w-md mx-auto px-6 py-14 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-danger-wash text-danger p-4 mb-6">
          <AlertTriangle size={32} />
        </div>
        <p className="font-data text-xs uppercase tracking-wider text-danger mb-2">
          Beklenmedik Hata
        </p>
        <h1 className="font-display text-3xl text-ink mb-3">
          Bir şeyler ters gitti
        </h1>
        <p className="text-ink-soft text-sm leading-relaxed mb-8">
          Sayfa yüklenirken bir hata oluştu. Tekrar deneyebilir veya ana
          sayfaya dönebilirsin.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full gold-gradient text-white px-6 py-3 hover:bg-gold-soft transition-colors"
          >
            <RotateCcw size={16} />
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase btn-hard-outline rounded-xl border border-line text-ink bg-surface px-6 py-3 hover:bg-gold-wash hover:border-gold-soft transition-colors"
          >
            <Home size={16} />
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
    </div>
  );
}

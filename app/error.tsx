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
    <div className="bg-paper flex items-center justify-center min-h-[70vh]">
      <main className="max-w-md w-full mx-auto px-4 sm:px-6 py-10">
        <div className="card bg-surface border-2 border-line rounded-3xl p-6 sm:p-8 text-center">
          <span className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-danger-wash text-danger flex items-center justify-center">
            <AlertTriangle size={32} strokeWidth={2.3} />
          </span>
          <p className="text-[13px] font-extrabold text-danger-ink mb-1">Beklenmedik Hata</p>
          <h1 className="font-display font-black text-[28px] sm:text-3xl leading-tight text-ink mb-2">
            Bir şeyler ters gitti
          </h1>
          <p className="text-ink-soft font-semibold leading-relaxed mb-6">
            Sayfa yüklenirken bir hata oluştu. Tekrar deneyebilir veya ana
            sayfaya dönebilirsin.
          </p>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={reset}
              className="btn-primary rounded-2xl h-[52px] flex items-center justify-center gap-2 text-[15px] tracking-wide cursor-pointer"
            >
              <RotateCcw size={18} strokeWidth={2.6} />
              TEKRAR DENE
            </button>
            <Link
              href="/"
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px]"
            >
              <Home size={17} strokeWidth={2.6} />
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

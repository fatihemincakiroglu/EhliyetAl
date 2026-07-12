import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { provinces, provincePath } from "@/lib/provinces";

export const metadata: Metadata = {
  title: "İle Göre Ehliyet Sınavı Rehberi | EhliyetAl",
  description:
    "Türkiye genelindeki illerde ehliyet sınavına hazırlık süreci ve ücretsiz deneme sınavlarıyla çalışma rehberi. İlini seç, hazırlığa başla.",
  alternates: {
    canonical: "https://ehliyetal.net/rehber/il",
  },
};

export default function ProvinceHubPage() {
  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/rehber"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <MapPin size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">İle Göre Rehber</h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Ehliyet sınavı süreci Türkiye genelinde aynı adımları izler, ama
          başvuru ve iletişim noktaları ilden ile göre değişir. İlini seç, o ile
          özel kısa rehberi ve ilgili çalışma testlerini gör.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {provinces.map((province) => (
            <Link
              key={province.slug}
              href={provincePath(province)}
              className="group flex items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 hover:border-gold-soft hover:bg-gold-wash transition-colors"
            >
              <span className="text-sm text-ink truncate">{province.name}</span>
              <ArrowRight
                size={14}
                className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

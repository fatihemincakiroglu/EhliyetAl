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
    <div className="bg-paper">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <Link
          href="/rehber"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-6 min-h-11"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-12 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <MapPin size={18} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">İle Göre Rehber</h1>
        </div>
        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-10">
          Ehliyet sınavı süreci Türkiye genelinde aynı adımları izler, ama
          başvuru ve iletişim noktaları ilden ile göre değişir. İlini seç, o ile
          özel kısa rehberi ve ilgili çalışma testlerini gör.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {provinces.map((province) => (
            <Link
              key={province.slug}
              href={provincePath(province)}
              className="card group flex items-center justify-between gap-2 rounded-2xl border-2 border-line bg-surface px-4 min-h-12 py-3"
            >
              <span className="text-[15px] font-extrabold text-ink truncate">{province.name}</span>
              <ArrowRight
                size={14}
                className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary"
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

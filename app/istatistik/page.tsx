import type { Metadata } from "next";
import IstatistikClient from "./IstatistikClient";

export const metadata: Metadata = {
  title: "İstatistiklerim ve Rozetlerim | EhliyetAl",
  description:
    "Ehliyet sınavı hazırlığındaki ilerlemeni takip et: kategori bazlı başarı oranların, çözdüğün soru sayısı ve kazandığın rozetler tek ekranda.",
  alternates: {
    canonical: "https://ehliyetal.net/istatistik",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function IstatistikPage() {
  return <IstatistikClient />;
}

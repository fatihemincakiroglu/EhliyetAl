import type { Metadata } from "next";
import YanlislarimClient from "./YanlislarimClient";

export const metadata: Metadata = {
  title: "Yanlışlarım | EhliyetAl",
  description: "Yanlış cevapladığın tüm ehliyet sınavı soruları tek yerde. Sadece onları çöz, doğru cevapladıkça listeden çıksın.",
  alternates: {
    canonical: "https://ehliyetal.net/yanlislarim",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function YanlislarimPage() {
  return <YanlislarimClient />;
}

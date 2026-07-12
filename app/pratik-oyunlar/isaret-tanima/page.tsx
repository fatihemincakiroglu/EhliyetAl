import type { Metadata } from "next";
import SignGameClient from "./SignGameClient";

export const metadata: Metadata = {
  title: "Trafik İşareti Tanıma Oyunu — Hızlı Öğren | EhliyetAl",
  description:
    "Trafik işaretlerini oyunla öğren! İşaret gösterilir, 3 saniyede doğru anlamını seç. Puan topla, seriyi bozma, refleksini geliştir. Ücretsiz trafik işareti oyunu.",
  alternates: {
    canonical: "https://ehliyetal.net/pratik-oyunlar/isaret-tanima",
  },
};

export default function SignGamePage() {
  return <SignGameClient />;
}

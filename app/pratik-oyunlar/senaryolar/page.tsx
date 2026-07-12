import type { Metadata } from "next";
import ScenariosClient from "./ScenariosClient";

export const metadata: Metadata = {
  title: "Bu Durumda Ne Yaparsın? — Trafik Senaryoları | EhliyetAl",
  description:
    "Gerçek trafik senaryolarıyla geçiş hakkı ve öncelik kurallarını öğren. Kavşak, yaya geçidi, dönel kavşak ve ışık senaryolarında doğru kararı ver. Ücretsiz.",
  alternates: {
    canonical: "https://ehliyetal.net/pratik-oyunlar/senaryolar",
  },
};

export default function ScenariosPage() {
  return <ScenariosClient />;
}

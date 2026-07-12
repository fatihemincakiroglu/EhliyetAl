import type { Metadata } from "next";
import RightOfWayClient from "./RightOfWayClient";

export const metadata: Metadata = {
  title: "Geçiş Hakkı Kuralları — Animasyonlu Şemalar | EhliyetAl",
  description:
    "Kavşaklarda geçiş üstünlüğü ve öncelik kurallarını animasyonlu şemalarla öğren. Sağdan gelen, düz giden, anayol, dönel kavşak ve yaya önceliği tek tek anlatımlı.",
  alternates: {
    canonical: "https://ehliyetal.net/pratik-oyunlar/gecis-hakki",
  },
};

export default function RightOfWayPage() {
  return <RightOfWayClient />;
}

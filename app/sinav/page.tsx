import type { Metadata } from "next";
import SinavClient from "./SinavClient";

export const metadata: Metadata = {
  title: "Ehliyet Deneme Sınavı — 50 Soru 60 Dakika | EhliyetAl",
  description:
    "Gerçek ehliyet sınavı formatında 50 soruluk, 60 dakikalık deneme sınavı çöz. Trafik, motor, ilk yardım ve çevre konularından karışık sorularla kendini sına.",
  alternates: {
    canonical: "https://ehliyetal.net/sinav",
  },
};

export default function SinavPage() {
  return <SinavClient />;
}

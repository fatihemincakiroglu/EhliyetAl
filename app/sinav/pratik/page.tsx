import type { Metadata } from "next";
import PratikClient from "./PratikClient";

export const metadata: Metadata = {
  title: "Sınırsız Pratik — Karışık Ehliyet Sınavı Soruları | EhliyetAl",
  description:
    "Trafik, motor, ilk yardım ve çevre konularından her seferinde yeniden karıştırılmış 50 soruyla sınırsız pratik yap; 60 dakikalık gerçek sınav temposunu deneyimle.",
  alternates: {
    canonical: "https://ehliyetal.net/sinav/pratik",
  },
};

export default function PratikPage() {
  return <PratikClient />;
}

import type { Metadata } from "next";
import AraClient from "./AraClient";

export const metadata: Metadata = {
  title: "Soru Ara | EhliyetAl",
  description:
    "Ehliyet sınavı sorularında kelime veya konu bazında ara; kavşak, akü, kanama, öncelik gibi arama terimleriyle ilgili soruları ve açıklamalarını anında bul.",
  alternates: {
    canonical: "https://ehliyetal.net/ara",
  },
};

export default function AraPage() {
  return <AraClient />;
}

import type { Metadata } from "next";
import TekrarClient from "./TekrarClient";

export const metadata: Metadata = {
  title: "Aralıklı Tekrar | EhliyetAl",
  description:
    "Yanlış yaptığın sorular aralıklı tekrar sistemiyle doğru zamanda karşına çıkar; unutmadan önce tekrar ederek kalıcı öğrenmeni güçlendir.",
  alternates: {
    canonical: "https://ehliyetal.net/tekrar",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TekrarPage() {
  return <TekrarClient />;
}

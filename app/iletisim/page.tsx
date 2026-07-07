import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim | EhliyetAl",
  description:
    "Bir soruda hata bulduysan, bir önerin varsa veya teknik bir sorun yaşıyorsan bize ulaş — EhliyetAl ekibiyle iletişime geç.",
  alternates: {
    canonical: "https://ehliyetal.net/iletisim",
  },
};

export default function IletisimPage() {
  return <IletisimClient />;
}

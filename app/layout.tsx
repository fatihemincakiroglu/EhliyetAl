import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import PwaRegister from "@/components/PwaRegister";

const SITE_URL = "https://ehliyetal.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EhliyetAl — Ehliyet Sınavı Hazırlık",
  description:
    "Trafik, motor, ilkyardım ve çevre konularında gerçek sınav formatında sorularla ehliyet sınavına hazırlan.",
  authors: [{ name: "Fatih Emin Çakıroğlu", url: "https://fatihemincakiroglu.com/" }],
  creator: "Fatih Emin Çakıroğlu",
  publisher: "Fatih Emin Çakıroğlu",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "8wJHMYdLAcP8X2sRmVnSH5R5WNvFxVbPp7NdIcVe1t8",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "EhliyetAl",
    title: "Ehliyet Sınavı Soruları 2026 | Çıkmış Ehliyet Sınavları",
    description:
      "2026 ehliyet sınavı sorularını ve çıkmış ehliyet sınavlarını ücretsiz çöz! Trafik, ilk yardım, motor bilgisi soruları ve deneme sınavlarıyla hazırlan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehliyet Sınavı Soruları 2026 | Çıkmış Ehliyet Sınavları",
    description:
      "2026 ehliyet sınavı sorularını ve çıkmış ehliyet sınavlarını ücretsiz çöz!",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EhliyetAl",
  },
};

const themeInitScript = `
try {
  var theme = localStorage.getItem('ehliyetal:theme:v1');
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-body antialiased">
        <Header />
        <Breadcrumb />
        {children}
        <Footer />
        <BottomNav />
        <PwaRegister />
      </body>
    </html>
  );
}

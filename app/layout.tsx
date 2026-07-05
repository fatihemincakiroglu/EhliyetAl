import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plexmono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const SITE_URL = "https://ehliyet-al.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EhliyetAl — Ehliyet Sınavı Hazırlık",
  description:
    "Trafik, motor, ilkyardım ve çevre konularında gerçek sınav formatında sorularla ehliyet sınavına hazırlan.",
  authors: [{ name: "Fatih Emin Çakıroğlu", url: "https://fatihemincakiroglu.com/" }],
  creator: "Fatih Emin Çakıroğlu",
  publisher: "Fatih Emin Çakıroğlu",
};

const themeInitScript = `
try {
  var theme = localStorage.getItem('ehliyetal:theme:v1');
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.setAttribute('data-theme', theme);
  }
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
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}

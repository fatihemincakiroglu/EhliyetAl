import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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

export const metadata: Metadata = {
  title: "EhliyetAl — Ehliyet Sınavı Hazırlık",
  description:
    "Trafik, motor, ilkyardım ve çevre konularında gerçek sınav formatında sorularla ehliyet sınavına hazırlan.",
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
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllMonthlyExams, getMonthlyExam } from "@/lib/monthlyExams";
import MonthlyExamClient from "./MonthlyExamClient";

export function generateStaticParams() {
  return getAllMonthlyExams().map((e) => ({
    yil: String(e.year),
    ay: e.urlSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ yil: string; ay: string }>;
}): Promise<Metadata> {
  const { yil, ay } = await params;
  const exam = getMonthlyExam(Number(yil), ay);
  if (!exam) return {};

  const title = `${exam.label} — Ücretsiz Çöz | EhliyetAl`;
  const description = `${exam.label}: trafik, motor, ilk yardım ve çevre konularından 50 soruluk sabit test, 60 dakika süre ve %70 geçme barajıyla gerçek sınav formatında ücretsiz çöz.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ehliyetal.net${exam.href}`,
    },
  };
}

export default async function MonthlyExamPage({
  params,
}: {
  params: Promise<{ yil: string; ay: string }>;
}) {
  const { yil, ay } = await params;
  const exam = getMonthlyExam(Number(yil), ay);

  if (!exam) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://ehliyetal.net/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aylık Sınavlar",
        item: "https://ehliyetal.net/aylik-sinavlar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: exam.label,
        item: `https://ehliyetal.net${exam.href}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MonthlyExamClient
        year={exam.year}
        month={exam.month}
        monthName={exam.monthName}
      />
    </>
  );
}

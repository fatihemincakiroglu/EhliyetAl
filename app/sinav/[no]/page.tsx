import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FIXED_EXAM_COUNT } from "@/lib/questions";
import FixedExamClient from "./FixedExamClient";

export function generateStaticParams() {
  return Array.from({ length: FIXED_EXAM_COUNT }, (_, i) => ({
    no: String(i + 1),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ no: string }>;
}): Promise<Metadata> {
  const { no } = await params;
  const examNumber = Number(no);
  if (!Number.isInteger(examNumber) || examNumber < 1 || examNumber > FIXED_EXAM_COUNT) {
    return {};
  }

  const title = `Ehliyet Deneme Sınavı ${examNumber} — Ücretsiz Çöz | EhliyetAl`;
  const description = `Ehliyet deneme sınavı ${examNumber}: trafik, motor, ilk yardım ve çevre konularından 50 soruluk sabit test, 60 dakika süre ve %70 geçme barajıyla gerçek sınav formatında.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ehliyetal.net/sinav/${examNumber}`,
    },
  };
}

export default async function FixedExamPage({
  params,
}: {
  params: Promise<{ no: string }>;
}) {
  const { no } = await params;
  const examNumber = Number(no);

  if (!Number.isInteger(examNumber) || examNumber < 1 || examNumber > FIXED_EXAM_COUNT) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://ehliyetal.net/" },
      { "@type": "ListItem", position: 2, name: "Sınav Simülasyonu", item: "https://ehliyetal.net/sinav" },
      {
        "@type": "ListItem",
        position: 3,
        name: `Deneme Sınavı ${examNumber}`,
        item: `https://ehliyetal.net/sinav/${examNumber}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FixedExamClient examNumber={examNumber} />
    </>
  );
}

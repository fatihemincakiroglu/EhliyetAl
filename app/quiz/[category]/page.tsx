import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/questions";
import CategoryQuizStart from "@/components/CategoryQuizStart";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const title = `${category.name} Soruları | EhliyetAl`;
  const description = `${category.description}. ${category.questions.length} soruluk özgün alıştırma testiyle çalış, zorluk seviyesine göre filtrele.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ehliyetal.net/quiz/${category.slug}`,
    },
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: `${category.name} Soruları`,
    description: category.description,
    educationalLevel: "Beginner",
    about: {
      "@type": "Thing",
      name: category.name,
    },
    numberOfQuestions: category.questions.length,
    url: `https://ehliyetal.net/quiz/${category.slug}`,
    hasPart: category.questions.slice(0, 10).map((q) => ({
      "@type": "Question",
      name: q.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <CategoryQuizStart category={category} />
    </>
  );
}

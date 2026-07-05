import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/questions";
import QuizRunner from "@/components/QuizRunner";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
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

  return <QuizRunner category={category} />;
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Lightbulb,
  AlertTriangle,
  ListChecks,
  Quote,
  Newspaper,
  Trophy,
  ClipboardList,
  Car,
  Signpost,
  HeartPulse,
  Wind,
  SquareParking,
  Eye,
  Wallet,
  RotateCcw,
  HelpCircle,
  Users,
  TrendingDown,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blog";

const SITE_URL = "https://ehliyetal.net";

const icons: Record<string, LucideIcon> = {
  Trophy,
  AlertTriangle,
  ClipboardList,
  Car,
  Signpost,
  HeartPulse,
  Lightbulb,
  Wind,
  SquareParking,
  Eye,
  Wallet,
  RotateCcw,
  HelpCircle,
  Users,
  TrendingDown,
  Sparkles,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı | EhliyetAl" };
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | EhliyetAl`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: "EhliyetAl",
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-5">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="font-display font-black text-[22px] sm:text-2xl leading-tight text-ink mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display font-extrabold text-lg sm:text-xl text-ink mt-7 mb-3">{block.text}</h3>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2.5 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink font-medium text-[16px] leading-[1.7]">
              <span className="mt-[0.6em] h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="flex flex-col gap-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3.5">
              <span className="flex items-center justify-center shrink-0 h-8 w-8 rounded-xl bg-primary text-white font-display font-black text-sm">
                {i + 1}
              </span>
              <span className="text-ink font-medium text-[16px] leading-[1.7] pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div className="flex gap-3 rounded-2xl bg-sun-wash p-4 sm:p-5 mb-6">
          <Lightbulb size={22} strokeWidth={2.4} className="text-sun shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">{block.text}</p>
        </div>
      );
    case "warning":
      return (
        <div className="flex gap-3 rounded-2xl bg-danger-wash p-4 sm:p-5 mb-6">
          <AlertTriangle size={22} strokeWidth={2.4} className="text-danger shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-danger-ink leading-relaxed">{block.text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="flex gap-3 rounded-2xl bg-primary-wash p-5 my-7">
          <Quote size={20} strokeWidth={2.4} className="text-primary shrink-0 mt-1" />
          <p className="font-display font-extrabold text-lg text-ink leading-relaxed">{block.text}</p>
        </blockquote>
      );
    case "faq":
      return (
        <div className="mt-10 mb-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-xl bg-primary-wash text-primary flex items-center justify-center">
              <ListChecks size={18} strokeWidth={2.4} />
            </span>
            <h2 className="font-display font-black text-[22px] text-ink">Sık Sorulan Sorular</h2>
          </div>
          <div className="flex flex-col gap-3">
            {block.items.map((item, i) => (
              <div key={i} className="rounded-2xl border-2 border-line bg-surface p-4 sm:p-5">
                <p className="font-display font-extrabold text-[16px] text-ink mb-1.5">{item.q}</p>
                <p className="text-[15px] font-medium text-ink-soft leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function buildJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "EhliyetAl" },
    publisher: { "@type": "Organization", name: "EhliyetAl" },
    dateModified: post.updated,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  const faqBlock = post.blocks.find((b) => b.type === "faq");
  const graph: object[] = [article, breadcrumb];
  if (faqBlock && faqBlock.type === "faq") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqBlock.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }
  return graph;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Icon = icons[post.icon] ?? Newspaper;
  const related = getRelatedPosts(post, 3);
  const jsonLd = buildJsonLd(post);

  return (
    <div className="bg-paper">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-6 min-h-11"
        >
          <ArrowLeft size={16} strokeWidth={2.6} />
          Bloga dön
        </Link>

        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-9 h-9 rounded-xl bg-primary-wash text-primary flex items-center justify-center">
            <Icon size={18} strokeWidth={2.4} />
          </span>
          <span className="text-[13px] font-extrabold text-primary">{post.category}</span>
        </div>

        <h1 className="font-display font-black text-[28px] sm:text-4xl text-ink leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-[13px] font-bold text-ink-soft mb-8 pb-6 border-b-2 border-line">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} strokeWidth={2.4} />
            {post.readingMinutes} dk okuma
          </span>
        </div>

        <article>
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t-2 border-line">
            <h2 className="font-display font-black text-xl text-ink mb-4">İlgili Yazılar</h2>
            <div className="flex flex-col gap-3">
              {related.map((r) => {
                const RIcon = icons[r.icon] ?? Newspaper;
                return (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="card group flex items-center gap-3 rounded-2xl border-2 border-line bg-surface px-4 py-3"
                  >
                    <span className="w-9 h-9 rounded-xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
                      <RIcon size={17} strokeWidth={2.4} />
                    </span>
                    <span className="flex-1 min-w-0 font-extrabold text-[15px] text-ink">{r.title}</span>
                    <ArrowRight
                      size={17}
                      strokeWidth={2.5}
                      className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-primary-wash p-6 text-center">
          <p className="font-display font-black text-xl text-ink mb-4">Hazır hissediyor musun?</p>
          <Link
            href="/sinav"
            className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 h-12 text-[15px]"
          >
            Deneme sınavı çöz
            <ArrowRight size={17} strokeWidth={2.6} />
          </Link>
        </div>
      </main>
    </div>
  );
}

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
        <p className="text-ink-soft text-[15px] leading-[1.8] mb-5">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="font-display text-xl sm:text-2xl text-ink mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-lg text-ink mt-7 mb-3">{block.text}</h3>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2.5 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink-soft text-[15px] leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
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
              <span className="flex items-center justify-center shrink-0 h-7 w-7 rounded-full bg-gold-wash text-gold font-display text-sm">
                {i + 1}
              </span>
              <span className="text-ink-soft text-[15px] leading-relaxed pt-0.5">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div className="flex gap-3 rounded-2xl bg-gold-wash border border-gold-soft/40 p-4 sm:p-5 mb-6">
          <Lightbulb size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">{block.text}</p>
        </div>
      );
    case "warning":
      return (
        <div className="flex gap-3 rounded-2xl bg-danger-wash border border-danger/30 p-4 sm:p-5 mb-6">
          <AlertTriangle size={20} className="text-danger shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">{block.text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="flex gap-3 border-l-2 border-gold pl-4 sm:pl-5 my-7">
          <Quote size={18} className="text-gold shrink-0 mt-1" />
          <p className="font-display text-lg text-ink leading-relaxed italic">
            {block.text}
          </p>
        </blockquote>
      );
    case "faq":
      return (
        <div className="mt-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <ListChecks size={18} className="text-gold" />
            <h2 className="font-display text-xl text-ink">Sık Sorulan Sorular</h2>
          </div>
          <div className="flex flex-col gap-3">
            {block.items.map((item, i) => (
              <div key={i} className="rounded-xl border border-line bg-surface p-4">
                <p className="font-display text-base text-ink mb-1.5">{item.q}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{item.a}</p>
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
    <div className="min-h-screen bg-paper">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/blog"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Bloga dön
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <Icon size={18} />
          </span>
          <span className="font-data text-xs uppercase tracking-[0.15em] text-gold">
            {post.category}
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-4xl text-ink leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 font-data text-xs text-ink-soft/80 mb-8 pb-8 border-b border-line">
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readingMinutes} dk okuma
          </span>
        </div>

        <article>
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t border-line">
            <h2 className="font-display text-lg text-ink mb-4">İlgili Yazılar</h2>
            <div className="flex flex-col gap-3">
              {related.map((r) => {
                const RIcon = icons[r.icon] ?? Newspaper;
                return (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 hover:border-gold-soft hover:bg-gold-wash transition-colors"
                  >
                    <span className="rounded-lg bg-gold-wash p-2 text-gold shrink-0">
                      <RIcon size={16} />
                    </span>
                    <span className="flex-1 min-w-0 font-display text-sm text-ink">
                      {r.title}
                    </span>
                    <ArrowRight
                      size={15}
                      className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-2xl gold-gradient text-white p-6 text-center">
          <p className="font-display text-lg mb-3">Hazır hissediyor musun?</p>
          <Link
            href="/sinav"
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 px-5 py-2.5 font-display text-sm transition-colors"
          >
            Deneme sınavı çöz
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}

import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/blog/articles";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://otaout.com";

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  const slugs = getAllSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const isEs = locale === "es";
  const title = isEs ? article.title.es : article.title.en;
  const description = isEs ? article.excerpt.es : article.excerpt.en;
  const url = isEs
    ? `${BASE_URL}/blog/${slug}`
    : `${BASE_URL}/en/blog/${slug}`;

  return {
    title: `${title} | OTAout`,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE_URL}/blog/${slug}`,
        en: `${BASE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "OTAout",
      locale: isEs ? "es_ES" : "en_US",
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const isEs = locale === "es";
  const title = isEs ? article.title.es : article.title.en;
  const content = isEs ? article.content.es : article.content.en;
  const category = isEs ? article.category.es : article.category.en;
  const minRead = isEs ? "min de lectura" : "min read";
  const backLabel = isEs ? "Volver al blog" : "Back to blog";
  const homeLabel = isEs ? "Inicio" : "Home";
  const blogPath = locale === "es" ? "/blog" : "/en/blog";
  const homePath = locale === "es" ? "/" : "/en";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: isEs ? article.excerpt.es : article.excerpt.en,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "OTAout",
    },
    publisher: {
      "@type": "Organization",
      name: "OTAout",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": isEs
        ? `${BASE_URL}/blog/${slug}`
        : `${BASE_URL}/en/blog/${slug}`,
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <article className="mx-auto max-w-[800px] px-6 py-12 md:px-12 md:py-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[#64748B]"
          >
            <Link
              href={homePath}
              className="transition-colors hover:text-[#0F172A]"
            >
              {homeLabel}
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={blogPath}
              className="transition-colors hover:text-[#0F172A]"
            >
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="truncate text-[#0F172A]">{title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#FCE8E2] px-3 py-1 text-xs font-medium text-[#E8440A]">
                {category}
              </span>
              <span className="text-sm text-[#64748B]">
                {article.readingTime} {minRead}
              </span>
              <time
                className="text-sm text-[#64748B]"
                dateTime={article.date}
              >
                {new Date(article.date).toLocaleDateString(
                  isEs ? "es-ES" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </time>
            </div>
            <h1 className="font-syne text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
              {title}
            </h1>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-syne prose-headings:font-bold prose-headings:text-[#0F172A]
              prose-h2:mt-10 prose-h2:text-2xl
              prose-h3:mt-6 prose-h3:text-xl
              prose-p:leading-relaxed prose-p:text-[#374151]
              prose-strong:text-[#0F172A]
              prose-ul:text-[#374151]
              prose-li:marker:text-[#E8440A]
              prose-a:text-[#E8440A] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Back to blog */}
          <div className="mt-12 border-t border-black/5 pt-8">
            <Link
              href={blogPath}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#E8440A] transition-colors hover:text-[#c9380a]"
            >
              ← {backLabel}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

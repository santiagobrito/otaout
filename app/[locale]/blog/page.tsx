import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/blog/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://otaout.com";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Blog | Estrategias de reservas directas | OTAout"
    : "Blog | Direct booking strategies | OTAout";
  const description = isEs
    ? "Estrategias, guías y consejos para maximizar tus reservas directas y reducir la dependencia de las OTAs."
    : "Strategies, guides, and tips to maximize your direct bookings and reduce OTA dependency.";

  return {
    title,
    description,
    alternates: {
      canonical: isEs ? `${BASE_URL}/blog` : `${BASE_URL}/en/blog`,
      languages: {
        es: `${BASE_URL}/blog`,
        en: `${BASE_URL}/en/blog`,
      },
    },
    openGraph: {
      title,
      description,
      url: isEs ? `${BASE_URL}/blog` : `${BASE_URL}/en/blog`,
      siteName: "OTAout",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEs = locale === "es";
  const articles = getAllArticles();

  const subtitle = isEs
    ? "Estrategias para maximizar tus reservas directas"
    : "Strategies to maximize your direct bookings";

  const readMore = isEs ? "Leer artículo" : "Read article";
  const minRead = isEs ? "min de lectura" : "min read";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA]">
        {/* Header */}
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24">
            <h1 className="font-syne text-4xl font-bold text-[#0F172A] md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#64748B]">{subtitle}</p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const href = `/${locale === "es" ? "" : "en/"}blog/${article.slug}`;
              return (
                <Link
                  key={article.slug}
                  href={href}
                  className="group flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white transition-shadow hover:shadow-lg"
                >
                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Category + meta */}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-[#FCE8E2] px-3 py-1 text-xs font-medium text-[#E8440A]">
                        {isEs ? article.category.es : article.category.en}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {article.readingTime} {minRead}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-syne text-lg font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#E8440A]">
                      {isEs ? article.title.es : article.title.en}
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">
                      {isEs ? article.excerpt.es : article.excerpt.en}
                    </p>

                    {/* Date + read more */}
                    <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                      <time className="text-xs text-[#64748B]" dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString(
                          isEs ? "es-ES" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </time>
                      <span className="text-sm font-medium text-[#E8440A] transition-colors group-hover:text-[#c9380a]">
                        {readMore} →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

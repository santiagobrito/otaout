import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Pains from "@/components/sections/Pains";
import Solution from "@/components/sections/Solution";
import Pricing from "@/components/sections/Pricing";
import WhyUs from "@/components/sections/WhyUs";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

type Props = {
  params: { locale: string };
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Pains />
        <Solution />
        <Pricing />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

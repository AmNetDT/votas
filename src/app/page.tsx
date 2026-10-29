import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Payment from "@/components/Home/Payment";
import Benefit from "@/components/Home/Benefit";
import Spend from "@/components/Home/Spend";
import Mobile from "@/components/Home/Mobile";
import Search from "@/components/Home/Search";
import Solution from "@/components/Home/Solution";
import ContactForm from "@/components/Contact/Form";
import DownloadButton from "@/components/ui/DownloadButton";

export const metadata: Metadata = {
  title: "Votas",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Payment />
      <Benefit />
      <Spend />
      <Mobile />
      <Search />
      <Solution />

      {/* PDF Download Section */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-600 dark:text-slate-600 mb-3">
            Want to learn more?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Download our company brochure with features.
          </p>
          <DownloadButton
            fileUrl="/files/votas-brochure.pdf"
            fileName="Votas-Brochure.pdf"
          />
        </div>
      </section>

      <ContactForm />
    </main>
  );
}

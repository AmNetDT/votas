import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Payment from "@/components/Home/Payment";
import Benefit from "@/components/Home/Benefit";
import Spend from "@/components/Home/Spend";
// import Method from "@/components/Home/Method";
import Mobile from "@/components/Home/Mobile";
import Search from "@/components/Home/Search";
// import Pricing from "@/components/Home/Pricing";
import Solution from "@/components/Home/Solution";
import ContactForm from "@/components/Contact/Form";

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
      {/* <Method /> */}
      <Mobile />
      <Search />
      {/* <Pricing /> */}
      <Solution />
      <ContactForm />

      <p className="text-DeepOcean font-normal text-xl max-w-80 pt-3 pb-7 dark:text-white/60">
        09024550723 &nbsp; 08135277641
      </p>
    </main>
  );
}

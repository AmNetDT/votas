"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { BeneifitImage } from "@/app/api/data";

const Benefit = () => {
  const ref = useRef(null);

  return (
    <section className="dark:bg-darkmode py-8 sm:py-14 overflow-hidden w-full">
      <div className="container max-w-7xl px-3 sm:px-6 mx-auto">
        {/* Main Card Wrapper */}
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-hero-bg rounded-2xl sm:rounded-3xl py-6 px-4 sm:p-10 md:p-14 lg:p-16 shadow-lg border border-slate-200/50 dark:border-white/10 w-full"
        >
          {/* Section Heading */}
          <div className="w-full max-w-3xl">
            <h2 className="font-bold text-xl sm:text-3xl md:text-4xl leading-snug text-midnight_text dark:text-white">
              How we protect your{" "}
              <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-2.5 py-0.5 rounded-lg text-xl sm:text-3xl md:text-4xl my-1">
                election
              </span>{" "}
              from disruption to declaration.
            </h2>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center mt-6 sm:mt-12">
            {/* Main Image */}
            <div className="lg:col-span-6 col-span-12 w-full order-2 lg:order-1">
              <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/60 dark:border-white/10">
                <Image
                  src="/images/benefit/benefit.jpeg"
                  alt="Election integrity solution"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Content & Benefits List */}
            <div className="lg:col-span-6 col-span-12 w-full order-1 lg:order-2 flex flex-col justify-center">
              {/* Highlight Subtext */}
              <p className="text-base sm:text-xl md:text-2xl text-midnight_text font-semibold dark:text-white leading-relaxed mb-6 sm:mb-8">
                We protect the entire election ecosystem, from the polling unit
                to the collation center, ensuring that every vote is counted and
                every voice is heard.
              </p>

              {/* Benefits Cards */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {BeneifitImage.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 w-full"
                  >
                    <div className="shrink-0 p-1.5 sm:p-2 bg-white dark:bg-slate-800 rounded-lg shadow-xs">
                      <Image
                        src={item.image}
                        alt="Benefit icon"
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-white/80 leading-normal pt-0.5 break-words">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <div className="mt-6 sm:mt-8 flex justify-start w-full">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-white font-medium py-3 px-6 sm:px-8 rounded-xl border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary active:scale-95 text-sm sm:text-base"
                >
                  <span>Contact Us</span>
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="18"
                    height="18"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

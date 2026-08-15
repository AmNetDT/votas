"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { BeneifitImage } from "@/app/api/data";

const Benefit = () => {
  const ref = useRef(null);

  return (
    <section className="dark:bg-darkmode py-12 md:py-20 overflow-hidden">
      <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
        {/* Main Card Wrapper */}
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-hero-bg rounded-3xl py-10 px-6 sm:px-10 md:py-16 lg:py-20 lg:px-16 shadow-xl border border-slate-200/50 dark:border-white/10"
        >
          {/* Section Heading */}
          <div className="max-w-3xl">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-midnight_text dark:text-white">
              How we protect your{" "}
              <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-xl text-2xl sm:text-3xl md:text-4xl my-1">
                election
              </span>{" "}
              from disruption to declaration.
            </h2>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-10 md:mt-14">
            {/* Feature Image */}
            <div className="lg:col-span-6 col-span-12 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/60 dark:border-white/10">
                <Image
                  src="/images/benefit/benefit.jpeg"
                  alt="Election integrity solution"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Content Details & Benefits List */}
            <div className="lg:col-span-6 col-span-12 order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-lg sm:text-xl md:text-2xl text-midnight_text font-semibold dark:text-white leading-relaxed mb-8">
                We protect the entire election ecosystem, from the polling unit
                to the collation center, ensuring that every vote is counted and
                every voice is heard.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {BeneifitImage.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3.5 sm:p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 transition-all duration-300 hover:border-primary/40"
                  >
                    <div className="shrink-0 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-xs">
                      <Image
                        src={item.image}
                        alt="Benefit icon"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-white/80 leading-snug pt-0.5">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <div className="mt-8 sm:mt-10 flex justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white font-medium py-3.5 px-8 rounded-xl border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary hover:shadow-lg focus:outline-hidden"
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

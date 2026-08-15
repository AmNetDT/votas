"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PaymentImage } from "@/app/api/data";
import Image from "next/image";

const Payment = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = (index: any) => ({
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 + index * 0.4 },
  });

  const paymentItems = [
    "Arrival & Check-in",
    "Chain of Command",
    "BVAS State",
    "Accreditation ",
    "Reporting",
  ];

  return (
    <section id="started" className="dark:bg-darkmode py-14">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <motion.div {...TopAnimation}>
          <div className="px-4 lg:px-12">
            <h2 className="text-center font-semibold md:text-35 sm:text-28 text-24 mb-8 text-midnight_text dark:text-white lg:mx-44">
              We deploy confidence
              <span className="text-primary"> — in every polling unit, </span>
              for every result, for every voter.
            </h2>
            <p
              className={`text-center text-blue-500 md:text-18 text-base font-medium mb-3`}
            >
              With real-time monitoring, secure transmission, and verified data,
              <br />
              we protect your election from disruption to declaration.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto px-4">
            {paymentItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium 
                          bg-slate-100 dark:bg-white/5 
                          text-slate-700 dark:text-slate-200 
                          border border-slate-200/80 dark:border-white/10 
                          hover:border-primary/50 dark:hover:border-primary/50 
                          hover:text-primary dark:hover:text-primary
                          transition-all duration-300 ease-in-out cursor-default shadow-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-start sm:mt-20 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
            {PaymentImage.map((item, index) => (
              <div key={index}>
                <motion.div {...bottomAnimation(index)}>
                  <div className="rounded-full">
                    <Image
                      src={item.image}
                      alt={`Brand: ${item.title}`}
                      width={80}
                      height={80}
                      className="rounded-full bg-white p-4 shadow-lg dark:bg-midnight_text"
                    />
                  </div>
                  <div className="py-4">
                    <p className="lg:text-25 text-22 font-medium text-midnight_text dark:text-white">
                      {item.title}
                    </p>
                  </div>
                  <div className="mr-2">
                    <p className="text-base text-muted dark:text-white/60">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

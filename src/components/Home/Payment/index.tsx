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

        <div className="w-full flex justify-center mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl px-4 sm:px-6">
            {PaymentImage.map((item, index) => (
              <motion.div
                key={index}
                {...bottomAnimation(index)}
                className="group relative flex flex-col items-start p-6 sm:p-8 rounded-2xl 
                       bg-white/60 dark:bg-slate-900/50 
                       border border-slate-200/80 dark:border-white/10 
                       backdrop-blur-md shadow-xs hover:shadow-xl hover:border-primary/40 dark:hover:border-primary/40 
                       transition-all duration-300 ease-in-out"
              >
                {/* Icon / Image Container */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-800 
                              p-3 sm:p-4 shadow-md group-hover:shadow-primary/20 
                              border border-slate-100 dark:border-slate-700/50 
                              flex items-center justify-center 
                              transition-transform duration-300 group-hover:scale-105"
                  >
                    <Image
                      src={item.image}
                      alt={`Brand: ${item.title}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content Header */}
                <h3 className="text-xl sm:text-2xl font-bold text-midnight_text dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Details Paragraph */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/80 leading-relaxed">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

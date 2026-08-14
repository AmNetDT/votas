"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const Spend: FC = () => {
  const ref = useRef(null);

  const [isModalOpen, setIsVideoOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsVideoOpen(true);
  };

  const closeModal = (): void => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref}>
          <div className="text-center">
            <h2 className="md:text-35 sm:text-28 text-24 text-midnight_text font-semibold mb-5 dark:text-white">
              We protect your interests and build
              <br />
              confidence in the event of
              <span className="bg-border dark:bg-darkHeroBg rounded-lg text-primary max-w-max ml-2">
                litigation.
              </span>
            </h2>
            <p className="text-17 text-muted dark:text-white/60 mx-1 lg:mx-64 mb-3">
              Legal challenges can be unpredictable, but you don't have to face
              them unprepared. We safeguard your interests and provide the
              guidance you need to stay confident, ensuring that if litigation
              ever arises, you remains fully protected and secure.
            </p>
          </div>
          <div className="flex justify-center items-center px-4">
            {/* Thumbnail Container */}
            <div className="relative overflow-hidden mt-14 rounded-2xl group max-w-[600px] w-full shadow-2xl">
              <Image
                src="/images/spend/spend.png"
                alt="Video Thumbnail"
                width={600}
                height={380}
                className="rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay on hover for better play button contrast */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Perfectly Centered Play Button */}
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 
                     flex items-center justify-center w-16 h-16 rounded-full bg-white/90 dark:bg-darkmode/90 
                     text-midnight_text hover:text-primary hover:bg-white hover:scale-110 
                     shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
                onClick={openModal}
                aria-label="Play Video"
              >
                <Icon icon="solar:play-bold" className="w-7 h-7 ml-1" />
              </button>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
                onClick={closeModal} // Closes modal when clicking backdrop
              >
                <div
                  className="bg-white dark:bg-darkmode rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl transition-all scale-100"
                  onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking inside video content
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between border-b border-border dark:border-dark_border p-4 sm:p-5">
                    <h3 className="text-lg font-semibold text-midnight_text dark:text-white">
                      Video Presentation
                    </h3>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white 
                           p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      <Icon icon="lucide:x" className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Responsive 16:9 Aspect Ratio Iframe Wrapper */}
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full border-0"
                      src="https://www.youtube.com/embed/l31SAe-sfrU?autoplay=1&rel=0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spend;

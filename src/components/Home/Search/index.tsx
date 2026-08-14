"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { review } from "@/app/api/data";

const Search = () => {
  const ref = useRef(null);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`full-${i}`}
          icon="ph:star-fill"
          className="w-5 h-5 text-yellow-500"
        />,
      );
    }

    if (halfStars) {
      stars.push(
        <Icon
          key="half"
          icon="ph:star-half-fill"
          className="w-5 h-5 text-yellow-500"
        />,
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          icon="ph:star-bold"
          className="w-5 h-5 text-yellow-500"
        />,
      );
    }

    return stars;
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-hero-bg rounded-3xl p-2"
        >
          <div>
            {review.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl lg:py-16 sm:py-10 py-5 my-2 lg:px-24 sm:px-12 px-6 dark:bg-darkmode"
              >
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-7">
                  <div>
                    <div className="mb-10">
                      <Image
                        src="/images/search/double.png"
                        alt="image"
                        width={52}
                        height={39}
                      />
                    </div>
                    <p className="text-midnight_text dark:text-white text-base mb-9">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="flex sm:items-center sm:gap-2 sm:flex-row flex-col">
                        <h3 className="font-medium text-base text-midnight_text dark:text-white">
                          {item.name}
                        </h3>
                        <Icon
                          icon="bytesize:minus"
                          className="sm:block hidden"
                        />
                        <h5 className="text-muted dark:text-muted text-base">
                          {item.post}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:items-center items-start lg:justify-evenly sm:flex-row flex-col lg:gap-0 gap-10">
                    <div>
                      <div className="sm:mb-8 mb-5">
                        <div className="flex gap-2 mb-3">
                          {renderStars(parseFloat(item.appstorerating))}
                        </div>
                        <p className="text-muted text-base">
                          <span className="text-midnight_text dark:text-white font-bold">
                            {item.appstorerating}
                          </span>
                          /5 — From 18+ ratings
                        </p>
                      </div>
                      <div>
                        <Link href="#">
                          <Image
                            src="/images/search/app.png"
                            alt="app store"
                            width={130}
                            height={44}
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="sm:mb-8 mb-5">
                        <div className="flex gap-2 mb-3">
                          {renderStars(parseFloat(item.gplayrating))}
                        </div>
                        <p className="text-muted text-base">
                          <span className="text-midnight_text dark:text-white font-bold">
                            {item.gplayrating}
                          </span>
                          /5 — From 18+ ratings
                        </p>
                      </div>
                      <div>
                        <Link href="/">
                          <Image
                            src="/images/search/google.png"
                            alt="google play"
                            width={130}
                            height={44}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

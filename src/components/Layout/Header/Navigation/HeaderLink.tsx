"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const path = usePathname();

  return (
    <div className="relative">
      <Link
        href={item.href}
        className={`text-18 flex font-normal items-center hover:text-primary dark:hover:text-primary ${
          path === item.href
            ? "text-primary hover:text-grey"
            : "text-midnight_text dark:text-white "
        }`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default HeaderLink;

import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        className="flex items-center justify-between w-full py-2 text-black focus:outline-hidden"
      >
        {item.label}
      </Link>
    </div>
  );
};

export default MobileHeaderLink;

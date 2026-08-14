import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/app/api/data";

const Footer = () => {
  return (
    <footer className="pt-8 bg-midnight_text relative after:content-[''] after:absolute after:bg-[url('/images/footer/bgline.png')] after:bg-no-repeat after:w-52 after:h-24 after:right-0 after:top-28 xl:after:block after:hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-2">
        <div className="flex items-center sm:flex-row flex-col justify-between py-10 mt-8">
          <p className="text-16 text-foottext sm:mb-0 mb-4">
            © Copyright {new Date().getFullYear()}. All rights reserved by{" "}
            <Link
              href="https://votas.com.ng/"
              target="_blank"
              className="hover:text-primary"
            >
              Votas
            </Link>
          </p>
          <div className="flex gap-4">
            {footerLinks.slice(14, 17).map((item, index) => (
              <div key={index} className="">
                <Link href="#" className="text-foottext hover:text-primary">
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

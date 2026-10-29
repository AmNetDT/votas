import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Nicktio",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Book an Appointment? Reach out to us at info@votas.com.ng and we’ll get back to you promptly."
        breadcrumbLinks={breadcrumbLinks}
      />
      <p className="text-DeepOcean font-normal text-xl max-w-80 pt-3 pb-7 dark:text-white/60">
        09024550723 &nbsp; 08135277641
      </p>
      {/* <ContactInfo /> */}
      <ContactForm />
    </>
  );
};

export default page;

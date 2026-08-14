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
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default page;

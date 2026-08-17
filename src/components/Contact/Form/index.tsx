"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

const ContactForm = () => {
  const initialFormState: FormData = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    setErrorMessage("");
    setSubmitted(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/62cadbfe5a3b4c64363c883666587606",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setSubmitted(true);
        resetForm();
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="dark:bg-darkmode pb-24 pt-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Form Column */}
          <div className="lg:col-span-6 col-span-12">
            <h2 className="max-w-md text-3xl sm:text-4xl font-bold mb-4 dark:text-white">
              Request a Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have questions? Reach out to us at{" "}
              <a
                href="mailto:info@votas.com.ng"
                className="text-primary font-medium underline hover:text-blue-600"
              >
                info@votas.com.ng
              </a>{" "}
              and we&apos;ll respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium pb-2 dark:text-white"
                  >
                    First Name*
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium pb-2 dark:text-white"
                  >
                    Last Name*
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium pb-2 dark:text-white"
                  >
                    Email Address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium pb-2 dark:text-white"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 123 456 7890"
                    className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Appointment Date & Time */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium pb-2 dark:text-white"
                  >
                    Preferred Date*
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium pb-2 dark:text-white"
                  >
                    Preferred Time*
                  </label>
                  <input
                    id="time"
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Submission Feedback Messages */}
              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-600 dark:text-green-400 text-sm">
                  ✓ Your request has been sent successfully! We will contact you
                  shortly.
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-600 dark:text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loader}
                  className="w-full sm:w-auto bg-primary rounded-lg text-white py-3.5 px-8 mt-2 hover:bg-blue-700 transition-all cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loader ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting...
                    </>
                  ) : (
                    "Schedule Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 col-span-12 flex justify-center">
            <Image
              src="/images/contact-page/contact.jpg"
              alt="Contact Us"
              width={600}
              height={500}
              priority
              className="w-full h-auto max-w-lg lg:max-w-none rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

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
    <section className="dark:bg-darkmode py-8 sm:py-16 md:py-24 overflow-hidden w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Form Column */}
          <div className="lg:col-span-6 col-span-12 w-full">
            <div className="bg-white/50 dark:bg-slate-900/40 p-5 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm backdrop-blur-md">
              {/* Heading Section */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 dark:text-white tracking-tight">
                Request a Demo
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Book an Appointment? Reach out to us at{" "}
                <a
                  href="mailto:info@votas.com.ng"
                  className="text-primary font-semibold underline hover:text-blue-600 transition-colors"
                >
                  info@votas.com.ng
                </a>{" "}
                and we&apos;ll respond promptly.
              </p>

              {/* Form Input Group */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs sm:text-sm font-medium pb-1.5 text-gray-700 dark:text-gray-200"
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
                      className="w-full text-sm sm:text-base px-4 py-3 rounded-xl border border-slate-200 dark:border-dark_border dark:text-white bg-white dark:bg-transparent transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-xs sm:text-sm font-medium pb-1.5 text-gray-700 dark:text-gray-200"
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
                      className="w-full text-sm sm:text-base px-4 py-3 rounded-xl border border-slate-200 dark:border-dark_border dark:text-white bg-white dark:bg-transparent transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Contact Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium pb-1.5 text-gray-700 dark:text-gray-200"
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
                      className="w-full text-sm sm:text-base px-4 py-3 rounded-xl border border-slate-200 dark:border-dark_border dark:text-white bg-white dark:bg-transparent transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium pb-1.5 text-gray-700 dark:text-gray-200"
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
                      className="w-full text-sm sm:text-base px-4 py-3 rounded-xl border border-slate-200 dark:border-dark_border dark:text-white bg-white dark:bg-transparent transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Appointment Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs sm:text-sm font-medium pb-1.5 text-gray-700 dark:text-gray-200"
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
                      className="w-full text-sm sm:text-base px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 dark:border-dark_border dark:text-white bg-white dark:bg-transparent transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-xs sm:text-sm font-medium pb-1.5 text-gray-700 dark:text-gray-200"
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
                      className="w-full text-sm sm:text-base px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 dark:border-dark_border dark:text-white bg-white dark:bg-transparent transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Feedback Notifications */}
                {submitted && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm flex items-center gap-2">
                    <span>✓</span> Your request has been sent successfully! We
                    will contact you shortly.
                  </div>
                )}

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loader}
                    className="w-full sm:w-auto bg-primary text-white font-medium py-3.5 px-8 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 shadow-md shadow-primary/20"
                  >
                    {loader ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      "Schedule Appointment"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 col-span-12 flex justify-center w-full">
            <div className="relative w-full max-w-lg lg:max-w-none overflow-hidden rounded-2xl shadow-md border border-slate-200/60 dark:border-white/10">
              <Image
                src="/images/contact-page/contact.jpg"
                alt="Contact Us"
                width={600}
                height={500}
                priority
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

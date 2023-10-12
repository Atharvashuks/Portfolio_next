"use client";

import React, { useState } from "react";
import Link from "next/link";
import FormFileld from "./FormFileld";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import IconComponent from "./IconsComponent";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Context-Type": "application/json" },
    });

    if (response.ok) {
      alert("Message sent successfully");
    } else {
      alert("Email failed to send. Please try again later");
    }
  };

  const handleStateChange = (filedName: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [filedName]: value }));
  };

  return (
    <>
      <section id="contact" className="lg:pt-12 md:pt-24">
        <h2 className="text-center text-4xl font-bold text-primary-light mt-12 mb-8 md:mb-12">
          Let's Connect
        </h2>
        <div className="relative flex items-top justify-center lg:mb-28 mb:16 bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
          <div className="max-w-6xl  sm:px-4 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-primary-light dark:bg-gray-800 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-light-3 dark:text-white font-extrabold tracking-tight">
                    Let's get in touch
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-secondary-extralight dark:text-gray-400 mt-2">
                    Fill in the form to start a conversation
                  </p>
                  <IconComponent
                    isLink={false}
                    title="Sector 25, Noida"
                    linkHref=""
                  >
                    <MapPinIcon className="w-8 h-8 text-white" />
                  </IconComponent>

                  <IconComponent
                    isLink={true}
                    title="+91 8527047365"
                    linkHref="tel:+918527047365"
                  >
                    <PhoneIcon className="w-8 h-8 text-white" />
                  </IconComponent>

                  <IconComponent
                    isLink={true}
                    title="ashuksdev@gmail.com"
                    linkHref="mailto:ashuksdev@gmail.com"
                  >
                    <EnvelopeIcon className="w-8 h-8 text-white" />
                  </IconComponent>
                </div>

                <form
                  className="p-6 flex flex-col justify-center"
                  onSubmit={handleSubmit}
                >
                  <FormFileld
                    title="Name"
                    state={formData.name}
                    placeholder="Name"
                    setState={(value) => handleStateChange("name", value)}
                    isTextArea={false}
                  />
                  <FormFileld
                    title="email"
                    state={formData.email}
                    placeholder="Email"
                    setState={(value) => handleStateChange("email", value)}
                    isTextArea={false}
                  />
                  <FormFileld
                    title="Your message"
                    state={formData.message}
                    placeholder="Share your thoughts..."
                    setState={(value) => handleStateChange("message", value)}
                    isTextArea={true}
                  />
                  <button
                    type="submit"
                    value="submit"
                    className="md:w-32 bg-primary-light hover:bg-blue-dark
                     text-light-3 font-bold py-3 px-6 rounded-lg mt-3 hover:bg-primary-dark
                      hover:text-white transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

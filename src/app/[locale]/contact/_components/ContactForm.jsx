"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import formBg from './../../../../../public/images/FormBg.png'
import Image from "next/image";

const ContactForm = () => {
  const [result, setResult] = useState(""); // Moved inside the component
  const t = useTranslations("contact-us.contact-form");
  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target);
    setResult(t("loading"));
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY_EMAIL_JS);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const data = await response.json();
    // console.log(result);
    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // const data = await response.json();

    if (data.success) {
      setResult(t('success-msg'));
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={formBg}
            alt="Contact"
            width={500}
            height={266}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <form
            onSubmit={onSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex mb-4">
              <input
                type="text"
                placeholder={t("first-name")}
                name="Prénom"
                required
                className="w-1/2 mr-2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder={t("last-name")}
                name="Nom"
                required
                className="w-1/2 ml-2 p-2 border rounded"
              />
            </div>
            <input
              type="email"
              placeholder={t("email")}
              name="email"
              required
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              placeholder={t("message")}
              name="message"
              required
              className="w-full p-2 mb-4 border rounded h-32"
            ></textarea>
            <button
              type="submit"
              disabled={result!=""}
              className="w-full bg-bgPrimary text-white py-2 px-4 rounded hover:bg-bgPrimary transition duration-300"
            >
              {result ? result : t("send-btn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

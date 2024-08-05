import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations("contact-us.header");
  return (
    <>
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contactImg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
          <p className="text-xl">{t("subtitle")} </p>
        </div>
      </div>
    </>
  );
};

export default Header;

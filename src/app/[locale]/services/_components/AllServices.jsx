import React from "react";
import ServiceCard from "./ServiceCard"; // Adjust the import path as needed
import { useTranslations } from "next-intl";



const AllServices = () => {
  const t = useTranslations("services.all");
  const services = [
    {
      title: t("service1.title"),
      imgSrc: "/icons/1.jpg",
    },
    {
      title: t("service2.title"),
      imgSrc: "/icons/2.jpg",
    },
    {
      title: t("service3.title"),
      imgSrc: "/icons/3.jpg",
    },
    {
      title:t("service4.title"),
      imgSrc: "/icons/4.jpg",
    },
    {
      title:t("service5.title"),
      imgSrc: "/icons/5.jpg",
    },
  ];
  return (
    <div className="bg-hero-pattern bg-cover bg-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-bgSecondary mb-8">
          {t("title")}
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <>
              <ServiceCard
                key={index}
                title={service.title}
                imgSrc={service.imgSrc}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;

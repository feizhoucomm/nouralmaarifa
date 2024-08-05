"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
// import fram1 from "../../../../../public/images/Frame 1.png";
// import fram2 from "../../../../../public/images/Frame 2.jpg";
// import fram3 from "../../../../../public/images/Frame 3.jpg";
// import fram4 from "../../../../../public/images/Frame 4.jpg";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const HeroSection = () => {
  const t = useTranslations("accueil.hero-section");
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [fram1, fram2, fram3, fram4];
  const { locale } = useParams();

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // // Auto-sliding functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 3000); // Change slide every 5 seconds

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);
  console.log(locale);

  return (
    <div className="w-full">
      {/* Carousel */}
      {/* <div className="relative h-64 md:h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div> */}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-hero-pattern">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-hero-pattern"></span>

              <div className="p-8 sm:p-16 lg:p-20">
                <h2 className="text-2xl font-bold sm:text-3xl mb-3">
                  {t("title1")}
                </h2>
                <h2 className="text-xl md:text-2xl font-normal text-bgSecondary mb-4">
                  {/* ASSOCIATION MAROCAINE DE LA FORMATION ET LE CONSEIL */}
                  {t("title2")}
                </h2>

                <p className="mt-4 text-gray-600 line-clamp-4">
                  {t("description")}
                </p>
                <Link
                  href={`/${locale}/about`}
                  className="mt-8 inline-block rounded border border-bgSecondary bg-bgSecondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  {t("button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Content */}
      {/* <div className="container mx-auto px-4 py-8 md:py-12 bg-hero-pattern">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="w-full text-gray-600 md:w-2/3 pr-0 md:pr-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              QUI SOMMES-NOUS ?
            </h1>
            <h2 className="text-xl md:text-2xl font-normal text-bgSecondary mb-4">
              ASSOCIATION MAROCAINE DE LA FORMATION ET LE CONSEIL
            </h2>
            <p className="text-sm md:text-base mb-4">
              L'Association a été créée en août 2018 dans la ville de Benslimane
              avec pour objectif de contribuer au développement de la
              communauté. Cette initiative est née de l'expérience personnelle
              de la présidente, qui, après avoir surmonté une maladie
              (heureusement avec succès), a compris l'importance de la santé
              mentale et son impact significatif sur la santé physique. Inspirée
              par cette prise de conscience, elle a collaboré avec des
              professeurs et des formateurs p...
            </p>
            <Link
              href="/about"
              className="text-blue-600 hover:underline font-semibold"
            >
              LIRE PLUS
            </Link>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/api/placeholder/400/225"
                alt="Placeholder for video"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

//silder in timer

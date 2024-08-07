"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const HeroSection = () => {
  const t = useTranslations("accueil.hero-section");

  const { locale } = useParams();

  return (
    <div className="w-full">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-[80vh] lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              {/* <div className="bg-red-500 translate-x-1 translate-y-1 top-3 absolute"></div> */}

              <div className="relative h-64 sm:h-80 lg:h-fit rounded-lg">
                <video
                  class="absolute inset-0 top-5 h-fit w-full object-cover rounded-lg"
                  controls
                >
                  <source src="/video/vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
                  className="mt-8 inline-block rounded border border-bgSecondary bg-bgSecondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-bgSecondary focus:outline-none focus:ring active:text-bgSecondary"
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

"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import logoo from "../../../../public/images/logoo.png";
import { AlignJustify, Facebook } from "lucide-react";
import Link from "next/link";

const Navbar = ({ params }) => {
  const { locale } = params;
  const t = useTranslations("accueil.navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex px-4 md:px-16 py-4 w-full justify-between text-gray-50 bg-bgSecondary">
        <div className="flex gap-x-6">
          <Link
            href="/fr"
            locale="fr"
            className="hover:underline font-[Quicksand]"
          >
            FRANÇAIS
          </Link>
          <span>|</span>
          <Link
            href="/ar"
            locale="ar"
            className="hover:underline font-[Fustat]"
          >
            العربية
          </Link>
        </div>
        <div>
          <Link
            href="https://www.facebook.com/psycomina"
            className="group transition-all duration-200"
            target="_blank"
            rel="social-media"
          >
            <Facebook
              size={26}
              absoluteStrokeWidth
              className="group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <nav className="bg-zinc-100 text-gray-900 p-4">
        <div className="container mx-auto flex items-center justify-start gap-10">
          <div className="flex items-center md:justify-around justify-between lg:w-1/4 w-full">
            <Link
              href={`/${locale}/accueil`}
              className="flex justify-center items-center"
            >
              <Image src={logoo} alt="Logo" className="h-20 w-20" />
              <div className="ml-2 flex flex-col justify-center items-center">
                <h1 className="font-bold text-xs font-[Quicksand]">
                  NOUR EL MAARIFA
                </h1>
                <p className="text-sm font-bold font-[Fustat]">
                  جمعية نور المعرفة
                </p>
              </div>
            </Link>
            <AlignJustify
              className="md:hidden w-8 h-8 flex flex-col cursor-pointer justify-between items-center"
              size={20}
              strokeWidth={2}
              onClick={toggleMobileMenu}
            />
          </div>

          <div className="hidden uppercase lg:flex lg:gap-8 md:flex text-sm font-semibold transition-all duration-300">
            <Link
              href={`/${locale}/accueil`}
              className="hover:text-bgSecondary hover:scale-110 transition-all duration-300"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="hover:text-bgSecondary hover:scale-110 transition-all duration-300"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="hover:text-bgSecondary hover:scale-110 transition-all duration-300"
            >
              {t("services")}
            </Link>
            <Link
              href={`/${locale}/adhesion`}
              className="hover:text-bgSecondary hover:scale-110 transition-all duration-300"
            >
              {t("adhesion")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hover:text-bgSecondary hover:scale-110 transition-all duration-300"
            >
              {t("contact")}
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="container bg-blue-400 text-gray-900 p-4 font-semibold mx-auto flex flex-col gap-2 items-center">
              <Link
                href={`/${locale}/accueil`}
                className="hover:underline hover:text-bgSecondary hover:scale-110 transition-all duration-300"
              >
                {t("home")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="hover:underline hover:text-bgSecondary hover:scale-110 transition-all duration-300"
              >
                {t("about")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="hover:underline hover:text-bgSecondary hover:scale-110 transition-all duration-300"
              >
                {t("services")}
              </Link>
              <Link
                href={`/${locale}/adhesion`}
                className="hover:underline hover:text-bgSecondary hover:scale-110 transition-all duration-300"
              >
                {t("adhesion")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="hover:underline hover:text-bgSecondary hover:scale-110 transition-all duration-300"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

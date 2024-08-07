"use client";
import { useTranslations } from "next-intl";
import React from "react";
import logoo from "../../../../public/images/logoo.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
// import { Facebook } from "lucide-react";

const Footer = () => {
  const { locale } = useParams();
  const t = useTranslations("footer");
  return (
    <>
      <footer className="bg-bgPrimary text-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* A propos */}
            <div>
              <h2 className="text-xl font-bold mb-4">{t("one.title")}</h2>
              <p className="text-sm">{t("one.content")}</p>
            </div>

            {/* Liens utiles */}
            <div>
              <h2 className="text-xl font-bold mb-4">{t("tow.title")}</h2>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}/about`} className="hover:underline">
                    {t("tow.links.text1")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="hover:underline"
                  >
                    {t("tow.links.text2")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="hover:underline"
                  >
                    {t("tow.links.text3")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="hover:underline">
                    {t("tow.links.text4")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Suivez-nous */}
            <div>
              <h2 className="text-xl font-bold mb-4">{t("three.title")}</h2>
              <div className="bg-gray-200 p-4 rounded">
                <Image
                  src={logoo}
                  alt="Nour el Maarifa"
                  className="w-full max-h-[10rem] object-contain mb-2"
                />
                <p className="text-gray-800 font-bold">Nour el Maarifa</p>
                <p className="text-gray-600 text-sm mb-2">
                  {t("three.followers")}
                </p>
                <Link
                  href="https://www.facebook.com/psycomina"
                  target="_blank"
                  rel="social-media"
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  {t("three.button.text")}
                </Link>
              </div>
            </div>

            {/* Contactez-nous */}
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-xl font-bold mb-4">{t("four.title")}</h2>
              <p className="flex justify-center items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 22 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t("four.address")}
              </p>
              <p className="mb-2 flex justify-center items-center" dir="ltr">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {t("four.phone")}
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-gray-50 py-4 text-sm bg-bgSecondary">
        <p>{t("bottomText.content")} <Link className="font-bold" href="https://www.feizhoucom.com" target="_blank">Feizhoucom</Link></p>
      </div>
    </>
  );
};

export default Footer;

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import logoo from "../../../../public/images/logoo.png";
import Image from "next/image";
// import { Facebook } from "lucide-react";

const Footer = ({ params }) => {
  const { locale } = useLocale();
  const t = useTranslations("footer");
  return (
    <>
      <footer className="bg-bgPrimary text-white py-8">
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
                  <a href="#" className="hover:underline">
                    {t("tow.links.text1")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("tow.links.text2")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("tow.links.text3")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("tow.links.text4")}
                  </a>
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
                  className="w-full h-20 object-cover mb-2"
                />
                <p className="text-gray-800 font-bold">Nour el Maarifa</p>
                <p className="text-gray-600 text-sm">{t("three.followers")}</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  {t("three.button.text")}
                </button>
              </div>
            </div>

            {/* Contactez-nous */}
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-xl font-bold mb-4">{t("four.title")}</h2>
              <p className="mb-2">{t("four.address")}</p>
              <p className="mb-2" dir="ltr">{t("four.phone")}</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-4 text-sm bg-bgSecondary">
        <p>{t("bottomText.content")} </p>
      </div>
    </>
  );
};

export default Footer;

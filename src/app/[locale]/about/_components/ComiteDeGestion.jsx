import { useTranslations } from "next-intl";
import React from "react";
import pres from "./../../../../../public/images/pres.png";
import vice_pres from "./../../../../../public/images/vice-pres.png";
import Image from 'next/image'

const ComiteDeGestion = () => {
  const t = useTranslations("comite_de_gestion");
  return (
    <div className="bg-white p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">{t("title")}</h1>

      <div className="space-y-8 md:space-y-12">
        {/* Présidente */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={pres}
            alt="Mme Mina Khasoumi"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {t("presidente.nom")}
            </h2>
            <p className="text-gray-700 text-sm">{t("presidente.formation")}</p>
          </div>
        </div>

        {/* Vice-Présidente */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={vice_pres}
            alt="Mme Khadija Afdal"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {t("vice_presidente.nom")}
            </h2>
            <p className="text-gray-700 text-sm">
              {t("vice_presidente.formation")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComiteDeGestion;

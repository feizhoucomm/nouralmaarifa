import { Goal, ShieldQuestion } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import QUI_SOMMES_NOUS from "../../../../../public/images/QUI SOMMES-NOUS.png";
import Image from "next/image";

const AssociationInfo = () => {
  const t = useTranslations("qui_sommes_nous");
  const t1 = useTranslations("but_et_repercussions");
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:px-24">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
            <div className="w-full md:w-2/3 pr-0 md:pr-8">
              <div className="text-2xl flex justify-start items-center gap-3 md:text-3xl font-bold text-gray-800 mb-4">
                <ShieldQuestion size={40} absoluteStrokeWidth />
                <h1 className="">{t("title")}</h1>
              </div>
              <h2 className="text-xl md:text-2xl font-light text-bgSecondary mb-4">
                {t("association_name")}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                {t("description")}
              </p>
            </div>
            <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center">
              <Image
                src={QUI_SOMMES_NOUS}
                alt="Association "
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-start items-center gap-3 text-xl md:text-2xl font-bold text-gray-800 mb-4">
              <Goal size={40} absoluteStrokeWidth />
              <h2>{t1("title")}</h2>
            </div>
            <ul className="list-disc marker:text-bgSecondary pl-5 space-y-2 text-gray-600">
              <li>{t1("objectives.li1")}</li>
              <li>{t1("objectives.li2")}</li>
              <li>{t1("objectives.li3")}</li>
              <li>{t1("objectives.li4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationInfo;

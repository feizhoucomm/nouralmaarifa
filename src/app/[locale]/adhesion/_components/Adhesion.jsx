import { useTranslations } from "next-intl";
import React from "react";

function Adhesion() {
  const t = useTranslations("adhesion");
  return (
    <>
      {/* Left component */}
      <div className="lg:w-3/4 md:w-2/4 w-full  bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold text-bgSecondary mb-4">
          {t("avantages.title")}
        </h2>

        <h3 className="font-semibold mb-2">{t("title")}</h3>
        <ul className="list-disc pl-5 mb-4">
          <li> {t("avantages.benefit1")}</li>
          <li>{t("avantages.benefit2")}</li>
          <li>{t("avantages.benefit3")}</li>
        </ul>

        <h3 className="font-semibold mb-2">{t("documents.title")}</h3>
        <ul className="list-disc pl-5">
          <li>{t("documents.document1")}</li>
          <li>{t("documents.document2")}</li>
          <li>{t("documents.document3")} </li>
        </ul>
      </div>
    </>
  );
}

export default Adhesion;

import React from "react";
import AllServices from "./_components/AllServices";
import NewsList from "./_components/NewsList";
import { useTranslations } from "next-intl";
// import { formatRevalidate } from "next/dist/server/lib/revalidate";

function ServicesPage() {
  const t = useTranslations("services");

  let newsDat = [];
  for (let i = 0; i < t("newsData").length; i++) {
    const { event, description, image, date } = t(`newsData.${i + 1}`);
    // const { date } = formatRevalidate(t("newsData")[i].date);
    newsDat.push({
      event,
      description,
      image,
      date,
    });
  }
  // console.log("--------->", news);

  return (
    <>
      <AllServices />

      <NewsList news={newsDat} />
    </>
  );
}

export default ServicesPage;

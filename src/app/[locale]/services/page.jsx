import React from "react";
import AllServices from "./_components/AllServices";
import NewsList from "./_components/NewsList";
import { useTranslations } from "next-intl";
// import { formatRevalidate } from "next/dist/server/lib/revalidate";

export const metadata = {
  title: "Nos Services - Association Marocaine de la Formation et le Conseil",
  description:
    "Découvrez nos programmes de soutien psychologique, formation, développement humain, et randonnées pour le bien-être communautaire.",
  keywords:
    "services, programmes, orientation psychologique, formation, développement humain, randonnées, soutien psychologique, besoins spéciaux",
};
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

"use client";
import React from "react";
import event1 from "../../../../../public/images/event1.png";
import event2 from "../../../../../public/images/event2.png";
import news1 from "../../../../../public/images/news1.png";
import news2 from "../../../../../public/images/news2.png";
import news3 from "../../../../../public/images/news3.png";
import news4 from "../../../../../public/images/news4.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BookOpenText } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const NewsItem = ({ date, image, title, description, btn, id }) => {
  const { locale } = useParams();
  return (
    <div className="flex flex-col md:flex-row mb-6 border-b pb-6">
      <Image
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-48 object-cover mb-4 md:mb-0 md:mr-4"
        width={100}
        height={192}
      />
      <div className="mx-2">
        {date && <p className="text-gray-500 text-sm mb-2">{date}</p>}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-2 line-clamp-3">{description}</p>
        <Link
          href={`/${locale}/news/${id}`}
          className="text-cyan-500 w-1/3 border border-cyan-500 p-1 flex gap-2 items-center justify-center hover:text-gray-900 hover:border-gray-900 hover:bg-cyan-500 transition-colors duration-200"
        >
          <span>{btn}</span>
          <BookOpenText strokeWidth={0.5} absoluteStrokeWidth />
        </Link>
      </div>
    </div>
  );
};

const EventItem = ({ image, title }) => (
  <div className="mb-4 relative">
    <Image src={image} alt={title} className="w-full h-36 object-cover" />
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
    </div>
  </div>
);

const NewsAndEvents = () => {
  const t = useTranslations("services");
  const t1 = useTranslations("accueil.NewsAndEvents");
  let newsItems = [];
  for (let i = 1; i <= 4; i++) {
    // const { event, description, image, date } = t(`newsData.${i}`);
    // const { date } = formatRevalidate(t("newsData")[i].date);
    newsItems.push({
      event: t(`newsData.${i}.event`),
      description: t(`newsData.${i}.description`),
      image: `${t(`newsData.${i}.image`)}`,
      date: t(`newsData.${i}.date`),
      id: i,
    });
    // console.log(image);
    // console.log("--------->", t(`newsData.${key}.event`));
  }
  // const newsItems = [
  //   {
  //     date: "25 Juin 2022",
  //     image: news1,
  //     title:
  //       "la 3ème rencontre régionale sous le thème : La stratégie nationale de protection sociale entre la recommandation 202 et les socles de protection sociale, quelles mesures pour la décentralisation ? Jeudi 23 juin 2022 à Errachidia",
  //     description:
  //       "Contexte et objectif : Aujourd'hui, la question de la généralisation de la protection sociale au Maroc est au cœur des préoccupations des politiques publiques nationales et des réformes en cours. D'un côté, la crise sanitaire liée à la pandémie de la Covid-19 a...",
  //   },
  //   {
  //     date: "28 Mars 2022",
  //     image: news2,
  //     title:
  //       "Semaine solidaire sous le slogan : « la tuberculose, une responsabilité commune »",
  //     description:
  //       "Dans le cadre de la célébration de la journée mondiale de lutte contre la tuberculose, l'Association Marocaine de Solidarité et de Développement et l'Association Chabab El Borj organisent une semaine solidaire sous le slogan « la tuberculose, une responsabilité commun...",
  //   },
  //   {
  //     image: news3,
  //     title:
  //       "Réunion de plaidoyer ciblée - le renforcement du financement de la lutte contre la tuberculose : le financement domestique comme alternative au financement international",
  //     description:
  //       "La tuberculose constitue un problème majeur de santé public. Au Maroc, malgré les efforts importants déployés pour prévenir, contrôler et maitriser la tuberculose, qui fait toujours partie des principales priorités du Ministère de la Santé et de la protection sociale, e...",
  //   },
  //   {
  //     date: "3 mars 2022",
  //     image: news4,
  //     title:
  //       "Conférence de presse pour la présentation officielle du Manuel de Procédures simplifiées des établissements de protection sociale EPS selon la loi 65-15",
  //     description:
  //       "Dans le cadre de son projet intitulé « une meilleure gestion des Organisations de la Société Civile en charge des Établissements de Protection Sociale selon les socles de la Protection Sociale pour des services de qualité au profit des Personnes en Situation Difficil...",
  //   },
  // ];

  const eventItems = [
    { image: event1, title: t1("event1") },
    { image: event2, title: t1("event2") },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-bold mb-6">{t1("title1")}</h2>
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} btn={t1("button")} />
          ))}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            {t1("savoir")}
          </a>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-6">{t1("title2")}</h2>
          {eventItems.map((item, index) => (
            <EventItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;

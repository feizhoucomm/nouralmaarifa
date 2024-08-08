"use client";
import React from "react";
import event1 from "../../../../../public/images/event1.png";
import event2 from "../../../../../public/images/event2.png";
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

const EventItem = ({ image, title }) => {
  const { locale } = useParams();
  return (
    <div className="mb-4 group relative">
      <Link
        href={`/${locale}`}
        className="text-white text-lg font-semibold text-center"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-36 object-fit transition-all"
        />
        <div className="absolute inset-0 group-hover:bg-gray-900 group-hover:bg-opacity-50 duration-500 flex items-center justify-center"></div>
      </Link>
    </div>
  );
};

const NewsAndEvents = () => {
  const { locale } = useParams();
  const t = useTranslations("services");
  const t1 = useTranslations("accueil.NewsAndEvents");
  let newsItems = [];
  for (let i = 1; i <= 4; i++) {
    newsItems.push({
      event: t(`newsData.${i}.event`),
      description: t(`newsData.${i}.description`),
      image: `${t(`newsData.${i}.image`)}`,
      date: t(`newsData.${i}.date`),
      id: i,
    });
  }

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
          <Link
            className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-bgSecondary focus:outline-none focus:ring active:text-bgSecondary"
            href={`/${locale}/services`}
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              {t1("savoir")}
            </span>
          </Link>
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

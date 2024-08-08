"use client";
import { BookOpenText, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import { image } from "@nextui-org/react";
import Link from "next/link";
import { useParams } from "next/navigation";

const NewsItem = ({ date, event, description, image, id }) => {
  const { locale } = useParams();
  return (
    <div className="flex flex-col md:flex-row mb-8 px-4 border-b pb-4">
      <Image
        src={image}
        alt={event}
        className="w-full md:w-1/4 h-48 object-cover mb-4 md:mb-0 md:mr-4"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="px-2">
        <div className="flex gap-2 items-center">
          <Clock
            absoluteStrokeWidth
            strokeWidth={1}
            size={16}
            className="text-gray-500 mb-2"
          />
          <p className="text-sm text-gray-500 mb-2">{date}</p>
        </div>
        <h2 className="text-xl font-bold mb-2">{event}</h2>
        <p className="text-gray-700 mb-2 line-clamp-2">{description}</p>
        <Link
          href={`/${locale}/news/${id}`}
          className="text-cyan-500 w-1/6 border border-cyan-500 p-1 flex gap-2 items-center justify-center hover:text-gray-900 hover:border-gray-900 hover:bg-cyan-500 transition-colors duration-200"
        >
          <span>Lire plus</span>
          <BookOpenText strokeWidth={0.5} absoluteStrokeWidth />
        </Link>
      </div>
    </div>
  );
};

const NewsList = () => {
  // const t = useTranslations("services");
  let newss = [];
  const t = useTranslations("services");
  const t1 = useTranslations("accueil.NewsAndEvents");
  const path = "/newsImages/";
  for (let i = 1; i <= 11; i++) {
    // const { event, description, image, date } = t(`newsData.${i}`);
    // const { date } = formatRevalidate(t("newsData")[i].date);
    newss.push({
      event: t(`newsData.${i}.event`),
      description: t(`newsData.${i}.description`),
      image: `${t(`newsData.${i}.image`)}`,
      date: t(`newsData.${i}.date`),
      id: i,
    });
    console.log(image);
    // console.log("--------->", t(`newsData.${key}.event`));
  }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newss.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(newss.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold uppercase text-bgSecondary text-center mb-8">
        {t1("title1")}
      </h1>
      {currentItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
      <div className="flex justify-center mt-8">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 rounded-lg px-3 py-1 ${
              currentPage === number ? "bg-bgPrimary text-white" : "bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsList;

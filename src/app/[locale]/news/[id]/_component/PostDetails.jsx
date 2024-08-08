import { Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostDetails = ({ newsId, locale }) => {
  const t = useTranslations(`services.newsData.${newsId}`);

  return (
    <>
      <div className={`max-w-2xl mx-auto p-4`}>
        <h1 className="text-3xl text-gray-800 font-bold mb-4">{t("event")}</h1>

        <div className="flex justify-between items-center space-x-2 mb-4">
          <span className="text-gray-700">{t("date")}</span>

          <div className="flex justify-center items-center border border-blue-500 border-1 rounded-full p-1">
            <Link href={"https://www.facebook.com/psycomina"} target="_blank">
              <Facebook
                strokeWidth={1}
                size={30}
                className="text-blue-500 bg-gray-50 rounded-full"
              />
            </Link>
          </div>
        </div>

        <Image
          src={t("image")}
          alt={t("event")}
          className="w-full h-full object-cover rounded-lg mb-4"
          width={0}
          height={0}
          sizes="100vw"
        />
        <p className="text-lg text-gray-600 mb-4">{t("description")}</p>

        <Link
          className="inline-block rounded-full border border-bgSecondary bg-bgSecondary p-3 text-white hover:bg-transparent hover:text-bgSecondary focus:outline-none focus:ring active:text-indigo-500"
          href={`/${locale}/services`}
        >
          <svg
            className="size-5 ltr:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default PostDetails;

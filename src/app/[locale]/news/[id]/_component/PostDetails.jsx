import { Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const PostDetails = ({ newsId, locale }) => {
  const t = useTranslations(`services.newsData.${newsId}`);
  console.log(locale);
  return (
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

      <img
        src={t("image")}
        alt="Person meditating"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-600 mb-4">{t("description")}</p>
    </div>
  );
};

export default PostDetails;

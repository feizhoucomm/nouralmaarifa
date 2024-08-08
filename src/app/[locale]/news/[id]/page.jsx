import React from "react";
import PostDetails from "./_component/PostDetails";
import frData from "../../../../../messages/fr.json";

// export async function generateStaticParams() {
//   return ["fr", "ar"];
// }
// const getPost = ({ params }) => {
//   const t = useTranslations(`services.newsData.${id}`);
//   return {
//     title: t("title"),
//     description: t("description"),
//     image: t("images"),
//   };
// };

export function generateMetadata({ params }) {
  const { id } = params;
  const newsItem = frData.services.newsData[id];

  // If newsItem is found, generate metadata based on its content
  if (newsItem) {
    return {
      title: newsItem.event,
      description: newsItem.description,
      images: [
        {
          url: newsItem.image,
        },
      ],
    };
  }

  // Return default metadata if no news item is found
  return {
    title: "Nos Derniere Actualiteis",
    description: "Default Description",
  };
}

function NewsDetails({ params }) {
  const { id, locale } = params;
  return (
    <>
      <PostDetails newsId={id} locale={locale} />
    </>
  );
}

export default NewsDetails;

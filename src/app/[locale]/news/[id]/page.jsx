import React from "react";
import PostDetails from "./_component/PostDetails";
// import { useRouter } from "next/router";

function NewsDetails({ params }) {
  //   const router = useRouter();
  const { id, locale } = params;
  return (
    <>
      <PostDetails newsId={id} locale={locale} />
    </>
  );
}

export default NewsDetails;

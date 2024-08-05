import React from "react";
import Adhesion from "./_components/Adhesion";
import Randonnée from "./_components/Randonnée";
import PostDetails from "../news/[id]/_component/PostDetails";

function AdhRanPage() {
  return (
    <>
      <div className="flex flex-col justify-between items-center p-8 bg-hero-pattern">
        <Adhesion />
        <Randonnée />
        <PostDetails />
      </div>
    </>
  );
}

export default AdhRanPage;

import React from "react";
import Adhesion from "./_components/Adhesion";
import Randonnée from "./_components/Randonnée";
// export async function generateStaticParams() {
//   return ["fr", "ar"];
// }

export const metadata = {
  title: "Adhesion Et Randonnée",
  description:
    "Découvrez les services de l'Association Marocaine de la Formation et le Conseil, axés sur la santé mentale, le bien-être communautaire, et le développement personnel.",
  keywords:
    "accueil, services, adhésion, randonnée, santé mentale, bien-être communautaire, développement de la communauté",
};
function AdhRanPage() {
  return (
    <>
      <div className="flex flex-col justify-between items-center p-8 bg-hero-pattern">
        <Adhesion />
        <Randonnée />
      </div>
    </>
  );
}

export default AdhRanPage;

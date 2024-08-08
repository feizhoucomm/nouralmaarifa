import React from "react";
import AssociationInfo from "./_components/AssociationInfo";
import ComiteDeGestion from "./_components/ComiteDeGestion";

// export async function generateStaticParams() {
//   return ["fr", "ar"];
// }

export const metadata = {
  title: "Qui Sommes-Nous",
  description:
    "Découvrez l'Association Marocaine de la Formation et le Conseil, engagée dans le développement de la communauté à travers la santé mentale et le bien-être.",
  keywords:
    "Association Marocaine de la Formation et le Conseil, santé mentale, bien-être communautaire, coaching, formation, Benslimane,développement des capacités, compétences, système immunitaire psychologique, santé physique, excellence académique, coaching, médiateur familial, éducation, santé mentale, emploi",
};

function AboutPage() {
  return (
    <>
      <AssociationInfo />
      <ComiteDeGestion />
    </>
  );
}

export default AboutPage;

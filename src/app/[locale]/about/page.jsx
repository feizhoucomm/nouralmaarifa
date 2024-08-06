import React from "react";
import AssociationInfo from "./_components/AssociationInfo";
import ComiteDeGestion from "./_components/ComiteDeGestion";

export const metadata = {
  title:
    "Qui Sommes-Nous - Association Marocaine de la Formation et le Conseil",
  description:
    "Découvrez l'Association Marocaine de la Formation et le Conseil, engagée dans le développement de la communauté à travers la santé mentale et le bien-être.",
  keywords:
    "Association Marocaine de la Formation et le Conseil, santé mentale, bien-être communautaire, coaching, formation, Benslimane",
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

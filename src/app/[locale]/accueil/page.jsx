import React from "react";
import HeroSection from "./_components/HeroSection";
import NewsAndEvents from "./_components/NewsAndEvents";

export const metadata = {
  title: "Accueil - Association Marocaine de la Formation et le Conseil",
  description:
    "Découvrez les services de l'Association Marocaine de la Formation et le Conseil, axés sur la santé mentale, le bien-être communautaire, et le développement personnel.",
  keywords:
    "accueil, services, adhésion, randonnée, santé mentale, bien-être communautaire, développement de la communauté",
};

function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsAndEvents />
    </>
  );
}

export default HomePage;

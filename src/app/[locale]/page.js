import Head from "next/head";
import HomePage from "./accueil/page";

export const metadata = {
  title: "Nour Al Maarifa",
  description: "Association Marocaine de la Formation et le Conseil",
  keywords:
    "association, coaching, formation, randonnée, santé mentale, bien-être communautaire, développement de la communauté",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

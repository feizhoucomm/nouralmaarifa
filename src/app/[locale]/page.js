import Head from "next/head";
import HomePage from "./accueil/page";

// export async function generateStaticParams() {
//   return ["fr", "ar"];
// }

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

import Head from "next/head";
import HomePage from "./accueil/page";


export default function Home() {
  return (
    <>
      <Head>
        <title>FeizhouCom - Blog</title>
        <meta
          name="description"
          content="FeizhouCom l'agence qui donne vie à votre identité, reflétant fidèlement votre essence et vos valeurs."
        />
        <meta
          name="keywords"
          content="Sites web, Traduction, Communication, Relations publiques, Communication corporate, Image de marque"
        />
        <meta name="author" content="FeizhouCom" />
        <link rel="icon" href="./FeizhouCom.png" type="image/png" />
      </Head>
      <HomePage />
    </>
  );
}

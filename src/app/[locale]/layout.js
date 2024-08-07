import { getLangDir } from "rtl-detect";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nour Al Maarifa",
  description: "Association Marocaine de la Formation et le Conseil",
  keywords:
    "association, coaching, formation, randonnée, santé mentale, bien-être communautaire, développement de la communauté",
};

// export default function RootLayout({ children, params }) {
//   const locale = useLocale();
//   console.log(locale);
//   // Show a 404 error if the user requests an unknown locale
//   if (params.locale !== locale) {
//     notFound();
//   }

//   return (
//     <html lang={locale}>
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Head from "next/head";

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const direction = getLangDir(locale);

  // console.log(locale);
  return (
    <html lang={locale} dir={direction}>
      <Head>
        <title>
          Accueil - Association Marocaine de la Formation et le Conseil
        </title>
        <meta
          name="description"
          content="Découvrez les services de l'Association Marocaine de la Formation et le Conseil, axés sur la santé mentale, le bien-être communautaire, et le développement personnel."
        />
        <meta
          name="keywords"
          content="accueil, services, adhésion, randonnée, santé mentale, bien-être communautaire, développement de la communauté"
        />
      </Head>
      <body
        className={`${
          direction == "ltr" ? " font-[Quicksand] " : " font-[Fustat] "
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar params={params} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

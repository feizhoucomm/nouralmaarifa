import { getLangDir } from "rtl-detect";
import { Inter, Quicksand } from "next/font/google";
// import { Inter, Quicksand } from "next/font/a";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import { useLocale } from "next-intl";
// import { notFound } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nour Al Maarifa",
  description: "Association Marocaine de la Formation et le Conseil",
  keywords:
    "accueil, services, adhésion, randonnée, santé mentale, bien-être communautaire, développement de la communauté",
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

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const direction = getLangDir(locale);

  // console.log(locale);
  return (
    <html lang={locale} dir={direction}>
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

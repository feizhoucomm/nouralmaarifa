import { getLangDir } from "rtl-detect";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


export default async function RootLayout({ children, params }) {
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

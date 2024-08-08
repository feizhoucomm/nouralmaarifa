import React from "react";
import ContactForm from "./_components/ContactForm";
import Header from "./_components/Header";
import ContactInfo from "./_components/ContactInfo";
// export async function generateStaticParams() {
//   return ["fr", "ar"];
// }
export const metadata = {
  title: "Contactez-Nous",
  description:
    "Découvrez les services de l'Association Marocaine de la Formation et le Conseil, axés sur la santé mentale, le bien-être communautaire, et le développement personnel.",
  keywords:
    "accueil, services, adhésion, randonnée, santé mentale, bien-être communautaire, développement de la communauté",
};
function ContactPage() {
  return (
    <>
      <Header />
      <ContactInfo />
      <ContactForm />;
    </>
  );
}

export default ContactPage;

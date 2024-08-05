import React from "react";
import ContactForm from "./_components/ContactForm";
import Header from "./_components/Header";
import ContactInfo from "./_components/ContactInfo";

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

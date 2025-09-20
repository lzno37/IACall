import React from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | IACall",
  description:
    "¿Dudas o quieres ver IACall en acción? Agenda una demo gratuita o escríbenos. Te ayudamos a activar agentes de IA 24/7 para impulsar tu negocio.",
};

export default function Contact() {
  return (
    <>
      <ContactForm />
    </>
  );
}

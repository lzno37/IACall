import React from "react";
import PartnersHome from "@/components/PartnersHome";
import PartnersSection from "@/components/PartnersSection";
import PartContact from "@/components/PartContact";

export const metadata = {
  title: "Programa de Partners | IACall",
  description:
    "Innova tu negocio y potencia a tus clientes con agentes de voz IA y automatizaciones. Early access, soporte experto y oportunidades de co‑branding.",
};

export default function Partner() {
  return (
    <div>
      <PartnersHome />
      <PartnersSection />
      <PartContact />
    </div>
  );
}

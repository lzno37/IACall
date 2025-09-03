"use client";
import React from "react";
import { PartCard, PartGrid } from "@/components/magicui/PartGrids";
import { useLanguage } from "@/hooks/Language";

const Offers = [
  {
    EN: {
      name: "Innovation First",
      description:
        "Gain Early access to our latest features and updates,giving you an edge over the competition",
    },
    ES: {
      name: "Innovación antes que nadie",
      description:
        "Accede primero a nuestras últimas funciones y actualizaciones, y marca la diferencia frente a la competencia.",
    },
    span: "col-span-2 max-md:col-span-1",
  },
  {
    EN: {
      name: "Scaleable By design",
      description:
        "As your business expands, we build custom features that adapt to your specific requirements.",
    },
    ES: {
      name: "Escalabilidad a medida",
      description:
        "A medida que tu negocio crece, desarrollamos funcionalidades específicas que se ajustan a tus necesidades reales.",
    },
    span: "col-span-2 max-md:col-span-1",
  },
  {
    EN: {
      name: "Expert Support By Your Side",
      description:
        "Our Technical Team is Always Available to assist You with Questions, Issues or Integration needs.",
    },
    ES: {
      name: "Soporte experto a tu lado",
      description:
        "Nuestro equipo técnico estará siempre disponible para resolver dudas, incidencias o ayudarte en la integración",
    },
    span: "col-span-2 max-md:col-span-1",
  },
  {
    EN: {
      name: "Your Brand, Powered by Our Technology",
      description:
        "We tailor our solution to match your company’s identity, so your clients experience it as if it were your own.",
    },
    ES: {
      name: "Tu marca, potenciada por nuestra tecnología",
      description:
        " Diseñamos la solución adaptada a la identidad de tu empresa, para que tus clientes la perciban como algo propio.",
    },
    span: "col-span-6 max-md:col-span-1",
  },
  {
    EN: {
      name: "Extra Value for Your Clients",
      description:
        " Enhance your service offering with advanced tools that improve their experience and set you apart as a trusted leader.",
    },
    ES: {
      name: "Beneficios para tus clientes",
      description:
        " Refuerza tu propuesta de valor con herramientas avanzadas que mejoran su experiencia y te consolidan como referente.",
    },
    span: "col-span-3 max-md:col-span-1",
  },
  {
    EN: {
      name: "Exclusive Partner Conditions",
      description:
        " Enjoy preferential pricing designed to help you scale with ease, grow your client portfolio and deliver innovative services that make your business stand out.",
    },
    ES: {
      name: "Condiciones exclusivas por ser partner",
      description:
        "Accede a un modelo de precios preferente, pensado para que puedas escalar con comodidad, ampliar tu cartera de clientes y ofrecerles servicios innovadores que los diferencien en su sector.",
    },
    span: "col-span-3 max-md:col-span-1",
  },
];

const PartnersSection = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className=" px-16 py-20 max-md:px-4 max-md:py-10">
      <PartGrid className="grid-cols-6 max-md:grid-cols-1">
        {Offers.map((offer, index) => (
          <PartCard
            key={index}
            name={currentLanguage === "EN" ? offer.EN.name : offer.ES.name}
            description={
              currentLanguage === "EN"
                ? offer.EN.description
                : offer.ES.description
            }
            className={offer.span}
          />
        ))}
      </PartGrid>
    </div>
  );
};

export default PartnersSection;

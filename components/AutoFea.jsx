"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { useLanguage } from "@/hooks/Language";

const Feature = [
  {
    EN: {
      title: "Custom AI Agent Development",
      description:
        "We develop custom AI agents that integrate seamlessly with your tools.",
    },
    ES: {
      title: "Desarrollo de agentes de IA personalizados",
      description:
        "Desarrollamos agentes de IA personalizados que se integran perfectamente con sus herramientas.",
    },
    span: "col-span-1 max-lg:col-span-1",
  },
  {
    EN: {
      title: "Automated Workflows",
      description:
        "Boost efficiency across teams with smart automation Build intelligent workflows that automate multi-step processes across tools and platforms",
    },
    ES: {
      title: "Flujos de trabajo automatizados",
      description:
        "Aumente la eficiencia en todos los equipos con la automatización inteligente. Cree flujos de trabajo inteligentes que automaticen procesos de varios pasos en todas las herramientas y plataformas.",
    },
    span: "col-span-2 max-lg:col-span-1 ",
  },
  {
    EN: {
      title: "Real-Time Intelligence",
      description:
        "Make smarter decisions with live data insights Tap into real-time data",
    },
    ES: {
      title: "Inteligencia en tiempo real",
      description:
        "Tome decisiones más inteligentes con información de datos en vivo. Aproveche los datos en tiempo real.",
    },
    span: "col-span-1 max-lg:col-span-1",
  },
  {
    EN: {
      title: "Automate repetitive tasks",
      description:
        "We automate your manual workflows, saving you time, energy and resources.",
    },
    ES: {
      title: "Automatiza tareas repetitivas",
      description:
        "Automatizamos sus flujos de trabajo manuales, ahorrándole tiempo, energía y recursos.",
    },
    span: "col-span-1 max-lg:col-span-1",
  },
  {
    EN: {
      title: "AI Strategy Consulting",
      description:
        "Get expert guidance to implement AI solutions that drive business growth",
    },
    ES: {
      title: "Consultoría de estrategia de IA",
      description:
        "Obtenga orientación experta para implementar soluciones de IA que impulsen el crecimiento empresarial.",
    },
    span: "col-span-1 max-lg:col-span-1",
  },
];

// Language content object
const content = {
  EN: {
    badge: "Services",
    title: "Smarter Services, Built with AI",
    description:
      "Everything You need to automate operations,boost productivity and save money",
  },
  ES: {
    badge: "Servicios",
    title: "Servicios Inteligentes, con IA",
    description:
      "Todo lo que necesitas para automatizar operaciones, aumentar la productividad ",
  },
};

const AutoFea = () => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="flex flex-col p-16 max-lg:p-8 max-md:p-4 bg-white font-sans max-w-screen-2xl mx-auto">
      {/* Badge Section */}
      <motion.div
        className="flex gap-2 items-center justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
          {content[currentLanguage].badge}
        </span>
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center mb-14 max-lg:flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl max-xl:text-5xl text-center  font-light text-gray-900  mb-4">
          {content[currentLanguage].title}
        </h1>

        <p className="text-gray-600 text-sm text-center">
          {content[currentLanguage].description}
        </p>
      </motion.div>

      {/* Bento Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <BentoGrid className="grid-cols-3 gap-8">
          {Feature.map((feature, index) => (
            <BentoCard
              key={index}
              name={
                currentLanguage === "EN" ? feature.EN.title : feature.ES.title
              }
              description={
                currentLanguage === "EN"
                  ? feature.EN.description
                  : feature.ES.description
              }
              className={feature.span}
              background={feature.background}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
};

export default AutoFea;

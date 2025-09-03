"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import VoiceMarguee from "./VoiceMarguee";
import IconsShow from "./IconsShow";
import { useLanguage } from "@/hooks/Language";
import Service24 from "./service24";
import Dataprot from "./Dataprot";

const Feature = [
  {
    EN: {
      title: "Break Language Barriers",
      description:
        "Real Time Translation and Transcription Services. Our AI Agent Ensures Clear Communication Across Languages.",
    },
    ES: {
      title: "Rompe las Barreras del Idioma",
      description:
        "Servicios de Traducción y Transcripción en Tiempo Real. Nuestro Agente IA Garantiza Comunicación Clara entre Idiomas.",
    },
    span: "col-span-4 max-lg:col-span-1 ",
    background: <VoiceMarguee />,
  },
  {
    EN: {
      title: "Your Platform, Your Control",
      description:
        "Customize Your Experience with Our AI Agent. Tailor Responses, Set Preferences",
    },
    ES: {
      title: "Tu Plataforma, Tu Control",
      description:
        "Personaliza tu Experiencia con Nuestro Agente IA. Adapta Respuestas, Establece Preferencias",
    },
    span: "col-span-2 max-lg:col-span-1",
    background: (
      <img
        src="/Camp.png"
        alt="Your Platform Your Control"
        className="h-full w-full object-cover p-6 "
      />
    ),
  },
  {
    EN: {
      title: "Streamlined Integrations",
      description:
        "Connect Effortlessly With Various Applications and Services.",
    },
    ES: {
      title: "Integraciones Simplificadas",
      description:
        "Conéctate sin Esfuerzo con Varias Aplicaciones y Servicios.",
    },
    span: "col-span-2 max-lg:col-span-1",
    background: <IconsShow />,
  },

  {
    EN: {
      title: "24/7 Service",
      description:
        "Never Miss a Call Again. Our AI Agent is Available Around the Clock to Assist Your Customers Anytime, Anywhere.",
    },
    ES: {
      title: "Servicio 24/7",
      description:
        "Nunca Pierdas una Llamada. Nuestro Agente IA Está Disponible las 24 Horas para Asistir a tus Clientes en Cualquier Momento y Lugar.",
    },
    span: "col-span-1 max-lg:col-span-1",
    background: <Service24 />,
  },
  {
    EN: {
      title: "Bullet Proof Data Protection",
      description:
        "Real Time Monitoring and Threat Detection. Our AI Agent Ensures Your Data is Always Secure.",
    },
    ES: {
      title: "Protección de Datos a Prueba de Balas",
      description:
        "Monitoreo en Tiempo Real y Detección de Amenazas. Nuestro Agente IA Garantiza que tus Datos Estén Siempre Seguros.",
    },
    span: "col-span-1 max-lg:col-span-1",
    background: <Dataprot />,
  },
  {
    EN: {
      title: "Manage Your Calendar",
      description:
        "Real Time Synchronization with Your Calendar. Our AI Agent Ensures You're Always in Control of Your Schedule.",
    },
    ES: {
      title: "Gestiona tu Calendario",
      description:
        "Sincronización en Tiempo Real con tu Calendario. Nuestro Agente IA Garantiza que Siempre Tengas Control de tu Horario.",
    },
    span: "col-span-2 max-lg:col-span-1",
    background: (
      <img
        src="/Calender.webp"
        alt="Manage Your Calendar"
        className="w-full h-full object-contain "
      />
    ),
  },
];

// Language content object
const content = {
  EN: {
    badge: "Features",
    title: "AI agents, custom‑built to power your business",
  },
  ES: {
    badge: "Características",
    title: "Agentes IA a medida, para impulsar tu negocio",
  },
};

const Features = () => {
  const { currentLanguage } = useLanguage();

  return (
    <section
      id="Feature"
      className="flex flex-col p-16 max-lg:p-8 max-md:p-4 bg-white font-sans max-w-screen-2xl mx-auto"
    >
      {/* Badge Section */}
      <motion.div
        className="flex gap-2 items-center mb-8"
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
        className="flex justify-between items-center mb-14 max-lg:flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl max-xl:text-4xl  font-light text-gray-900  max-w-[50%] max-lg:max-w-full mb-4">
          {content[currentLanguage].title}
        </h1>
      </motion.div>

      {/* Bento Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <BentoGrid className="grid-cols-4">
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

export default Features;

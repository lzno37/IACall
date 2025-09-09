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
import Circles from "./Circles";
import MsgPings from "./MsgPings";

const Feature = [
  {
    EN: {
      title: "24/7 Service",
      description:
        "Never Miss a Call Again. Our AI Agent is Available Around the Clock to Assist Your Customers Anytime, Anywhere.",
    },
    ES: {
      title: "Servicio 24/7",
      description:
        "Nunca pierdas una llamada. Nuestro agente IA está disponible las 24 horas para asistir a tus clientes en cualquier momento.",
    },
    span: "col-span-1 max-lg:col-span-1",
    background: (
      <div className="h-60 flex items-start justify-start overflow-hidden">
        <img
          src="/service24.png"
          alt="24/7 Service"
          className="h-80 w-[13rem] max-lg:object-contain mx-auto  "
        />
      </div>
    ),
  },
  {
    EN: {
      title: "Break Language Barriers",
      description:
        "Real Time Translation and Transcription Services. Our AI Agent Ensures Clear Communication Across Languages.",
    },
    ES: {
      title: "Rompe las barreras del idioma",
      description:
        "Servicios de traducción y transcripción en tiempo real.  Nuestro agente IA garantiza una comunicación clara entre idiomas.",
    },
    span: "col-span-3 max-lg:col-span-1 ",
    background: <VoiceMarguee />,
  },
  {
    EN: {
      title: "Your Platform, Your Control",
      description:
        "Customize Your Experience with Our AI Agent. Tailor Responses, Set Preferences",
    },
    ES: {
      title: "Tu plataforma, tu control",
      description:
        "Personaliza tu experiencia con nuestro agente IA. Adapta respuestas, establece preferencias.",
    },
    span: "col-span-2 max-lg:col-span-1",
    background: (
      <div className="flex items-center justify-center overflow-hidden p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-md my-4 mx-4">
        <img
          src="/Camp.png"
          alt="Your Platform Your Control"
          className="h-full w-full  rounded-lg shadow-md"
        />
      </div>
    ),
  },
  {
    EN: {
      title: "Streamlined Integrations",
      description:
        "Connect Effortlessly With Various Applications and Services.",
    },
    ES: {
      title: "Integraciones simplificadas",
      description:
        "Conéctate sin esfuerzo con varias aplicaciones y servicios.",
    },
    span: "col-span-2 max-lg:col-span-1",
    background: <Circles />,
  },
  {
    EN: {
      title: "Manage Your Calendar",
      description:
        "Real Time Synchronization with Your Calendar. Our AI Agent Ensures You're Always in Control of Your Schedule.",
    },
    ES: {
      title: "Gestiona tu calendario",
      description:
        "Sincronización en tiempo real con tu calendario. Nuestro agente IA garantiza que siempre tengas control de tu horario.",
    },
    span: "col-span-3 max-lg:col-span-1",
    background: <MsgPings />,
  },
  {
    EN: {
      title: "Bullet Proof Data Protection",
      description:
        "Real Time Monitoring and Threat Detection. Our AI Agent Ensures Your Data is Always Secure.",
    },
    ES: {
      title: "Protección de datos a prueba de balas",
      description:
        "Monitoreo en tiempo real y detección de amenazas. Nuestro agente IA garantiza que tus datos estén siempre seguros.",
    },
    span: "col-span-1 max-lg:col-span-1",
    background: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <img
          src="/Dataprot.png"
          alt="Bullet Proof Data Protection"
          className="h-40 w-60 object-contain"
        />
      </div>
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

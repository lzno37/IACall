"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Settings,
  Code,
  CheckCircle,
  Search,
  BrainCircuit,
  ChartNoAxesCombined,
} from "lucide-react";

import { useLanguage } from "@/hooks/Language";

const AutoTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);
  const { currentLanguage } = useLanguage();

  const phases = [
    {
      EN: {
        id: 1,
        title: "Discover",
        subtitle: "& Analyze",
        description:
          "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
        icon: Search,
        number: "01",
      },
      ES: {
        id: 1,
        title: "Consultoría",
        subtitle: "& Analiza",
        description:
          "Auditamos sus flujos de trabajo, herramientas y datos de clientes existentes para descubrir ineficiencias y oportunidades de automatización. Cada sistema se mapea para mayor claridad.",
        icon: Search,
        number: "01",
      },
    },
    {
      EN: {
        id: 2,
        title: "Implementation",
        subtitle: "& Deployment",
        description:
          "We create a tailored AI infrastructures that integrate seamlessly with your existing systems allowing your business to see exponential and rapid growth. ",
        icon: BrainCircuit,
        number: "02",
      },
      ES: {
        id: 2,
        title: "Implementación",
        subtitle: "& Despliegue",
        description:
          "Creamos infraestructuras de IA personalizadas que se integran a la perfección con sus sistemas existentes, permitiendo que su negocio experimente un crecimiento exponencial y rápido.",
        icon: BrainCircuit,
        number: "02",
      },
    },
    {
      EN: {
        id: 3,
        title: "Result",
        subtitle: "& Continuous Improvement",
        description:
          "Our AI continuously monitors and fine-tunes your automated processes and customer service, ensuring everything operates at maximum performance and efficiency.",
        icon: ChartNoAxesCombined,
        number: "03",
      },
      ES: {
        id: 3,
        title: "Resultados",
        subtitle: "& Mejora Continua",
        description:
          "Nuestra IA monitorea y ajusta continuamente sus procesos automatizados y su servicio al cliente, asegurando que todo opere con el máximo rendimiento y eficiencia.",
        icon: ChartNoAxesCombined,
        number: "03",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % (phases.length + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [phases.length]);

  return (
    <div className="bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
              {currentLanguage === "EN" ? "Process" : "Proceso"}
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight max-w-4xl mx-auto">
            {currentLanguage === "EN"
              ? "Our Simple Process"
              : "Nuestro Proceso Simple"}
          </h1>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gray-200 mx-12">
            <motion.div
              className="h-full bg-gray-900"
              initial={{ width: "0%" }}
              animate={{
                width:
                  activePhase === 0
                    ? "0%"
                    : activePhase === 1
                    ? "33%"
                    : activePhase === 2
                    ? "66%"
                    : "100%",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Phase Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, index) => {
              const IconComponent = phase.EN.icon;
              const isActive = activePhase > index;
              const phaseData = currentLanguage === "EN" ? phase.EN : phase.ES;

              return (
                <motion.div
                  key={phaseData.id}
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-8 border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-gray-900 border-gray-900"
                        : "bg-white border-gray-200"
                    }`}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </motion.div>

                  {/* Phase Number */}
                  <div
                    className={`text-xs font-light mb-2 transition-colors duration-300 ${
                      isActive ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {phaseData.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-gray-900">
                    {phaseData.title}
                  </h3>
                  <h4 className="text-xl font-light text-gray-900 mb-4">
                    {phaseData.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {phaseData.description}
                  </p>

                  {/* Mobile connector line */}
                  {index < phases.length - 1 && (
                    <div className="block lg:hidden w-px h-8 bg-gray-200 mt-8" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AutoTimeline;

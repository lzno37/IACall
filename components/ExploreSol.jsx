"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/Language";

const ExploreSol = () => {
  const { currentLanguage } = useLanguage();

  const Lang = {
    EN: {
      title3: "Explore Solutions",
      Desc3: "Discover a wide range of Services to enhance your AI experience.",
      box1: "Voice Agents",
      box2: "Automations",
    },
    ES: {
      title3: "Explorar Soluciones",
      Desc3:
        "Descubre una amplia gama de servicios para mejorar tu experiencia con la IA.",
      box1: "Agentes de Voz",
      box2: "Automatizaciones",
    },
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 md:p-8 lg:p-16 gap-8 lg:gap-16 max-w-screen-2xl mx-auto">
      {/* Title and Description Section */}
      <motion.div
        className="flex flex-col gap-4 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl font-light text-gray-900">
          {Lang[currentLanguage].title3}
        </h2>
        <p className="text-gray-600 max-w-[400px] mx-auto lg:mx-0">
          {Lang[currentLanguage].Desc3}
        </p>
      </motion.div>

      {/* Solution Boxes Section */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto sm:items-center sm:justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="relative bg-cover bg-center w-full sm:w-[250px] lg:w-[300px] h-[150px] sm:h-[180px] lg:h-[200px] rounded-xl bg-gray-300 flex items-center justify-center group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <span className="text-sm sm:text-base text-gray-600 group-hover:text-white ease-in-out duration-300">
            {Lang[currentLanguage].box1}
          </span>
        </motion.div>

        <motion.div
          className="relative w-full sm:w-[250px] lg:w-[300px] h-[150px] sm:h-[180px] lg:h-[200px] rounded-xl bg-gray-300 flex items-center justify-center group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <span className="text-sm sm:text-base text-gray-600 group-hover:text-white ease-in-out duration-300">
            {Lang[currentLanguage].box2}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExploreSol;

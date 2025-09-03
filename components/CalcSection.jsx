"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/Language";

const CalcSection = () => {
  const { currentLanguage } = useLanguage();

  const Lang = {
    EN: {
      badge: "Savings",
      text: "Optimise your costs",
      br: "Multiply your return on investment",
      button: "Calculate Savings",
    },
    ES: {
      badge: "Ahorros",
      text: "Optima tus gastos",
      br: "Multiplica tu retorno de inversión",
      button: "Calcular Ahorros",
    },
  };

  return (
    <AuroraBackground>
      <div className="flex flex-col items-center justify-center z-10 px-4 sm:px-8 lg:px-16">
        {/* Badge Section */}
        <motion.span
          className="px-4 py-2 mb-6 sm:mb-8 lg:mb-12 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {Lang[currentLanguage].badge}
        </motion.span>

        {/* Title Section */}
        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-center text-black mb-6 sm:mb-8 lg:mb-12 leading-tight max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {Lang[currentLanguage].text}
          <br />
          {Lang[currentLanguage].br}
        </motion.div>

        {/* Button Section */}
        <motion.button
          className="flex group items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-black text-white rounded-full text-sm sm:text-base lg:text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <a href="/calc">{Lang[currentLanguage].button}</a>
          <ArrowUpRight
            size={16}
            className="transform transition-transform duration-200 group-hover:rotate-45 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          />
        </motion.button>
      </div>
    </AuroraBackground>
  );
};

export default CalcSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { AvatarCircles } from "./magicui/avatar-circles";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "./ui/aurora-background";
import { useLanguage } from "@/hooks/Language";

const AutoHome = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      badge: "Automations",
      title: "Automate Growth",
      subtitle: "Amplify Success",
      bookCall: "Book a Call",
    },
    ES: {
      badge: "Automatizaciones",
      title: "Automatiza tu Crecimiento",
      subtitle: "Potencia el Éxito",
      bookCall: "Reservar Llamada",
    },
  };

  return (
    <AuroraBackground>
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center space-y-12 z-10 px-4">
          <div className="space-y-8">
            {/* Badge with animation */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
                {content[currentLanguage].badge}
              </span>
            </motion.div>

            {/* Titles with staggered animation */}
            <div className="space-y-6">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-light text-black tracking-tight max-w-6xl mx-auto leading-[0.9]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {content[currentLanguage].title}
              </motion.h1>
              <motion.h2
                className="text-6xl md:text-7xl lg:text-8xl font-light text-black tracking-tight max-w-6xl mx-auto leading-[0.9]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {content[currentLanguage].subtitle}
              </motion.h2>
            </div>
          </div>

          {/* Buttons with animation */}
          <motion.div
            className="flex justify-center gap-3 items-center max-md:flex-col pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <button className=" group">
              <a
                href="/contact"
                className="inline-flex items-center gap-3  px-8 py-3 rounded-full bg-white text-black font-medium text-base tracking-wide shadow-md "
              >
                {content[currentLanguage].bookCall}
                <ArrowRight
                  size={14}
                  className="transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default AutoHome;

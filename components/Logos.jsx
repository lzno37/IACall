"use client";
import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "./magicui/marquee";
import { useLanguage } from "@/hooks/Language";

const LogoData = [
  { id: 1, src: "/Lgs1.avif", alt: "Logo 1" },
  { id: 2, src: "/Lg2.webp", alt: "Logo 2" },
  { id: 3, src: "/Lgs3.webp", alt: "Logo 3" },
  { id: 4, src: "/Lgs4.avif", alt: "Logo 4" },
  { id: 5, src: "/Lgs5.webp", alt: "Logo 5" },
  { id: 6, src: "/Lgs6.webp", alt: "Logo 6" },
];

const Logos = () => {
  const { currentLanguage } = useLanguage();
  const Lang = {
    EN: {
      badge: "Work With Us",
      Title: "Trusted By Visionaries",
    },
    ES: {
      badge: "Trabaja con nosotros",
      Title: "Confiado por Visionarios",
    },
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center py-20 lg:px-20 px-4 max-w-screen-2xl mx-auto">
      {/* Badge Section with animation */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
          {Lang[currentLanguage].badge}
        </span>
      </motion.div>

      {/* Title Section with animation */}
      <motion.h1
        className="text-4xl font-light text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {Lang[currentLanguage].Title}
      </motion.h1>

      {/* Marquee Section without animation */}
      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
          style={{
            background:
              "linear-gradient(to right, white 50%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{
            background: "linear-gradient(to left, white 50%, transparent 100%)",
          }}
        />
        <Marquee>
          {LogoData.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              className="mx-6 h-8 w-auto object-contain filter brightness-0 opacity-60"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Logos;

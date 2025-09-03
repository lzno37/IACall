"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/Language";
import Image from "next/image";

const DashBoard = () => {
  const { currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState("analytics");

  const Lang = {
    EN: {
      badge: "Platform",
      titles: "Calls are just the start with IACall,",
      br: "you get much more.",
      tabs: {
        analytics: "Analytics",
        campaign: "Campaign",
        calls: "Calls",
      },
    },
    ES: {
      badge: "Plataforma",
      titles: "Las llamadas son solo el inicio ",
      br: "con IACall, obtienes mucho más.",
      tabs: {
        analytics: "Analíticas",
        campaign: "Campañas",
        calls: "Llamadas",
      },
    },
  };

  const tabImages = {
    analytics: "/Demo.png",
    campaign: "/Campaign.png",
    calls: "/Calls.png",
  };

  return (
    <div className="relative flex flex-col gap-6 md:gap-8 lg:gap-12 justify-center items-center py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20">
      {/* Badge Section */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs md:text-sm font-light">
          {Lang[currentLanguage].badge}
        </span>
      </motion.div>

      {/* Title Section */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 text-center mb-4 md:mb-6 lg:mb-8 leading-tight max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {Lang[currentLanguage].titles}
        <br /> {Lang[currentLanguage].br}
      </motion.h1>

      {/* Tabs Section */}
      <motion.div
        className="flex gap-4 md:gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        {Object.entries(Lang[currentLanguage].tabs).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === key
                ? "bg-[#196f95] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {value}
          </button>
        ))}
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative w-full max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        key={activeTab} // Add key to force re-render on tab change
      >
        <Image
          src={tabImages[activeTab]}
          alt={`${activeTab} demonstration`}
          className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl"
          width={1920} // Set a fixed maximum width
          height={1080} // Set a fixed maximum height
          priority // Add priority for above-the-fold images
        />
        {/* Blurred gradient overlay at the bottom of the image */}
        <div
          className="pointer-events-none absolute left-0 bottom-0 w-full h-20 md:h-32 lg:h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 100%)",
            filter: "blur(8px) md:blur(12px) lg:blur(14px)",
            zIndex: 2,
          }}
        />
      </motion.div>
    </div>
  );
};

export default DashBoard;

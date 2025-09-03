"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/hooks/Language";

const IndusMainSec = ({ Badge, Title, Description, Image: imageSrc }) => {
  const { currentLanguage } = useLanguage();

  return (
    <motion.section
      className="px-4 py-20 max-w-screen-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative rounded-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {/* Optimized Background Image */}
        <Image
          src={imageSrc}
          alt="Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
          quality={75}
          className="object-cover md:object-left  object-center"
          style={{ zIndex: -1 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Rest of your content */}
        <div className="relative z-10 flex flex-col items-start gap-6 sm:gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
              {Badge}
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col items-start gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight max-w-xl">
              {Title}
            </h1>
            <p className="text-xl sm:text-2xl font-light text-white tracking-tight max-w-xl">
              {Description}
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            className="flex justify-start gap-3 items-center pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button
              className="group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#196f95] text-white font-medium text-sm sm:text-base tracking-wide shadow-md hover:bg-[#145a7a] transition-colors duration-200"
              >
                {currentLanguage == "EN"
                  ? "Schedule a Demo"
                  : "Agendar una Demo"}
                <ArrowRight
                  size={16}
                  className="transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default IndusMainSec;

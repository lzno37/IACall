"use client";
import React from "react";
import { PartnerBackground } from "@/components/ui/PartnerBackground";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/Language";

const PartnersHome = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      badge: "Partner Program",
      title: " Innovate Your Businees",
      title2: "Empower Your Clients",
      button: "I want to be a partner",
    },
    ES: {
      badge: "Programa de Partners",
      title: "Innova en tu negocio",
      title2: "potencia a tus clientes.",
      button: "Quiero ser partner",
    },
  };

  return (
    <PartnerBackground>
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center space-y-12 z-10 px-4">
          <div className="space-y-8">
            <div className="flex justify-center">
              <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
                {content[currentLanguage].badge}
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-black tracking-tight max-w-6xl mx-auto leading-[0.9]">
                {content[currentLanguage].title}
              </h1>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-black tracking-tight max-w-6xl mx-auto leading-[0.9]">
                {content[currentLanguage].title2}
              </h2>
            </div>
          </div>

          <div className="flex justify-center gap-3 items-center pt-4">
            <button className=" group">
              <a
                href="#Partcontact"
                className="inline-flex items-center gap-3  px-8 py-3 rounded-full bg-white text-black font-medium text-base tracking-wide shadow-md "
              >
                {content[currentLanguage].button}
                <ArrowRight
                  size={14}
                  className="transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </PartnerBackground>
  );
};

export default PartnersHome;

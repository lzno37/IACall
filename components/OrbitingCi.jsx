"use client";
import React, { useState, useEffect } from "react";
import { OrbitingCircles } from "./magicui/orbiting-circles";
import { useLanguage } from "@/hooks/Language";

const Orbiting = () => {
  const { currentLanguage } = useLanguage();
  // const [radius, setRadius] = useState(500);
  // const [iconSize, setIconSize] = useState(50);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setRadius(300);
  //       setIconSize(40);
  //     } else if (window.innerWidth < 1024) {
  //       setRadius(350);
  //       setIconSize(40);
  //     } else {
  //       setRadius(500);
  //       setIconSize(50);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const content = {
    EN: {
      title1: "Complete Workflow Automation.",
      description1:
        "Iacall executes comprehensive actions throughout the patient journey - sending appointment confirmations, processing payment links, updating CRM systems, and managing WhatsApp communications automatically",
      title2: "Execute actions like a real person.",
      description2:
        "IAcall sends emails, WhatsApps, payment links, reminders, and much more...",
      talkToSales: "Get Started",
    },
    ES: {
      title1: "Automatización Completa del Flujo de Trabajo.",
      description1:
        "Iacall ejecuta acciones integrales durante todo el proceso del paciente: envía confirmaciones de citas, procesa enlaces de pago, actualiza sistemas CRM y gestiona comunicaciones de WhatsApp automáticamente",
      title2: "Ejecuta acciones como una persona real.",
      description2:
        "IAcall envía correos electrónicos, WhatsApps, enlaces de pago, recordatorios y mucho más...",
      talkToSales: "Empezar ahora",
    },
  };

  return (
    <section className="max-w-screen-2xl mx-auto">
      {/* <div className="relative flex h-[900px]  md:h-[600px] w-full flex-col items-center justify-center mb-[-200px] z-[-2] overflow-hidden px-4 md:px-8">
        <OrbitingCircles radius={radius} iconSize={iconSize}>
          <img
            src="/Orbiting/Hubspot.avif"
            alt="Hubspot Logo"
            className="rounded-full"
          />
          <img
            src="/Orbiting/Jira.avif"
            alt="Jira Logo"
            className="rounded-full"
          />
          <img
            src="/Orbiting/Loom.avif"
            alt="Loom Logo"
            className="rounded-full"
          />
          <img
            src="/Orbiting/MailChimp.avif"
            alt="MailChimp Logo"
            className="rounded-full"
          />
          <img
            src="/Orbiting/Slack.avif"
            alt="Slack Logo"
            className="rounded-full"
          />
          <img
            src="/Orbiting/WhatsApp.avif"
            alt="WhatsApp Logo"
            className="rounded-full"
          />
          <img
            src="/Orbiting/Zoom.avif"
            alt="Zoom Logo"
            className="rounded-full"
          />
        </OrbitingCircles>

        <div className="w-full md:w-3/4 lg:w-2/4 mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 md:mb-6">
            {content[currentLanguage].title1}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            {content[currentLanguage].description1}
          </p>
        </div>
      </div> */}

      <div className="bg-white p-4 md:p-8 rounded-2xl mx-4 md:mx-20 mb-20 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-2/4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 md:mb-6">
              {content[currentLanguage].title2}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {content[currentLanguage].description2}
            </p>
            <button className="mt-3 px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#196f95] text-white font-medium text-sm md:text-base tracking-wide hover:bg-[#145d7d] transition-colors">
              <a href="/contact" className="block">
                {content[currentLanguage].talkToSales}
              </a>
            </button>
          </div>
          <div className="hidden md:block w-2/4"></div>
        </div>
      </div>
    </section>
  );
};

export default Orbiting;

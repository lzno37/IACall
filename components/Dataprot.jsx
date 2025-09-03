"use client";

import { ShieldCheck, Lock, Activity } from "lucide-react";
import { useLanguage } from "@/hooks/Language";

const Dataprot = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Bulletproof Data Protection",
      badge1: "Always Secure",
      badge2: "Real-Time Monitoring",
      badge3: "Threat Detection",
    },
    ES: {
      title: "Protección de Datos a Prueba de Balas",
      badge1: "Siempre Seguro",
      badge2: "Monitoreo en Tiempo Real",
      badge3: "Detección de Amenazas",
    },
  };

  return (
    <div className=" bg-white text-gray-900 rounded-2xl p-5  space-y-4">
      {/* Header with Icon Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
        <ShieldCheck size={16} className="text-green-600" />
        <span className="text-sm font-medium text-green-700">
          {content[currentLanguage].title}
        </span>
      </div>
      {/* Pill-like Highlights */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm">
          <Lock size={16} className="text-blue-600" />
          <span>{content[currentLanguage].badge1}</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm">
          <Activity size={16} className="text-red-600" />
          <span>{content[currentLanguage].badge2}</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm">
          <ShieldCheck size={16} className="text-green-600" />
          <span>{content[currentLanguage].badge3}</span>
        </div>
      </div>
    </div>
  );
};

export default Dataprot;

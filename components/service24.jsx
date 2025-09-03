"use client";

import { Clock, PhoneCall, Globe2, Headphones } from "lucide-react";
import { useLanguage } from "@/hooks/Language";

const Service24 = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "24/7 Service",
      badge1: "Never Miss a Call",
      badge2: "Available Around the Clock",
      badge3: "Assist Customers Anywhere",
    },
    ES: {
      title: "Servicio 24/7",
      badge1: "Nunca Pierdas una Llamada",
      badge2: "Disponible Todo el Tiempo",
      badge3: "Asistir a Clientes Desde Cualquier Lugar",
    },
  };

  return (
    <div className="bg-white text-gray-900 rounded-2xl p-5  space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
        <Clock size={16} className="text-blue-600" />
        <span className="text-sm font-medium text-blue-700">
          {content[currentLanguage].title}
        </span>
      </div>
      {/* Pill-like Feature Highlights */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm">
          <PhoneCall size={16} className="text-green-600" />
          <span>{content[currentLanguage].badge1}</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm">
          <Headphones size={16} className="text-blue-600" />
          <span>{content[currentLanguage].badge2}</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm">
          <Globe2 size={16} className="text-purple-600" />
          <span>{content[currentLanguage].badge3}</span>
        </div>
      </div>
    </div>
  );
};

export default Service24;

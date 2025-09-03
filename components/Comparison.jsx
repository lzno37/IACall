"use client";
import React from "react";
import { useLanguage } from "@/hooks/Language";
import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Check, X } from "lucide-react";

const Comparison = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      badge: "Comparison",
      title: "Why Choose Aiphier?",
      desc: "See how we compare against others in performance/growth",
      p1: "Full customization and data security",
      p2: "Real-time, AI-powered analytics",
      p3: "Automated processes, reducing overhead",
      p4: "24/7 expert support and AI guidance",
      p5: "Seamless growth and leading-edge adaptability",
      w1: "Slower execution and lack of personalization",
      w2: "Requires manual updates as you scale",
      w3: "Limited or delayed analytics",
      w4: "Higher labor costs, less automation",
      w5: "Generic support or none at all",
    },
    ES: {
      badge: "Comparacion",
      title: "¿Por qué elegir Aiphier?",
      desc: "Vea en que nos diferenciamos",
      p1: "Personalización completa y seguridad de datos",
      p2: "Análisis en tiempo real impulsados por IA",
      p3: "Procesos automatizados, reduciendo costos indirectos",
      p4: "Soporte experto 24/7 y orientación de IA",
      p5: "Crecimiento fluido y adaptabilidad de vanguardia",
      w1: "Ejecución lenta y falta de personalización.",
      w2: "Requiere actualizaciones manuales a medida que escalas",
      w3: "Análisis limitado o retrasado",
      w4: "Costos laborales más altos, menos automatización",
      w5: "Soporte genérico o ninguno en absoluto",
    },
  };

  return (
    <section className="flex flex-col p-16 max-lg:p-8 max-md:p-4 bg-white font-sans max-w-screen-2xl mx-auto">
      {/* Badge Section */}
      <motion.div
        className="flex gap-2 items-center justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
          {content[currentLanguage].badge}
        </span>
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center mb-14 max-lg:flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl max-xl:text-5xl text-center font-light text-gray-900 mb-4">
          {content[currentLanguage].title}
        </h1>

        <p className="text-gray-600 text-sm text-center">
          {content[currentLanguage].desc}
        </p>
      </motion.div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        {/* Others Side */}
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-6">
            <span className="text-xl text-gray-400 font-light flex gap-2 items-center">
              <Layers />
              Others
            </span>
          </div>
          <div className="space-y-4 w-full">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={`w${num}`}
                className="flex items-center p-4  rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: num * 0.1 }}
              >
                <span className="text-sm text-gray-500 flex gap-2 items-center">
                  <X />
                  {content[currentLanguage][`w${num}`]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Aiphier Side */}
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-6">
            <Image
              src="/Logo.png"
              alt="Aiphier Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="space-y-4 w-full ">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={`p${num}`}
                className="flex items-center p-4  rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: num * 0.1 }}
              >
                <span className="text-sm text-gray-700 flex gap-2 items-center">
                  <Check />
                  {content[currentLanguage][`p${num}`]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from "@/hooks/Language";

const faqItems = {
  EN: [
    {
      question: "How does IACall work?",
      answer:
        "IACall's core service is a Voice AI Agent that answers inbound calls, understands the caller's intent, provides smart automated responses, and routes calls when needed. It integrates with your current phone system and continuously improves with use. In addition, we also provide workflow automations across business areas like sales, marketing, and support.",
    },
    {
      question: "Do I need technical knowledge to use your service?",
      answer:
        "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals, and we'll automate the rest.",
    },
    {
      question: "What type of integrations are compatible with IACall?",
      answer:
        "IACall integrates seamlessly with popular CRM systems like Salesforce, HubSpot, and Pipedrive, as well as communication platforms such as Twilio, RingCentral, and Zoom Phone. We also support integration with calendar applications, email systems, and custom APIs to fit your specific workflow requirements.",
    },
    {
      question: "What types of processes can you automate?",
      answer:
        "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most clients see their first automation/agent live within 1-2 weeks, depending on complexity and the number of workflows.",
    },
    {
      question: "Is your AI secure and compliant?",
      answer:
        "Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.",
    },
  ],
  ES: [
    {
      question: "¿Cómo funciona IACall?",
      answer:
        "El servicio principal de IACall es un Agente de Voz con IA que atiende llamadas entrantes, entiende la intención del cliente, ofrece respuestas automáticas inteligentes y redirige la llamada cuando es necesario. Se integra con tu sistema telefónico actual y mejora de forma continua con el uso. Además, ofrecemos automatizaciones de procesos en áreas como ventas, marketing y soporte.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar su servicio?",
      answer:
        "No, en absoluto. Nuestro equipo se encarga de la configuración, integración y optimización. Tú solo concéntrate en tus objetivos, nosotros automatizamos el resto.",
    },
    {
      question: "¿Qué tipo de integraciones son compatibles con IACall",
      answer:
        "IACall se integra perfectamente con sistemas CRM populares como Salesforce, HubSpot y Pipedrive, así como con plataformas de comunicación como Twilio, RingCentral y Zoom Phone. También ofrecemos integración con aplicaciones de calendario, sistemas de correo electrónico y APIs personalizadas para adaptarnos a los requisitos específicos de tu flujo de trabajo",
    },
    {
      question: "¿Qué tipos de procesos se pueden automatizar?",
      answer:
        "Estamos especializados en automatizar flujos de trabajo repetitivos en operaciones, marketing, ventas y soporte al cliente mediante IA y lógica personalizada.",
    },
    {
      question: "¿Cuánto tiempo tarda la implementación?",
      answer:
        "La mayoría de los clientes ven su primera automatización/agente en vivo en 1-2 semanas, dependiendo de la complejidad y el número de flujos de trabajo.",
    },
    {
      question: "¿Es segura y cumple con la normativa su IA?",
      answer:
        "Por supuesto. Aplicamos prácticas de seguridad de nivel empresarial y garantizamos el cumplimiento con las principales normativas de protección de datos como el GDPR.",
    },
  ],
};

const FaQs = () => {
  const { currentLanguage } = useLanguage();


  const currentFaqItems = faqItems[currentLanguage] || faqItems.EN;

  return (
    <section
      id="faq"
      className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto"
    >
      {/* Badge Section with animation */}
      <motion.div
        className="flex justify-center items-center lg:justify-start lg:items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="px-4 py-2 rounded-full mb-8 md:mb-12 border border-gray-200 bg-white text-[#196f95] text-xs font-light">
          {currentLanguage === "ES" ? "Preguntas Frecuentes" : "FAQ"}
        </span>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Title Section with animation */}
        <motion.div
          className="w-full lg:w-[400px] flex-shrink-0 flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-black text-4xl md:text-5xl lg:text-5xl font-light mb-4 md:mb-5 leading-tight">
            {currentLanguage === "ES" ? (
              <>
                Preguntas
                <br />
                Frecuentes
              </>
            ) : (
              <>
                Frequently
                <br />
                Asked Questions
              </>
            )}
          </h2>
          <a
            href="/contact"
            className="text-[#196f9f] text-sm md:text-base hover:underline"
          >
            {currentLanguage === "ES"
              ? "Contáctenos para saber más"
              : "Contact us to learn more"}
          </a>
        </motion.div>

        {/* FAQ Accordion Section with staggered animation */}
        <motion.div
          className="flex flex-col gap-3 md:gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {currentFaqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <Accordion
                type="single"
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white"
                collapsible
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="font-light text-gray-900 text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-light text-xs leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaQs;

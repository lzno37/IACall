"use client";
import React, { useState } from "react";
import { useLanguage } from "@/hooks/Language";
import { motion } from "framer-motion";

export const metadata = {
  title: "Contacto | IACall",
  description:
    "¿Dudas o quieres ver IACall en acción? Agenda una demo gratuita o escríbenos. Te ayudamos a activar agentes de IA 24/7 para impulsar tu negocio.",
};

export default function Contact() {
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    more: "",
    phone: "",
    email: "",
    name: "",
    agreeComms: false,
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("✅ Your request has been submitted successfully!");
          setFormData({
            more: "",
            phone: "",
            email: "",
            name: "",
            agreeComms: false,
            acceptTerms: false,
          });
          setTimeout(() => setSuccessMessage(""), 5000);
        } else {
          alert("Failed to submit demo request.");
        }
      })
      .catch((error) => {
        console.error("Error submitting demo request:", error);
        alert("Failed to submit demo request.");
      })
      .finally(() => setLoading(false));
  };

  const Lang = {
    EN: {
      title: "We'd Love to Help You Out",
      name: "Name",
      company: "Tell Us More ",
      email: "Email",
      phone: "Phone",
      button: "Try Now",
      agreeComms:
        "I agree to receive commercial communications and news about Ringr via email. I understand that I can withdraw my consent at any time.",
      acceptTerms: "I accept the Privacy Policy and Legal Notice",
      emailUs: "Email Us",
      emaildesc:
        "Facing technical challenges or product concerns? We’re here to assist",
      sales: "Schedule a Personalized Demo",
      saleDesc: "Discover how IACall can support your Growth and Goals",
    },
    ES: {
      title: "Nos encantaría ayudarte",
      name: "Nombre",
      company: "Cuéntanos más",
      email: "Correo electrónico",
      phone: "Teléfono",
      button: "Probar ahora",
      agreeComms:
        "Acepto recibir comunicaciones comerciales y noticias sobre Ringr por correo electrónico. Entiendo que puedo retirar mi consentimiento en cualquier momento.",
      acceptTerms: "Acepto la Política de Privacidad y el Aviso Legal",
      emailUs: "Envíanos un correo electrónico",
      emaildesc:
        "¿Enfrentando desafíos técnicos o teniendo dudas sobre el producto? Estamos aquí para ayudarte.",
      sales: "Agenda una Demo ",
      saleDesc:
        "Descubre cómo IACall puede impulsar tu negocio y resolver tus necesidades.",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20 rounded-3xl mx-10">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* Support Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-light text-neutral-700 text-left">
              {Lang[currentLanguage].emailUs}
            </h2>
            <p className="text-neutral-500 text-left">
              {Lang[currentLanguage].emaildesc}
            </p>
            <a
              href="mailto:info@iacall.es"
              className="text-[#196f95] hover:underline font-medium"
            >
              info@iacall.es
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:row-span-2 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl md:text-4xl font-light text-center mb-8 text-neutral-800">
                {Lang[currentLanguage].title}
              </h1>

              <div className="space-y-6">
                {[
                  { label: "name", placeholder: "John Doe" },
                  {
                    label: "email",
                    placeholder: "info@iacall.es",
                    type: "email",
                  },
                  { label: "phone", placeholder: "+1", type: "tel" },
                  { label: "more", placeholder: "I Have ...... " },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block mb-2 text-sm font-light text-gray-700">
                      {Lang[currentLanguage][field.label]}
                    </label>
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      value={formData[field.label]}
                      onChange={(e) =>
                        handleInputChange(field.label, e.target.value)
                      }
                      disabled={loading}
                      className="w-full p-4 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#196f95] focus:ring-2 focus:ring-[#196f95]/20 transition-all duration-200 disabled:bg-gray-100"
                    />
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className={`w-full mt-8 py-4 rounded-lg text-white font-medium text-base border-none cursor-pointer transition-colors duration-200 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#196f95] hover:bg-[#145a7a]"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </div>
                ) : (
                  Lang[currentLanguage].button
                )}
              </motion.button>

              {successMessage && (
                <p className="text-green-600 text-sm text-center mt-4">
                  {successMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Sales Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-light text-neutral-700">
              {Lang[currentLanguage].sales}
            </h2>
            <p className="text-neutral-500 text-left">
              {Lang[currentLanguage].saleDesc}
            </p>
            <a
              href="https://calendly.com/agentesiacall"
              className="text-[#196f95] hover:underline font-medium"
            >
              Book a Call
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

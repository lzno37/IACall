"use client";
import React, { useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { useLanguage } from "@/hooks/Language";

const Contact = () => {
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    company: "",
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
          setSuccessMessage("✅ Thank you! Your request has been submitted.");
          setFormData({
            company: "",
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
      badge: "Contact Us",
      title: "Try Demo",
      name: "Name",
      company: "Company",
      email: "Coporate Email",
      phone: "Phone",
      button: "Try Now",
      agreeComms:
        "I agree to receive commercial communications and news about IAcall via email. I understand that I can withdraw my consent at any time.",
      acceptTerms: "I accept the Privacy Policy and Legal Notice",
    },
    ES: {
      badge: "Contáctanos",
      title: "Probar Demo",
      name: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono",
      button: "Probar ahora",
      agreeComms:
        "Acepto recibir comunicaciones comerciales y noticias sobre IAcall por correo electrónico. Entiendo que puedo retirar mi consentimiento en cualquier momento.",
      acceptTerms: "Acepto la Política de Privacidad y el Aviso Legal",
    },
  };

  return (
    <AuroraBackground>
      <section className="py-12 sm:py-16 lg:py-20 flex flex-col items-center z-20 justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex justify-center">
          <span className="px-3 sm:px-4 py-2 mb-2 sm:mb-8 rounded-full border border-gray-200 bg-white text-[#196f95] text-xs font-light">
            {Lang[currentLanguage].badge}
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full max-w-2xl p-0 sm:p-8 lg:p-10 z-10 mx-auto font-sans">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-light mb-2 sm:mb-8">
              {Lang[currentLanguage].title}
            </h1>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="block mb-1.5 text-sm font-light text-gray-800">
                  {Lang[currentLanguage].name}
                </label>
                <input
                  type="text"
                  placeholder={
                    currentLanguage === "EN" ? "John Smith" : "Pablo Fernandez"
                  }
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={loading}
                  className="w-full p-3 sm:p-3.5 rounded-lg border border-gray-300 text-sm box-border outline-none focus:border-[#196f95] focus:ring-1 focus:ring-[#196f95] transition-colors disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-light text-gray-800">
                  {Lang[currentLanguage].company}
                </label>
                <input
                  type="text"
                  placeholder="IACall Technologies"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  disabled={loading}
                  className="w-full p-3 sm:p-3.5 rounded-lg border border-gray-300 text-sm box-border outline-none focus:border-[#196f95] focus:ring-1 focus:ring-[#196f95] transition-colors disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-light text-gray-800">
                  {Lang[currentLanguage].email}
                </label>
                <input
                  type="email"
                  placeholder="info@iacall.es"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={loading}
                  className="w-full p-3 sm:p-3.5 rounded-lg border border-gray-300 text-sm box-border outline-none focus:border-[#196f95] focus:ring-1 focus:ring-[#196f95] transition-colors disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-light text-gray-800">
                  {Lang[currentLanguage].phone}
                </label>
                <input
                  type="tel"
                  placeholder="+1"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={loading}
                  className="w-full p-3 sm:p-3.5 rounded-lg border border-gray-300 text-sm box-border outline-none focus:border-[#196f95] focus:ring-1 focus:ring-[#196f95] transition-colors disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Submit button with loader */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 sm:py-3.5 px-4 rounded-lg text-white font-light text-base mb-3 border-none cursor-pointer transition-colors duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#196f95] hover:bg-[#145a7a]"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </div>
              ) : (
                Lang[currentLanguage].button
              )}
            </button>

            {/* Success message */}
            {successMessage && (
              <p className="text-green-600 text-sm text-center mb-6">
                {successMessage}
              </p>
            )}

            {/* Checkboxes */}
            <div className="mb-4 text-xs sm:text-sm text-gray-500 flex items-start gap-2">
              <input
                type="checkbox"
                checked={formData.agreeComms}
                required
                disabled={loading}
                onChange={(e) =>
                  handleInputChange("agreeComms", e.target.checked)
                }
                className="mt-0.5 cursor-pointer flex-shrink-0 disabled:cursor-not-allowed"
              />
              <label className="cursor-pointer leading-5">
                {Lang[currentLanguage].agreeComms}
              </label>
            </div>

            <div className="text-xs sm:text-sm text-gray-500 flex items-start gap-2">
              <input
                type="checkbox"
                checked={formData.acceptTerms}
                required
                disabled={loading}
                onChange={(e) =>
                  handleInputChange("acceptTerms", e.target.checked)
                }
                className="mt-0.5 cursor-pointer flex-shrink-0 disabled:cursor-not-allowed"
              />
              <label className="cursor-pointer leading-5">
                I accept the{" "}
                <a
                  href="/privacy"
                  className="text-black font-medium no-underline hover:underline"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-500"> and </span>
                <a
                  href="/terms"
                  className="text-black font-medium no-underline hover:underline"
                >
                  Terms
                </a>
              </label>
            </div>
          </div>
        </form>
      </section>
    </AuroraBackground>
  );
};

export default Contact;

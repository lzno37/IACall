"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalcBackground } from "@/components/ui/calcBackground";

import { useLanguage } from "@/hooks/Language";

export default function CalcPage() {
  const { currentLanguage } = useLanguage();
  const [calculations, setCalculations] = useState({
    callsPerMonth: 1000,
    avgCallDuration: 1,
    employeeCost: 1290,
    ourCost: 0,
    othersCost: 0,
    savings: 0,
    savingsPercentage: 0,
  });

  const calculateCostRate = (calls) => {
    if (calls <= 5000) return 0.39;
    if (calls <= 9000) return 0.35;
    if (calls <= 20000) return 0.248;
    return 0.138;
  };

  const calculateCosts = () => {
    const ourRate = calculateCostRate(calculations.callsPerMonth);
    const ourTotalCost =
      calculations.callsPerMonth * ourRate * calculations.avgCallDuration;
    const othersTotalCost =
      calculations.callsPerMonth * 0.51 * calculations.avgCallDuration +
      calculations.employeeCost;
    const savings = othersTotalCost - ourTotalCost;
    const savingsPercentage = ((savings / othersTotalCost) * 100).toFixed(2);

    setCalculations((prev) => ({
      ...prev,
      ourCost: ourTotalCost.toFixed(2),
      othersCost: othersTotalCost.toFixed(2),
      savings: savings.toFixed(2),
      savingsPercentage: savingsPercentage,
    }));
  };

  useEffect(() => {
    calculateCosts();
  }, [
    calculations.callsPerMonth,
    calculations.avgCallDuration,
    calculations.employeeCost,
  ]);

  const Lang = {
    EN: {
      title: "Calculate Your Savings",
      subtitle: "See how much you could save with IAcall",
      callsLabel: "Calls per Month",
      durationLabel: "Average Call Duration (minutes)",
      employeeLabel: "Employee Cost ($)",
      ourCost: "Our Cost",
      othersCost: "Others Cost",
      savings: "Your Savings",
      savingsPercentage: "Savings",
    },
    ES: {
      title: "Calcula tus Ahorros",
      subtitle: "Mira cuánto podrías ahorrar con IAcall",
      callsLabel: "Llamadas por Mes",
      durationLabel: "Duración Promedio de Llamada (minutos)",
      employeeLabel: "Costo de Empleado ($)",
      ourCost: "Nuestro Costo",
      othersCost: "Costo de Otros",
      savings: "Tus Ahorros",
      savingsPercentage: "Ahorro",
    },
  };

  return (
    <CalcBackground className="h-full w-full">
      <section className="relative w-full min-h-screen py-30 px-4 md:px-8  z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
            {/* Left side - Title and Description */}
            <motion.div
              className="lg:pr-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-light mb-2 md:mb-6 text-gray-900">
                {Lang[currentLanguage].title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {Lang[currentLanguage].subtitle}
              </p>
            </motion.div>

            {/* Right side - Calculator */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Sliders */}
              <div className="space-y-8 mb-8">
                <div>
                  <label className="block mb-2 text-sm font-light">
                    {Lang[currentLanguage].callsLabel}:{" "}
                    {calculations.callsPerMonth}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    value={calculations.callsPerMonth}
                    onChange={(e) =>
                      setCalculations((prev) => ({
                        ...prev,
                        callsPerMonth: parseInt(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#196f95]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-light">
                    {Lang[currentLanguage].durationLabel}:{" "}
                    {calculations.avgCallDuration}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={calculations.avgCallDuration}
                    onChange={(e) =>
                      setCalculations((prev) => ({
                        ...prev,
                        avgCallDuration: parseInt(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#196f95]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-light">
                    {Lang[currentLanguage].employeeLabel}:
                    {calculations.employeeCost}€
                  </label>
                  <input
                    type="range"
                    min="1290"
                    max="10000"
                    value={calculations.employeeCost}
                    onChange={(e) =>
                      setCalculations((prev) => ({
                        ...prev,
                        employeeCost: parseInt(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#196f95]"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="text-sm font-light mb-2">
                    {Lang[currentLanguage].ourCost}
                  </h3>
                  <p className="text-2xl font-light text-[#196f95]">
                    {calculations.ourCost}€
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="text-sm font-light mb-2">
                    {Lang[currentLanguage].othersCost}
                  </h3>
                  <p className="text-2xl font-light text-red-500">
                    {calculations.othersCost}€
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 mt-4 rounded-xl border-2 border-emerald-100">
                <h3 className="text-sm font-medium mb-2 text-emerald-600">
                  {Lang[currentLanguage].savings}
                </h3>
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-semibold text-emerald-600">
                    {calculations.savings}€
                  </p>
                  <p className="text-lg font-medium text-emerald-500">
                    {calculations.savingsPercentage}%{" "}
                    {Lang[currentLanguage].savingsPercentage}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </CalcBackground>
  );
}

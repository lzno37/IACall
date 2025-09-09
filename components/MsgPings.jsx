"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = [
  {
    id: 1,
    content: "Nueva incidencia reportada",
    name: "Edificio Sol",
    designation: "Ascensor averiado",
    icon: <img src="favicon.png" className="w-5 h-5" />,
    badge: "bg-[#196f95]",
    time: "Ahora",
  },
  {
    id: 2,
    content: "Nueva reserva confirmada",
    name: "Pablo Fernández",
    designation: "Mesa para 2 personas",
    icon: <img src="favicon.png" className="w-5 h-5" />,
    badge: "bg-[#196f95]",
    time: "Ahora",
  },
  {
    id: 3,
    content: "Reunión legal confirmada",
    name: "Ana Suárez",
    designation: "Asesoría en herencia",
    icon: <img src="favicon.png" className="w-5 h-5" />,
    badge: "bg-[#196f95]",
    time: "Ahora",
  },
  {
    id: 4,
    content: "Nueva cita programada",
    name: "Lucía Romero",
    designation: "Consulta, Urología",
    icon: <img src="favicon.png" className="w-5 h-5" />,
    badge: "bg-[#196f95]",
    time: "Ahora",
  },
];

const MsgPings = () => {
  const [hover, setHover] = useState(false);

  const rotations = [-10, 6, -4, 8];
  const positions = [-20, -10, 15, 25];

  return (
    <div
      className="w-full flex justify-center items-center py-12"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative flex flex-wrap justify-center gap-6 max-w-2xl">
        {Card.map((item, index) => (
          <motion.div
            key={item.id}
            className="cursor-pointer w-80 rounded-xl shadow-md bg-white border flex items-center p-4 gap-4"
            animate={{
              rotate: hover ? 0 : rotations[index % rotations.length],
              y: hover ? 0 : positions[index % positions.length],
              scale: hover ? 1.02 : 0.95,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Small square icon box */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-md ${item.badge}`}
            >
              {item.icon}
            </div>

            {/* Notification content */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">
                  {item.content}
                </p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
              <p className="text-xs text-gray-600">
                {item.name} – {item.designation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MsgPings;

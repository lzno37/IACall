import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Add this import

export default function MedicalCallReferral({
  title,
  description,
  Image: imageSrc, // Rename prop to avoid confusion
  type,
}) {
  return (
    <motion.div
      className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-8 sm:my-12 md:my-16 shadow-sm max-w-screen-2xl 2xl:mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={`flex flex-col ${
          type === "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 md:gap-8 lg:gap-12`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {/* Text Content */}
        <motion.div
          className="flex-1 w-full md:w-auto text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="flex-shrink-0 relative w-full md:w-auto mt-6 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full md:w-80 lg:w-96 h-48 sm:h-60 md:h-72">
            <Image
              src={imageSrc}
              alt="Feature illustration"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 320px, 384px"
              className="object-cover"
              priority
              quality={85}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { company, whatsappMessage } from "@/data/company";

interface WhatsAppButtonProps {
  className?: string;
  text?: string;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export const WhatsAppButton = ({ className, text }: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const url = `https://wa.me/${company.phoneWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

  if (text) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`bg-primary hover:bg-primary-dark text-secondary font-bold py-3 px-6 rounded-full text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${className}`}
      >
        <motion.div
          className="absolute inset-0 bg-white/10 blur-md"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <WhatsAppIcon className="w-6 h-6 relative z-10" />
        <span className="relative z-10">{text}</span>
      </motion.a>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-secondary text-white text-[10px] font-black py-1.5 px-3 rounded-lg shadow-2xl mb-2 mr-1 whitespace-nowrap relative border border-white/10 uppercase tracking-widest"
          >
            Cotiza tu Proyecto
            <div className="absolute -bottom-1 right-3 w-2 h-2 bg-secondary rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-primary rounded-full blur-xl pointer-events-none"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 bg-primary rounded-full blur-md opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.15 }}
          className="relative bg-accent text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center z-10 border-2 border-white/10"
        >
          <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />
        </motion.a>
      </div>
    </div>
  );
};

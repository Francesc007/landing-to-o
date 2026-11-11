"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const highlights = [
  "Consultoría PMI y metodologías ágiles",
  company.slogan.replace(/¡|!/g, ""),
  "Presupuestos ágiles",
  "Obra civil e instalaciones",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-20 md:pb-0 overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-construccion.jpg"
          alt="Obra de construcción en proceso"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/70 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-30">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tighter">
            Construcción y Consultoría con{" "}
            <span className="text-primary italic">Alto Nivel</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 font-medium max-w-lg leading-relaxed border-l-0 md:border-l-2 border-primary md:pl-6">
            Desde <span className="text-white font-bold">Toluca</span> y el centro del país,
            materializamos proyectos de construcción e ingeniería con estándares de excelencia.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full md:w-auto">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center md:justify-start gap-3 text-slate-200 font-bold"
              >
                <CheckCircle className="text-primary shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/servicios"
              className="px-8 py-4 rounded-full bg-primary text-secondary font-black hover:bg-primary-dark hover:text-white transition-all duration-300 shadow-2xl shadow-primary/30 text-center uppercase tracking-widest text-sm border-2 border-primary w-full sm:w-auto"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="/experiencia"
              className="px-8 py-4 rounded-full bg-white/10 border-2 border-primary text-white font-black hover:bg-primary/20 transition-all duration-300 text-center uppercase tracking-widest text-sm backdrop-blur-md w-full sm:w-auto"
            >
              Ver Proyectos
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end items-center order-2"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden bg-black border-b-[12px] border-primary p-8 md:p-12">
              <Image
                src="/logo.png"
                alt={company.shortName}
                width={480}
                height={480}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { Trust } from "@/components/sections/Trust";
import { Projects } from "@/components/sections/Projects";
import { Building2, Factory, Home, Store } from "lucide-react";
import Image from "next/image";
import { company, whatsappMessage } from "@/data/company";

const stats = [
  { value: "14", label: "Proyectos documentados" },
  { value: "16", label: "Clientes en cartera" },
  { value: "6", label: "Líneas de servicio" },
  { value: "100%", label: "Compromiso de calidad" },
];

const sectors = [
  { icon: <Store size={40} />, title: "Comercial", desc: "Desarrollos retail y espacios corporativos." },
  { icon: <Factory size={40} />, title: "Industrial", desc: "Parques industriales e infraestructura técnica." },
  { icon: <Home size={40} />, title: "Residencial", desc: "Fraccionamientos y vivienda." },
  { icon: <Building2 size={40} />, title: "Gobierno", desc: "Obras y servicios para municipios." },
];

export default function ExperienciaPage() {
  const waUrl = `https://wa.me/${company.phoneWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-15 min-h-screen bg-slate-50/30">
      <section className="relative bg-secondary text-white py-35 px-6 md:px-12 overflow-hidden">
        <motion.div className="absolute inset-0 z-0">
          <Image src="/5.png" alt="Proyectos T&T" fill className="object-cover object-top opacity-35" priority />
          <div className="absolute inset-0 bg-secondary/85" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">
            Portafolio de <span className="text-primary">Proyectos</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Referencias del currículum empresarial: obra comercial, industrial y residencial en CDMX, Edo.
            de México, Puebla e Hidalgo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center"
              >
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary text-center mb-10 uppercase">Sectores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-2xl text-center border border-slate-100">
                <div className="text-primary-dark flex justify-center mb-4">{s.icon}</div>
                <h3 className="font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-sm text-industrial-grey">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-900 py-12 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 right-0 bg-white/95" />
        <div className="relative z-10">
          <Trust />
        </div>
      </div>

      <section className="py-20 bg-secondary text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">¿Listo para su próximo proyecto?</h2>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary-dark hover:text-white transition-colors"
        >
          Agendar por WhatsApp
        </a>
      </section>
    </div>
  );
}

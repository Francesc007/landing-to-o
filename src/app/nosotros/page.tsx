"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Target, Eye } from "lucide-react";
import Image from "next/image";
import { company } from "@/data/company";
import { History } from "@/components/sections/History";

const valueIcons = [ShieldCheck, Handshake, Target, Eye];

export default function NosotrosPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-24 min-h-screen relative bg-slate-50/30">
      <section className="relative bg-secondary text-white py-35 px-6 md:px-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image src="/2.png" alt={company.shortName} fill className="object-cover object-top opacity-35" priority />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight uppercase tracking-tight"
          >
            {company.shortName}
          </motion.h1>
          <p className="text-xl text-primary font-bold mb-4">{company.slogan}</p>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{company.vision.slice(0, 200)}…</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">Misión</h2>
            <p className="text-industrial-grey leading-relaxed">{company.mission}</p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">Visión</h2>
            <p className="text-industrial-grey leading-relaxed">{company.vision}</p>
          </motion.div>
        </div>
      </section>

      <History />

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12 uppercase">Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.values.map((val, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <motion.div
                  key={val.title}
                  {...fadeInUp}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <Icon className="text-primary-dark mb-4" size={32} />
                  <h3 className="font-bold text-secondary mb-2">{val.title}</h3>
                  <p className="text-sm text-industrial-grey">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

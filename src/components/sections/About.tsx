"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, ShieldCheck, Handshake } from "lucide-react";
import { company } from "@/data/company";

const pillarIcons = [ShieldCheck, Handshake, Rocket, Eye];

export const About = () => {
  const pillars = company.values.slice(0, 4);

  return (
    <section id="nosotros" className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="glint-blue w-96 h-96 -top-20 -left-20 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-secondary mb-6">Quiénes Somos</h2>
            <div className="w-20 h-1.5 bg-primary-dark mb-8 rounded-full" />
            <p className="text-lg text-industrial-grey leading-relaxed mb-6">
              <strong className="text-secondary">{company.shortName}</strong> ofrece construcción,
              instalaciones y consultoría de proyectos desde el Estado de México, con enfoque en
              calidad, honestidad y compromiso en cada obra.
            </p>
            <p className="text-sm text-industrial-grey leading-relaxed">{company.mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-primary-dark mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Misión</h3>
              <p className="text-industrial-grey text-sm leading-relaxed">{company.mission}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-primary-dark mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Visión</h3>
              <p className="text-industrial-grey text-sm leading-relaxed">{company.vision}</p>
            </div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-secondary text-center mb-12 italic">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? ShieldCheck;
              return (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-2xl border-b-4 border-primary-dark shadow-lg text-center"
                >
                  <div className="text-primary-dark flex justify-center mb-4 opacity-80">
                    <Icon size={32} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">{pillar.title}</h4>
                  <p className="text-xs text-industrial-grey">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

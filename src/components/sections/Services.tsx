"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield } from "lucide-react";
import { serviceGroups, company } from "@/data/company";

const groupImages: Record<string, string> = {
  acabados: "/3.png",
  "obra-civil": "/3.png",
  electrico: "/4.png",
  plomeria: "/4.png",
  estructura: "/4.png",
  consultoria: "/2.png",
};

export const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-black text-secondary mb-4 uppercase tracking-tighter italic">
            Soluciones Integrales
          </h2>
          <div className="w-24 h-1 bg-primary-dark mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 font-medium max-w-2xl mx-auto">
            Catálogo de capacidades según nuestro currículum empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {serviceGroups.map((group, index) => (
            <motion.article
              key={group.id}
              id={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden scroll-mt-28"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={groupImages[group.id] ?? "/3.png"}
                  alt={group.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>

              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold mb-4 text-secondary uppercase tracking-tight group-hover:text-primary-dark transition-colors">
                  {group.title}
                </h3>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 space-y-2 grow list-disc pl-4">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary-dark font-bold text-[10px] uppercase tracking-widest border-t pt-4 border-slate-50">
                  <Shield size={12} />
                  {company.slogan}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

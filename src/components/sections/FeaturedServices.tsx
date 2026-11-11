"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { featuredServiceCards, company } from "@/data/company";

export const FeaturedServices = () => {
  return (
    <section id="servicios-principales" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tighter italic">
              Nuestros <span className="text-primary-dark">Servicios</span>
            </h2>
            <div className="w-24 h-1 bg-primary-dark rounded-full mx-auto md:mx-0" />
            <p className="mt-6 text-industrial-grey text-lg font-medium leading-relaxed">
              {company.servicesIntro}
            </p>
          </div>
          <Link
            href={company.catalogPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl uppercase tracking-widest text-xs w-full md:w-auto"
          >
            Ver Carta / Currículum
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServiceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight italic">
                  {service.title}
                </h3>
                <p className="text-slate-200 text-sm mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em] w-fit"
                >
                  <Shield size={14} />
                  <span>Conoce más</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

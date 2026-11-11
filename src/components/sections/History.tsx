"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { historyMilestones } from "@/data/company";

const milestones = historyMilestones ?? [];

const idleGradient = "linear-gradient(155deg, #ffffff 0%, #f8ead6 42%, #e7c48a 100%)";
const activeGradient = "linear-gradient(145deg, #0D0D0D 0%, #3b2c1a 46%, #A67C3D 100%)";

export const History = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="historia" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter italic">
            Nuestra <span className="text-primary-dark">Historia</span>
          </h2>
          <div className="w-24 h-1 bg-primary-dark rounded-full mx-auto mt-4" />
          <p className="mt-6 text-industrial-grey text-lg max-w-2xl mx-auto">
            Elige un año y recorre la evolución de T&T, de 2015 a 2024.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => {
            const selected = index === active;
            return (
              <li key={`${item.year}-${item.client}`}>
                <motion.button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={selected}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex w-full flex-col overflow-hidden rounded-3xl text-left shadow-md"
                  style={{ background: selected ? activeGradient : idleGradient }}
                >
                  <div className="relative w-full" style={{ height: "18rem" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative px-5 py-4">
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full"
                      style={{ background: "radial-gradient(circle, rgba(212,163,106,0.55) 0%, transparent 70%)" }}
                      animate={{ scale: selected ? 1.15 : 1, opacity: selected ? 0.9 : 0.4 }}
                      transition={{ duration: 1.6, repeat: selected ? Infinity : 0, repeatType: "reverse" }}
                    />
                    <p
                      className={`relative text-xs font-black uppercase tracking-[0.18em] ${
                        selected ? "text-primary" : "text-primary-dark"
                      }`}
                    >
                      {item.client}
                    </p>
                    <div className="relative mt-2 flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 shrink-0 items-center rounded-full px-3 text-sm font-black ${
                          selected ? "bg-primary text-secondary" : "bg-secondary text-primary"
                        }`}
                      >
                        {item.year}
                      </span>
                      <h3
                        className={`text-lg font-bold leading-snug ${
                          selected ? "text-white" : "text-secondary"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";

export const Contact = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.googleMapsQuery}`;

  return (
    <section id="formulario" className="section-padding bg-white relative overflow-hidden">
      {/* Destello Azul */}
      <div className="glint-blue w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="max-w-2xl mx-auto relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 uppercase tracking-tighter italic">¿Tienes un proyecto en mente?</h2>

        <form 
          action={`https://formsubmit.co/${encodeURIComponent(company.email)}`} 
          method="POST"
          className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden text-left"
        >
          {/* Elementos decorativos de color */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-dark/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          <div className="grid gap-5 relative z-10">
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div whileFocus={{ scale: 1.01 }} className="relative group">
                <label className="block text-[10px] font-black text-secondary mb-1.5 uppercase tracking-[0.2em] group-focus-within:text-primary transition-colors">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full p-3.5 rounded-xl border-2 border-slate-100 focus:border-primary outline-none bg-slate-50/50 focus:bg-white transition-all duration-300 shadow-sm focus:shadow-md" 
                  placeholder="Ej. Juan Pérez" 
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.01 }} className="relative group">
                <label className="block text-[10px] font-black text-secondary mb-1.5 uppercase tracking-[0.2em] group-focus-within:text-primary transition-colors">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full p-3.5 rounded-xl border-2 border-slate-100 focus:border-primary outline-none bg-slate-50/50 focus:bg-white transition-all duration-300 shadow-sm focus:shadow-md" 
                  placeholder="juan@empresa.com" 
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <motion.div whileFocus={{ scale: 1.01 }} className="relative group">
                <label className="block text-[10px] font-black text-secondary mb-1.5 uppercase tracking-[0.2em] group-focus-within:text-primary transition-colors">
                  Empresa o Marca
                </label>
                <input 
                  type="text" 
                  name="company"
                  className="w-full p-3.5 rounded-xl border-2 border-slate-100 focus:border-primary outline-none bg-slate-50/50 focus:bg-white transition-all duration-300 shadow-sm focus:shadow-md" 
                  placeholder="Tu organización" 
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.01 }} className="relative group">
                <label className="block text-[10px] font-black text-secondary mb-1.5 uppercase tracking-[0.2em] group-focus-within:text-primary transition-colors">
                  Servicio Requerido
                </label>
                <select 
                  name="service"
                  required
                  defaultValue=""
                  className="w-full p-3.5 rounded-xl border-2 border-slate-100 focus:border-primary outline-none bg-slate-50/50 focus:bg-white transition-all duration-300 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Obra Civil">Obra Civil</option>
                  <option value="Electromecánica">Electromecánica</option>
                  <option value="Hidrosanitarias">Hidrosanitarias</option>
                  <option value="Estructura Metálica">Estructura Metálica</option>
                  <option value="Tabla Roca y Plafones">Tabla Roca y Plafones</option>
                  <option value="Renta de Maquinaria">Renta de Maquinaria</option>
                  <option value="Remodelación de Vivienda">Remodelación de Vivienda</option>
                  <option value="Colocación de Concreto">Colocación de Concreto</option>
                  <option value="Aluminio y Vidrio">Aluminio y Vidrio</option>
                  <option value="Supervisión de Obra">Supervisión de Obra</option>
                  <option value="Carpintería">Carpintería</option>
                  <option value="Acabados y Pintura">Acabados y Pintura</option>
                  <option value="Otro">Otro</option>
                </select>
                <div className="absolute right-4 bottom-4 pointer-events-none text-primary">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </motion.div>
            </div>

            <motion.div whileFocus={{ scale: 1.005 }} className="relative group">
              <label className="block text-[10px] font-black text-secondary mb-1.5 uppercase tracking-[0.2em] group-focus-within:text-primary transition-colors">
                Detalles del Proyecto
              </label>
              <textarea 
                name="message"
                required
                rows={3} 
                className="w-full p-3.5 rounded-xl border-2 border-slate-100 focus:border-primary outline-none bg-slate-50/50 focus:bg-white transition-all duration-300 shadow-sm focus:shadow-md resize-none" 
                placeholder="Cuéntanos cómo podemos ayudarte..."
              ></textarea>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,174,239,0.3)" }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-primary-dark text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.3em] hover:bg-secondary transition-all duration-300 shadow-xl shadow-primary-dark/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Enviar Solicitud</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

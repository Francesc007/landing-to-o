"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.googleMapsQuery}`;

  const privacyText = (
    <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
      <p className="font-bold text-secondary text-lg border-b pb-2">AVISO DE PRIVACIDAD</p>
      <p>
        En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares, {company.legalName} pone a su disposición el presente aviso.
      </p>
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Responsable</p>
      <p>
        {company.legalName}, con domicilio en {company.address.full}, correo{" "}
        <a href={`mailto:${company.email}`} className="text-primary-dark">
          {company.email}
        </a>
        , es responsable del tratamiento de sus datos personales.
      </p>
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Datos recabados</p>
      <p>
        Podemos recabar nombre, teléfono, correo electrónico y datos proporcionados en el formulario
        de contacto para dar seguimiento a solicitudes de información o cotización.
      </p>
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Finalidad</p>
      <p>Contactarle respecto a los servicios de construcción y consultoría que solicite.</p>
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Derechos ARCO</p>
      <p>
        Puede solicitar acceso, rectificación, cancelación u oposición escribiendo a{" "}
        {company.email}.
      </p>
    </div>
  );

  return (
    <footer id="contacto" className="bg-secondary text-white pt-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-white/10 pb-10 mb-6">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 block">
            <Image
              src="/logo.png"
              alt={company.shortName}
              width={220}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
          <p className="text-slate-400 max-w-sm mb-4 leading-relaxed font-medium text-sm">
            {company.slogan} Construcción, consultoría e instalaciones en el centro del país.
          </p>
          <p className="text-slate-500 text-xs">RFC: {company.rfc}</p>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-lg font-bold mb-6 text-primary uppercase tracking-wider">Contacto</h4>
          <ul className="space-y-3 text-slate-300 font-medium w-fit">
            <li className="flex gap-3 items-start">
              <MapPin className="text-primary shrink-0" size={18} />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-xs leading-relaxed text-left"
              >
                {company.address.full}
              </a>
            </li>
            <li className="flex gap-3 items-center flex-wrap">
              <Phone className="text-primary shrink-0" size={18} />
              {company.phones.map((phone) => (
                <span key={phone} className="text-xs">
                  {phone}
                </span>
              ))}
            </li>
            <li className="flex gap-3 items-start">
              <Mail className="text-primary shrink-0" size={18} />
              <a
                href={`mailto:${company.email}`}
                className="hover:text-primary transition-colors text-xs"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-bold text-primary uppercase tracking-wider">Legal</h4>
          <button
            onClick={() => setShowPrivacy(true)}
            className="text-slate-300 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
            Aviso de Privacidad
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-8 gap-4">
        <p className="text-slate-400 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
          © {currentYear} {company.legalName}
        </p>
        <p className="text-slate-500 text-[9px] md:text-[10px] font-medium tracking-wider">
          Powered by{" "}
          <a
            href="https://sigmaaiagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-bold transition-colors"
          >
            Sigma AI Agency
          </a>
        </p>
      </div>

      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b flex justify-between items-center bg-slate-50">
                <Image src="/logo.png" alt="Logo T&T" width={120} height={40} className="h-8 w-auto" />
                <button
                  onClick={() => setShowPrivacy(false)}
                  aria-label="Cerrar"
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors text-secondary"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar">{privacyText}</div>
              <div className="p-6 bg-slate-50 border-t text-center">
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

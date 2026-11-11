"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const clientLogos = [
  { name: "New Era", src: "/Clientes/logos/new-era.png" },
  { name: "Sypris Technologies", src: "/Clientes/logos/sypris.png" },
  { name: "Genomma Lab.", src: "/Clientes/logos/genomma-lab.png" },
  { name: "City Junior Hoteles", src: "/Clientes/logos/city-junior.png" },
  { name: "SCT", src: "/Clientes/logos/sct.png" },
  { name: "Grimann", src: "/Clientes/logos/grimann.png" },
  { name: "Bomanite", src: "/Clientes/logos/bomanite.png" },
  { name: "Gobierno de Tianguistenco", src: "/Clientes/logos/tianguistenco.png" },
  { name: "Ayuntamiento de Ocuilan", src: "/Clientes/logos/ocuilan.png" },
  { name: "San Mateo Atenco", src: "/Clientes/logos/san-mateo-atenco.png" },
  { name: "Capulhuac", src: "/Clientes/logos/capulhuac.png" },
  { name: "Municipio de Toluca", src: "/Clientes/logos/toluca.png" },
  { name: "GTM Inmobiliaria", src: "/Clientes/logos/gtm.png" },
];

const LogoSlide = ({ name, src }: { name: string; src: string }) => (
  <div className="flex-[0_0_46%] sm:flex-[0_0_32%] md:flex-[0_0_24%] lg:flex-[0_0_20%] min-w-0 px-2 md:px-3">
    <div
      className="group relative rounded-2xl bg-white border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(166,124,61,0.16)] hover:border-primary/40"
      style={{ height: "8.5rem" }}
    >
      <div className="absolute" style={{ inset: "0.65rem" }}>
        <Image
          src={src}
          alt={`Logo de ${name}`}
          fill
          unoptimized
          sizes="280px"
          className="object-contain object-center grayscale opacity-90 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>
    </div>
  </div>
);

export const Trust = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  return (
    <section id="clientes-carrusel" className="py-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="shrink-0 text-center lg:text-left">
            <h2 className="text-xl font-bold text-secondary mb-1">Empresas que Confían</h2>
            <p className="text-primary-dark font-black text-sm uppercase tracking-[0.2em] opacity-90">
              Clientes del sector público y privado
            </p>
          </div>

          <div className="overflow-hidden flex-1 w-full" ref={emblaRef}>
            <div className="flex items-center">
              {clientLogos.map((logo) => (
                <LogoSlide key={logo.src} name={logo.name} src={logo.src} />
              ))}
              {clientLogos.map((logo) => (
                <LogoSlide key={`dup-${logo.src}`} name={logo.name} src={logo.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Hero } from "@/components/sections/Hero";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { History } from "@/components/sections/History";
import { Projects } from "@/components/sections/Projects";
import { Trust } from "@/components/sections/Trust";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-slate-50/50">
      <Hero />
      <div className="relative">
        {/* Elemento de color decorativo entre secciones */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-secondary to-transparent opacity-5" />
        <FeaturedServices />
      </div>

      <History />
      <Projects />

      {/* Cartera de Clientes con Fondo de Prestigio y Elemento de Contraste */}
      <div className="bg-slate-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        {/* Elemento blanco detrás del carrusel para resaltar logos */}
        <div className="absolute inset-y-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-inner" />

        <div className="relative z-10">
          <Trust />
        </div>
      </div>

      <Contact />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/experiencia" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled || pathname !== "/" ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="T&T Construcciones y Consultoría" 
            width={220} 
            height={75} 
            className="h-10 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`font-semibold transition-all duration-300 drop-shadow-sm ${
                isActive(link.href) 
                  ? "text-primary border-b-2 border-primary" 
                  : (isScrolled || pathname !== "/" 
                      ? "text-secondary hover:text-primary" 
                      : "text-white hover:text-primary-dark")
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contacto" 
            className="bg-primary-dark text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all duration-300 shadow-lg shadow-primary-dark/20"
          >
            Cotizar Proyecto
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors ${isScrolled || pathname !== "/" ? "text-secondary" : "text-white"}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 p-6 shadow-2xl flex flex-col gap-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`text-lg font-bold py-3 border-b border-slate-50 ${isActive(link.href) ? "text-primary" : "text-secondary"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contacto" 
            onClick={() => setIsOpen(false)}
            className="bg-primary-dark text-white text-center py-4 rounded-xl font-bold mt-2"
          >
            Cotizar Proyecto
          </Link>
        </div>
      )}
    </nav>
  );
};

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T&T Construcciones y Consultoría | Calidad, Honestidad y Compromiso",
  description:
    "Construcción, consultoría de proyectos e instalaciones en Toluca y el centro del país. Obra civil, electricidad, plomería y estructura metalica.",
  keywords: [
    "construcción toluca",
    "consultoría de proyectos",
    "obra civil",
    "instalaciones eléctricas",
    "T&T construcciones",
  ],
  authors: [{ name: "T&T Construcciones y Consultoría, S.A. de C.V." }],
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "T&T Construcciones y Consultoría",
    description:
      "Soluciones de construcción y consultoría con estándares PMI y metodologías ágiles.",
    siteName: "T&T Construcciones y Consultoría",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

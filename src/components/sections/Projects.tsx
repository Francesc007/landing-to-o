"use client";

import Image from "next/image";
import { featuredProjects } from "@/data/company";

const projectCards = featuredProjects ?? [];

const SLOTS = 4;

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter italic">
            Proyectos <span className="text-primary-dark">Exitosos</span>
          </h2>
          <div className="w-24 h-1 bg-primary-dark rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCards.map((project) => (
            <article
              key={project.id}
              className="rounded-[2rem] border-2 border-primary bg-slate-50 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-2 grid-rows-2 aspect-[16/10]">
                {Array.from({ length: SLOTS }, (_, index) => {
                  const src = project.images[index];
                  return (
                    <div key={`${project.id}-${index}`} className="relative overflow-hidden bg-slate-200">
                      {src ? (
                        <Image
                          src={src}
                          alt={`${project.title} ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-black text-secondary uppercase tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm text-industrial-grey leading-relaxed">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

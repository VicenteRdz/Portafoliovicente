import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  ShieldCheck,
  Building2,
  Factory,
  LockKeyhole,
} from 'lucide-react';
import type { Project } from '@/app/data/projects';

type Props = {
  project: Project;
  pdfUrl: string;
};

export function Project3Hero({ project, pdfUrl }: Props) {
  return (
    <div className="mb-10">
      {/* Volver */}
      <div className="mb-6">
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 font-mono text-[#a7d8c2]/80 hover:text-[#54d17a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a proyectos
        </Link>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border border-[#2ca7d8]/30 bg-[#071b1a]">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0067a8] via-[#54d17a] to-[#0067a8]" />

        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#54d17a]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-[#2ca7d8]/10 blur-3xl" />

        <div className="relative p-6 sm:p-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#54d17a]/35 bg-[#54d17a]/10">
                  <ShieldCheck className="w-4 h-4 text-[#54d17a]" />
                  <span className="text-xs font-mono text-[#54d17a] uppercase tracking-widest">
                    PR03 · SGSI
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#2ca7d8]/35 bg-[#2ca7d8]/10">
                  <LockKeyhole className="w-4 h-4 text-[#2ca7d8]" />
                  <span className="text-xs font-mono text-[#2ca7d8] uppercase tracking-widest">
                    ISO/IEC 27001:2022
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-mono text-[#e7fff3] mb-5 leading-tight">
                SGSI ProAmpac Planta San Luis Potosí
              </h1>

              <p className="text-base sm:text-lg font-mono text-[#a7d8c2]/85 max-w-3xl leading-relaxed mb-6">
                Adecuación web del proyecto PR03: Sistema de Gestión de Seguridad
                de la Información basado en ISO/IEC 27001:2022, enfocado en la
                protección de activos críticos del área de Investigación y Desarrollo.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#54d17a]/15 border border-[#54d17a] text-[#54d17a] font-mono hover:bg-[#54d17a]/25 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </a>

              </div>
            </div>

            {/* Panel lateral */}
            <div className="bg-black/30 border border-[#54d17a]/25 p-6">
              <div className="flex items-center gap-3 mb-5">
                <Building2 className="w-6 h-6 text-[#54d17a]" />
                <div>
                  <p className="text-xs font-mono text-[#54d17a] uppercase tracking-widest">
                    Organización
                  </p>
                  <p className="text-xl font-mono text-[#e7fff3]">
                    ProAmpac
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-[#2ca7d8]/20 bg-[#071b1a]/70 p-4">
                  <p className="text-xs font-mono text-[#2ca7d8] mb-1">
                    Ubicación
                  </p>
                  <p className="text-sm font-mono text-[#a7d8c2]">
                    Planta San Luis Potosí
                  </p>
                </div>

                <div className="border border-[#2ca7d8]/20 bg-[#071b1a]/70 p-4">
                  <p className="text-xs font-mono text-[#2ca7d8] mb-1">
                    Área principal
                  </p>
                  <p className="text-sm font-mono text-[#a7d8c2]">
                    Investigación y Desarrollo
                  </p>
                </div>

                <div className="border border-[#2ca7d8]/20 bg-[#071b1a]/70 p-4">
                  <p className="text-xs font-mono text-[#2ca7d8] mb-1">
                    Enfoque
                  </p>
                  <p className="text-sm font-mono text-[#a7d8c2]">
                    Confidencialidad · Integridad · Disponibilidad
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 border border-[#54d17a]/20 bg-[#54d17a]/10 p-4">
                <Factory className="w-5 h-5 text-[#54d17a] shrink-0" />
                <p className="text-xs font-mono text-[#a7d8c2]/80 leading-relaxed">
                  Protección de formulaciones, procesos, documentación técnica,
                  infraestructura de red y plataformas corporativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nombre formal del proyecto */}
      <div className="mt-4 border border-[#2ca7d8]/20 bg-black/20 p-4">
        <p className="text-xs font-mono text-[#a7d8c2]/65 leading-relaxed">
          {project.title}
        </p>
      </div>
    </div>
  );
}
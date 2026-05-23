import React from 'react';
import {
  ShieldCheck,
  FileCheck,
  Database,
  Cloud,
  Activity,
  AlertTriangle,
} from 'lucide-react';

export function Project3IsoFramework() {
  const standards = [
    {
      title: 'ISO/IEC 27001',
      subtitle: 'SGSI',
      icon: ShieldCheck,
      desc: 'Marco principal para implementar, mantener y mejorar el Sistema de Gestión de Seguridad de la Información.',
      color: 'border-[#54d17a]/30 text-[#54d17a]',
    },
    {
      title: 'ISO/IEC 27002',
      subtitle: 'Controles',
      icon: FileCheck,
      desc: 'Buenas prácticas y controles de seguridad para protección de activos organizacionales.',
      color: 'border-[#2ca7d8]/30 text-[#2ca7d8]',
    },
    {
      title: 'ISO/IEC 27005',
      subtitle: 'Riesgos',
      icon: AlertTriangle,
      desc: 'Metodología para identificación, evaluación y tratamiento de riesgos de seguridad.',
      color: 'border-yellow-500/30 text-yellow-400',
    },
    {
      title: 'ISO/IEC 27017',
      subtitle: 'Cloud Security',
      icon: Cloud,
      desc: 'Controles específicos para seguridad en servicios y entornos cloud.',
      color: 'border-cyan-500/30 text-cyan-400',
    },
    {
      title: 'ISO/IEC 27018',
      subtitle: 'Privacidad',
      icon: Database,
      desc: 'Protección de información personal y privacidad en servicios cloud.',
      color: 'border-purple-500/30 text-purple-400',
    },
    {
      title: 'ISO 22301',
      subtitle: 'Continuidad',
      icon: Activity,
      desc: 'Gestión de continuidad operativa y resiliencia ante incidentes.',
      color: 'border-orange-500/30 text-orange-400',
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <ShieldCheck className="w-6 h-6 text-[#54d17a]" />

        <h2 className="text-2xl font-mono text-[#e7fff3]">
          2. Marco normativo y estándares ISO
        </h2>
      </div>

      {/* Introducción */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          El SGSI fue diseñado considerando estándares internacionales enfocados
          en gestión de seguridad, continuidad operativa, privacidad,
          administración de riesgos y protección de infraestructura tecnológica.
          Estas normas permiten establecer controles alineados con buenas
          prácticas globales y fortalecer la postura de seguridad de la
          organización.
        </p>
      </div>

      {/* Grid ISO */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {standards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`bg-[#071b1a] border ${item.color} p-5 transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between mb-5">
                <Icon className="w-7 h-7" />

                <span className="text-xs font-mono px-2 py-1 border border-current/30">
                  {item.subtitle}
                </span>
              </div>

              <h3 className="text-lg font-mono text-[#e7fff3] mb-3">
                {item.title}
              </h3>

              <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 bg-black/20 border border-[#54d17a]/20 p-5">
        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
          La integración de estos estándares permite establecer un SGSI robusto,
          orientado a protección de activos críticos, continuidad operativa,
          cumplimiento organizacional y mitigación de amenazas internas y
          externas.
        </p>
      </div>
    </div>
  );
}
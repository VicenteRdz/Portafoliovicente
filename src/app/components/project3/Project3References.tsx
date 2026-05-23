import React from 'react';
import {
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Globe,
} from 'lucide-react';

type Reference = {
  label: string;
  value: string;
};

type Props = {
  references: Reference[];
};

export function Project3References({ references }: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <BookOpen className="w-6 h-6 text-[#54d17a]" />

        <h2 className="text-2xl font-mono text-[#e7fff3]">
          9. Referencias y recursos utilizados
        </h2>
      </div>

      {/* Intro */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          El desarrollo del SGSI se fundamentó en estándares internacionales,
          plataformas tecnológicas corporativas y buenas prácticas orientadas a la
          gestión de riesgos, continuidad operativa y protección de activos críticos.
          Las siguientes referencias fueron utilizadas como apoyo técnico y normativo
          para la elaboración del proyecto.
        </p>
      </div>

      {/* Referencias */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {references.map((ref) => (
          <a
            key={ref.label}
            href={ref.value}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#071b1a] border border-[#2ca7d8]/25 p-5 hover:border-[#54d17a]/50 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#54d17a]/10 border border-[#54d17a]/25 p-3">
                  <Globe className="w-5 h-5 text-[#54d17a]" />
                </div>

                <div>
                  <h3 className="text-base font-mono text-[#e7fff3] mb-2 group-hover:text-[#54d17a] transition-colors">
                    {ref.label}
                  </h3>

                  <p className="text-xs font-mono text-[#a7d8c2]/60 break-all leading-relaxed">
                    {ref.value}
                  </p>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-[#2ca7d8] shrink-0 group-hover:text-[#54d17a] transition-colors" />
            </div>
          </a>
        ))}
      </div>

      {/* Recursos aplicados */}
      <div className="grid lg:grid-cols-3 gap-5 mb-6">
        {[
          {
            title: 'Normativas ISO',
            desc: 'Uso de ISO/IEC 27001, 27002, 27005, 27017, 27018 y 22301 para estructurar el SGSI.',
          },
          {
            title: 'Tecnologías corporativas',
            desc: 'Implementación conceptual basada en Microsoft 365, Cisco, Fortinet y Zscaler.',
          },
          {
            title: 'Buenas prácticas',
            desc: 'Aplicación de RBAC, MFA, cifrado, monitoreo y mejora continua bajo PDCA.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#071b1a] border border-[#54d17a]/20 p-5"
          >
            <ShieldCheck className="w-6 h-6 text-[#54d17a] mb-4" />

            <h3 className="text-lg font-mono text-[#e7fff3] mb-3">
              {item.title}
            </h3>

            <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-black/20 border border-[#54d17a]/20 p-5">
        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
          Este proyecto integra fundamentos técnicos de seguridad informática,
          administración de riesgos y continuidad operativa mediante una adecuación
          web del SGSI desarrollado para ProAmpac Planta San Luis Potosí, buscando
          representar visualmente la estructura y operación de un entorno corporativo
          alineado con estándares internacionales de ciberseguridad.
        </p>
      </div>
    </div>
  );
}
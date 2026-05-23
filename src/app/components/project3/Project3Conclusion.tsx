import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Globe,
  FileCheck2,
  Sparkles,
  BarChart3,
} from 'lucide-react';

export function Project3Conclusion() {
  const achievements = [
    {
      icon: ShieldCheck,
      title: 'Implementación conceptual de SGSI',
      desc: 'Desarrollo estructurado de un Sistema de Gestión de Seguridad de la Información basado en ISO/IEC 27001:2022.',
    },
    {
      icon: BarChart3,
      title: 'Gestión de riesgos',
      desc: 'Identificación y evaluación de riesgos asociados a activos críticos de ProAmpac Planta San Luis.',
    },
    {
      icon: FileCheck2,
      title: 'Políticas funcionales',
      desc: 'Definición de controles administrativos, técnicos y operativos orientados a protección y continuidad.',
    },
    {
      icon: Globe,
      title: 'Adecuación web interactiva',
      desc: 'Transformación visual del SGSI a una plataforma web moderna e interactiva.',
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <Sparkles className="w-6 h-6 text-[#54d17a]" />

        <h2 className="text-2xl font-mono text-[#e7fff3]">
          8. Conclusión general del proyecto
        </h2>
      </div>

      {/* Intro */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          El desarrollo del SGSI para ProAmpac Planta San Luis Potosí permitió
          integrar conceptos de seguridad informática, gestión de riesgos,
          continuidad operativa y mejora continua bajo un enfoque alineado con
          estándares internacionales ISO/IEC 27001:2022.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-[#071b1a] border border-[#54d17a]/20 p-5 hover:border-[#54d17a]/50 transition-all"
            >
              <Icon className="w-7 h-7 text-[#54d17a] mb-4" />

              <h3 className="text-base font-mono text-[#e7fff3] mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs font-mono text-[#a7d8c2]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Cierre técnico */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 mb-6">
        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
          <h3 className="text-xl font-mono text-[#e7fff3] mb-4">
            Resultados obtenidos
          </h3>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed mb-4">
            La implementación conceptual permitió identificar activos críticos,
            amenazas relevantes y vulnerabilidades asociadas a accesos,
            infraestructura, plataformas cloud y manejo de información sensible.
          </p>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
            Asimismo, el proyecto demuestra cómo la aplicación de controles como
            RBAC, MFA, cifrado, segmentación de red, respaldo de información y
            capacitación organizacional fortalecen la postura de seguridad de una
            organización industrial moderna.
          </p>
        </div>

        {/* Sidebar */}
        <div className="bg-black/25 border border-[#54d17a]/25 p-6">
          <div className="flex items-center gap-3 mb-5">
            <CheckCircle2 className="w-5 h-5 text-[#54d17a]" />

            <h3 className="text-lg font-mono text-[#e7fff3]">
              Cumplimiento PD09
            </h3>
          </div>

          <div className="space-y-4">
            {[
              'Contenido técnico y profundidad',
              'Diseño visual e innovador',
              'Publicación web funcional',
              'Uso de recursos visuales',
              'Exportación y descarga PDF',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-[#071b1a] border border-[#2ca7d8]/20 p-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#54d17a] mt-0.5 shrink-0" />

                <p className="text-xs font-mono text-[#a7d8c2]/75 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final */}
      <div className="bg-black/20 border border-[#54d17a]/20 p-5">
        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
          Finalmente, la adecuación web del proyecto permite representar de forma
          visual, interactiva y estructurada la operación de un SGSI corporativo,
          integrando elementos técnicos, administrativos y estratégicos dentro de
          una experiencia moderna orientada a ciberseguridad organizacional.
        </p>
      </div>
    </div>
  );
}
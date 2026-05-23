import React from 'react';
import {
  Building2,
  Factory,
  ShieldCheck,
  Lock,
  Database,
  Users,
  Globe,
  CheckCircle2,
} from 'lucide-react';

export function Project3IdentityScope() {
  const values = [
    {
      title: 'Integridad',
      desc: 'Compromiso con la ética, transparencia y responsabilidad corporativa.',
    },
    {
      title: 'Intensidad',
      desc: 'Orientación a resultados y mejora continua de procesos.',
    },
    {
      title: 'Involucramiento',
      desc: 'Colaboración multidisciplinaria para cumplimiento de objetivos.',
    },
    {
      title: 'Impacto',
      desc: 'Generación de valor mediante innovación y sostenibilidad.',
    },
  ];

  const scopeItems = [
    'Área de Investigación y Desarrollo (R&D)',
    'Fórmulas y documentación técnica',
    'ERP M3 y plataformas colaborativas',
    'SharePoint y OneDrive',
    'VPN Zscaler y accesos remotos',
    'Infraestructura Cisco y Fortinet',
    'Procesos relacionados con manufactura y calidad',
    'Interacción con áreas de IT, Producción y Comercial',
  ];

  const objectives = [
    {
      icon: Lock,
      title: 'Confidencialidad',
      desc: 'Proteger información sensible contra accesos no autorizados.',
    },
    {
      icon: ShieldCheck,
      title: 'Integridad',
      desc: 'Evitar modificaciones indebidas sobre activos críticos.',
    },
    {
      icon: Database,
      title: 'Disponibilidad',
      desc: 'Garantizar continuidad operativa y recuperación de información.',
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <Building2 className="w-6 h-6 text-[#54d17a]" />

        <h2 className="text-2xl font-mono text-[#e7fff3]">
          1. Identidad organizacional y alcance del SGSI
        </h2>
      </div>

      {/* Introducción */}
      <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-6 mb-8">
        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Factory className="w-6 h-6 text-[#54d17a]" />

            <div>
              <p className="text-xs font-mono text-[#54d17a] uppercase tracking-widest">
                Organización
              </p>

              <h3 className="text-2xl font-mono text-[#e7fff3]">
                ProAmpac Planta San Luis Potosí
              </h3>
            </div>
          </div>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed mb-4">
            ProAmpac es una organización global especializada en soluciones de
            empaque flexible para sectores industriales, alimenticios y comerciales.
            El SGSI desarrollado se enfoca específicamente en la protección de los
            activos críticos del área de Investigación y Desarrollo (R&D), donde se
            gestiona propiedad intelectual, documentación técnica y procesos
            estratégicos para manufactura.
          </p>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
            La implementación considera controles administrativos, técnicos y
            operativos alineados con ISO/IEC 27001:2022, fortaleciendo la
            protección de información crítica frente a amenazas internas y externas.
          </p>
        </div>

        {/* Panel lateral */}
        <div className="bg-black/25 border border-[#54d17a]/25 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-[#54d17a]" />

            <h3 className="text-lg font-mono text-[#e7fff3]">
              Datos generales
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                label: 'Ubicación',
                value: 'San Luis Potosí, México',
              },
              {
                label: 'Área crítica',
                value: 'Investigación y Desarrollo',
              },
              {
                label: 'Modelo',
                value: 'SGSI basado en ISO 27001',
              },
              {
                label: 'Enfoque',
                value: 'CIA + Mejora continua',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[#2ca7d8]/20 bg-[#071b1a]/70 p-4"
              >
                <p className="text-xs font-mono text-[#2ca7d8] mb-1">
                  {item.label}
                </p>

                <p className="text-sm font-mono text-[#a7d8c2]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Misión y visión */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#071b1a] border border-[#54d17a]/25 p-6">
          <h3 className="text-xl font-mono text-[#54d17a] mb-4">
            Misión
          </h3>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
            Proporcionar soluciones innovadoras y sostenibles de empaque flexible,
            generando valor para clientes globales mediante tecnología, calidad y
            mejora continua.
          </p>
        </div>

        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
          <h3 className="text-xl font-mono text-[#2ca7d8] mb-4">
            Visión
          </h3>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
            Ser referente global en soluciones de empaque flexible mediante
            innovación tecnológica, excelencia operativa y protección de activos
            estratégicos.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="mb-8">
        <h3 className="text-xl font-mono text-[#e7fff3] mb-5">
          Valores organizacionales
        </h3>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[#071b1a] border border-[#54d17a]/20 p-5"
            >
              <p className="text-lg font-mono text-[#54d17a] mb-3">
                {value.title}
              </p>

              <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Alcance */}
      <div className="grid lg:grid-cols-[1fr_0.9fr] gap-6 mb-8">
        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
          <h3 className="text-xl font-mono text-[#e7fff3] mb-5">
            Alcance del SGSI
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {scopeItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-black/20 border border-[#54d17a]/15 p-4"
              >
                <CheckCircle2 className="w-4 h-4 text-[#54d17a] mt-0.5 shrink-0" />

                <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CIA */}
        <div className="bg-black/25 border border-[#54d17a]/25 p-6">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="w-5 h-5 text-[#54d17a]" />

            <h3 className="text-xl font-mono text-[#e7fff3]">
              Objetivos CIA
            </h3>
          </div>

          <div className="space-y-4">
            {objectives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-[#071b1a] border border-[#2ca7d8]/20 p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#54d17a]" />

                    <p className="text-base font-mono text-[#e7fff3]">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cierre */}
      <div className="bg-black/20 border border-[#54d17a]/20 p-5">
        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
          El alcance del SGSI se centra en la protección de activos estratégicos del
          área de R&D, priorizando controles de acceso, continuidad operativa,
          seguridad cloud, segmentación de red y mitigación de riesgos asociados a
          phishing, accesos indebidos y fuga de información crítica.
        </p>
      </div>
    </div>
  );
}
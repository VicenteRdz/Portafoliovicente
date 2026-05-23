import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  FileLock2,
  Network,
  Cloud,
  Users,
  Database,
  Activity,
} from 'lucide-react';

export function Project3SummaryCards() {
  const cards = [
    {
      title: 'Normativa base',
      value: 'ISO/IEC 27001:2022',
      icon: ShieldCheck,
      desc: 'Implementación del SGSI alineada con estándares internacionales.',
      color:
        'border-[#54d17a]/30 bg-[#54d17a]/10 text-[#54d17a]',
    },

    {
      title: 'Riesgos evaluados',
      value: '20 escenarios',
      icon: AlertTriangle,
      desc: 'Evaluación de amenazas relacionadas con accesos, phishing y continuidad.',
      color:
        'border-red-500/30 bg-red-500/10 text-red-300',
    },

    {
      title: 'Políticas funcionales',
      value: '20 controles',
      icon: FileLock2,
      desc: 'Políticas administrativas, técnicas y operativas para protección del SGSI.',
      color:
        'border-[#2ca7d8]/30 bg-[#2ca7d8]/10 text-[#2ca7d8]',
    },

    {
      title: 'Infraestructura',
      value: 'Fortinet · Cisco · Zscaler',
      icon: Network,
      desc: 'Segmentación, VPN, firewalls y protección perimetral corporativa.',
      color:
        'border-orange-500/30 bg-orange-500/10 text-orange-300',
    },

    {
      title: 'Servicios cloud',
      value: 'M365 · SharePoint',
      icon: Cloud,
      desc: 'Colaboración y almacenamiento seguro mediante plataformas cloud.',
      color:
        'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    },

    {
      title: 'Usuarios involucrados',
      value: 'R&D · IT · Producción',
      icon: Users,
      desc: 'Participación multidisciplinaria para operación y protección de activos.',
      color:
        'border-purple-500/30 bg-purple-500/10 text-purple-300',
    },

    {
      title: 'Activos críticos',
      value: 'ERP · Fórmulas · TAMUs',
      icon: Database,
      desc: 'Protección de propiedad intelectual y documentación técnica.',
      color:
        'border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
    },

    {
      title: 'Modelo operativo',
      value: 'PDCA',
      icon: Activity,
      desc: 'Mejora continua mediante planificación, operación y evaluación.',
      color:
        'border-pink-500/30 bg-pink-500/10 text-pink-300',
    },
  ];

  return (
    <div className="mb-10">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className={`border p-5 transition-all hover:scale-[1.02] ${card.color}`}
            >
              <div className="flex items-center justify-between mb-5">
                <Icon className="w-7 h-7" />

                <span className="text-[10px] font-mono border border-current/30 px-2 py-1 uppercase tracking-widest">
                  SGSI
                </span>
              </div>

              <p className="text-xs font-mono uppercase tracking-widest opacity-80 mb-2">
                {card.title}
              </p>

              <h3 className="text-lg font-mono text-[#e7fff3] mb-3 leading-snug">
                {card.value}
              </h3>

              <p className="text-xs font-mono text-[#a7d8c2]/75 leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
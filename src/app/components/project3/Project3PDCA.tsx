import React from 'react';
import {
  RotateCcw,
  ClipboardList,
  PlayCircle,
  SearchCheck,
  Wrench,
  KeyRound,
  ShieldCheck,
  FileCheck2,
  Activity,
} from 'lucide-react';

export function Project3PDCA() {
  const phases = [
    {
      title: 'Planear',
      icon: ClipboardList,
      color: 'text-[#2ca7d8] border-[#2ca7d8]/35 bg-[#2ca7d8]/10',
      objective:
        'Definir controles de acceso para proteger activos críticos del SGSI y reducir riesgos de uso indebido de credenciales.',
      activities: [
        'Identificar sistemas y usuarios dentro del alcance.',
        'Definir roles, permisos y niveles de acceso.',
        'Establecer políticas de contraseñas seguras y MFA.',
      ],
      controls: ['RBAC', 'MFA', 'Auditoría de accesos'],
    },
    {
      title: 'Hacer',
      icon: PlayCircle,
      color: 'text-[#54d17a] border-[#54d17a]/35 bg-[#54d17a]/10',
      objective:
        'Implementar los controles definidos para garantizar acceso seguro a sistemas y plataformas corporativas.',
      activities: [
        'Configurar RBAC en ERP M3, SharePoint, OneDrive y VPN Zscaler.',
        'Implementar MFA y políticas de contraseñas.',
        'Ejecutar altas, modificaciones y bajas de usuarios.',
      ],
      controls: ['MFA obligatorio', 'Contraseñas corporativas', 'Registro de accesos'],
    },
    {
      title: 'Verificar',
      icon: SearchCheck,
      color: 'text-yellow-400 border-yellow-500/35 bg-yellow-500/10',
      objective:
        'Validar la efectividad de los controles implementados y detectar desviaciones relacionadas con accesos.',
      activities: [
        'Auditar cuentas activas y permisos asignados.',
        'Revisar logs de autenticación y actividad.',
        'Validar cumplimiento de MFA y políticas de contraseñas.',
      ],
      controls: ['Revisión de logs', 'Auditoría de permisos', 'Monitoreo remoto'],
    },
    {
      title: 'Actuar',
      icon: Wrench,
      color: 'text-orange-400 border-orange-500/35 bg-orange-500/10',
      objective:
        'Aplicar mejoras continuas para corregir desviaciones, fortalecer controles y prevenir reincidencias.',
      activities: [
        'Revocar accesos innecesarios o cuentas inactivas.',
        'Actualizar políticas y procedimientos.',
        'Implementar acciones correctivas derivadas de auditorías.',
      ],
      controls: ['Ajuste de privilegios', 'Mejora continua', 'Acciones correctivas'],
    },
  ];

  const evidence = [
    {
      icon: KeyRound,
      title: 'Gestión de acceso',
      desc: 'Política central utilizada como base del ciclo PDCA.',
    },
    {
      icon: ShieldCheck,
      title: 'Controles administrativos',
      desc: 'Evidencia documental de políticas corporativas proporcionadas por IT.',
    },
    {
      icon: FileCheck2,
      title: 'Verificación documental',
      desc: 'Revisión de cumplimiento sobre contraseñas, bloqueo de equipos y privilegios.',
    },
    {
      icon: Activity,
      title: 'Mejora operativa',
      desc: 'Ajuste de controles, auditoría de accesos y refuerzo de monitoreo.',
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <RotateCcw className="w-6 h-6 text-[#54d17a]" />
        <h2 className="text-2xl font-mono text-[#e7fff3]">
          6. Operación del SGSI bajo ciclo PDCA
        </h2>
      </div>

      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          La operación del SGSI se estructuró mediante el ciclo PDCA aplicado a la
          política de gestión de acceso. Este enfoque permite planificar controles,
          implementarlos, verificar su efectividad y aplicar acciones de mejora
          continua sobre accesos, credenciales, privilegios y monitoreo de usuarios.
        </p>
      </div>

      {/* Ciclo visual */}
      <div className="grid lg:grid-cols-4 gap-5 mb-8">
        {phases.map((phase, index) => {
          const Icon = phase.icon;

          return (
            <div
              key={phase.title}
              className={`relative bg-[#071b1a] border p-5 ${phase.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-7 h-7" />
                <span className="text-xs font-mono border border-current/30 px-2 py-1">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-mono text-[#e7fff3] mb-3">
                {phase.title}
              </h3>

              <p className="text-xs font-mono text-[#a7d8c2]/70 leading-relaxed mb-4">
                {phase.objective}
              </p>

              <div className="space-y-2 mb-4">
                {phase.activities.map((activity) => (
                  <div key={activity} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 shrink-0" />
                    <p className="text-[11px] font-mono text-[#a7d8c2]/70 leading-relaxed">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {phase.controls.map((control) => (
                  <span
                    key={control}
                    className="text-[10px] font-mono border border-current/25 px-2 py-1"
                  >
                    {control}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Evidencia */}
      <div className="bg-black/20 border border-[#2ca7d8]/25 p-6 mb-6">
        <h3 className="text-xl font-mono text-[#e7fff3] mb-5">
          Evidencia operativa del ciclo
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {evidence.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#071b1a] border border-[#54d17a]/20 p-4"
              >
                <Icon className="w-6 h-6 text-[#54d17a] mb-3" />
                <p className="text-sm font-mono text-[#e7fff3] mb-2">
                  {item.title}
                </p>
                <p className="text-xs font-mono text-[#a7d8c2]/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resumen */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-[#071b1a] border border-[#54d17a]/25 p-5">
          <p className="text-xs font-mono text-[#54d17a] uppercase tracking-widest mb-2">
            Control principal
          </p>
          <p className="text-xl font-mono text-[#e7fff3]">
            Gestión de acceso
          </p>
        </div>

        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-5">
          <p className="text-xs font-mono text-[#2ca7d8] uppercase tracking-widest mb-2">
            Riesgos tratados
          </p>
          <p className="text-xl font-mono text-[#e7fff3]">
            Credenciales · Privilegios · Accesos
          </p>
        </div>

        <div className="bg-[#071b1a] border border-yellow-500/25 p-5">
          <p className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2">
            Resultado esperado
          </p>
          <p className="text-xl font-mono text-[#e7fff3]">
            Mejora continua
          </p>
        </div>
      </div>
    </div>
  );
}
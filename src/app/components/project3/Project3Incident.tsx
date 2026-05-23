import React from 'react';
import {
  AlertTriangle,
  Clock,
  KeyRound,
  ShieldAlert,
  UserX,
  FileWarning,
  CheckCircle2,
  Megaphone,
  LockKeyhole,
  Eye,
  Ban,
  RefreshCcw,
} from 'lucide-react';

export function Project3Incident() {
  const timeline = [
    {
      time: '08:10 AM',
      event: 'Usuario comparte acceso a su estación de trabajo.',
    },
    {
      time: '08:15 AM',
      event: 'Credenciales son utilizadas por un tercero.',
    },
    {
      time: '09:05 AM',
      event: 'Se detecta navegación en sitios restringidos.',
    },
    {
      time: '09:20 AM',
      event: 'IT identifica actividad anómala en logs.',
    },
    {
      time: '09:35 AM',
      event: 'Se rastrea tráfico y actividad sospechosa.',
    },
    {
      time: '10:00 AM',
      event: 'Contraseña comprometida es restablecida.',
    },
    {
      time: '10:20 AM',
      event: 'Se deshabilitan sesiones activas.',
    },
    {
      time: '11:00 AM',
      event: 'Se levanta acta administrativa.',
    },
    {
      time: '12:00 PM',
      event: 'Se inicia campaña de concientización.',
    },
  ];

  const consequences = [
    'Uso indebido de privilegios corporativos',
    'Pérdida de trazabilidad sobre acciones realizadas',
    'Exposición potencial de información confidencial',
    'Riesgo de fuga de información corporativa',
    'Incumplimiento de políticas internas de seguridad',
    'Incremento del riesgo de accesos no autorizados',
  ];

  const rootCauses = [
    'Compartición indebida de cuentas corporativas',
    'Falta de concientización sobre riesgos de seguridad',
    'Manejo inseguro de contraseñas',
    'Ausencia de supervisión inmediata del uso de privilegios',
    'Dependencia excesiva de controles técnicos sin reforzar controles humanos',
  ];

  const correctiveActions = [
    {
      icon: RefreshCcw,
      title: 'Restablecimiento inmediato',
      desc: 'Cambio de credenciales comprometidas y cierre de sesiones activas.',
    },
    {
      icon: LockKeyhole,
      title: 'MFA obligatorio',
      desc: 'Refuerzo de autenticación multifactor en accesos críticos.',
    },
    {
      icon: Ban,
      title: 'Prohibición formal',
      desc: 'Restricción explícita de compartir cuentas o credenciales corporativas.',
    },
    {
      icon: Eye,
      title: 'Monitoreo reforzado',
      desc: 'Auditoría de privilegios y seguimiento de actividad sospechosa.',
    },
    {
      icon: Megaphone,
      title: 'Concientización',
      desc: 'Campaña interna sobre manejo seguro de contraseñas y reporte de incidentes.',
    },
  ];

  const campaignTips = [
    'Crear contraseñas seguras siguiendo políticas corporativas.',
    'No compartir credenciales bajo ninguna circunstancia.',
    'No almacenar contraseñas visibles en el área de trabajo.',
    'Cambiar contraseñas periódicamente cada 90 días.',
    'Utilizar autenticación multifactorial.',
    'Reportar actividades sospechosas inmediatamente a IT.',
    'No utilizar privilegios corporativos fuera del alcance autorizado.',
    'Mantener bloqueada la sesión al abandonar el equipo.',
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <ShieldAlert className="w-6 h-6 text-red-400" />
        <h2 className="text-2xl font-mono text-[#e7fff3]">
          7. Incidente simulado y mejora continua
        </h2>
      </div>

      {/* Introducción */}
      <div className="bg-[#071b1a] border border-red-500/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          Como parte de la fase de mejora del SGSI, se simuló la materialización de
          una vulneración a la política de gestión de acceso. El incidente se relaciona
          con el uso indebido de credenciales corporativas, evidenciando riesgos
          asociados al factor humano, pérdida de trazabilidad y abuso de privilegios.
        </p>
      </div>

      {/* Política vulnerada */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
          <div className="flex items-center gap-3 mb-4">
            <KeyRound className="w-5 h-5 text-[#54d17a]" />
            <h3 className="text-xl font-mono text-[#e7fff3]">
              Política vulnerada: Gestión de acceso
            </h3>
          </div>

          <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed mb-4">
            La política establece que los accesos deben ser definidos y gestionados
            únicamente para usuarios autorizados, con auditorías periódicas de permisos,
            procesos formales de aprobación y cambio de contraseñas cada 90 días.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-black/25 border border-[#54d17a]/20 p-4">
              <p className="text-xs font-mono text-[#54d17a] mb-2">
                Riesgo asociado
              </p>
              <p className="text-sm font-mono text-[#e7fff3]">
                Accesos no autorizados a sistemas críticos
              </p>
            </div>

            <div className="bg-black/25 border border-red-500/20 p-4">
              <p className="text-xs font-mono text-red-300 mb-2">
                Nivel de riesgo
              </p>
              <p className="text-sm font-mono text-[#e7fff3]">
                Alto · Impacto crítico
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 p-6">
          <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />

          <p className="text-xs font-mono text-red-300 uppercase tracking-widest mb-2">
            Amenaza materializada
          </p>

          <p className="text-sm font-mono text-[#e7fff3] leading-relaxed">
            Un usuario compartió sus credenciales corporativas y mantenía la contraseña
            escrita físicamente en una nota visible, permitiendo que otro colaborador
            utilizara privilegios fuera de su perfil autorizado.
          </p>
        </div>
      </div>

      {/* Descripción del incidente */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <UserX className="w-5 h-5 text-red-400" />
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Descripción del incidente
          </h3>
        </div>

        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          El incidente ocurrió cuando un colaborador solicitó apoyo para enviar un
          archivo desde una estación de trabajo corporativa. Para facilitar la actividad,
          el propietario del equipo compartió sus credenciales e indicó que la contraseña
          estaba escrita debajo del escritorio. Posteriormente, la cuenta fue utilizada
          para acceder a sitios restringidos y ejecutar acciones fuera del alcance
          autorizado para el perfil del usuario.
        </p>
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-5 h-5 text-[#54d17a]" />
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Línea temporal del incidente
          </h3>
        </div>

        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
          <div className="relative">
            <div className="absolute left-[92px] top-0 bottom-0 w-px bg-[#54d17a]/30 hidden sm:block" />

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={`${item.time}-${index}`}
                  className="grid sm:grid-cols-[90px_1fr] gap-4 items-start"
                >
                  <div className="text-xs font-mono text-[#54d17a] pt-1">
                    {item.time}
                  </div>

                  <div className="relative bg-black/25 border border-[#2ca7d8]/20 p-4">
                    <div className="absolute -left-[25px] top-4 w-3 h-3 rounded-full bg-[#54d17a] hidden sm:block" />
                    <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Consecuencias y causa raíz */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#071b1a] border border-red-500/25 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileWarning className="w-5 h-5 text-red-400" />
            <h3 className="text-xl font-mono text-[#e7fff3]">
              Consecuencias identificadas
            </h3>
          </div>

          <div className="space-y-3">
            {consequences.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm font-mono text-[#a7d8c2]/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#071b1a] border border-yellow-500/25 p-6">
          <div className="flex items-center gap-3 mb-4">
            <SearchIcon />
            <h3 className="text-xl font-mono text-[#e7fff3]">
              Causa raíz
            </h3>
          </div>

          <div className="space-y-3">
            {rootCauses.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <p className="text-sm font-mono text-[#a7d8c2]/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Acciones correctivas */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-5 h-5 text-[#54d17a]" />
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Acciones correctivas y preventivas
          </h3>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
          {correctiveActions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#071b1a] border border-[#54d17a]/25 p-5 hover:border-[#54d17a]/50 transition-all"
              >
                <Icon className="w-7 h-7 text-[#54d17a] mb-4" />

                <h4 className="text-base font-mono text-[#e7fff3] mb-3">
                  {item.title}
                </h4>

                <p className="text-xs font-mono text-[#a7d8c2]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Evaluación de eficacia */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: 'Nuevos incidentes',
            value: '0',
            desc: 'No se detectaron reincidencias relacionadas con compartición de credenciales.',
          },
          {
            label: 'Capacitación',
            value: 'Completada',
            desc: 'El personal concluyó la capacitación extraordinaria de concientización.',
          },
          {
            label: 'Control reforzado',
            value: 'MFA + Auditoría',
            desc: 'Se incrementó el uso de MFA y la revisión de privilegios activos.',
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#071b1a] border border-[#54d17a]/25 p-5"
          >
            <p className="text-xs font-mono text-[#54d17a] uppercase tracking-widest mb-2">
              {item.label}
            </p>
            <p className="text-xl font-mono text-[#e7fff3] mb-2">
              {item.value}
            </p>
            <p className="text-xs font-mono text-[#a7d8c2]/65 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Campaña */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Megaphone className="w-5 h-5 text-[#54d17a]" />
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Campaña de prevención: acceso no autorizado
          </h3>
        </div>

        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed mb-5">
          La campaña interna refuerza buenas prácticas para evitar accesos no
          autorizados y fortalecer el manejo seguro de credenciales corporativas.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {campaignTips.map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-3 bg-black/25 border border-[#54d17a]/20 p-3"
            >
              <CheckCircle2 className="w-4 h-4 text-[#54d17a] mt-0.5 shrink-0" />
              <p className="text-xs font-mono text-[#a7d8c2]/75 leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="w-5 h-5 rounded-full border border-yellow-400/70 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
    </div>
  );
}
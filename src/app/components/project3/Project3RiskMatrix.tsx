import React from 'react';
import {
  AlertTriangle,
  ShieldAlert,
  MailWarning,
  KeyRound,
  Laptop,
  FlaskConical,
  Flame,
  Share2,
  Wifi,
} from 'lucide-react';

export function Project3RiskMatrix() {
  const extremeRisks = [
    {
      id: 'R6',
      title: 'Phishing o malware vía correo',
      icon: MailWarning,
      probability: 'Alta',
      impact: 'Alto',
      mitigation: 'Filtros antiphishing, MFA, capacitación y monitoreo.',
    },
    {
      id: 'R12',
      title: 'Robo o pérdida de laptops',
      icon: Laptop,
      probability: 'Alta',
      impact: 'Alto',
      mitigation: 'BitLocker, borrado remoto y reporte inmediato.',
    },
    {
      id: 'R14',
      title: 'Robo de fórmulas confidenciales',
      icon: FlaskConical,
      probability: 'Media-Alta',
      impact: 'Crítico',
      mitigation: 'Cifrado, RBAC, MFA y monitoreo de accesos.',
    },
    {
      id: 'R18',
      title: 'Acceso remoto no autorizado',
      icon: Wifi,
      probability: 'Alta',
      impact: 'Alto',
      mitigation: 'VPN limitada a equipos administrados y MFA obligatorio.',
    },
    {
      id: 'R20',
      title: 'Brechas en firewall perimetral',
      icon: Flame,
      probability: 'Media',
      impact: 'Crítico',
      mitigation: 'IPS/IDS, auditoría de reglas y parches de seguridad.',
    },
    {
      id: 'R13',
      title: 'Exfiltración por enlaces públicos',
      icon: Share2,
      probability: 'Media',
      impact: 'Crítico',
      mitigation: 'DLP, expiración de enlaces y bloqueo de vínculos públicos.',
    },
  ];

  const matrix = [
    ['Medio', 'Alto', 'Muy Alto', 'Extremo', 'Extremo'],
    ['Medio', 'Medio', 'Alto', 'Muy Alto', 'Extremo'],
    ['Bajo', 'Medio', 'Medio', 'Alto', 'Muy Alto'],
    ['Muy Bajo', 'Bajo', 'Medio', 'Medio', 'Alto'],
    ['Muy Bajo', 'Muy Bajo', 'Bajo', 'Medio', 'Medio'],
  ];

  const probabilityLabels = [
    '5 · Casi seguro',
    '4 · Probable',
    '3 · Moderado',
    '2 · Poco probable',
    '1 · Raro',
  ];

  const impactLabels = [
    '1 · Insignificante',
    '2 · Menor',
    '3 · Significativo',
    '4 · Mayor',
    '5 · Severo',
  ];

  const getRiskStyle = (level: string) => {
    if (level === 'Extremo') return 'bg-red-500/20 border-red-500/40 text-red-300';
    if (level === 'Muy Alto') return 'bg-orange-500/20 border-orange-500/40 text-orange-300';
    if (level === 'Alto') return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300';
    if (level === 'Medio') return 'bg-[#2ca7d8]/15 border-[#2ca7d8]/35 text-[#7dd7ff]';
    if (level === 'Bajo') return 'bg-[#54d17a]/15 border-[#54d17a]/35 text-[#8ff0aa]';
    return 'bg-white/5 border-white/10 text-white/50';
  };

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <AlertTriangle className="w-6 h-6 text-[#54d17a]" />
        <h2 className="text-2xl font-mono text-[#e7fff3]">
          5. Planificación y matriz de riesgos
        </h2>
      </div>

      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          La planificación del SGSI identifica veinte riesgos asociados a los activos
          críticos de ProAmpac Planta San Luis. Cada riesgo se evalúa considerando
          probabilidad e impacto, permitiendo priorizar acciones de mitigación sobre
          amenazas como phishing, fuga de información, accesos no autorizados,
          fallas de continuidad, exposición de propiedad intelectual y compromiso de
          infraestructura tecnológica.
        </p>
      </div>

      {/* Riesgos destacados */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Riesgos críticos y extremos destacados
          </h3>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {extremeRisks.map((risk) => {
            const Icon = risk.icon;

            return (
              <div
                key={risk.id}
                className="bg-[#071b1a] border border-red-500/25 p-5 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-7 h-7 text-red-400" />
                  <span className="text-xs font-mono text-red-300 border border-red-500/40 px-2 py-1">
                    {risk.id}
                  </span>
                </div>

                <h4 className="text-base font-mono text-[#e7fff3] mb-3">
                  {risk.title}
                </h4>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-black/25 border border-[#2ca7d8]/20 p-3">
                    <p className="text-[10px] font-mono text-[#2ca7d8] mb-1">
                      Probabilidad
                    </p>
                    <p className="text-xs font-mono text-[#a7d8c2]">
                      {risk.probability}
                    </p>
                  </div>

                  <div className="bg-black/25 border border-[#54d17a]/20 p-3">
                    <p className="text-[10px] font-mono text-[#54d17a] mb-1">
                      Impacto
                    </p>
                    <p className="text-xs font-mono text-[#a7d8c2]">
                      {risk.impact}
                    </p>
                  </div>
                </div>

                <p className="text-xs font-mono text-[#a7d8c2]/70 leading-relaxed">
                  <span className="text-[#54d17a]">Mitigación:</span>{' '}
                  {risk.mitigation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Matriz visual */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6 overflow-x-auto">
        <h3 className="text-xl font-mono text-[#e7fff3] mb-5">
          Matriz probabilidad vs. impacto
        </h3>

        <div className="min-w-[760px]">
          <div className="grid grid-cols-[160px_repeat(5,1fr)] gap-2 mb-2">
            <div />
            {impactLabels.map((label) => (
              <div
                key={label}
                className="text-center text-[10px] font-mono text-[#a7d8c2]/70 border border-[#2ca7d8]/20 p-2"
              >
                {label}
              </div>
            ))}
          </div>

          {matrix.map((row, rowIndex) => (
            <div
              key={probabilityLabels[rowIndex]}
              className="grid grid-cols-[160px_repeat(5,1fr)] gap-2 mb-2"
            >
              <div className="text-xs font-mono text-[#a7d8c2]/80 border border-[#2ca7d8]/20 p-3 flex items-center">
                {probabilityLabels[rowIndex]}
              </div>

              {row.map((level, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`text-center text-xs font-mono border p-3 ${getRiskStyle(level)}`}
                >
                  {level}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mapeo resumido */}
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="bg-[#071b1a] border border-[#54d17a]/25 p-5">
          <p className="text-xs font-mono text-[#54d17a] uppercase tracking-widest mb-2">
            Riesgos extremos
          </p>
          <p className="text-3xl font-mono text-[#e7fff3] mb-2">
            6+
          </p>
          <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
            Asociados principalmente a phishing, VPN, laptops, fórmulas,
            firewalls y enlaces públicos.
          </p>
        </div>

        <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-5">
          <p className="text-xs font-mono text-[#2ca7d8] uppercase tracking-widest mb-2">
            Estrategia
          </p>
          <p className="text-3xl font-mono text-[#e7fff3] mb-2">
            Mitigar
          </p>
          <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
            El tratamiento principal consiste en reducir probabilidad e impacto
            mediante controles técnicos, administrativos y humanos.
          </p>
        </div>

        <div className="bg-[#071b1a] border border-yellow-500/25 p-5">
          <p className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2">
            Controles clave
          </p>
          <p className="text-2xl font-mono text-[#e7fff3] mb-2">
            RBAC · MFA · DLP
          </p>
          <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
            Controles priorizados para protección de accesos, información y
            repositorios colaborativos.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-black/20 border border-[#54d17a]/20 p-5">
        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
          La matriz permite visualizar los riesgos con mayor prioridad de atención y
          justificar la implementación de controles como autenticación multifactor,
          segmentación de red, cifrado, protección perimetral, monitoreo continuo y
          capacitación contra ingeniería social.
        </p>
      </div>
    </div>
  );
}
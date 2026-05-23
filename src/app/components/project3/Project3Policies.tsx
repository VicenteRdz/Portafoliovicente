import React from 'react';
import {
  KeyRound,
  RefreshCcw,
  DatabaseBackup,
  Siren,
  MailWarning,
  Smartphone,
  FileLock2,
  Building,
  GraduationCap,
  Laptop,
  Cloud,
  FlaskConical,
  FileText,
  ClipboardCheck,
  ServerCog,
  ShieldCheck,
  Network,
  Flame,
} from 'lucide-react';

export function Project3Policies() {
  const policyGroups = [
    {
      title: 'Identidad, acceso y operación segura',
      desc: 'Controles enfocados en limitar accesos, proteger credenciales y asegurar el uso correcto de sistemas corporativos.',
      policies: [
        {
          name: 'Gestión de acceso',
          icon: KeyRound,
          standard: 'Definir y gestionar accesos de usuarios autorizados.',
          baseline: 'Cambio de contraseñas cada 90 días.',
        },
        {
          name: 'Seguridad del ERP M3',
          icon: ServerCog,
          standard: 'Proteger información financiera, operativa y de manufactura.',
          baseline: 'RBAC, MFA y cifrado en tránsito y reposo.',
        },
        {
          name: 'Acceso remoto VPN Zscaler',
          icon: ShieldCheck,
          standard: 'Acceso remoto seguro solo para usuarios y dispositivos autorizados.',
          baseline: 'MFA, cifrado robusto y bloqueo tras intentos fallidos.',
        },
      ],
    },
    {
      title: 'Continuidad, respaldos e incidentes',
      desc: 'Políticas orientadas a recuperación, disponibilidad, respuesta ante incidentes y resiliencia operativa.',
      policies: [
        {
          name: 'Recuperación ante desastres',
          icon: RefreshCcw,
          standard: 'Garantizar disponibilidad y recuperación de información crítica.',
          baseline: 'Respaldos diarios cifrados en ubicación externa segura.',
        },
        {
          name: 'Gestión de respaldos',
          icon: DatabaseBackup,
          standard: 'Proteger información corporativa mediante respaldo y recuperación.',
          baseline: 'Retención mínima de 90 días y cifrado AES-256.',
        },
        {
          name: 'Gestión de incidentes',
          icon: Siren,
          standard: 'Detectar, registrar y responder oportunamente a incidentes.',
          baseline: 'Registro y atención en máximo 24 horas desde la detección.',
        },
      ],
    },
    {
      title: 'Correo, endpoints y nube corporativa',
      desc: 'Controles para reducir riesgos de phishing, malware, fuga de información y compromiso de dispositivos.',
      policies: [
        {
          name: 'Correo electrónico corporativo',
          icon: MailWarning,
          standard: 'Proteger el correo contra phishing, malware y accesos indebidos.',
          baseline: 'MFA y bloqueo por múltiples intentos fallidos.',
        },
        {
          name: 'Dispositivos móviles y remotos',
          icon: Smartphone,
          standard: 'Asegurar equipos utilizados fuera de la red corporativa.',
          baseline: 'Antivirus, cifrado de disco y conexión por VPN.',
        },
        {
          name: 'Equipos de cómputo',
          icon: Laptop,
          standard: 'Asegurar laptops Dell Latitude y equipos Optiplex.',
          baseline: 'BitLocker y bloqueo de pantalla a los 5 minutos.',
        },
        {
          name: 'OneDrive y SharePoint',
          icon: Cloud,
          standard: 'Controlar colaboración y almacenamiento seguro en nube.',
          baseline: 'MFA obligatorio y auditoría de enlaces externos.',
        },
      ],
    },
    {
      title: 'Información crítica de R&D',
      desc: 'Políticas enfocadas en la protección de propiedad intelectual, documentación técnica, auditorías y contratos.',
      policies: [
        {
          name: 'Clasificación de información',
          icon: FileLock2,
          standard: 'Clasificar información según sensibilidad y criticidad.',
          baseline: 'Toda información técnica de R&D se clasifica como confidencial.',
        },
        {
          name: 'Fórmulas de productos',
          icon: FlaskConical,
          standard: 'Proteger fórmulas contra acceso no autorizado.',
          baseline: 'Cifrado, RBAC y bitácoras automáticas de acceso.',
        },
        {
          name: 'Procesos de manufactura',
          icon: FileText,
          standard: 'Proteger documentación contra alteración o pérdida.',
          baseline: 'Versionado, aprobación formal y respaldo diario.',
        },
        {
          name: 'Reportes de auditoría',
          icon: ClipboardCheck,
          standard: 'Proteger reportes internos y externos como información confidencial.',
          baseline: 'Conservación mínima de 5 años con registro de accesos.',
        },
        {
          name: 'Contratos con clientes',
          icon: Building,
          standard: 'Garantizar confidencialidad e integridad de contratos.',
          baseline: 'Contratos cifrados y físicos bajo llave.',
        },
      ],
    },
    {
      title: 'Infraestructura, red y cultura organizacional',
      desc: 'Controles orientados a segmentación, protección perimetral, seguridad física y concientización.',
      policies: [
        {
          name: 'Seguridad física y ambiental',
          icon: Building,
          standard: 'Proteger instalaciones y activos contra accesos físicos no autorizados.',
          baseline: 'Áreas críticas cerradas y acceso solo a personal autorizado.',
        },
        {
          name: 'Capacitación y concientización',
          icon: GraduationCap,
          standard: 'Fortalecer cultura organizacional de seguridad.',
          baseline: 'Una capacitación obligatoria cada 12 meses.',
        },
        {
          name: 'Switches corporativos',
          icon: Network,
          standard: 'Asegurar disponibilidad de LAN y segmentación del tráfico.',
          baseline: '802.1X, port security y VLANs para R&D, OT y corporativo.',
        },
        {
          name: 'Firewalls corporativos',
          icon: Flame,
          standard: 'Controlar tráfico entrante y saliente contra amenazas externas.',
          baseline: 'Default deny, IPS, filtrado web y antivirus perimetral.',
        },
      ],
    },
  ];

  const metrics = [
    {
      label: 'Políticas funcionales',
      value: '20',
    },
    {
      label: 'Estructura estándar',
      value: '4 niveles',
    },
    {
      label: 'Controles clave',
      value: 'RBAC · MFA · DLP',
    },
    {
      label: 'Enfoque',
      value: 'CIA + ISO',
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <KeyRound className="w-6 h-6 text-[#54d17a]" />
        <h2 className="text-2xl font-mono text-[#e7fff3]">
          4. Políticas funcionales y controles del SGSI
        </h2>
      </div>

      {/* Introducción */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          El SGSI define políticas funcionales orientadas a proteger los activos de
          información de ProAmpac Planta San Luis. Cada política se estructura bajo
          cuatro elementos: estándar, directriz, procedimiento y línea base, permitiendo
          transformar los objetivos de seguridad en controles verificables y operativos.
        </p>
      </div>

      {/* Métricas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="bg-[#071b1a] border border-[#54d17a]/25 p-5"
          >
            <p className="text-xs font-mono text-[#2ca7d8] mb-2">
              {item.label}
            </p>
            <p className="text-xl font-mono text-[#e7fff3]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Estructura de política */}
      <div className="mb-8 bg-black/20 border border-[#2ca7d8]/25 p-6">
        <h3 className="text-xl font-mono text-[#e7fff3] mb-5">
          Estructura aplicada a cada política
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: 'Estándar',
              desc: 'Define el requisito general de seguridad.',
            },
            {
              title: 'Directriz',
              desc: 'Orienta la forma correcta de aplicar el control.',
            },
            {
              title: 'Procedimiento',
              desc: 'Establece pasos operativos y responsables.',
            },
            {
              title: 'Línea base',
              desc: 'Marca el mínimo obligatorio de cumplimiento.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#071b1a] border border-[#2ca7d8]/20 p-4"
            >
              <p className="text-sm font-mono text-[#54d17a] mb-2">
                {item.title}
              </p>
              <p className="text-xs font-mono text-[#a7d8c2]/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Grupos de políticas */}
      <div className="space-y-8">
        {policyGroups.map((group) => (
          <div
            key={group.title}
            className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6"
          >
            <div className="mb-5">
              <h3 className="text-xl font-mono text-[#e7fff3] mb-2">
                {group.title}
              </h3>
              <p className="text-sm font-mono text-[#a7d8c2]/70 leading-relaxed">
                {group.desc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {group.policies.map((policy) => {
                const Icon = policy.icon;

                return (
                  <div
                    key={policy.name}
                    className="bg-black/25 border border-[#54d17a]/20 p-5 hover:border-[#54d17a]/50 transition-all"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <Icon className="w-6 h-6 text-[#54d17a]" />
                      <span className="text-[10px] font-mono text-[#2ca7d8] border border-[#2ca7d8]/30 px-2 py-1">
                        Política
                      </span>
                    </div>

                    <h4 className="text-base font-mono text-[#e7fff3] mb-3">
                      {policy.name}
                    </h4>

                    <p className="text-xs font-mono text-[#a7d8c2]/70 leading-relaxed mb-3">
                      <span className="text-[#54d17a]">Estándar:</span>{' '}
                      {policy.standard}
                    </p>

                    <p className="text-xs font-mono text-[#a7d8c2]/70 leading-relaxed">
                      <span className="text-[#2ca7d8]">Línea base:</span>{' '}
                      {policy.baseline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Cierre */}
      <div className="mt-6 bg-[#071b1a] border border-[#54d17a]/25 p-6">
        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
          Estas políticas permiten operacionalizar el SGSI mediante controles
          técnicos, administrativos y organizacionales. Su integración fortalece la
          protección de activos críticos, reduce riesgos asociados a accesos indebidos,
          phishing, pérdida de información y fallas de continuidad, y establece una base
          clara para auditoría y mejora continua.
        </p>
      </div>
    </div>
  );
}
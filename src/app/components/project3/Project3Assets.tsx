import React from 'react';
import {
  Boxes,
  Server,
  FileText,
  FlaskConical,
  Laptop,
  Cloud,
  Shield,
  Network,
  Router,
  Database,
  Factory,
  Users,
} from 'lucide-react';

export function Project3Assets() {
  const internalAssets = [
    {
      title: 'Fórmulas de productos',
      icon: FlaskConical,
      desc: 'Información confidencial de R&D relacionada con composiciones, materiales y parámetros técnicos.',
      tag: 'Propiedad intelectual',
    },
    {
      title: 'Hojas técnicas y especificaciones',
      icon: FileText,
      desc: 'Documentación técnica utilizada para validar propiedades físicas, químicas y funcionales.',
      tag: 'Documentación crítica',
    },
    {
      title: 'TAMUs y estándares de empaque',
      icon: Boxes,
      desc: 'Guías visuales y estándares de calidad aplicables a productos y procesos de manufactura.',
      tag: 'Calidad / Manufactura',
    },
    {
      title: 'ERP M3',
      icon: Database,
      desc: 'Sistema corporativo para manufactura, inventarios, finanzas y cadena de suministro.',
      tag: 'Sistema crítico',
    },
    {
      title: 'Laptops y equipos corporativos',
      icon: Laptop,
      desc: 'Equipos Dell Latitude, Optiplex y estaciones utilizadas por personal administrativo y técnico.',
      tag: 'Endpoint',
    },
    {
      title: 'Switches y firewalls',
      icon: Router,
      desc: 'Infraestructura Cisco, Fortinet FortiSwitch y FortiGate para conectividad y protección perimetral.',
      tag: 'Red / Seguridad',
    },
  ];

  const externalAssets = [
    {
      title: 'Información de clientes',
      icon: Users,
      desc: 'Datos técnicos, comerciales y acuerdos de confidencialidad relacionados con clientes externos.',
    },
    {
      title: 'Microsoft 365 / SharePoint',
      icon: Cloud,
      desc: 'Servicios externos de colaboración y almacenamiento donde se gestiona documentación corporativa.',
    },
    {
      title: 'Sistemas gubernamentales',
      icon: Server,
      desc: 'SAT, IMSS, Ventanilla Única y plataformas regulatorias utilizadas para cumplimiento operativo.',
    },
    {
      title: 'Proveedores y software externo',
      icon: Network,
      desc: 'Servicios de terceros, rastreo logístico, licencias externas y plataformas de soporte operativo.',
    },
  ];

  const criticalSystems = [
    'ERP M3',
    'SharePoint',
    'OneDrive',
    'VPN Zscaler',
    'FortiGate',
    'Cisco Catalyst',
    'FortiSwitch',
    'Dell Latitude',
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <Boxes className="w-6 h-6 text-[#54d17a]" />
        <h2 className="text-2xl font-mono text-[#e7fff3]">
          3. Inventario de activos críticos
        </h2>
      </div>

      {/* Introducción */}
      <div className="bg-[#071b1a] border border-[#2ca7d8]/25 p-6 mb-6">
        <p className="text-sm font-mono text-[#a7d8c2]/80 leading-relaxed">
          El SGSI identifica activos internos y externos que intervienen en la operación
          del área de Investigación y Desarrollo. Estos activos incluyen información
          confidencial, documentación técnica, infraestructura de red, plataformas cloud,
          sistemas corporativos y servicios externos que deben protegerse bajo los
          principios de confidencialidad, integridad y disponibilidad.
        </p>
      </div>

      {/* Activos internos */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Activos internos
          </h3>

          <span className="text-xs font-mono text-[#54d17a] border border-[#54d17a]/30 px-3 py-1">
            Gestionados por ProAmpac
          </span>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {internalAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <div
                key={asset.title}
                className="bg-[#071b1a] border border-[#2ca7d8]/25 p-5 hover:border-[#54d17a]/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-7 h-7 text-[#54d17a]" />
                  <span className="text-[10px] font-mono text-[#2ca7d8] border border-[#2ca7d8]/30 px-2 py-1">
                    {asset.tag}
                  </span>
                </div>

                <h4 className="text-lg font-mono text-[#e7fff3] mb-3">
                  {asset.title}
                </h4>

                <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
                  {asset.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activos externos */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Activos externos
          </h3>

          <span className="text-xs font-mono text-[#2ca7d8] border border-[#2ca7d8]/30 px-3 py-1">
            Interacción con terceros
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {externalAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <div
                key={asset.title}
                className="bg-[#071b1a] border border-[#2ca7d8]/25 p-5 hover:border-[#54d17a]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-7 h-7 text-[#2ca7d8] shrink-0" />

                  <div>
                    <h4 className="text-lg font-mono text-[#e7fff3] mb-2">
                      {asset.title}
                    </h4>

                    <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed">
                      {asset.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sistemas críticos */}
      <div className="bg-[#071b1a] border border-[#54d17a]/25 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-[#54d17a]" />
          <h3 className="text-xl font-mono text-[#e7fff3]">
            Sistemas y tecnologías relevantes
          </h3>
        </div>

        <p className="text-sm font-mono text-[#a7d8c2]/75 leading-relaxed mb-5">
          Dentro del alcance del SGSI se consideran tecnologías críticas que soportan
          procesos de manufactura, colaboración, acceso remoto, protección perimetral
          y gestión documental.
        </p>

        <div className="flex flex-wrap gap-3">
          {criticalSystems.map((system) => (
            <span
              key={system}
              className="px-3 py-2 text-xs font-mono bg-black/30 border border-[#54d17a]/30 text-[#54d17a]"
            >
              {system}
            </span>
          ))}
        </div>
      </div>

      {/* Mini arquitectura */}
      <div className="mt-6 bg-black/20 border border-[#2ca7d8]/25 p-6">
        <h3 className="text-xl font-mono text-[#e7fff3] mb-5">
          Vista resumida de protección
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              icon: Factory,
              title: 'R&D',
              desc: 'Generación de información técnica y propiedad intelectual.',
            },
            {
              icon: Cloud,
              title: 'Cloud',
              desc: 'Colaboración documental mediante OneDrive y SharePoint.',
            },
            {
              icon: Network,
              title: 'Red',
              desc: 'Segmentación mediante switches Cisco/Fortinet y VLANs.',
            },
            {
              icon: Shield,
              title: 'Perímetro',
              desc: 'Protección mediante FortiGate, VPN Zscaler y monitoreo.',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#071b1a] border border-[#2ca7d8]/20 p-4"
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
    </div>
  );
}
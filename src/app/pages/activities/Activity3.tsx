import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity3 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-03');
  if (!activity) return <div>Actividad no encontrada</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${activity.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/actividades"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice de actividades
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {activity.title}
        </h1>

        {/* Botón PDF */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Descargar PDF
          </a>
        </div>

        {/* 1. Introducción */}
        <h3 className="text-lg font-bold text-[#cc6633] mb-2">Introducción</h3>
        <div className="intro text-[#d4a574] mb-8 leading-relaxed">
          En esta actividad se realiza la interpretación y traducción de políticas de filtrado usando
          <span className="font-bold"> iptables</span>. Se identifican conceptos base como el flujo
          de procesamiento de paquetes (tabla → cadena → regla), el propósito de las tablas principales
          (FILTER, NAT, MANGLE, RAW, SECURITY) y se construyen reglas típicas para permitir/limitar tráfico
          (HTTP, SSH, tráfico saliente, estados NEW/ESTABLISHED y registro con LOG).
        </div>

        {/* 2. Desarrollo técnico */}
        <div className="space-y-10">
          <h3 className="text-lg font-bold text-[#cc6633]">Desarrollo técnico</h3>

          {/* Sección: Flujo */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-3">1 Flujo del paquete en iptables</h4>
            <ul className="space-y-2 pl-6 list-disc">
              <li className="text-sm font-mono text-[#d4a574]/75">
                Cuando un paquete llega al sistema, primero pasa por una <span className="font-bold">tabla</span>,
                después por una <span className="font-bold">cadena</span> y finalmente se evalúa una <span className="font-bold">regla</span>.
              </li>
            </ul>
          </div>

          {/* Sección: Tablas */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-4">2 Tablas de iptables y propósito</h4>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-white font-mono">Tabla</th>
                    <th className="px-4 py-2 text-left text-white font-mono">Propósito principal</th>
                    <th className="px-4 py-2 text-left text-white font-mono">Ejemplo de uso</th>
                  </tr>
                </thead>
                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">FILTER</td>
                    <td className="px-4 py-2 font-mono">Filtrado de paquetes</td>
                    <td className="px-4 py-2 font-mono">Bloquear / permitir</td>
                  </tr>
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">NAT</td>
                    <td className="px-4 py-2 font-mono">Traducción de direcciones</td>
                    <td className="px-4 py-2 font-mono">Realizar NAT</td>
                  </tr>
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">MANGLE</td>
                    <td className="px-4 py-2 font-mono">Modificar paquetes</td>
                    <td className="px-4 py-2 font-mono">QoS / TTL</td>
                  </tr>
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">RAW</td>
                    <td className="px-4 py-2 font-mono">Segmentación / bypass de tracking</td>
                    <td className="px-4 py-2 font-mono">Paquetes sin seguimiento</td>
                  </tr>
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">SECURITY</td>
                    <td className="px-4 py-2 font-mono">Auditoría / políticas de seguridad</td>
                    <td className="px-4 py-2 font-mono">Permitir/denegar por políticas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sección: Anatomía de comando */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-3">3 Anatomía de un comando iptables</h4>

            <div className="text-sm font-mono text-[#d4a574]/75 mb-3">
              Ejemplo (aceptar tráfico TCP entrante a puertos 80 y 443):
            </div>

            <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT`}
            </pre>

            <ul className="space-y-2 pl-6 list-disc mt-4">
              <li className="text-sm font-mono text-[#d4a574]/75">
                <span className="font-bold">-A INPUT</span>: agrega una regla a la cadena INPUT.
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                <span className="font-bold">-p tcp</span>: aplica al protocolo TCP.
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                <span className="font-bold">-m multiport --dports</span>: varios puertos destino.
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                <span className="font-bold">-j ACCEPT</span>: acción final (target) aceptar.
              </li>
            </ul>
          </div>

          {/* Sección: Variables/opciones */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-3">5 Variables y opciones comunes</h4>
            <ul className="space-y-2 pl-6 list-disc">
              <li className="text-sm font-mono text-[#d4a574]/75">
                a) Limitar intentos por minuto: <span className="font-bold">--limit</span> (ej. 5/min)
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                b) Filtrar por IP de origen: <span className="font-bold">-s</span> (source)
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                c) Ver solo números (sin DNS/puertos): <span className="font-bold">-n</span>
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                d) Ver reglas con contadores (paquetes/bytes): <span className="font-bold">-v</span>
              </li>
            </ul>
          </div>

          {/* Sección: Reglas (7-11) */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-4">Reglas iptables</h4>

            <div className="space-y-5">
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">6. ¿Qué hace esta regla?</div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`Agrega al final una regla para aceptar paquetes tcp de entrada en la interfaz eth0\nque salgan de los puertos 22, 80, 443 con estado de conexión nuevo o establecido`}                
                </pre>
              </div>
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">7) Permitir tráfico HTTP entrante</div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A INPUT -p tcp --dport 80 -j ACCEPT`}
                </pre>
              </div>

              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">8) Permitir todo el tráfico saliente</div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A OUTPUT -j ACCEPT`}
                </pre>
              </div>

              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">9) Permitir SSH solo desde 192.168.1.50</div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A INPUT -p tcp --dport 22 -s 192.168.1.50 -j ACCEPT`}
                </pre>
              </div>

              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  10) Permitir TCP (80,443) solo si es conexión ESTABLISHED/RELATED
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A INPUT -p tcp -m multiport --dports 80,443 -m state --state ESTABLISHED,RELATED -j ACCEPT`}
                </pre>
              </div>

              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  11) Permitir TCP (22,80,443) por eth0, registrar intentos y permitir solo NEW/ESTABLISHED
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A INPUT -i eth0 -p tcp -m multiport --dports 22,80,443 -m state --state NEW -j LOG --log-prefix "IPTABLES_NEW: "
iptables -A INPUT -i eth0 -p tcp -m multiport --dports 22,80,443 -m state --state NEW,ESTABLISHED -j ACCEPT`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Reflexión */}
        <div className="reflection mt-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Reflexión</h3>
          <p className="text-[#d4a574] leading-relaxed">
            La práctica muestra que iptables no solo consiste en “abrir o cerrar puertos”, sino en definir
            políticas coherentes por tablas/cadenas, controlar estados de conexión (stateful filtering) y
            registrar intentos para auditoría. La diferencia entre permitir “cualquier TCP” y permitir
            “solo NEW/ESTABLISHED” reduce superficie de ataque y mejora el control operativo.
          </p>
        </div>

        {/* 4. Referencias */}
        <div className="references mt-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Referencias</h3>
          <ul className="space-y-2">
            <li className="text-sm font-mono text-[#d4a574]/75">
              <span className="text-[#cc6633]">› </span>
              Material de actividad y ejercicios resueltos (documento proporcionado por el curso).
            </li>
            <li className="text-sm font-mono text-[#d4a574]/75">
              <span className="text-[#cc6633]">› </span>
              Documentación de iptables / netfilter (comandos y módulos comunes).
            </li>
          </ul>
        </div>
        {/* Navegación inferior */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/actividades"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activity3;
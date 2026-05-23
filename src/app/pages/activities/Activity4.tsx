import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity4 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-04');
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

        {/* Imagen principal */}
        <div className="mb-8">
          <img
            src={`${import.meta.env.BASE_URL}images/act04.png`}
            alt="Topología de red - Actividad 04"
            className="w-full max-w-4xl mx-auto border border-[#d4a574]/30 shadow-lg"
          />
          <p className="text-center text-sm text-[#d4a574]/60 mt-2 font-mono">
            Figura 1. Topología de red utilizada en el ejercicio.
          </p>
        </div>

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
          En esta actividad se implementan <span className="font-bold">mecanismos de defensa en red</span>
          mediante un <span className="font-bold">firewall con iptables</span>, aplicando una política
          restrictiva por defecto y habilitando únicamente el tráfico necesario para servicios
          específicos (DNS, correo SMTP y web HTTP). La topología considera una red local
          <span className="font-bold"> 192.1.2.0/24</span> con un servidor de correo
          <span className="font-bold"> 192.1.2.10</span> y un servidor web
          <span className="font-bold"> 192.1.2.11</span>, controlando el tránsito desde/hacia Internet.
        </div>

        {/* 2. Desarrollo técnico */}
        <div className="space-y-10">
          <h3 className="text-lg font-bold text-[#cc6633]">Desarrollo técnico</h3>

          {/* 2.1 Topología */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-3">1 Topología y activos</h4>
            <ul className="space-y-2 pl-6 list-disc">
              <li className="text-sm font-mono text-[#d4a574]/75">
                Perímetro: firewall/iptables entre Internet y la red interna.
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                Red interna: <span className="font-bold">192.1.2.0/24</span>.
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                Servidor de correo: <span className="font-bold">192.1.2.10</span> (SMTP 25/TCP).
              </li>
              <li className="text-sm font-mono text-[#d4a574]/75">
                Servidor web: <span className="font-bold">192.1.2.11</span> (HTTP 80/TCP).
              </li>
            </ul>
          </div>

          {/* 2.2 Reglas */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-4">
              2 Configuración del firewall (iptables)
            </h4>

            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  1) Política restrictiva (deny-by-default)
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -P INPUT DROP
iptables -P OUTPUT DROP
iptables -P FORWARD DROP`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Se bloquea todo por defecto y solo se permite lo estrictamente necesario.
                </p>
              </div>

              {/* 2 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  2) Permitir conexiones ya establecidas (stateful)
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Habilita el retorno de tráfico legítimo sin abrir de más la política. 
                </p>
              </div>

              {/* 3 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  3) Permitir DNS saliente (TCP/53) desde la red local
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A OUTPUT -p tcp --dport 53 -s 192.1.2.0/24 -j ACCEPT`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Permite resolución de nombres desde la LAN hacia el exterior. 
                </p>
              </div>

              {/* 4 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  4) Aceptar correo entrante (SMTP/25) hacia el servidor de correo
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A FORWARD -p tcp -d 192.1.2.10 --dport 25 -j ACCEPT`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Expone únicamente el servicio requerido en el host correspondiente.
                </p>
              </div>

              {/* 5 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  5) Permitir correo saliente (SMTP/25) desde el servidor de correo
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A FORWARD -p tcp -s 192.1.2.10 --dport 25 -j ACCEPT`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Autoriza al servidor de correo para enviar email a Internet. 
                </p>
              </div>

              {/* 6 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  6) Aceptar HTTP entrante (80/TCP) hacia el servidor web
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A FORWARD -p tcp -d 192.1.2.11 --dport 80 -j ACCEPT`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Publica el servicio web sin abrir otros puertos. 
                </p>
              </div>

              {/* 7 */}
              <div>
                <div className="text-sm font-mono text-[#cc6633] mb-2">
                  7) Permitir HTTP desde la red local hacia Internet
                </div>
                <pre className="overflow-x-auto p-3 bg-black/40 border border-[#d4a574]/20 text-[#d4a574] text-sm">
{`iptables -A FORWARD -p tcp -s 192.1.2.0/24 --dport 80 -j ACCEPT`}
                </pre>
                <p className="text-sm font-mono text-[#d4a574]/75 mt-2">
                  Permite navegación HTTP saliente desde la LAN (según el escenario del ejercicio). 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Reflexión */}
        <div className="reflection mt-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Reflexión</h3>
          <p className="text-[#d4a574] leading-relaxed">
            Aplicar una política “deny-by-default” obliga a justificar cada excepción y reduce la
            superficie de ataque. El uso de filtrado con estado (ESTABLISHED/RELATED) es clave para
            mantener funcionalidad sin abrir reglas innecesarias. En un escenario real, complementaría
            esto con registro (LOG), límites (rate-limit), reglas para ICMP controlado y, si aplica,
            HTTPS (443/TCP) además de HTTP.
          </p>
        </div>

        {/* 4. Referencias (si existen en activities.ts) */}
        {Array.isArray((activity as any).references) && (activity as any).references.length > 0 && (
          <div className="references mt-10">
            <h3 className="text-lg font-bold text-[#cc6633] mb-2">Referencias</h3>
            <ul className="space-y-2">
              {(activity as any).references.map((r: any, idx: number) => (
                <li key={idx} className="text-sm font-mono text-[#d4a574]/75">
                  <span className="text-[#cc6633]">› </span>
                  <span className="text-[#d4a574]">{r.label}:</span> {r.value}
                </li>
              ))}
            </ul>
          </div>
        )}
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

export default Activity4;
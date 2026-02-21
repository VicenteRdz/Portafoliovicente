import React from 'react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity5 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-05');
  if (!activity) return <div>Actividad no encontrada</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${activity.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Introducción</h3>
          <div className="intro text-[#d4a574]/85 font-mono leading-relaxed">
            En el ámbito de la seguridad informática, las pruebas de penetración (pentesting) requieren
            metodologías claras para asegurar consistencia, trazabilidad y resultados accionables.
            Esta actividad compara marcos ampliamente utilizados para pruebas ofensivas y evaluación
            de controles, identificando su propósito, fases de implementación, escenarios de uso,
            orientación (red/blue team, evaluación formal, testing web, etc.) y su relación con
            estándares o referencias oficiales.
            <br />
            <br />
            El objetivo es “cartografiar” el pentesting mediante un análisis comparativo que permita
            seleccionar la metodología más adecuada según el contexto (aplicaciones web, infraestructura,
            cumplimiento normativo, medición objetiva, ejercicios tipo red team o análisis de amenazas).
          </div>
        </div>

        {/* 2. Desarrollo técnico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">Desarrollo técnico</h3>

          {/* Resumen comparativo (bullets) */}
          <div className="space-y-6">
            {[
              {
                title: 'MITRE ATT&CK',
                items: [
                  'Marco de conocimiento para documentar tácticas, técnicas y procedimientos (TTPs) de actores reales.',
                  'Útil para análisis de amenazas, evaluación de detección (SOC), mapeo de controles y ejercicios Red/Blue Team.',
                  'Se organiza por tácticas (Reconnaissance, Initial Access, Execution, Persistence, etc.).',
                ],
              },
              {
                title: 'OWASP WSTG',
                items: [
                  'Metodología estructurada para pruebas de seguridad en aplicaciones web.',
                  'Define qué probar, cómo y por qué (Information Gathering, AuthN/AuthZ, Session Mgmt, Input Validation, etc.).',
                  'Útil en Secure SDLC / DevSecOps y auditorías web antes de despliegues.',
                ],
              },
              {
                title: 'NIST SP 800-115',
                items: [
                  'Guía técnica para planificar, ejecutar y reportar pruebas de seguridad.',
                  'Proceso: Planning → Discovery → Attack → Reporting.',
                  'Muy útil en entornos empresariales/gubernamentales y en programas de riesgo/cumplimiento.',
                ],
              },
              {
                title: 'OSSTMM',
                items: [
                  'Metodología formal orientada a medición objetiva y verificable de seguridad.',
                  'Aporta procedimientos estandarizados para evaluar exposición/resiliencia y comparar evaluaciones.',
                  'Incluye alcance, reglas de engagement, recolección, pruebas, análisis/correlación y reporte.',
                ],
              },
              {
                title: 'PTES',
                items: [
                  'Estándar práctico para ejecución profesional de pentesting de punta a punta.',
                  'Fases: pre-engagement → intelligence gathering → threat modeling → vuln analysis → exploitation → post-exploitation → reporting.',
                  'Orientado a hallazgos explotables y mejora defensiva con resultados accionables.',
                ],
              },
              {
                title: 'ISSAF',
                items: [
                  'Marco metodológico detallado para evaluación técnica de seguridad.',
                  'Proceso integral: planificación → assessment/testing → análisis → reporting → follow-up.',
                  'Útil para auditorías técnicas profundas e infraestructura/red/servicios.',
                ],
              },
            ].map((block, idx) => (
              <div key={idx} className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
                <h4 className="text-md font-bold text-[#d4a574] mb-2">{block.title}</h4>
                <ul className="space-y-2 pl-6 list-disc">
                  {block.items.map((it, j) => (
                    <li key={j} className="text-sm font-mono text-[#d4a574]/75">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tabla comparativa completa */}
          <div className="mt-10">
            <h4 className="text-md font-bold text-[#cc6633] mb-3">Tabla comparativa de metodologías</h4>

            <div className="overflow-x-auto border border-[#d4a574]/20 bg-[#1a1a1a]/40">
              <table className="min-w-[1200px] w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#d4a574]/20">
                    {[
                      'Metodología',
                      'Descripción',
                      'Fases',
                      'Objetivo',
                      'Escenarios',
                      'Orientación',
                      'Autores',
                      'URL oficial',
                      'Certificación',
                      'Versiones',
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-sm font-mono text-[#d4a574] bg-black/20"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="align-top">
                  {/* MITRE ATT&CK */}
                  <tr className="border-b border-[#d4a574]/10">
                    <td className="px-4 py-3 text-sm font-mono text-[#cc6633]">MITRE ATT&amp;CK</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Marco de conocimiento que documenta TTPs usados por actores reales durante un ciberataque.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Reconnaissance; Resource Development; Initial Access; Execution; Persistence; Privilege Escalation;
                      Defense Evasion; Credential Access; Discovery; Lateral Movement; Collection; C2; Exfiltration; Impact.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Identificar y clasificar comportamientos de ataque.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Análisis de amenazas; evaluación de detección en SOC; mapeo de incidentes reales; diseño/validación de controles.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Evaluación y defensa (Red/Blue Team).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">MITRE Corporation.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">attack.mitre.org</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">No es certificación oficial (base para entrenamientos).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Actualizado periódicamente.</td>
                  </tr>

                  {/* OWASP WSTG */}
                  <tr className="border-b border-[#d4a574]/10">
                    <td className="px-4 py-3 text-sm font-mono text-[#cc6633]">OWASP WSTG</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Metodología para pruebas de seguridad en aplicaciones web (qué probar, cómo y por qué).
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Information Gathering; Configuration/Deployment; Identity Mgmt; Authentication; Authorization;
                      Session Mgmt; Input Validation; Error Handling; Cryptography; Business Logic; Client-side Testing.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Identificar vulnerabilidades en aplicaciones web y fallas de configuración/controles.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Pentesting web; auditorías de seguridad en desarrollo/producción; Secure SDLC / DevSecOps; cumplimiento web.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Evaluación ofensiva controlada (testing técnico).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">OWASP (comunidad abierta).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">owasp.org (WSTG)</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">No es certificación oficial.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Actualizaciones constantes.</td>
                  </tr>

                  {/* NIST SP 800-115 */}
                  <tr className="border-b border-[#d4a574]/10">
                    <td className="px-4 py-3 text-sm font-mono text-[#cc6633]">NIST SP 800-115</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Guía técnica para planificar, ejecutar y reportar pruebas de seguridad y evaluación de controles.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Planning; Discovery; Attack; Reporting.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Evaluar efectividad de controles mediante pruebas estructuradas; apoyar gestión de riesgos.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Entornos gubernamentales/empresariales; auditorías técnicas; validación de controles; cumplimiento.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Evaluación controlada y formal.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">NIST (Dept. Comercio EUA).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">nist.gov (SP 800-115)</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">No es certificación oficial.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Documento de referencia estable.</td>
                  </tr>

                  {/* OSSTMM */}
                  <tr className="border-b border-[#d4a574]/10">
                    <td className="px-4 py-3 text-sm font-mono text-[#cc6633]">OSSTMM</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Metodología formal para medición objetiva y verificable de seguridad en sistemas, redes y procesos.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Scope Definition; Rules of Engagement; Information Gathering; Security Testing; Analysis/Correlation; Reporting.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Medir seguridad de forma objetiva y comparable entre evaluaciones.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Auditorías técnicas; evaluación de infraestructura/redes; medición de exposición; comparación de niveles.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Evaluación/medición técnica objetiva.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">ISECOM.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">isecom.org</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Existen certificaciones basadas en OSSTMM.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">OSSTMM 3.</td>
                  </tr>

                  {/* PTES */}
                  <tr className="border-b border-[#d4a574]/10">
                    <td className="px-4 py-3 text-sm font-mono text-[#cc6633]">PTES</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Estándar operativo práctico para pentesting desde interacción inicial hasta explotación y reporte.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Pre-engagement; Intelligence Gathering; Threat Modeling; Vulnerability Analysis; Exploitation; Post-Exploitation; Reporting.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Estandarizar ejecución profesional y resultados accionables.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Pentesting de infraestructura/redes; seguridad corporativa; ejercicios Red Team; validación postura técnica.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Ataque ofensivo controlado (mejora defensiva).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">PTES (comunidad).</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">pentest-standard.org</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">No es certificación oficial.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Estándar estable (pocos cambios).</td>
                  </tr>

                  {/* ISSAF */}
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-[#cc6633]">ISSAF</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Marco metodológico detallado para evaluación técnica de sistemas, con procedimientos extensivos.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Planning/Preparation; Assessment/Testing; Analysis; Reporting; Follow-up.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Realizar evaluaciones exhaustivas e identificar debilidades técnicas/operativas.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">
                      Auditorías técnicas profundas; evaluación de infraestructura/redes/servicios; programas de mejora.
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">Evaluación técnica ofensiva controlada.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">OISSG.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">untrustednetwork.net (documento)</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">No cuenta con certificaciones propias.</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#d4a574]/75">ISSAF 0.2.1 (pocas actualizaciones).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs font-mono text-[#d4a574]/50 mt-2">
              Nota: La tabla resume y estandariza los campos del cuadro comparativo presentado en el documento.
            </p>
          </div>
        </div>

        {/* 3. Reflexión */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Reflexión</h3>
          <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
            Entre las metodologías analizadas, MITRE ATT&CK destaca por su nivel de madurez, adopción global y actualización constante basada en inteligencia real de amenazas. A diferencia de otros marcos que se enfocan exclusivamente en la ejecución de pruebas de penetración, ATT&CK proporciona un lenguaje común estandarizado para describir el comportamiento de los adversarios mediante tácticas y técnicas claramente definidas.
            <br /><br />
            Una de sus principales ventajas es que no depende de un enfoque meramente teórico, sino que está construido a partir de evidencia empírica documentada en incidentes reales. Esto lo convierte en una referencia altamente confiable tanto para equipos ofensivos (Red Team) como defensivos (Blue Team), permitiendo mapear ataques simulados contra comportamientos observados en el mundo real.
          </p>
        </div>

        {/* 4. Referencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Referencias</h3>
          <ul className="space-y-2">
            <li className="text-sm font-mono text-[#d4a574]/75">
              Cisco Networking Academy. (2026). Exploración de metodologías de pruebas de penetración (Hacker ético).
            </li>
            <li className="text-sm font-mono text-[#d4a574]/75">ISECOM. (2026). Research / OSSTMM.</li>
            <li className="text-sm font-mono text-[#d4a574]/75">MITRE Corporation. (2025–2026). ATT&CK / Resources.</li>
            <li className="text-sm font-mono text-[#d4a574]/75">NIST. (2008). SP 800-115 Technical Guide to Information Security Testing and Assessment.</li>
            <li className="text-sm font-mono text-[#d4a574]/75">OISSG. (2006). ISSAF Draft 0.2.1.</li>
            <li className="text-sm font-mono text-[#d4a574]/75">OWASP. (2020–2026). Web Security Testing Guide (WSTG).</li>
            <li className="text-sm font-mono text-[#d4a574]/75">PTES. (2014). Pentest Standard.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Activity5;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity2 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-02');
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

        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {activity.title}
        </h1>

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
        <h3 className="text-lg font-bold text-[#cc6633]">Introducción</h3>
        <div className="intro text-[#d4a574] mb-6">
          El presente trabajo analiza distintos escenarios reales de seguridad informática utilizando dos marcos de referencia ampliamente aceptados: el RFC 4949 y la recomendación ITU-T X.800. A partir de estos documentos, se busca identificar y describir de manera técnica los incidentes de seguridad, así como los servicios afectados, los tipos de amenazas involucradas y las posibles medidas de control.
          <br /><br />
          El RFC 4949, emitido por la IETF, reúne la terminología fundamental empleada en el ámbito de la seguridad de la información y las redes, lo que permite describir los escenarios de forma clara y precisa, evitando interpretaciones ambiguas. Por su parte, la recomendación ITU-T X.800 establece un marco conceptual que define los servicios de seguridad necesarios para proteger los sistemas de comunicación, como la autenticación, el control de acceso, la confidencialidad, la integridad, el no repudio y la disponibilidad.
        </div>

        {/* 2. Desarrollo técnico */}
        <div className="space-y-10">

          <h3 className="text-lg font-bold text-[#cc6633]">Desarrollo técnico</h3>

          {/* ===== ESCENARIO 01 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 01</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              En múltiples incidentes atribuidos al grupo LockBit, organizaciones públicas y privadas han sufrido el cifrado masivo de servidores tras un acceso inicial no autorizado. Antes de ejecutar el ransomware, los atacantes exfiltraron información sensible y posteriormente amenazaron con su publicación, evidenciando un compromiso simultáneo de la confidencialidad, la integridad y la disponibilidad. Desde el enfoque del RFC 4949, el incidente se clasifica como un multi-stage attack con data breach y availability attack, donde la indisponibilidad del sistema es solo una fase final del daño. La ausencia de respaldos inmutables y de detección temprana permitió que el impacto fuera total
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Control de acceso, confidencialidad de datos, integridad, disponibilidad, autenticación
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">Multi-stage attack:</span> Ataque compuesto por múltiples fases secuenciales, como acceso inicial, exfiltración de información y ejecución de ransomware.</div>
                      <div className="mt-2"><span className="font-bold">Data breach:</span>Incidente de seguridad en el cual información sensible, protegida o confidencial es accedida o divulgada sin autorización.</div>
                      <div className="mt-2"><span className="font-bold">Availability attack:</span>Ataque cuyo objetivo es degradar, interrumpir o impedir el acceso legítimo a sistemas o servicios, afectando su disponibilidad.</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externo (Acceso inicial no autorizado)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Compromiso inicial de credenciales o explotación de vulnerabilidades, despliegue de ransomware.
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Cifrado masivo de servidores, pérdida de acceso a sistemas críticos, interrupción de operaciones y riesgo de divulgación de información sensible.
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Implementación de respaldos inmutables, segmentación de red, monitoreo y detección temprana de actividades anómalas, y fortalecimiento de controles de acceso.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ===== ESCENARIO 02 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 02</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              En diversos casos documentados, bases de datos completas quedaron accesibles públicamente debido a errores de configuración en servicios de almacenamiento en la nube. No existió una explotación técnica sofisticada, sino una falla en el control de acceso, lo que derivó directamente en la pérdida de confidencialidad de los datos. El RFC 4949 describe este tipo de incidentes como misconfiguration y exposure, subrayando que la amenaza no siempre implica malware o intrusión activa. El impacto suele ser legal y reputacional, aun cuando no se pueda demostrar acceso malicioso. 
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Confidencialidad de datos, control de acceso
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">Misconfiguration:</span> Condición en la que un sistema o servicio presenta configuraciones incorrectas o inseguras.</div>
                      <div className="mt-2"><span className="font-bold">Exposure:</span> Estado en el cual información o recursos quedan accesibles a entidades no autorizadas.</div>
                      <div className="mt-2"><span className="font-bold">Malware:</span> Software malicioso.</div>
                      <div className="mt-2"><span className="font-bold">Active intrusion:</span> Evento de seguridad donde un intruso gana acceso a un sistema sin tener autorización.</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Interna (Error de configuración en controles de acceso)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Configuración incorrecta de controles de acceso en servicios de almacenamiento en la nube
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Pérdida de confidencialidad de datos sensibles, posibles sanciones legales, mala reputación y pérdida de confianza de clientes
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Implementación de políticas estrictas de control de acceso, revisiones periódicas de configuración
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 03 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 03</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              Un proveedor legítimo de software fue comprometido y distribuyó una actualización que incluía código malicioso, afectando a cientos de organizaciones que confiaban en él. Este escenario refleja una violación grave de la integridad de los sistemas y, en muchos casos, de la confidencialidad, al permitir accesos no autorizados posteriores. El RFC 4949 lo identifica como supply chain attack, destacando el abuso de relaciones de confianza. El daño es particularmente crítico porque rompe el supuesto de legitimidad del software firmado. 
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Autenticación, confidencialidad de datos, no repudio, integridad, control de acceso
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">Supply chain attack: </span> Tipo de ataque en el que un adversario compromete un proveedor legítimo o un componente confiable del proceso de desarrollo, distribución o actualización de software, con el fin de introducir código malicioso que será distribuido a múltiples víctimas que confían en dicha fuente</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externa (Abuso de confianza)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Actualización con código malicioso o percibido como legítimo
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Integridad de los sistemas afectados, posible acceso no autorizado posterior, pérdida de confidencialidad de la información
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Verificación estricta de la integridad de actualizaciones, controles de seguridad en la cadena de suministro de software
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 04 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 04</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              Mediante campañas de phishing, atacantes obtuvieron credenciales válidas y accedieron a sistemas corporativos durante meses sin levantar alertas. Aunque la autenticación funcionó técnicamente, el servicio de autenticación fue comprometido al basarse en credenciales robadas, afectando también el control de acceso. Según el RFC 4949, se trata de un credential compromise con authentication failure conceptual, no técnica. La falta de MFA y de monitoreo de comportamiento facilitó la persistencia del atacante
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Control de acceso, autenticación
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">credential compromiso</span> Credenciales de autenticación válidas son obtenidas por una entidad no autorizada</div>
                      <div><span className="font-bold">authentication failure:</span> Fallo en el proceso de autenticación que ocurre cuando el sistema acepta credenciales válidas sin detectar que han sido comprometidas</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externa (Credenciales válidas e ingeniería social)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Campañas de phishing dirigidas a usuarios corporativos
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Acceso no autorizado prolongado a sistemas corporativos, persistencia del atacante, posible escalamiento de privilegios                 
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      MFA robusto, monitoreo de comportamiento de usuarios, detección de accesos anómalos y revisión periódica de privilegios.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 05 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 05</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              En ataques de ransomware avanzados, los atacantes eliminaron o cifraron los respaldos antes de afectar los sistemas productivos. Este hecho compromete directamente la disponibilidad y la integridad de la información, al impedir la recuperación. El RFC 4949 clasifica este comportamiento como data destruction y availability attack, evidenciando intención deliberada de maximizar el daño. La inexistencia de respaldos offline o inmutables convierte el incidente en catastrófico. 
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Disponibilidad, integridad de datos
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">Data destruction:</span> Acción mediante la cual datos son eliminados, alterados o inutilizados de forma intencional</div>
                      <div><span className="font-bold">Availability attack: </span> Ataque dirigido a degradar o impedir el acceso a sistemas, servicios o información</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externa (Maximizar el impacto operativo del incidente)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">                 	
                      Ejecución de ransomware con privilegios suficientes para eliminar o cifrar respaldos antes de afectar los sistemas productivos.
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Pérdida de capacidad de recuperación ante desastres, interrupción prolongada de operaciones críticas
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Implementación de respaldos offline e inmutables, segregación de privilegios administrativos
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 06 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 06</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              Un empleado con acceso legítimo extrajo bases de datos completas y las vendió a terceros, sin explotar vulnerabilidades técnicas. El servicio afectado fue principalmente la confidencialidad, junto con fallas en el control de acceso por exceso de privilegios. El RFC 4949 define este escenario como insider threat, destacando que el riesgo interno puede ser tan grave como el externo. La carencia de monitoreo y de políticas de mínimo privilegio fue determinante. 
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Confidencialidad, control de acceso
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">insider threat: </span> Amenaza originada por una persona con acceso legítimo a los sistemas o información de una organización</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Interno (empleado con acceso legítimo)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Uso indebido de credenciales válidas y privilegios excesivos
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Pérdida de confidencialidad de información sensible, posibles sanciones legales, afectación reputacional
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Políticas de mínimo privilegio, monitoreo continuo de actividades de usuarios privilegiados,
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 07 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 07</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              Tras un ataque, los registros del sistema quedaron cifrados o alterados, impidiendo reconstruir la secuencia de eventos. Esto compromete la integridad de los datos y el no repudio, ya que no es posible demostrar qué ocurrió ni quién fue responsable. Desde el RFC 4949, se trata de una violación de evidentiary integrity y del audit trail. El impacto no solo es técnico, sino también probatorio y legal. 
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      No repudio, integridad
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">evidentiary integrity:</span> Garantiza que la evidencia digital se mantiene completa, auténtica y no alterada</div>
                      <div><span className="font-bold">audit Trail: </span> Registro cronológico de eventos y actividades del sistema que permite reconstruir acciones realizadas</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externa (Ocultar actividades maliciosas)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Alteración o cifrado deliberado de registros del sistema y archivos de auditoría
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Imposibilidad de reconstruir la secuencia de eventos, pérdida de trazabilidad, afectación al no repudio
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Protección de registros mediante mecanismos de integridad, almacenamiento seguro e inmutable de logs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 08 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 08</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              Una actualización mal ejecutada provocó la caída simultánea de múltiples servicios críticos a nivel global. Aunque no existió un atacante, el servicio de disponibilidad fue gravemente afectado. El RFC 4949 contempla estos eventos como operational failure, recordando que la seguridad también se ve afectada por errores internos. La falta de pruebas previas y planes de reversión amplificó el impacto
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Disponibilidad
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">operational failure: </span> Evento en el que un sistema o servicio falla debido a errores internos, fallas de operación o procesos inadecuados, sin la intervención de un atacante</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Interna (Fallas operativas)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Actualización mal ejecutada
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Interrupción simultánea de servicios críticos, pérdida de disponibilidad a gran escala, afectación a operaciones globales
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Procesos formales de gestión de cambios, pruebas previas en entornos controlados, planes de reversión
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 09 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 09</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              Atacantes replicaron sitios y correos oficiales para engañar a ciudadanos y obtener información sensible. Este escenario afecta la autenticación, al suplantar identidades legítimas, y la confidencialidad de los datos recolectados. El RFC 4949 lo clasifica como masquerade y phishing, subrayando el componente de ingeniería social. La ausencia de mecanismos de autenticación del dominio y de concientización facilitó el éxito del ataque. 
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Autenticación, confidencialidad
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">Masquerade: </span> Tipo de ataque en el que una entidad se hace pasar por otra entidad legítima con el fin de obtener acceso no autorizado o información sensible.</div>
                      <div><span className="font-bold">Phishing: </span> Técnica de ingeniería social mediante la cual un atacante engaña a las víctimas para que revelen información confidencial, haciéndose pasar por una entidad confiable a través de medios electrónicos.Condición en la que un sistema o servicio presenta configuraciones incorrectas o inseguras.</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externa (Ingeniería social)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Sitios y correos oficiales replicados
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Compromiso de credenciales y datos personales, afectación a la autenticidad de comunicaciones oficiales
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Mecanismos de autenticación de dominio, concientización
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                    {/* ===== ESCENARIO 10 (EJEMPLO COMPLETO) ===== */}
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h3 className="text-xl font-bold text-[#cc6633] mb-3">Escenario 10</h3>

            <p className="text-[#d4a574] leading-relaxed mb-5">
              En algunos incidentes, tras exfiltrar información, los atacantes ejecutaron acciones destructivas para borrar sistemas completos y eliminar rastros. Se produce un compromiso total de la confidencialidad, la integridad y la disponibilidad, configurando uno de los peores escenarios posibles. El RFC 4949 describe este patrón como destructive attack, donde el objetivo no es solo el lucro, sino el daño irreversible. La detección tardía impidió cualquier contención efectiva.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/30 border border-[#d4a574]/20">
                <thead>
                  <tr className="bg-[#2b5fb8]/70">
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Elemento</th>
                    <th className="px-4 py-2 text-left text-[#ffffff] font-mono">Respuesta</th>
                  </tr>
                </thead>

                <tbody className="text-[#d4a574]">
                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Servicios X.800 comprometidos
                    </td>
                    <td className="px-4 py-2 font-mono">
                      Confidencialidad, disponibilidad, integridad
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">
                      Definición(es) aplicable(s) RFC 4949
                    </td>
                    <td className="px-4 py-2 font-mono">
                      <div><span className="font-bold">destructive attack:</span> Un adversario ejecuta acciones deliberadas para eliminar, corromper o inutilizar sistemas y datos</div>
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Tipo de amenaza</td>
                    <td className="px-4 py-2 font-mono">
                      Externa (Causar daño irreversible)
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Vector de ataque</td>
                    <td className="px-4 py-2 font-mono">
                      Acceso no autorizado prolongado que permite la exfiltración de información y la posterior ejecución de comandos destructivos sobre sistemas y datos.
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Impacto técnico / operativo</td>
                    <td className="px-4 py-2 font-mono">
                      Pérdida total de información y sistemas, interrupción prolongada o definitiva de operaciones críticas
                    </td>
                  </tr>

                  <tr className="border-t border-[#d4a574]/20">
                    <td className="px-4 py-2 font-mono font-semibold">Medida de control recomendada</td>
                    <td className="px-4 py-2 font-mono">
                      Implementación de detección temprana de intrusiones, segmentación de red, respaldos offline e inmutables
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>

        {/* 3. Reflexión */}
        <div className="reflection mt-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Reflexión</h3>
          <p className="text-[#d4a574] leading-relaxed">
            El análisis de los escenarios mostró que los incidentes de seguridad pueden originarse tanto por ataques externos como por errores internos y fallas operativas, y que todos pueden afectar de manera significativa a los servicios de seguridad de los sistemas. El uso del RFC 4949 y del modelo ITU-T X.800 permitió identificar de forma clara los servicios comprometidos, las amenazas y sus impactos.
            <br /><br />
            Los casos revisados evidencian que la falta de controles básicos, como una adecuada gestión de accesos, configuraciones correctas, respaldos seguros y monitoreo, incrementa el alcance del daño. En el contexto latinoamericano, aplicar estos marcos de referencia resulta útil para mejorar la seguridad de la información con medidas prácticas y realistas.
          </p>
        </div>

        {/* 4. Referencias (solo si existen en activities.ts) */}
        {Array.isArray(activity.references) && activity.references.length > 0 && (
          <div className="references mt-10">
            <h3 className="text-lg font-bold text-[#cc6633] mb-2">Referencias</h3>
            <ul className="space-y-2">
              {activity.references.map((r, idx) => (
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

export default Activity2;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity1 = () => {
  // Buscamos la actividad por el ID
  const activity = ACTIVITIES.find((a) => a.id === 'act-01'); // Encuentra la actividad por su id
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
        
        <h3 className="text-lg font-bold text-[#cc6633]">Introducción</h3>
        <div className="intro text-[#d4a574] mb-6">
            En la era digital, las organizaciones dependen cada vez más de la interconexión de sus sistemas de información para mantener operaciones críticas y sostenibilidad económica. Sin embargo, esta dependencia también las expone a riesgos cibernéticos de alto impacto, capaces de comprometer simultáneamente la confidencialidad, integridad y disponibilidad de la información. El caso del ataque a **Colonial Pipeline** en 2021, perpetrado por el grupo **DarkSide**, constituye un ejemplo paradigmático de cómo un incidente dirigido a sistemas administrativos y corporativos puede desencadenar consecuencias estratégicas y económicas a nivel nacional. <br /><br />
            El objetivo de este análisis es examinar de manera técnica, económica y estratégica este ciberataque real, identificando sus causas, desarrollo, impactos y consecuencias. Este estudio permitirá comprender la importancia de implementar medidas robustas de ciberseguridad y su relación directa con la continuidad operativa y la estabilidad financiera de las organizaciones.
        </div>

        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#cc6633]">Línea de tiempo</h3>
            {[
            {
                title: 'Fase 1: Investigación y documentación',
                items: [
                '29-abr-2021 (D-9): Acceso inicial a la red corporativa mediante VPN con credenciales comprometidas. MFA no estaba habilitado.',
                '06-may-2021 (D-1): Movimiento lateral y exfiltración de ~100 GB de datos corporativos.'
                ]
            },
            {
                title: 'Día 0: Detección y shutdown',
                items: [
                '07-may-2021 (D-0): Se detecta la nota de rescate; aislamiento preventivo de la red OT y cierre total del oleoducto. Impacto directo en la disponibilidad de combustible.'
                ]
            },
            {
                title: 'Fase de escalamiento: Crisis pública y respuesta gubernamental',
                items: [
                '08-may-2021 (D+1): Comunicación pública; desabasto regional y pánico en mercados.',
                '09-may-2021 (D+2): El gobierno trata el incidente como amenaza a infraestructura crítica nacional.'
                ]
            },
            {
                title: 'Fase de restauración: Reinicio y estabilización',
                items: [
                '12-may-2021 (D+5): Inicio de restauración tras seis días de interrupción; recuperación de sistemas críticos.'
                ]
            },
            {
                title: 'Decisiones de negocio y evidencia financiera',
                items: [
                '18-may-2021 (D+11): Pago de 75 BTC (USD 4.4 M aprox.) ante riesgo crítico de continuidad de suministro.'
                ]
            },
            {
                title: 'Respuesta regulatoria y seguimiento',
                items: [
                '27-may-2021: TSA publica Security Directive para pipelines: reporte obligatorio a CISA.'
                ]
            }
            ].map((phase, idx) => (
            <div key={idx}>
                <h4 className="text-md font-bold text-[#d4a574]">{phase.title}</h4>
                <ul className="space-y-2 pl-6 list-decimal">
                {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm font-mono text-[#d4a574]/75">
                    {item}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>

        {/* Tabla Técnica del Ataque */}
        <div className="mb-6"><br></br>
          <h3 className="text-lg font-bold text-[#cc6633]">Tabla Técnica del Ataque</h3>
          <table className="min-w-full bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <thead>
              <tr>
                <th className="px-6 py-2 text-left text-[#d4a574]">Elemento</th>
                <th className="px-6 py-2 text-left text-[#d4a574]">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Tipo de ataque</td>
                <td className="px-6 py-2 text-[#d4a574]">Ransomware de doble extorsión</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Actor o grupo atacante</td>
                <td className="px-6 py-2 text-[#d4a574]">DarkSide</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Vulnerabilidad explotada</td>
                <td className="px-6 py-2 text-[#d4a574]">Fallo de configuración: Ausencia de MFA en cuenta activa</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Sistemas comprometidos</td>
                <td className="px-6 py-2 text-[#d4a574]">Red IT y facturación, apagado preventivo de red OT</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Duración del incidente</td>
                <td className="px-6 py-2 text-[#d4a574]">17 Días (29-abril al 15-mayo)</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Mecanismos de detección y respuesta</td>
                <td className="px-6 py-2 text-[#d4a574]">Auditoría Mandiant, pago del rescate, intervención FBI/CISA y backups</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Evaluación del Impacto (Modelo CIA) */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evaluación del Impacto (Modelo CIA)</h3>
          <table className="min-w-full bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <thead>
              <tr>
                <th className="px-6 py-2 text-left text-[#d4a574]">Principio</th>
                <th className="px-6 py-2 text-left text-[#d4a574]">Impacto</th>
                <th className="px-6 py-2 text-left text-[#d4a574]">Evidencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Integridad</td>
                <td className="px-6 py-2 text-[#d4a574]">Exfiltración de datos corporativos sensibles utilizados como mecanismo de double extortion</td>
                <td className="px-6 py-2 text-[#d4a574]">Reportes indican robo de entre 100 GB hasta cerca de 1 TB de datos corporativos sensible.</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Confidencialidad</td>
                <td className="px-6 py-2 text-[#d4a574]">Cifrado de sistemas TI corporativos, comprometiendo la confiabilidad y operatividad de la información</td>
                <td className="px-6 py-2 text-[#d4a574]">El ransomware bloqueó múltiples sistemas corporativos, incluyendo el sistema de facturación, generando incertidumbre sobre la confiabilidad operativa y financiera</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Disponibilidad</td>
                <td className="px-6 py-2 text-[#d4a574]">Suspensión total preventiva de operaciones del pipeline (infraestructura crítica energética), causando impacto económico y social masivo.</td>
                <td className="px-6 py-2 text-[#d4a574]">Reportes indican robo de entre 100 GB hasta cerca de 1 TB de datos corporativos sensible.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Msrco Economico */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Marco Económico</h3>
          <table className="min-w-full bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <thead>
              <tr>
                <th className="px-6 py-2 text-left text-[#d4a574]">Tipo de costo</th>
                <th className="px-6 py-2 text-left text-[#d4a574]">Descripción</th>
                <th className="px-6 py-2 text-left text-[#d4a574]">Estimación (MXN)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Pérdidas operativas </td>
                <td className="px-6 py-2 text-[#d4a574]">Interrupción del oleoducto durante varios días por ataque ransomware</td>
                <td className="px-6 py-2 text-[#d4a574]">$80 millones MXN</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Daños reputacionales </td>
                <td className="px-6 py-2 text-[#d4a574]">Pérdida de confianza pública, impacto en el sector energético y percepción de seguridad</td>
                <td className="px-6 py-2 text-[#d4a574]">$20 millones MXN</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Costos técnicos</td>
                <td className="px-6 py-2 text-[#d4a574]">Respuesta al incidente, recuperación de sistemas, consultoría especializada en ciberseguridad</td>
                <td className="px-6 py-2 text-[#d4a574]">$40 millones MXN</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Costos legales/regulatorios</td>
                <td className="px-6 py-2 text-[#d4a574]">Asesoría legal, cumplimiento normativo y revisión de seguridad</td>
                <td className="px-6 py-2 text-[#d4a574]">$10 millones MXN</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Pago de rescate o extorsión</td>
                <td className="px-6 py-2 text-[#d4a574]">Pago de rescate por ataque ransomware</td>
                <td className="px-6 py-2 text-[#d4a574]">$85 millones MXN</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">Total estimado </td>
                <td className="px-6 py-2 text-[#d4a574]">Suma total del impacto económico aproximado</td>
                <td className="px-6 py-2 text-[#d4a574]">$235 millones MXN</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Relación con Marcos Normativos */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Relación con Marcos Normativos</h3>
          <table className="min-w-full bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <thead>
              <tr>
                <th className="px-6 py-2 text-left text-[#d4a574]">Normativa</th>
                <th className="px-6 py-2 text-left text-[#d4a574]">Cumplimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">ISO 27001</td>
                <td className="px-6 py-2 text-[#d4a574]">No cumplimiento, falta de MFA</td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-[#d4a574]">GDPR</td>
                <td className="px-6 py-2 text-[#d4a574]">No cumplimiento debido a la exfiltración de datos personales</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reflexión */}
        <div className="reflection mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Reflexión</h3>
          {/* Aquí iría el contenido de reflexión */}
          <div className="intro text-[#d4a574] mb-6">
            El caso Colonial Pipeline demuestra que un incidente de ciberseguridad puede escalar
            rápidamente de un problema técnico a una crisis económica, social y de seguridad
            nacional cuando afecta infraestructura crítica. La principal lección es que las fallas
            básicas, como la ausencia de MFA, mala gestión de identidades y monitoreo
            insuficiente, pueden generar impactos sistémicos cuando se combinan con modelos
            criminales modernos como el RaaS. Esto evidencia que la ciberseguridad ya no debe
            verse como un gasto tecnológico, sino como un componente esencial de la
            continuidad operativa y la estabilidad económica.
            </div>
        </div>

        {/* Referencias */}
        <div className="references">
          <h3 className="text-lg font-bold text-[#cc6633]">Referencias</h3>
          <ul className="space-y-2">
            {activity.references.map((r, idx) => (
              <li key={idx} className="text-sm font-mono text-[#d4a574]/75">
                <span className="text-[#cc6633]">› </span>
                <span className="text-[#d4a574]">{r.label}:</span> {r.value}
              </li>
            ))}
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

export default Activity1;
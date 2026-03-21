import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PLATFORMS, COMPARISON_TABLE } from '@/app/data/phishingPlatforms';

export function PD02PlatformsPage() {
  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/proyectos/proj-02"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
          <ArrowLeft className="w-4 h-4" />
            Volver a PD02
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          PD02 · Fase 1 · Comparativa de plataformas de simulación de phishing
        </h1>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">1. Introducción</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            La ingeniería social continúa siendo una de las amenazas más relevantes en ciberseguridad
            porque explota el comportamiento humano como punto de entrada a sistemas y datos organizacionales.
            Dentro de estas amenazas, el phishing destaca por su capacidad de inducir a los usuarios a abrir
            enlaces, descargar archivos, entregar credenciales o realizar acciones que comprometen la seguridad
            de la información.

            En respuesta a este problema, numerosas organizaciones han adoptado plataformas de simulación de
            phishing para evaluar el nivel de exposición al riesgo humano y fortalecer la concientización en
            seguridad mediante campañas controladas y procesos de entrenamiento continuo.

            El propósito de esta fase es realizar una comparación técnica de ocho plataformas de simulación
            de phishing: Hoxhunt, Proofpoint, KnowBe4, Cofense, Phished, NINJIO, Mimecast e Infosec IQ.
            El análisis se centra en sus capacidades de simulación, métricas, nivel de automatización,
            enfoque pedagógico, ventajas y limitaciones.
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">2. Marco teórico</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            La ingeniería social es una técnica de manipulación orientada a inducir a los usuarios a
            realizar acciones que favorezcan a un atacante. Una de sus expresiones más comunes es el
            phishing, que consiste en enviar mensajes o enlaces fraudulentos que aparentan ser legítimos
            para engañar al usuario y obtener información sensible o acceso a sistemas.

            En entornos organizacionales, esta amenaza es especialmente relevante porque compromete el
            factor humano, que sigue siendo una de las superficies de ataque más explotadas.

            Para reducir este riesgo, las organizaciones utilizan plataformas de simulación de phishing.
            Estas herramientas permiten lanzar campañas controladas que imitan ataques reales con fines
            de evaluación y capacitación. Además de medir la reacción de los usuarios, muchas plataformas
            integran procesos de formación como microlearning, retroalimentación inmediata, campañas
            adaptativas, plantillas basadas en ataques reales y mecanismos de reporte.

            Entre las métricas más comunes se encuentran el click rate, el reporting rate y diversos
            esquemas de risk score o evaluación de riesgo humano, empleados para medir la madurez del
            programa y priorizar entrenamiento.
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">3. Fichas técnicas de plataformas</h3>

          <div className="space-y-8">
            {PLATFORMS.map((platform, idx) => (
              <div key={platform.name} className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
                <h4 className="text-md font-bold text-[#d4a574] mb-3">
                  {`3.${idx + 1} ${platform.name}`}
                </h4>

                <div className="space-y-3 text-sm font-mono text-[#d4a574]/80">
                  <p><span className="text-[#cc6633]">Nombre de la plataforma:</span> {platform.name}</p>
                  <p><span className="text-[#cc6633]">Tipo de solución:</span> {platform.type}</p>
                  <p><span className="text-[#cc6633]">Enfoque principal:</span> {platform.focus}</p>
                  <p className="leading-relaxed">
                    <span className="text-[#cc6633]">Descripción técnica:</span> {platform.description}
                  </p>

                  <div>
                    <p className="text-[#cc6633] mb-1">Características técnicas principales:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#cc6633] mb-1">Métricas destacadas:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.metrics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#cc6633] mb-1">Ventajas:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.advantages.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#cc6633] mb-1">Limitaciones:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.limitations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">4. Tabla comparativa de plataformas</h3>

          <div className="overflow-x-auto bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <table className="min-w-full text-sm font-mono text-[#d4a574]/80">
              <thead className="bg-black/30 text-[#d4a574]">
                <tr>
                  <th className="px-4 py-3 text-left">Plataforma</th>
                  <th className="px-4 py-3 text-left">Tipo de simulación</th>
                  <th className="px-4 py-3 text-left">Métricas visibles</th>
                  <th className="px-4 py-3 text-left">Automatización</th>
                  <th className="px-4 py-3 text-left">Enfoque de entrenamiento</th>
                  <th className="px-4 py-3 text-left">Rasgo distintivo</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row) => (
                  <tr key={row[0]} className="border-t border-[#d4a574]/10">
                    {row.map((cell, idx) => (
                      <td key={`${row[0]}-${idx}`} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">5. Análisis comparativo</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            Las ocho plataformas analizadas comparten un núcleo funcional: todas permiten ejecutar
            simulaciones de phishing y vincularlas de alguna forma con acciones de concientización.
            Sin embargo, su diferencia principal está en cómo interpretan el riesgo humano y cómo
            convierten la simulación en aprendizaje.

            Hoxhunt, Phished y NINJIO destacan por una lógica más adaptativa y conductual. Hoxhunt
            enfatiza reporting rate, microentrenamiento y human risk management; Phished se orienta
            a rutas diferenciadas y simulaciones niveladas con IA; y NINJIO combina pruebas dinámicas
            con microlearning audiovisual y un algoritmo de riesgo propio.

            Proofpoint y Cofense muestran un perfil más corporativo y más cercano a la operación real
            del correo empresarial. Proofpoint se apoya mucho en inteligencia de amenazas, simulaciones
            de múltiples vectores y el botón PhishAlarm, mientras que Cofense sobresale por su énfasis
            en el reporte en tiempo real y en el phishing que supera controles perimetrales.

            KnowBe4 conserva una posición muy sólida por la claridad de su enfoque métrico, especialmente
            con el PPP y los comparativos por industria. Mimecast e Infosec IQ ofrecen propuestas equilibradas,
            con integración y flexibilidad respectivamente.

            En términos generales, puede proponerse la siguiente lectura:
            - Más orientadas a human risk y adaptación: Hoxhunt, Phished, NINJIO.
            - Más orientadas a operación empresarial y defensa real del correo: Proofpoint, Cofense, Mimecast.
            - Más orientadas a métricas claras y facilidad de adopción del programa: KnowBe4, Infosec IQ.
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">6. Conclusión</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            Las plataformas de simulación de phishing han evolucionado desde herramientas centradas
            únicamente en enviar correos de prueba hacia soluciones mucho más amplias de gestión del
            riesgo humano. Aunque todas las plataformas analizadas permiten ejecutar campañas simuladas,
            sus diferencias se observan en la profundidad de sus métricas, el nivel de automatización,
            la personalización del entrenamiento y su integración con estrategias organizacionales de seguridad.

            En términos técnicos, no existe una única plataforma “mejor” para todos los contextos.
            La elección dependerá de si la organización prioriza analítica de riesgo humano, integración
            con correo corporativo, benchmarking, flexibilidad pedagógica o entrenamiento adaptativo.

            Como base para un proyecto académico, esta comparación permite identificar que la simulación
            de phishing no debe entenderse como una práctica aislada, sino como parte de un programa
            estructurado de concientización en ciberseguridad, donde medición, retroalimentación, ética
            y mejora continua son elementos inseparables.
          </div>
        </div>
      </div>
    </section>
  );
}
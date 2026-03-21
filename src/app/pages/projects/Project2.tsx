import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '@/app/data/projects';
import { ArrowRight, FolderOpen, ShieldAlert, BarChart3 } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

const Project2 = () => {
  const project = PROJECTS.find((p) => p.id === 'proj-02');
  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {project.title}
        </h1>

        <div className="mb-6">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
          <ArrowLeft className="w-4 h-4" />
            Volver a Proyectos
          </Link>
        </div>

        {/* 1. Introducción general del proyecto */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">1. Presentación del proyecto</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            El proyecto PD02, titulado “El eslabón más débil: diseño ético de una campaña de ingeniería social”,
            tiene como propósito desarrollar una experiencia educativa orientada a la concientización en phishing,
            sustentada en principios éticos, análisis técnico y retroalimentación formativa.

            La propuesta integra dos componentes complementarios. En primer lugar, una investigación comparativa
            sobre plataformas profesionales de simulación de phishing del mercado. En segundo lugar, una simulación
            interactiva tipo Phishing Quiz con escenarios visuales que permitan evaluar el reconocimiento de señales
            de fraude, reforzar el criterio del usuario y registrar resultados mediante un sistema de puntuación.

            De esta manera, el proyecto no solo analiza herramientas existentes, sino que también implementa una
            solución propia con enfoque académico, ético y formativo.
          </div>
        </div>

        {/* 2. Objetivos */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">2. Objetivos del PD02</h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <p className="text-sm font-mono text-[#d4a574]/85 leading-relaxed mb-4">
              <span className="text-[#cc6633] font-bold">Objetivo general:</span>{' '}
              Diseñar e implementar en el portafolio digital un módulo de concientización sobre phishing
              que combine análisis comparativo de plataformas profesionales con una simulación educativa
              interactiva basada en escenarios realistas de ingeniería social.
            </p>

            <div className="text-sm font-mono text-[#d4a574]/85">
              <p className="text-[#cc6633] font-bold mb-2">Objetivos específicos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analizar plataformas del mercado enfocadas en simulación de phishing y awareness training.</li>
                <li>Diseñar un phishing quiz visual con escenarios simulados y retroalimentación educativa.</li>
                <li>Integrar un sistema de evaluación y score global para interpretar resultados.</li>
                <li>Conservar un enfoque ético, sin captura real de credenciales ni engaño operativo a terceros.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Estructura del proyecto */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">3. Estructura del proyecto</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Fase 1 */}
            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-[#cc6633]" />
                <h4 className="text-md font-bold text-[#d4a574]">
                  Fase 1 · Comparativa de plataformas
                </h4>
              </div>

              <p className="text-sm font-mono text-[#d4a574]/80 leading-relaxed mb-4">
                Esta fase documenta el análisis técnico-comparativo de plataformas profesionales
                de simulación de phishing como Hoxhunt, Proofpoint, KnowBe4, Cofense, Phished,
                NINJIO, Mimecast e Infosec IQ. Incluye fichas descriptivas, métricas, ventajas,
                limitaciones y una tabla comparativa general.
              </p>

              <Link
                to="/proyectos/proj-02/fase-1"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
              >
                Ver Fase 1
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Fase 2 */}
            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-5 h-5 text-[#cc6633]" />
                <h4 className="text-md font-bold text-[#d4a574]">
                  Fase 2 · Phishing Quiz
                </h4>
              </div>

              <p className="text-sm font-mono text-[#d4a574]/80 leading-relaxed mb-4">
                Esta fase implementa una simulación interactiva con escenarios visuales de
                ingeniería social. Los casos incluyen correos simulados, avisos con QR y
                páginas de login falsas dentro de un entorno estrictamente educativo, con
                retroalimentación formativa y puntuación por desempeño.
              </p>

              <Link
                to="/proyectos/proj-02/fase-2"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
              >
                Ver Fase 2
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Alcance */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">4. Alcance y enfoque ético</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            El proyecto está diseñado con fines estrictamente académicos y de concientización.
            Por ello, los escenarios implementados no buscan capturar credenciales reales ni
            engañar a usuarios fuera del entorno de prueba. En su lugar, se enfocan en simular
            visualmente ataques plausibles para desarrollar criterio de análisis y reconocimiento
            de señales de fraude.

            El valor del proyecto radica en combinar análisis comparativo, diseño visual,
            interacción y evaluación, de modo que el usuario no solo observe ejemplos de phishing,
            sino que también practique la toma de decisiones en un entorno controlado.
          </div>
        </div>

        {/* 5. Navegación interna */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">5. Navegación del PD02</h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <div className="flex flex-col gap-4">
              <Link
                to="/proyectos/proj-02/fase-1"
                className="flex items-center justify-between gap-4 p-4 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-5 h-5 text-[#cc6633]" />
                  <div>
                    <p className="text-sm font-mono text-[#d4a574]">
                      Acceder a la documentación de la Fase 1
                    </p>
                    <p className="text-xs font-mono text-[#d4a574]/60">
                      Comparativa de plataformas de simulación de phishing
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#cc6633]" />
              </Link>

              <Link
                to="/proyectos/proj-02/fase-2"
                className="flex items-center justify-between gap-4 p-4 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#cc6633]" />
                  <div>
                    <p className="text-sm font-mono text-[#d4a574]">
                      Acceder al índice del Phishing Quiz
                    </p>
                    <p className="text-xs font-mono text-[#d4a574]/60">
                      Escenarios interactivos de ingeniería social
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#cc6633]" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Referencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">6. Referencias</h3>
          <ul className="space-y-2">
            {project.references.map((r, idx) => (
              <li key={idx} className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                <span className="text-[#cc6633]">› </span>
                <span className="text-[#d4a574]">{r.label}:</span> {r.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project2;
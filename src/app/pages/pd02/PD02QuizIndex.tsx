import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldAlert } from 'lucide-react';
import { PHISHING_QUIZ } from '@/app/data/phishingQuiz';

export function PD02QuizIndex() {
  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/proyectos/proj-02"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a PD02
          </Link>
        </div>

        {/* Encabezado */}
        <div className="mb-10 flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-[#cc6633]" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574]">
              PD02 · Fase 2 · Phishing Quiz
            </h1>
            <p className="text-sm font-mono text-[#d4a574]/65 mt-2 leading-relaxed">
              Índice de escenarios interactivos de concientización sobre phishing.
              Cada escenario presenta una simulación visual educativa para analizar señales
              de fraude y fortalecer el criterio del usuario.
            </p>
          </div>
        </div>

        {/* Introducción corta */}
        <div className="mb-10 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">Propósito de esta fase</h3>
          <div className="text-sm font-mono text-[#d4a574]/85 leading-relaxed whitespace-pre-line">
            Esta fase implementa una simulación visual de casos de ingeniería social orientados
            al reconocimiento de phishing. Los escenarios incluyen correos simulados, avisos con QR
            y formularios de inicio de sesión falsos dentro de un entorno estrictamente educativo.

            El objetivo no es capturar información real, sino permitir al usuario observar señales
            sospechosas, comparar contextos y evaluar decisiones de forma segura.
          </div>
        </div>

        <div className="mb-10 border border-yellow-500/40 bg-yellow-500/10 p-4">
          <p className="text-sm font-mono text-yellow-400 leading-relaxed">
            ⚠ Este entorno es una simulación educativa de phishing.
            Ningún dato ingresado será almacenado ni utilizado.
            No introduzcas credenciales reales.
          </p>
        </div>

        {/* Lista de escenarios */}
        <div className="space-y-4">
          {PHISHING_QUIZ.map((scenario) => (
            <Link
              key={scenario.id}
              to={`/proyectos/proj-02/fase-2/escenario/${scenario.id}`}
              className="block p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-mono text-[#d4a574]">
                    {scenario.title}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2 py-1 border border-[#cc6633]/40 text-[#cc6633]">
                      Tipo: {scenario.type}
                    </span>
                    <span className="px-2 py-1 border border-[#d4a574]/30 text-[#d4a574]/80">
                      Dificultad: {scenario.difficulty}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-mono text-[#d4a574]/65 leading-relaxed">
                    {scenario.shortDescription}
                  </p>
                </div>

                <ArrowRight className="w-5 h-5 text-[#cc6633] group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
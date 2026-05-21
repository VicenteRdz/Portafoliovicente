import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  ShieldCheck,
  FileBadge,
} from 'lucide-react';
import { CERTIFICATIONS } from '@/app/data/certifications';

export function CertificationsIndex() {
  const completedCount = CERTIFICATIONS.filter(
    (cert) => cert.difficulty !== 'Pendiente'
  ).length;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a menú principal
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-[#cc6633]" />
            <span className="text-sm font-mono text-[#cc6633] tracking-widest uppercase">
              PD05
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono text-[#d4a574] mb-4">
            Reflexión profesional sobre certificaciones
          </h1>

          <p className="text-sm sm:text-base font-mono text-[#d4a574]/70 leading-relaxed max-w-4xl">
            Esta sección documenta el proceso de formación en ciberseguridad mediante
            certificaciones y cursos especializados. Cada pestaña integra una reseña
            profesional, aprendizajes clave, habilidades desarrolladas y evidencia asociada
            al proceso de certificación.
          </p>
        </div>

        {/* Objetivo */}
        <div className="mb-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-[#cc6633]" />
              <h2 className="text-xl font-mono text-[#d4a574]">
                Objetivo de la sección
              </h2>
            </div>

            <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              El propósito de esta sección es analizar de forma crítica el impacto
              personal, académico y profesional de las certificaciones cursadas,
              integrando evidencia formal y una narrativa profesional que permita
              identificar aprendizajes clave, aplicaciones prácticas y áreas de
              crecimiento dentro del campo de la ciberseguridad.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#cc6633]" />
              <h2 className="text-xl font-mono text-[#d4a574]">
                Avance
              </h2>
            </div>

            <p className="text-3xl font-mono text-[#d4a574] mb-2">
              {completedCount} / {CERTIFICATIONS.length}
            </p>

            <p className="text-sm font-mono text-[#d4a574]/60">
              certificaciones documentadas
            </p>
          </div>
        </div>

        {/* Aviso académico */}
        <div className="mb-10 border border-[#cc6633]/30 bg-[#cc6633]/10 p-5">
          <p className="text-sm font-mono text-[#d4a574]/80 leading-relaxed">
            Esta sección forma parte del proyecto PD05 y está orientada a presentar
            las certificaciones como evidencia de aprendizaje, reflexión profesional
            y desarrollo progresivo de competencias en ciberseguridad.
          </p>
        </div>

        {/* Lista de certificaciones */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileBadge className="w-5 h-5 text-[#cc6633]" />
            <h2 className="text-xl font-mono text-[#d4a574]">
              Certificaciones documentadas
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert) => {
            const isPending = cert.difficulty === 'Pendiente';

            return (
              <Link
                key={cert.id}
                to={`/certificaciones/${cert.id}`}
                className={`group block p-5 bg-[#1a1a1a]/40 border transition-all duration-300 ${
                  isPending
                    ? 'border-yellow-500/30 hover:border-yellow-500/60'
                    : 'border-[#d4a574]/20 hover:border-[#cc6633]/60'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Award
                        className={`w-5 h-5 shrink-0 ${
                          isPending ? 'text-yellow-400' : 'text-[#cc6633]'
                        }`}
                      />
                      <h3 className="text-base sm:text-lg font-mono text-[#d4a574]">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-xs font-mono text-[#cc6633] mb-3">
                      {cert.platform}
                    </p>

                    <p className="text-sm font-mono text-[#d4a574]/65 leading-relaxed mb-4">
                      {cert.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span
                        className={`px-2 py-1 border ${
                          isPending
                            ? 'border-yellow-500/40 text-yellow-400'
                            : 'border-[#cc6633]/40 text-[#cc6633]'
                        }`}
                      >
                        Estado: {isPending ? 'Pendiente' : 'Documentada'}
                      </span>

                      <span className="px-2 py-1 border border-[#d4a574]/20 text-[#d4a574]/70">
                        Nivel: {cert.difficulty}
                      </span>

                      <span className="px-2 py-1 border border-[#d4a574]/20 text-[#d4a574]/70">
                        Skills: {cert.skills.length}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-[#cc6633] group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
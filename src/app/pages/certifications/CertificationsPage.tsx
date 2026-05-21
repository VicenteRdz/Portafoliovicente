import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { CERTIFICATIONS } from '@/app/data/certifications';

export function CertificationsPage() {
  const { id } = useParams();

  const certification = CERTIFICATIONS.find((cert) => cert.id === id);

  if (!certification) {
    return (
      <section className="pt-28 pb-16 bg-black/95 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/certificaciones"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a certificaciones
          </Link>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <h1 className="text-2xl font-mono text-[#d4a574] mb-3">
              Certificación no encontrada
            </h1>
            <p className="text-sm font-mono text-[#d4a574]/70">
              No existe una certificación registrada con el identificador solicitado.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const isPending = certification.difficulty === 'Pendiente';
  const hasEvidence =
    Boolean(certification.certificate) ||
    Boolean(certification.badge) ||
    Boolean(certification.badgeVerifyUrl);

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/certificaciones"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a certificaciones
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#cc6633]/70" />

          <div className="flex items-start gap-4">
            <div
              className={`p-3 border ${
                isPending
                  ? 'border-yellow-500/40 bg-yellow-500/10'
                  : 'border-[#cc6633]/40 bg-[#cc6633]/10'
              }`}
            >
              <Award
                className={`w-7 h-7 ${
                  isPending ? 'text-yellow-400' : 'text-[#cc6633]'
                }`}
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-mono text-[#cc6633] uppercase tracking-widest mb-2">
                Certificación · PD05
              </p>

              <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-3">
                {certification.title}
              </h1>

              <p className="text-sm font-mono text-[#d4a574]/70 mb-4">
                {certification.platform}
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
                  Nivel: {certification.difficulty}
                </span>

                <span className="px-2 py-1 border border-[#d4a574]/20 text-[#d4a574]/70">
                  Skills: {certification.skills.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-8 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-[#cc6633]" />
            <h2 className="text-xl font-mono text-[#d4a574]">
              Descripción general
            </h2>
          </div>

          <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
            {certification.shortDescription}
          </p>
        </div>

        {/* Reseña */}
        <div className="mb-8 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#cc6633]" />
            <h2 className="text-xl font-mono text-[#d4a574]">
              Reseña profesional
            </h2>
          </div>

          <div className="text-sm font-mono text-[#d4a574]/80 leading-relaxed whitespace-pre-line">
            {certification.reflection}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#cc6633]" />
            <h2 className="text-xl font-mono text-[#d4a574]">
              Habilidades desarrolladas
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-mono border border-[#cc6633]/30 text-[#cc6633] bg-[#cc6633]/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Evidencia */}
        <div className="mb-10 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ExternalLink className="w-5 h-5 text-[#cc6633]" />
            <h2 className="text-xl font-mono text-[#d4a574]">
              Evidencia de certificación
            </h2>
          </div>

          {hasEvidence ? (
            <div className="flex flex-col gap-6">
              {/* Badge visual */}
              {certification.badge && (
                <div className="flex flex-col items-start gap-4">
                  <img
                    src={certification.badge}
                    alt={`Badge de ${certification.title}`}
                    className="w-40 border border-[#d4a574]/20 bg-black/30 p-2"
                  />

                  {certification.badgeVerifyUrl && (
                    <a
                      href={certification.badgeVerifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a1a1a]/60 border border-[#d4a574]/20 text-[#d4a574] font-mono hover:border-[#cc6633] hover:text-[#cc6633] transition-all w-fit"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver badge verificable
                    </a>
                  )}
                </div>
              )}

              {/* Link de verificación si no hay imagen de badge */}
              {!certification.badge && certification.badgeVerifyUrl && (
                <a
                  href={certification.badgeVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a1a1a]/60 border border-[#d4a574]/20 text-[#d4a574] font-mono hover:border-[#cc6633] hover:text-[#cc6633] transition-all w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver badge verificable
                </a>
              )}

              {/* PDF */}
              {certification.certificate && (
                <a
                  href={certification.certificate}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  Descargar certificado PDF
                </a>
              )}
            </div>
          ) : (
            <p className="text-sm font-mono text-[#d4a574]/65 leading-relaxed">
              La evidencia visual o enlace de verificación se integrará posteriormente
              cuando el certificado o badge esté disponible para su carga en el portafolio.
            </p>
          )}
        </div>

        {/* Navegación inferior */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/certificaciones"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice
          </Link>
        </div>
      </div>
    </section>
  );
}
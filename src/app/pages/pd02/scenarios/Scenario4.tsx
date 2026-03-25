import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Paperclip } from 'lucide-react';
import { PHISHING_QUIZ } from '@/app/data/phishingQuiz';
import SimulatedEmailCard from '@/app/components/phishing/SimulatedEmailCard';
import FeedbackCard from '@/app/components/phishing/FeedbackCard';
import { saveAnswer } from '@/app/utils/quizStorage';

type ResultStatus = 'correct' | 'partial' | 'incorrect';

type ScenarioResult = {
  status: ResultStatus;
  statusLabel: string;
  total: number;
  message: string;
};

const Scenario4 = () => {
  const scenario = PHISHING_QUIZ.find((s) => s.id === 'scn-04');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [justification, setJustification] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!scenario) return <div>Escenario no encontrado</div>;

  const indicators = [
    'Archivo adjunto inesperado',
    'Formato comprimido (.zip)',
    'Urgencia para abrir archivo',
    'Amenaza de afectación del servicio',
    'Dominio sospechoso',
  ];

  const result = useMemo<ScenarioResult | null>(() => {
    if (!hasSubmitted) return null;

    const justificationBonus = justification.trim().length > 0 ? 2 : 0;

    if (selectedAnswer === 'A') {
      return {
        status: 'correct',
        statusLabel: 'Correcta',
        total: 10 + justificationBonus,
        message:
          'Identificaste correctamente que el correo corresponde a un caso de phishing con adjunto sospechoso.',
      };
    }

    if (selectedAnswer === 'C') {
      return {
        status: 'partial',
        statusLabel: 'Parcial',
        total: 5 + justificationBonus,
        message:
          'Tu respuesta refleja cautela y reconocimiento de señales sospechosas, aunque no clasificaste el caso de forma completamente directa.',
      };
    }

    return {
      status: 'incorrect',
      statusLabel: 'Incorrecta',
      total: justificationBonus,
      message:
        'Este correo no debe considerarse legítimo. El uso de adjuntos inesperados y archivos comprimidos es una técnica común en campañas de phishing y malware.',
    };
  }, [hasSubmitted, justification, selectedAnswer]);

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setFormError('Selecciona una opción antes de enviar tu respuesta.');
      return;
    }

    setFormError('');
    setHasSubmitted(true);
  };

  useEffect(() => {
    if (hasSubmitted && result) {
      saveAnswer('scn-04', {
        answer: selectedAnswer,
        score: result.total,
      });
    }
  }, [hasSubmitted, result, selectedAnswer]);

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/proyectos/proj-02/fase-2"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633]"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice del quiz
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-4">
            Archivo adjunto urgente de proveedor
          </h1>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5 space-y-2">
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Tipo de vector:</span> Correo phishing
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Categoría:</span> Adjuntos maliciosos
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Dificultad:</span> Intermedio
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Contexto</h3>
          <div className="text-[#d4a574]/85 font-mono bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            Recibes un correo aparentemente enviado por un proveedor con el que trabajas.
            Indica que hay un problema con una factura y te pide revisar un archivo adjunto urgentemente.
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">Escenario visual</h3>

          <div className="space-y-4">
            <SimulatedEmailCard
              from="Proveedor Servicios S.A. <facturacion@proveedor-servicios-secure.com>"
              subject="Factura pendiente - Acción requerida"
              body={`Estimado cliente,

Hemos detectado un error en la última factura emitida. Es necesario que revise el documento adjunto para validar la información.

Por favor confirme los datos a la brevedad posible.

Si no se recibe confirmación, su servicio podría verse afectado.

Atentamente,
Departamento de Facturación`}
              showIndicators={hasSubmitted}
              indicators={indicators}
            />

            <div className="bg-[#1a1a1a]/40 border border-[#cc6633]/30 p-4 flex items-center gap-3">
              <Paperclip className="w-5 h-5 text-[#cc6633]" />
              <div className="font-mono text-sm text-[#d4a574]">
                Factura_Actualizada.zip
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">Respuesta</h3>

          <form
            className="space-y-4 font-mono text-[#d4a574]"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label className="block">
              <input
                type="radio"
                name="q4"
                value="A"
                checked={selectedAnswer === 'A'}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                disabled={hasSubmitted}
              />{' '}
              Es phishing
            </label>

            <label className="block">
              <input
                type="radio"
                name="q4"
                value="B"
                checked={selectedAnswer === 'B'}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                disabled={hasSubmitted}
              />{' '}
              Es legítimo
            </label>

            <label className="block">
              <input
                type="radio"
                name="q4"
                value="C"
                checked={selectedAnswer === 'C'}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                disabled={hasSubmitted}
              />{' '}
              Sospechoso
            </label>

            <textarea
              className="w-full bg-black/30 border border-[#d4a574]/20 p-3 disabled:opacity-70"
              placeholder="Justificación..."
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              disabled={hasSubmitted}
            />

            {formError && (
              <div className="border border-[#cc6633]/40 bg-[#cc6633]/10 p-3">
                <p className="text-sm font-mono text-[#cc6633]">{formError}</p>
              </div>
            )}

            {!hasSubmitted ? (
              <button
                type="submit"
                className="px-4 py-2 border border-[#cc6633] text-[#cc6633]"
              >
                Enviar
              </button>
            ) : (
              <div className="border border-[#d4a574]/20 bg-black/20 p-3">
                <p className="text-sm font-mono text-[#d4a574]/80">
                  Respuesta enviada correctamente.
                </p>
              </div>
            )}
          </form>
        </div>

        {hasSubmitted && result && (
          <FeedbackCard
            status={result.status}
            statusLabel={result.statusLabel}
            message={result.message}
            indicators={indicators}
            score={result.total}
            correctAnswerLabel="Es phishing"
          />
        )}
      </div>
      <br />
      <div className="mb-6">
        <Link
          to="/proyectos/proj-02/fase-2"
          className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al índice del quiz
        </Link>
      </div>
    </section>
  );
};

export default Scenario4;
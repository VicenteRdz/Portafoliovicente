import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PHISHING_QUIZ } from '@/app/data/phishingQuiz';
import SimulatedEmailCard from '@/app/components/phishing/SimulatedEmailCard';
import FeedbackCard from '@/app/components/phishing/FeedbackCard';

type ResultStatus = 'correct' | 'partial' | 'incorrect';

type ScenarioResult = {
  status: ResultStatus;
  statusLabel: string;
  total: number;
  message: string;
};

const Scenario1 = () => {
  const scenario = PHISHING_QUIZ.find((s) => s.id === 'scn-01');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [justification, setJustification] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!scenario) return <div>Escenario no encontrado</div>;

  const indicators = [
    'Urgencia artificial',
    'Amenaza de suspensión de cuenta',
    'Dominio sospechoso del remitente',
    'Saludo genérico',
    'Solicitud de acción inmediata por enlace',
  ];

  const result = useMemo<ScenarioResult | null>(() => {
    if (!hasSubmitted) return null;

    const justificationBonus = justification.trim().length > 0 ? 2 : 0;

    if (selectedAnswer === 'A') {
      return {
        status: 'correct',
        statusLabel: 'Correcta',
        baseScore: 10,
        bonus: justificationBonus,
        total: 10 + justificationBonus,
        message:
          'Identificaste correctamente que el mensaje corresponde a un caso de phishing.',
      };
    }

    if (selectedAnswer === 'C') {
      return {
        status: 'partial',
        statusLabel: 'Parcial',
        baseScore: 5,
        bonus: justificationBonus,
        total: 5 + justificationBonus,
        message:
          'Tu respuesta refleja cautela y reconocimiento de señales sospechosas, aunque no clasificaste el caso de forma completamente directa.',
      };
    }

    return {
      status: 'incorrect',
      statusLabel: 'Incorrecta',
      baseScore: 0,
      bonus: justificationBonus,
      total: justificationBonus,
      message:
        'Este correo no debe considerarse legítimo. Presenta múltiples señales típicas de phishing.',
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

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/proyectos/proj-02/fase-2"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice del quiz
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-4">
            {scenario.title}
          </h1>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5 space-y-2">
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Título:</span> Aviso urgente de verificación bancaria
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Tipo de vector:</span> Correo phishing
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Categoría:</span> Suplantación de identidad financiera
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Dificultad:</span> Básico
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Contexto</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            Recibes un correo aparentemente enviado por tu banco. El mensaje indica que tu cuenta
            será suspendida si no verificas tu información de inmediato.
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">Escenario visual</h3>

          <SimulatedEmailCard
            from="Banco Unión Digital <seguridad@bancounion-verifica.com>"
            subject="Verificación urgente de cuenta requerida"
            body={`Estimado cliente:

Detectamos actividad inusual en su cuenta. Por motivos de seguridad, su acceso será suspendido en las próximas 24 horas si no confirma inmediatamente su información.

Para evitar el bloqueo de su cuenta, verifique sus datos en el siguiente enlace.

Si no realiza esta acción, su banca en línea será desactivada temporalmente.

Atentamente,
Departamento de Seguridad
Banco Unión Digital`}
            linkText="Verificar ahora"
            linkUrl="http://bancounion-verifica.com/seguridad/verificacion"
            showIndicators={hasSubmitted}
            indicators={indicators}
          />
        </div>

        <div className="mb-10 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">Respuesta del usuario</h3>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <fieldset className="space-y-3">
              <legend className="text-sm font-mono text-[#d4a574] mb-3">
                ¿Qué tan confiable es este correo?
              </legend>

              <label className="flex items-start gap-3 text-sm font-mono text-[#d4a574]/80">
                <input
                  type="radio"
                  name="question-1-answer"
                  value="A"
                  className="mt-1"
                  checked={selectedAnswer === 'A'}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  disabled={hasSubmitted}
                />
                <span>Es phishing</span>
              </label>

              <label className="flex items-start gap-3 text-sm font-mono text-[#d4a574]/80">
                <input
                  type="radio"
                  name="question-1-answer"
                  value="B"
                  className="mt-1"
                  checked={selectedAnswer === 'B'}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  disabled={hasSubmitted}
                />
                <span>Es legítimo</span>
              </label>

              <label className="flex items-start gap-3 text-sm font-mono text-[#d4a574]/80">
                <input
                  type="radio"
                  name="question-1-answer"
                  value="C"
                  className="mt-1"
                  checked={selectedAnswer === 'C'}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  disabled={hasSubmitted}
                />
                <span>No estoy seguro(a), pero presenta señales sospechosas</span>
              </label>
            </fieldset>

            <div>
              <label
                htmlFor="question-1-justification"
                className="block text-sm font-mono text-[#d4a574] mb-2"
              >
                Justificación breve (opcional)
              </label>
              <textarea
                id="question-1-justification"
                name="question-1-justification"
                rows={4}
                placeholder="Explica por qué elegiste esa respuesta"
                value={justification}
                onChange={(e) => setJustification(e.target.value)}
                disabled={hasSubmitted}
                className="w-full bg-black/30 border border-[#d4a574]/20 text-[#d4a574] font-mono text-sm p-3 rounded-none outline-none disabled:opacity-70"
              />
            </div>

            {formError && (
              <div className="border border-[#cc6633]/40 bg-[#cc6633]/10 p-3">
                <p className="text-sm font-mono text-[#cc6633]">{formError}</p>
              </div>
            )}

            {!hasSubmitted ? (
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
              >
                Enviar respuesta
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

export default Scenario1;
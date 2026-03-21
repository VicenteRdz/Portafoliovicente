import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PHISHING_QUIZ } from '@/app/data/phishingQuiz';
import FakeLoginPage from '@/app/components/phishing/FakeLoginPage';
import FeedbackCard from '@/app/components/phishing/FeedbackCard';

type ResultStatus = 'correct' | 'partial' | 'incorrect';

type ScenarioResult = {
  status: ResultStatus;
  statusLabel: string;
  total: number;
  message: string;
};
const Scenario7 = () => {
  const scenario = PHISHING_QUIZ.find((s) => s.id === 'scn-07');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [justification, setJustification] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!scenario) return <div>Escenario no encontrado</div>;

  const indicators = [
    'Dominio diferente al oficial',
    'Uso de palabras adicionales en la URL',
    'Acceso mediante enlace externo',
    'Solicitud directa de credenciales',
    'Apariencia legítima para generar confianza',
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
          'Identificaste correctamente que el sitio corresponde a un caso de phishing web.',
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
        'La página no debe considerarse legítima. Aunque visualmente parece auténtica, la URL y el contexto muestran señales claras de fraude.',
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
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633]"
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
              <span className="text-[#cc6633]">Tipo de vector:</span> Phishing web
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Categoría:</span> URL engañosa / sitio falso
            </p>
            <p className="text-sm font-mono text-[#d4a574]/80">
              <span className="text-[#cc6633]">Dificultad:</span> Avanzado
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Contexto</h3>
          <div className="text-[#d4a574]/85 font-mono bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            Intentas ingresar a tu banca en línea desde un enlace que encontraste en un correo.
            La página se ve igual al sitio oficial de tu banco, pero la URL tiene ligeras diferencias.
          </div>
        </div>

        <div className="mb-6 bg-[#1a1a1a]/40 border border-[#cc6633]/30 p-4 font-mono text-sm text-[#cc6633]">
          https://banco-union-seguro.com/login
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">Sitio web</h3>

          <FakeLoginPage
            brandName="Banco Unión"
            brandSubtitle="Acceso a banca en línea"
            url="https://banco-union-seguro.com/login"
            usernameLabel="Usuario"
            passwordLabel="Contraseña"
            usernamePlaceholder="Ingresa tu usuario"
            passwordPlaceholder="Ingresa tu contraseña"
            buttonText="Iniciar sesión"
            logoText="BU"
            themeColor="#1d4ed8"
            showIndicators={hasSubmitted}
            indicators={indicators}
          />
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
                name="q7"
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
                name="q7"
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
                name="q7"
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

export default Scenario7;
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  User,
  Save,
  RotateCcw,
} from 'lucide-react';
import { PHISHING_QUIZ } from '@/app/data/phishingQuiz';
import {
  getResults,
  getUserAlias,
  saveUserAlias,
  clearResults,
  type QuizResultsMap,
} from '@/app/utils/quizStorage';

export function PD02QuizIndex() {
  const [alias, setAlias] = useState(getUserAlias());
  const [aliasInput, setAliasInput] = useState(getUserAlias());
  const [aliasMessage, setAliasMessage] = useState('');

  const results: QuizResultsMap = useMemo(() => getResults(), [aliasMessage]);
  const completed = Object.keys(results).length;
  const isComplete = completed === PHISHING_QUIZ.length;

  const totalScore = Object.values(results).reduce((acc, item) => acc + (item.score || 0), 0);
  const maxPossibleScore = PHISHING_QUIZ.length * 12;
  const progressPercent = Math.round((completed / PHISHING_QUIZ.length) * 100);

  const handleSaveAlias = () => {
    const trimmed = aliasInput.trim();

    if (!trimmed) {
      setAliasMessage('Ingresa un alias válido antes de guardar.');
      return;
    }

    // mismo alias: no reiniciar
    if (trimmed === alias) {
      setAliasMessage('Ese alias ya está activo.');
      return;
    }

    // alias nuevo con progreso existente
    if (completed > 0) {
      const confirmChange = window.confirm(
        'Cambiar el alias iniciará un nuevo intento y borrará el progreso actual del quiz. El ranking local se conservará. ¿Deseas continuar?'
      );

      if (!confirmChange) {
        setAliasMessage('Cambio de alias cancelado.');
        return;
      }

      clearResults();
    }

    saveUserAlias(trimmed);
    setAlias(trimmed);
    setAliasInput(trimmed);
    setAliasMessage(
      completed > 0
        ? 'Alias actualizado. Se inició un nuevo intento.'
        : 'Alias guardado correctamente.'
    );
  };

  const handleResetAttempt = () => {
    if (completed === 0) {
      setAliasMessage('No hay progreso actual para reiniciar.');
      return;
    }

    const confirmReset = window.confirm(
      'Se borrará el progreso actual del quiz, pero el alias y el ranking local se conservarán. ¿Deseas continuar?'
    );

    if (!confirmReset) return;

    clearResults();
    setAliasMessage('El intento actual fue reiniciado correctamente.');
  };

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
        <div className="mb-10 flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-[#cc6633] mt-1" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574]">
              PD02 · Fase 2 · Phishing Quiz
            </h1>
            <p className="text-sm font-mono text-[#d4a574]/65 mt-2 leading-relaxed max-w-3xl">
              Índice de escenarios interactivos de concientización sobre phishing.
              Cada escenario presenta una simulación visual educativa para analizar señales
              de fraude, fortalecer el criterio del usuario y generar retroalimentación formativa.
            </p>
          </div>
        </div>

        {/* Introducción */}
        <div className="mb-8 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">Propósito de esta fase</h3>
          <div className="text-sm font-mono text-[#d4a574]/85 leading-relaxed whitespace-pre-line">
            Esta fase implementa una simulación visual de casos de ingeniería social orientados
            al reconocimiento de phishing. Los escenarios incluyen correos simulados, avisos con QR
            y formularios de inicio de sesión falsos dentro de un entorno estrictamente educativo.

            El objetivo no es capturar información real, sino permitir al usuario observar señales
            sospechosas, comparar contextos y evaluar decisiones de forma segura.
          </div>
        </div>

        {/* Aviso ético */}
        <div className="mb-8 border border-yellow-500/40 bg-yellow-500/10 p-4">
          <p className="text-sm font-mono text-yellow-400 leading-relaxed">
            ⚠ Este entorno es una simulación educativa de phishing. Ningún dato ingresado será
            almacenado ni utilizado. No introduzcas credenciales reales.
          </p>
        </div>

        {/* Alias del participante */}
        <div className="mb-8 p-6 bg-[#1a1a1a]/40 border border-[#d4a574]/20">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-[#cc6633]" />
            <h3 className="text-lg font-mono text-[#d4a574]">Registro del participante</h3>
          </div>

          <p className="text-sm font-mono text-[#d4a574]/70 mb-4 leading-relaxed">
            Define un alias para identificar tu intento dentro del scoreboard local y del resumen
            de resultados. Si cambias de alias, se iniciará un nuevo intento y el progreso actual
            del quiz será borrado. El ranking local se conservará.
          </p>

          <div className="grid md:grid-cols-[1fr_auto_auto] gap-3 items-start">
            <input
              type="text"
              value={aliasInput}
              onChange={(e) => setAliasInput(e.target.value)}
              placeholder="Ejemplo: GearToTheEnd"
              className="w-full bg-black/30 border border-[#d4a574]/20 text-[#d4a574] font-mono text-sm px-4 py-3 outline-none focus:border-[#cc6633]"
            />

            <button
              type="button"
              onClick={handleSaveAlias}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
            >
              <Save className="w-4 h-4" />
              Guardar alias
            </button>

            <button
              type="button"
              onClick={handleResetAttempt}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black/30 border border-[#d4a574]/20 text-[#d4a574] font-mono hover:border-[#cc6633]/40 hover:text-[#cc6633] transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar intento
            </button>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-mono text-[#d4a574]/75">
              Alias actual:{' '}
              <span className="text-[#cc6633]">{alias || 'No definido'}</span>
            </p>

            {aliasMessage && (
              <p className="text-sm font-mono text-[#cc6633]">{aliasMessage}</p>
            )}
          </div>
        </div>

        {/* Resumen del quiz */}
        <div className="mb-10 p-6 bg-[#1a1a1a]/40 border border-[#d4a574]/20">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-5 h-5 text-[#cc6633]" />
            <h3 className="text-lg font-mono text-[#d4a574]">Resumen del avance</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            <div className="border border-[#d4a574]/20 bg-black/20 p-4">
              <p className="text-xs font-mono text-[#cc6633] mb-1">Escenarios completados</p>
              <p className="text-2xl font-mono text-[#d4a574]">
                {completed} / {PHISHING_QUIZ.length}
              </p>
            </div>

            <div className="border border-[#d4a574]/20 bg-black/20 p-4">
              <p className="text-xs font-mono text-[#cc6633] mb-1">Progreso</p>
              <p className="text-2xl font-mono text-[#d4a574]">{progressPercent}%</p>
            </div>

            <div className="border border-[#d4a574]/20 bg-black/20 p-4">
              <p className="text-xs font-mono text-[#cc6633] mb-1">Puntaje acumulado</p>
              <p className="text-2xl font-mono text-[#d4a574]">
                {totalScore} / {maxPossibleScore}
              </p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#cc6633]">Avance del quiz</span>
              <span className="text-xs font-mono text-[#d4a574]/70">{progressPercent}%</span>
            </div>
            <div className="w-full h-3 bg-black/40 border border-[#d4a574]/20 overflow-hidden">
              <div
                className="h-full bg-[#cc6633] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <p className="text-sm font-mono text-[#d4a574]/60 mb-5 leading-relaxed">
            Consulta tu avance acumulado, puntaje obtenido y nivel estimado de riesgo a partir
            de las respuestas registradas en los escenarios completados.
          </p>

          <Link
            to="/proyectos/proj-02/resultados"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <BarChart3 className="w-4 h-4" />
            {isComplete ? 'Ver resultados finales' : 'Ver avance actual'}
          </Link>
        </div>

        {/* Lista de escenarios */}
        <div className="space-y-4">
          {PHISHING_QUIZ.map((scenario) => {
            const saved = results[scenario.id];
            const completedScenario = Boolean(saved);

            return (
              <Link
                key={scenario.id}
                to={`/proyectos/proj-02/fase-2/escenario/${scenario.id}`}
                className="block p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {completedScenario && (
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      )}
                      <div className="text-sm sm:text-base font-mono text-[#d4a574]">
                        {scenario.title}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2 py-1 border border-[#cc6633]/40 text-[#cc6633]">
                        Tipo: {scenario.type}
                      </span>
                      <span className="px-2 py-1 border border-[#d4a574]/30 text-[#d4a574]/80">
                        Dificultad: {scenario.difficulty}
                      </span>
                      <span
                        className={`px-2 py-1 border ${
                          completedScenario
                            ? 'border-green-500/30 text-green-400'
                            : 'border-[#d4a574]/20 text-[#d4a574]/60'
                        }`}
                      >
                        {completedScenario ? 'Completado' : 'Pendiente'}
                      </span>
                      {completedScenario && (
                        <span className="px-2 py-1 border border-[#d4a574]/20 text-[#d4a574]/70">
                          Puntaje: {saved.score}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm font-mono text-[#d4a574]/65 leading-relaxed">
                      {scenario.shortDescription}
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-[#cc6633] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  ShieldAlert,
  RotateCcw,
  CheckCircle2,
  User,
  BarChart3,
  TrendingUp,
  TrendingDown,
  ListOrdered,
} from 'lucide-react';
import { PHISHING_QUIZ } from '@/app/data/phishingQuiz';
import {
  getResults,
  clearResults,
  getUserAlias,
  clearUserAlias,
  saveQuizSession,
  getQuizRanking,
  type QuizResultsMap,
} from '@/app/utils/quizStorage';

export function PD02ResultsPage() {
  const results: QuizResultsMap = getResults();
  const alias = getUserAlias();
  const ranking = getQuizRanking();

  const detailedResults = PHISHING_QUIZ.map((scenario) => {
    const saved = results[scenario.id];

    return {
      ...scenario,
      completed: Boolean(saved),
      score: saved?.score ?? 0,
      answer: saved?.answer ?? '',
    };
  });

  const summary = useMemo(() => {
    const completedItems = detailedResults.filter((item) => item.completed);
    const completedCount = completedItems.length;

    const totalScore = completedItems.reduce((acc, item) => acc + item.score, 0);
    const maxPossibleScore = PHISHING_QUIZ.length * 12;
    const percentage =
      maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

    const averagePerCompleted =
      completedCount > 0 ? Number((totalScore / completedCount).toFixed(2)) : 0;

    const worstScenario =
      completedItems.length > 0
        ? [...completedItems].sort((a, b) => a.score - b.score)[0]
        : null;

    const bestScenario =
      completedItems.length > 0
        ? [...completedItems].sort((a, b) => b.score - a.score)[0]
        : null;

    let riskLevel = '';
    let riskMessage = '';
    let riskColor = '';

    if (percentage < 40) {
      riskLevel = 'Alto riesgo';
      riskMessage =
        'El resultado sugiere alta exposición a técnicas de phishing. Se recomienda reforzar criterios de validación, verificación de remitentes y revisión de enlaces.';
      riskColor = 'text-red-400';
    } else if (percentage < 75) {
      riskLevel = 'Riesgo medio';
      riskMessage =
        'El resultado muestra criterio parcial. Identificas varias señales, pero aún hay escenarios ambiguos donde conviene fortalecer la verificación antes de confiar.';
      riskColor = 'text-yellow-400';
    } else {
      riskLevel = 'Buen criterio';
      riskMessage =
        'El resultado indica buen nivel de análisis frente a escenarios de phishing y mensajes ambiguos. Mantienes una postura crítica y reconoces señales relevantes.';
      riskColor = 'text-green-400';
    }

    return {
      completedCount,
      totalScore,
      maxPossibleScore,
      percentage,
      averagePerCompleted,
      worstScenario,
      bestScenario,
      riskLevel,
      riskMessage,
      riskColor,
    };
  }, [detailedResults]);

  useEffect(() => {
    if (!alias || summary.completedCount === 0) return;

    const currentSession = {
      alias,
      totalScore: summary.totalScore,
      percentage: summary.percentage,
      completedCount: summary.completedCount,
      timestamp: new Date().toISOString(),
    };

    const alreadySaved = ranking.some(
      (item) =>
        item.alias === currentSession.alias &&
        item.totalScore === currentSession.totalScore &&
        item.percentage === currentSession.percentage &&
        item.completedCount === currentSession.completedCount
    );

    if (!alreadySaved) {
      saveQuizSession(currentSession);
    }
  }, [alias, summary.completedCount, summary.totalScore, summary.percentage, ranking]);

  const handleReset = () => {
    clearResults();
    clearUserAlias();
    window.location.reload();
  };

  const refreshedRanking = getQuizRanking();

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/proyectos/proj-02/fase-2"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice del quiz
          </Link>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-[#cc6633]" />
            <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574]">
              PD02 · Resultados del Phishing Quiz
            </h1>
          </div>

          <p className="text-sm font-mono text-[#d4a574]/70 leading-relaxed max-w-3xl">
            Esta sección resume el desempeño general del usuario en los escenarios de
            concientización sobre phishing, mostrando avance, puntaje acumulado,
            análisis básico y nivel de riesgo estimado.
          </p>
        </div>

        {/* alias */}
        <div className="mb-8 p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[#cc6633]" />
            <div>
              <p className="text-xs font-mono text-[#cc6633] mb-1">Participante</p>
              <p className="text-lg font-mono text-[#d4a574]">
                {alias || 'Sin alias registrado'}
              </p>
            </div>
          </div>
        </div>

        {/* métricas principales */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <p className="text-sm font-mono text-[#cc6633] mb-2">Escenarios completados</p>
            <p className="text-3xl font-mono text-[#d4a574]">
              {summary.completedCount} / {PHISHING_QUIZ.length}
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <p className="text-sm font-mono text-[#cc6633] mb-2">Puntaje total</p>
            <p className="text-3xl font-mono text-[#d4a574]">
              {summary.totalScore} / {summary.maxPossibleScore}
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <p className="text-sm font-mono text-[#cc6633] mb-2">Rendimiento general</p>
            <p className="text-3xl font-mono text-[#d4a574]">{summary.percentage}%</p>
          </div>
        </div>

        {/* nivel de riesgo */}
        <div className="mb-10 p-6 bg-[#1a1a1a]/40 border border-[#d4a574]/20">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-7 h-7 text-[#cc6633] flex-shrink-0 mt-1" />
            <div>
              <h2 className={`text-xl font-mono mb-3 ${summary.riskColor}`}>
                Nivel estimado: {summary.riskLevel}
              </h2>
              <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                {summary.riskMessage}
              </p>
            </div>
          </div>
        </div>

        {/* análisis básico */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-[#cc6633]" />
              <p className="text-sm font-mono text-[#cc6633]">Promedio por escenario respondido</p>
            </div>
            <p className="text-2xl font-mono text-[#d4a574]">{summary.averagePerCompleted}</p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-4 h-4 text-[#cc6633]" />
              <p className="text-sm font-mono text-[#cc6633]">Escenario más fallado</p>
            </div>
            <p className="text-sm font-mono text-[#d4a574]">
              {summary.worstScenario ? summary.worstScenario.title : 'Sin datos'}
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#cc6633]" />
              <p className="text-sm font-mono text-[#cc6633]">Mejor escenario</p>
            </div>
            <p className="text-sm font-mono text-[#d4a574]">
              {summary.bestScenario ? summary.bestScenario.title : 'Sin datos'}
            </p>
          </div>
        </div>

        {/* progreso */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono text-[#cc6633]">Progreso del quiz</span>
            <span className="text-sm font-mono text-[#d4a574]/70">
              {summary.completedCount} de {PHISHING_QUIZ.length}
            </span>
          </div>
          <div className="w-full h-3 bg-[#1a1a1a] border border-[#d4a574]/20 overflow-hidden">
            <div
              className="h-full bg-[#cc6633] transition-all duration-500"
              style={{
                width: `${(summary.completedCount / PHISHING_QUIZ.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {summary.completedCount === 0 && (
          <div className="mb-10 p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <p className="text-sm font-mono text-[#d4a574]/70 leading-relaxed">
              Aún no hay resultados registrados. Completa al menos un escenario del quiz
              para generar un resumen de desempeño.
            </p>
          </div>
        )}

        {/* detalle por escenario */}
        <div className="mb-10">
          <h2 className="text-xl font-mono text-[#d4a574] mb-4">
            Detalle por escenario
          </h2>

          <div className="space-y-4">
            {detailedResults.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {item.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      ) : (
                        <div className="w-4 h-4 border border-[#d4a574]/30" />
                      )}

                      <p className="text-sm sm:text-base font-mono text-[#d4a574]">
                        {item.title}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2 py-1 border border-[#cc6633]/30 text-[#cc6633]">
                        Tipo: {item.type}
                      </span>
                      <span className="px-2 py-1 border border-[#d4a574]/20 text-[#d4a574]/70">
                        Dificultad: {item.difficulty}
                      </span>
                      <span className="px-2 py-1 border border-[#d4a574]/20 text-[#d4a574]/70">
                        Estado: {item.completed ? 'Completado' : 'Pendiente'}
                      </span>
                    </div>
                  </div>

                  <div className="text-left lg:text-right">
                    <p className="text-xs font-mono text-[#cc6633] mb-1">Puntaje</p>
                    <p className="text-xl font-mono text-[#d4a574]">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ranking local */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <ListOrdered className="w-5 h-5 text-[#cc6633]" />
            <h2 className="text-xl font-mono text-[#d4a574]">Ranking local de sesiones</h2>
          </div>

          <div className="space-y-3">
            {refreshedRanking.length === 0 ? (
              <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
                <p className="text-sm font-mono text-[#d4a574]/70">
                  Aún no hay sesiones guardadas en el ranking local.
                </p>
              </div>
            ) : (
              refreshedRanking.slice(0, 5).map((item, index) => (
                <div
                  key={`${item.alias}-${item.timestamp}-${index}`}
                  className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <p className="text-sm font-mono text-[#cc6633]">
                        #{index + 1} · {item.alias}
                      </p>
                      <p className="text-xs font-mono text-[#d4a574]/60 mt-1">
                        Escenarios completados: {item.completedCount}
                      </p>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="text-sm font-mono text-[#d4a574]">
                        Puntaje: {item.totalScore}
                      </p>
                      <p className="text-xs font-mono text-[#d4a574]/60">
                        Rendimiento: {item.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* acciones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/proyectos/proj-02/fase-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al quiz
          </Link>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black/30 border border-[#d4a574]/20 text-[#d4a574] font-mono hover:border-[#cc6633]/40 hover:text-[#cc6633] transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Reiniciar resultados
          </button>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

type Props = {
  status: 'correct' | 'partial' | 'incorrect';
  statusLabel: string;
  message: string;
  indicators: string[];
  score: number;
  correctAnswerLabel: string; // 🔥 NUEVO
};

const styles = {
  correct: {
    border: 'border-green-500/40',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    icon: '✅',
  },
  partial: {
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    icon: '⚠️',
  },
  incorrect: {
    border: 'border-red-500/40',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    icon: '❌',
  },
};

const FeedbackCard: React.FC<Props> = ({
  status,
  statusLabel,
  message,
  indicators,
  score,
  correctAnswerLabel, // 🔥 NUEVO
}) => {
  const style = styles[status];

  return (
    <div className={`p-5 border ${style.border} ${style.bg}`}>
      <h3 className="text-lg font-bold text-[#cc6633] mb-4">
        Retroalimentación
      </h3>

      <div className="space-y-4 text-sm font-mono text-[#d4a574]/80 leading-relaxed">
        
        {/* Resultado */}
        <p className={`font-bold ${style.text}`}>
          {style.icon} Resultado: {statusLabel}
        </p>

        {/* Mensaje dinámico */}
        <p className={style.text}>{message}</p>

        {/* 🔥 Respuesta correcta dinámica */}
        <p>
          <span className="text-[#cc6633]">Respuesta correcta:</span>{' '}
          {correctAnswerLabel}
        </p>

        {/* Indicadores */}
        <div>
          <p className="text-[#cc6633] mb-2">
            {status === 'correct' ? 'Elementos clave:' : 'Señales de alerta:'}
          </p>
          <ul className="list-disc pl-6 space-y-1">
            {indicators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Puntaje */}
        <p>
          <span className="text-[#cc6633]">Puntaje:</span> {score}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
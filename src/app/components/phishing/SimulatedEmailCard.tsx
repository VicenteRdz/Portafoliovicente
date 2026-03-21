import React from 'react';

type Props = {
  from: string;
  subject: string;
  body: string;
  linkText?: string;
  linkUrl?: string;

  // modo educativo
  showIndicators?: boolean;
  indicators?: string[];
};

const SimulatedEmailCard: React.FC<Props> = ({
  from,
  subject,
  body,
  linkText = 'Verificar ahora',
  linkUrl = '#',
  showIndicators = false,
  indicators = [],
}) => {
  return (
    <div className="bg-[#111]/80 border border-[#d4a574]/20 p-5 rounded-md shadow-lg max-w-2xl">
      
      {/* HEADER */}
      <div className="border-b border-[#d4a574]/20 pb-3 mb-4">
        <p className="text-sm font-mono text-[#d4a574]/70">
          De: <span className="text-[#d4a574]">{from}</span>
        </p>
        <p className="text-sm font-mono text-[#d4a574]/70">
          Asunto: <span className="text-[#d4a574]">{subject}</span>
        </p>
      </div>

      {/* BODY */}
      <div className="text-sm font-mono text-[#d4a574]/85 leading-relaxed whitespace-pre-line mb-6">
        {body}
      </div>

      {/* CTA */}
      <div className="mb-4">
        <button
          type="button"
          className="inline-block px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono text-sm hover:bg-[#cc6633]/30 transition"
        >
          {linkText}
        </button>
      </div>

      {/* URL visible (importante para phishing) */}
      {linkUrl && (
        <p className="text-xs font-mono text-[#d4a574]/50 break-all">
          {linkUrl}
        </p>
      )}

      {/* INDICADORES EDUCATIVOS */}
      {showIndicators && indicators.length > 0 && (
        <div className="mt-6 p-4 border border-red-500/40 bg-red-500/10">
          <h4 className="text-sm font-bold text-red-400 mb-2">
            ⚠ Posibles señales de phishing
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-xs font-mono text-red-300">
            {indicators.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimulatedEmailCard;
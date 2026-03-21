import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

type Props = {
  title: string;
  message: string;
  qrLabel?: string;
  fakeUrl?: string;

  // personalización visual
  organization?: string;
  deadlineText?: string;

  // modo educativo
  showIndicators?: boolean;
  indicators?: string[];
};

const QRNoticeCard: React.FC<Props> = ({
  title,
  message,
  qrLabel = 'Escanea aquí',
  fakeUrl = '',
  organization = 'Departamento de Sistemas',
  deadlineText = '',
  showIndicators = false,
  indicators = [],
}) => {
  return (
    <div className="max-w-md mx-auto bg-white text-black rounded-md shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#1f2937] text-white px-6 py-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm opacity-90 mt-1">{organization}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-sm leading-relaxed whitespace-pre-line text-center mb-6">
          {message}
        </p>

        <div className="flex flex-col items-center mb-4">
          {fakeUrl ? (
            <div className="bg-white p-3 border border-gray-300 rounded">
              <QRCodeSVG value={fakeUrl} size={180} />
            </div>
          ) : (
            <div className="w-[180px] h-[180px] border-[10px] border-black flex items-center justify-center bg-gray-100">
              <span className="text-sm font-mono font-bold tracking-[0.2em]">QR</span>
            </div>
          )}

          <p className="text-xs mt-3 text-gray-600">{qrLabel}</p>
        </div>

        {deadlineText && (
          <p className="text-sm font-bold text-red-700 text-center mt-4">
            {deadlineText}
          </p>
        )}

        {fakeUrl && (
          <p className="text-[10px] text-center text-gray-500 break-all mt-4">
            {fakeUrl}
          </p>
        )}

        {showIndicators && indicators.length > 0 && (
          <div className="mt-6 p-4 border border-red-500/40 bg-red-500/10 rounded">
            <h4 className="text-sm font-bold text-red-600 mb-2 text-center">
              ⚠ Señales de posible fraude
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs text-red-600">
              {indicators.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRNoticeCard;
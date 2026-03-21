import React from 'react';

type Props = {
  brandName: string;
  brandSubtitle?: string;
  url: string;
  usernameLabel?: string;
  passwordLabel?: string;
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
  buttonText?: string;
  logoText?: string;
  themeColor?: string;

  // modo educativo
  showIndicators?: boolean;
  indicators?: string[];
};

const FakeLoginPage: React.FC<Props> = ({
  brandName,
  brandSubtitle = 'Acceso seguro',
  url,
  usernameLabel = 'Usuario',
  passwordLabel = 'Contraseña',
  usernamePlaceholder = 'Ingresa tu usuario',
  passwordPlaceholder = 'Ingresa tu contraseña',
  buttonText = 'Iniciar sesión',
  logoText = '',
  themeColor = '#2563eb',
  showIndicators = false,
  indicators = [],
}) => {
  return (
    <div className="max-w-3xl mx-auto rounded-md overflow-hidden shadow-xl border border-[#d4a574]/20 bg-[#f5f7fb]">
      {/* Barra de navegador */}
      <div className="flex items-center gap-4 px-4 py-3 bg-[#e8edf5] border-b border-[#d7dde7]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex-1 px-4 py-2 rounded-full bg-white border border-[#cfd8e3] text-sm text-[#374151] font-sans break-all">
          {url}
        </div>
      </div>

      {/* Contenido */}
      <div className="grid gap-6 justify-items-center p-8">
        <div className="text-center">
          {logoText ? (
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-lg mb-3"
              style={{ backgroundColor: themeColor }}
            >
              {logoText}
            </div>
          ) : null}

          <h3 className="text-2xl font-bold" style={{ color: themeColor }}>
            {brandName}
          </h3>
          <p className="text-sm text-[#4b5563] mt-1">{brandSubtitle}</p>
        </div>

        <form className="w-full max-w-md bg-white border border-[#dbe2ea] rounded-xl p-6 shadow-sm">
          <label className="block mb-2 text-sm font-semibold text-[#374151]">
            {usernameLabel}
          </label>
          <input
            type="text"
            placeholder={usernamePlaceholder}
            className="w-full mb-4 px-4 py-3 border border-[#cfd8e3] rounded-lg text-sm outline-none"
            readOnly
          />

          <label className="block mb-2 text-sm font-semibold text-[#374151]">
            {passwordLabel}
          </label>
          <input
            type="password"
            placeholder={passwordPlaceholder}
            className="w-full mb-4 px-4 py-3 border border-[#cfd8e3] rounded-lg text-sm outline-none"
            readOnly
          />

          <button
            type="button"
            className="w-full mt-2 py-3 rounded-lg text-white font-bold text-sm"
            style={{ backgroundColor: themeColor }}
          >
            {buttonText}
          </button>
        </form>

        {showIndicators && indicators.length > 0 && (
          <div className="w-full max-w-md p-4 border border-red-500/40 bg-red-500/10 rounded">
            <h4 className="text-sm font-bold text-red-600 mb-2 text-center">
              ⚠ Señales de posible phishing
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

export default FakeLoginPage;
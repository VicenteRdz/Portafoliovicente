import React from 'react';
import { Link } from 'react-router-dom';

const SqlInjectionPage = () => {
  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          SQL Injection
        </h1>

        <div className="mb-10">
          <h2 className="text-lg font-bold text-[#cc6633] mb-3">Introducción</h2>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            Las aplicaciones web modernas dependen críticamente de sistemas gestores de bases de datos
            relacionales para almacenar y procesar información sensible. Cuando las entradas del usuario
            no se validan ni parametrizan adecuadamente, es posible alterar la estructura lógica de una
            consulta SQL y explotar una vulnerabilidad conocida como SQL Injection.

            Este módulo documenta laboratorios de PortSwigger Web Security Academy enfocados en SQL Injection,
            integrando explicación técnica, procedimiento, payloads, evidencias y mitigaciones.
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold text-[#cc6633] mb-3">Marco teórico</h2>
          <div className="space-y-4">
            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
              <h3 className="text-md font-bold text-[#d4a574] mb-2">SQL Injection</h3>
              <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                SQL Injection ocurre cuando una aplicación construye consultas SQL dinámicamente a partir
                de entradas del usuario sin protección adecuada, permitiendo que datos externos sean
                interpretados como parte de la sintaxis ejecutable.
              </p>
            </div>

            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
              <h3 className="text-md font-bold text-[#d4a574] mb-2">Tipos comunes</h3>
              <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
                <li>UNION-based</li>
                <li>Boolean-based</li>
                <li>Time-based</li>
                <li>Authentication bypass</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
              <h3 className="text-md font-bold text-[#d4a574] mb-2">Defensa</h3>
              <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
                <li>Consultas parametrizadas</li>
                <li>Validación estricta de entradas</li>
                <li>Manejo seguro de errores</li>
                <li>Mínimo privilegio en base de datos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold text-[#cc6633] mb-3">Labs documentados</h2>
          <Link
            to="/hall-of-fame/sql-injection/labs"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Ver laboratorios
          </Link>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#cc6633] mb-3">Conclusión</h2>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            El análisis de laboratorios de SQL Injection permite comprender cómo una mala construcción
            de consultas puede comprometer directamente la seguridad de una aplicación web. La práctica
            en laboratorios controlados fortalece la comprensión técnica de payloads, impacto y mitigación.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SqlInjectionPage;
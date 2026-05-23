import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity17 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-17');
  if (!activity) return <div>Actividad no encontrada</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${activity.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/actividades"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice de actividades
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {activity.title}
        </h1>

        {/* Botón PDF */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Descargar PDF
          </a>
        </div>

        {/* 1. Introducción */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Introducción</h3>
          <div className="intro text-[#d4a574]/85 font-mono leading-relaxed">
            La actividad se centra en la evaluación de vulnerabilidades utilizando el
            estándar CVSS v3.1, una metodología ampliamente utilizada para medir la
            severidad de fallas de seguridad en sistemas tecnológicos.
            <br /><br />
            El análisis parte de un escenario organizacional donde se detecta una
            vulnerabilidad en un sistema web interno. A partir de sus características
            técnicas, se identifican las métricas base, se construye el vector CVSS y se
            interpreta la puntuación obtenida para determinar su nivel de riesgo.
          </div>
        </div>

        {/* 2. Objetivos */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">2. Objetivos</h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5 mb-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Objetivo general
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              Aplicar el modelo CVSS v3.1 para evaluar la gravedad de vulnerabilidades
              reales, interpretando correctamente sus métricas base y justificando la
              priorización del riesgo en un contexto organizacional.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Objetivos específicos
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              <li>Identificar y comprender las métricas base de CVSS v3.1.</li>
              <li>Construir correctamente un vector CVSS a partir de un escenario técnico.</li>
              <li>Calcular e interpretar la puntuación de riesgo utilizando la calculadora oficial.</li>
            </ul>
          </div>
        </div>

        {/* 3. Marco teórico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">3. Marco teórico</h3>

          <div className="space-y-6">
            {[
              {
                title: 'Vulnerabilidad',
                content:
                  'Una vulnerabilidad es una debilidad o falla presente en un sistema, aplicación, red o dispositivo que puede ser aprovechada por un atacante para comprometer la seguridad de la información.'
              },
              {
                title: 'Triada CIA',
                content:
                  'Las vulnerabilidades pueden afectar la confidencialidad, integridad y disponibilidad de la información. Estos tres pilares permiten evaluar el impacto técnico que una falla puede tener sobre los activos de una organización.'
              },
              {
                title: 'CVSS v3.1',
                content:
                  'El Common Vulnerability Scoring System versión 3.1 es un estándar internacional desarrollado por FIRST para evaluar la severidad de vulnerabilidades mediante una puntuación numérica de 0.0 a 10.0.'
              },
              {
                title: 'Estructura de CVSS',
                content:
                  'CVSS se divide en métricas base, temporales y ambientales. Las métricas base representan las características fundamentales de la vulnerabilidad y determinan la puntuación principal de severidad.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Métricas Base CVSS */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            4. Métricas Base CVSS v3.1
          </h3>

          <div className="space-y-6">
            {[
              {
                metric: 'AV - Attack Vector',
                meaning:
                  'Define desde dónde puede explotarse la vulnerabilidad, por ejemplo mediante red, acceso local o físico.'
              },
              {
                metric: 'AC - Attack Complexity',
                meaning:
                  'Indica el nivel de complejidad necesario para ejecutar el ataque exitosamente.'
              },
              {
                metric: 'PR - Privileges Required',
                meaning:
                  'Representa el nivel de privilegios que necesita el atacante antes de explotar la vulnerabilidad.'
              },
              {
                metric: 'UI - User Interaction',
                meaning:
                  'Determina si se requiere interacción de un usuario legítimo para que el ataque funcione.'
              },
              {
                metric: 'S - Scope',
                meaning:
                  'Indica si la vulnerabilidad afecta únicamente al sistema vulnerable o puede impactar otros componentes.'
              },
              {
                metric: 'C, I, A',
                meaning:
                  'Miden el impacto sobre la confidencialidad, integridad y disponibilidad de la información.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.metric}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Caso práctico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">5. Caso práctico</h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5 mb-6">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Escenario evaluado
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              La organización detectó una vulnerabilidad en un sistema web interno
              utilizado para la gestión de información corporativa. La vulnerabilidad puede
              explotarse remotamente a través de la red, presenta baja complejidad técnica,
              requiere privilegios elevados, no necesita interacción del usuario y mantiene
              el alcance sin cambios. Su impacto sobre confidencialidad, integridad y
              disponibilidad es bajo.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Identificación de métricas',
                content:
                  'El escenario permitió identificar los valores CVSS correspondientes: explotación por red, baja complejidad, privilegios elevados, sin interacción del usuario, alcance sin cambios e impacto bajo en confidencialidad, integridad y disponibilidad.'
              },
              {
                title: 'Vector CVSS construido',
                content:
                  'CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:L/I:L/A:L'
              },
              {
                title: 'Interpretación general del vector',
                content:
                  'El vector indica que la vulnerabilidad puede explotarse remotamente y con baja complejidad, aunque requiere privilegios altos. Su impacto técnico es limitado, pero sigue siendo relevante dentro de un entorno organizacional.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Resultado */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            6. Cálculo e interpretación de puntuación
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
              <h4 className="text-md font-bold text-[#d4a574] mb-2">
                Puntuación base
              </h4>
              <p className="text-3xl font-mono text-[#cc6633] mb-2">
                4.7
              </p>
              <p className="text-sm font-mono text-[#d4a574]/75">
                Resultado obtenido con la calculadora oficial CVSS v3.1.
              </p>
            </div>

            <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
              <h4 className="text-md font-bold text-[#d4a574] mb-2">
                Categoría
              </h4>
              <p className="text-3xl font-mono text-[#cc6633] mb-2">
                Media
              </p>
              <p className="text-sm font-mono text-[#d4a574]/75">
                La puntuación cae dentro del rango 4.0 - 6.9.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Métricas de resultado
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              <li>Vector Base: CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:L/I:L/A:L</li>
              <li>Impact Subscore (ISS): 3.4</li>
              <li>Exploitability Subscore (ESS): 1.2</li>
              <li>Final Base Score: 4.7</li>
            </ul>
          </div>
        </div>

        {/* 7. Reflexión */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">7. Reflexión</h3>
          <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
            El análisis demuestra que una vulnerabilidad no necesariamente debe ser
            crítica para representar un riesgo relevante dentro de una organización. Aunque
            en este caso se requieren privilegios elevados y el impacto sobre la triada CIA
            es bajo, la explotación remota y la baja complejidad técnica justifican su
            atención.
            <br /><br />
            La aplicación de CVSS v3.1 permitió transformar características técnicas en
            una evaluación cuantitativa y estandarizada, facilitando la priorización del
            riesgo y la toma de decisiones en seguridad informática.
            <br /><br />
            Esta actividad refuerza la importancia de utilizar metodologías formales para
            evaluar vulnerabilidades, ya que permiten comparar riesgos, definir prioridades
            de mitigación y fortalecer la postura de seguridad de una organización frente a
            amenazas internas y externas.
          </p>
        </div>
        {/* Navegación inferior */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/actividades"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activity17;
import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab4 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-04');
  if (!lab) return <div>Laboratorio no encontrado</div>;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {lab.title}
        </h1>

        {/* Datos generales */}
        <div className="mb-8 bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">Datos generales del laboratorio</h3>
          <ul className="space-y-2 text-sm font-mono text-[#d4a574]/80">
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection attack, querying the database type and version on MySQL and Microsoft</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Examining the database</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-Band Union-based</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Identificar el tipo y la versión del motor de base de datos para adaptar ataques posteriores.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad se produce porque la aplicación evalúa directamente la entrada del usuario
          dentro de una consulta SQL sin utilizar consultas parametrizadas. Esto permite insertar una
          consulta adicional mediante <span className="text-[#cc6633]">UNION SELECT</span>, siempre que
          se respete la misma estructura de columnas que la consulta original.
          <br /><br />
          En este laboratorio, la meta no es todavía extraer credenciales, sino identificar el tipo
          y la versión del motor de base de datos, utilizando variables del sistema como
          <span className="text-[#cc6633]"> @@version</span>. Esta información es crítica para adaptar
          payloads, sintaxis y técnicas de explotación a MySQL o Microsoft SQL Server.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Identificar el parámetro vulnerable',
              items: [
                'Acceder al laboratorio y ubicar el filtro de categoría o parámetro que modifica el contenido mostrado.',
                'Confirmar que dicho parámetro se incorpora en una consulta SQL del lado del servidor.',
              ],
            },
            {
              title: 'Paso 2: Determinar el número de columnas',
              items: [
                "Usar pruebas como ' ORDER BY 1--, ' ORDER BY 2--, etc., para identificar cuántas columnas devuelve la consulta original.",
                'Confirmar el número correcto según la respuesta de la aplicación.',
              ],
            },
            {
              title: 'Paso 3: Confirmar columnas compatibles con texto',
              items: [
                "Inyectar un payload tipo: ' UNION SELECT NULL, NULL--",
                'Sustituir progresivamente los NULL por valores de texto para detectar qué columnas aceptan y reflejan cadenas.',
              ],
            },
            {
              title: 'Paso 4: Consultar la versión del sistema',
              items: [
                "Utilizar un payload con @@version, por ejemplo: ' UNION SELECT @@version, NULL--",
                'Enviar la petición y observar si la respuesta muestra el banner de versión del motor.',
              ],
            },
            {
              title: 'Paso 5: Validar el resultado',
              items: [
                'Verificar en la respuesta que aparece la versión de MySQL o Microsoft SQL Server.',
                'Confirmar que el laboratorio queda resuelto al identificar correctamente el tipo de base de datos.',
              ],
            },
          ].map((phase, idx) => (
            <div key={idx}>
              <h4 className="text-md font-bold text-[#d4a574]">{phase.title}</h4>
              <ul className="space-y-2 pl-6 list-decimal">
                {phase.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm font-mono text-[#d4a574]/75">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payload */}
        <div className="mb-6 mt-8">
          <h3 className="text-lg font-bold text-[#cc6633]">Payload utilizado</h3>
          <pre className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-4 text-[#d4a574] font-mono overflow-x-auto">
{`' UNION SELECT @@version, NULL--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Ajusta la posición de <span className="text-[#cc6633]">@@version</span> según la columna
            que hayas comprobado que acepta texto y se refleja en la respuesta.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload consulta variables del sistema de la base de datos como
            <span className="text-[#cc6633]"> @@version</span>, permitiendo identificar el tipo y la
            versión exacta del motor utilizado.
            <br /><br />
            La cláusula <span className="text-[#cc6633]">UNION SELECT</span> une el resultado de la
            consulta original con una nueva consulta controlada por el atacante. Si la estructura
            de columnas es compatible, la base de datos devuelve la versión directamente dentro de
            la respuesta HTTP de la aplicación.
            <br /><br />
            Esta información es muy útil para un atacante porque permite adaptar la sintaxis y los
            payloads a características específicas de MySQL o Microsoft SQL Server.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> exposición de información sensible del sistema gestor de base de datos.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> confirma que el atacante puede alterar la consulta para obtener datos no previstos por la aplicación.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el impacto directo es bajo, pero la información obtenida facilita ataques posteriores más agresivos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            Se debe evitar la exposición de información del sistema mediante consultas dinámicas.
            El uso de consultas parametrizadas elimina la posibilidad de que el usuario inyecte
            cláusulas SQL adicionales en la consulta original.
            <br /><br />
            Asimismo, la supresión de información sensible en las respuestas del servidor y el
            principio de mínimo privilegio reducen el riesgo de reconocimiento del entorno y limitan
            la capacidad del atacante para preparar fases posteriores de explotación.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, payload utilizado,
            respuesta vulnerable y confirmación del laboratorio resuelto.
          </p>

          {/* Captura 1 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado en Burp Suite.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab04-request.png`}
              alt="Lab 4 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado para consultar la versión del motor.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab04-payload.png`}
              alt="Lab 4 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando la versión de la base de datos.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab04-response.png`}
              alt="Lab 4 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab04-solved.png`}
              alt="Lab 4 laboratorio resuelto"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>
        </div>

        {/* Referencias */}
        <div className="references">
          <h3 className="text-lg font-bold text-[#cc6633]">Referencias</h3>
          <ul className="space-y-2">
            {lab.references.map((r, idx) => (
              <li key={idx} className="text-sm font-mono text-[#d4a574]/75">
                <span className="text-[#cc6633]">› </span>
                <span className="text-[#d4a574]">{r.label}:</span> {r.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lab4;
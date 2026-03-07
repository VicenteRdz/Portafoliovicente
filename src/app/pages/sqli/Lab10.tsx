import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab10 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-10');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection UNION attack, retrieving multiple values in a single column</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Retrieving multiple values within a single column</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-Band Union-Based</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Extraer múltiples valores dentro de una sola columna visible de la aplicación.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad ocurre porque la aplicación incorpora directamente la entrada del usuario
          dentro de la consulta SQL sin utilizar consultas parametrizadas ni validación adecuada.
          Esto permite la inyección de una cláusula <span className="text-[#cc6633]">UNION SELECT</span>,
          siempre que se respete la misma estructura en número y tipo de columnas de la consulta original.
          <br /><br />
          Como resultado, la base de datos ejecuta la consulta alterada y expone información sensible
          de otras tablas. En este laboratorio, el reto consiste en que la aplicación solo refleja
          una columna útil, por lo que es necesario combinar varios valores dentro de un mismo campo
          mediante funciones de concatenación.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Identificar el número de columnas',
              items: [
                'Realizar pruebas de enumeración para determinar cuántas columnas devuelve la consulta original.',
                'Confirmar la estructura correcta antes de construir el payload final.',
              ],
            },
            {
              title: 'Paso 2: Detectar la columna visible',
              items: [
                'Probar qué columna permite reflejar texto en la respuesta de la aplicación.',
                'Verificar cuál de las columnas es útil para mostrar los datos extraídos.',
              ],
            },
            {
              title: 'Paso 3: Usar concatenación para mostrar múltiples datos',
              items: [
                'Construir un payload UNION que combine varios valores dentro de una sola columna.',
                'Unir campos como usuario y contraseña en un único resultado visible en la página.',
              ],
            },
            {
              title: 'Paso 4: Extraer y validar la información',
              items: [
                'Enviar el payload modificado al servidor.',
                'Comprobar que la respuesta muestra múltiples valores concatenados en la columna visible.',
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
{`' UNION SELECT NULL, username || '~' || password FROM users--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Ajusta la sintaxis de concatenación y los nombres de tabla/columnas según el motor y los valores exactos del laboratorio.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload combina múltiples valores dentro de una sola columna mediante funciones de
            concatenación. Esto permite mostrar información como usuario y contraseña en un único
            campo visible cuando la aplicación solo presenta una columna útil para texto.
            <br /><br />
            En este ejemplo, el operador de concatenación une ambos valores separados por un delimitador
            visible, como <span className="text-[#cc6633]">~</span>, facilitando distinguir cada dato
            dentro del resultado.
            <br /><br />
            Esta técnica es especialmente útil cuando la respuesta de la aplicación limita la visualización
            a una sola columna, pero el atacante necesita recuperar varios atributos de una fila sensible.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite extraer múltiples datos sensibles desde tablas internas usando una sola columna visible.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> confirma que la consulta puede ser alterada para devolver resultados manipulados por el atacante.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el impacto inmediato es bajo, pero la técnica facilita ataques posteriores más avanzados.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            El uso de consultas preparadas evita que funciones como concatenación sean utilizadas con
            fines maliciosos. Además, se debe limitar la exposición de datos y evitar mostrar información
            directamente desde consultas dinámicas.
            <br /><br />
            También es recomendable aplicar validación de entradas, restringir privilegios de lectura
            sobre tablas sensibles y reducir la información visible en la interfaz para minimizar la
            capacidad de explotación.
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
              src={`${import.meta.env.BASE_URL}images/sqli/lab10-request.png`}
              alt="Lab 10 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado con concatenación.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab10-payload.png`}
              alt="Lab 10 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando múltiples valores en una sola columna.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab10-response.png`}
              alt="Lab 10 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab10-solved.png`}
              alt="Lab 10 laboratorio resuelto"
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

export default Lab10;
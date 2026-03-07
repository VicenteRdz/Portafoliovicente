import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab3 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-03');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection attack, querying the database type and version on Oracle</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Apprentice</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-band (UNION based) SQL Injection</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Determinar el tipo y la versión de la base de datos mediante una inyección SQL en el filtro de categorías, mostrando la información directamente en la página web.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La aplicación web es vulnerable porque concatena directamente la entrada del usuario en
          una consulta SQL sin realizar validación adecuada. Al tratarse de una base de datos Oracle,
          existen requisitos específicos de sintaxis, como que toda consulta <span className="text-[#cc6633]">SELECT</span>
          debe incluir la cláusula <span className="text-[#cc6633]">FROM</span> y que las columnas del
          operador <span className="text-[#cc6633]">UNION</span> deben coincidir en número y tipo de datos
          con la consulta original.
          <br /><br />
          Al manipular el parámetro de la categoría, es posible engañar al servidor para ejecutar
          una consulta adicional que extraiga información del sistema, específicamente la versión
          del motor Oracle desde la tabla interna <span className="text-[#cc6633]">v$version</span>.
          La vulnerabilidad es especialmente crítica porque permite al atacante obtener información
          sensible del entorno de la base de datos durante la fase de reconocimiento.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Intercepción de la solicitud',
              items: [
                'Acceder a una categoría de productos, por ejemplo Gifts.',
                'Interceptar la petición GET en Burp Suite y enviarla al Repeater para pruebas manuales.',
              ],
            },
            {
              title: 'Paso 2: Determinación del número de columnas',
              items: [
                "Inyectar el payload: ' UNION SELECT NULL, NULL FROM DUAL--",
                'Verificar que no se produzca error, confirmando que la consulta original utiliza dos columnas.',
              ],
            },
            {
              title: 'Paso 3: Verificación de tipos de datos',
              items: [
                "Reemplazar los valores NULL por cadenas de texto ('a') para identificar si las columnas aceptan datos string.",
                'Comprobar que la consulta sigue siendo válida y que el contenido se refleja en la respuesta.',
              ],
            },
            {
              title: 'Paso 4: Consulta de versión en Oracle',
              items: [
                "Sustituir uno de los campos por la columna BANNER de Oracle usando: ' UNION SELECT BANNER, NULL FROM v$version--",
                'Enviar la petición modificada al servidor.',
              ],
            },
            {
              title: 'Paso 5: Extracción y validación',
              items: [
                'Observar que la respuesta muestra la información de versión de Oracle directamente en la página.',
                'Confirmar que el laboratorio queda resuelto al recuperar el tipo y versión del motor de base de datos.',
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
{`' UNION SELECT BANNER, NULL FROM v$version--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload final utilizado es:
            <br /><br />
            <span className="text-[#cc6633]">' UNION SELECT BANNER, NULL FROM v$version--</span>
            <br /><br />
            <span className="text-[#cc6633]">' UNION SELECT</span>: finaliza la cadena de búsqueda
            legítima y une los resultados de una consulta adicional controlada por el atacante.
            <br /><br />
            <span className="text-[#cc6633]">BANNER</span>: es la columna de Oracle que contiene la
            descripción completa de la versión del software.
            <br /><br />
            <span className="text-[#cc6633]">NULL</span>: se utiliza para rellenar la segunda columna
            y mantener la compatibilidad con la estructura de la consulta original.
            <br /><br />
            <span className="text-[#cc6633]">FROM v$version</span>: referencia una tabla interna de
            Oracle que almacena información detallada sobre el banner y la versión del sistema.
            <br /><br />
            Finalmente, el comentario SQL <span className="text-[#cc6633]">--</span> anula el resto
            de la consulta original. Esta técnica permite recuperar datos adicionales dentro de la
            misma respuesta HTTP, lo que corresponde a una SQL Injection tipo <span className="text-[#cc6633]">in-band</span>.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> exposición de información interna del sistema gestor de base de datos.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la consulta original puede ser alterada mediante entrada externa.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el impacto directo en este laboratorio es bajo, pero la información obtenida facilita ataques posteriores más agresivos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La prevención fundamental consiste en usar consultas preparadas y parametrizadas en lugar
            de concatenar directamente entradas del usuario dentro del SQL. Además, se debe restringir
            el acceso del usuario de la base de datos a tablas internas del sistema como
            <span className="text-[#cc6633]"> v$version</span>, limitando así la información que un
            atacante puede recolectar durante la fase de reconocimiento.
            <br /><br />
            También es recomendable aplicar el principio de mínimo privilegio, validación estricta
            de entradas y manejo seguro de errores para evitar que la aplicación exponga información
            útil al atacante.
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
              src={`${import.meta.env.BASE_URL}images/sqli/lab03-request.png`}
              alt="Lab 3 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado en el parámetro vulnerable.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab03-payload.png`}
              alt="Lab 3 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando la versión de Oracle.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab03-response.png`}
              alt="Lab 3 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab03-solved.png`}
              alt="Lab 3 laboratorio resuelto"
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

export default Lab3;
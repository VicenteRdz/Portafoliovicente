import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab9 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-09');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection UNION attack, retrieving data from other tables</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Using a SQL injection UNION attack to retrieve interesting data</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-Band Union-Based</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Extraer datos desde otras tablas.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad se origina porque la aplicación construye dinámicamente la consulta SQL
          incorporando directamente la entrada del usuario en la cláusula <span className="text-[#cc6633]">WHERE</span>,
          sin emplear consultas parametrizadas ni validación adecuada.
          <br /><br />
          Esto permite que un atacante inyecte una cláusula
          <span className="text-[#cc6633]"> UNION SELECT</span> adicional, siempre que sea compatible
          en número y tipo de columnas con la consulta original. Como resultado, la base de datos
          ejecuta ambas consultas dentro de una sola instrucción y devuelve datos provenientes de
          otras tablas no destinadas a ser accesibles desde la interfaz.
          <br /><br />
          Esta falta de separación entre datos y código posibilita la exposición directa de información
          sensible almacenada en la base de datos, como usuarios y contraseñas.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Identificar el punto vulnerable',
              items: [
                'Acceder al laboratorio y seleccionar el filtro de categoría de productos.',
                'Confirmar que el parámetro de categoría es reflejado en una consulta SQL del lado del servidor.',
              ],
            },
            {
              title: 'Paso 2: Determinar el número de columnas',
              items: [
                "Utilizar pruebas como ' ORDER BY 1--, ' ORDER BY 2--, etc., para identificar cuántas columnas devuelve la consulta original.",
                'Confirmar el número correcto observando cuándo la aplicación deja de responder con error.',
              ],
            },
            {
              title: 'Paso 3: Identificar columnas útiles',
              items: [
                'Probar qué columnas aceptan y reflejan datos de texto mediante payloads basados en UNION SELECT.',
                'Determinar en qué columnas pueden mostrarse resultados provenientes de otras tablas.',
              ],
            },
            {
              title: 'Paso 4: Extraer datos de la tabla users',
              items: [
                "Construir un payload UNION para seleccionar columnas sensibles desde la tabla 'users'.",
                'Enviar la petición y observar que la respuesta muestra datos de usuario y contraseña en la página.',
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
{`' UNION SELECT username, password FROM users--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Ajusta los nombres de columnas y tabla según los valores concretos que hayas identificado en el laboratorio.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utiliza la cláusula <span className="text-[#cc6633]">UNION SELECT</span> para
            combinar los resultados legítimos de la consulta con datos provenientes de otra tabla,
            en este caso la tabla <span className="text-[#cc6633]">users</span>.
            <br /><br />
            Al igualar el número de columnas y usar tipos de datos compatibles con la consulta original,
            la base de datos acepta la instrucción y devuelve nombres de usuario y contraseñas dentro
            de la misma respuesta HTTP de la aplicación.
            <br /><br />
            Esta técnica demuestra cómo una inyección SQL tipo
            <span className="text-[#cc6633]"> in-band UNION-based</span> puede utilizarse para recuperar
            información sensible desde tablas no accesibles normalmente a través de la interfaz.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> exposición directa de credenciales y datos sensibles almacenados en otras tablas.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la lógica SQL puede ser manipulada para consultar información no autorizada.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> aunque el impacto inmediato puede ser bajo, la información extraída facilita ataques posteriores más graves.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            Se recomienda el uso de consultas parametrizadas para evitar que la entrada del usuario
            sea interpretada como código SQL ejecutable. También es importante validar entradas y
            restringir los permisos de la cuenta de base de datos para evitar accesos innecesarios
            a tablas sensibles.
            <br /><br />
            Además, deben minimizarse los privilegios del usuario de aplicación y limitar la exposición
            de mensajes de error que puedan revelar detalles sobre la estructura interna de la consulta.
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
              src={`${import.meta.env.BASE_URL}images/sqli/lab09-request.png`}
              alt="Lab 9 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado para recuperar datos desde otra tabla.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab09-payload.png`}
              alt="Lab 9 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando datos extraídos de la tabla users.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab09-response.png`}
              alt="Lab 9 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab09-solved.png`}
              alt="Lab 9 laboratorio resuelto"
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

export default Lab9;
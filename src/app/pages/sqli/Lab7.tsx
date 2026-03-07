import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab7 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-07');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection UNION attack, determining the number of columns returned by the query</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Determining the number of columns required</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-Band – UNION Based</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Determinar el número de columnas que devuelve la consulta original para poder construir un ataque UNION válido.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad radica en la posibilidad de inyectar fragmentos de código SQL dentro
          del parámetro vulnerable sin que exista validación o parametrización adecuada. Esto permite
          utilizar técnicas de enumeración estructural para inferir información sobre la consulta
          original que ejecuta la aplicación.
          <br /><br />
          Aunque en esta fase no se extraen datos sensibles directamente, sí se obtiene información
          crítica para preparar un ataque <span className="text-[#cc6633]">UNION-based</span> válido.
          En particular, conocer el número de columnas que devuelve la consulta original es un requisito
          indispensable para construir una inyección que no produzca errores de compatibilidad.
          <br /><br />
          La causa subyacente sigue siendo la concatenación insegura de entradas externas dentro de
          la instrucción SQL.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Acceso e identificación del parámetro vulnerable',
              items: [
                'Acceder al laboratorio y seleccionar una categoría de productos.',
                'Identificar el parámetro de filtrado que controla la consulta SQL en la aplicación.',
              ],
            },
            {
              title: 'Paso 2: Intercepción de la solicitud',
              items: [
                'Interceptar la petición HTTP correspondiente con Burp Suite.',
                'Enviar la solicitud al Repeater para realizar pruebas manuales.',
              ],
            },
            {
              title: 'Paso 3: Pruebas de enumeración',
              items: [
                "Probar con payloads basados en UNION SELECT NULL para determinar cuántas columnas acepta la consulta original.",
                "Incrementar progresivamente el número de valores NULL hasta encontrar una consulta válida.",
              ],
            },
            {
              title: 'Paso 4: Identificación del número correcto de columnas',
              items: [
                'Observar en qué punto la aplicación deja de devolver error.',
                'Determinar el número máximo válido de columnas compatibles con la consulta original.',
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
{`' UNION SELECT NULL,NULL--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Ajusta el número de valores <span className="text-[#cc6633]">NULL</span> según el número
            correcto de columnas que hayas identificado en tu laboratorio.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado en este laboratorio se basa en el operador
            <span className="text-[#cc6633]"> UNION SELECT</span> con valores
            <span className="text-[#cc6633]"> NULL</span>, ya que estos suelen ser compatibles con
            diferentes tipos de datos.
            <br /><br />
            La lógica consiste en aumentar progresivamente la cantidad de columnas declaradas en la
            consulta inyectada hasta encontrar una coincidencia exacta con la consulta original.
            Cuando el número de columnas es incorrecto, el motor de base de datos devuelve un error.
            Cuando el número es correcto, la consulta se ejecuta sin fallar.
            <br /><br />
            Este comportamiento permite deducir la estructura interna de la consulta original y preparar
            correctamente ataques posteriores basados en <span className="text-[#cc6633]">UNION</span>.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> aunque no expone datos de inmediato, revela información estructural útil para futuras extracciones.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la lógica SQL puede ser alterada por entradas externas no confiables.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> errores repetidos de enumeración podrían afectar estabilidad o generar trazas internas útiles para un atacante.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La mitigación requiere eliminar la posibilidad de inyección mediante consultas
            parametrizadas y asegurar que los mensajes de error no revelen detalles internos de la
            base de datos.
            <br /><br />
            Asimismo, se deben implementar mecanismos de monitoreo que detecten patrones asociados a
            intentos de enumeración estructural, así como validación estricta de entradas y políticas
            de mínimo privilegio para limitar el impacto de una explotación exitosa.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al acceso al laboratorio, request interceptado,
            payload utilizado, respuesta vulnerable y confirmación del laboratorio resuelto.
          </p>

          {/* Captura 1 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Acceso al laboratorio.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab07-acceso.png`}
              alt="Lab 7 acceso al laboratorio"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Request interceptado en Burp Suite.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab07-request.png`}
              alt="Lab 7 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Payload utilizado para determinar el número de columnas.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab07-payload.png`}
              alt="Lab 7 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Respuesta vulnerable / validación del número de columnas.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab07-response.png`}
              alt="Lab 7 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 5 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab07-solved.png`}
              alt="Lab 7 laboratorio resuelto"
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

export default Lab7;
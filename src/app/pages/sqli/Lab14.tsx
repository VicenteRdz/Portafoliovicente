import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab14 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-14');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Blind SQL injection with time delays</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Exploiting blind SQL injection with time delays</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Inyección SQL ciega basada en tiempos</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Confirmar la existencia de una vulnerabilidad de inyección SQL ciega forzando a la base de datos a ejecutar un retardo de 10 segundos.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La aplicación es vulnerable porque concatena de manera insegura la entrada de la cookie
          <span className="text-[#cc6633]"> TrackingId</span> dentro de una consulta SQL. Debido a que
          la inyección es “ciega”, el atacante no puede confirmar la ejecución observando directamente
          resultados visibles en la página.
          <br /><br />
          Sin embargo, al inyectar una función que suspende temporalmente la ejecución dentro del motor
          de la base de datos, el atacante puede medir el tiempo que tarda el servidor web en responder.
          Si la respuesta presenta un retraso equivalente al tiempo inyectado, se confirma que el payload
          fue interpretado y ejecutado como código SQL.
          <br /><br />
          En este laboratorio se utiliza la función <span className="text-[#cc6633]">pg_sleep(10)</span>,
          propia de PostgreSQL, para provocar una demora de 10 segundos y demostrar la explotación.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Interceptar la petición con TrackingId',
              items: [
                'Visitar la página principal de la tienda web.',
                'Interceptar la petición que contiene la cookie TrackingId utilizando Proxy o Repeater en Burp Suite.',
              ],
            },
            {
              title: 'Paso 2: Modificar la cookie vulnerable',
              items: [
                "Modificar el valor original de la cookie concatenando el payload: TrackingId=x'||pg_sleep(10)--",
                'Asegurarse de mantener la estructura necesaria para cerrar correctamente la cadena original de la consulta.',
              ],
            },
            {
              title: 'Paso 3: Enviar la petición al servidor',
              items: [
                'Enviar la solicitud modificada desde Burp Suite.',
                'Observar el tiempo de respuesta reportado por la herramienta.',
              ],
            },
            {
              title: 'Paso 4: Confirmar la vulnerabilidad',
              items: [
                'Verificar que la respuesta tarda aproximadamente 10 segundos en ser procesada.',
                'Concluir que el payload fue ejecutado exitosamente dentro del motor de base de datos.',
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
{`TrackingId=x'||pg_sleep(10)--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">TrackingId=x'||pg_sleep(10)--</span>
            <br /><br />
            <span className="text-[#cc6633]">x'</span>: introduce un valor arbitrario seguido de una
            comilla simple para cerrar prematuramente la cadena original usada en la consulta del backend.
            <br /><br />
            <span className="text-[#cc6633]">||</span>: representa el operador de concatenación en
            motores como PostgreSQL y Oracle.
            <br /><br />
            <span className="text-[#cc6633]">pg_sleep(10)</span>: es una función nativa de PostgreSQL
            que ordena al motor suspender la ejecución del proceso actual durante 10 segundos.
            <br /><br />
            <span className="text-[#cc6633]">--</span>: inicia un comentario SQL que instruye a la base
            de datos a ignorar el resto de la consulta original.
            <br /><br />
            Si la respuesta HTTP tarda aproximadamente 10 segundos, se demuestra que la base de datos
            ejecutó el payload como código SQL y no como un simple dato de entrada.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> confirma la posibilidad de explotar la base de datos aunque no existan resultados visibles.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la lógica SQL puede ser alterada mediante una cookie controlada por el atacante.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> ataques repetidos con funciones de retardo pueden degradar el rendimiento del servidor y afectar el tiempo de respuesta del servicio.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La defensa principal e indispensable contra esta vulnerabilidad es el uso de consultas
            parametrizadas. Al parametrizar la consulta, el motor de base de datos interpreta el contenido
            de la cookie <span className="text-[#cc6633]">TrackingId</span> estrictamente como un valor
            literal de texto y no como código SQL ejecutable.
            <br /><br />
            En ese escenario seguro, caracteres especiales como comillas, operadores de concatenación
            o funciones como <span className="text-[#cc6633]">pg_sleep(10)</span> pierden su significado
            sintáctico y jamás son ejecutados. También es recomendable monitorear patrones anómalos de
            respuesta lenta y aplicar controles de tasa o detección de automatización maliciosa.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, payload utilizado,
            respuesta con retardo visible y confirmación del laboratorio resuelto.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab14-request.png`}
              alt="Lab 14 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado en Repeater.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab14-payload.png`}
              alt="Lab 14 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable con retardo aproximado de 10 segundos.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab14-response.png`}
              alt="Lab 14 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab14-solved.png`}
              alt="Lab 14 laboratorio resuelto"
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

export default Lab14;
import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab5 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-05');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection attack, listing the database contents on non-Oracle databases</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Examining the database</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-Band Union-based</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Enumerar la estructura interna de la base de datos, incluyendo tablas y columnas, para identificar dónde se almacena información sensible.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad existe porque la aplicación concatena directamente la entrada del usuario
          dentro de una consulta SQL sin utilizar consultas parametrizadas. Esto permite la inyección
          de una cláusula <span className="text-[#cc6633]">UNION SELECT</span> que consulta vistas de
          metadatos del sistema, como <span className="text-[#cc6633]">information_schema</span>, en
          motores no Oracle como MySQL y Microsoft SQL Server.
          <br /><br />
          Al coincidir el número y tipo de columnas con la consulta original, la base de datos ejecuta
          la instrucción alterada y expone metadatos internos. Esto facilita la enumeración del esquema
          y posteriormente la extracción de información sensible desde tablas que no deberían ser accesibles
          desde la interfaz de la aplicación.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Identificar el parámetro vulnerable',
              items: [
                'Acceder al laboratorio y ubicar el filtro de categoría o parámetro que altera los resultados de la consulta.',
                'Confirmar que dicho parámetro se utiliza en una consulta SQL del lado del servidor.',
              ],
            },
            {
              title: 'Paso 2: Determinar el número de columnas',
              items: [
                'Realizar pruebas de enumeración para conocer cuántas columnas devuelve la consulta original.',
                'Confirmar la estructura correcta antes de aplicar payloads UNION más complejos.',
              ],
            },
            {
              title: 'Paso 3: Confirmar columnas visibles o útiles',
              items: [
                'Probar qué columnas aceptan texto y pueden reflejar información en la respuesta.',
                'Identificar cuáles pueden usarse para mostrar resultados de tablas del sistema.',
              ],
            },
            {
              title: 'Paso 4: Enumerar tablas del sistema',
              items: [
                'Consultar vistas de metadatos como information_schema.tables.',
                'Buscar nombres de tablas que sugieran almacenar usuarios o credenciales.',
              ],
            },
            {
              title: 'Paso 5: Enumerar columnas de la tabla objetivo',
              items: [
                'Consultar information_schema.columns para la tabla relevante.',
                'Identificar nombres de columnas asociadas con usuario y contraseña.',
              ],
            },
            {
              title: 'Paso 6: Extraer datos sensibles',
              items: [
                'Construir un payload UNION final para recuperar credenciales desde la tabla identificada.',
                'Verificar en la respuesta que la información sensible se muestra correctamente.',
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
{`' UNION SELECT table_name, NULL FROM information_schema.tables--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Este es un ejemplo de payload inicial de enumeración. Después puedes usar consultas sobre
            <span className="text-[#cc6633]"> information_schema.columns</span> y finalmente sobre la
            tabla sensible identificada.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload explota una vulnerabilidad SQL Injection basada en
            <span className="text-[#cc6633]"> UNION</span> que permite acceder a las vistas de metadatos
            del sistema, en este caso <span className="text-[#cc6633]">information_schema</span>, disponibles
            en bases de datos no Oracle como MySQL y SQL Server.
            <br /><br />
            Al no utilizar consultas parametrizadas, la aplicación permite que la entrada del usuario
            modifique la estructura lógica de la consulta original, posibilitando la enumeración del
            esquema interno, como nombres de tablas y columnas. Una vez identificada la estructura de
            almacenamiento, el atacante puede construir consultas posteriores para recuperar directamente
            datos sensibles.
            <br /><br />
            Este proceso representa una fase combinada de reconocimiento y explotación, en la que primero
            se descubre la estructura del sistema y luego se accede a la información crítica mediante
            consultas adicionales inyectadas en el mismo contexto de la aplicación.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> exposición de metadatos internos y posible recuperación de credenciales o información sensible.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la consulta puede ser alterada para explorar y consultar tablas no autorizadas.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el impacto directo puede ser moderado, pero la información obtenida facilita ataques posteriores más destructivos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            Se recomienda restringir el acceso al esquema del sistema y utilizar consultas parametrizadas
            en todos los puntos donde la aplicación procese entradas del usuario.
            <br /><br />
            Además, aplicar el principio de privilegios mínimos evita que la aplicación pueda consultar
            metadatos internos como <span className="text-[#cc6633]">information_schema</span>, limitando
            significativamente la capacidad de un atacante para enumerar la estructura de la base de datos
            y extraer información sensible.
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
              src={`${import.meta.env.BASE_URL}images/sqli/lab05-request.png`}
              alt="Lab 5 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado para enumerar el esquema.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab05-payload.png`}
              alt="Lab 5 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando tablas o columnas del sistema.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab05-response.png`}
              alt="Lab 5 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab05-solved.png`}
              alt="Lab 5 laboratorio resuelto"
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

export default Lab5;
import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab8 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-08');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection UNION attack, finding a column containing text</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Finding columns with a useful data type</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-Band – UNION Based</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Identificar qué columna permite mostrar datos tipo texto para poder extraer información útil.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad persiste debido a la construcción dinámica de la consulta SQL sin
          mecanismos de separación entre datos y código. Una vez identificado el número de columnas,
          el atacante puede utilizar la cláusula <span className="text-[#cc6633]">UNION SELECT</span>
          para insertar valores compatibles con la estructura original.
          <br /><br />
          La ausencia de validación permite que la consulta adicional sea ejecutada por el motor de
          base de datos y que su resultado sea integrado en la respuesta de la aplicación. En esta
          fase, el objetivo no es todavía extraer credenciales, sino descubrir qué columna del
          resultado es capaz de reflejar datos tipo texto en la interfaz web.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Determinar el número de columnas',
              items: [
                'Verificar cuántas columnas devuelve la consulta original mediante pruebas previas.',
                "Confirmar la estructura con un payload como: ' UNION SELECT NULL,NULL,NULL--",
              ],
            },
            {
              title: 'Paso 2: Probar compatibilidad de tipos de datos',
              items: [
                "Sustituir uno de los valores NULL por texto, por ejemplo: ' UNION SELECT 'test',NULL,NULL--",
                'Observar si el texto se refleja correctamente en la respuesta de la aplicación.',
              ],
            },
            {
              title: 'Paso 3: Identificar columna útil',
              items: [
                'Repetir el proceso cambiando la posición del valor de texto en cada columna.',
                'Determinar en cuál columna aparece el texto reflejado en la interfaz.',
              ],
            },
            {
              title: 'Paso 4: Confirmar explotación',
              items: [
                'Insertar una cadena aleatoria proporcionada por el laboratorio.',
                'Validar que la columna descubierta puede utilizarse para mostrar información sensible en fases posteriores.',
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
{`' UNION SELECT 'Zi4rv2', NULL, NULL--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Sustituye la cadena <span className="text-[#cc6633]">Zi4rv2</span> por la cadena exacta
            que te haya proporcionado el laboratorio, si fue distinta.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">' UNION SELECT 'Zi4rv2', NULL, NULL--</span>
            <br /><br />
            Este payload combina la consulta legítima con una instrucción
            <span className="text-[#cc6633]"> UNION SELECT</span> cuidadosamente construida para
            coincidir en número y tipo de columnas.
            <br /><br />
            Inicialmente se emplean valores <span className="text-[#cc6633]">NULL</span> para mantener
            compatibilidad estructural con la consulta original. Posteriormente, uno de esos valores
            se sustituye por una cadena de texto, lo que permite identificar qué columna es reflejada
            en la respuesta HTML de la aplicación.
            <br /><br />
            Este procedimiento es fundamental porque permite determinar el punto exacto donde pueden
            mostrarse datos sensibles en fases posteriores de explotación, como nombres de tablas,
            columnas o credenciales.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite preparar la extracción de información sensible al descubrir una columna útil para mostrar texto.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> confirma que el atacante puede alterar la lógica y estructura de la consulta SQL original.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el impacto directo es bajo en esta fase, pero facilita ataques posteriores más peligrosos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La solución principal consiste en implementar consultas preparadas que impidan la ejecución
            de consultas adicionales inyectadas por el usuario. Además, se deben restringir los
            privilegios de la cuenta de base de datos utilizada por la aplicación, limitar la información
            expuesta en las respuestas HTTP y aplicar validaciones estrictas sobre todos los parámetros
            recibidos.
            <br /><br />
            También es recomendable reducir al mínimo los mensajes de error visibles al usuario, ya que
            estos pueden ayudar al atacante a comprender la estructura de la consulta y del motor de base
            de datos.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, selección de categoría,
            payload utilizado, detección de la vulnerabilidad, inserción de la cadena aleatoria y
            confirmación del laboratorio resuelto.
          </p>

          {/* Captura 1 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Selección de categoría de producto / acceso al laboratorio.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab08-acceso.png`}
              alt="Lab 8 acceso o categoría de producto"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Request interceptado en Burp Suite.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab08-request.png`}
              alt="Lab 8 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Payload utilizado para encontrar una columna que acepte texto.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab08-payload.png`}
              alt="Lab 8 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Respuesta vulnerable mostrando el texto reflejado.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab08-response.png`}
              alt="Lab 8 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 5 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab08-solved.png`}
              alt="Lab 8 laboratorio resuelto"
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

export default Lab8;
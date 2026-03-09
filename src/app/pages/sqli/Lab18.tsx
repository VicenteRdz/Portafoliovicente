import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab18 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-18');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection with filter bypass via XML encoding</li>
            <li><span className="text-[#cc6633]">Subtema:</span> SQL injection in different contexts</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> UNION-based SQLi con evasión de WAF/filtros mediante ofuscación</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar una vulnerabilidad de inyección SQL en la función “Stock Check” para recuperar credenciales del usuario administrator e iniciar sesión con ellas.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La aplicación web utiliza una interfaz basada en XML para enviar datos al servidor, pero no
          asegura correctamente el contenido incluido dentro de las etiquetas antes de incorporarlo a
          una consulta SQL. Esto permite que un atacante inyecte instrucciones SQL dentro del campo
          <span className="text-[#cc6633]"> storeId</span> u otro parámetro equivalente.
          <br /><br />
          Además, la aplicación cuenta con un <span className="text-[#cc6633]">WAF</span> o filtro que
          intenta detectar palabras clave típicas de SQL Injection. Sin embargo, al codificar el payload
          con <span className="text-[#cc6633]">Hex Entities</span>, el filtro no reconoce la secuencia
          como una amenaza. Posteriormente, el servidor decodifica el XML antes de procesarlo, por lo que
          el payload malicioso vuelve a su forma original y se ejecuta sobre la base de datos.
          <br /><br />
          Esta combinación de contexto XML más evasión de filtros permite realizar un ataque
          <span className="text-[#cc6633]"> UNION-based</span> y recuperar credenciales desde la tabla
          <span className="text-[#cc6633]"> users</span>.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Configuración del entorno',
              items: [
                'Instalar la extensión Hackvertor desde el BApp Store de Burp Suite.',
                'Habilitar la capacidad de ofuscación y codificación de datos en tiempo real.',
              ],
            },
            {
              title: 'Paso 2: Intercepción del vector vulnerable',
              items: [
                'Capturar la petición POST de la función "Check stock" en el HTTP History.',
                'Enviar la solicitud al Repeater para analizar la estructura XML y localizar el campo vulnerable.',
              ],
            },
            {
              title: 'Paso 3: Identificación del filtro',
              items: [
                'Insertar un payload básico como 1 UNION SELECT NULL dentro de la etiqueta correspondiente.',
                'Observar el mensaje "Attack detected", confirmando la presencia de un WAF o filtro de seguridad.',
              ],
            },
            {
              title: 'Paso 4: Bypass mediante ofuscación',
              items: [
                'Aplicar el tag @hex_entities de Hackvertor al payload.',
                'Codificar el contenido SQL para que el WAF no reconozca directamente las palabras clave maliciosas.',
              ],
            },
            {
              title: 'Paso 5: Extracción de credenciales',
              items: [
                "Ejecutar el comando 1 UNION SELECT username || '~' || password FROM users en forma codificada.",
                'Recuperar en la respuesta del servidor los usuarios y contraseñas concatenados en una sola columna.',
              ],
            },
            {
              title: 'Paso 6: Explotación y resolución',
              items: [
                'Identificar las credenciales del usuario administrator en la respuesta.',
                'Iniciar sesión en la sección "My account" con dichas credenciales para resolver el laboratorio.',
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
          <pre className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-4 text-[#d4a574] font-mono overflow-x-auto whitespace-pre-wrap">
{`<@hex_entities>1 UNION SELECT username || '~' || password FROM users<@/hex_entities>`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">
              &lt;@hex_entities&gt;1 UNION SELECT username || '~' || password FROM users&lt;@/hex_entities&gt;
            </span>
            <br /><br />
            <span className="text-[#cc6633]">1 UNION SELECT</span>: combina la consulta legítima con una
            consulta adicional controlada por el atacante para extraer datos extra desde la base de datos.
            <br /><br />
            <span className="text-[#cc6633]">username || '~' || password</span>: concatena el nombre de
            usuario y la contraseña en una sola columna, separados por <span className="text-[#cc6633]">~</span>,
            para ajustarse a la estructura de la respuesta original.
            <br /><br />
            <span className="text-[#cc6633]">FROM users</span>: indica la tabla que contiene la información
            sensible que se desea extraer.
            <br /><br />
            <span className="text-[#cc6633]">hex_entities</span>: codifica el texto en entidades hexadecimales,
            permitiendo que el payload atraviese el WAF sin ser detectado como una amenaza SQL directa.
            <br /><br />
            El bypass es posible porque el filtro inspecciona la forma codificada, mientras que el servidor
            decodifica el XML antes de enviar el valor a la consulta SQL.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite recuperar credenciales y otros datos sensibles desde la tabla users.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que el atacante puede alterar la lógica SQL y además evadir mecanismos de filtrado.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> la explotación reiterada puede afectar recursos y facilitar compromisos posteriores más severos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La solución principal es el uso de consultas parametrizadas, de manera que el motor de la
            base de datos interprete los valores del XML estrictamente como datos y no como comandos SQL.
            <br /><br />
            También debe implementarse validación estricta del esquema XML en el servidor, así como una
            revisión adecuada de entradas después de su decodificación, ya que un WAF por sí solo no basta
            si el backend procesa el contenido transformado.
            <br /><br />
            Adicionalmente, se recomienda aplicar el principio de mínimo privilegio en la cuenta de base
            de datos y reforzar las políticas de filtrado y monitoreo para detectar patrones de ofuscación.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, payload utilizado,
            respuesta vulnerable y confirmación del laboratorio resuelto.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado de la función “Check stock”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab18-request.png`}
              alt="Lab 18 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload ofuscado con Hex Entities mediante Hackvertor.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab18-payload.png`}
              alt="Lab 18 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando credenciales extraídas.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab18-response.png`}
              alt="Lab 18 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab18-solved.png`}
              alt="Lab 18 laboratorio resuelto"
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

export default Lab18;
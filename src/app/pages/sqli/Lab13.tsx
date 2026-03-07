import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab13 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-13');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Visible error-based SQL injection</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Error-based SQL injection</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Inyección SQL basada en errores visibles</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar una inyección SQL para extraer la contraseña del usuario administrator forzando a la base de datos a revelarla dentro de un mensaje de error detallado.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La aplicación es vulnerable porque no sanitiza la entrada del usuario en la cookie
          <span className="text-[#cc6633]"> TrackingId</span> y, además, está configurada de forma
          insegura para mostrar mensajes de error detallados del motor de base de datos directamente
          en la respuesta HTTP.
          <br /><br />
          Esto permite que un atacante inyecte expresiones SQL diseñadas para provocar errores de
          conversión de tipos. Si el valor extraído por una subconsulta es texto y se fuerza a
          convertirse a entero mediante <span className="text-[#cc6633]">CAST(... AS int)</span>,
          la base de datos devuelve un error que contiene el valor problemático. En este laboratorio,
          esa característica se explota para obtener la contraseña del usuario
          <span className="text-[#cc6633]"> administrator</span>.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Interceptar la petición con TrackingId',
              items: [
                'Navegar por la página principal e interceptar una petición GET / que incluya la cookie TrackingId.',
                'Enviar la solicitud a Repeater o trabajar desde Proxy en Burp Suite.',
              ],
            },
            {
              title: 'Paso 2: Confirmar la vulnerabilidad básica',
              items: [
                "Añadir una comilla simple al final de la cookie: TrackingId=valor'",
                'Observar un mensaje de error detallado que revela la consulta SQL y confirma que la entrada está dentro de una cadena.',
              ],
            },
            {
              title: 'Paso 3: Restaurar la sintaxis con comentario',
              items: [
                "Añadir comentario SQL para anular el resto de la consulta: TrackingId=valor'--",
                'Verificar que el error desaparece y que la sintaxis vuelve a ser válida.',
              ],
            },
            {
              title: 'Paso 4: Probar error de conversión',
              items: [
                "Construir una condición como: TrackingId=valor' AND 1=CAST((SELECT 1) AS int)--",
                'Confirmar que la estructura es válida para usar CAST dentro de una expresión booleana.',
              ],
            },
            {
              title: 'Paso 5: Extraer nombre de usuario',
              items: [
                "Modificar la subconsulta para obtener username: TrackingId=valor' AND 1=CAST((SELECT username FROM users) AS int)--",
                'Si el payload es demasiado largo, eliminar el valor original de TrackingId para ganar espacio.',
              ],
            },
            {
              title: 'Paso 6: Limitar la subconsulta a una fila',
              items: [
                "Corregir el error de múltiples filas usando LIMIT 1.",
                "Ejemplo: TrackingId=' AND 1=CAST((SELECT username FROM users LIMIT 1) AS int)--",
              ],
            },
            {
              title: 'Paso 7: Extraer la contraseña',
              items: [
                "Sustituir la columna username por password: TrackingId=' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--",
                'Analizar la respuesta HTTP y copiar la contraseña revelada en el mensaje de error.',
              ],
            },
            {
              title: 'Paso 8: Iniciar sesión',
              items: [
                'Dirigirse a la sección My account.',
                'Iniciar sesión con el usuario administrator y la contraseña obtenida.',
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
{`TrackingId=' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">TrackingId=' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--</span>
            <br /><br />
            La comilla simple <span className="text-[#cc6633]">'</span> cierra la cadena original de
            la consulta. El operador <span className="text-[#cc6633]">AND</span> concatena una nueva
            condición lógica controlada por el atacante.
            <br /><br />
            La subconsulta <span className="text-[#cc6633]">(SELECT password FROM users LIMIT 1)</span>
            extrae la contraseña de la primera fila de la tabla
            <span className="text-[#cc6633]"> users</span>. Posteriormente,
            <span className="text-[#cc6633]"> CAST(... AS int)</span> intenta forzar a la base de datos
            a convertir ese texto en un número entero.
            <br /><br />
            Como la contraseña no es un entero válido, PostgreSQL genera un error de conversión que
            incluye el valor problemático en el mensaje. Finalmente, el comentario
            <span className="text-[#cc6633]"> --</span> anula el resto de la consulta original del backend.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> expone directamente datos sensibles, como contraseñas, dentro de mensajes de error visibles.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la consulta SQL puede ser manipulada mediante entradas externas no confiables.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> errores repetidos y consultas maliciosas pueden degradar el servicio y facilitar explotación posterior.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La mitigación principal es la parametrización de consultas, evitando que la entrada del
            usuario altere la estructura sintáctica del SQL.
            <br /><br />
            Además, para este tipo específico de ataque, es fundamental la supresión de errores
            detallados en entornos de producción. Los mensajes internos del motor de base de datos
            nunca deben devolverse al cliente. También deben aplicarse validaciones de entrada,
            manejo centralizado de excepciones y principio de mínimo privilegio en la cuenta de
            base de datos usada por la aplicación.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, confirmación de tabla
            users, obtención de la contraseña, payload utilizado, respuesta vulnerable y confirmación
            del laboratorio resuelto.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab13-request.png`}
              alt="Lab 13 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Confirmación de que existe la tabla users.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab13-users-table.png`}
              alt="Lab 13 tabla users"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Obtención de la contraseña a través del error visible.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab13-password.png`}
              alt="Lab 13 contraseña obtenida"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Payload utilizado en Repeater.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab13-payload.png`}
              alt="Lab 13 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Respuesta vulnerable mostrando el mensaje de error detallado.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab13-response.png`}
              alt="Lab 13 respuesta vulnerable"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 6. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab13-solved.png`}
              alt="Lab 13 laboratorio resuelto"
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

export default Lab13;
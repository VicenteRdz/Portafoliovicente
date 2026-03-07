import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab12 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-12');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Blind SQL injection with conditional errors</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Error-based SQL injection</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Inyección SQL ciega basada en errores</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar una inyección SQL ciega induciendo errores condicionales para extraer la contraseña del usuario administrator y acceder a su cuenta.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad existe porque la aplicación maneja de forma insegura los errores de la
          base de datos. Si se inyecta una consulta que provoque un error lógico o matemático durante
          su ejecución, por ejemplo una división entre cero, la aplicación no controla la excepción
          y el servidor devuelve un código de estado HTTP 500.
          <br /><br />
          En cambio, si la consulta se ejecuta sin errores, la respuesta del servidor permanece en
          HTTP 200. Esta diferencia en el código de estado funciona como una señal booleana que
          permite inferir información sensible al condicionar el error a la veracidad de una predicción.
          <br /><br />
          En este laboratorio, la cookie <span className="text-[#cc6633]">TrackingId</span> se concatena
          directamente en una consulta SQL sobre Oracle, lo que permite utilizar expresiones condicionales
          con <span className="text-[#cc6633]">CASE WHEN</span> y errores intencionados para extraer la
          contraseña del usuario administrator carácter por carácter.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Interceptar la petición con la cookie TrackingId',
              items: [
                'Interceptar la petición principal que contiene la cookie TrackingId.',
                'Enviar la solicitud a Repeater en Burp Suite para manipularla manualmente.',
              ],
            },
            {
              title: 'Paso 2: Confirmar la vulnerabilidad a inyección',
              items: [
                "Modificar la cookie con una comilla simple: TrackingId=tuCookie'",
                'Observar que el servidor devuelve un error por sintaxis inválida.',
                "Enviar dos comillas: TrackingId=tuCookie''",
                'Verificar que el error desaparece al cerrarse correctamente la sintaxis.',
              ],
            },
            {
              title: 'Paso 3: Determinar el motor de base de datos',
              items: [
                "Enviar: TrackingId=tuCookie'||(SELECT '' FROM dual)||'",
                'Al no producirse error, se infiere que el motor es Oracle, ya que requiere la tabla dual.',
              ],
            },
            {
              title: 'Paso 4: Validar la inyección lógica con error condicional',
              items: [
                "Enviar una expresión CASE WHEN que provoque división entre cero si la condición es verdadera.",
                'Verificar que con una condición verdadera se obtiene HTTP 500 y con una falsa se obtiene HTTP 200.',
              ],
            },
            {
              title: 'Paso 5: Confirmar tabla users y usuario administrator',
              items: [
                'Construir condiciones análogas para confirmar la existencia de la tabla users.',
                'Confirmar después la existencia del usuario administrator en dicha tabla.',
              ],
            },
            {
              title: 'Paso 6: Determinar la longitud de la contraseña',
              items: [
                'Enviar peticiones secuenciales evaluando LENGTH(password)>1, >2, >3, etc.',
                'Determinar la longitud exacta cuando la condición deja de provocar error.',
              ],
            },
            {
              title: 'Paso 7: Extraer la contraseña con Intruder',
              items: [
                'Enviar la petición a Intruder.',
                'Usar SUBSTR(password,1,1) para evaluar el primer carácter y configurar los marcadores de payload.',
                'Cargar una lista simple con caracteres a-z y 0-9.',
                'Identificar el carácter correcto observando qué petición devuelve HTTP 500.',
                'Repetir el proceso para cada posición hasta completar la contraseña.',
              ],
            },
            {
              title: 'Paso 8: Iniciar sesión',
              items: [
                'Ir a My account.',
                'Iniciar sesión con el usuario administrator y la contraseña extraída.',
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
{`TrackingId=tuCookie'||(SELECT CASE WHEN SUBSTR(password,1,1)='a' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">
              TrackingId=tuCookie'||(SELECT CASE WHEN SUBSTR(password,1,1)='a' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
            </span>
            <br /><br />
            El operador <span className="text-[#cc6633]">||</span> actúa como concatenación de cadenas
            en Oracle. La estructura <span className="text-[#cc6633]">CASE WHEN ... THEN ... ELSE ... END</span>
            permite ejecutar una acción distinta dependiendo del resultado de una condición booleana.
            <br /><br />
            La expresión <span className="text-[#cc6633]">SUBSTR(password,1,1)='a'</span> aísla un
            único carácter de la contraseña y comprueba si coincide con el valor propuesto.
            Si la comparación es verdadera, la instrucción
            <span className="text-[#cc6633]"> TO_CHAR(1/0)</span> provoca una división entre cero,
            generando una excepción en Oracle y forzando un HTTP 500.
            <br /><br />
            Si la condición es falsa, el error no ocurre y la aplicación responde normalmente.
            De este modo, cada respuesta del servidor revela si la predicción fue correcta o no,
            permitiendo reconstruir la contraseña completa.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite recuperar credenciales aun cuando la aplicación no muestra resultados SQL directos.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> evidencia que la lógica de consulta puede ser manipulada mediante entradas externas no confiables.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el abuso sistemático de errores puede degradar el servicio y, además, el acceso administrativo obtenido facilita acciones destructivas posteriores.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La mitigación principal consiste en utilizar consultas parametrizadas, de modo que el
            valor de la cookie <span className="text-[#cc6633]">TrackingId</span> se trate exclusivamente
            como dato y nunca como código SQL ejecutable.
            <br /><br />
            Adicionalmente, es fundamental implementar un manejo global de excepciones robusto en el
            backend, evitando que errores internos de la base de datos alteren el estado HTTP devuelto
            al cliente. También deben minimizarse privilegios, validar entradas y monitorear patrones
            de error que puedan sugerir explotación automatizada.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, petición modificada con
            respuesta del servidor, desaparición del error al cerrar comillas, confirmación de Oracle,
            validación del error matemático, confirmación de tabla y usuario, longitud de contraseña,
            primer carácter, payload, último carácter, contraseña completa y confirmación del laboratorio.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-request.png`}
              alt="Lab 12 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Petición modificada enviada a Repeater y respuesta del servidor.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-repeater.png`}
              alt="Lab 12 repeater"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. El error desaparece al cerrar correctamente las comillas en la cookie.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-quotes-fixed.png`}
              alt="Lab 12 cierre de comillas"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de que el motor de base de datos es Oracle.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-oracle.png`}
              alt="Lab 12 motor Oracle"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Validación de inyección lógica mediante error matemático intencionado.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-logic-error.png`}
              alt="Lab 12 error matemático"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 6. Confirmación de tabla users y usuario administrator.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-users-admin.png`}
              alt="Lab 12 tabla y usuario"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 7. Longitud de contraseña confirmada.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-length.png`}
              alt="Lab 12 longitud de contraseña"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 8. Primer carácter de la contraseña extraída.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-first-char.png`}
              alt="Lab 12 primer carácter"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 9. Payload utilizado en Intruder o Repeater.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-payload.png`}
              alt="Lab 12 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 10. Último carácter de la contraseña.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-last-char.png`}
              alt="Lab 12 último carácter"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 11. Contraseña completa recuperada.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-password.png`}
              alt="Lab 12 contraseña completa"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 12. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab12-solved.png`}
              alt="Lab 12 laboratorio resuelto"
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

export default Lab12;
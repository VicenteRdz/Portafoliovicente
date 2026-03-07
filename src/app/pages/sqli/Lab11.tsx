import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab11 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-11');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Blind SQL injection with conditional responses</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Exploiting blind SQL injection by triggering conditional responses</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Inyección ciega booleana</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar una inyección SQL ciega para deducir la contraseña del usuario administrator.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La aplicación utiliza el valor de la cookie <span className="text-[#cc6633]">TrackingId</span>
          dentro de una consulta SQL sin la debida sanitización. Aunque los resultados de la consulta
          no se muestran directamente en pantalla, la aplicación exhibe un comportamiento condicional:
          si la consulta inyectada evalúa como verdadera, el servidor incluye el mensaje
          <span className="text-[#cc6633]"> "Welcome back"</span> en la respuesta HTTP; si evalúa como
          falsa, dicho mensaje desaparece.
          <br /><br />
          Esta diferencia booleana permite inferir información de la base de datos haciendo preguntas
          de sí o no. De esta manera, es posible enumerar tablas, confirmar usuarios, calcular la
          longitud de una contraseña y finalmente extraerla carácter por carácter.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Intercepción de la cookie TrackingId',
              items: [
                'Interceptar la petición de la página principal que contiene la cookie TrackingId.',
                'Enviar la solicitud a Repeater en Burp Suite para modificarla manualmente.',
              ],
            },
            {
              title: 'Paso 2: Verificación de condiciones verdadera y falsa',
              items: [
                "Probar una condición verdadera, por ejemplo: TrackingId=TuCookie' AND '1'='1",
                'Verificar que el mensaje "Welcome back" aparece en la respuesta.',
                "Probar una condición falsa, por ejemplo: TrackingId=TuCookie' AND '1'='2",
                'Confirmar que el mensaje "Welcome back" desaparece.',
              ],
            },
            {
              title: 'Paso 3: Confirmación de tabla y usuario',
              items: [
                "Confirmar la existencia de la tabla users con una subconsulta booleana.",
                "Confirmar la existencia del usuario administrator mediante una condición similar sobre username='administrator'.",
              ],
            },
            {
              title: 'Paso 4: Determinación de la longitud de la contraseña',
              items: [
                'Enviar peticiones iterativas evaluando la longitud con la función LENGTH(password).',
                'Identificar el valor correcto observando cuándo la condición sigue devolviendo "Welcome back".',
              ],
            },
            {
              title: 'Paso 5: Extracción carácter por carácter con Intruder',
              items: [
                'Enviar la petición a Intruder y colocar marcadores de payload sobre el carácter evaluado dentro de SUBSTRING().',
                'Configurar una lista simple con caracteres alfanuméricos (a-z, 0-9).',
                'Usar Grep - Match con la cadena "Welcome back" para identificar la respuesta verdadera.',
                'Repetir el proceso para cada posición hasta completar la contraseña.',
              ],
            },
            {
              title: 'Paso 6: Inicio de sesión',
              items: [
                'Acceder al apartado My account.',
                'Iniciar sesión con el usuario administrator y la contraseña recuperada.',
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
{`TrackingId=TuCookie' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='a`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">
              TrackingId=TuCookie' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='a'
            </span>
            <br /><br />
            La comilla simple <span className="text-[#cc6633]">'</span> cierra la cadena original
            del identificador. El operador <span className="text-[#cc6633]">AND</span> concatena
            la inyección lógica. La subconsulta
            <span className="text-[#cc6633]"> SELECT SUBSTRING(password,1,1)</span> aísla el primer
            carácter de la contraseña del usuario administrator.
            <br /><br />
            Finalmente, la comparación con <span className="text-[#cc6633]">'a'</span> determina si
            el carácter evaluado coincide con el intento. Si la condición es verdadera, el backend
            devuelve el mensaje <span className="text-[#cc6633]">"Welcome back"</span>, lo que permite
            extraer la contraseña carácter por carácter mediante observación de respuestas booleanas.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite recuperar credenciales sin que la aplicación muestre directamente resultados SQL.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la lógica de autenticación y consulta puede ser manipulada mediante entradas externas.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el impacto directo es limitado, pero la extracción de credenciales administrativas puede facilitar acciones destructivas posteriores.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La solución definitiva consiste en implementar consultas parametrizadas
            (<span className="text-[#cc6633]">Prepared Statements</span>) en el código del servidor.
            Esto garantiza que la entrada proporcionada por el usuario, en este caso la cookie
            <span className="text-[#cc6633]"> TrackingId</span>, sea tratada estrictamente como un
            valor de cadena y nunca como código SQL ejecutable.
            <br /><br />
            Además, deben minimizarse los mensajes condicionales observables, aplicar validación de
            entradas, restringir privilegios de la cuenta de base de datos y monitorear patrones de
            acceso que sugieran enumeración automatizada o comportamiento anómalo.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, condición verdadera,
            confirmación de tabla users, confirmación del usuario administrator, longitud de contraseña,
            configuración de Intruder, primer carácter, último carácter, contraseña completa y
            confirmación del laboratorio resuelto.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-request.png`}
              alt="Lab 11 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Inyección SQL con condición verdadera.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-true-condition.png`}
              alt="Lab 11 condición verdadera"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Existencia confirmada de la tabla users.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-users-table.png`}
              alt="Lab 11 tabla users"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Existencia confirmada del usuario administrator.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-admin-user.png`}
              alt="Lab 11 usuario administrator"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Longitud de contraseña confirmada (20 caracteres).
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-length.png`}
              alt="Lab 11 longitud de contraseña"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 6. Payload configurado en Intruder.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-intruder.png`}
              alt="Lab 11 configuración de Intruder"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 7. Primer carácter de la contraseña del administrador.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-first-char.png`}
              alt="Lab 11 primer carácter"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 8. Último carácter de la contraseña del administrador.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-last-char.png`}
              alt="Lab 11 último carácter"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 9. Contraseña completa recuperada.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-password.png`}
              alt="Lab 11 contraseña completa"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 10. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab11-solved.png`}
              alt="Lab 11 laboratorio resuelto"
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

export default Lab11;
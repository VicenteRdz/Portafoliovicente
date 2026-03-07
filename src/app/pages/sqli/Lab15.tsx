import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab15 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-15');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Blind SQL injection with time delays and information retrieval</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Exploiting blind SQL injection by triggering time delays</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Inyección SQL ciega basada en tiempos</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar una vulnerabilidad de inyección SQL basada en tiempos para extraer la contraseña del usuario administrator induciendo retrasos condicionales en el tiempo de respuesta.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          En este caso, la aplicación es completamente ciega: no refleja datos de la base de datos
          en pantalla, no modifica su contenido HTML y tampoco arroja errores HTTP visibles cuando
          algo falla. La vulnerabilidad existe porque el backend ejecuta de forma síncrona las
          consultas inyectadas sobre la base de datos.
          <br /><br />
          Esto permite al atacante utilizar funciones de retardo para convertir el tiempo de respuesta
          del servidor en un canal de inferencia. Si una condición booleana es verdadera, la base de
          datos se detiene durante un intervalo definido; si es falsa, responde inmediatamente. Midiendo
          esos tiempos, es posible confirmar usuarios, calcular la longitud de contraseñas y extraerlas
          carácter por carácter sin necesidad de ver resultados o errores.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Interceptar la petición con TrackingId',
              items: [
                'Interceptar una petición a la página principal que contenga la cookie TrackingId.',
                'Enviar la solicitud a Repeater en Burp Suite para modificarla manualmente.',
              ],
            },
            {
              title: 'Paso 2: Confirmar control sobre el tiempo de respuesta',
              items: [
                "Enviar un payload de prueba como: TrackingId=x'%3BSELECT+CASE+WHEN+(1=1)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END--",
                'Verificar que el tiempo de respuesta supera aproximadamente los 10 segundos.',
                "Cambiar la condición a falsa (1=2) y confirmar que la respuesta vuelve a ser inmediata.",
              ],
            },
            {
              title: 'Paso 3: Confirmar existencia del usuario administrador',
              items: [
                "Inyectar una condición sobre username='administrator'.",
                'Observar un retraso de 10 segundos para confirmar que el usuario existe en la tabla users.',
              ],
            },
            {
              title: 'Paso 4: Determinar la longitud de la contraseña',
              items: [
                'Probar sucesivamente condiciones como LENGTH(password)>1, >2, >3, etc.',
                'Encontrar la longitud exacta cuando la aplicación deja de demorar 10 segundos.',
              ],
            },
            {
              title: 'Paso 5: Automatizar la extracción con Intruder',
              items: [
                'Enviar la petición a Intruder.',
                'Configurar marcadores de payload alrededor del carácter a evaluar dentro de SUBSTRING(password,1,1).',
                'Cargar una lista simple con caracteres a-z y 0-9.',
              ],
            },
            {
              title: 'Paso 6: Configurar Intruder en un solo hilo',
              items: [
                'En la pestaña Resource pool, fijar Maximum concurrent requests en 1.',
                'Evitar traslapes de tiempos de respuesta que puedan corromper la interpretación de resultados.',
              ],
            },
            {
              title: 'Paso 7: Extraer la contraseña completa',
              items: [
                'Lanzar el ataque y revisar la columna de tiempo de respuesta.',
                'Identificar el carácter correcto en cada posición por el retardo de aproximadamente 10 segundos.',
                'Repetir el proceso incrementando la posición del SUBSTRING hasta reconstruir los 20 caracteres.',
              ],
            },
            {
              title: 'Paso 8: Iniciar sesión',
              items: [
                'Ir a My account.',
                'Autenticarse con el usuario administrator y la contraseña recopilada.',
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
{`TrackingId=x'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='a')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado fue:
            <br /><br />
            <span className="text-[#cc6633]">
              TrackingId=x'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='a')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--
            </span>
            <br /><br />
            <span className="text-[#cc6633]">x'</span> cierra la cadena original de la consulta SQL vulnerable.
            <br /><br />
            <span className="text-[#cc6633]">%3B</span> es la codificación URL del punto y coma (;), que
            en PostgreSQL permite el uso de consultas apiladas, terminando la consulta original y comenzando
            una nueva.
            <br /><br />
            La estructura <span className="text-[#cc6633]">SELECT CASE WHEN ... THEN pg_sleep(10) ELSE pg_sleep(0) END</span>
            define una condición temporal: si la expresión interna es verdadera, la base de datos pausa
            la ejecución durante 10 segundos; si es falsa, responde sin retraso.
            <br /><br />
            La condición <span className="text-[#cc6633]">SUBSTRING(password,1,1)='a'</span> aísla un
            único carácter de la contraseña real y lo compara con el intento actual.
            <br /><br />
            Finalmente, <span className="text-[#cc6633]">--</span> comenta cualquier código residual del
            backend. Midiendo el tiempo de respuesta, el atacante puede inferir cada carácter de la contraseña.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite extraer credenciales aunque la aplicación no muestre datos ni errores visibles.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> confirma que la lógica SQL puede ser controlada por entrada externa inyectada.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> el uso repetido de funciones de retardo puede degradar el servicio y generar una carga innecesaria sobre la base de datos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La solución principal consiste en aplicar consultas parametrizadas en todo el código que
            interactúe con la base de datos, asegurando que la entrada del usuario se evalúe estrictamente
            como dato y no como comando SQL.
            <br /><br />
            Como defensa en profundidad, también se debe deshabilitar la ejecución de consultas apiladas
            en los controladores de conexión o en la capa de acceso a datos, evitando que un atacante
            pueda inyectar un segundo comando separado por punto y coma.
            <br /><br />
            Además, resulta recomendable limitar privilegios, monitorear patrones de latencia anómalos
            y aplicar controles de automatización o rate limiting para dificultar este tipo de explotación.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, payload de prueba,
            condición falsa con respuesta rápida, confirmación del usuario administrator, longitud
            de la contraseña, primer carácter, payload final, último carácter, contraseña completa
            y confirmación del laboratorio resuelto.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-request.png`}
              alt="Lab 15 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload de prueba y tiempo de respuesta aproximado de 10 segundos.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-delay-test.png`}
              alt="Lab 15 payload de prueba"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Condición falsa con respuesta rápida.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-false-condition.png`}
              alt="Lab 15 condición falsa"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de existencia de tabla users y usuario administrator.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-admin-confirm.png`}
              alt="Lab 15 usuario administrator"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Confirmación de longitud de la contraseña.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-length.png`}
              alt="Lab 15 longitud de contraseña"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 6. Primer carácter de la contraseña.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-first-char.png`}
              alt="Lab 15 primer carácter"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 7. Payload utilizado en Intruder o Repeater.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-payload.png`}
              alt="Lab 15 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 8. Último carácter de la contraseña.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-last-char.png`}
              alt="Lab 15 último carácter"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 9. Contraseña completa recuperada.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-password.png`}
              alt="Lab 15 contraseña completa"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 10. Confirmación de “Lab Solved”.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab15-solved.png`}
              alt="Lab 15 laboratorio resuelto"
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

export default Lab15;
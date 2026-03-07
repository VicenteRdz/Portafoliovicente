import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab2 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-02');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection vulnerability allowing login bypass</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Subverting application logic</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Apprentice</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> SQL Injection clásica (Bypass de autenticación)</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Evitar el mecanismo de autenticación e iniciar sesión como usuario administrador sin conocer la contraseña.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad se produce porque la consulta de autenticación es construida concatenando
          directamente los valores introducidos en los campos de usuario y contraseña dentro de la
          cláusula <span className="text-[#cc6633]">WHERE</span>. Esta práctica permite que la entrada
          del usuario modifique la evaluación lógica de la expresión booleana utilizada para validar
          credenciales.
          <br /><br />
          Al no emplearse consultas preparadas ni validación adecuada, la aplicación queda expuesta
          a manipulaciones que pueden alterar completamente el flujo de autenticación. En este caso,
          la debilidad permite suplantar la identidad de un usuario privilegiado sin conocer su
          contraseña real.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Acceso al formulario de autenticación',
              items: [
                'Acceder a la página de login del laboratorio.',
                'Identificar los campos de usuario y contraseña disponibles para el inicio de sesión.',
              ],
            },
            {
              title: 'Paso 2: Intercepción de la solicitud',
              items: [
                'Interceptar la petición POST utilizando Burp Suite.',
                'Identificar los parámetros username y password enviados al servidor.',
              ],
            },
            {
              title: 'Paso 3: Inserción del payload',
              items: [
                "En el campo username insertar el payload: administrator'--",
                'Mantener cualquier valor en el campo password o dejarlo irrelevante según el laboratorio.',
              ],
            },
            {
              title: 'Paso 4: Envío y explotación',
              items: [
                'Enviar la petición modificada al servidor.',
                'Observar que el acceso es concedido sin necesidad de proporcionar credenciales válidas.',
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
{`administrator'--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload empleado introduce una manipulación directa sobre la lógica de la consulta
            de autenticación. Al cerrar la cadena original con una comilla simple, se altera el valor
            esperado por la aplicación en el campo de usuario.
            <br /><br />
            Posteriormente, el uso del comentario SQL <span className="text-[#cc6633]">--</span>
            hace que el resto de la consulta, incluyendo la validación de la contraseña, sea ignorado
            por el motor de base de datos. Como resultado, la consulta se procesa únicamente con el
            nombre de usuario administrador, explotando la lógica booleana del proceso de autenticación
            y permitiendo el acceso sin credenciales válidas.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> acceso no autorizado a información restringida del usuario administrador.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> posibilidad de modificar datos o configuraciones asociadas a una cuenta privilegiada.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> un atacante autenticado podría afectar recursos o servicios internos dependiendo de los privilegios obtenidos.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La prevención exige el uso de consultas preparadas que impidan que los datos del usuario
            sean interpretados como código SQL ejecutable. Además, las contraseñas deben almacenarse
            utilizando algoritmos de hash seguros y nunca en texto plano.
            <br /><br />
            También es recomendable implementar controles adicionales como limitación de intentos de
            acceso, monitoreo de actividad sospechosa y validación estricta de entradas para reforzar
            la seguridad del proceso de autenticación.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al formulario de login, request interceptado,
            inserción del payload y confirmación del acceso concedido.
          </p>

          {/* Captura 1 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Formulario de login del laboratorio.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab02-login.png`}
              alt="Lab 2 formulario de login"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Request interceptado en Burp Suite.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab02-request.png`}
              alt="Lab 2 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Inserción del payload en el parámetro username.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab02-payload.png`}
              alt="Lab 2 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación del acceso concedido / laboratorio resuelto.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab02-solved.png`}
              alt="Lab 2 laboratorio resuelto"
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

export default Lab2;
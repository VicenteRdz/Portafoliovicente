import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab1 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-01');
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
            <li><span className="text-[#cc6633]">Nombre:</span> SQL injection vulnerability in WHERE clause allowing retrieval of hidden data</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Apprentice</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> SQL Injection clásica en cláusula WHERE</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar la vulnerabilidad en el filtro de categorías de productos para recuperar datos ocultos.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La vulnerabilidad consiste en la concatenación insegura de parámetros dentro de la cláusula{' '}
          <span className="text-[#cc6633]">WHERE</span> de una consulta SQL, lo que permite a un atacante
          manipular la lógica de filtrado y acceder a información oculta. En este laboratorio, la
          aplicación construye dinámicamente la consulta utilizando directamente la entrada del usuario,
          sin validación ni uso de parámetros preparados.
          <br /><br />
          La debilidad se debe a la falta de parametrización y validación de entradas, lo que convierte
          la consulta en un vector de ataque de inyección SQL. El impacto directo es la exposición de
          datos restringidos y la posibilidad de escalar el ataque hacia escenarios más graves, como
          la extracción de credenciales o la manipulación de la base de datos.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Acceso inicial al laboratorio',
              items: [
                'Ingresar al laboratorio en PortSwigger Web Security Academy.',
                'Identificar la interfaz donde se muestran categorías de productos.',
              ],
            },
            {
              title: 'Paso 2: Selección de categoría vulnerable',
              items: [
                'Seleccionar una categoría de productos, en este caso Gifts.',
                'Observar que la aplicación utiliza el parámetro category para filtrar resultados.',
              ],
            },
            {
              title: 'Paso 3: Intercepción de la solicitud',
              items: [
                'Interceptar la petición HTTP utilizando Burp Suite.',
                'Identificar el parámetro vulnerable: category.',
              ],
            },
            {
              title: 'Paso 4: Inyección del payload',
              items: [
                "Modificar el valor del parámetro por el payload: Gifts' OR 1=1--",
                'Enviar la petición modificada al servidor.',
              ],
            },
            {
              title: 'Paso 5: Confirmación de la vulnerabilidad',
              items: [
                'Observar que se muestran todos los productos.',
                'Confirmar que también se recuperan productos ocultos o no visibles originalmente.',
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
{`Gifts' OR 1=1--`}
          </pre>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utilizado funciona cerrando la cadena original dentro de la consulta SQL mediante
            una comilla simple, lo que permite salir del contexto previsto por el desarrollador.
            Posteriormente, se introduce una condición lógica siempre verdadera utilizando el operador{' '}
            <span className="text-[#cc6633]">OR</span> junto con una expresión booleana que se evalúa
            como verdadera en cualquier circunstancia.
            <br /><br />
            Finalmente, el uso del comentario SQL impide que el resto de la instrucción original sea
            procesado por el motor de base de datos. Esta combinación altera completamente la lógica
            de la cláusula <span className="text-[#cc6633]">WHERE</span>, forzando al sistema a devolver
            todos los registros sin respetar las restricciones definidas originalmente en la aplicación.
          </div>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La prevención efectiva requiere la implementación de consultas parametrizadas que separen
            estrictamente el código SQL de los datos proporcionados por el usuario. Asimismo, es
            fundamental aplicar validación de entradas del lado servidor, evitar la exposición de
            errores detallados y configurar la base de datos bajo el principio de mínimo privilegio.
            Estas medidas reducen significativamente la posibilidad de manipulación lógica de las
            consultas y limitan el impacto en caso de explotación.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al acceso al laboratorio, selección de categoría,
            request interceptado, payload utilizado y confirmación del laboratorio resuelto.
          </p>

          {/* Captura 1 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Acceso inicial al laboratorio.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab01-acceso.png`}
              alt="Lab 1 acceso al laboratorio"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 2 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Selección de la categoría Gifts.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab01-gifts.png`}
              alt="Lab 1 categoría Gifts"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 3 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Request interceptado en Burp Suite.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab01-request.png`}
              alt="Lab 1 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 4 */}
          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Payload utilizado en el parámetro vulnerable.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab01-payload.png`}
              alt="Lab 1 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          {/* Captura 5 */}
          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 5. Confirmación del laboratorio resuelto.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab01-solved.png`}
              alt="Lab 1 laboratorio resuelto"
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

export default Lab1;
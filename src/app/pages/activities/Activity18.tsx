import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity18 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-18');
  if (!activity) return <div>Actividad no encontrada</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${activity.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/actividades"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice de actividades
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {activity.title}
        </h1>

        {/* Botón PDF */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Descargar PDF
          </a>
        </div>

        {/* 1. Introducción */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Introducción</h3>
          <div className="intro text-[#d4a574]/85 font-mono leading-relaxed">
            La actividad analiza un escenario de intrusión utilizando el Modelo Diamante
            de Análisis de Intrusiones y la metodología Cyber Kill Chain. Estas herramientas
            permiten estructurar eventos de ataque, identificar relaciones entre elementos
            del incidente y comprender la progresión de una campaña maliciosa dentro de
            una infraestructura corporativa.
            <br /><br />
            El análisis se enfoca en un caso donde se detecta comportamiento anómalo,
            ejecución de malware, comunicación con infraestructura de Command and Control
            y posible movimiento lateral hacia otras víctimas internas. A partir de ello se
            clasifican los componentes del ataque y se correlacionan con las fases de la
            cadena de eliminación cibernética.
          </div>
        </div>

        {/* 2. Objetivos */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">2. Objetivos</h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5 mb-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Objetivo general
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              Aplicar el Modelo Diamante del Análisis de Intrusiones para identificar,
              estructurar y correlacionar eventos de ciberataques, relacionándolos con la
              Cyber Kill Chain para comprender el comportamiento del adversario.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Objetivos específicos
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              <li>Identificar los elementos del modelo: adversario, capacidad, infraestructura y víctima.</li>
              <li>Analizar un incidente realista y descomponerlo en eventos de intrusión.</li>
              <li>Relacionar los eventos con fases de la Cyber Kill Chain.</li>
              <li>Detectar patrones de ataque y evidencia de movimiento lateral.</li>
            </ul>
          </div>
        </div>

        {/* 3. Marco teórico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">3. Marco teórico</h3>

          <div className="space-y-6">
            {[
              {
                title: 'Incidente de ciberseguridad',
                content:
                  'Un incidente de ciberseguridad es cualquier evento que compromete o amenaza la confidencialidad, integridad o disponibilidad de la información y los sistemas tecnológicos de una organización.'
              },
              {
                title: 'Modelo Diamante',
                content:
                  'El Modelo Diamante es una metodología que representa un evento de intrusión mediante cuatro componentes: adversario, capacidad, infraestructura y víctima. Su utilidad principal es correlacionar evidencias y comprender cómo interactúan los elementos de un ataque.'
              },
              {
                title: 'Cyber Kill Chain',
                content:
                  'La Cyber Kill Chain describe las fases de un ataque cibernético desde el reconocimiento inicial hasta las acciones sobre objetivos. Permite identificar en qué punto se encuentra un ataque y cómo puede ser interrumpido.'
              },
              {
                title: 'Análisis de amenazas',
                content:
                  'El análisis de amenazas permite identificar patrones de comportamiento del atacante, recursos utilizados, sistemas comprometidos y relaciones entre eventos para apoyar la respuesta ante incidentes.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Elementos del Modelo Diamante */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            4. Elementos del Modelo Diamante
          </h3>

          <div className="space-y-6">
            {[
              {
                title: 'Adversario',
                content:
                  'Es el actor responsable de realizar la intrusión o actividad maliciosa. Puede tratarse de un grupo APT, ciberdelincuentes, hacktivistas, amenazas internas o actores patrocinados.'
              },
              {
                title: 'Capacidad',
                content:
                  'Representa las herramientas, técnicas y recursos utilizados por el adversario, como malware, exploits, phishing, herramientas de acceso remoto, persistencia y movimiento lateral.'
              },
              {
                title: 'Infraestructura',
                content:
                  'Corresponde a los recursos tecnológicos usados por el atacante, como servidores C2, dominios maliciosos, direcciones IP externas, servicios VPS o redes comprometidas.'
              },
              {
                title: 'Víctima',
                content:
                  'Es el usuario, equipo, servidor u organización afectada por la intrusión. Puede existir una víctima primaria inicial y víctimas secundarias comprometidas mediante movimiento lateral.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Caso práctico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">5. Caso práctico</h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5 mb-6">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Análisis del evento
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              Durante actividades de monitoreo de seguridad se detectó comportamiento
              anómalo en un equipo de la red corporativa. El análisis inicial identificó
              malware ejecutándose en el sistema comprometido, comunicación con dominios
              asociados a infraestructura C2 y conexiones salientes desde varios hosts
              internos hacia direcciones IP externas. La evidencia sugiere un compromiso
              inicial y posible movimiento lateral dentro de la organización.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Marca de tiempo',
                content:
                  'El evento fue detectado durante actividades de monitoreo y análisis de tráfico de red corporativo.'
              },
              {
                title: 'Fase',
                content:
                  'Comando y Control (C2), con evidencia posterior de movimiento lateral dentro de la red interna.'
              },
              {
                title: 'Resultado',
                content:
                  'Se identificó comunicación entre múltiples hosts internos y dominios externos asociados a infraestructura maliciosa.'
              },
              {
                title: 'Dirección',
                content:
                  'Los equipos comprometidos establecieron conexiones salientes hacia direcciones IP externas controladas por el atacante.'
              },
              {
                title: 'Metodología',
                content:
                  'Uso de phishing dirigido, ejecución de malware y técnicas de pivoting para expandir el compromiso dentro de la red corporativa.'
              },
              {
                title: 'Recursos',
                content:
                  'Malware, dominios C2, direcciones IP externas, registros de logs, consultas WHOIS y tráfico de red monitoreado.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Preguntas de análisis */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            6. Análisis del incidente
          </h3>

          <div className="space-y-6">
            {[
              {
                question: '¿Quién es el adversario?',
                answer:
                  'El adversario identificado corresponde a una Amenaza Persistente Avanzada, posiblemente un grupo organizado con motivación de espionaje o robo de información.'
              },
              {
                question: '¿Cuál es la capacidad utilizada?',
                answer:
                  'La capacidad inicial fue una campaña de phishing dirigida. Posteriormente se ejecutó malware en el sistema comprometido, con capacidades de persistencia, comunicación C2 y movimiento lateral.'
              },
              {
                question: '¿Qué infraestructura se emplea?',
                answer:
                  'El atacante utiliza dominios externos asociados a servidores de Command and Control, direcciones IP externas y recursos tecnológicos para mantener comunicación remota con los hosts comprometidos.'
              },
              {
                question: '¿Quién es la víctima primaria?',
                answer:
                  'La víctima primaria es un usuario de la red corporativa con privilegios administrativos, cuyo equipo fue comprometido tras interactuar con el correo malicioso.'
              },
              {
                question: '¿Existe evidencia de movimiento lateral?',
                answer:
                  'Sí. La evidencia muestra conexiones salientes desde varios hosts internos y uso del primer equipo comprometido como punto intermedio para alcanzar una segunda víctima dentro de la red.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.question}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Relación con Cyber Kill Chain */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            7. Relación con la Cyber Kill Chain
          </h3>

          <div className="space-y-6">
            {[
              {
                event: 'Envío de correo de phishing',
                phase: 'Entrega',
                description:
                  'El atacante envía un correo dirigido a un usuario con privilegios administrativos para introducir el vector de ataque en la red.'
              },
              {
                event: 'Ejecución de malware en el host',
                phase: 'Explotación / Instalación',
                description:
                  'El usuario interactúa con el archivo malicioso, permitiendo que el código se ejecute e instale persistencia en el sistema.'
              },
              {
                event: 'Detección de comportamiento anómalo',
                phase: 'Detección transversal',
                description:
                  'Los sistemas de monitoreo identifican procesos no autorizados ejecutándose en memoria.'
              },
              {
                event: 'Conexión a dominios externos C2',
                phase: 'Comando y Control',
                description:
                  'El malware establece conexiones salientes hacia direcciones IP externas para recibir instrucciones del adversario.'
              },
              {
                event: 'Acceso a segunda víctima',
                phase: 'Acciones sobre objetivos',
                description:
                  'El primer host comprometido es utilizado como proxy para realizar movimiento lateral y comprometer recursos adicionales.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.event}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  <span className="text-[#cc6633]">Fase:</span> {item.phase}
                  <br />
                  <span className="text-[#cc6633]">Descripción:</span> {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Hilos de actividad */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            8. Hilos de actividad
          </h3>

          <div className="space-y-6">
            {[
              {
                title: 'Hilo 1 - Víctima 1',
                content:
                  'Representa el vector de acceso inicial y el compromiso de la víctima primaria. El ataque inicia con phishing dirigido hacia un usuario con privilegios administrativos, logrando la ejecución de malware y comunicación con servidores C2.'
              },
              {
                title: 'Hilo 2 - Víctima 2',
                content:
                  'Representa la expansión del ataque dentro de la red corporativa. A partir del acceso obtenido en el primer equipo, el adversario identifica y compromete una segunda víctima interna.'
              },
              {
                title: 'Relación entre ambos hilos',
                content:
                  'La relación se fundamenta en la técnica de pivoting. El atacante utiliza el primer host comprometido como punto intermedio o proxy para moverse lateralmente hacia otros sistemas internos y evadir controles perimetrales.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Conclusión */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">9. Conclusión</h3>
          <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
            El análisis mediante el Modelo Diamante y la Cyber Kill Chain permitió
            comprender de forma estructurada el comportamiento del adversario y la
            evolución del incidente dentro de la infraestructura corporativa.
            <br /><br />
            La correlación de eventos evidenció cómo un ataque iniciado mediante
            phishing puede evolucionar hacia un compromiso más amplio mediante malware,
            comunicación C2, persistencia y movimiento lateral. Además, el análisis de
            hilos de actividad permitió identificar la relación entre víctimas y el uso de
            pivoting para ampliar el alcance del ataque.
            <br /><br />
            Finalmente, esta actividad refuerza la importancia de utilizar modelos de
            inteligencia y análisis de amenazas para investigar incidentes, identificar
            patrones de ataque y tomar decisiones orientadas a proteger los activos
            organizacionales.
          </p>
        </div>
        {/* Navegación inferior */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/actividades"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activity18;
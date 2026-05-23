import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity16 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-16');
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
            La actividad aborda el análisis de dilemas éticos dentro del campo de la
            ciberseguridad, considerando que el trabajo de un especialista no se limita
            únicamente a la aplicación de herramientas técnicas, sino también a la toma de
            decisiones responsables frente a situaciones complejas.
            <br /><br />
            En el documento se analizan escenarios donde las capacidades técnicas pueden
            entrar en conflicto con principios como la privacidad, la confidencialidad, los
            derechos individuales, la legalidad y la responsabilidad profesional. Para ello,
            se aplican distintos enfoques éticos como el utilitarista, el enfoque de derechos
            y el enfoque del bien común.
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
              Evaluar la capacidad de análisis y toma de decisiones éticas en escenarios
              reales de ciberseguridad, considerando marcos éticos, legales y
              organizacionales.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <h4 className="text-md font-bold text-[#d4a574] mb-2">
              Objetivos específicos
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              <li>Identificar dilemas éticos en operaciones de ciberseguridad.</li>
              <li>Aplicar distintos enfoques éticos al análisis de incidentes.</li>
              <li>Relacionar decisiones profesionales con principios de ética informática.</li>
              <li>Clasificar los tipos de delitos cibernéticos involucrados.</li>
              <li>Justificar decisiones utilizando criterios éticos y profesionales.</li>
            </ul>
          </div>
        </div>

        {/* 3. Enfoques éticos */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">3. Enfoques éticos</h3>

          <div className="space-y-6">
            {[
              {
                title: 'Ética utilitarista',
                content:
                  'Este enfoque considera correcta una acción cuando produce el mayor beneficio posible para la mayoría y reduce los daños. En ciberseguridad, implica priorizar procedimientos que protejan a usuarios, organizaciones y sistemas por encima de intereses individuales.'
              },
              {
                title: 'Enfoque en derechos',
                content:
                  'Este enfoque sostiene que las personas y organizaciones tienen derecho a la privacidad, confidencialidad y protección de su información. Bajo esta perspectiva, una acción no autorizada es incorrecta aunque parezca estar justificada por motivos de seguridad.'
              },
              {
                title: 'Enfoque en el bien común',
                content:
                  'Este enfoque plantea que la ciberseguridad debe contribuir a un entorno digital seguro, transparente y confiable. Las decisiones profesionales deben proteger la estabilidad de la organización y respetar los derechos de todos los involucrados.'
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

        {/* 4. Principios de ética informática */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            4. Principios de ética informática aplicables
          </h3>

          <div className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono text-[#d4a574]/75 leading-relaxed">
              <li>No utilizar una computadora para dañar a otras personas.</li>
              <li>No interferir con el trabajo informático de otras personas.</li>
              <li>No acceder a archivos o información privada sin autorización.</li>
              <li>No utilizar recursos informáticos para cometer actos ilegales.</li>
              <li>No utilizar privilegios tecnológicos de manera indebida.</li>
              <li>Respetar la privacidad y confidencialidad de la información.</li>
              <li>Utilizar los sistemas informáticos con responsabilidad y honestidad.</li>
              <li>Considerar las consecuencias sociales, humanas y organizacionales de las acciones tecnológicas.</li>
            </ul>
          </div>
        </div>

        {/* 5. Escenarios analizados */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            5. Escenarios de ciberseguridad analizados
          </h3>

          <div className="space-y-6">
            {[
              {
                title: 'Escenario 01: Acceso no autorizado interno',
                conflict:
                  'Durante una revisión de logs se detecta que un integrante del área de ciberseguridad accedió sin autorización a los correos privados del director general con el argumento de buscar posibles fugas de información.',
                analysis:
                  'El conflicto ético se centra en el abuso de privilegios internos y la violación de la privacidad. Aunque la intención aparente era proteger a la organización, la acción se realizó fuera de los procedimientos autorizados.',
                resolution:
                  'La actuación correcta consiste en documentar el incidente, preservar evidencia, reportarlo mediante canales internos y reforzar controles de acceso y autorización.'
              },
              {
                title: 'Escenario 02: Vulnerabilidad crítica no reportada',
                conflict:
                  'Durante un pentest se identifica una vulnerabilidad crítica en un sistema financiero que permitiría extraer dinero, pero el contrato formal aún no ha sido firmado.',
                analysis:
                  'El dilema surge entre aprovechar la vulnerabilidad para beneficio personal o actuar conforme a principios éticos. Explotarla implicaría fraude informático, daño económico y pérdida de confianza profesional.',
                resolution:
                  'La decisión correcta es documentar técnicamente la vulnerabilidad, reportarla de manera responsable y abstenerse de cualquier explotación fuera del alcance autorizado.'
              },
              {
                title: 'Escenario 03: Uso de herramientas OSINT',
                conflict:
                  'Durante una investigación de fraude se obtiene información personal de una persona mediante fuentes abiertas y un superior solicita usarla para presionarla psicológicamente.',
                analysis:
                  'Aunque la información provenga de fuentes públicas, usarla para intimidar vulnera principios de privacidad, dignidad y responsabilidad profesional. La tecnología se convierte en una herramienta de acoso o extorsión.',
                resolution:
                  'La respuesta ética es rechazar la orden, entregar únicamente un reporte técnico objetivo y turnar el caso al área legal o de cumplimiento correspondiente.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-3">
                  {item.title}
                </h4>

                <div className="space-y-3 text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  <p>
                    <span className="text-[#cc6633]">Conflicto ético:</span>{' '}
                    {item.conflict}
                  </p>

                  <p>
                    <span className="text-[#cc6633]">Análisis:</span>{' '}
                    {item.analysis}
                  </p>

                  <p>
                    <span className="text-[#cc6633]">Resolución profesional:</span>{' '}
                    {item.resolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Clasificación de delitos */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            6. Clasificación de delitos cibernéticos
          </h3>

          <div className="space-y-6">
            {[
              {
                title: 'Delito informático',
                content:
                  'Se presenta cuando los sistemas digitales o recursos computacionales son el medio principal para ejecutar la actividad ilícita. En la actividad se identifica en los casos de acceso no autorizado y explotación de vulnerabilidades financieras.'
              },
              {
                title: 'Delito asistido por computadora',
                content:
                  'Ocurre cuando internet o herramientas digitales se utilizan como medio para facilitar un delito común. En el caso OSINT, la tecnología se usa para potenciar acciones de acoso, presión psicológica o extorsión.'
              },
              {
                title: 'Delito incidental',
                content:
                  'Se refiere a situaciones donde los dispositivos tecnológicos no son el objetivo principal ni la herramienta indispensable del delito, pero pueden funcionar como repositorios de evidencia.'
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

        {/* 7. Conclusión */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">7. Conclusión</h3>
          <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
            La actividad permitió comprender que la ciberseguridad no solo implica
            aplicar mecanismos técnicos para proteger sistemas e información, sino
            también tomar decisiones responsables frente a situaciones donde intervienen
            factores éticos, legales y humanos.
            <br /><br />
            El análisis de los escenarios demuestra que muchas acciones técnicamente
            posibles pueden ser incorrectas si se realizan sin autorización, si vulneran
            derechos fundamentales o si se utilizan con fines indebidos. Por ello, el
            profesional de ciberseguridad debe actuar con integridad, responsabilidad y
            apego a procedimientos formales.
            <br /><br />
            Finalmente, esta actividad refuerza que la ética es un componente esencial
            dentro del ejercicio profesional de la seguridad informática, ya que permite
            equilibrar la capacidad técnica con el respeto a la privacidad, la legalidad,
            la confianza organizacional y la protección de las personas.
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

export default Activity16;
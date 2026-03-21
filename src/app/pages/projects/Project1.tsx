import React from 'react';
import { PROJECTS } from '@/app/data/projects';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Project1 = () => {

  const project = PROJECTS.find((p) => p.id === 'proj-01');
  if (!project) return <div>Proyecto no encontrado</div>;

  const youtubeVideoId = "fss-l5ONaaU";

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {project.title}
        </h1>

        <div className="mb-6">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
          <ArrowLeft className="w-4 h-4" />
            Volver a Proyectos
          </Link>
        </div>


        {/* Introducción */}
        <div className="text-[#d4a574]/85 font-mono leading-relaxed mb-8">
        El presente proyecto tiene como objetivo aplicar conocimientos teóricos de seguridad informática en un entorno práctico controlado. Para ello se construyó un laboratorio de pruebas mediante virtualización, utilizando una máquina vulnerable diseñada para el aprendizaje de técnicas de pentesting.
        <br /><br />
        A través de un proceso estructurado de reconocimiento, enumeración y explotación de vulnerabilidades, se analizan los diferentes vectores de ataque presentes en el sistema objetivo. El ejercicio permite comprender cómo un atacante puede identificar debilidades en la configuración de servicios y utilizarlas para comprometer un sistema.
        <br /><br />
        Durante el desarrollo se documenta cada etapa del proceso, incluyendo los comandos utilizados, los resultados obtenidos y las evidencias correspondientes. El proyecto concluye con un walkthrough detallado en video que explica paso a paso el proceso de compromiso del sistema vulnerable.
        </div>


        {/* Video embebido */}
        <div className="mb-10">

          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            Demostración del proyecto
          </h3>

          <div className="aspect-video w-full border border-[#d4a574]/20 bg-black/30">

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Video del proyecto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>


        {/* Botón opcional para abrir en YouTube */}
        <div className="mb-10">

          <a
            href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Ver video en YouTube
          </a>

        </div>


        {/* Descripción técnica */}
        <div className="mb-10">

          <h3 className="text-lg font-bold text-[#cc6633] mb-3">
            Descripción técnica
          </h3>

          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            El desarrollo del proyecto se llevó a cabo en varias fases metodológicas propias de un proceso de pruebas de penetración.
            <br /><br />
            En primer lugar, se preparó el entorno de laboratorio mediante la configuración de una máquina virtual atacante y una máquina objetivo vulnerable obtenida de la plataforma VulnHub. Este entorno aislado permite realizar pruebas de seguridad sin afectar sistemas reales.
            <br /><br />
            Posteriormente se realizó la fase de reconocimiento, donde se identificó la dirección IP de la máquina objetivo dentro de la red virtual. Una vez localizada, se procedió a ejecutar escaneos de red para identificar puertos abiertos y servicios activos utilizando herramientas de análisis como escáneres de puertos.
            <br /><br />
            En la fase de enumeración, se analizaron los servicios detectados con el fin de identificar posibles vulnerabilidades. Esto incluyó la revisión de versiones de software, configuraciones expuestas y posibles vectores de acceso.
            <br /><br />
            Una vez identificadas las debilidades del sistema, se llevó a cabo la fase de explotación, donde se utilizaron técnicas de ataque para obtener acceso inicial al sistema. Posteriormente se aplicaron métodos de escalamiento de privilegios para obtener control administrativo sobre la máquina comprometida.
            <br /><br />
            Finalmente, todo el proceso fue documentado mediante capturas de pantalla y registros de comandos. Como resultado del proyecto se generó un walkthrough en video donde se explica de manera detallada cada etapa del ataque y las técnicas utilizadas.
          </div>

        </div>


        {/* Referencias */}
        <div className="mb-6">

          <h3 className="text-lg font-bold text-[#cc6633] mb-2">
            Referencias
          </h3>

          <ul className="space-y-2">

            {project.references.map((r, idx) => (
              <li
                key={idx}
                className="text-sm font-mono text-[#d4a574]/75"
              >
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

export default Project1;
import { User, Target, Award, TrendingUp } from 'lucide-react';

export function Profile() {
  return (
    <section className="py-16 sm:py-24 bg-black/95 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#cc6633]"></div>
            <User className="w-5 h-5 text-[#cc6633]" />
            <span className="text-sm font-mono text-[#cc6633] tracking-widest uppercase">Perfil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono text-[#d4a574]">
            Perfil del Estudiante
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Profile Content */}
          <div className="space-y-6">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1a1a1a]/80 to-[#1a1a1a]/40 border border-[#d4a574]/20 backdrop-blur-sm relative">
              {/* Accent corners */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#cc6633]/50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#cc6633]/50"></div>
              
              <div className="relative space-y-4 text-[#d4a574]/80 leading-relaxed">
                <p className="font-mono text-sm sm:text-base">
                  Estudiante de <span className="text-[#cc6633]">Ingeniería en Tecnologías de la Información</span> con 
                  enfoque estratégico en seguridad informática, ciberseguridad y evaluación técnica de sistemas. 
                  Mi formación se orienta al análisis ofensivo y defensivo de infraestructuras digitales, 
                  integrando principios de calidad del software, pruebas técnicas y análisis de vulnerabilidades.
                </p>
                
                <p className="font-mono text-sm sm:text-base">
                  He participado en proyectos y retos técnicos relacionados con hacking ético, pruebas de software 
                  y automatización, trabajando en equipos multidisciplinarios bajo metodologías estructuradas. 
                  Me caracterizo por un <span className="text-[#cc6633]">enfoque analítico</span>, 
                  <span className="text-[#cc6633]"> liderazgo técnico</span> y 
                  <span className="text-[#cc6633]"> toma de decisiones basada en evidencia</span>.
                </p>
                
                <p className="font-mono text-sm sm:text-base">
                  Mis intereses técnicos se centran en la seguridad informática, la ciberseguridad, la investigación 
                  aplicada y el análisis de sistemas, con una proyección clara hacia roles de 
                  <span className="text-[#cc6633]"> Red Team</span> y mejora continua de sistemas críticos. 
                  Este portafolio documenta dicho proceso de formación y consolidación técnica.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Focus Areas */}
          <div className="space-y-6">
            {/* Enfoque Estratégico */}
            <div className="p-6 bg-gradient-to-br from-[#cc6633]/10 to-transparent border-l-4 border-[#cc6633]">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-[#cc6633] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-mono text-[#d4a574] mb-3">Enfoque Estratégico</h3>
                  <ul className="space-y-2 text-sm font-mono text-[#d4a574]/70">
                    <li className="flex items-center gap-2">
                      <span className="text-[#cc6633]">›</span>
                      Seguridad Informática
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#cc6633]">›</span>
                      Ciberseguridad Ofensiva/Defensiva
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#cc6633]">›</span>
                      Evaluación Técnica de Sistemas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Características Técnicas */}
            <div className="p-6 bg-gradient-to-br from-[#d4a574]/10 to-transparent border-l-4 border-[#d4a574]">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-mono text-[#d4a574] mb-3">Características Técnicas</h3>
                  <ul className="space-y-2 text-sm font-mono text-[#d4a574]/70">
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4a574]">›</span>
                      Enfoque Analítico
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4a574]">›</span>
                      Liderazgo Técnico
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4a574]">›</span>
                      Toma de Decisiones Basada en Evidencia
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proyección Profesional */}
            <div className="p-6 bg-gradient-to-br from-[#cc6633]/10 to-transparent border-l-4 border-[#cc6633]">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-[#cc6633] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-mono text-[#d4a574] mb-3">Proyección Profesional</h3>
                  <ul className="space-y-2 text-sm font-mono text-[#d4a574]/70">
                    <li className="flex items-center gap-2">
                      <span className="text-[#cc6633]">›</span>
                      Roles Red Team
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#cc6633]">›</span>
                      Investigación Aplicada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#cc6633]">›</span>
                      Mejora Continua de Sistemas Críticos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline/Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Carrera', value: 'ITI' },
            { label: 'Especialización', value: 'InfoSec' },
            { label: 'Semestre', value: '8vo' },
            { label: 'Enfoque', value: 'Red Team' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-[#1a1a1a]/30 border border-[#d4a574]/10 text-center hover:border-[#cc6633]/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-mono text-[#cc6633] mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm font-mono text-[#d4a574]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"></div>
    </section>
  );
}

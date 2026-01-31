import { FileText, Activity, BookOpen } from 'lucide-react';

export function Presentation() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-black/95 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#cc6633]"></div>
            <FileText className="w-5 h-5 text-[#cc6633]" />
            <span className="text-sm font-mono text-[#cc6633] tracking-widest uppercase">Presentación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono text-[#d4a574]">
            Objetivo del Portafolio
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Description Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 sm:p-8 bg-[#1a1a1a]/30 border border-[#d4a574]/20 backdrop-blur-sm relative overflow-hidden group">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-[#cc6633] to-transparent"></div>
              <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[#cc6633] to-transparent"></div>
              
              <div className="relative space-y-4 text-[#d4a574]/80 leading-relaxed">
                <p className="font-mono text-sm sm:text-base">
                  Este portafolio digital reúne las evidencias de trabajo desarrolladas en la asignatura 
                  <span className="text-[#cc6633]"> CNO V – Seguridad Informática</span>, y tiene como objetivo 
                  mostrar de forma clara y ordenada el proceso de aprendizaje a lo largo del curso.
                </p>
                
                <p className="font-mono text-sm sm:text-base">
                  El contenido del portafolio está enfocado en temas de seguridad informática, como 
                  <span className="text-[#cc6633]"> pruebas de penetración</span>, 
                  <span className="text-[#cc6633]"> análisis de vulnerabilidades</span> y 
                  <span className="text-[#cc6633]"> evaluación básica de sistemas</span>, 
                  combinando fundamentos teóricos con actividades prácticas.
                </p>
                
                <p className="font-mono text-sm sm:text-base">
                  A través de este sitio se documenta la evolución técnica del estudiante, así como la 
                  aplicación progresiva de conceptos de ciberseguridad, permitiendo contar con una evidencia 
                  concreta del trabajo realizado y de las competencias adquiridas durante la materia.
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-[#cc6633]/10 to-transparent border border-[#cc6633]/30 backdrop-blur-sm">
              <Activity className="w-8 h-8 text-[#cc6633] mb-4" />
              <h3 className="text-lg font-mono text-[#d4a574] mb-2">Enfoque Práctico</h3>
              <p className="text-sm font-mono text-[#d4a574]/60">
                Combinación de teoría y práctica en ciberseguridad
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#d4a574]/10 to-transparent border border-[#d4a574]/30 backdrop-blur-sm">
              <BookOpen className="w-8 h-8 text-[#d4a574] mb-4" />
              <h3 className="text-lg font-mono text-[#d4a574] mb-2">Documentación</h3>
              <p className="text-sm font-mono text-[#d4a574]/60">
                Registro ordenado de evidencias y aprendizajes
              </p>
            </div>
          </div>
        </div>

        {/* Tech Focus Tags */}
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            'Pruebas de Penetración',
            'Análisis de Vulnerabilidades',
            'Evaluación de Sistemas',
            'Hacking Ético',
            'Red Team'
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 text-xs sm:text-sm font-mono bg-[#1a1a1a]/50 border border-[#cc6633]/20 text-[#cc6633]/80 hover:border-[#cc6633]/50 hover:bg-[#cc6633]/10 transition-all duration-300"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"></div>
    </section>
  );
}

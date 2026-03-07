import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { HALL_OF_FAME_SECTIONS } from '@/app/data/hallOfFame';

export function HallOfFameIndex() {
  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <Trophy className="w-6 h-6 text-[#cc6633]" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574]">
              Road to Hall of Fame
            </h1>
            <p className="text-sm font-mono text-[#d4a574]/65 mt-2">
              Ruta de aprendizaje técnico-profesional orientada a laboratorios de explotación y análisis de vulnerabilidades.
            </p>
          </div>
        </div>

        {/* Lista de módulos */}
        <div className="space-y-4">
          {HALL_OF_FAME_SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={section.route}
              className="block p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm sm:text-base font-mono text-[#d4a574]">
                    {section.title}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#d4a574]/60 mt-2 leading-relaxed">
                    {section.description}
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-[#cc6633] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
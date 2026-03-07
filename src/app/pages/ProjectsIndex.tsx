import { Link } from 'react-router-dom';
import { ClipboardList, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/app/data/projects';

export function ProjectsIndex() {
  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <ClipboardList className="w-6 h-6 text-[#cc6633]" />
          <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574]">
            Proyectos
          </h1>
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-4">

          {PROJECTS.map((p) => (
            <Link
              key={p.id}
              to={`/proyectos/${p.id}`}
              className="block p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-4">

                <div className="text-sm sm:text-base font-mono text-[#d4a574]">
                  {p.title}
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
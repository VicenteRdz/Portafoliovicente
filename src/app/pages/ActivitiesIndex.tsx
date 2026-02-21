import { Link } from 'react-router-dom';
import { ClipboardList, ArrowRight } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

export function ActivitiesIndex() {
  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...header... */}

        <div className="space-y-4">
          {ACTIVITIES.map((a) => (
            <Link
              key={a.id}
              to={`/actividades/${a.id}`}
              className="block p-5 bg-[#1a1a1a]/40 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm sm:text-base font-mono text-[#d4a574]">{a.title}</div>
                <ArrowRight className="w-5 h-5 text-[#cc6633] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
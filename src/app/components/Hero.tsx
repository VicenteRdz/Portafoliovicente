import { Lock, Terminal, Shield } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
          alt="Cybersecurity background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#0a0a0a]"></div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633]/40 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/40 to-transparent animate-pulse delay-300"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633]/40 to-transparent animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#cc6633]/10 border border-[#cc6633]/30 rounded">
                <Terminal className="w-4 h-4 text-[#cc6633]" />
                <span className="text-xs sm:text-sm font-mono text-[#cc6633] tracking-wider">RED TEAM PORTFOLIO</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono text-[#d4a574] leading-tight">
                Portafolio
                <br />
                <span className="text-[#cc6633]">Académico</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#cc6633] to-transparent"></div>
            </div>

            <p className="text-lg sm:text-xl text-[#d4a574]/80 font-mono max-w-xl">
              CNO V – Seguridad Informática
            </p>

            <div className="space-y-3 text-sm sm:text-base text-[#d4a574]/60 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>Universidad Politécnica de San Luis Potosí</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>Octavo Semestre</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>José Vicente Rodríguez Rivera</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all duration-300 group"
              >
                <span>Explorar Portafolio</span>
                <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-square">
              {/* Central lock icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Lock className="w-32 h-32 text-[#cc6633]/30" strokeWidth={1} />
                  <div className="absolute inset-0 bg-[#cc6633] blur-2xl opacity-20"></div>
                </div>
              </div>

              {/* Orbiting circles */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#cc6633] rounded-full shadow-[0_0_20px_rgba(204,102,51,0.8)]"></div>
              </div>
              <div className="absolute inset-4 border border-[#d4a574]/20 rounded-full"></div>
              <div className="absolute inset-12 border border-[#d4a574]/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-20 border border-[#cc6633]/20 rounded-full"></div>

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#cc6633]"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#cc6633]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#cc6633]"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#cc6633]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="mt-16 sm:mt-24 grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {[
            { icon: Shield, label: 'Seguridad' },
            { icon: Terminal, label: 'Análisis' },
            { icon: Lock, label: 'Protección' }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-[#1a1a1a]/50 border border-[#d4a574]/10 hover:border-[#cc6633]/30 transition-all duration-300 group"
            >
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#cc6633] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-mono text-[#d4a574]/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Shield, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-[#d4a574]/20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-[#cc6633]" />
                <div className="absolute inset-0 bg-[#cc6633] blur-md opacity-50"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-mono text-[#d4a574]">Portafolio Académico</span>
                <span className="text-xs font-mono text-[#cc6633]">Red Team InfoSec</span>
              </div>
            </div>
            <p className="text-xs font-mono text-[#d4a574]/60 leading-relaxed">
              Documentación técnica del proceso de aprendizaje en seguridad informática 
              y ciberseguridad ofensiva.
            </p>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-[#d4a574] uppercase tracking-wider">
              Información Académica
            </h3>
            <div className="space-y-2 text-xs font-mono text-[#d4a574]/60">
              <div className="flex items-start gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>CNO V - Seguridad Informática</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>Universidad Politécnica de San Luis Potosí</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>Octavo Semestre</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#cc6633]">›</span>
                <span>José Vicente Rodríguez Rivera</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-[#d4a574] uppercase tracking-wider">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-2">
              {['Inicio', 'Evidencias', 'Prácticas', 'Documentación', 'Contacto'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-xs font-mono text-[#d4a574]/60 hover:text-[#cc6633] transition-colors duration-300"
                >
                  › {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#d4a574]/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-[#d4a574]/60 hover:text-[#cc6633] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-[#d4a574]/60 hover:text-[#cc6633] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-xs font-mono text-[#d4a574]/60 hover:text-[#cc6633] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4a574]/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#d4a574]/60">
            <div className="flex items-center gap-2">
              <span className="text-[#cc6633]">©</span>
              <span>{currentYear} José Vicente Rodríguez Rivera</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>CNO V - Seguridad Informática</span>
              <span className="text-[#cc6633]">|</span>
              <span>Todos los derechos reservados</span>
            </div>
          </div>

          {/* Academic Note */}
          <div className="mt-4 text-center">
            <p className="text-xs font-mono text-[#d4a574]/40">
              Portafolio académico desarrollado con fines educativos y de documentación técnica
            </p>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-black/50 border border-[#d4a574]/10 text-[#d4a574]/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom decorative corner */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#cc6633]/20"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#cc6633]/20"></div>
    </footer>
  );
}

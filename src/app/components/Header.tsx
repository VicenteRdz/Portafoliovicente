import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#actividades', label: 'Actividades' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#d4a574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Student Info */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#cc6633]" />
              <div className="absolute inset-0 bg-[#cc6633] blur-md opacity-50"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base text-[#d4a574] font-mono tracking-wide">José Vicente Rodríguez Rivera</span>
              <span className="text-xs sm:text-sm text-[#cc6633] font-mono">GearToTheEnd</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-mono text-[#d4a574]/80 hover:text-[#cc6633] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#cc6633] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Course Info - Desktop */}
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-xs text-[#d4a574]/60 font-mono">CNO V - Seguridad Informática</span>
            <span className="text-xs text-[#d4a574]/60 font-mono">Octavo Semestre</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d4a574] hover:text-[#cc6633] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#d4a574]/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono text-[#d4a574]/80 hover:text-[#cc6633] transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#d4a574]/20 flex flex-col gap-1">
                <span className="text-xs text-[#d4a574]/60 font-mono">CNO V - Seguridad Informática</span>
                <span className="text-xs text-[#d4a574]/60 font-mono">Universidad Politécnica de San Luis Potosí</span>
                <span className="text-xs text-[#d4a574]/60 font-mono">Octavo Semestre</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

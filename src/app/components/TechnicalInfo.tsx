import { 
  Code2, 
  Database, 
  Terminal, 
  Github, 
  Globe, 
  Lock,
  Server,
  GitBranch
} from 'lucide-react';

export function TechnicalInfo() {
  const technologies = [
    { icon: Code2, name: 'HTML, CSS, JavaScript', category: 'Frontend' },
    { icon: Terminal, name: 'Python, Java, PHP', category: 'Backend' },
    { icon: Database, name: 'MySQL, SQL', category: 'Database' },
    { icon: Server, name: 'Linux', category: 'OS' }
  ];

  const platforms = [
    { icon: Globe, title: 'Plataforma Web', items: ['Acceso público con HTTPS', 'Compatible con cualquier dispositivo', 'Conexión segura SSL'] },
    { icon: GitBranch, title: 'Control de Versiones', items: ['Git para seguimiento de cambios', 'GitHub como repositorio', 'Documentación de progreso'] }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-black/95 to-[#0a0a0a] relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#cc6633]"></div>
            <Server className="w-5 h-5 text-[#cc6633]" />
            <span className="text-sm font-mono text-[#cc6633] tracking-widest uppercase">Stack Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono text-[#d4a574]">
            Información Técnica Básica
          </h2>
        </div>

        {/* Technologies Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-mono text-[#d4a574] mb-6 flex items-center gap-3">
            <Code2 className="w-5 h-5 text-[#cc6633]" />
            Lenguajes y Tecnologías Utilizadas
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative p-6 bg-[#1a1a1a]/50 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#cc6633]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <tech.icon className="w-10 h-10 text-[#cc6633] group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-[#cc6633] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Category tag */}
                  <div className="inline-block px-2 py-1 mb-3 text-xs font-mono bg-[#cc6633]/20 text-[#cc6633] border border-[#cc6633]/30">
                    {tech.category}
                  </div>
                  
                  {/* Tech name */}
                  <p className="text-sm font-mono text-[#d4a574]/80 leading-relaxed">
                    {tech.name}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#cc6633]/20 group-hover:border-[#cc6633]/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Information */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-gradient-to-br from-[#1a1a1a]/80 to-[#1a1a1a]/40 border border-[#d4a574]/20 relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cc6633] via-[#d4a574] to-transparent"></div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#cc6633]/10 border border-[#cc6633]/30">
                  <platform.icon className="w-6 h-6 text-[#cc6633]" />
                </div>
                <h3 className="text-xl font-mono text-[#d4a574] pt-2">{platform.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {platform.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm font-mono text-[#d4a574]/70">
                    <span className="text-[#cc6633] mt-1 flex-shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="p-6 sm:p-8 bg-[#1a1a1a]/30 border-l-4 border-[#cc6633]">
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-[#cc6633] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-mono text-[#d4a574] mb-4">Seguridad y Despliegue</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-mono text-[#cc6633] mb-3">Hosting & Deployment</h4>
                  <ul className="space-y-2 text-sm font-mono text-[#d4a574]/70">
                    <li className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      GitHub Pages
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Acceso Público
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-[#cc6633] mb-3">Seguridad</h4>
                  <ul className="space-y-2 text-sm font-mono text-[#d4a574]/70">
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      HTTPS / SSL
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Conexión Segura
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {['Git', 'GitHub', 'HTTPS', 'SSL', 'Responsive Design', 'HTML5', 'CSS3', 'JavaScript ES6+'].map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-mono bg-black/50 border border-[#d4a574]/20 text-[#d4a574]/60 hover:border-[#cc6633]/40 hover:text-[#cc6633]/80 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"></div>
    </section>
  );
}

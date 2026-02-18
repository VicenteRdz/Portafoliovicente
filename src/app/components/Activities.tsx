import { FileText, FileDown, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

type Activity = {
  id: string;
  title: string;
  subtitle: string;
  pdfHref: string; // lo subes luego a /public/pdfs/
};

const activities: Activity[] = [
  { id: 'actividad-01', title: 'Actividad 01', subtitle: 'Análisis de un ciberataque real y su impacto empresarial', pdfHref: './pdfs/actividad-01.pdf' },
  { id: 'actividad-02', title: 'Actividad 02', subtitle: 'Servicios de seguridad (X.800 / RFC 4949) y su aplicación', pdfHref: './pdfs/actividad-02.pdf' },
  { id: 'actividad-03', title: 'Actividad 03', subtitle: 'Políticas de filtrado (iptables): interpretación y traducción', pdfHref: './pdfs/actividad-03.pdf' },
  { id: 'actividad-04', title: 'Actividad 04', subtitle: 'Mecanismos de defensa en red y criterios de selección', pdfHref: './pdfs/actividad-04.pdf' },
  { id: 'actividad-05', title: 'Actividad 05', subtitle: 'Comparativo de metodologías de pentesting (OSSTMM, PTES, NIST, OWASP, ISSAF)', pdfHref: './pdfs/actividad-05.pdf' },
  { id: 'actividad-06', title: 'Actividad 06', subtitle: 'Implementación de VPN IPSec: alcance, configuración y validación', pdfHref: './pdfs/actividad-06.pdf' },
];

export function Activities() {
  return (
    <section id="actividades" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-black/95 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#cc6633]" />
            <FileText className="w-5 h-5 text-[#cc6633]" />
            <span className="text-sm font-mono text-[#cc6633] tracking-widest uppercase">Actividades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono text-[#d4a574]">Índice tipo blog</h2>
          <p className="mt-3 text-sm sm:text-base font-mono text-[#d4a574]/60 max-w-3xl">
            A continuación se presentan seis actividades documentadas como artículos web. Cada actividad incluye
            introducción, desarrollo técnico, evidencias multimedia, reflexión y referencias, además de un botón de descarga del PDF.
          </p>
        </div>

        {/* Index cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="block p-6 bg-[#1a1a1a]/40 border border-[#d4a574]/20 hover:border-[#cc6633]/40 transition-all duration-300"
            >
              <div className="text-xs font-mono text-[#cc6633]">#{a.id.toUpperCase()}</div>
              <div className="mt-2 text-lg font-mono text-[#d4a574]">{a.title}</div>
              <div className="mt-2 text-sm font-mono text-[#d4a574]/60">{a.subtitle}</div>
              <div className="mt-4 text-xs font-mono text-[#cc6633]">Abrir artículo →</div>
            </a>
          ))}
        </div>

        {/* Articles */}
        <div className="mt-14 sm:mt-16 space-y-10">
          {activities.map((a) => (
            <article
              key={a.id}
              id={a.id}
              className="p-6 sm:p-8 bg-[#1a1a1a]/30 border border-[#d4a574]/20 relative"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#cc6633]/40"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#cc6633]/40"></div>

              <header className="mb-6">
                <div className="text-xs font-mono text-[#cc6633]">#{a.id.toUpperCase()}</div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-mono text-[#d4a574]">{a.title}</h3>
                <p className="mt-2 text-sm font-mono text-[#d4a574]/60">{a.subtitle}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={a.pdfHref}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all duration-300"
                  >
                    <FileDown className="w-4 h-4" />
                    Descargar PDF
                  </a>
                  <a
                    href="#actividades"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 border border-[#d4a574]/20 text-[#d4a574]/70 font-mono hover:border-[#cc6633]/40 hover:text-[#cc6633] transition-all duration-300"
                  >
                    <LinkIcon className="w-4 h-4" />
                    Volver al índice
                  </a>
                </div>
              </header>

              <div className="space-y-6">
                <section className="p-5 bg-black/30 border border-[#d4a574]/10">
                  <h4 className="text-lg font-mono text-[#d4a574]">1. Introducción contextual</h4>
                  <p className="mt-2 text-sm font-mono text-[#d4a574]/70">
                    (Escribe aquí el contexto: qué problema se aborda, objetivo, alcance y relevancia en seguridad informática.)
                  </p>
                </section>

                <section className="p-5 bg-black/30 border border-[#d4a574]/10">
                  <h4 className="text-lg font-mono text-[#d4a574]">2. Desarrollo técnico</h4>
                  <p className="mt-2 text-sm font-mono text-[#d4a574]/70">
                    (Procedimiento paso a paso, configuraciones, comandos, análisis de resultados, hallazgos, riesgos, mitigaciones.)
                  </p>
                </section>

                <section className="p-5 bg-black/30 border border-[#d4a574]/10">
                  <h4 className="text-lg font-mono text-[#d4a574] flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[#cc6633]" />
                    3. Material multimedia
                  </h4>
                  <p className="mt-2 text-sm font-mono text-[#d4a574]/70">
                    (Inserta capturas, diagramas o enlaces. Puedes pegar imágenes en el repo y referenciarlas aquí.)
                  </p>
                </section>

                <section className="p-5 bg-black/30 border border-[#d4a574]/10">
                  <h4 className="text-lg font-mono text-[#d4a574]">4. Reflexión técnica</h4>
                  <p className="mt-2 text-sm font-mono text-[#d4a574]/70">
                    (Reflexión: qué aprendiste, qué decisiones tomaste, limitaciones, implicaciones reales, mejoras.)
                  </p>
                </section>

                <section className="p-5 bg-black/30 border border-[#d4a574]/10">
                  <h4 className="text-lg font-mono text-[#d4a574]">5. Referencias</h4>
                  <ul className="mt-2 list-disc pl-6 space-y-2 text-sm font-mono text-[#d4a574]/70">
                    <li>(Incluye referencias: RFC, NIST, OWASP, MITRE, libros, artículos, documentación oficial.)</li>
                  </ul>
                </section>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"></div>
    </section>
  );
}

import React from 'react';
import { PROJECTS } from '@/app/data/projects';

const platforms = [
  {
    name: 'Hoxhunt',
    type: 'Plataforma de human risk management y simulación de phishing',
    focus: 'Automatización de simulaciones personalizadas y entrenamiento adaptativo',
    description:
      'Hoxhunt se presenta como una plataforma de gestión del riesgo humano que automatiza simulaciones de phishing a gran escala. Su propuesta destaca por personalizar campañas según variables como departamento, ubicación y contexto del usuario, además de integrar microentrenamientos inmediatos. También reporta métricas ligadas a comportamiento, especialmente tasa de reporte, fallas en simulaciones y evolución del compromiso del usuario.',
    features: [
      'Simulaciones automatizadas por correo, Slack o Teams',
      'Personalización por perfil de usuario',
      'Microentrenamientos inmediatos',
      'Métricas de reporting rate, fail rate y time-to-report',
      'Enfoque en cambio conductual y human risk management',
    ],
    metrics: [
      'Reporting rate',
      'Failure rate',
      'Time-to-report',
      'Indicadores de engagement y riesgo humano',
    ],
    advantages: [
      'Alto nivel de automatización',
      'Fuerte personalización',
      'Enfoque moderno en riesgo humano, no solo en cumplimiento',
    ],
    limitations: [
      'Su propuesta parece más orientada a organizaciones con programas maduros',
      'Su enfoque puede resultar más complejo para implementaciones muy básicas o académicas, ya que está orientado a human risk management integral',
    ],
  },
  {
    name: 'Proofpoint Security Awareness Training',
    type: 'Plataforma empresarial de concientización y simulación',
    focus: 'Mitigación del riesgo humano mediante simulaciones y educación continua',
    description:
      'Proofpoint ofrece simulaciones de phishing, campañas de USB, SMS y smishing, además de evaluaciones de cultura y susceptibilidad. La plataforma enfatiza el uso de inteligencia de amenazas de gran escala para crear simulaciones basadas en ataques reales y pone especial atención al comportamiento positivo del usuario mediante su botón de reporte PhishAlarm.',
    features: [
      'Simulaciones de phishing y otros vectores',
      'Miles de plantillas basadas en amenazas reales',
      'Botón PhishAlarm para reporte',
      'Evaluaciones de cultura y riesgo',
      'Plataforma orientada a programas empresariales amplios',
    ],
    metrics: [
      'Susceptibilidad del usuario',
      'Reporting behavior',
      'Métricas de vulnerabilidad',
      'Evaluaciones de comportamiento positivo',
    ],
    advantages: [
      'Fuerte enfoque corporativo',
      'Simulaciones alimentadas por inteligencia de amenazas',
      'Cobertura de varios vectores además del correo',
    ],
    limitations: [
      'Su amplitud funcional sugiere una implementación más robusta y posiblemente más demandante en administración',
      'Puede estar más orientada a empresas que a entornos pequeños o de adopción inicial',
    ],
  },
  {
    name: 'KnowBe4',
    type: 'Plataforma de security awareness training y phishing simulation',
    focus: 'Medición del riesgo mediante pruebas de phishing y formación continua',
    description:
      'KnowBe4 es una de las plataformas más conocidas del sector. Su enfoque incluye pruebas de phishing, plantillas configurables, páginas de aterrizaje educativas y reportes comparativos. Una de sus métricas distintivas es el Phish-prone Percentage (PPP), que mide el porcentaje de usuarios propensos a caer en phishing.',
    features: [
      'Pruebas de phishing configurables',
      'Plantillas y landing pages personalizables',
      'Métrica PPP propia',
      'Reportes comparativos por industria',
      'Capacitación posterior a la interacción del usuario',
    ],
    metrics: [
      'Phish-prone Percentage (PPP)',
      'Phish-failure Percentage',
      'Comparativos por industria',
      'Evolución del desempeño tras el entrenamiento',
    ],
    advantages: [
      'Métricas muy claras y conocidas en el mercado',
      'Fuerte orientación a benchmarking',
      'Plataforma ampliamente reconocida en training de phishing',
    ],
    limitations: [
      'El gran peso de sus métricas de falla puede llevar a programas demasiado centrados en clics si no se complementan con análisis de reporte y aprendizaje',
      'Requiere una buena estrategia pedagógica para evitar que la simulación se vuelva repetitiva',
    ],
  },
  {
    name: 'Cofense',
    type: 'Plataforma de defensa contra phishing y entrenamiento SAT',
    focus: 'Detección, reporte y respuesta post-perímetro',
    description:
      'Cofense se posiciona como una solución especializada en phishing que combina IA, validación experta, reporte en tiempo real y simulaciones basadas en amenazas reales. Su plataforma SAT/PhishMe está enfocada en convertir a los usuarios en defensores activos.',
    features: [
      'Simulaciones multicanal',
      'Reporte en tiempo real',
      'Analítica orientada a gestión de riesgo',
      'Enfoque post-perímetro',
      'Integración entre entrenamiento y respuesta',
    ],
    metrics: [
      'Reporting rate',
      'Risk management reporting',
      'Interacción con simulaciones',
      'Indicadores de detección y remediación',
    ],
    advantages: [
      'Muy fuerte en cultura de reporte',
      'Orientada a phishing real que evade controles perimetrales',
      'Vincula entrenamiento con respuesta operacional',
    ],
    limitations: [
      'Su enfoque más especializado en phishing defensivo puede hacerla menos simple para programas puramente formativos',
      'Parece más fuerte en organizaciones que ya manejan una estrategia madura de respuesta al phishing',
    ],
  },
  {
    name: 'Phished',
    type: 'Plataforma de security awareness con simulación adaptativa',
    focus: 'Entrenamiento holístico con simulaciones niveladas y gamificadas',
    description:
      'Phished se presenta como una plataforma de concientización con simulaciones de phishing impulsadas por IA y estructuradas por niveles. Su propuesta combina sesiones frecuentes, gamificación y un entorno seguro de entrenamiento.',
    features: [
      'Simulaciones niveladas con IA',
      'Entrenamiento frecuente',
      'Gamificación',
      'Rutas diferenciadas por nivel de riesgo',
      'Enfoque en zero-incident rate',
    ],
    metrics: [
      'Nivel de riesgo del usuario',
      'Evolución por rutas de aprendizaje',
      'Indicadores centrados en reducción de incidentes',
    ],
    advantages: [
      'Muy buen enfoque adaptativo',
      'Diseño pedagógico centrado en diferenciación de usuarios',
      'Propone aprendizaje continuo y positivo',
    ],
    limitations: [
      'La información pública visible resalta más la propuesta general que el detalle exhaustivo de métricas específicas',
      'Puede requerir mayor exploración comercial para conocer a fondo su analítica avanzada',
    ],
  },
  {
    name: 'NINJIO',
    type: 'Plataforma de awareness training y simulación dinámica',
    focus: 'Microlearning audiovisual y phishing simulation adaptativa',
    description:
      'NINJIO combina entrenamiento breve tipo microlearning con una solución de phishing simulation llamada PHISH3D. Su plataforma declara el uso de attack vector-based testing, pruebas de susceptibilidad emocional, niveles automáticos de dificultad y un algoritmo propietario de riesgo.',
    features: [
      'PHISH3D para simulaciones',
      'Plantillas por vector de ataque',
      'QR phishing y adjuntos',
      'Microlearning audiovisual',
      'Algoritmo propietario de riesgo y personalización',
    ],
    metrics: [
      'NINJIO Risk Algorithm',
      'Vulnerabilidades conductuales por usuario',
      'Resultados de simulación por susceptibilidad',
    ],
    advantages: [
      'Muy fuerte en engagement gracias al formato audiovisual',
      'Buen equilibrio entre awareness y simulación',
      'Integra elementos conductuales y emocionales',
    ],
    limitations: [
      'Parte de su diferenciación depende de componentes propietarios difíciles de auditar desde información pública',
      'Su estilo de training puede gustar mucho en algunos entornos y menos en otros más tradicionales',
    ],
  },
  {
    name: 'Mimecast Awareness Training / Engage',
    type: 'Plataforma de awareness training integrada con seguridad de correo',
    focus: 'Simulación y entrenamiento automatizado con risk scoring',
    description:
      'Mimecast ofrece phishing testing y phishing simulation como parte de su propuesta de awareness training. Permite configurar campañas en minutos, usar plantillas basadas en correos reales y medir el riesgo individual y organizacional frente a millones de puntos de datos del grid de Mimecast.',
    features: [
      'Simulaciones en minutos',
      'Plantillas realistas',
      'Baseline assessments y quizzes',
      'Risk scoring individual y organizacional',
      'Automatización de campañas y entrenamiento',
    ],
    metrics: [
      'Risk scoring',
      'Resultados de campañas',
      'Medición periódica de progreso',
      'Estadísticas de campañas y cuestionarios',
    ],
    advantages: [
      'Fuerte integración con ecosistema de seguridad de correo',
      'Buen balance entre simulación, evaluación y formación',
      'Capacidad de automatización creciente',
    ],
    limitations: [
      'El máximo aprovechamiento probablemente depende de organizaciones ya integradas al ecosistema Mimecast',
      'Puede resultar más natural para clientes de correo seguro Mimecast que para ambientes totalmente ajenos',
    ],
  },
  {
    name: 'Infosec IQ',
    type: 'Plataforma cloud de awareness training y phishing simulator',
    focus: 'Entrenamiento basado en roles y simulaciones configurables',
    description:
      'Infosec IQ integra simulador de phishing y formación computarizada en un mismo servicio en la nube. Resalta rutas de entrenamiento por industria y rol, herramientas de cumplimiento, administración guiada por un client success manager y un simulador con más de 2,000 plantillas realistas.',
    features: [
      'Simulador de phishing en la nube',
      'Más de 2,000 plantillas',
      'Editor drag-and-drop',
      'Role-based training',
      'Herramientas de cumplimiento y educación inmediata',
    ],
    metrics: [
      'Reducción del phish rate',
      'Resultados de campañas',
      'Métricas de cumplimiento y avance del entrenamiento',
    ],
    advantages: [
      'Buena combinación entre flexibilidad y formación',
      'Biblioteca amplia de plantillas',
      'Útil para programas con orientación por roles y cumplimiento',
    ],
    limitations: [
      'Su propuesta pública comunica amplitud funcional, pero menos detalle sobre métricas propietarias avanzadas que otras plataformas',
      'Puede competir más por versatilidad que por una identidad analítica singular',
    ],
  },
];

const comparisonTable = [
  ['Hoxhunt', 'Email, Slack, Teams', 'Reporting rate, fail rate, time-to-report', 'Alto', 'Microtraining adaptativo', 'Human risk management y personalización amplia'],
  ['Proofpoint', 'Email, USB, SMS, smishing', 'Susceptibilidad, comportamiento de reporte', 'Alto', 'Capacitación continua', 'Inteligencia de amenazas y PhishAlarm'],
  ['KnowBe4', 'Email phishing tests', 'PPP, failure percentage', 'Medio-alto', 'Awareness tradicional + refuerzo', 'Benchmarking y métrica PPP'],
  ['Cofense', 'Simulaciones multicanal', 'Reporting, risk reporting', 'Alto', 'Entrenamiento enfocado en defensa activa', 'Fuerte vínculo entre reporte y respuesta'],
  ['Phished', 'Simulaciones niveladas con IA', 'Riesgo y evolución por rutas', 'Alto', 'Gamificación y aprendizaje diferenciado', 'Zero-incident orientation'],
  ['NINJIO', 'Phish, QR, adjuntos, vectores recientes', 'Riesgo conductual y susceptibilidad', 'Medio-alto', 'Microlearning audiovisual', 'PHISH3D y Risk Algorithm'],
  ['Mimecast', 'Email, spear-phishing, QR', 'Risk scoring, progreso, campañas', 'Alto', 'Training automatizado', 'Integración con ecosistema de correo seguro'],
  ['Infosec IQ', 'Email phishing simulations', 'Phish rate, avance de training', 'Medio-alto', 'Role-based learning', '2,000+ plantillas y editor flexible'],
];

const Project2 = () => {
  const project = PROJECTS.find((p) => p.id === 'proj-02');
  if (!project) return <div>Proyecto no encontrado</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${project.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {project.title}
        </h1>

        {/*
        <div className="mb-6">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Descargar PDF
          </a>
        </div>
         */}

        {/* 1. Introducción */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">1. Introducción</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            La ingeniería social continúa siendo una de las amenazas más relevantes en ciberseguridad porque explota el comportamiento humano como punto de entrada a sistemas y datos organizacionales. Dentro de estas amenazas, el phishing destaca por su capacidad de inducir a los usuarios a abrir enlaces, descargar archivos, entregar credenciales o realizar acciones que comprometen la seguridad de la información.

            En respuesta a este problema, numerosas organizaciones han adoptado plataformas de simulación de phishing para evaluar el nivel de exposición al riesgo humano y fortalecer la concientización en seguridad mediante campañas controladas y procesos de entrenamiento continuo.

            El propósito de este documento es realizar una comparación técnica de ocho plataformas de simulación de phishing: Hoxhunt, Proofpoint, KnowBe4, Cofense, Phished, NINJIO, Mimecast e Infosec IQ. El análisis se centra en sus capacidades de simulación, métricas, nivel de automatización, enfoque pedagógico, ventajas y limitaciones, con el fin de identificar sus diferencias funcionales y su posible aplicación en contextos organizacionales.
          </div>
        </div>

        {/* 2. Marco teórico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">2. Marco teórico</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            La ingeniería social es una técnica de manipulación orientada a inducir a los usuarios a realizar acciones que favorezcan a un atacante. Una de sus expresiones más comunes es el phishing, que consiste en enviar mensajes o enlaces fraudulentos que aparentan ser legítimos para engañar al usuario y obtener información sensible o acceso a sistemas.

            En entornos organizacionales, esta amenaza es especialmente relevante porque compromete el factor humano, que sigue siendo una de las superficies de ataque más explotadas.

            Para reducir este riesgo, las organizaciones utilizan plataformas de simulación de phishing. Estas herramientas permiten lanzar campañas controladas que imitan ataques reales con fines de evaluación y capacitación. Además de medir la reacción de los usuarios, muchas plataformas integran procesos de formación como microlearning, retroalimentación inmediata, campañas adaptativas, plantillas basadas en ataques reales y mecanismos de reporte.

            Entre las métricas más comunes se encuentran el click rate, el reporting rate y diversos esquemas de risk score o evaluación de riesgo humano, empleados para medir la madurez del programa y priorizar entrenamiento.
          </div>
        </div>

        {/* 3. Fichas técnicas */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">3. Fichas técnicas de plataformas</h3>

          <div className="space-y-8">
            {platforms.map((platform, idx) => (
              <div key={platform.name} className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5">
                <h4 className="text-md font-bold text-[#d4a574] mb-3">
                  {`3.${idx + 1} ${platform.name}`}
                </h4>

                <div className="space-y-3 text-sm font-mono text-[#d4a574]/80">
                  <p><span className="text-[#cc6633]">Nombre de la plataforma:</span> {platform.name}</p>
                  <p><span className="text-[#cc6633]">Tipo de solución:</span> {platform.type}</p>
                  <p><span className="text-[#cc6633]">Enfoque principal:</span> {platform.focus}</p>
                  <p className="leading-relaxed">
                    <span className="text-[#cc6633]">Descripción técnica:</span> {platform.description}
                  </p>

                  <div>
                    <p className="text-[#cc6633] mb-1">Características técnicas principales:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#cc6633] mb-1">Métricas destacadas:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.metrics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#cc6633] mb-1">Ventajas:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.advantages.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#cc6633] mb-1">Limitaciones:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {platform.limitations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Tabla comparativa */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-4">4. Tabla comparativa de plataformas</h3>

          <div className="overflow-x-auto bg-[#1a1a1a]/40 border border-[#d4a574]/20">
            <table className="min-w-full text-sm font-mono text-[#d4a574]/80">
              <thead className="bg-black/30 text-[#d4a574]">
                <tr>
                  <th className="px-4 py-3 text-left">Plataforma</th>
                  <th className="px-4 py-3 text-left">Tipo de simulación</th>
                  <th className="px-4 py-3 text-left">Métricas visibles</th>
                  <th className="px-4 py-3 text-left">Automatización</th>
                  <th className="px-4 py-3 text-left">Enfoque de entrenamiento</th>
                  <th className="px-4 py-3 text-left">Rasgo distintivo</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row[0]} className="border-t border-[#d4a574]/10">
                    {row.map((cell, idx) => (
                      <td key={`${row[0]}-${idx}`} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Análisis comparativo */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">5. Análisis comparativo</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            Las ocho plataformas analizadas comparten un núcleo funcional: todas permiten ejecutar simulaciones de phishing y vincularlas de alguna forma con acciones de concientización. Sin embargo, su diferencia principal está en cómo interpretan el riesgo humano y cómo convierten la simulación en aprendizaje.

            Hoxhunt, Phished y NINJIO destacan por una lógica más adaptativa y conductual. Hoxhunt enfatiza reporting rate, microentrenamiento y human risk management; Phished se orienta a rutas diferenciadas y simulaciones niveladas con IA; y NINJIO combina pruebas dinámicas con microlearning audiovisual y un algoritmo de riesgo propio.

            Proofpoint y Cofense muestran un perfil más corporativo y más cercano a la operación real del correo empresarial. Proofpoint se apoya mucho en inteligencia de amenazas, simulaciones de múltiples vectores y el botón PhishAlarm, mientras que Cofense sobresale por su énfasis en el reporte en tiempo real y en el phishing que supera controles perimetrales.

            KnowBe4 conserva una posición muy sólida por la claridad de su enfoque métrico, especialmente con el PPP y los comparativos por industria. Mimecast e Infosec IQ ofrecen propuestas equilibradas, con integración y flexibilidad respectivamente.

            En términos generales, puede proponerse la siguiente lectura:
            - Más orientadas a human risk y adaptación: Hoxhunt, Phished, NINJIO.
            - Más orientadas a operación empresarial y defensa real del correo: Proofpoint, Cofense, Mimecast.
            - Más orientadas a métricas claras y facilidad de adopción del programa: KnowBe4, Infosec IQ.
          </div>
        </div>

        {/* 6. Conclusión */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">6. Conclusión</h3>
          <div className="text-[#d4a574]/85 font-mono leading-relaxed whitespace-pre-line">
            Las plataformas de simulación de phishing han evolucionado desde herramientas centradas únicamente en enviar correos de prueba hacia soluciones mucho más amplias de gestión del riesgo humano. Aunque todas las plataformas analizadas permiten ejecutar campañas simuladas, sus diferencias se observan en la profundidad de sus métricas, el nivel de automatización, la personalización del entrenamiento y su integración con estrategias organizacionales de seguridad.

            En términos técnicos, no existe una única plataforma “mejor” para todos los contextos. La elección dependerá de si la organización prioriza analítica de riesgo humano, integración con correo corporativo, benchmarking, flexibilidad pedagógica o entrenamiento adaptativo.

            Como base para un proyecto académico, esta comparación permite identificar que la simulación de phishing no debe entenderse como una práctica aislada, sino como parte de un programa estructurado de concientización en ciberseguridad, donde medición, retroalimentación, ética y mejora continua son elementos inseparables.
          </div>
        </div>

        {/* 7. Referencias */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">7. Referencias</h3>
          <ul className="space-y-2">
            {project.references.map((r, idx) => (
              <li key={idx} className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                <span className="text-[#cc6633]">› </span>
                <span className="text-[#d4a574]">{r.label}:</span> {r.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project2;
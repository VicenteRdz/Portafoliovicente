export type Platform = {
  name: string;
  type: string;
  focus: string;
  description: string;
  features: string[];
  metrics: string[];
  advantages: string[];
  limitations: string[];
};

export const PLATFORMS: Platform[] = [
  {
    name: 'Hoxhunt',
    type: 'Plataforma de human risk management y simulación de phishing',
    focus: 'Automatización de simulaciones personalizadas y entrenamiento adaptativo',
    description:
      'Hoxhunt se presenta como una plataforma de gestión del riesgo humano que automatiza simulaciones de phishing a gran escala...',
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
      'Enfoque moderno en riesgo humano',
    ],
    limitations: [
      'Orientado a programas maduros',
      'Puede ser complejo en contextos académicos',
    ],
  },

  {
    name: 'Proofpoint Security Awareness Training',
    type: 'Plataforma empresarial de concientización y simulación',
    focus: 'Mitigación del riesgo humano mediante simulaciones',
    description:
      'Proofpoint ofrece simulaciones de phishing, campañas de USB, SMS y smishing...',
    features: [
      'Simulaciones multivector',
      'Plantillas basadas en amenazas reales',
      'Botón PhishAlarm',
      'Evaluaciones de cultura y riesgo',
    ],
    metrics: [
      'Susceptibilidad',
      'Reporting behavior',
      'Métricas de vulnerabilidad',
    ],
    advantages: [
      'Fuerte enfoque corporativo',
      'Uso de threat intelligence',
    ],
    limitations: [
      'Implementación compleja',
      'Más orientado a empresas grandes',
    ],
  },

  {
    name: 'KnowBe4',
    type: 'Security awareness training y phishing simulation',
    focus: 'Medición del riesgo mediante pruebas de phishing',
    description:
      'KnowBe4 es una de las plataformas más conocidas del sector...',
    features: [
      'Pruebas configurables',
      'Landing pages',
      'PPP',
      'Reportes comparativos',
    ],
    metrics: [
      'PPP',
      'Failure percentage',
      'Benchmarking',
    ],
    advantages: [
      'Métricas claras',
      'Alta adopción en el mercado',
    ],
    limitations: [
      'Enfoque fuerte en clics',
      'Puede volverse repetitivo',
    ],
  },

  {
    name: 'Cofense',
    type: 'Defensa contra phishing y entrenamiento',
    focus: 'Reporte y respuesta post-perímetro',
    description:
      'Cofense combina IA, validación experta y simulaciones realistas...',
    features: [
      'Simulación multicanal',
      'Reporte en tiempo real',
      'Integración con respuesta',
    ],
    metrics: [
      'Reporting rate',
      'Risk reporting',
    ],
    advantages: [
      'Fuerte cultura de reporte',
      'Enfoque realista',
    ],
    limitations: [
      'Más complejo',
      'Orientado a entornos maduros',
    ],
  },

  {
    name: 'Phished',
    type: 'Awareness training adaptativo',
    focus: 'Simulaciones con IA y gamificación',
    description:
      'Phished combina simulaciones niveladas con aprendizaje adaptativo...',
    features: [
      'Simulación con IA',
      'Gamificación',
      'Rutas por riesgo',
    ],
    metrics: [
      'Nivel de riesgo',
      'Evolución del usuario',
    ],
    advantages: [
      'Muy adaptativo',
      'Buen enfoque pedagógico',
    ],
    limitations: [
      'Menos detalle público',
    ],
  },

  {
    name: 'NINJIO',
    type: 'Awareness + simulación dinámica',
    focus: 'Microlearning audiovisual',
    description:
      'NINJIO combina microlearning con phishing simulation PHISH3D...',
    features: [
      'PHISH3D',
      'QR phishing',
      'Microlearning',
    ],
    metrics: [
      'Risk algorithm',
      'Vulnerabilidades conductuales',
    ],
    advantages: [
      'Alto engagement',
      'Enfoque emocional',
    ],
    limitations: [
      'Componentes propietarios',
    ],
  },

  {
    name: 'Mimecast',
    type: 'Awareness integrado con email security',
    focus: 'Simulación + risk scoring',
    description:
      'Mimecast permite campañas rápidas con métricas de riesgo...',
    features: [
      'Simulación rápida',
      'Risk scoring',
      'Automatización',
    ],
    metrics: [
      'Risk score',
      'Progreso',
    ],
    advantages: [
      'Integración fuerte',
    ],
    limitations: [
      'Dependiente del ecosistema Mimecast',
    ],
  },

  {
    name: 'Infosec IQ',
    type: 'Awareness training cloud',
    focus: 'Entrenamiento por roles',
    description:
      'Infosec IQ integra simulador y formación...',
    features: [
      '2000+ plantillas',
      'Editor drag-drop',
      'Role-based',
    ],
    metrics: [
      'Phish rate',
      'Avance',
    ],
    advantages: [
      'Flexible',
      'Gran biblioteca',
    ],
    limitations: [
      'Menos diferenciación analítica',
    ],
  },
];

export const COMPARISON_TABLE = [
  ['Hoxhunt', 'Email, Slack', 'Reporting, fail rate', 'Alto', 'Adaptativo', 'Human risk'],
  ['Proofpoint', 'Email, SMS', 'Susceptibilidad', 'Alto', 'Continuo', 'Threat intel'],
  ['KnowBe4', 'Email', 'PPP', 'Medio', 'Tradicional', 'Benchmark'],
  ['Cofense', 'Multicanal', 'Reporting', 'Alto', 'Defensivo', 'Respuesta'],
  ['Phished', 'IA', 'Riesgo', 'Alto', 'Gamificado', 'Adaptativo'],
  ['NINJIO', 'Multivector', 'Riesgo', 'Medio', 'Audiovisual', 'PHISH3D'],
  ['Mimecast', 'Email', 'Risk score', 'Alto', 'Automático', 'Integración'],
  ['Infosec IQ', 'Email', 'Phish rate', 'Medio', 'Por roles', 'Flexibilidad'],
];
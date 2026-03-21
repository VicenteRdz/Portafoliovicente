export type PhishingScenario = {
  id: string;
  title: string;
  type: 'email' | 'qr' | 'login' | 'attachment' | 'mixed';
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  shortDescription: string;
};

export const PHISHING_QUIZ: PhishingScenario[] = [
  {
    id: 'scn-01',
    title: 'Escenario 01 - Correo de actualización urgente de contraseña',
    type: 'email',
    difficulty: 'Básico',
    shortDescription:
      'Correo simulado que solicita actualizar credenciales con carácter urgente.',
  },
  {
    id: 'scn-02',
    title: 'Escenario 02 - Aviso institucional con enlace de validación',
    type: 'email',
    difficulty: 'Básico',
    shortDescription:
      'Mensaje visualmente formal que pide validar información de cuenta o acceso.',
  },
  {
    id: 'scn-03',
    title: 'Escenario 03 - Notificación administrativa con lenguaje corporativo',
    type: 'email',
    difficulty: 'Intermedio',
    shortDescription:
      'Correo que aparenta provenir de un área interna y utiliza presión operativa.',
  },
  {
    id: 'scn-04',
    title: 'Escenario 04 - Correo con archivo adjunto sospechoso',
    type: 'attachment',
    difficulty: 'Intermedio',
    shortDescription:
      'Escenario con adjunto comprimido o documento que requiere revisión inmediata.',
  },
  {
    id: 'scn-05',
    title: 'Escenario 05 - Aviso institucional con código QR',
    type: 'qr',
    difficulty: 'Intermedio',
    shortDescription:
      'Comunicado visual que solicita escanear un código QR para actualizar datos o acceder a un portal.',
  },
  {
    id: 'scn-06',
    title: 'Escenario 06 - Mensaje de verificación de cuenta con identidad de marca',
    type: 'email',
    difficulty: 'Intermedio',
    shortDescription:
      'Correo que usa branding convincente y lenguaje de soporte o verificación de seguridad.',
  },
  {
    id: 'scn-07',
    title: 'Escenario 07 - Sitio falso de inicio de sesión bancario',
    type: 'login',
    difficulty: 'Avanzado',
    shortDescription:
      'Página de login simulada con apariencia auténtica para capturar credenciales en un entorno educativo.',
  },
  {
    id: 'scn-08',
    title: 'Escenario 08 - Correo de nómina, factura o reembolso',
    type: 'email',
    difficulty: 'Avanzado',
    shortDescription:
      'Caso que explota urgencia financiera y legitimidad aparente mediante lenguaje administrativo.',
  },
  {
    id: 'scn-09',
    title: 'Escenario 09 - Portal falso de servicio institucional o universitario',
    type: 'login',
    difficulty: 'Avanzado',
    shortDescription:
      'Página de acceso simulada con identidad institucional para evaluar reconocimiento de señales de fraude.',
  },
  {
    id: 'scn-10',
    title: 'Escenario 10 - Escenario mixto de ingeniería social',
    type: 'mixed',
    difficulty: 'Avanzado',
    shortDescription:
      'Caso combinado que integra correo, branding, enlace o QR y requiere análisis más completo.',
  },
];
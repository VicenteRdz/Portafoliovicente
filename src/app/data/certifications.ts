export type Certification = {
  id: string;
  title: string;
  platform: string;
  shortDescription: string;
  reflection: string;
  skills: string[];
  badge?: string;
  certificate?: string;
  badgeVerifyUrl?: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado' | 'Pendiente';
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'intro-ciberseguridad',
    title: 'Introducción a la Ciberseguridad',
    platform: 'Cisco Networking Academy',
    difficulty: 'Básico',
    badge: '/Portafoliovicente/images/badges/introCyberBadge.png',
    certificate: '/Portafoliovicente/pdfs/certifications/introCiber.pdf',    
    badgeVerifyUrl: 'https://www.credly.com/badges/a303feb6-67fb-497b-8bd3-e118e89b7bc2/public_url',
    shortDescription:
      'Fundamentos de ciberseguridad, amenazas digitales y concientización sobre protección de la información.',
    reflection: `El curso Introduction to Cybersecurity de Cisco Networking Academy representó uno de mis primeros acercamientos formales al área de la ciberseguridad y me permitió comprender la relevancia que tiene la protección de la información dentro de entornos tecnológicos modernos. A lo largo del curso pude identificar cómo las amenazas digitales afectan tanto a usuarios individuales como a empresas, infraestructuras y sistemas críticos que dependen diariamente de redes y dispositivos interconectados.

Durante la certificación desarrollé conocimientos básicos relacionados con tipos de ataques cibernéticos, malware, phishing, robo de información y principios fundamentales de seguridad informática. Además, comprendí conceptos esenciales como la confidencialidad, integridad y disponibilidad de la información, así como la importancia de implementar buenas prácticas de protección y concientización digital dentro de cualquier entorno tecnológico.

Uno de los aspectos más importantes de esta experiencia fue entender que la ciberseguridad no depende únicamente de herramientas técnicas avanzadas, sino también del criterio humano y de la capacidad de identificar comportamientos sospechosos antes de que se conviertan en incidentes reales. Esto me permitió desarrollar una visión más crítica sobre el uso seguro de plataformas digitales, redes y servicios conectados.

Desde una perspectiva profesional, considero que esta certificación fortaleció mi interés por integrar conocimientos de seguridad dentro de áreas relacionadas con sistemas electrónicos, automatización y tecnologías conectadas, especialmente considerando que actualmente muchos entornos industriales y de control dependen de infraestructuras digitales vulnerables a amenazas cibernéticas.

Finalmente, este curso me permitió reconocer la importancia de mantener una formación continua en ciberseguridad, no solo como una habilidad técnica complementaria, sino como una competencia esencial para cualquier profesionista involucrado en el desarrollo, administración o protección de sistemas tecnológicos modernos.`,
    skills: [
      'Cybersecurity Fundamentals',
      'Phishing Awareness',
      'Threat Recognition',
      'CIA Triad',
      'Digital Security',
      'Cyber Awareness',
    ],
  },
  {
    id: 'networking-basics',
    title: 'Conceptos Básicos de Redes',
    platform: 'Cisco Networking Academy',
    difficulty: 'Básico',
    badge: '/Portafoliovicente/images/badges/networkingBasics.png',
    certificate: '/Portafoliovicente/pdfs/certifications/networkingBasics.pdf',    
    badgeVerifyUrl: 'https://www.credly.com/badges/8b94513f-d101-4bfc-ae65-c0207aa62de1/public_url',
    shortDescription:
      'Fundamentos de redes, direccionamiento IP, comunicación entre dispositivos e infraestructura de conectividad.',
    reflection: `El curso Networking Basics de Cisco Networking Academy me permitió comprender los fundamentos esenciales sobre el funcionamiento de las redes de comunicación y la forma en que los dispositivos intercambian información dentro de entornos digitales modernos. Esta certificación representó un paso importante para fortalecer mis conocimientos técnicos relacionados con conectividad, infraestructura de red y comunicación entre sistemas.

Durante el desarrollo del curso aprendí conceptos fundamentales como direccionamiento IP, funcionamiento de routers y switches, modelos de comunicación en red, protocolos básicos y estructura general de Internet. Asimismo, comprendí la importancia de la segmentación, la transmisión de datos y la correcta configuración de dispositivos para garantizar una comunicación eficiente y estable entre equipos conectados.

Uno de los aspectos más relevantes de esta experiencia fue entender que las redes no solamente permiten la comunicación entre dispositivos, sino que también representan uno de los principales puntos críticos en materia de seguridad informática. Comprender cómo fluye la información dentro de una red me permitió identificar la importancia de proteger la infraestructura de comunicación frente a accesos no autorizados, ataques y vulnerabilidades que pueden comprometer la disponibilidad y confiabilidad de los sistemas.

Desde una perspectiva profesional, considero que esta certificación fortaleció mi capacidad para interpretar entornos tecnológicos interconectados, especialmente en áreas relacionadas con automatización, sistemas industriales y tecnologías digitales donde la comunicación entre dispositivos resulta fundamental para la operación continua de procesos y servicios.

Finalmente, este curso me ayudó a desarrollar una visión más estructurada sobre el papel que tienen las redes dentro de la ciberseguridad moderna, permitiéndome reconocer que una infraestructura correctamente diseñada y comprendida representa una base esencial para implementar mecanismos de protección, monitoreo y administración segura en cualquier entorno tecnológico.`,
    skills: [
      'Networking',
      'IP Addressing',
      'Switching',
      'Routing',
      'Connectivity',
      'Network Infrastructure',
    ],
  },
  {
    id: 'dispositivos-red',
    title: 'Dispositivos de Red y Configuración Inicial',
    platform: 'Cisco Networking Academy',
    difficulty: 'Intermedio',
    badge: '/Portafoliovicente/images/badges/endpointSecurity.png',
    certificate: '/Portafoliovicente/pdfs/certifications/networkDefense.pdf',    
    badgeVerifyUrl: 'https://www.credly.com/badges/cd0cb9ab-13e4-484a-8668-3868918dade5/public_url',
    shortDescription:
      'Configuración inicial de routers y switches, administración básica de red y verificación de conectividad.',
    reflection: `El curso Networking Devices and Initial Configuration de Cisco Networking Academy me permitió desarrollar una comprensión más práctica sobre la administración básica de dispositivos de red y el proceso inicial de configuración dentro de infraestructuras de comunicación. A través de esta certificación pude fortalecer conocimientos relacionados con routers, switches y procedimientos fundamentales necesarios para establecer conectividad en entornos de red.

Durante el desarrollo del curso aprendí conceptos asociados a la configuración inicial de dispositivos, acceso mediante interfaz de línea de comandos (CLI), direccionamiento IP, verificación de conectividad y administración básica de parámetros de red. Asimismo, comprendí la importancia de aplicar configuraciones organizadas y controles iniciales de seguridad para garantizar un funcionamiento estable y confiable de la infraestructura.

Uno de los aspectos más relevantes de esta experiencia fue reconocer que una configuración incorrecta o una administración deficiente de dispositivos de red puede representar vulnerabilidades importantes dentro de cualquier entorno tecnológico. Esto me permitió entender que la seguridad informática no depende únicamente de software especializado, sino también de buenas prácticas de configuración, segmentación y control de acceso desde los niveles más básicos de la infraestructura.

Desde una perspectiva profesional, considero que esta certificación fortaleció mis capacidades para interpretar y administrar entornos tecnológicos interconectados, especialmente en áreas relacionadas con automatización, sistemas electrónicos y redes industriales, donde la comunicación entre dispositivos y la disponibilidad operativa son elementos fundamentales para la continuidad de procesos.

Además, el curso contribuyó al desarrollo de habilidades prácticas de análisis y resolución de problemas relacionados con conectividad y configuración inicial, permitiéndome adquirir mayor confianza al interactuar con dispositivos de red y comprender su papel dentro de arquitecturas tecnológicas modernas.

Finalmente, esta experiencia reforzó mi interés por continuar desarrollando competencias relacionadas con redes y ciberseguridad, entendiendo que la correcta administración de la infraestructura representa una base esencial para implementar entornos más seguros, eficientes y confiables.`,
    skills: [
      'Router Configuration',
      'Switch Configuration',
      'CLI',
      'Network Setup',
      'Troubleshooting',
      'Infrastructure Management',
    ],
  },
  {
    id: 'endpoint-security',
    title: 'Seguridad en Terminales',
    platform: 'Cisco Networking Academy',
    difficulty: 'Intermedio',
    badge: '/Portafoliovicente/images/badges/endpointSecurity.png',
    certificate: '/Portafoliovicente/pdfs/certifications/endpointSecurity.pdf',    
    badgeVerifyUrl: 'https://www.credly.com/badges/267192cb-85eb-40c7-b5fd-dbdc3717538b/public_url',
    shortDescription:
      'Protección de dispositivos finales, malware, ransomware, control de acceso y seguridad operativa.',
    reflection: `El curso Endpoint Security de Cisco Networking Academy me permitió comprender la importancia de proteger los dispositivos finales dentro de un entorno tecnológico, reconociendo que computadoras, laptops y otros equipos conectados representan uno de los principales puntos de entrada para amenazas cibernéticas. Esta certificación fortaleció mis conocimientos relacionados con seguridad operativa, protección de sistemas y buenas prácticas de defensa informática.

Durante el desarrollo del curso aprendí conceptos relacionados con malware, ransomware, amenazas internas, control de acceso, autenticación y medidas básicas de protección para dispositivos finales. Asimismo, comprendí la relevancia de implementar actualizaciones, configuraciones seguras y mecanismos de monitoreo que permitan reducir vulnerabilidades y minimizar riesgos dentro de una infraestructura tecnológica.

Uno de los aspectos más importantes de esta experiencia fue entender que la seguridad informática no depende únicamente de redes o servidores, sino también de la protección adecuada de cada dispositivo conectado. El curso me permitió reconocer cómo errores de configuración, software desactualizado o malas prácticas de uso pueden convertirse en vectores de ataque capaces de comprometer sistemas completos.

Desde una perspectiva profesional, considero que esta certificación fortaleció mi criterio para identificar riesgos asociados al uso cotidiano de dispositivos tecnológicos, así como la importancia de aplicar principios básicos de protección en cualquier entorno conectado. Además, pude relacionar estos conceptos con áreas de automatización y sistemas industriales, donde los equipos terminales y estaciones de operación forman parte crítica de los procesos de monitoreo y control.

Adicionalmente, el curso contribuyó al desarrollo de una visión más estructurada sobre la seguridad en capas y la necesidad de combinar herramientas técnicas, políticas de protección y concientización del usuario para construir entornos más seguros y resilientes frente a amenazas digitales.

Finalmente, esta experiencia reforzó mi interés por continuar desarrollando competencias relacionadas con ciberseguridad y administración segura de sistemas, entendiendo que la protección de los dispositivos finales representa un elemento fundamental dentro de cualquier estrategia moderna de defensa informática.`,
    skills: [
      'Endpoint Protection',
      'Malware',
      'Ransomware',
      'Authentication',
      'Hardening',
      'Operational Security',
    ],
  },
  {
    id: 'cyber-threat-management',
    title: 'Administración de Amenazas Cibernéticas',
    platform: 'Cisco Networking Academy',
    difficulty: 'Avanzado',
    badge: '/Portafoliovicente/images/badges/cyberThreat.png.png',
    certificate: '/Portafoliovicente/pdfs/certifications/cyberThreat.pdf',    
    badgeVerifyUrl: 'https://www.credly.com/badges/c813887d-5867-4be4-a245-4a552ce17993/public_url',
    shortDescription:
      'Gestión de amenazas, análisis de riesgos, monitoreo, vulnerabilidades y respuesta ante incidentes.',
    reflection: `El curso Cyber Threat Management de Cisco Networking Academy me permitió desarrollar una visión más amplia sobre la identificación, análisis y gestión de amenazas cibernéticas dentro de entornos tecnológicos modernos. A través de esta certificación pude comprender cómo las organizaciones enfrentan riesgos relacionados con ataques informáticos y la importancia de implementar estrategias de monitoreo, prevención y respuesta ante incidentes de seguridad.

Durante el desarrollo del curso aprendí conceptos relacionados con análisis de amenazas, vulnerabilidades, gestión de riesgos, respuesta a incidentes y mecanismos básicos de defensa utilizados para proteger sistemas y redes frente a actividades maliciosas. Asimismo, comprendí cómo los atacantes aprovechan debilidades técnicas y errores humanos para comprometer infraestructuras digitales, afectando la confidencialidad, integridad y disponibilidad de la información.

Uno de los aspectos más relevantes de esta experiencia fue entender que la ciberseguridad no consiste únicamente en reaccionar ante ataques, sino también en desarrollar capacidades de prevención, monitoreo y análisis continuo. El curso me permitió reconocer la importancia de mantener una postura proactiva frente a amenazas emergentes, así como la necesidad de combinar herramientas tecnológicas con procesos organizacionales y concientización del usuario.

Desde una perspectiva profesional, considero que esta certificación fortaleció mi capacidad para interpretar escenarios de riesgo y comprender la importancia de proteger infraestructuras tecnológicas cada vez más interconectadas. Además, pude relacionar estos conceptos con entornos industriales y sistemas de automatización, donde una interrupción causada por incidentes de seguridad puede generar impactos operativos, económicos y de disponibilidad significativos.

Adicionalmente, el curso contribuyó al desarrollo de habilidades analíticas orientadas a la identificación de comportamientos sospechosos, evaluación de vulnerabilidades y comprensión básica de procesos de respuesta ante incidentes. Esto me permitió fortalecer una visión más estructurada sobre la administración de la seguridad en entornos digitales.

Finalmente, esta experiencia reforzó mi interés por continuar especializándome en áreas relacionadas con análisis de amenazas y protección de sistemas, entendiendo que la gestión adecuada de riesgos cibernéticos representa actualmente un componente esencial para la operación segura y confiable de cualquier infraestructura tecnológica.`,
    skills: [
      'Threat Analysis',
      'Risk Management',
      'Incident Response',
      'Cyber Defense',
      'Monitoring',
      'Security Operations',
    ],
  },
  {
    id: 'junior-cybersecurity-analyst',
    title: 'Carrera Profesional de Analista Junior en Ciberseguridad',
    platform: 'Cisco Networking Academy',
    difficulty: 'Pendiente',
    shortDescription:
      'Ruta profesional orientada al desarrollo de habilidades iniciales para el rol de analista junior en ciberseguridad.',
    reflection: `Reseña pendiente de integrar. En el documento base únicamente aparece el título de esta certificación, por lo que se recomienda completar posteriormente la reflexión con enfoque en trayectoria profesional, habilidades requeridas para el rol de analista junior, relación con monitoreo de amenazas, análisis de incidentes y crecimiento dentro del área de ciberseguridad.`,
    skills: [
      'Cybersecurity Analyst',
      'Security Monitoring',
      'Threat Detection',
      'Incident Analysis',
      'SOC Fundamentals',
      'Professional Development',
    ],
  },
  {
    id: 'ethical-hacker',
    title: 'Hacker Ético',
    platform: 'Cisco Networking Academy',
    difficulty: 'Avanzado',
    badge: '/Portafoliovicente/images/badges/ethicalHacker.png',
    certificate: '/Portafoliovicente/pdfs/certifications/ethicalHacker.pdf',    
    badgeVerifyUrl: 'https://www.credly.com/badges/5dc8a495-9677-4cd8-87c3-5aa2596eb8ba/public_url',
    shortDescription:
      'Fundamentos de hacking ético, reconocimiento, análisis de vulnerabilidades y evaluación ofensiva controlada.',
    reflection: `El curso Ethical Hacker de Cisco Networking Academy me permitió comprender los fundamentos del hacking ético y la importancia de adoptar una perspectiva ofensiva controlada para identificar vulnerabilidades dentro de sistemas y redes. A través de esta certificación pude desarrollar una visión más amplia sobre cómo los atacantes explotan debilidades técnicas y cómo estas pueden ser detectadas y mitigadas mediante prácticas responsables de seguridad informática.

Durante el desarrollo del curso aprendí conceptos relacionados con reconocimiento, análisis de vulnerabilidades, recopilación de información, evaluación básica de seguridad y metodologías utilizadas dentro de pruebas éticas de penetración. Asimismo, comprendí la importancia de realizar este tipo de actividades bajo principios legales y éticos, utilizando el conocimiento ofensivo como una herramienta para fortalecer mecanismos de protección y no para comprometer sistemas de manera maliciosa.

Uno de los aspectos más relevantes de esta experiencia fue entender que la ciberseguridad moderna requiere no solo capacidades defensivas, sino también la habilidad de analizar infraestructuras desde la perspectiva de un posible atacante. Esto me permitió reconocer cómo configuraciones incorrectas, malas prácticas de seguridad o vulnerabilidades sin atender pueden convertirse en puntos críticos de explotación dentro de entornos tecnológicos interconectados.

Desde una perspectiva profesional, considero que esta certificación fortaleció mi capacidad para interpretar escenarios de riesgo y comprender la importancia de realizar evaluaciones preventivas sobre sistemas y redes. Además, pude relacionar estos conceptos con entornos industriales y sistemas automatizados, donde la identificación temprana de vulnerabilidades resulta esencial para proteger la continuidad operativa y reducir riesgos asociados a incidentes de seguridad.

Adicionalmente, el curso contribuyó al desarrollo de una mentalidad más analítica y estructurada frente a la seguridad informática, permitiéndome comprender mejor la relación entre amenazas, vulnerabilidades y mecanismos de defensa implementados dentro de una infraestructura tecnológica.

Finalmente, esta experiencia reforzó mi interés por continuar desarrollando conocimientos relacionados con análisis de seguridad y evaluación de vulnerabilidades, entendiendo que el hacking ético representa una herramienta fundamental para fortalecer la resiliencia y protección de los sistemas modernos frente a amenazas cibernéticas.`,
    skills: [
      'Ethical Hacking',
      'Vulnerability Assessment',
      'Reconnaissance',
      'Penetration Testing',
      'Security Analysis',
      'Cybersecurity',
    ],
  },
];
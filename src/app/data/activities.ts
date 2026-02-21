export type Activity = {
  id: string;
  title: string;
  pdfFile: string; // En /public/pdfs/
  references: { label: string; value: string }[];
};

export const ACTIVITIES: Activity[] = [
  {
    id: 'act-01',
    title: 'Actividad 01 - Análisis en grupo de un ciberataque real y su impacto empresarial',
    pdfFile: 'act01-Equipo3.pdf',
    references: [
      { label: 'Banco de México', value: 'https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?sector=6&accion=consultarCuadro&idCuadro=CF102&locale=es' },
      { label: 'CISA', value: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-131a' },
      { label: 'Federal Bureau of Investigation', value: 'https://www.fbi.gov/news/press-releases/fbi-statement-on-compromise-of-colonial-pipeline-networks' }
    ],
  },
  {
    id: 'act-02',
    title: 'Actividad 02 - Análisis de servicios de seguridad (X.800 y RFC 4949)',
    pdfFile: '179954-act02.pdf',
    references: [
      { label: 'Shirey, R. W.', value: 'https://datatracker.ietf.org/doc/html/rfc4949' },
      { label: 'X.800�:�Arquitectura de seguridad de la interconexi�n de sistemas abiertos para aplicaciones del CCITT. ', value: 'https://www.itu.int/rec/t-rec-x.800-199103-i/es' }
    ],
  },
  {
    id: 'act-03',
    title: 'Actividad 03 - Interpretación y traducción de políticas de filtrado en iptables',
    pdfFile: '179954-act03.pdf',
    references: [{ label: '...', value: '...' }],
  },
  {
    id: 'act-04',
    title: 'Actividad 04 - Mecanismos de defensa en red',
    pdfFile: '179954-act04.pdf',
    references: [{ label: '...', value: '...' }],
  },
  {
    id: 'act-05',
    title: 'Actividad 05 - Cartografiando el pentesting: análisis comparativo de metodologías',
    pdfFile: '179954-act05.pdf',
    references: [{ label: '...', value: '...' }],
  },
  {
    id: 'act-06',
    title: 'Actividad 06 - Implementación de IPSec VPN',
    pdfFile: '179954-act06.pdf',
    references: [{ label: '...', value: '...' }],
  },
  {
    id: 'act-07',
    title: 'Actividad 07 - La caída del mayor traficante de la dark web (Oxymonster)',
    pdfFile: '179954-act07.pdf',
    references: [{ label: '...', value: '...' }],
  }
];
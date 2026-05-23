export type Project = {
  id: string;
  title: string;
  pdfFile: string; // En /public/pdfs/
  references: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Proyecto 01 - De la teoría a la práctica: Walkthrough en acción (guía y video)',
    pdfFile: 'proyecto01.pdf',
    references: [
      {
        label: 'NIST Cybersecurity Framework',
        value: 'https://www.nist.gov/cyberframework',
      },
    ],
  },

  {
    id: 'proj-02',
    title: 'Proyecto 02 - El eslabón más débil',
    pdfFile: 'proyecto02.pdf',
    references: [
      { label: 'Hoxhunt', value: 'https://hoxhunt.com/' },
      {
        label: 'Proofpoint',
        value:
          'https://www.proofpoint.com/us/products/security-awareness-training/phishing-simulations',
      },
      { label: 'KnowBe4', value: 'https://www.knowbe4.com/' },
      { label: 'Cofense', value: 'https://cofense.com/' },
      { label: 'Phished', value: 'https://phished.io/' },
      { label: 'NINJIO', value: 'https://ninjio.com/' },
      { label: 'Mimecast', value: 'https://www.mimecast.com/' },
      {
        label: 'Infosec IQ',
        value: 'https://www.infosecinstitute.com/iq/',
      },
    ],
  },

  {
    id: 'proj-03',
    title:
      'Proyecto 03 - Sistema de Gestión de Seguridad de la Información (SGSI) basado en ISO/IEC 27001:2022',
    pdfFile: 'PR03-Equipo03.pdf',
    references: [
      {
        label: 'ISO/IEC 27001',
        value: 'https://www.iso.org/isoiec-27001-information-security.html',
      },
      {
        label: 'ISO/IEC 27002',
        value: 'https://www.iso.org/standard/75652.html',
      },
      {
        label: 'ISO/IEC 27005',
        value: 'https://www.iso.org/standard/80585.html',
      },
      {
        label: 'ISO/IEC 27017',
        value: 'https://www.iso.org/standard/43757.html',
      },
      {
        label: 'ISO/IEC 27018',
        value: 'https://www.iso.org/standard/76559.html',
      },
      {
        label: 'ISO 22301',
        value: 'https://www.iso.org/iso-22301-business-continuity.html',
      },
      {
        label: 'ISO/IEC 27035',
        value: 'https://www.iso.org/standard/60803.html',
      },
      {
        label: 'Fortinet',
        value: 'https://www.fortinet.com/',
      },
      {
        label: 'Cisco',
        value: 'https://www.cisco.com/',
      },
      {
        label: 'Zscaler',
        value: 'https://www.zscaler.com/',
      },
      {
        label: 'Microsoft OneDrive',
        value: 'https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage',
      },
      {
        label: 'Microsoft SharePoint',
        value: 'https://www.microsoft.com/microsoft-365/sharepoint/collaboration',
      },
    ],
  },
];
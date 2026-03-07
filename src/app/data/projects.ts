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
      { label: 'NIST Cybersecurity Framework', value: 'https://www.nist.gov/cyberframework' }
    ],
  },
  {
    id: 'proj-02',
    title: 'Proyecto 02 - El eslabón más débil',
    pdfFile: 'proyecto02.pdf',
    references: [
      { label: 'Hoxhunt', value: 'https://hoxhunt.com/' },
      { label: 'Proofpoint', value: 'https://www.proofpoint.com/us/products/security-awareness-training/phishing-simulations' },
      { label: 'KnowBe4', value: 'https://www.knowbe4.com/' },
      { label: 'Cofense', value: 'https://cofense.com/' },
      { label: 'Phished', value: 'https://phished.io/' },
      { label: 'NINJIO', value: 'https://ninjio.com/' },
      { label: 'Mimecast', value: 'https://www.mimecast.com/' },
      { label: 'Infosec IQ', value: 'https://www.infosecinstitute.com/iq/' },
    ],
  }
];
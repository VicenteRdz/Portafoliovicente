export type HallOfFameSection = {
  id: string;
  title: string;
  description: string;
  route: string;
};

export const HALL_OF_FAME_SECTIONS: HallOfFameSection[] = [
  {
    id: 'sql-injection',
    title: 'SQL Injection',
    description:
      'Ruta de aprendizaje y documentación técnica de laboratorios de SQL Injection basados en PortSwigger Web Security Academy.',
    route: '/hall-of-fame/sql-injection',
  },
];
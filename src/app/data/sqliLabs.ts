export type SqlInjectionLab = {
  id: string;
  title: string;
  level: string;
  sqlType: string;
  references: { label: string; value: string }[];
};

export const SQLI_LABS: SqlInjectionLab[] = [
  {
    id: 'lab-01',
    title: 'Lab 01 - SQL injection vulnerability in WHERE clause allowing retrieval of hidden data',
    level: 'Apprentice',
    sqlType: 'WHERE clause / Boolean-based',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data',
      },
    ],
  },
  {
    id: 'lab-02',
    title: 'Lab 02 - SQL injection vulnerability allowing login bypass',
    level: 'Apprentice',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/lab-login-bypass',
      },
    ],
  },
  {
    id: 'lab-03',
    title: 'Lab 03 - SQL injection attack, querying the database type and version on Oracle',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle',
      },
    ],
  },
  {
    id: 'lab-04',
    title: 'Lab 04 - SQL injection attack, querying the database type and version on MySQL and Microsoft',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft',
      },
    ],
  },
  {
    id: 'lab-05',
    title: 'Lab 05 - SQL injection attack, listing the database contents on non-Oracle databases',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle',
      },
    ],
  },
  {
    id: 'lab-06',
    title: 'Lab 06 - SQL injection attack, listing the database contents on Oracle',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle',
      },
    ],
  },
  {
    id: 'lab-07',
    title: 'Lab 07 - SQL injection UNION attack, determining the number of columns returned by the query',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/lab-login-bypass',
      },
    ],
  },
  {
    id: 'lab-08',
    title: 'Lab 08 - SQL injection UNION attack, finding a column containing text',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text',
      },
    ],
  },
  {
    id: 'lab-09',
    title: 'Lab 09 - SQL injection UNION attack, retrieving data from other tables',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables',
      },
    ],
  },
  {
    id: 'lab-10',
    title: 'Lab 10 - SQL injection UNION attack, retrieving multiple values in a single column',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column',
      },
    ],
  },
  {
    id: 'lab-11',
    title: 'Lab 11 - Blind SQL injection with conditional responses',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses',
      },
    ],
  },
  {
    id: 'lab-12',
    title: 'Lab 12 - Blind SQL injection with conditional errors',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors',
      },
    ],
  },
  {
    id: 'lab-13',
    title: 'Lab 13 - Visible error-based SQL injection',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based',
      },
    ],
  },
  {
    id: 'lab-14',
    title: 'Lab 14 - Blind SQL injection with time delays',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-time-delays',
      },
    ],
  },
  {
    id: 'lab-15',
    title: 'Lab 15 - Blind SQL injection with time delays and information retrieval',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval',
      },
    ],
  },
  {
    id: 'lab-16',
    title: 'Lab 16 - Blind SQL injection with out-of-band interaction',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-out-of-bands',
      },
    ],
  },
  {
    id: 'lab-17',
    title: 'Lab 17 - Blind SQL injection with out-of-band data exfiltration',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration',
      },
    ],
  },
  {
    id: 'lab-18',
    title: 'Lab 18 - SQL injection with filter bypass via XML encoding',
    level: 'Practitioner',
    sqlType: 'Authentication bypass',
    references: [
      {
        label: 'PortSwigger Web Security Academy',
        value:
          'https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding',
      },
    ],
  },
];
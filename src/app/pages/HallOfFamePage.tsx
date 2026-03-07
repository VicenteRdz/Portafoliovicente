import React from 'react';
import { useParams } from 'react-router-dom';
import SqlInjectionPage from './halloffame/SqlInjectionPage';

export function HallOfFamePage() {
  const { id } = useParams();

  if (id === 'sql-injection') {
    return <SqlInjectionPage />;
  }

  return <div>Sección no encontrada</div>;
}
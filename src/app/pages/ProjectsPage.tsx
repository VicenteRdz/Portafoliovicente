import React from 'react';
import { useParams } from 'react-router-dom';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';

export function ProjectPage() {
  const { id } = useParams();

  if (id === 'proj-01') {
    return <Project1 />;
  } else if (id === 'proj-02') {
    return <Project2 />;
  }
  return <div>Proyecto no encontrado</div>;
}
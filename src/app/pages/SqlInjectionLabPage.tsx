import React from 'react';
import { useParams } from 'react-router-dom';
import Lab1 from './sqli/Lab1';
import Lab2 from './sqli/Lab2';
import Lab3 from './sqli/Lab3';
import Lab4 from './sqli/Lab4';
import Lab5 from './sqli/Lab5';
import Lab6 from './sqli/Lab6';
import Lab7 from './sqli/Lab7';
import Lab8 from './sqli/Lab8';
import Lab9 from './sqli/Lab9';
import Lab10 from './sqli/Lab10';
import Lab11 from './sqli/Lab11';
import Lab12 from './sqli/Lab12';
import Lab13 from './sqli/Lab13';
import Lab14 from './sqli/Lab14';
import Lab15 from './sqli/Lab15';
import Lab16 from './sqli/Lab16';
import Lab17 from './sqli/Lab17';
import Lab18 from './sqli/Lab18';

export function SqlInjectionLabPage() {
  const { id } = useParams();

  if (id === 'lab-01') {
    return <Lab1 />;
  }else if (id === 'lab-02') {
    return <Lab2 />;
  }else if (id === 'lab-03') {
    return <Lab2 />;
  }else if (id === 'lab-04') {
    return <Lab2 />;
  }else if (id === 'lab-05') {
    return <Lab2 />;
  }else if (id === 'lab-06') {
    return <Lab2 />;
  }else if (id === 'lab-07') {
    return <Lab2 />;
  }else if (id === 'lab-08') {
    return <Lab2 />;
  }else if (id === 'lab-09') {
    return <Lab2 />;
  }else if (id === 'lab-10') {
    return <Lab2 />;
  }else if (id === 'lab-11') {
    return <Lab2 />;
  }else if (id === 'lab-12') {
    return <Lab2 />;
  }else if (id === 'lab-13') {
    return <Lab2 />;
  }else if (id === 'lab-14') {
    return <Lab2 />;
  }else if (id === 'lab-15') {
    return <Lab2 />;
  }else if (id === 'lab-16') {
    return <Lab2 />;
  }else if (id === 'lab-17') {
    return <Lab2 />;
  }else if (id === 'lab-18') {
    return <Lab2 />;
  }

  return <div>Laboratorio no encontrado</div>;
}
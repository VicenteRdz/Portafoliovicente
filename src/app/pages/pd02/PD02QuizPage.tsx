import React from 'react';
import { useParams } from 'react-router-dom';

// Escenarios
import Scenario1 from './scenarios/Scenario1';
import Scenario2 from './scenarios/Scenario2';
import Scenario3 from './scenarios/Scenario3';
import Scenario4 from './scenarios/Scenario4';
import Scenario5 from './scenarios/Scenario5';
import Scenario6 from './scenarios/Scenario6';
import Scenario7 from './scenarios/Scenario7';
import Scenario8 from './scenarios/Scenario8';
import Scenario9 from './scenarios/Scenario9';
import Scenario10 from './scenarios/Scenario10';

export function PD02QuizPage() {
  const { id } = useParams();

  if (id === 'scn-01') {
    return <Scenario1 />;
  } else if (id === 'scn-02') {
    return <Scenario2 />;
  } else if (id === 'scn-03') {
    return <Scenario3 />;
  } else if (id === 'scn-04') {
    return <Scenario4 />;
  } else if (id === 'scn-05') {
    return <Scenario5 />;
  } else if (id === 'scn-06') {
    return <Scenario6 />;
  } else if (id === 'scn-07') {
    return <Scenario7 />;
  } else if (id === 'scn-08') {
    return <Scenario8 />;
  } else if (id === 'scn-09') {
    return <Scenario9 />;
  } else if (id === 'scn-10') {
    return <Scenario10 />;
  }

  return <div>Escenario no encontrado</div>;
}
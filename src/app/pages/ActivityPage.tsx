import React from 'react';
import { useParams } from 'react-router-dom';
import Activity1 from './activities/Activity1'; 
import Activity2 from './activities/Activity2'; 
import Activity3 from './activities/Activity3'; 
import Activity4 from './activities/Activity4'; 
import Activity5 from './activities/Activity5'; 
import Activity6 from './activities/Activity6'; 
import Activity7 from './activities/Activity7'; 

export function ActivityPage() {
  const { id } = useParams();


  if (id === 'act-01') {
    return <Activity1 />; 
  } else if (id === 'act-02') {
    return <Activity2 />; 
  } else if (id === 'act-03') {
    return <Activity3 />; 
  } else if (id === 'act-04') {
    return <Activity4 />; 
  } else if (id === 'act-05') {
    return <Activity5 />; 
  } else if (id === 'act-06') {
    return <Activity6 />; 
  } else if (id === 'act-07') {
    return <Activity7 />; 
  }

  return <div>Actividad no encontrada</div>;
}
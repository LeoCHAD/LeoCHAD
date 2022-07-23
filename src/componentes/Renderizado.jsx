import React from 'react';
import GraficBarra from './GraficBarra';
import GraficCirculo from './GraficCirculo';
import Graficlinea from './GraficLinea';
import GraficPentagono from './GraficPentagono';
import '../hoja-estilo/Renderizado.css';

function Renderizado({ grafico, inputs }) {

  if (grafico === 'barra') {
    return (
      <div className='renderizado__contenedor'>
        <GraficBarra inputs={inputs} />
      </div>
    );
  }
  else if (grafico === 'circulo') {
    return (
      <div className='renderizado__contenedor'>
        <GraficCirculo inputs={inputs} />
      </div>
    );
  }
  else if (grafico === 'linea') {
    return (
      <div className='renderizado__contenedor'>
        <Graficlinea inputs={inputs} />
      </div>
    );
  }
  else if (grafico === 'pentagono') {
    return (
      <div className='renderizado__contenedor'>
        <GraficPentagono inputs={inputs} />
      </div>
    );
  } else {
    return (
      <div className="renderizado__contenedor default">
        <div className='renderizado__fondo'></div>
      </div>
    );
  }
}

export default Renderizado;
import React from 'react';
import '../hoja-estilo/GraficPentagono.css';

class GraficPentagono extends React.Component {
  render() {
    return (
      <section className="grafico-pentagono__contenedor">
        <p className='grafico-pentagono__valor valor1'>val: 1</p>
        <p className='grafico-pentagono__valor valor2'>val: 2</p>
        <p className='grafico-pentagono__valor valor3'>val: 3</p>
        <p className='grafico-pentagono__valor valor4'>val: 4</p>
        <p className='grafico-pentagono__valor valor5'>val: 5</p>
        <div className="grafico-pentagono__pentagono">
          <div className="grafico-pentagono__subpentagono"></div>
        </div>
      </section>
    );
  }
}

export default GraficPentagono;
import React from 'react';
import '../hoja-estilo/GraficLinea.css';

class GraficLinea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linea1: 1,
      linea2: 2,
      linea3: 3,
      linea4: 4,
    }
  }
  render() {
    return (
      <section className="grafico-linea__contenedor">
        <div className='grafico-linea__plano'>
          <div className="grafico-linea__marcador marca1"></div>
          <div className="grafico-linea__linea linea1"></div>
          <div className="grafico-linea__marcador marca2"></div>
          <div className="grafico-linea__linea linea2"></div>
          <div className="grafico-linea__marcador marca3"></div>
          <div className="grafico-linea__linea linea3"></div>
          <div className="grafico-linea__marcador marca4"></div>
          <div className="grafico-linea__linea linea4"></div>
          <div className="grafico-linea__marcador marca5"></div>
        </div>
        <label className="grafico-linea__label label1">val: 1</label>
        <label className="grafico-linea__label">val: 2</label>
        <label className="grafico-linea__label">val: 3</label>
        <label className="grafico-linea__label">val: 4</label>
        <label className="grafico-linea__label">val: 5</label>
      </section>
    );
  }
}

export default GraficLinea;
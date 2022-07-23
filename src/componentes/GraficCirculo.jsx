import React from 'react';
import '../hoja-estilo/GraficCirculo.css';

class GraficCirculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section1: 1,
      section2: 2,
      section3: 3,
      section4: 4,
      section5: 5,
    }
  }
  render() {
    return (
      <section className="grafico-circulo__contenedor">
        <ul className="grafico-circulo__datos">
          <li className="grafico-circulo__valores">Val: { this.state.section1 }</li>
          <li className="grafico-circulo__valores">Val: { this.state.section2 }</li>
          <li className="grafico-circulo__valores">Val: { this.state.section3 }</li>
          <li className="grafico-circulo__valores">Val: { this.state.section4 }</li>
          <li className="grafico-circulo__valores">Val: { this.state.section5 }</li>
        </ul>
        <div className="grafico-circulo__circulo"></div>
      </section>
    );
  }
}

export default GraficCirculo;
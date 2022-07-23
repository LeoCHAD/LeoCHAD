import React from 'react';
import Opciones from './Opciones';
import '../hoja-estilo/Graficos.css'

class Graficos extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     res: '',
  //   }
  // }
  render() {
    return (
      <aside className='graficos__contenedor'>
        <Opciones
          opcion='barras'
          clickGraficHandler={this.props.clickGraficHandler}
          valor='barra'
        />
        <Opciones
          opcion='circular'
          clickGraficHandler={this.props.clickGraficHandler}
          valor='circulo'
        />
        <Opciones
          opcion='linear'
          clickGraficHandler={this.props.clickGraficHandler}
          valor='linea'
        />
        <Opciones
          opcion='poligono'
          clickGraficHandler={this.props.clickGraficHandler}
          valor='pentagono'
        />
      </aside>
    );
  }
}

export default Graficos;
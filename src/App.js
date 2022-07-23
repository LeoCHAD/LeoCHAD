import React from 'react';
import Graficos from './componentes/Graficos';
import Valores from './componentes/Valores';
import Renderizado from './componentes/Renderizado';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      grafico: '',
      entradas: ['', '', '', '', ''],
    }
  }
  clickGoHandler= ()=>{
    const entradasArreglo = this.state.entradas.map((val, index, state)=>{
      return val;
    });
    console.log(entradasArreglo);
    let i=0;
    for (const entrada of entradasArreglo) {
      if(!isNaN(entrada)) i++;
    }
    if(i<5){
      console.log('gol');
      return this.state.entradas;
    }
    console.log('fail');
    return undefined;
  };
  clickRestartHandler = (e) => {
    const res = this.state.entradas.map((val, index, state) => {
      val = null;
      return val;
    });
    console.log(res);
    const in1 = document.getElementById('1');
    const in2 = document.getElementById('2');
    const in3 = document.getElementById('3');
    const in4 = document.getElementById('4');
    const in5 = document.getElementById('5');
    in1.value.includes('')
    // let arreglo = [in1,in2,in3,in4,in5];
    // for (const inText of arreglo) {
      
    //   console.log(inText.value);
    // }

    this.setState({ entradas: res });
    console.log(this.state.entradas);
  };
  changeHandler = (e) => {
    const inObject = e.target;
    if (inObject.value.length > inObject.maxLength) {
      inObject.value = inObject.value.slice(0, inObject.maxLength);
    }
    const idInput = parseInt(e.target.id.trim());
    const updateState = this.state.entradas.map((val, index, state) => {
      if (index === idInput) {
        val = inObject.value;
      }
      // else{console.log('lool');}
      return val;
    });
    this.setState({ entradas: updateState });
    console.log(updateState);
  };
  clickGraficHandler = (e) => {//Determina el atributo "grafico" para Renderizado con el fin de renderizar el componente correspondiente
    const value1 = e.target.alt;
    this.setState({ grafico: value1 });
  };
  render() {
    return (
      <>
        <div className='App'>
          <Graficos clickGraficHandler={this.clickGraficHandler} />
          <Valores
            changeHandler={this.changeHandler}
            clickRestartHandler={this.clickRestartHandler}
            clickGoHandler={this.clickGoHandler}
          />
          <Renderizado
            grafico={this.state.grafico}
            inputs={this.state.entradas}
          />
        </div>
      </>
    );
  }
};

export default App;

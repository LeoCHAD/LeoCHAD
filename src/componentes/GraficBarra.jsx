import React from 'react';
import '../hoja-estilo/GraficBarra.css';

class GraficBarra extends React.Component {
    constructor(props){
      /*
      inputs,
      */
      super(props);
      this.state = {
        barra1: 1,
        barra2: 2,
        barra3: 3,
        barra4: 4,
        barra5: 5,
      }
    }
    alargarBarra1 = ()=>{
      const barra1 = document.querySelector('.barra1');
      barra1.style.transform = 'scaleY(9)';
      console.log('hola mundo');
      console.log(this.props.inputs);
    };
    alargarBarra2 = ()=>{
      const barra1 = document.querySelector('.barra3');
      barra1.style.transform = 'scaleY(9)';
      console.log('hola mundo');
    };
    alargarBarra3 = ()=>{
      const barra1 = document.querySelector('.barra4');
      barra1.style.transform = 'scaleY(9)';
      console.log('hola mundo');
    };
    alargarBarra4 = ()=>{
      const barra1 = document.querySelector('.barra5');
      barra1.style.transform = 'scaleY(9)';
      console.log('hola mundo');
    };
    alargarBarra5 = ()=>{
      const barra1 = document.querySelector('.barra1');
      barra1.style.transform = 'scaleY(9)';
      console.log('hola mundo');
    };
  render() {
    return (    
      <section className='grafico-barra__contenedor'>
        <div  onClick={()=> this.alargarBarra1()} className='grafico-barra__plano'>
          <div className='grafico-barra__barra barra1'></div>
          <div className='grafico-barra__barra barra2'></div>
          <div className='grafico-barra__barra barra3'></div>
          <div className='grafico-barra__barra barra4'></div>
          <div className='grafico-barra__barra barra5'></div>
        </div>
        <label className="grafico-barra__label label1">val: 1</label>
        <label className="grafico-barra__label">val: 2</label>
        <label className="grafico-barra__label">val: 3</label>
        <label className="grafico-barra__label">val: 4</label>
        <label className="grafico-barra__label">val: 5</label>
      </section>
    );
  }
}

export default GraficBarra;
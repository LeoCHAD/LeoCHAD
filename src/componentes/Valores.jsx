import React from 'react';
import Entradas from './Entradas';
import '../hoja-estilo/Valores.css';

function Valores({ changeHandler, clickRestartHandler, clickGoHandler }) {
  return (
    <div className='valores__contenedor'>
      <div className='valores__entradas'>
        <Entradas 
        valorEntrada='1'
        id={0}
        changeHandler={changeHandler }
        />
        <Entradas 
        valorEntrada='2'
        id={1}
        changeHandler={changeHandler }
        />
        <Entradas 
        valorEntrada='3'
        id={2}
        changeHandler={changeHandler }
        />
        <Entradas
        valorEntrada='4'
        id={3}
        changeHandler={ changeHandler }
        />
        <Entradas 
        valorEntrada='5'
        id={4}
        changeHandler={changeHandler}
        />
        <button 
        className='valores__restart boton'
        onClick={ (e)=> clickRestartHandler(e)}
        >RESTART</button>
      </div>
      <button 
      className="valores__aplicar boton"
          onClick={()=>clickGoHandler()}
      >GO!</button>
    </div>
  );
}

export default Valores;
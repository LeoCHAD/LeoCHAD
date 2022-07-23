import React from 'react';
import '../hoja-estilo/Entradas.css';

function Entradas({ valorEntrada, id, changeHandler }) {
  
  return (
    <div className='entradas__contenedor'>
      <label htmlFor="in" className='entradas__label'>Val: {valorEntrada}</label>
      <input
        id={id}
        type="number"
        className="entradas__valor"
        maxLength="3"
        placeholder='Valor'
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
}

export default Entradas;
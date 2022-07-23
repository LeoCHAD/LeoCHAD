import React from 'react';
import '../hoja-estilo/Opciones.css'

function Opciones({ opcion, clickGraficHandler,valor }) {
  return (
    <button
     className='opciones__boton'
     onClick={(e)=>clickGraficHandler(e)}
     >
      <img
        className='opciones__imagen'
        src={
          require(`../imagenes/grafico-${opcion}.png`)
        }
        alt={valor}
      />
    </button>
  );
}

export default Opciones;
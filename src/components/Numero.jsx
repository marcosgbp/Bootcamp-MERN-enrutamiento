import React from 'react';
import { useParams } from 'react-router-dom';

const Numero = () => {
    const {numero, colorText, colorFondo} = useParams();
    console.log("Color texto: "+colorText+" Color Fondo "+colorFondo);
  return (
    <div className='border text-center' style={{background:colorFondo, color:colorText}}>
        {isNaN(numero)?<h2>The word is: {numero}</h2>:<h2>Tu número es {numero}</h2>}
    </div>
  )
}

export default Numero
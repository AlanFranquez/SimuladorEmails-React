import React from 'react'

function Resultado({nombre, email, texto}) {
  return (

    <div className='resultados'>
            <h1>Datos enviados</h1>
            <div>
                <p><span>NOMBRE: </span>{nombre}</p>
                <p><span>CORREO ELECTRONICO: </span>{email}</p>
                <p> <span>TEXTO: </span>{texto}</p>
            </div>
                
    </div>
    
  )
}

export default Resultado
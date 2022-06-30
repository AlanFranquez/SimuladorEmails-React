import React, { useState } from 'react'
import Alerta from './Alerta';
import Resultado from './Resultado'

function Formulario({nombre, setNombre, email, setEmail, texto, setTexto}) {

    


    const [error, setError] = useState(false)
    const [resultado, setResultado] = useState(false)

    function handleNombre(e) {  
        setNombre(e.target.value)
    }

    function handleEmail(e) {  
        setEmail(e.target.value)
    }

    function handleTexto(e) {  
        setTexto(e.target.value)
    }

    function enviarDatos(e) {
        e.preventDefault();

        if(nombre === '' || texto === '' || email === '') {
            setError(true);

            setTimeout(() => {
                setError(false)
            }, 2000);

            return;
        }

        setError(false);
        
        const form = document.querySelector('form');

        form.reset();

        setResultado(true)
    }

  return (
    <>
        <form onSubmit={enviarDatos}>
           <input onChange={handleNombre} placeholder='Nombre' type='text'/>
           <input placeholder='correo' type='email' onChange={handleEmail}/>
           <textarea onChange={handleTexto} placeholder='Escribe aquí tu mensaje'/>

           {error ? <Alerta /> : null}
            <button type='submit'>Enviar datos</button>

            
            
                {resultado ? <Resultado nombre={nombre} email={email} texto={texto}/> : null} 
            
        </form>

    </>
  )
}

export default Formulario
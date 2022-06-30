import React, { useState } from 'react'
import Formulario from './componentes/Formulario'

function App() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('')

  // const [resultado, setResultado] = useState('')

  return (
    <>
      <div className='container'>
        <Formulario nombre={nombre} setNombre={setNombre} email={email} setEmail={setEmail} texto={texto} setTexto={setTexto} />


        
        
      </div>



      
     

      

    </>
  )
}

export default App
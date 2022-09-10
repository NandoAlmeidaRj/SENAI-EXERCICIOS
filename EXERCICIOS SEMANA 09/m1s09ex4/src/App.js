import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import'./App.css'
 
function App() {

 
  const [titulo, setTitulo] = useState("Escolha o tema");
  const [button, setButton] = useState('')
 
  return (
    <div>
      <h1>{titulo}</h1>

      <span>Botão clicado: {button}</span>
      <section>
      <button className="bt1" onClick={()  => setTitulo (<p className='azul'>" Tons de azul simboliza criatividade, juventude e alegria."</p>)} onClickCapture={()=> setButton (      <button onClick={()  => setTitulo ("TEMA 1 ")} onClickCapture={()=> setButton ()}  >
      Título 1
      </button>)}  >
      Título 1
      </button>

      <button className='bt2' onClick={()  => setTitulo (<p className='verde'>" Tons de verde significa esperança, liberdade, saúde e vitalidade."</p>)} onClickCapture={()=> setButton (      <button onClick={()  => setTitulo ("TEMA 1 ")} onClickCapture={()=> setButton ()}  >
      Título 2
      </button>)}  >
      Título 2
      </button>
      </section>
    </div>
  );
}
export default App; 
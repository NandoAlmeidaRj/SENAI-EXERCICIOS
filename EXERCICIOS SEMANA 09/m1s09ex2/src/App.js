import React, {useState} from "react";
import './App.css'

function App(){

  const [contador, setContador] = useState(0);

  return(
    <div>
      <h1>CONTADOR DE CLIQUE</h1>
      <h1>{contador}</h1>


      
      <button onClick={() => setContador(contador + 1)}>AUMENTAR</button>
      
    </div>
  )
}

export default App; 
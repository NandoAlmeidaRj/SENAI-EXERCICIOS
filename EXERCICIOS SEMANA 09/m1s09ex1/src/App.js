import React, {useState}  from "react";
import'./App.css'

function App(){

 const [frutas, setFrutas] = useState ("Frutas") 

  const [tarefas, setTarefas] = useState([
    'Morango', 'Pera', 'Manga', 'Uva', 'Banana'])

 

  return(
    <div className="div1">

      <h1>{frutas}</h1>

      <ul>

      {tarefas.map(tarefa => (
        <h3 key={tarefa}>{tarefa}</h3>
        
      )) }

      </ul>
      
    </div>
  )
}

export default App;
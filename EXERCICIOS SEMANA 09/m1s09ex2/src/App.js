import React, {useState, useEffect}  from "react";
import'./App.css'


function App(){




  const [tarefas, setTarefas] = useState([
    
    ]);

    const [input, setInput] = useState('');


    useEffect(()=>{
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas])


    function handleAdd(){
      setTarefas([...tarefas, input])
      setInput('')
    };
 
    console.log(tarefas)

  return(
    <div className="div1">
      <section>
      <h1>ADICIONE SUAS TAREFAS</h1>
      <p>OBS: Aparece no console também</p>
       
      <ul>
 
      

      {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
        
      )) }

      </ul>

      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
      
      </section>

      
    </div>
  )
}

export default App;
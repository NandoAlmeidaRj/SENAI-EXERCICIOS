import React, {useState, useEffect}  from "react";
import'./App.css'


function App(){




  const [tarefas, setTarefas] = useState([]);

    const [input, setInput] = useState('');

    const [usuario, setUsuario] = useState('')

    const [imagem, setImagem] = useState(<img src="contato.png"></img>)




    function handleAdd(){
      setTarefas([...tarefas, imagem, usuario, input,])
      setInput('')
      setUsuario('')
      setImagem(<img src="contato.png"></img>)
    };


  return(
    <div className="div1">
      <section>
      <h1 className="titulo">CAIXA DE MENSSAGENS</h1>
      <p className="aviso">Adicione seu usuario e menssagens!</p>
       
      <ul>
 
      
      <div className="divi2">
      { tarefas.map(tarefa => ( <p key={tarefa}>{tarefa}</p>)) }
      </div>
       
      
       
      </ul>

      

    
      <img  value={imagem} onChange={(e) => setImagem(e.target.value)}></img>
    
      <input className="usuario" placeholder="NOME DE USUARIO" type='text' value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>

      <input className="menssagem" placeholder="DIGITE SUA MENSSAGEM" type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>

      <button type="button" onClick={handleAdd}>ENVIAR</button>

      
      </section>

      
    </div>
  )
}

export default App;
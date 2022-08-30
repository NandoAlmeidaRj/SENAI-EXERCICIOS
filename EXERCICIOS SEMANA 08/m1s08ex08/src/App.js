import React from 'react';
import './App.css'
  
function App(props) {
  return (
    <div >
      <Contato foto={<img className='foto' src='Max.webp'/>} online={<img className='on' src='pngwing.com.png'/>} nome="Maxine " descrição="Deu ruim, to lascada..."></Contato>
      <Contato foto={<img className='foto1' src='vecsorrindo.jpeg'/>} online={<img className='on' src='pngwing.com.png'/>}  nome="Vecna" descrição="Mano, viu a Max por ai?"></Contato>
      <Contato foto={<img className='foto' src='Eleven.png'/>} online={<img className='on' src='pngwing.com.png'/>}  nome="Eleven" descrição="Meu nariz ta sangran... "></Contato>
      <Contato foto={<img className='foto' src='justin.jfif'/>} online={<img className='on' src='pngwing.com.png'/>}  nome="Dustin" descrição="Ela não vai resistir ao meu sorriso!"></Contato>

      
    </div>
  );
}

function Contato(props) {
  return (
    <section className='sec1'>
    <div className='estilo'>
      <hr/>
      {props.foto}
      {props.online}
    <section className='sec'>
      <p className='p1'> {props.nome}</p>
      <p> {props.descrição} </p>
      </section>
      <hr/>
    </div>
    </section>
  )
}


  

export default App;
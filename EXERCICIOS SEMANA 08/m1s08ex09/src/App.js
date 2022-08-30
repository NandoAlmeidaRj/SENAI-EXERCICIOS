import React from 'react';
import './App.css'


function App(props) {
  return (
    <div >
      <Produto descrição = "Tênis Feminino  Preto "  foto = {<img src='tenisPreto.jpg'></img>} preço = "179,90"  />
      <Produto descrição = "Tênis Feminino  Azul "  foto = {<img src='tenisazul.jpg'></img>} preço = "165,90"  />
      <Produto descrição = "Tênis Feminino  Rosa "  foto = {<img src='tenisrosa.jpg'></img>} preço = "180,00"  />
      <Produto descrição = "Tênis Feminino  Branco "  foto = {<img src='tenisbranco.jpg'></img>} preço = "176,90"  />
      <Produto descrição = "Tênis Slip On Feminino "  foto = {<img src='tenisamarelo.jpg'></img>} preço = "190,90"  />
      <Produto descrição = "Tênis Feminino Modele"  foto = {<img src='tenismodele.jpg'></img>} preço = "245,00"  />
      <Produto descrição = "Tênis Modele Preto "  foto = {<img src='tenismodelepreto.jpg'></img>} preço = "220,90"  />
      <Produto descrição = "Tênis Modele Colors "  foto = {<img src='teniscolor.jpg'></img>} preço = "280,00"  />
    </div>
      )}



function Produto(props) {
  return(

    <div>
    <section>
      <p>{props.descrição}</p>
      {props.foto}
      <h3>R$ {props.preço}</h3>
      <br/>
    </section>
    

    </div>

    

  )
}

export default App;
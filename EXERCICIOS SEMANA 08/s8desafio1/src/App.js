import React, { Component } from "react";
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Pokedex: [
        {nome: "Wartortle", id: "Nº008", foto: <img className="fotopekemon" src="008.png" ></img>, tipo: "Água", }, 
        {nome: "Steelix", id: "Nº208", foto: <img className="fotopekemon" src="208.png"></img>, tipo: "Aço" },
        {nome: "Buizel", id: "Nº418", foto: <img className="fotopekemon" src="418.png"></img>, tipo: "Elétrico" },
        {nome: "Porygon2", id: "Nº233", foto: <img className="fotopekemon" src="233.png"></img>, tipo: "Normal" },
        {nome: "Bidoof", id: "Nº399", foto: <img className="fotopekemon" src="399.png"></img>, tipo: "Normal" },
        {nome: "Floatzel", id: "Nº419", foto: <img className="fotopekemon" src="419.png"></img>, tipo: "Água" },
        {nome: "Dusclops", id: "Nº356", foto: <img className="fotopekemon" src="356.png"></img>, tipo: "Fantasma" },
        {nome: "Chesnaught", id: "Nº652", foto: <img className="fotopekemon" src="652.png" ></img>, tipo: "Grama" },
      ]
    }
  }


  render(){
    return(
      <div className="geral">
        <h1 className="titulo" ><img className="pokebola" src="pokebola.png"></img> Pokémon em Destaque</h1>  
            <h3 className="dadosgeral">
              {this.state.Pokedex.map((item)=>{
                return(
                  <div>
                   
                <section className="dadospokemon" key={this.state.Pokedex.id}>
                   
                  <h3 className="teste" >{item.nome} <br/> {item.id} <br/> {item.foto} <br/>  {item.tipo}</h3>
                </section>
            
                  </div>
                );
              })}
            </h3>
       </div>
    )
  }
}

export default App;
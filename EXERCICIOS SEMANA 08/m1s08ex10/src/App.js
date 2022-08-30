import React, { Component } from 'react' ;

import './App.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      nome: 'PAR e IMPAR',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this); //serve para poder acessar sem dar
    this.diminuir= this.diminuir.bind(this);

  }

  aumentar(){
   let state =  this.state;
   state.contador += 1;
   this.setState(state);

   if(state.contador % 2 == 0){
   state.nome = <p className='par'>PAR</p> ;
   }
   if(state.contador % 2 != 0){
    state.nome = <p className='impar'>IMPAR</p>;
   }
  
  }

  diminuir(){
    let state = this.state;
    state.contador -= 1;
    this.setState(state);
    
    if(state.contador % 2 == 0){
      state.nome = <p className='par'>PAR</p> ;
      }
      if(state.contador % 2 != 0){
       state.nome = <p className='impar'>IMPAR</p>;
      }
     
     }


  render(){
    return(
      <div>
        <section>
         <h1>Contador</h1>
        {this.state.nome}
       
        <h2>{this.state.contador}</h2>
        <h3>
        <button onClick={this.diminuir}>-</button>
         <button onClick={this.aumentar}>+</button> 
          </h3>
        </section>
      </div>
    )
  }
}

export default App; 
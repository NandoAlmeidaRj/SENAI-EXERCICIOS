import React from 'react';

import Table from './Table';

import'./App.css'

function App() {
const data = [

  { Nome: 'Fernando', Sobrenome: 'Almeida',  Idade: 25 , Celular: '(21)979782396'},
  { Nome: 'Ester', Sobrenome: 'Almeida', Idade: 21, Celular: '(22)99542-5362'},
  { Nome: 'José', Sobrenome: 'Antonio', Idade: 42, Celular: '(21)99447-8695'},
  { Nome: 'Patricia', Sobrenome: 'Almeida', Idade: 40, Celular: '(21)992445451'},
  { Nome: 'Eni', Sobrenome: 'Figueira', Idade: 62, Celular: '(21)99652-6853'},


]
 const head = {
  id: 'Ident',
  name: 'Nome',
  last: 'Sobre nome'

 }
  return (
 
    <div className='div1'>
      <hr/>
      <br/>
      <Table data={data} head={head}/>
      <br/>
      <br/>
      <hr/>

    </div>
  );
}

export default App;

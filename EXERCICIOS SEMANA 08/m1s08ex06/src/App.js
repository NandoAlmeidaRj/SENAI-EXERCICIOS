import React, { Fragment } from "react";

const Bot = (props) => {
return(
  <section>
      <button style={{backgroundColor: "red", margin: "300px"}} > {props.titulo}</button>
    </section>
)
}


export default function App(){
  return(
    <Bot titulo= "Clique Aqui"/>

    )
}
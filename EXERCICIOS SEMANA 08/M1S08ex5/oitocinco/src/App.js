const Soma = (props) => {
  return(
    <divi>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>A soma dos números é </h1> 
      <h1 style={{ fontSize: "50px", textAlign: "center", color: "red" }}>{props.n1 + props.n2}</h1>
    </divi>
  )
}

export default function App(){
  return(
    <Soma n1={10}  n2={3}/>
    
  )
}
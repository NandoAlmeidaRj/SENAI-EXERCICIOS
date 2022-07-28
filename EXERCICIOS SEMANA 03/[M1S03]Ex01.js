function parImpar(){
    let num = prompt("DIGITE UM NUMERO")
    let conta = (num / 2) 
    if ( conta % 1 ){
      document.getElementById("dados").innerHTML = `${num} é impar`
    }
    else {
      document.getElementById("dados").innerHTML = `${num} é par`
    }
  }
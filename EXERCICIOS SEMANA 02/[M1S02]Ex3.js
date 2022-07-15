function somar_dois_numeros( ){
    num1 =  prompt ("DIGITE O PRIMEIRO NUMERO");
    num2 =  prompt("GITITE O SEGUNDO NUMERO");
    let soma =  parseInt(num1) + parseInt(num2)

    document.getElementById('soma').innerHTML = `A soma dos dois valores é: ${soma}`

}
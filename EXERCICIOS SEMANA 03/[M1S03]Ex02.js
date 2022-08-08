function elementos(){
    let nomes = ['Nando <br>',  'Ester <br>', 'Patricia <br>', 'Junior <br>'];
    let res3 = nomes.join(' ')
    document.getElementById("dados").innerHTML = res3

    let quantidade = nomes.length
    document.getElementById("dados1").innerHTML = `Quantidade de elementos acima é de: ${quantidade}`

}
console.log(nomes)
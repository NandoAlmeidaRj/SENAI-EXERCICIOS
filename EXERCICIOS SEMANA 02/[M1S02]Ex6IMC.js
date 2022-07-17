alert('Calcule seu IMC')
function imc(){
    let altura = prompt("Qual a sua altura?");
    let peso = prompt("Quanto voçê pesa atualmente?");
    var resultado = peso / (altura * altura);
    if(resultado > 25 ){
        document.getElementById("dados").innerHTML = `Seu IMC é ${resultado} <br> Você está acima do peso, procure um médico`
    }
    else if(resultado < 24,90  >18 ){
        ocument.getElementById("dados1").innerHTML = `Seu IMC é ${resultado} <br> PARABÉNS!! Você está no peso ideal` }

        if(resultado < 18,00){
            ocument.getElementById("dados1").innerHTML = `Seu IMC é ${resultado} <br> Você está abaixo do peso, procure um médico` }       
}
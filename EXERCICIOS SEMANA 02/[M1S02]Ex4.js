function impar_par(){
var n = prompt("Digite um numero");
var total = n/2;

if(n & 1){
    document.getElementById('dados').innerHTML = `${n} é um numero IMPAR`;} 

else {
    document.getElementById('dados').innerHTML = `${n} é um numero PAR`;}

}
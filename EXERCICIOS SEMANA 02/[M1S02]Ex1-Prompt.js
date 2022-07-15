let nome_do_cliente = "";
let email_do_cliente = "";

function receber_dados_do_cliente(){
    nome_do_cliente = prompt("DIGITE SEU NOME");
    email_do_cliente = prompt("DIGITE SEU EMAIL");

    document.getElementById('title').innerHTML = `NOME: ${nome_do_cliente}  
    <BR> EMAIL: ${email_do_cliente}`;
}
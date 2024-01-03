/* var hora = new Date().getHours();

if (hora < 12) {
  alert("Bom dia");
} else if (hora > 12 && hora < 18) {
  alert("Boa Tarde");
} else {
  alert("Boa noite");
}
 */

function verificar() {
  let verifNome = document.getElementById("nome").value; // armazena dentro da variável verifNome o valor digitado no input de ID "nome"
  let p = document.getElementById("teste"); // cria uma variável para o campo de ID "teste" para não precisar escrever repetidamente o document.getElementById.
  p.style.textTransform = "capitalize"; //Deixa a primeira letra maiúscula no resultado final.

  if (verifNome == "" || verifNome == null) {
    p.innerHTML = "O campo não pode ser vazio.";
  } else {
    p.innerHTML = `O seu nome é ${verifNome}.`;
  }
}

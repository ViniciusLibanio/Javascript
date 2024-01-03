/* SWITCH

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.

O switch compara o TIPO do dado que foi inserido, diferencia maiúscula de minúscula, string, números...
*/

function verificaCor() {
  var cor = document.getElementById("cor").value;
  cor = cor.toLowerCase(); //Método para converter todos os dados inseridos em letras minúsculas.

  switch (cor) {
    case "azul":
      document.body.style.backgroundColor = "blue";
      break;

    case "vermelho":
      document.body.style.backgroundColor = "red";
      break;

    case "amarelo":
      document.body.style.backgroundColor = "yellow";
      break;

    case "roxo":
      document.body.style.backgroundColor = "purple";
      break;

    default:
      window.alert("nenhuma cor foi escolhida.");
  }
}

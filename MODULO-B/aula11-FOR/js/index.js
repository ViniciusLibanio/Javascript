/* Laço de repetição FOR
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

dentro do for, utiliza-se 3 parâmetros:

1- o ponto inicial (let i = 0)
2- a condição (i < 10001)
3- o que acontece depois da condição (i++)
*/

/* for (let i = 0; i < 10001; i++) {
  document.getElementById("teste").innerHTML += i + ", ";
} */

var ano = new Date().getFullYear();

for (i = ano; i >= 1900; i++) {
  document.getElementById(
    "ano"
  ).innerHTML += `<option value= ${i}> ${i}</option>`;
}

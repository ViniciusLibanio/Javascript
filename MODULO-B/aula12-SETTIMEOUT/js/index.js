/*EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout (function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado em milisegundos.

setInterval(function, milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

function ativarContagem() {
  document.getElementById("tempo").innerHTML = "Começou a contar!";

  //EXECUTA APENAS UMA VEZ APÓS O TEMPO DETERMINADO.
  tempo = setTimeout(function () {
    document.getElementById("tempo").innerHTML = "Executou o setTimeout";
  }, 5000);
}

function pararContagem() {
  clearTimeout(tempo);
  document.getElementById("tempo").innerHTML = "Parou a contagem";
}

function ativar() {
  tempo = setInterval(function () {
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseFloat(cronometro) - 1;

    if (soma === 0) {
      document.getElementById("tempo").innerHTML = "Tempo ESGOTADO!";
      parar();
    } else {
      document.getElementById("tempo").innerHTML = soma;
    }
  }, 1000);
}

function parar() {
  clearInterval(tempo);
}

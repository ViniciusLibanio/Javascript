/* FUNÇÕES
Uma função JavaScript é um bloco de código para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).

Os parênteses são para colocar valores de entrada, ou deixa-los em branco.
*/


//FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}

//FUNÇÃO DE COTAÇÃO DE DOLAR
function realParaDolar (real, cotacaoDolar) {
    return real * cotacaoDolar;
}

function alertaHello() {
    alert("Ola, Mundo!");
}

var valorReal = 3;
var cotacao = 5;

var res = realParaDolar(valorReal, cotacao);

document.getElementById("texto").innerHTML = soma(10, 11)

resultado = (soma(10,1))
alert(res)

alertaHello()
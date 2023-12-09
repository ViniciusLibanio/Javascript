/* Vamos entender Operadores:
Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição (=)
3) Operadores de Sequência (concatenação)
4) Operadores de Comparação
5) Operador Condicional (ternário)
6) Operadores Lógiocos
    && = e
    || = ou

*/

/* var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
alert(total) */




/* 
1) Operadores Aritméticos (matemáticos)

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = ++valor1; /** ++ (incremento e -- (decremento)) */
/* alert(total);
alert('O valor1 ficou: ' + valor1) */



/* 
2) Operadores de Atribuição

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 += valor2;
valor1 = valor1 + valor2; 
'OS DOIS JEITOS ACIMA ESTÃO CERTOS E RETORNARÃO O MESMO RESULTADO.*/




/* 
3) Operadores de Sequência

var valor1, valor2, total;
valor1 = "Vinicius "
valor2 = "Libanio"

total = valor1 + valor2;

"ISSO IRÁ CONCATENAR AS DUAS STRINGS."
*/


/*
4) Operadores de Comparação (true ou false) 
    < > <= >= == === !== != 

    var valor1, valor2, total;
    valor1 = 8;
    valor2 = 8;

    total = (valor1 < 4);
    alert(total);
*/

/*
5) Operadores Condicionais (ternário)

    var idade, eleitor;
    idade = 17;
    eleitor = (idade<18) ? "NÃO, eleitor" : "SIM, eleitor";

    alert(`A resposta é ${eleitor}`)
*/

/* var idade, eleitor;
idade = 65;
eleitor = (idade<18) ? "NÃO, eleitor" : "SIM, eleitor";

resultado = !(idade > 60 && idade < 70) /* o sinal de ! antes da comparação, diz que o que está dentro NÃO é verdade */
/* alert(resultado) */
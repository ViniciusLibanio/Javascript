/* ARRAYS ou MATRIZ
Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição (índice).

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".
*/

const lista = [
  //QUANDO SE PASSA TODOS OS ITENS, É CONSIDERADO UM ARRAY LITERAL.
  "arroz",
  "feijão",
  "macarrão",
  "leite",
];

const pessoa = ["Vinicius", "Libanio", 33]; //ARRAY
const pessoas = { nome: "Vinicius", sobrenome: "Libanio", idade: 33 }; //OBJETO

pessoa.shift(); //REMOVE O PRIMEIRO ITEM DA MATRIZ, ATENTAR, POIS TODOS OS INDICES SERÃO ALTERADOS.
pessoa.unshift("Vini"); //ADICIONA EM PRIMEIRO O ITEM DECLARADO.
pessoa.pop(); //RETIRA O ÚLTIMO ITEM DA MATRIZ(ARRAY)
pessoa.push("Brasileiro"); //adiciona um item ao final do array
delete pessoa[0]; // DELETA O ITEM DECLARADO NO INDICE, PORÉM DEIXA O ESPAÇO COMO UNDEFINED, NÃO SENDO OCUPADO.

const lista1 = ["arroz", "feijão", "leite", "macarrão"];
const lista2 = ["suco", "refrigerante", "carne"];
const superLista = lista1.concat(lista2);

document.getElementById("teste2").innerHTML = superLista.join(", ");

const alfabeto = [
  "F",
  "H",
  "C",
  "D",
  "O",
  "A",
  "G",
  "S",
  "B",
  "L",
  "J",
  "K",
  "I",
  "M",
  "N",
  "E",
  "P",
  "X",
  "R",
  "T",
  "U",
  "V",
  "Q",
  "W",
  "Y",
  "Z",
];

const alfabetoOrdem = alfabeto.sort(); //DEIXA EM ORDEM ALFABÉTICA.

/* alert(pessoa[pessoa.length - 1]); */ //exibe sempre o último item do array.

/* alert(Array.isArray(pessoa));  */ //retorna TRUE, confirmando que a variável é um array.

document.getElementById("teste").innerHTML = alfabetoOrdem;

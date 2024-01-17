/*MANIPULAR DATAS EM JAVASCRIPT*/

//COMANDO BASE PARA PEGAR DATAS
let data = new Date();

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGAR MÊS ATUAL - DE 0 a 11, SENDO 0 JANEIRO, COMO SE FOSSE MATRIZ.
let mes = data.getMonth();
console.log(mes);

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//PEGAR DIA DO MÊS
let diaMes = data.getDate();
console.log(diaMes);

//PEGAR O DIA DA SEMANA - DE 0 a 6
let diaSemana = data.getDay();
const diaEscrito = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

let diaResultado = diaEscrito[diaSemana];
console.log(diaResultado);

//PARA PEGAR A HORA - 0 a 23
let hora = data.getHours();
console.log(hora);

//PARA PEGAR OS MINUTOS - 0 a 59
let minutos = data.getMinutes();
console.log(minutos);

//PARA PEGAR OS SEGUNDOS - 0 a 59
let segundos = data.getSeconds();
console.log(segundos);

//PARA PEGAR OS MILISEGUNDOS - 0 a 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//PARA PEGAR A DATA NO PADRÃO BRASILEIRO - DIA/MES/ANO
let dataBR = data.toLocaleString("pt-BR", { dateStyle: "short" }); //O PARÂMETRO {dateStyle: 'short'} e {timeStyle: 'short'} para mostrar somente data ou hora, no padrão brasileiro.
console.log(dataBR);

//PEGANDO VALORES SEPARADOS PARA FAZER A DATA PADRÃO BR
d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
const mesCompleto = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

ano = d.getFullYear();

function addZero(x) {
  return x < 10 ? "0" + x : "" + x;
} //ESSA FUNÇÃO ADICIONA UM ZERO NA FRENTE DO DIA E DO MÊS SE ALGUM DELES FOR MENOR QUE 10

let dataPadraoBR = addZero(diaMes) + "/" + mesCompleto[mes] + "/" + ano;
console.log(dataPadraoBR);

//COMPRARA DATAS, MAIOR OU MENOS. EX: SISTEMA DE VENCIMENTOS.
var hoje = new Date();
var vencimento = new Date(2024, 0, 18);

if (hoje > vencimento) {
  console.log("Sua conta está vencida");
} else {
  console.log("Ainda não venceu, tudo certo!");
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log("Faltam " + diferencaDias + " dias, para acabar o ano.");

console.log(diferencaTempo); //RESULTADO EM MILISEGUNDOS, SEM CONVERSÃO

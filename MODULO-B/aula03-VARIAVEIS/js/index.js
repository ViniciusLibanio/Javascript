//DECLARAÇÃO DE VARIÁVEL
var nome, sobrenome, nomeCompleto;

//ATRIBUIÇÃO DE VALORES
nome = 'Vinícius';
sobrenome = 'Libanio';
nomeCompleto = nome + " " + sobrenome;

document.getElementById('texto').innerHTML = nomeCompleto;

//DIFERENÇAS ENTRE LET, VAR, E CONST.

/*
LET - Torna a variável única, não pode ser re-declarada.
    - Funciona sempre dentro do seu escopo. Nunca se sobreescreve, funciona no bloco que foi declarado.


VAR - Pode ser re-declarado.
    - É universal. Mesmo que em bloco separado ele é redefinido.

CONST - É a regra mais restrita de todas, ela NUNCA muda, uma    vez atribuida, sempre será aquele valor.
*/
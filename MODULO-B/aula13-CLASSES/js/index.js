/*AS CLASSES PRECISAM SER SEMPRE DECLARADAS ANTES PARA QUE SE CRIE O OBJETO.


*/

//O nome das classes sempre devem começar com a letra MAIÚSCULA quando for nomear.

class Carro {
  constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
  }

  buzina() {
    return this.modelo + " Buzinou: Biiiiiiiiiiiiii";
  }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagem", "Gol", 2010);
console.log(uno.buzina());
console.log(gol);

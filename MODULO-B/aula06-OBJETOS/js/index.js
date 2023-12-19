/* OBJETOS:

    São basicamente variáveis com muitos valores dentro.

    Ex: const carro = {marca: "Ford", modelo: "ka", ano: 2015}

    Os valores dentro de um objeto são chamados PROPRIEDADES.

    Objetos também podem ter métodos. um método é uma função colocada dentro de uma propriedade.
*/

const carro = {
    marca:"Ford",
    ano:2015,
    modelo:"ka",
    placa:"ABC-1234",
    buzina: function () {alert ("biiiiiiii")},
    completo: function() {
    return "A marca é " + this.marca + " e o modelo é " + this.modelo + "."        
    },
};


alert(carro.completo())
//console.log(carro.ano);


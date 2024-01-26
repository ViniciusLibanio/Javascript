let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("areaLista");

function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  //SE NÃO FOR VAZIO, NEM NULO, NEM UNDEFINED
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="itemIcone">
            <i id= "icone_${contador}" class="gg-danger"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="itemNome">
             ${valorInput}
        </div>
        <div class="itemBotao">
            <button onclick="deletar(${contador})" id="delete">
            <i class="gg-trash"></i>
                Excluir
            </button>
        </div>
  </div>`;

    //ADICIONANDO NOVA TAREFA
    main.innerHTML += novoItem;

    //LIMPANDO CAMPO INPUT E DANDO FOCO PARA DIGITAR NOVAMENTE
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("gg-danger");
    icone.classList.add("gg-check-o");
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("gg-check-o");
    icone.classList.add("gg-danger");
  }
}

input.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é "Enter"
  if (event.key === "Enter") {
    //CHAMA A FUNÇÃO QUANDO O ENTER É PRESSIONADO
    addTarefa();
  }
});

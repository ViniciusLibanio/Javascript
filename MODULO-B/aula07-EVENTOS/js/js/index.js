/* EVENTOS:

    Eventos são ações disparadas pela interação dos usuários na página.
    É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

    Existem muitos eventos. Veja os mais utilizados:

    onclick -> Disparado quando recebe um click.

    ondblclick -> Disparado quando clique duplo.
    
    onmouseover -> Disparado quando o 
    mouse está sobre.

    onmouseout -> Disparado quando o mouse é movido para fora do elemento.

    onmousemove -> Disparado quando o mouse é movido NO ELEMENTO.

    onmousedown -> Disparado quando o click do botão for pressionado.

    onmouseup -> Disparado quando o click do botão é LIBERADO.

    onfocus -> Disparado quando o elemento recebe o foco. Válido para input.

    onchange -> Disparado quando existe uma mudança no conteúdo. "ao mudar".

    onblur -> Disparado quando o elemento perde o foco.

    onkeydown -> Disparado quando uma tecla é pressionada.

    onkeyup -> Disparado quando uma tecla é solta sobre um elemento.

    onload -> Disparado quando a página terminou de ser carregada. Body.

    onresize -> Disparado quando há um redimencionamento de janela.

*/

function eventoClique() {
  //alert("acionou um evento de click.");
  document.body.style.backgroundColor = "yellow";
}

function eventoDblClique() {
  alert("Evento de clique duplo.");
}

function soltarBotao() {
  document.body.style.backgroundColor = "red";
}

function pressionarBotao() {
  document.body.style.backgroundColor = "blue";
}

function viraVermelho() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}

function voltaNormal() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "aquamarine";
}

/*function adicionaTexto() {
    let p = document.getElementById("teste");
    p.append("O mouse moveu.");
}*/

function campoFocado() {
  let cor = document.getElementById("campoTexto");
  cor.style.backgroundColor = "pink";
}

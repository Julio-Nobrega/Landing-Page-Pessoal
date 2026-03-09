// AULA 3

/*FUNCIONA MAS É NOTA 8

function mudarCor(elemento) {
  elemento.classList.toggle("ativo");
}
card.addEventListener("click", function() {
card.classList.toggle("ativo");

*******************************
FUNCIONA MAS É NOTA 6

function mudarCor(elemento) {
  if (elemento.style.backgroundColor === "white") {
    elemento.style.backgroundColor = "red";
  } else {
    elemento.style.backgroundColor = "white";
  }
}*/

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("ativo"); // card
  });
});

//cria a constante cards = todos os seletores ".card"
//para cada cards acione a função (card)
//no card quando alguém clicar nesse card, execute essa função.(evento("click"),adicionamos a função())
// função adicionada - card adiciona a class do css "ativo"

//RESUMO
// na constante criada quero todos os seletores .card
// e para cada um deles adicione uma função card
// em cada card adiciona o evento de clique e chame a função
// função atiavada no card clicado adiciona o css .ativo

//*******************

//NO CASO DE DEIXAR SÓ UM CLICAVEL AO CLICAR EM UM OOUTRO VOLTA AO NORMAL
/*const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // remove de todos
    cards.forEach(c => c.classList.remove("ativo"));

    // adiciona só no clicado
    card.classList.add("ativo");

  });
});
*/

//FIM

//AULA 4

const cardP = document.querySelector(".cardaula4");
cardP.addEventListener("mouseover", function () {
  cardP.style.backgroundColor = "rgb(134, 134, 241)";
});
cardP.addEventListener("mouseout", function () {
  cardP.style.backgroundColor = "whitesmoke";
});
cardP.addEventListener("click", function () {
  cardP.style.backgroundColor = "rgb(250, 95, 95)";
});

/*const cardP = document.querySelector(".cardaula4");

if (cardP) {
  cardP.addEventListener("mouseover", function () {
    cardP.style.backgroundColor = "rgb(134, 134, 241)";
  });

  cardP.addEventListener("mouseout", function () {
    cardP.style.backgroundColor = "whitesmoke";
  });

  cardP.addEventListener("click", function () {
    cardP.style.backgroundColor = "rgb(250, 95, 95)";
  });
}*/

//AULA 5 -
let contador = 1;
//let do contador

const botao = document.querySelector("#criarCard");

const container = document.querySelector(".containerAula5");

botao.addEventListener("click", function () {
  //para cada click no notão
  const novoCard = document.createElement("div");
  //cria um elemento HTML (crio uma nova div onde adiciona o novo card)

  novoCard.classList.add("cardNovo");
  //adiciona classe no card novo

  novoCard.textContent = "Card " + contador + "/ Clique para mudar de cor / Duplo clique para remover";
  //adiciona texto dentro do card + 1 numero do contador

  contador++;
  //contador + 1

  container.appendChild(novoCard);
  //Ele entra dentro da div.

  novoCard.addEventListener("click", function () {
    novoCard.classList.toggle("cliquecard");
  });
  //ao clicar no card ele muda de cor

  novoCard.addEventListener("dblclick", function () {
    novoCard.remove();
    //ao dar duplo clique o card é removido
  });
});

//AULA 6
const botaoFrutas = document.getElementById("btnFrutas");
const frutas = document.getElementById("listaFrutas");

botaoFrutas.addEventListener("click", function(){

  if(frutas.classList.contains("escondido")){
    frutas.classList.remove("escondido");
  }else{
    frutas.classList.add("escondido");
  }
});

const botaoVerduras = document.getElementById("btnVerduras");
const verduras = document.getElementById("listaVerduras");

botaoVerduras.addEventListener("click", function(){
  if(verduras.classList.contains("escondido")){
    verduras.classList.remove("escondido");
  }
  else{
    verduras.classList.add("escondido");
  }
});

//AULA 7

const botaoCarnes = document.getElementById("btnCarnes");
const carnes = document.getElementById("listaCarnes");

botaoCarnes.addEventListener("click", function(){
  molhos.classList.add("escondido");
  carnes.classList.toggle("escondido");
});

const botaoMolhos = document.getElementById("btnMolhos");
const molhos = document.getElementById("listaMolhos");

botaoMolhos.addEventListener("click", function(){
  carnes.classList.add("escondido");
  molhos.classList.toggle("escondido");
});




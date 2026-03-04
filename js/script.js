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

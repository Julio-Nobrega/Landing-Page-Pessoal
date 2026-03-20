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
//FIM


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

  novoCard.textContent =
    "Card " +
    contador +
    "/ Clique para mudar de cor / Duplo clique para remover";
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
//FIM


//AULA 6
const botaoFrutas = document.getElementById("btnFrutas");
const frutas = document.getElementById("listaFrutas");

botaoFrutas.addEventListener("click", function () {
  if (frutas.classList.contains("escondido")) {
    frutas.classList.remove("escondido");
  } else {
    frutas.classList.add("escondido");
  }
});

const botaoVerduras = document.getElementById("btnVerduras");
const verduras = document.getElementById("listaVerduras");

botaoVerduras.addEventListener("click", function () {
  if (verduras.classList.contains("escondido")) {
    verduras.classList.remove("escondido");
  } else {
    verduras.classList.add("escondido");
  }
});
//FIM


//AULA 7
const botaoCarnes = document.getElementById("btnCarnes");
const carnes = document.getElementById("listaCarnes");

const botaoMolhos = document.getElementById("btnMolhos");
const molhos = document.getElementById("listaMolhos");

botaoCarnes.addEventListener("click", function () {
  molhos.classList.add("escondido");
  carnes.classList.toggle("escondido");
});

botaoMolhos.addEventListener("click", function () {
  carnes.classList.add("escondido");
  molhos.classList.toggle("escondido");
});
//FIM


//AULA 8
const botaoBuscar = document.getElementById("buscarGit");
const resultado = document.getElementById("resultadoGit");
const repos = document.getElementById("repositorios");

botaoBuscar.addEventListener("click", function () {
  const usuario = document.getElementById("usuarioGit").value;

  fetch("https://api.github.com/users/" + usuario)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      resultado.innerHTML = `
        <img src="${dados.avatar_url}" width="120">
        <h3>${dados.name}</h3>
        <p>${dados.bio}</p>
        <p>Repositórios: ${dados.public_repos}</p>
      `;

      // BUSCAR REPOSITÓRIOS
      fetch("https://api.github.com/users/" + usuario + "/repos")
        .then(function (resposta) {
          return resposta.json();
        })
        .then(function (lista) {
          repos.innerHTML = "<h3>Repositórios</h3>";

          lista.forEach(function (repo) {
            repos.innerHTML += `
              <div class="repo">
                <p><strong>${repo.name}</strong></p>
                <p>Linguagem usada: ${repo.language}</p>
                <p>Estrelas: ${repo.stargazers_count}</p>
              </div>
              <hr>
            `;
          });
        });
    });
});


//aula 9
/*
const botaoCep = document.getElementById("buscarCep");
const resultadoBusca = document.getElementById("resultadoCep");

botaoCep.addEventListener("click", function () {
  let cep = document.getElementById("cepInput").value;

  // remove tudo que não for número
  cep = cep.replace(/\D/g, "");

  // valida tamanho de 8 caracteres
  if (cep.length !== 8) {
    resultadoCep.innerHTML = "CEP inválido. Digite 8 números.";
    return;
  }

  //mensagem enquanto carrega a página
  resultadoCep.innerHTML = "Carregando...";
  //buscar no site
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //após o envio criar
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      //Se der erro no cep retonar a mensagem
      if (dados.erro) {
        resultadoCep.innerHTML = "CEP não encontrado.";
        return;
      }
      //valores de resposta
      resultadoBusca.innerHTML = `
      <p>Rua: ${dados.logradouro}</p>
      <p>Bairro: ${dados.bairro}</p>
      <p>Cidade: ${dados.localidade}</p>
      <p>Estado: ${dados.uf}</p>
      <p>DDD: ${dados.ddd}</p>
      <p>Complemento: ${dados.complemento}</p>
    `;
    });
*/
//FIM


//aula 10
/*const botaoFilme = document.getElementById("buscarFilme");
const resultadoFilme = document.getElementById("resultadoFilme");

botaoFilme.addEventListener("click", function () {
  const filme = document.getElementById("filmeInput").value;

  fetch(`https://www.omdbapi.com/?apikey=9b3d8c5a&s=${filme}`)
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      if (!dados.Search) {
        resultadoFilme.innerHTML = "Filme não encontrado";
        return;
      }

      resultadoFilme.innerHTML = "";

      dados.Search.forEach(function (movie) {
        resultadoFilme.innerHTML += `
          <div class="cardFilme">
            <img src="${movie.Poster}" width="120">
            <h3>${movie.Title}</h3>
            <p>Ano: ${movie.Year}</p>
          </div>
        `;
      });
    });
});
*/
//FIM


//aula14 - botão desligado, busca automatica ao digitar 8 numeros
/*const cepInput = document.getElementById("cepInput");
const resultadoCep = document.getElementById("resultadoCep");
//adidicona o evento "input"
cepInput.addEventListener("input", function () {
// pega o valor do que foi digitado
  let cep = cepInput.value;

  // remove tudo que não for número
  cep = cep.replace(/\D/g, "");

  // só busca quando tiver 8 números
  /(cep.length !== 8) {
    return;
  
// mensagem de carregamento
  resultadoCep.innerHTML = "Carregando...";

  fetch(`https://viacep.com.br/ws/${cep}/json/`)

    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {

      if (dados.erro) {
        resultadoCep.innerHTML = "CEP não encontrado.";
        return;
      }

      resultadoCep.innerHTML = `
        <p><strong>Rua:</strong> ${dados.logradouro}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        <p><strong>Cidade:</strong> ${dados.localidade}</p>
        <p><strong>Estado:</strong> ${dados.uf}</p>
      `;
    });
        */
//FIM


/*
//aula 15 - retorno dos dados dentro do campo input usando as constantes e não inner html
const cepInput = document.getElementById("cepInput");
const mensagemCep = document.getElementById("mensagemCep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");

//adidicona o evento "input"
cepInput.addEventListener("input", function () {
  // pega o valor do que foi digitado
  let cep = cepInput.value;

  // remove tudo que não for número
  cep = cep.replace(/\D/g, "");

  //só busca quando tiver 8 números
  if (cep.length !== 8) {
    return;
  }

  // mensagem de carregamento
  mensagemCep.innerHTML = "Buscando endereço...";

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      // caso não localize retorne a msg
      if (dados.erro) {
        resultadoCep.innerHTML = "CEP não encontrado.";
        return;
      }
      // retorna os valores dentro das contantes
      rua.value = dados.logradouro;
      bairro.value = dados.bairro;
      cidade.value = dados.localidade;      
      estado.value = dados.uf;

      mensagemCep.innerHTML = "Endereço encontrado";
    });
});*/

//FIM


//aula 16
const cepInput = document.getElementById("cepInput");
const mensagemCep = document.getElementById("mensagemCep");

const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

//adiciona o evento "input"
cepInput.addEventListener("input", function () {
  // pega o valor do que foi digitado
  let cep = cepInput.value;

  // remove tudo que não for número
  cep = cep.replace(/\D/g, "");

  //aplica a máscara
 if (cep.length > 5) {
   //slice(inicio, fim) corta a string nos pontos determinados (parte 1 (0,5) + inserção de string complementar ("-") parte 2 (5,8)")
  cep = cep.slice(0,5) + "-" + cep.slice(5,8); 
  cepInput.value = cep;
 }

 if (cep.length !==9) {
  return;}

  // mensagem de carregamento
  mensagemCep.innerHTML = "Buscando endereço...";

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      // caso não localize retorne a msg
      if (dados.erro) {
        resultadoCep.innerHTML = "CEP não encontrado.";
        return;
      }
      // retorna os valores dentro das contantes
      rua.value = dados.logradouro;
      bairro.value = dados.bairro;
      cidade.value = dados.localidade;      
      estado.value = dados.uf;

      mensagemCep.innerHTML = "Endereço encontrado";
    });
});
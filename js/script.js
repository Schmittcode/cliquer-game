// VARIÁVEIS DO JOGO
let pontuacao = 0;
let valorPorClique = 1;
let upgradesComprados = 0;
let pontosPorSegundo = 0;
let custoUranio = 10;
let custoSupercondutor = 50;
let custoLaser = 500;
let custoResfriamento = 5000;
let custoBobina = 45000;
let custoCriogenico = 250000;
let custoProcessador = 1600000;
let custoInjetor = 15600000;
let custoQuantico = 1460000000;
let meta = 500;
let timerId;

// SELEÇÃO DE ELEMENTOS DO HTML
const pontuacaoEls = document.querySelectorAll(".valor-pontuacao");
const valorPorCliqueEl = document.getElementById("valorclique");
const upgradesCompradosEl = document.getElementById("upgrades");
const mensagemEl = document.getElementById("mensagem");
const btnClique = document.getElementById("botaoClique");
const valorPorSegundoEl = document.getElementById("valorPorSegundo");

// FUNÇÕES GERAIS
function atualizarPontuacao() {
  pontuacaoEls.forEach(function (elemento) {
    elemento.textContent = pontuacao;
  });
}

function verificarVitoria() {
  if (pontuacao >= meta) {
    mostrarMensagem("Meta Concluída!");
    meta *= 2;
  }
}

// CLIQUE PRINCIPAL NO REATOR
btnClique.addEventListener("click", function () {
  pontuacao += valorPorClique;
  atualizarPontuacao();
  verificarVitoria();
});

// MOTOR DE GERAÇÃO PASSIVA
setInterval(() => {
  if (pontosPorSegundo > 0) {
    pontuacao += pontosPorSegundo;
    atualizarPontuacao();
    verificarVitoria();
  }
}, 1000);

//ANIMAÇÂO DA MENSAGEM
function mostrarMensagem(texto) {
    mensagemEl.textContent = texto;
    mensagemEl.style.animation = "none";
    mensagemEl.offsetHeight;
    mensagemEl.style.animation = "subirSumir 2.5s ease-out forwards"
}
// VARIÁVEIS DO JOGO 
let pontuacao = 0;
let valorPorClique = 1;
let upgradesComprados = 0;
let pontosPorSegundo = 0; 
let custoUranio = 10;
let custoSupercondutor = 50;
let custoLaser = 500;
let meta = 500;
let timerId;

// SELEÇÃO DE ELEMENTOS DO HTML
const pontuacaoEls = document.querySelectorAll(".valor-pontuacao");
const valorPorCliqueEl = document.getElementById("valorclique");
const upgradesCompradosEl = document.getElementById("upgrades");
const mensagemEl = document.getElementById("mensagem");
const btnClique = document.getElementById("botaoClique");

// Novos elementos da loja 
const valorPorSegundoEl = document.getElementById("valorPorSegundo");
const btnUranio = document.getElementById("btnUranio");
const custoUranioEl = document.getElementById("custoUranio");
const btnSupercondutor = document.getElementById("btnSupercondutor");
const custoSupercondutorEl = document.getElementById("custoSupercondutor");
const btnLaser = document.getElementById("btnLaser");
const custoLaserEl = document.getElementById("custoLaser");

// FUNÇÕES GERAIS 
function atualizarPontuacao() {
  pontuacaoEls.forEach(function(elemento){
    elemento.textContent = pontuacao;
  });
}

function verificarVitoria() {
  if(pontuacao >= meta) {
    mensagemEl.textContent = "Meta Concluída!";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 4000);
    meta *= 2;
  }
}

// CLIQUE PRINCIPAL NO REATOR
btnClique.addEventListener("click", function() {
  pontuacao += valorPorClique;
  atualizarPontuacao();
  verificarVitoria();
});

// UPGRADE 1: HASTE DE URÂNIO (+1 por clique) 
btnUranio.addEventListener("click", () => {
  if (pontuacao >= custoUranio) {
    pontuacao -= custoUranio;
    valorPorClique += 1;
    upgradesComprados += 1;
    custoUranio = Math.floor(custoUranio * 1.3);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorCliqueEl.textContent = valorPorClique;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoUranioEl.textContent = custoUranio;

    mensagemEl.textContent = "Haste de Urânio Comprada!";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 2000);
  }
});

// UPGRADE 2: FIAÇÃO SUPERCONDUTOR (+2 por segundo)
btnSupercondutor.addEventListener("click", () => {
  if (pontuacao >= custoSupercondutor) {
    pontuacao -= custoSupercondutor;
    pontosPorSegundo += 2;
    upgradesComprados += 1;
    custoSupercondutor = Math.floor(custoSupercondutor * 1.5);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoSupercondutorEl.textContent = custoSupercondutor;

    mensagemEl.textContent = "Fiação Ativada!";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 2000);
  }
});

// UPGRADE 3: LASER DE FUSÃO (+10 por segundo) 
btnLaser.addEventListener("click", () => {
  if (pontuacao >= custoLaser) {
    pontuacao -= custoLaser;
     pontosPorSegundo += 10;
     upgradesComprados += 1;
    custoLaser = Math.floor(custoLaser * 2.5);

   // atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoLaserEl.textContent = custoLaser;

    mensagemEl.textContent = "Laser de Fusão Ativado!";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 2000);
    } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function() { mensagemEl.textContent = "" }, 2000);
    }
   });
   

// MOTOR DE GERAÇÃO PASSIVA (A cada 1 segundo) 
setInterval(() => {
  if (pontosPorSegundo > 0) {
    pontuacao += pontosPorSegundo;
    atualizarPontuacao();
    verificarVitoria();
  }
}, 1000);
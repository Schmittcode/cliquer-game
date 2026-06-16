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

// Novos elementos da loja
const valorPorSegundoEl = document.getElementById("valorPorSegundo");
const btnUranio = document.getElementById("btnUranio");
const custoUranioEl = document.getElementById("custoUranio");
const btnSupercondutor = document.getElementById("btnSupercondutor");
const custoSupercondutorEl = document.getElementById("custoSupercondutor");
const btnLaser = document.getElementById("btnLaser");
const custoLaserEl = document.getElementById("custoLaser");
const btnResfriamento = document.getElementById("btnResfriamento");
const custoResfriamentoEl = document.getElementById("custoResfriamento");
const btnBobina = document.getElementById("btnBobina");
const custoBobinaEl = document.getElementById("custoBobina");
const btnCriogenico = document.getElementById("btnCriogenico");
const custoCriogenicoEl = document.getElementById("custoCriogenico");
const btnProcessador = document.getElementById("btnProcessador");
const custoProcessadorEl = document.getElementById("custoProcessador");
const btnInjetor = document.getElementById("btnInjetor");
const custoInjetorEl = document.getElementById("custoInjetor");
const btnQuantico = document.getElementById("btnQuantico");
const custoQuanticoEl = document.getElementById("custoQuantico");

// FUNÇÕES GERAIS
function atualizarPontuacao() {
  pontuacaoEls.forEach(function (elemento) {
    elemento.textContent = pontuacao;
  });
}

function verificarVitoria() {
  if (pontuacao >= meta) {
    mensagemEl.textContent = "Meta Concluída!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 4000);
    meta *= 2;
  }
}

// CLIQUE PRINCIPAL NO REATOR
btnClique.addEventListener("click", function () {
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
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
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
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
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
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  }
});

// UPGRADE 4: RESFRIAMENTO HEAVY WATER (+30 por segundo)
btnResfriamento.addEventListener("click", () => {
  if (pontuacao >= custoResfriamento) {
    pontuacao -= custoResfriamento;
    pontosPorSegundo += 30;
    upgradesComprados += 1;
    custoResfriamento = Math.floor(custoResfriamento * 3.3);

    // atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoResfriamentoEl.textContent = custoResfriamento;

    mensagemEl.textContent = "Resfriamento Heavy Water Ativado!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  }
});

// UPGRADE 5: BOBINA DE CONTENÇÃO (+100 por segundo)
btnBobina.addEventListener("click", () => {
  if (pontuacao >= custoBobina) {
    pontuacao -= custoBobina;
    pontosPorSegundo += 100;
    upgradesComprados += 1;
    custoBobina = Math.floor(custoBobina * 3.5);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoBobinaEl.textContent = custoBobina;

    mensagemEl.textContent = "Bobina de Contenção Ativada!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  }
});

// UPGRADE 6: CRIOGÊNICO (+500 por segundo)
btnCriogenico.addEventListener("click", () => {
  if (pontuacao >= custoCriogenico) {
    pontuacao -= custoCriogenico;
    pontosPorSegundo += 500;
    upgradesComprados += 1;
    custoCriogenico = Math.floor(custoCriogenico * 3.7);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoCriogenicoEl.textContent = custoCriogenico;

    mensagemEl.textContent = "Criogênio Ativado!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  }
});

// UPGRADE 7: PROCESSADOR QUÂNTICO (+2000 por segundo)
btnProcessador.addEventListener("click", () => {
  if (pontuacao >= custoProcessador) {
    pontuacao -= custoProcessador;
    pontosPorSegundo += 2000;
    upgradesComprados += 1;
    custoProcessador = Math.floor(custoProcessador * 3.9);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoProcessadorEl.textContent = custoProcessador;

    mensagemEl.textContent = "Processador Quântico Ativado!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  }
});

// UPGRADE 8: INJETOR DE MATÉRIA (+500 por clique)
btnInjetor.addEventListener("click", () => {
  if (pontuacao >= custoInjetor) {
    pontuacao -= custoInjetor;
    valorPorClique += 500;
    upgradesComprados += 1;
    custoInjetor = Math.floor(custoInjetor * 4.1);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorCliqueEl.textContent = valorPorClique;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoInjetorEl.textContent = custoInjetor;

    mensagemEl.textContent = "Injetor de Matéria Ativado!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  }
});

// UPGRADE 9: COMPUTADOR QUÂNTICO (+10000 por segundo)
btnQuantico.addEventListener("click", () => {
  if (pontuacao >= custoQuantico) {
    pontuacao -= custoQuantico;
    pontosPorSegundo += 10000;
    upgradesComprados += 1;
    custoQuantico = Math.floor(custoQuantico * 4.3);

    // Atualiza a interface
    atualizarPontuacao();
    valorPorSegundoEl.textContent = pontosPorSegundo;
    upgradesCompradosEl.textContent = upgradesComprados;
    custoQuanticoEl.textContent = custoQuantico;

    mensagemEl.textContent = "Computador Quântico Ativado!";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
  } else {
    mensagemEl.textContent = "Pontuação Insuficiente";
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      mensagemEl.textContent = "";
    }, 2000);
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

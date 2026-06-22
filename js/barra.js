// --- CONFIGURAÇÕES DA BARRA ---
let cliquesBarra = 0;
const cliquesNecessarios = 40; // Quantos cliques para ativar a sobrecarga
let sobrecargaAtiva = false;
let tempoRestante = 10; // Duração do bônus
let intervaloTimer;
let executandoCliqueDuplo = false; // Impede que o clique simulado crie um loop infinito

// SELEÇÃO DE ELEMENTOS
const barraContainer = document.querySelector(".barra-container");
const barraProgresso = document.getElementById("barraProgresso");
const textoBarra = document.getElementById("textoBarra");
const btnReator = document.getElementById("botaoClique");

// ESCUTANDO OS CLIQUES NO REATOR
btnReator.addEventListener("click", () => {
  // SE ESTIVER EM SOBRECARGA: Duplica o sinal do clique para o seu script principal
  if (sobrecargaAtiva) {
    if (!executandoCliqueDuplo) {
      executandoCliqueDuplo = true;
      btnReator.click(); // Força o script.js a rodar uma segunda vez na mesma fração de segundo!
      executandoCliqueDuplo = false;
    }
    return; // Impede que a barra acumule energia enquanto o bônus já está ativo
  }

  // SE NÃO ESTIVER EM SOBRECARGA: Enche a barra normalmente
  cliquesBarra++;
  atualizarVisualBarra();

  if (cliquesBarra >= cliquesNecessarios) {
    ativarSobrecarga();
  }
});

// LÓGICA DE DECAIMENTO (A barra esvazia gradativamente se o jogador parar de clicar)
setInterval(() => {
  if (sobrecargaAtiva) return;

  if (cliquesBarra > 0) {
    cliquesBarra -= 0.5; // Velocidade de resfriamento da barra
    if (cliquesBarra < 0) cliquesBarra = 0;
    atualizarVisualBarra();
  }
}, 200);

// Atualiza a interface da barra
function atualizarVisualBarra() {
  let porcentagem = (cliquesBarra / cliquesNecessarios) * 100;
  if (porcentagem > 100) porcentagem = 100;

  barraProgresso.style.width = `${porcentagem}%`;
  textoBarra.textContent = `NÍVEL DE ENERGIA: ${Math.floor(porcentagem)}%`;
}

// ATIVAR SOBRECARGA (BÔNUS ATIVADO)
function ativarSobrecarga() {
  sobrecargaAtiva = true;
  tempoRestante = 10;

  barraContainer.classList.add("sobrecarga-ativa");
  textoBarra.textContent = `SOBRECARGA: ${tempoRestante}s (2X CLIQUE!)`;

  if (typeof mostrarMensagem === "function") {
    mostrarMensagem(" REATOR EM SOBRECARGA: PODER DOBRADO! ");
  }

  // Cronômetro regressivo da Sobrecarga
  intervaloTimer = setInterval(() => {
    tempoRestante--;

    let porcentagemRestante = (tempoRestante / 10) * 100;
    barraProgresso.style.width = `${porcentagemRestante}%`;
    textoBarra.textContent = `SOBRECARGA: ${tempoRestante}s (2X CLIQUE!)`;

    if (tempoRestante <= 0) {
      desativarSobrecarga();
    }
  }, 1000);
}

// DESATIVAR SOBRECARGA (RETORNO AO PADRÃO)
function desativarSobrecarga() {
  clearInterval(intervaloTimer);
  sobrecargaAtiva = false;
  cliquesBarra = 0;

  barraContainer.classList.remove("sobrecarga-ativa");
  barraProgresso.style.width = "0%";
  textoBarra.textContent = "NÍVEL DE ENERGIA: 0%";

  if (typeof mostrarMensagem === "function") {
    mostrarMensagem("Reator Resfriado.");
  }
}

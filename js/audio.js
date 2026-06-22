// --- CONFIGURAÇÃO DOS ÁUDIOS ---
const somClique = new Audio("assets/sons/SomClique.mp3");
const musicaFundo = new Audio("assets/sons/FundoRock.mp3");

musicaFundo.loop = true;
musicaFundo.volume = 0.4;
somClique.volume = 0.6;

// SELEÇÃO DE ELEMENTOS
const btnReatorAudio = document.getElementById("botaoClique");
const btnAudio = document.getElementById("btn-audio");

let musicaIniciada = false;
let musicaMutada = false; // Estado inicial da música

// EVENTO DE CLIQUE NO REATOR
btnReatorAudio.addEventListener("click", () => {
  somClique.currentTime = 0;
  somClique.play();

  // Só tenta dar play na música se ela NÃO estiver mutada
  if (!musicaIniciada && !musicaMutada) {
    iniciarMusica();
  }
});

// FUNÇÃO PARA TOCAR A MÚSICA
function iniciarMusica() {
  musicaFundo
    .play()
    .then(() => {
      musicaIniciada = true;
    })
    .catch((error) => {
      console.log("Aguardando interação para tocar a música:", error);
    });
}

// LOGICA DO BOTÃO DE MUTAR APENAS A MÚSICA
btnAudio.addEventListener("click", () => {
  musicaMutada = !musicaMutada;

  if (musicaMutada) {
    // Se mutou, pausa a música e atualiza o visual do botão
    musicaFundo.pause();
    btnAudio.textContent = "MÚSICA: DESLIGADA";
    btnAudio.classList.add("mutado");
  } else {
    // Se desmutou, atualiza o visual e volta a tocar
    btnAudio.textContent = "MÚSICA: LIGADA";
    btnAudio.classList.remove("mutado");

    // Se o jogo já tiver sido iniciado por um clique anterior, dá o play direto
    if (musicaIniciada) {
      musicaFundo.play();
    } else {
      iniciarMusica();
    }
  }
});

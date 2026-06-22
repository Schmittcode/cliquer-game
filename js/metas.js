// SELEÇÃO DE ELEMENTOS
const popupOverlay = document.getElementById("popupOverlay");
const btnFecharPopup = document.getElementById("btnFecharPopup");

// FECHAR O POPUP
btnFecharPopup.addEventListener("click", () => {
  popupOverlay.classList.remove("mostrar");
});

// FUNÇÃO DO SCRIPT.JS PARA ADICIONAR O POPUP
verificarVitoria = function () {
  if (pontuacao >= meta) {
    if (meta === 500) {
      // Abre o popup configurado no CSS apenas na primeira meta
      popupOverlay.classList.add("mostrar");
    } else {
      // Nas próximas metas (1000, 2000...), usa o sistema de mensagem padrão
      mostrarMensagem("Nova Meta Concluída!");
    }

    meta *= 2; // Dobra a meta
  }
};

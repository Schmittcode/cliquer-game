let pontuacao = 0;
let valorPorClique = 1;
let upgradesComprados = 0;
let custoUpgrade = 10;
let meta = 500;
let timerId;

const pontuacaoEls = document.querySelectorAll(".valor-pontuacao");
const valorPorCliqueEl = document.getElementById("valorclique");
const upgradesCompradosEl = document.getElementById("upgrades");
const custoUpgradeEl = document.getElementById("custoupgrade"); 
const mensagemEl = document.getElementById("mensagem");

const btnClique = document.getElementById("botaoClique");
const btnUpgrade = document.getElementById("botaoupgrade");


function atualizarPontuacao() {
    pontuacaoEls.forEach(function(elemento){
        elemento.textContent = pontuacao;
    })
}

function verificarVitoria() {
    if(pontuacao >= meta) {

        mensagemEl.textContent = "Meta Concluida!"

        clearTimeout(timerId);
        timerId = setTimeout(function() {mensagemEl.textContent = ""},4000);

        meta*=2;
    }
}


btnClique.addEventListener("click", function() {
    pontuacao += valorPorClique;

    atualizarPontuacao();
    verificarVitoria();
})

btnUpgrade.addEventListener("click",()=> {
    if(pontuacao >= custoUpgrade){
        pontuacao -= custoUpgrade;
        valorPorClique +=1; 
        upgradesComprados +=1; 
        custoUpgrade = Math.floor(custoUpgrade * 1.3); 

        atualizarPontuacao();

        valorPorCliqueEl.textContent = valorPorClique;
        upgradesCompradosEl.textContent = upgradesComprados;
        custoUpgradeEl.textContent = custoUpgrade;

        mensagemEl.textContent = "Upgrade Ativado!";

        clearTimeout(timerId);
        timerId = setTimeout(function() {mensagemEl.textContent = ""},2000);
    }else{
        mensagemEl.textContent = "Pontuação Insuficiente"

        clearTimeout(timerId);
        timerId = setTimeout(function() {mensagemEl.textContent = ""},2000);
    }

    verificarVitoria();
});


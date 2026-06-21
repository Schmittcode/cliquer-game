//Criando o objeto
function criarPresente() {
    const presente = document.createElement("img");
    presente.src = "assets/presente.png";
    presente.classList.add("presenteFlutuante");
    const lado = Math.floor(Math.random() * 4);
    const tempoNaTela = (Math.random() * 5000) + 10000;
    const indicadorBuff = document.getElementById("indicadorBuff")

    if(lado === 0) { //Esquerda
        presente.style.left = "0px";
        presente.style.top = Math.random() * (window.innerHeight - 60) + "px";
    } else if(lado === 1) {//Direita
        presente.style.left = (window.innerWidth - 60) + "px";
        presente.style.top = Math.random() * (window.innerHeight - 60) + "px";
    } else if(lado === 2) {//Cima
        presente.style.left = Math.random() * (window.innerWidth - 60) + "px";
        presente.style.top = "0px";
    } else {//Baixo
        presente.style.left = Math.random() * (window.innerWidth - 60) + "px";
        presente.style.top = (window.innerHeight - 60) + "px"
    }

    document.body.appendChild(presente);
    moverPresente(presente, lado);

    presente.addEventListener("click", function() {
        presente.remove();

        const valorOriginal = valorPorClique; //guarda o valor atual antes de dobrar
        valorPorClique *=2; //dobra
        valorPorCliqueEl.textContent = valorPorClique;
        indicadorBuff.textContent = "x2";

        setTimeout(function() {
            valorPorClique = valorOriginal;
            valorPorCliqueEl.textContent = valorPorClique;
            indicadorBuff.textContent = "";
        },30000);
    })

    setTimeout(function() {
        presente.remove();
    }, tempoNaTela)
}

function moverPresente(presente, lado) {
    let progresso = 0;        
    let oscilacao = 0;        

    const startTop = parseFloat(presente.style.top) || 0;
    const startLeft = parseFloat(presente.style.left) || 0;

    function animar() {
        progresso += 1;
        oscilacao += 0.05; 

        const onda = Math.sin(oscilacao) * 20; 

        if (lado === 0) { 
            presente.style.left = (startLeft + progresso) + "px";

            presente.style.top = (startTop + onda) + "px"; 
            
            if (progresso < window.innerWidth) {
                requestAnimationFrame(animar);
            } else {
                presente.remove();
            }
        }

        else if (lado === 1) {
            presente.style.left = (startLeft - progresso) + "px";
            presente.style.top = (startTop + onda) + "px";

            if (parseFloat(presente.style.left) > -100) {
                requestAnimationFrame(animar);
            } else {
                presente.remove();
            }
        }

        else if (lado === 2) { 
            presente.style.top = (startTop + progresso) + "px";
            presente.style.left = (startLeft + onda) + "px";

            if (progresso < window.innerHeight) { 
                requestAnimationFrame(animar);
            } else {
                 presente.remove();
            }
        }

        else { 
            presente.style.top = (startTop - progresso) + "px";
            presente.style.left = (startLeft + onda) + "px";

            if (parseFloat(presente.style.top) > -100) { 
                requestAnimationFrame(animar);
            } else {
                presente.remove();
            }
        }
    }
     requestAnimationFrame(animar);

}
    function agendarPresente() { 
        criarPresente(); // 1. Spawna o presente atual na tela
        const proximoTempo = (Math.random() * 120000) + 60000; // 2. Sorteia o tempo para o PRÓXIMO presente (entre 1 e 3 minutos) 

        setTimeout(agendarPresente, proximoTempo); // 3. Deixa agendado o próximo spawn
        }
        // O jogo inicia, espera 5 minutos em silêncio, e joga o primeiro presente na tela
        const cincoMinutos = 300000;
        setTimeout(agendarPresente, cincoMinutos);
       



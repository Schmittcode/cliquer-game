//Criando o objeto
function criarPresente() {
    const presente = document.createElement("img");
    presente.src = "assets/presente.png";
    presente.classList.add("presenteFlutuante");
    const lado = Math.floor(Math.random() * 4);

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

    

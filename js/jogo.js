
var altura = 0;
var largura = 0;
var vidas = 0;
var tempo = 100;
var criaMosquitoTempo = 1500




var nivel = window.location.search
nivel.replace('?', '')







function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

var cronometo = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometo);
        clearInterval(tempo);
        window.location.href = 'inicio.html'
    }
    else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoAleatoria() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove();
        vidas++

        if (vidas > 3) {
            window.location.href = 'game_over.html'
        }
        else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        }
    }

    var posicaoTopo = Math.random() * (altura - 50); // Subtraindo 50 para manter a mosca totalmente visível
    var posicaoEsquerda = Math.random() * (largura - 50); // Subtraindo 50 para manter a mosca totalmente visível

    console.log(posicaoTopo, posicaoEsquerda);

    // Criar elemento HTML para a mosca
    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanahoAleatorio() + ' ' + ladoAleatorio();
    mosca.style.top = posicaoTopo + 'px';
    mosca.style.left = posicaoEsquerda + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()

    }
    document.body.appendChild(mosca);

}

// Chamar a função para ajustar o tamanho do palco de jogo
ajustarTamanhoPalcoJogo();

// Chamar a função para gerar uma posição aleatória para a mosca
posicaoAleatoria();

function tamanahoAleatorio() {
    var classe = Math.floor((Math.random() * 3));
    switch (classe) {
        case 0:
            return 'mosca';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';

    }

}

function ladoAleatorio() {
    var classe = Math.floor((Math.random() * 2));
    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

//Controle de difculdade

function iniciarJogo(){
    var nivel= window.getElementById('nivel').value 
    window.location.href = "index.html?" + nivel
    
    
}


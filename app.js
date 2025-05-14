let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSegreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo segreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}




function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSegreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobrio o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSegreto) {
        exibirTextoNaTela('p', 'Voce chutou um numero maior que o numero secreto!');

    } else {
        exibirTextoNaTela('p', 'O numero secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == 10 ){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarUmNovoNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);

        return numeroEscolhido;
    }
}



function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSegreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true )

}
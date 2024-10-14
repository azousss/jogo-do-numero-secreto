let listaDeNumerosSorteados = []; 
//Cria uma lista de números sorteados.
let numeroLimite = 100; 
//Limita a quantidade de números sorteados.
let numeroSecreto = gerarNumeroAleatorio(); 
//Gera um número secreto.
let tentativas = 1;
//Variável para determinar em quantas tentativas o usuário acerta o número secreto.
document.getElementById('reiniciar').setAttribute('disabled', true);
//Variável para desabilir o botão de "Novo jogo".
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
//Função que exibe as mensagens iniciais do jogo.
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
        tentativas++;
        limparCampo();
        console.log(chute == numeroSecreto);
        //"verificarChute" vai identificar o número e comparar com o número secreto e dizer se é menor, maior e quantas tentativas acertou.       
}
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   //Gera um número aleatório

   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   } //Vai mostrar no console todos os números que já foram sorteados.
}
console.log(numeroSecreto);
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}//Mostra no console o número secreto.

function reiniciarJogo() {
    document.getElementById('reiniciar').removeAttribute('disabled');
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
//Linhas de códigos se o usuário acertar o número secreto, o botão "Novo jogo" aparecerá e o jogo será resetado.
}

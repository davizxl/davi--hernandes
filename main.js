let cobraTamanho = 25;
let posicaoX = 400 - cobraTamanho/2;
let posicaoY = 250 - cobraTamanho/2;
let direcao = 'esquerda'
let comidaX;
let comidaY;
let larguraTela = 800;
let alturaTela = 500;
let cobraX = [];
let cobraY = [];
let pontos = 3;

// configuração
function setup() {
  createCanvas(larguraTela, alturaTela);
  atualizarPosicsoComida();
  for(let i = 0; i < pontos; i++) {
    cobraX.push(posicaoX - i * cobraTamanho);
    cobraY.push(posicaoY);
}
}

//desenhar
function draw() {
  background(100, 600, 800);
 
  if(encostouNasBordasDaTela()) {
  }

  desenharComida(comidaX, comidaY, 20);
  desenharCobra();
  // movimentarCobra();
  mudarDirecao();
  
  
}

function movimentarCobra () {
  if (direcao == 'esquerda') {
    posicaoX = posicaoX - 6;

  } 
  if(direcao == 'direita') {
    posicaoX = posicaoX + 6;  

  }

  if(direcao == 'cima') {
    posicaoY = posicaoY - 6;
  }

  if(direcao == 'baixo') {
    posicaoY = posicaoY + 6;
  }


}

function mudarDirecao () {
  
  if(keyIsDown(LEFT_ARROW)) {
    direcao = 'esquerda';
  }

  if(keyIsDown(UP_ARROW)) {
    direcao = 'cima';
  }

  if(keyIsDown(DOWN_ARROW)) {
    direcao = 'baixo';
  }


  if (keyIsDown(RIGHT_ARROW)) {
    direcao = 'direita';
  }
  
}

function atualizarPosicsoComida () {
  comidaX = floor(random(0, 780));
  comidaY = floor(random(0, 480));
}

function desenharComida (posicaoX, posicaoY, tamanho) {
  rect(posicaoX, posicaoY, tamanho, tamanho);
}

function encostouNasBordasDaTela() {
  if(posicaoX < 0 || posicaoX > larguraTela - cobraTamanho || posicaoY < 0 || posicaoY > alturaTela - cobraTamanho) {
    return true;
  }

  return false;


}

function desenharCobra() {
  for(let i = 0; i < cobraX.lenght; i++) {
    rect(cobraX[i], cobraY[i], cobraTamanho, cobraTamanho);
  }

}
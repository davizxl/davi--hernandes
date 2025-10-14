let cobraTamanho = 25;
let posicaoX = 400 - cobraTamanho/2;
let posicaoY = 250 - cobraTamanho/2;
let direcao = 'direita';
let comidaX;
let comidaY;
let larguraTela = 800;
let alturaTela = 500;
let cobraX = [];
let cobraY = [];
let pontos = 3;
let frameRateJogo = 5;

function setup() {
  createCanvas(larguraTela, alturaTela);
  atualizarPosicaoComida();
  for(let i = 0; i < pontos; i++) {
    cobraX.push(posicaoX - i * cobraTamanho);
    cobraY.push(posicaoY);
  }
}

function draw() {
  frameRate(frameRateJogo);
  background (220); // cinza claro

  if (encostouNasBordasDaTela()) {
    noLoop();
  }
  desenharCobra();
  desenharComida(comidaX, comidaY, 20);
  mudarDirecao();
  movimentarCobra();
}

function movimentarCobra() {
  if (direcao == 'direita') {
    posicaoX = posicaoX + 5;
  }
  if(direcao == 'esquerda') {
    posicaoX = posicaoX - 5;
  }
  if(direcao == 'cima') {
    posicaoY = posicaoY - 5;
  }
  if(direcao == 'baixo') {
    posicaoY = posicaoY + 5;
  } 

  let cabecaX = cobraX[0];
  let cabecaY = cobraY[0];

  if(direcao == 'direita') {
    cabecaX = cabecaX + cobraTamanho;
  }

  if(direcao == 'esquerda') {
    cabecaX = cabecaX - cobraTamanho
  }

  if(direcao == 'cima') {
    cabecaY = cabecaY - cobraTamanho
  }

  if(direcao == 'baixo') {
    cabecaY = cabecaY + cobraTamanho
  }

  cobraX.unshift(cabecaX);
  cobraY.unshift(cabecaY);

  //remover último valor da lista

  cobraX.pop();
  cobraY.pop();
}

function mudarDirecao() {
  if (keyIsDown(RIGHT_ARROW)) {
    direcao = 'direita';
  }
  if (keyIsDown(LEFT_ARROW)) {
    direcao =  'esquerda';
  }
  if (keyIsDown(UP_ARROW)) {
    direcao =  'cima';
  }
  if (keyIsDown(DOWN_ARROW)) {
    direcao =  'baixo';
  }
}

function atualizarPosicaoComida() {
  comidaX = floor(random(0, 780));
  comidaY = floor(random(0, 480));
}

function desenharComida(posicaoX, posicaoY, tamanho) {
  rect(posicaoX, posicaoY, tamanho, tamanho);
}

function encostouNasBordasDaTela() {
  let cabecaX = cobraX[0];
  let cabecaY = cobraY[0];


  if (cabecaX < 0 || cabecaX > larguraTela - cobraTamanho || posicaoY < 0 || posicaoY > alturaTela - cobraTamanho) {
    return true;
  }
  return false;
}

function desenharCobra() {
  for (let i = 0; i < cobraX.length; i++) {
    rect(cobraX[i], cobraY[i], cobraTamanho, cobraTamanho);
  }
}
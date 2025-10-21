let frameRateJogo = 5;
let cobra;
let comida;

function setup() {
  createCanvas(400, 400);
  cobra = new Cobra(20);
  comida = new Comida();
  comida.criar(width, height);
}

function draw() {
  frameRate(frameRateJogo);
  background(220);

  cobra.mover();
  cobra.desenhar();

  if (cobra.comer(comida.x, comida.y)) {
    frameRateJogo += 2;
    comida.criar(width, height);
  }

  comida.desenhar();

  if (cobra.verificarColisao()) {
    gameOver();
  }
}

function gameOver() {
  noLoop();
  fill(0);
  textSize(24);
  text("Game Over!", 140, 200);
}

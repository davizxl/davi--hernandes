// comida da cobra
class Comida {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.tamanho = 20;
  }

  criar(widthTela, heightTela) {
    let cols = floor(widthTela / this.tamanho);
    let rows = floor(heightTela / this.tamanho);
    this.x = floor(random(cols)) * this.tamanho;
    this.y = floor(random(rows)) * this.tamanho;
  }

  desenhar() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.tamanho, this.tamanho);
  }
}

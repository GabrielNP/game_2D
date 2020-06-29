class Vida {

    constructor(maxima, inicial) {
        this.vidaMaxima = maxima;
        this.vidaInicial = inicial;
        this.vidas = this.vidaInicial;
        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    
    draw() {
        for(let i = 1; i <= this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1);
            image(imagemVida,posicao + margem , this.y, this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas < this.vidaMaxima) { this.vidas ++; }
    }

    perdeVida() {
        this.vidas --;
        console.log(this.vidas);
    }
}
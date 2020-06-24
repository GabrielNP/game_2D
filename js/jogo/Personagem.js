class Personagem extends Animacao {

    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);        
        this.chao = height - this.altura - 30;
        this.y = this.chao;
        this.gravidade = 3;
        this.velocidadeDoPulo = 0;
    }

    pula() {
        this.y -= 50;
        this.velocidadeDoPulo = -30
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.y > this.chao) this.y = this.chao;
    }

    estaColidindo(inimigo) {
        const precisao = .7;
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        );

        return colisao;
    }
}
class Personagem extends Animacao {

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);        
        this.variacaoY = variacaoY;
        this.chao = height - this.altura - this.variacaoY;
        this.y = this.chao;
        this.gravidade = 2;
        this.velocidadeDoPulo = 0;
        this.alturaDoPulo = -30;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula() {

        if (this._pulouDuasVezes()) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            somDoPulo.play();
            this.pulos++;
        }
    }

    _pulouDuasVezes() {
        return this.pulos < 2
    }

    aplicaGravidade() {

        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this._estaNoChao()) {
            this.y = this.chao;
            this.pulos = 0;
        }
    }

    _estaNoChao() {
        return this.y > this.chao;
    }

    estaColidindo(inimigo) {

        if (this.invencivel) { return false; }

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
    
    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => this.invencivel = false, 1000);
    }
}
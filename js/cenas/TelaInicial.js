class TelaInicial {
    
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0 , 0, width, height);   
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de',width / 2, height / 6);
        textSize(150);
        text('Hipsta',width / 2, height / 5 * 1.7);
    }

    _botao() {
        botaoGerenciador.draw();
    }
}
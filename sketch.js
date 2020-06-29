function setup() {
    
    createCanvas(windowWidth, windowHeight);

    textFont(pangolin);    
    
    frameRate(40);
    
    somDoJogo.loop();

    jogo = new Jogo();
    jogo.setup();

    telaInicial = new TelaInicial();

    cenas = {
        jogo: jogo,
        telaInicial: telaInicial
    };

    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 7 * 5)
}

function keyPressed() {
    jogo.keyPressed(key);
}

function draw() {

    cenas[cenaAtual].draw();
}
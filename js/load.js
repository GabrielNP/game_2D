function preload() {
    
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemGameOver = loadImage('assets/imagens/game-over.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png')
    imagemTelaInicial = loadImage('assets/imagens/cenario/telaInicial.png');

    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
    somDoPulo = loadSound('assets/sons/somPulo.mp3');

    fonteScore = loadFont('assets/fontes/Pangolin/Pangolin-Regular.ttf');
    fonteTelaInicial = loadFont('assets/fontes/the_wild_breath_of_zelda.otf');
}
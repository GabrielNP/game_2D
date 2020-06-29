function preload() {
    
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');

    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');

    pangolin = loadFont('imagens/assets/Pangolin/Pangolin-Regular.ttf');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
}
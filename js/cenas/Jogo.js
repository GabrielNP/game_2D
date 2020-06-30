class Jogo {
    
    constructor() {
        this.indice = 0;
        this.mapa = [
            {
                inimigo: 0,
                velocidade: 10
            },
            {
                inimigo: 1,
                velocidade: 30
            },
            {
                inimigo: 1,
                velocidade: 15
            },
            {
                inimigo: 2,
                velocidade: 40
            }
        ];
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        vida = new Vida(6, 3);
        
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 8);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 5);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width- 52, 200, 100, 75, 200, 150, 10);
        inimigos.push(inimigo, inimigoGrande, inimigoVoador);
    
    }

    keyPressed(key) {
    
        if (key === 'ArrowUp') {
            personagem.pula();
        }
    }

    draw() {
    
        cenario.exibe();
        cenario.move();
    
        pontuacao.exibe();
        pontuacao.adicionarPontos();
        
        personagem.exibe();
        personagem.aplicaGravidade();

        vida.draw();
    
        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();
    
        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length -1) {
                this.indice = 0;
            }
            // inimigo.velocidade = parseInt(random(5, 20));
        }
    
    
        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            
            if (vida.vidas === 0) {
                image(imagemGameOver, width/2 - 200, height/3);
                somDoJogo.stop();
                noLoop();
            }
        }
    }
}
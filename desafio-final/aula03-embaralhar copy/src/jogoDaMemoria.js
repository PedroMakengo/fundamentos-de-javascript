class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela;

    // caminho do arquivo é sempre relativo
    this.heroisIniciais = [
      { img: "./assets/img/batman.png", name: "batman" },
      { img: "./assets/img/ciclop.png", name: "ciclop" },
      { img: "./assets/img/deadpool.png", name: "deadpoll" },
      { img: "./assets/img/mulhermaravilha.png", name: "mulher maravilha" },
    ];
  }

  // Usamos o static quando não precisamos usar a palavra reservada this
  inicializar() {
    // vai pegar todas funções da classe Tela
    // coloca todos os herois na tela
    this.tela.atualizarImages(this.heroisIniciais);
    // força a tela a usar o this de jogo da memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
  }
  embaralhar() {
    const copias = this.heroisIniciais
      // duplicar os itens
      .concat(this.heroisIniciais)
      // entrar em cada idem e criar um id aleatorio
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      .sort(() => Math.random() - 0.5);

    this.tela.atualizarImages(copias);
  }

  jogar() {
    this.embaralhar();
  }
}

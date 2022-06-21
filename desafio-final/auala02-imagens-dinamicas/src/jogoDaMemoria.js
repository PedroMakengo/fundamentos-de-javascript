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
    this.tela.atualizarImages(this.heroisIniciais);
  }
}

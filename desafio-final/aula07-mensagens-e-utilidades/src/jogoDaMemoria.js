class JogoDaMemoria {
  constructor({ tela, util }) {
    this.tela = tela;
    this.util = util;

    // caminho do arquivo é sempre relativo
    this.heroisIniciais = [
      { img: "./assets/img/batman.png", nome: "batman" },
      { img: "./assets/img/ciclop.png", nome: "ciclop" },
      { img: "./assets/img/deadpool.png", nome: "deadpoll" },
      { img: "./assets/img/mulhermaravilha.png", nome: "mulher maravilha" },
    ];

    this.iconePadrao = "./assets/img/default.png";
    this.heroisEscondidos = [];
    this.heroisSelecionados = [];
  }

  // Usamos o static quando não precisamos usar a palavra reservada this
  inicializar() {
    // vai pegar todas funções da classe Tela
    // coloca todos os herois na tela
    this.tela.atualizarImages(this.heroisIniciais);
    // força a tela a usar o this de jogo da memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this));
  }

  async embaralhar() {
    const copias = this.heroisIniciais
      // duplicar os itens
      .concat(this.heroisIniciais)
      // entrar em cada idem e criar um id aleatorio
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      .sort(() => Math.random() - 0.5);

    this.tela.atualizarImages(copias);
    this.tela.exibirCarregando();

    await this.util.timeout(1000);
    this.esconderHerois(copias);
    this.tela.exibirCarregando(false);
  }

  esconderHerois(herois) {
    const heroisOcultos = herois.map(({ id, nome }) => ({
      id,
      nome,
      img: this.iconePadrao,
    }));

    // Atualizar os meus herois
    this.tela.atualizarImages(heroisOcultos);
    // Criando uma nova variavel
    this.heroisOcultos = heroisOcultos;
  }

  exibirHerois(nomeDoHeroi) {
    // vamos procurar esse heroi pelo nome em nossos herois iniciais
    const { img } = this.heroisIniciais.find(
      ({ nome }) => nomeDoHeroi === nome
    );
    this.tela.exibirHerois(nomeDoHeroi, img);
  }

  verificarSelecao(id, nome) {
    const item = { id, nome };
    // vamos verificar a quantidade de herois selecionados
    // e tomar ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length;

    switch (heroisSelecionados) {
      case 0:
        // adiciona a escolha na lista, esperando pela proxima
        // clicada
        this.heroisSelecionados.push(item);
        break;
      case 1:
        // se a quantidade de escolhidos for 1, significa
        // que o usuário só pode escolher mais um
        // vamos obter o primeiro item da lista
        const [opacao1] = this.heroisSelecionados;
        // zerar itens para não selecionar mais de dois
        this.heroisSelecionados = [];
        // conferimos se os nomes e ids batem conforme
        // o esperado
        if (opacao1.nome === item.nome && opacao1.id !== item.id) {
          this.exibirHerois(item.nome);
          this.tela.exibirMensagem();
          return;
        }
        this.tela.exibirMensagem(false);
        break;
    }
  }

  jogar() {
    this.embaralhar();
  }
}

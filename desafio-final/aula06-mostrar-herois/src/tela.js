const ID_CONTEUDO = "conteudo";
const ID_BTN_JOGAR = "jogar";
const ID_MENSAGEM = "mensagem";
const CLASSE_INVISIVEL = "invisible";

const MENSAGENS = {
  sucesso: {
    texto: "Combinação correta!",
    classe: "alert-success",
  },
  erro: {
    texto: "Combinação incorreta",
    classe: "alert-danger",
  },
};

class Tela {
  static obterCodigoHtml(item) {
    return `
    <div class="col-md-3">
      <div class="card" style="width: 50%" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" alt="${item.nome}" />
      </div>
      <br/>
    </div>
    `;
  }

  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick;
  }

  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO);
    conteudo.innerHTML = codigoHtml;
  }

  static gerarStringHTMLPelaImagem(itens) {
    // para cada item da lista, vai executar a função obterCodigoHtml
    // ao final, vai concatenar tudo em uma unica string
    // muda de Array para String
    return itens.map(Tela.obterCodigoHtml).join("");
  }

  static atualizarImages(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens);
    Tela.alterarConteudoHTML(codigoHtml);
  }

  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR);
    btnJogar.onclick = funcaoOnClick;
  }

  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi);
    // para cada elemento encontrado iremos alterar o src dele
    elementosHtml.forEach((item) => (item.src = img));
  }

  static exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM);

    if (sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe);
      elemento.classList.add(MENSAGENS.sucesso.classe);
      elemento.innerText = MENSAGENS.sucesso.texto;
    } else {
      elemento.classList.remove(MENSAGENS.sucesso.classe);
      elemento.classList.add(MENSAGENS.erro.classe);
      elemento.innerText = MENSAGENS.erro.texto;
    }
    elemento.classList.remove(CLASSE_INVISIVEL);
  }
}

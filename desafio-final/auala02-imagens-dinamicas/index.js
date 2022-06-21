function onLoad() {
  // console.log(`Carregou a tela!!`, Tela, JogoDaMemoria);

  const heroi = {
    // sempre relativo ao index.html
    img: "./assets/img/batman.png",
    nome: "batman",
  };

  const codigoHtml = Tela.obterCodigoHtml(heroi);
  console.log(codigoHtml);
}

window.onload = onLoad;

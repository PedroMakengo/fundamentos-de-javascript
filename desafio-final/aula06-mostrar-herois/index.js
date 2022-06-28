function onLoad() {
  const dependencias = {
    tela: Tela, // class Tela é global
  };

  const jogoDaMemoria = new JogoDaMemoria(dependencias);
  jogoDaMemoria.inicializar();
}

window.onload = onLoad;

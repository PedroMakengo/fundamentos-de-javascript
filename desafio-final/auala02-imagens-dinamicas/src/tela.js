class Tela {
  static obterCodigoHtml(item) {
    return `
    <div class="col-md-3">
      <div class="card" style="width: 50%">
        <img src="${item.img}" name="${item.nome}" alt="${item.nome}" />
      </div>
      <br/>
    </div>
    `;
  }
}

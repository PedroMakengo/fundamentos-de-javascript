const pessoa = {
  _name: "",
  _idade: 20,
  get nome() {
    return this._name;
  },
  set nome(valor) {
    this._name = valor.toUpperCase();
  },

  get podeDirigir() {
    return this._idade > 18;
  },

  set idade(valor) {
    this._idade = valor;
  },
};

pessoa.nome = "pedro makengo";
console.log(pessoa.nome);
pessoa.idade = 16;
console.log(pessoa.podeDirigir);
console.log(pessoa.idade);

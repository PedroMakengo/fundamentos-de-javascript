// console.log("nome", heroi.nome);
// console.log("idade", heroi["idade"]);
// console.log("sexo", heroi.sexo);
// console.log("naoExiste", heroi.naoExiste);

// heroi.id = 0001;
// console.log(heroi);

// Para pegar as chaves de um objeto simples devemos passar um Object.keys
// e retorna um array de chaves
// console.log(Object.keys(heroi));

// Para pegar os valores de um objeto
// console.log(Object.values(heroi));

// juntar dois objetos
const pessoa = {
  tamanho: "10 metros",
};

const novoObj = Object.assign(heroi, pessoa);
console.log(novoObj);

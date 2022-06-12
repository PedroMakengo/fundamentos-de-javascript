// ### Trabalhando com Objetos
// Pesquisar uma definição para o objetos...
// Uma forma simples de trabalhar com objetos no javascript é usando a seguinte notação
// const pessoa = {
//   id: 1,
//   nome: "Pedro",
//   idade: 22,
//   sexo: "Masculino",
// };

// Eu posso obter as informações do meu objeto usando o seguinte:
// pessoa[id] ou pessoa.id que vai pegar o id do meu objeto pessoa.
// No javascript tudo herda de outros ou seja tudo é objeto...

const heroi = {
  nome: "Flash",
  idade: 100,
  sexo: "Masculino",
};

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

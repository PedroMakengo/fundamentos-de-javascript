// Forma normal de declarar uma função
function minhaFuncao1(parametro1) {
  return `aee`;
}

// Função anonima
const minhaFuncao2 = function (parametro1) {
  return `aee ${parametro1}`;
};

// Arrow function
const minhaFuncao3 = (parametro1) => {
  return `aeee ${parametro1}`;
};

// Criando a função dentro de um objeto uma arrow function
const obj1 = {
  minhaFuncao: (parametro1) => `aeee ${parametro1}`,
};
obj1.minhaFuncao("test");

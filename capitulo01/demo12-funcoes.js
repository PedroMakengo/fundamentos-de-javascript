function nomeDaFuncao(parametro1) {}

function queDiaEhoje() {
  const data = new Date();

  console.log(`Hoje é dia: ${data.getDate()}`);
}

queDiaEhoje();

function soma(valor1, valor2) {
  // console.log(`A soma de ${valor1} + ${valor2}`, valor1 + valor2);
}

soma(10, 20);
soma(3, 4);

function somar(valor1, valor2) {
  return valor1 + valor2;
}

const idade = 20;
const tamanho = 10;

const resultado = somar(idade, tamanho);
// console.log("resultado", resultado);

function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}

// console.log(`O resultado da multiplicação é : `, multiplicar(10, 30));

const funcionario1 = {
  nome: "Zezinho",
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

const funcionario2 = {
  nome: "Mariazinha",
  desconto: 0.1,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

// const descontoFuncionario1 =
//   funcionario1.salarioBruto - funcionario1.desconto * funcionario1.salarioBruto;

// const descontoFuncionario2 =
//   funcionario2.salarioBruto - funcionario2.desconto * funcionario2.salarioBruto;

// console.log(`
//     Funcionario1; ${descontoFuncionario1}
//     Funcionario2; ${descontoFuncionario2}
//   `);

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - salarioBruto * desconto;
}

funcionario1.salarioLiquido = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
);
funcionario2.salarioLiquido = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
);

console.log(`
  Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
  Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
`);

let salarioDoAmigo = 1000;
let meuSalario = "2999.3";
let meuSalarioCorrigido = Number(meuSalario);

console.log(salarioDoAmigo + meuSalarioCorrigido);
console.log(typeof salarioDoAmigo, salarioDoAmigo);
console.log(typeof meuSalario, meuSalario);

console.log(isNaN(meuSalario));

let minhaString = "Olá Mundo!";
let minhaOutraString = "Olá mundo2";

let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString} . AE`;
console.log(minhaStringComVariaveis);

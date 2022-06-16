// meses começam do zero !
const dataAniversario = new Date(2002, 0, 20);

// console.log(dataAniversario);

// Primeira data do Javascript
const primeiraDataDoJs = new Date(0);
// console.log(primeiraDataDoJs);

// console.log(primeiraDataDoJs.getTime(0));

const hoje = new Date();
// toString um função pronta para converter algo em string
// console.log(hoje.toString());

// Verificar o local da minha máquina
// console.log(hoje.toLocaleDateString());

// formato global recomendado
// console.log(hoje.toISOString());

const dia = hoje.getDate();
hoje.setDate(dia + 2);
// (hora, minuto, milsegundos)
hoje.setHours(10, 30, 0);
// console.log(hoje);

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`);

// console.log(new Date(2020, 1, 20) > new Date(2022, 1, 20));

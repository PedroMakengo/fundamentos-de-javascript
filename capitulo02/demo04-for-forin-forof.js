// for (let index = 0; index <= 10; index++) {
//   const decisao = index % 2 === 0 ? "Par" : "Impar";
//   console.log(`O número ${index} é ${decisao}`);
// }

const minhaListaDeTarfas = [
  { id: parseInt(Math.random() * 10), nome: "Zezinho", superPoder: "Veloz" },
  { id: Math.random(), nome: "Mariazinha", superPoder: "Super Força" },
];

for (let index = 0; index < minhaListaDeTarfas.length; index++) {
  const item = minhaListaDeTarfas[index];
  console.log(`
    id: ${item.id}
    nome: ${item.nome}
  `);
}

// não precisa do contador

for (const index in minhaListaDeTarfas) {
  const item = minhaListaDeTarfas[index];
  console.log("Nome", item.nome);
}

// não precisa usar o index
for (const item of minhaListaDeTarfas) {
  console.log("Nome", item.nome);
}

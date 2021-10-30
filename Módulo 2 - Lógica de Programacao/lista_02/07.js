const nomes = [
  "Maria",
  "Larissa",
  "Ryu",
  "Chandler",
  "Mônica",
  "Sasuke",
  "Joe",
  "José",
];

const nomesFiltrado = nomes.filter((nome) => nome.length <= 5);

console.log(nomesFiltrado);

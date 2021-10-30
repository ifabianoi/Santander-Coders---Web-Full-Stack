const age = 15;

age >= 18
  ? console.log("Eu posso beber álcool")
  : console.log("Eu gosto de beber água");

const drink = age >= 18 ? "vinho" : "água";

console.log(drink);

let drink2;
// const drink = if (age >= 18) {
//   "Eu posso beber álcool";
// } else {
//   "Eu gosto de beber água";
// }

console.log(`Eu gosto de beber `);

// const x = 5;

// x = 4;

let y = 5;

y = 4;

// Steven quer construir uma calculadora de gorjeta simples para
// sempre que ele for comer em um restaurante.
// No país dele, é comum dar 15% de gorjeta se a conta é entre 50 e 300.
// Se o valor for diferente, então a gorjeta é 20%.

// Sua tarefa é calcular a gorjeta, dependendo do valor da conta.
// Crie uma variável nomeada 'gorjeta' para isso.
// Não é permitido usar if/else.
// Mostre uma string no console contendo o valor da conta,
// a gorjeta e o valor final (conta + gorjeta).
// Exemplo: 'A conta foi 275, a gorjeta foi 41.25 e o valor total foi 316.25'

// TEST DATA: Teste para o valor da conta 275, 40 e 430.

const conta = 275;
const gorjeta = conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.2;
console.log(
  `A conta foi ${conta}, a gorjeta foi ${gorjeta}, e o valor total foi ${
    conta + gorjeta
  }`
);

// FUNÇÕES

function logger() {
  console.log("Meu nome é Larissa");
}

logger(); // invocando a função, executando a função ou chamando a função.

logger();
logger();
logger();

function processadorFrutas(numMacas, numLaranjas) {
  console.log(numMacas, numLaranjas);
  const suco = `Suco com ${numMacas} maças e ${numLaranjas} laranjas.`;
  return suco;
}

console.log(processadorFrutas("STRING1", "STRING2"));

// nem toda função precisa receber parâmetro
// nem toda função precisa retornar algo
// console.log NÃO retorna um valor, apenas printa algo no console
// funções elas ajudam a escrever um código mais mantível
// CLEAN CODE => PRINCÍPIO DRY: DON'T REPEAT YOURSELVES;

// DECLARAÇÃO DE FUNÇÃO VS. EXPRESSÃO DE FUNÇÃO

// DECLARAÇÃO DE FUNÇÃO

const age1 = calcAge1(1993);
console.log(age1);

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

// EXPRESSÃO DE FUNÇÃO
// função anônima

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1993);
console.log(age1, age2);

// ARROW FUNCTIONS

const calcAge3 = (birthYear) => 2021 - birthYear;

const age3 = calcAge3(1993);
console.log(age1, age2, age3);

const anosAteAposentadoria = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const IDADE_APOSENTADORIA = 65;
  const anosAteAposentar = IDADE_APOSENTADORIA - age;

  return `${firstName} vai se aposentar em ${anosAteAposentar} anos`;
};

console.log(anosAteAposentadoria(1993, "Larissa"));

// FUNÇÕES CHAMAM OUTRAS FUNÇÕES

function cortarPedacosFruta(fruta) {
  return fruta * 4;
}

function processadorFrutas2(numMacas, numLaranjas) {
  const pedacosMacas = cortarPedacosFruta(numMacas);
  const pedacosLaranja = cortarPedacosFruta(numLaranjas);

  console.log(numMacas, numLaranjas);
  const suco = `Suco com ${pedacosMacas} maças e ${pedacosLaranja} laranjas.`;
  return suco;
}

console.log(processadorFrutas2(4, 3));

// CODING CHALLENGE:

// Voltando para os dois times de ginástica, os Dolphins e Koalas! Existe uma nova disciplina de ginástica que funciona diferente.
// Cada time compete 3 vezes, e a média dos 3 scores é calculada (ou seja, uma média de score por time).
// Um time vence APENAS se ele tiver pelo menos o DOBRO da média de score do outro time, senão, nenhum time vence!

// 1. Cria uma arrow function 'calcAverage' para calcular a média dos 3 scores.
// 2. Use a função para calcular a média para os dois times
// 3. Crie uma função 'checkWinner' que recebe a média de score de cada time como parâmetro ('avgDolphins' e 'avgKoalas'), e então log o vencedor no console junto com os pontos de vitória, de acordo com a regra acima. Exemplo: "Koalas ganha (30 vs 13)".
// 4. Use a função 'checkWinner' para determinar o vencedor através do TEST DATA 1 e 2.

// TEST DATA 1: Dolphins score 44, 23 e 71. Koalas score 65, 54 e 49.
// TEST DATA 2: Dolphins score 85, 54 e 41. Koalas score 23, 34 e 27.

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphis vencem! ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas vencem! ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("Nenhum vence!");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// INTRODUÇÃO AOS ARRAYS

const friend1 = "Natalia";
const friend2 = "Camila";
const friend3 = "Joao";

const friends = ["Natalia", true, 3];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

const primeiroNome = "Larissa";
const larissa = [primeiroNome, "Queiroz", 2021 - 1993, friends];
console.log(larissa);

// EXERCÍCIO

const calcAge5 = function (birthYear) {
  return 2021 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge5(years)); //NaN

const age5 = calcAge5(years[0]);
const age6 = calcAge5(years[1]);
const age7 = calcAge5(years[3]);
console.log(age5, age6, age7);

const ages = [calcAge5(years[0]), calcAge5(years[1]), calcAge5(years[2])];
console.log(ages);

// OPERAÇÕES BÁSICAS COM ARRAYS

// push
const friends1 = ["Camila", "Natalia", "Joao"];
const newLength = friends1.push("Yuri");
console.log(friends1);
console.log(newLength);

// unshift
friends1.unshift("Larissa");
console.log(friends1);

// pop
// friends1.pop();
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

// shift
friends1.shift();
console.log(friends1);

// indexOf
console.log(friends1.indexOf("Natalia"));
console.log(friends1.indexOf("lalala"));

// includes

if (friends1.includes("Camila")) {
  console.log("Você tem uma amiga chamada Camila!");
}

const arr = [1, 2, 3, 4];

console.log(arr.includes(1));

// Steven ainda está construindo sua calculadora de gorjeta usando
// as mesmas regras de antes: Gorjeta de 15% da conta se o valor da conta for entre
// 50 e 300, e se o valor for diferente, a gorjeta é 20%.

// Escreva uma função 'calcGorjeta' que receba qualquer valor de conta como um input
// e retorne a gorjeta correspondente, calculada baseada nas regras acima
// (você pode checar o código da primeira calculadora de gorjeta se você precisar).
// Teste a função usando o valor de conta de 100.

// Agora vamos usar arrays! Crie um Array 'contas' contendo o dado de teste abaixo.
// Crie um array 'gorjetas' contendo o valor da gorjeta para cada conta,
// calculado pela função que você criou antes.

// BONUS: Crie um array 'total' contendo os valores total, a conta + gorjeta.
// TEST DATA: 125, 555 e 44.

const calcGorjeta = function (conta) {
  return conta >= 50 && conta <= 300 ? conta * 0.15 : "Não encontrado.";

  // return 200;

  if (conta >= 50 && conta <= 300) {
    return conta * 0.15;
  }

  return conta * 0.2;
};

const contas = [125, 555, 44];
const gorjetas = [
  calcGorjeta(contas[0]),
  calcGorjeta(contas[1]),
  calcGorjeta(contas[2]),
];
console.log(contas);
console.log(gorjetas);

const totals = [
  gorjetas[0] + contas[0],
  gorjetas[1] + contas[1],
  gorjetas[2] + contas[2],
];

console.log(totals);

// MATRIZES
const tabela = [
  [1, 2, null],
  [4, null, 6],
  [7, 8, 9],
];

console.log(tabela[0]);
console.log(tabela[1]);
console.log(tabela[2]);
console.log(tabela[0][0]);
console.log(tabela[1][1]);

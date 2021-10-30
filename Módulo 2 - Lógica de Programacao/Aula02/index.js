// Mark e John estão tentando comparar seus IMCs (índices de massa corporal), que é calculado usando a seguinte fórmula:
// IMC = peso / altura ** 2 = peso / (altura * altura). (Peso em kg e altura em metros).

// Guarde o peso e altura de Mark e John em variáveis.
// Calcule seus imcs usando a fórmula (você pode até implementar as duas versões)
// Crie uma variável booleana 'markMaiorIMC' contendo informação sobre se Mark possui um IMC maior que John.
// TEST DATA 1: Mark pesa 78kg e tem 1.69m de altura. John pesa 92 Kg e tem 1.95 m de altura
// TEST DATA 2: Mark pesa 95Kg e tem 1.88m de altura. John pesa 85Kg e tem 1.76m de altura.

const pesoMark = 95;
const alturaMark = 1.88;
const pesoJohn = 85;
const alturaJohn = 1.76;

const IMCMark = pesoMark / (alturaMark * alturaMark);
const IMCJohn = pesoJohn / (alturaJohn * alturaJohn);
const markMaiorIMC = IMCMark > IMCJohn;

console.log("IMC Mark: " + IMCMark.toFixed(2));
console.log("IMC John: " + IMCJohn.toFixed(2));
console.log(markMaiorIMC);

// STRINGS

const primeiroNome = "Larissa";
const profissao = "professora";
const anoNascimento = 1993;
const anoAtual = 2021;

const larissa =
  "Sou " +
  primeiroNome +
  " uma " +
  profissao +
  " de " +
  (anoAtual - anoNascimento) +
  " anos.";

console.log(larissa);

// INTERPOLAÇÃO DE STRING

const larissaWithInterpolation = `Sou ${primeiroNome}, uma ${profissao} de ${
  anoAtual - anoNascimento
} anos.`;

console.log(larissaWithInterpolation);

// CONDICIONAIS / if/else

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Larissa pode tirar a carteira de motorista");
} else {
  const yearsLeft = 18 - age;
  console.log(`Larissa é muito nova. Espere mais ${yearsLeft} anos :)`);
}

const birthYear = 1993;

let century; //undefined
console.log(century);
console.log(typeof century);
if (birthYear <= 2000) {
  century = 20; //number
} else {
  century = 21;
}

console.log(century);

// Use o exemplo de IMC do Desafio 1 e o código que você já fez para melhorá-lo:
// Mostre uma mensagem no console dizendo quem tem o maior IMC.
// A mensagem pode ser "O IMC de Mark é maior do que o de John"
// ou "O IMC de John é maior do que o de Mark".
// Use interpolação de string para incluir os valores de IMC nos outputs.
// Exemplo: "O IMC de Mark (28.3) é maior do que o de John (23.9)!"

if (IMCMark > IMCJohn) {
  console.log(
    `O IMC de Mark (${IMCMark.toFixed(
      1
    )}) é maior do que o de John (${IMCJohn.toFixed(1)})`
  );
} else {
  console.log(
    `O IMC de John (${IMCJohn.toFixed(
      1
    )}) é maior do que o de Mark (${IMCMark.toFixed(1)})`
  );
}

// CONVERSÃO DE TIPOS E COERÇÃO DE TIPOS

// Conversão de tipo: quando nós manualmente convertemos de um tipo para outro.

// Coerção de tipo: é quando o Javascript converte automaticamente os tipos por tras dos panos.

const inputYear = "1991";
console.log(inputYear + 18);

// CONVERSÃO DE TIPOS
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(IMCMark.toFixed(1)));

console.log(Number("Larissa")); // NaN: not a number
console.log(typeof NaN); // número inválido

console.log(String(23), 23);

// COERÇÃO DE TIPO

console.log("Eu tenho " + 28 + " anos");
console.log("Eu tenho " + "28" + " anos");
console.log("Eu tenho " + String(28) + " anos");

console.log(isNaN("3"));

console.log("23" - "10" - 3);

console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

// Adivinharem o output

let n = "1" + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // 9 + "5" = 95

console.log("5" + 2 + 3 + 4); // 9 + "5" = 95

console.log("10" - "4" - "3" - 2 + "5");

// '10' - '4' = 6
// 6 - '3' = 3
// 3 - 2 = 1
// 1 + '5' = 15

console.log(typeof ("4" - "1"));

// VALORES TRUTHY E FALSY

// 5 valores falsy: 0, '', undefined, null, NaN
// qualquer outro valor é um truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Larisssa"));
console.log(Boolean({}));
console.log(Boolean(""));

const dinheiro = "";
console.log(dinheiro.length);

if (dinheiro) {
  console.log("Oba! Tenho dinheiro");
} else {
  console.log("to lisa! :(");
}

// Operadores de igualdade == vs. ===

const age2 = "18";
if (age2 === 18) console.log("Você virou adulto! :D (strict)");
if (age2 == 18) console.log("Você virou adulto! :D (loose)");

// === strict
// == loose

// Boa prática: Usar sempre o operador === ao invés do ==.

// const numFavorito = prompt("Qual o seu número favorito?");
// console.log(numFavorito);
// console.log(typeof numFavorito);

// if (numFavorito == 23) {
//   // '23' == 23
//   console.log("Número favorito 23!");
// }

// if (numFavorito === 23) {
//   //23 === 23;
//   console.log("Número favorito 23! (strict)");
// }

// if (numFavorito === 23) {
//   console.log("Número favorito 23!");
// } else if (numFavorito === 7) {
//   console.log("7 é o número favorito!");
// } else if (numFavorito === 9) {
//   console.log("O número favorito é 9");
// } else {
//   console.log("O número favorito não é 23 nem 7 nem 9");
// }

// if (numFavorito != 23) console.log("não é 23");
// "23" != 23;

// Operadores lógicos

const possuiCarteiraMotorista = true;
const temBoaVisao = true;

// console.log(possuiCarteiraMotorista && temBoaVisao);

//OPERADOR AND &&
// true true => true
// true false => false
// false true => false
// false false => false

console.log(possuiCarteiraMotorista || temBoaVisao);

// OPERADOR OR ||
// true true => true
// true false => true
// false true => true
// false false => false

// AND *
// OR +
// 1 => TRUE
// 0 => FALSE

// AND

// 1 * 1 = 1 (TRUE)
// 1 * 0 => 0 (FALSE)
// 0 * 1 => 0 (FALSE)
// 0 * 0 => 0 (FALSE)

// OR

// 1 + 1 = 1 (TRUE)
// 1 + 0 => 1 (TRUE)
// 0 + 1 => 1 (TRUE)
// 0 + 0 => 0 (FALSE)

// NOT

console.log(!possuiCarteiraMotorista);
console.log(!temBoaVisao);

// NOT

// true => false
// false => true

const isCansado = true;
console.log(possuiCarteiraMotorista || temBoaVisao || isCansado);
console.log(possuiCarteiraMotorista && temBoaVisao && isCansado);

// Existem dois times de ginástica, Dolphins e Koalas.
// Eles competem um contra o outro 3 vezes. O vencedeor com a maior
// média de pontos ganha o troféu.

// Calcule a média de pontos para cada time usando os dados de teste abaixo:
// Compare a média dos scores dos times para determinar
// o vencedor da competição, e mostre no console.
// Não esqueça que pode existir um empate, então teste esse caso também.

// TEST DATA: Score dos Dolphins 96, 108 e 89. Koalas score 88, 91 e 110.

// BONUS 1: Adicione um requisito para um score mínimo de 100.
// Com essa regra, um time só ganha se ele tiver um score maior
// que o outro time, e ao mesmo tempo um score de pelo menos 100 pontos.

// BONUS 2: Score mínimo também se aplica ao empate!
// Então o empate só acontece se os dois tiverem o mesmo score e
// também os dois tiverem score maior ou igual a 100 pontos,
// senão, nenhum time ganha o troféu.

// TEST DATA BONUS 1: Dolphins score 97, 112 e 101. Koalas score 109, 95 e 123.
// TEST DATA BONUS 2: Dolphins score 97, 112 e 101. Koalas score 109, 95 e 106.

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphis ganham o troféu.");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas ganham o troféu!");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Os dois ganham o troféu!");
} else {
  console.log("Nenhum ganha o troféu");
}

// SWITCH

const diaSemana = "quarta";

switch (diaSemana) {
  case "segunda":
    console.log("Planejar curso da lets code");
    break;
  case "terca":
    console.log("Preparar vídeos teóricos");
    break;
  case "sabado":
  case "domingo":
    console.log("dormir");
    break;
  default:
    console.log("não é um dia da semana válido");
}

// if
// else if
// else if (diaSemana === "sabado" || diaSemana === "domingo") {
// }

// DECLARAÇÃO E EXPRESSÕES
// EXPRESSÕES: (3 + 4, 1993, true && false && !false)
// DECLARAÇÃO: console.log("hello world");

let str;

if (23 > 10) {
  str = "23 é maior do que 10";
  console.log(str);
  console.log(console.log("dsadasdas"));
}

console.log(`Tenho ${2021 - 1993} anos e ${"3 é maior do que 10"}`);

// OPERADOR TERNÁRIO

const age3 = 28;

age3 >= 18
  ? console.log("Gosto de andar de bike")
  : console.log("não gosto de andar de bike");

const bebida = age3 >= 18 ? "vinho" : "agua";

console.log(bebida);

// let bebida;
// if (age3 >= 18) {
//   bebida = "vinho";
// } else {
//   bebida = "agua";
// }

console.log(`Eu gosto de ${age3 >= 18 ? "vinho" : "agua"}`);

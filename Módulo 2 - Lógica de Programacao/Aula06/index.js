const larissaObjMelhorado = {
  // firstName: "Larissa",
  lastName: "Queiroz",
  birthYear: 1993,
  job: "professora",
  friends: ["Natalia", "Camila", "Pedro"],
  hasCarteiraMotorista: false,
  calcAge: function () {
    // console.log(this);

    this.age = 2021 - this.birthYear;
    return this.age;
  }, // qualquer função agregada a um objeto é chamada de método.
  getSummary: function () {
    return `${this.firstName} tem ${this.calcAge()} anos, é ${this.job} e ${
      this.hasCarteiraMotorista ? "possui" : "não possui"
    } carteira de motorista.`;
  },
};

console.log(larissaObjMelhorado.getSummary());

larissaObjMelhorado.firstName = "Larissa";

console.log(larissaObjMelhorado.getSummary());

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

Object.keys(restaurant); // name
Object.keys(restaurant.openingHours); // thu, fri, sat

// FOR OF

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

// for (let i =0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// let x = 0;
// x =  + 1;

for (const i of menu) console.log(i);

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

const x = [1, 2, 3];

const [a, b, c] = x;
console.log(a);
console.log(b);
console.log(c);

// LOOPS OBJETOS

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const propriedades = Object.keys(restaurant.openingHours);
console.log(propriedades);

// console.log(`Estamos abertos por ${propriedades.length} dias.`);

for (const day of propriedades) {
  console.log(day);
}

const valores = Object.values(restaurant.openingHours);
console.log(valores);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

for (const [key, { open, close }] of entries) {
  console.log(key, open, close);

  console.log(`Nas ${key} nós abrimos às ${open} e fechamos às ${close}`);
}

// EXERCÍCIOS

// 1. Faça um programa que peça as 4 notas bimestrais e mostre a média delas, usando vetores.

const y = [10, 8, 9, 9, 3];
let soma = 0;

for (let i = 0; i < y.length; i++) {
  soma = soma + y[i]; // soma = 0 + 10
  // soma = 10 + 8 = 18
  // soma = 18 + 9
}

const media = soma / y.length;
console.log(media);

// 2. Faça um programa que olhe todos os itens de um vetor e diga quantos deles são ímpares.

let count = 0;

for (let i = 0; i < y.length; i++) {
  if (y[i] % 2 !== 0) {
    count++;
  }
}

console.log(count);

// 3. Faça um programa que dados dois vetores de mesmo tamanho, imprima o produto escalar entre eles.

// OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i do vetor1 pelo número na posição i do vetor2.

// Exemplo: [1,2,3] * [4,5,6] = (1*4) + (2*5) + (3*6)

const vetor1 = [1, 2, 3];
const vetor2 = [4, 5, 6];

let result = 0;

for (let i = 0; i < vetor2.length; i++) {
  result = result + vetor1[i] * vetor2[i];
}

console.log(result);

// 4. Escreva uma função que receba uma string
// e retorne a string invertida. Ex: 'abcde' => 'edcba'

function reverseString(str) {
  //abcde
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }

  return reversedString;
}

console.log(reverseString("abcde"));

// 4. O fatorial de um número inteiro e positivo “n”, representado por “n!”
// é obtido a partir da multiplicação de todos os seus antecessores até o número um.
// Exemplo: O fatorial de 5 é 5*4*3*2*1 = 120. // fat(3) => 3*2*1
// Os fatoriais de 0 e 1 são 1.
// Escreva uma função que receba um número n e calcule o fatorial desse número.
// O fatorial deve ser retornado na funçao.

function fatorial(n) {
  let fat = 1;
  for (let i = n; i > 1; i--) {
    fat = fat * i; // fat = 1 * 4 * 3 * 2 * 1
  }
  return fat;
}

console.log(fatorial(4));

// 5. Escreva uma função que receba um número positivo não nulo n < 20 e
// mostre no console um triângulo reto formado apenas por símbolos de asterisco
// ("*") e de espaço (" ").

// function trianguloReto(n) {
//   // for (let i = 1; i <= n; i++) {
//   let output = "";

//   for (let j = 1; j <= n; j++) {
//     output += "*"; // *
//     // output = output + "*";
//   }

//   console.log(output); // *
//   // **
//   // ***
// }

// trianguloReto(5);

function triangulo(n) {
  let acomu = "";
  for (let i = 1; i <= n; i++) {
    acomu = acomu + "*";
    console.log(acomu);
  }
}

triangulo(5);

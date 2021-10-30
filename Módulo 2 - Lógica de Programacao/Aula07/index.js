// JAVASCRIPT POR DEBAIXO DOS PANOS

// 1. SCOPE

// GLOBAL SCOPE

// const eu = "Larissa";
// const profissao = "professora";
// const anoNascimento = 1993;

// // FUNCTION SCOPE

// function calcAge(birthYear) {
//   const now = 2021;
//   const age = now - birthYear;
//   return age;
// }

// // console.log(now);

// // BLOCK SCOPE

// if (anoNascimento >= 1993 && anoNascimento < 2021) {
//   const x = true;
//   const nome = "Larissa";
// } // block if, for loop while

// // console.log(x);

// // 2. HOISTING

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Larissa";
// let job = "professora";
// const year = 1993;

// console.log(me);

// console.log(addDeclaration(2, 3));
// // console.log(addExpression(2, 3));
// // console.log(addArrow(2, 3));
// // console.log(addExpression2(2, 3)); // undefined(2,3);

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var addExpression2 = function (a, b) {
//   return a + b;
// };

// // EXEMPLO DE HOISTING

// var numProdutos;
// // !undefined => true => deletar o carrinho = ohhh nooo!!!

// if (!numProdutos) deleteShoppingCart();

// var numProdutos = 10;

// function deleteShoppingCart() {
//   console.log("Todos os produtos excluídos!");
// }

// // EXEMPLO 2

// var x2 = 1;
// let y2 = 2;
// const z = 3;

// // KEYWORD THIS

// console.log(this);

// // THIS SE REFERE AO OBJETO QUE ESTÁ CHAMANDO O MÉTODO.
// const larissa = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     return 2021 - this.year;
//   },
// };

// larissa.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.x = 5;

// matilda.calcWhatever = larissa.calcAge;
// matilda.calcWhatever();

// // FUNÇÕES REGULARES VS ARROW FUNCTIONS

// let firstName = "Larissa";

// const larissa2 = {
//   firstName: "Larissa",
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// larissa2.calcAge();
// larissa2.greet();

// // NUNCA USE ARROW FUNCTIONS COMO MÉTODOS: BOA PRÁTICA.

// const larissa3 = {
//   firstName: "Larissa",
//   year: 1993,
//   calcAge: function () {
//     //   console.log(this);
//     console.log(2021 - this.year);

//     if (true) {
//       const isGreaterThan27 = () => {
//         console.log(this);
//         if (this.year >= 1993) {
//           console.log("Ano maior que 1993");
//         }
//       };

//       isGreaterThan27();
//     }

//     // isGreaterThan27();
//   },
//   // greet: () => {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);
//   // },
// };

// larissa3.calcAge();

// TIPOS PRIMITIVOS VS OBJETOS

// primitivos: strings, numbers, booleans etc
// objetos: object literal, arrays, matrizes etc

let age = 30;
let oldAge = age; // cópia de age // endereço diferente na memória
age = 31;
console.log(age);
console.log(oldAge);

const laris = {
  nome: "Larissa",
  age: 28,
};

const friend = laris;
friend.age = 27;
console.log("Friend: ", friend);
console.log("laris: ", laris);

// const é imutável apenas para valores primitivos, não valores de referência.

// PARÂMETROS PADRÃO

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);

createBooking("LH123", undefined, 800);

// COMO FUNCIONA A PASSAGEM DE PARÂMETROS PARA A FUNÇÃO (VALOR E REFERÊNCIA)

const flight = "LH234"; // tipo primitivo
const larissaqueiroz = {
  // tipo object
  nome: "Larissa Queiroz",
  passport: 321321312,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999"; // tá em outro end. de memória diferente da const flight.

//   // passenger e larissaqueiroz apontam para o mesmo endereço de memória.
//   passenger.nome = "Ms. " + passenger.nome;

//   if (passenger.passport === 321321312) {
//     alert("Fez o check in!");
//   } else {
//     alert("Passaporte errado!");
//   }
// };

// checkIn(flight, larissaqueiroz);
console.log(flight);
console.log(larissaqueiroz);

const flightNum = flight; // cópia
const passenger = larissaqueiroz; // só copiou a referência para o objeto na memória.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(larissaqueiroz);
// checkIn(flight, larissaqueiroz); // PASSAPORTE ERRADO!

// DUAS FUNÇÕES MANIPULANDO O OBJETO.

// FIRST CLASS E HIGHER ORDER FUNCTIONS
// FUNÇÕES DE PRIMEIRA CLASSE E FUNÇÕES DE ALTA ORDEM

// FIRST CLASS FUNCTIONS: Significa que o JavaScript trata funções como valores.

// Guardar funções em variáveis e propriedades
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

const greet = () => console.log("Hey!");

function genericFunction(greet) {
  return greet();
}

genericFunction(greet);

// RETORNAR FUNÇÕES DE FUNÇÕES

// FUNÇÕES DE ALTA ORDEM
// 1. Funções que recebem outra função como argumento
// 2. Funções que retornam uma outra função
// 3. Os dois acima.

// Funções que são passadas como argumentos são chamadas de callback functions

// Tarefa de casa da Larissa: funções recursivas são de alta ordem?

const umaPalavra = function (str) {
  return str.replace(/ /g, "").toLowerCase();
  // substitui espaços por ''
};

console.log(umaPalavra("LARISSA QUEIROZ"));

const primeiraPalavraMaiuscula = function (str) {
  const [primeira, ...outras] = str.split(" ");

  return [primeira.toUpperCase(), ...outras].join(" ");
};

console.log(primeiraPalavraMaiuscula("larissa queiroz"));

const transformar = function (str, fn) {
  // str =  "turma #810 do Santander Coders é braba!!!"

  // fn = primeiraPalavraMaiuscula

  // fn(str)=> primeiraPalavraMaiuscula("turma #810 do Santander Coders é braba!!!")

  console.log(`string original: ${str}`);
  console.log(`string transformada: ${fn(str)}`); // fn(str)
  console.log(`transformada por: ${fn.name}`); // propriedade da função/nome da função
};

transformar(
  "turma #810 do Santander Coders é braba!!!",
  primeiraPalavraMaiuscula
);

// transformar("turma #810 do Santander Coders é braba!!!", umaPalavra);

const hello = function () {
  console.log("hello");
};

const arr = [];

arr.forEach(hello);

// FUNÇÕES QUE RETORNAM FUNÇÕES

const greet2 = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet2("Hey"); // function (name) {
//     console.log(`${greeting} ${name}`);
// }

const greetHey = function (name) {
  console.log(`${greeting} ${name}`);
};

greetHey("Larissa");

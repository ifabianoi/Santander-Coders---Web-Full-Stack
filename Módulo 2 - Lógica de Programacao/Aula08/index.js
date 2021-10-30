// FUNCOES DE ALTA ORDEM RECAP

// FUNCOES DE ALTA ORDEM
// 1. Funções que recebem outra função como argumento
// 2. Funções que retornam uma outra função
// 3. Funções que recebem função como argumento e retornam função (1, 2).

// Funções que são passadas como argumentos são chamadas de CALLBACK function.

// SUBSTITUI ESPAÇOS EM BRANCO POR NADA.
const umaPalavra = function (str) {
  return str.replace(/ /g, "").toLowerCase();
  // substitui espaços por ''
};

console.log(umaPalavra("LARISSA QUEIROZ"));
// larissaqueiroz

// receber uma string, e transformar a primeira palavra em maiúscula
const primeiraPalavraMaiuscula = function (str) {
  const [primeira, ...outras] = str.split(" ");

  return [primeira.toUpperCase(), ...outras].join(" ");
};

console.log(primeiraPalavraMaiuscula("larissa queiroz")); // LARISSA queiroz

const transformar = function (str, fn) {
  // str =  "turma #810 do Santander Coders é braba!!!"

  // fn = primeiraPalavraMaiuscula

  // fn(str)=> primeiraPalavraMaiuscula("turma #810 do Santander Coders é braba!!!")

  console.log(`string original: ${str}`);
  console.log(`string transformada: ${fn(str)}`); // fn(str)
  console.log(`transformada por: ${fn.name}`); // propriedade da função/nome da função
};

// FUNÇÃO TRANSFORMAR É DE ALTA ORDEM, POIS RECEBE UMA FUNÇÃO COMO ARGUMENTO.
transformar(
  "turma #810 do Santander Coders é braba!!!",
  primeiraPalavraMaiuscula
);

const hello = function () {
  console.log("hello");
};

const arr = [1, 2, 3, 4];

arr.forEach(hello);

// FUNÇÕES QUE RETORNAM FUNÇÕES

const x = function (param1) {
  const y = 1 + 2;

  return y;
};

x("HAHAHA");

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greetOi = greet("Oi");
// greetOi("Menino do ônibus");
// console.log(greetOi);

greet("Oi")("Menino do ônibus");

// const greetHi = greet("Hi");
// greetHi("Busboy");

// const greetHi = function (name) {
//   console.log(`${greeting} ${name}`);
// };

// greetHi("Busboy");

// console.log("Hi Busboy");

// Oi undefined

// greet Oi

// function (name) {
//    console.log(`${greeting} ${name}`);
//}

// loop infinito?

// function (name) {
//    console.log(`Oi ${name}`);
//}

// DESAFIO

// Reescreva a função greet usando arrow function.
// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };

const greet2 = (greeting) => {
  (name) => console.log(`${greeting} ${name}`);
};

const greet3 = function (greeting, name) {
  console.log(`${greeting} ${name}`);
};

greet3("Oi", "lalalal");

// greet2("Hi")("Menina do ônibus");

const y = greet2("Hi");

// "Hi undefined"("lalalla");

// 1. FOREACH

const movimentacao = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const mov of movimentacao) {
  if (mov > 0) {
    console.log(`Você depositou ${mov}`);
  } else {
    console.log(`Você sacou ${Math.abs(mov)}`);
  }
}

console.log("----- FOREACH -----");

// const arr = [1, 2, 3];
movimentacao.forEach(function (mov, i, arr) {
  // arr.push(mov);
  // mov = 200
  // i = 0
  // arr = [200, 450, -400, 3000, -650, -130, 70, 1300]

  // 2 iteracao
  // mov = 450
  // i = 1
  // arr = [200, 450, -400, 3000, -650, -130, 70, 1300]

  // 3 iteracao
  // mov = -400
  // i = 2
  // arr = [200, 450, -400, 3000, -650, -130, 70, 1300]

  if (mov > 0) {
    console.log(`Movimentação ${i + 1} Você depositou ${mov}`);
  } else {
    console.log(`Movimentação ${i + 1} Você sacou ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)

for (const [i, mov] of movimentacao.entries()) {
  if (mov > 0) {
    console.log(`Movimentação ${i + 1}: Você depositou ${mov}`);
  } else {
    console.log(`Movimentação ${i + 1}: Você sacou ${mov}`);
  }
}

// no foreach break e continue não funcionam!

// DESAFIO

// Julia e Kate estão fazendo um estudo sobre cães. Cada uma delas perguntou para 5 donos de cachorros sobre a idade de seus cães, e armazenaram os dados em um array (um array para Julia e outro para Kate). Por enquanto, elas estão apenas interessadas sobre saber se o cão é um adulto ou filhote. Um cachorro é um adulto se ele tem pelo menos 3 anos de idade, e é um filhote se tem menos de 3 anos de idade.

// Crie uma função 'checkDogs', que aceita 2 arrays de idade de cães ('dogsJulia' e 'dogsKate'), e faz as seguintes coisas:

// 1. Julia descobriu que as idades do PRIMEIRO e dos DOIS ÚLTIMOS cachorros na verdade são de gatos, não cachorros! Então crie uma cópia rasa do array de Julia, e remova as idades de gatos do array copiado (por que é uma má prática mudar os parâmetros das funções)

// 2. Crie um array com os dados de Julia (corrigidos) e Kate.

// 3. Para cada cão que restou, imprima no console se ele é adulto ("O cão número 1 é um adulto, e tem 5 anos de idade") ou um filhote ("Cachorro número 2 ainda é um filhote.")

// 4. Execute a função para os 2 datasets

// DICA: USE O MÉTODO SLICE PARA FAZER A CÓPIA, SPLICE PARA REMOVER ELEMENTOS DO ARRAY E CONCAT PARA JUNTAR OS ELEMENTOS DOS DOIS ARRAYS.

// TEST DATA 1: Dados de Júlia [3,5,2,12,7], dados de Kate [4,1,15,8,3]
// TEST DATA 2: Dados de Júlia [9,16,6,8,3], dados de Kate [10,5,6,1,4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  console.log(dogsJuliaCorrected);
  dogsJuliaCorrected.splice(0, 1);
  console.log(dogsJuliaCorrected);
  dogsJuliaCorrected.splice(2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  let x = 0;
  dogs.forEach(function (dog, i) {
    x = x + i;
    if (dog >= 3) {
      console.log(`O cão número ${x + 1} é adulto, e tem ${dog} anos de idade`);
    } else {
      console.log(
        `O cão número ${x + 1} é um filhote e tem ${dog} anos de idade`
      );
    }
  });
};

checkDogs([3, 5, 2, 12, 7, 3, 5, 2, 2, 2], [4, 1, 15, 8, 3]);

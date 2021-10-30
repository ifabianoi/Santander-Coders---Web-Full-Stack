// FOREACH

// const movimentacao = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const mov of movimentacao) {
//   if (mov > 0) {
//     console.log(`Você depositou ${mov}`);
//   } else {
//     console.log(`Você sacou ${Math.abs(mov)}`);
//   }
// }

// console.log("------ FOREACH -------");

// movimentacao.forEach(function (mov, i, arr) {
//   console.log(i);
//   console.log(arr);
//   if (mov > 0) {
//     console.log(`Você depositou ${mov}`);
//   } else {
//     console.log(`Você sacou ${Math.abs(mov)}`);
//   }
// });

// 1. MAP

const movimentacao = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const dolarToReal = function (usd) {
//     return usd * 5.49;
// }

const movimentacaoReal = movimentacao.map(function (mov) {
  return mov * 5.49;
});

console.log(movimentacaoReal);
console.log(movimentacao); // não muda o array original

const movimentacaoReal2 = movimentacao.map(function (mov) {
  return 23 + mov;
});

console.log(movimentacaoReal2);

const movimentacaoRealFor = [];
for (const mov of movimentacao) {
  movimentacaoRealFor.push(mov * 5.49);
}
console.log(movimentacaoRealFor);

// MINI DESAFIO: SUBSTITUA A FUNÇÃO DE CALLBACK POR UMA ARROW FUNCTION

const movimentacaoRealArrow = movimentacao.map((mov) => mov * 5.49);

console.log(movimentacaoRealArrow);

const descricaoMovimentacao = movimentacao.map((mov, i) => {
  return `Movimentação ${i + 1}: Você ${
    mov > 0 ? "depositou" : "sacou"
  } ${Math.abs(mov)}`;
});

console.log(descricaoMovimentacao);

const account1 = {
  owner: "Larissa Queiroz",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Miranda",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Pedro Silva",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Pereira",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// ADICIONAR NOVA PROPRIEDADE 'USERNAME' EM CADA OBJETO com as iniciais dos owners em letra minúscula. Exemplo:
// owner: 'Larissa Queiroz'
// username: 'lq'

const username = "Larissa Queiroz"
  .toLowerCase()
  .split(" ")

  .map(function (name) {
    return name[0];
  })
  .join("");

console.log(username);

const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");

  return username;
};

console.log(createUsernames("Larissa Queiroz"));

const createUsernames2 = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

console.log(createUsernames2(accounts));
console.log(accounts);

// FILTER

const movimentacao2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositos = movimentacao2.filter(function (mov) {
  return mov > 0;
});

console.log(depositos);
console.log(movimentacao2);

const depositosFor = [];
for (const mov of movimentacao2) {
  if (mov > 0) {
    depositosFor.push(mov);
  }
}

console.log(depositosFor);

// DESAFIO: Criem um array de saques.

const saques = movimentacao2.filter((mov) => mov < 0);

// REDUCE

const movimentacao3 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movimentacao4 = [10, -5, 2];

const saldo = movimentacao3.reduce(function (acc, curr, i, arr) {
  return acc + curr;
}, 0);

console.log(saldo);

// PRIMEIRA IT:
// 100 + 200

// SEGUNDA IT:
// acc + curr
// 200 + 450 = 650

// TERCEIRA IT:
// acc + curr
// 650 + (-400)
// acc = 250

// QUARTA IT:
// acc + curr
// 250 + 3000
// acc = 3250

// saldo = 200

let saldo2 = 0;
for (const mov of movimentacao3) saldo2 += mov;

console.log(saldo2);

const saldo3 = movimentacao3.reduce((acc, atual) => acc + atual);
console.log(saldo3);

// VALOR MÁXIMO DO ARRAY DE MOVIMENTAÇÃO

// const movimentacao3 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movimentacao3.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movimentacao3[0]);

console.log(max);

// primeira it: 200 > 200 => 200
// segunda it: 200 > 450 => 450
// terceira it: 450 > -400 => 450
// quarta it: 450 > 3000 =>  3000

// DESAFIO

// Vamos voltar para o estudo de Kate e Julia sobre cães. Dessa vez, elas querem converter as idades dos cachorros em idades humanas e calcular a idade média dos cães nos seus estudos.

// Crie uma função 'calcAverageHumanAge', que aceita um array de idades de cães ('ages'), e faz as seguintes operações, em ordem:

// 1. Calcula a idade do cão em anos humanos usando a seguinte fórmula: se o cão tem <= 2 anos de idade, humanAge = 2 * dogAge. Se o cão tem > 2 anos de idade, humanAge = 16 + dogAge * 4.

// 2. Exclua todos os cães que tem menos de 18 anos humanos (o que é o mesmo que pegar apenas os cães que tem apenas 18 anos de idade)

// 3. Calcule a idade média humana de todos os cães adultos

// 4. Execute a função para os dois datasets:

// TEST DATA 1: [5,2,4,1,15,8,3];
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  console.log(humanAges);

  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

const calcAverageHumanAge2 = function (ages) {
  return ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4)) // retorno do map
    .filter((age) => age >= 18) // filtra com retorno do map
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // reduce com retorno do filter.
};

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

const totalDepositosEmReais = [-1, 1, -5, 6] // [-1,1, -5,6]
  .filter((mov) => mov > 0) // [1,6]
  .map((mov) => mov * 5.49) // [5.49, 32.94]
  .reduce((acc, mov) => acc + mov, 0); // 0 + 5.49 // 5.49 + 32.94

console.log(totalDepositosEmReais);

// reduce: 1 parametro => acumulador
// 2 parametro => elemento atual
// 3 parametro => index
// 4 parametro => array completo que está usando a função reduce.

// DESESTRUTURAÇÃO DE ARRAYS

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x);
console.log(y);
console.log(z);

console.log(arr); // array original não muda.

// OPERADOR SPREAD

const arr2 = [7, 8, 9];
const badNewArray = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArray);

const newArray = [1, ...arr2, 3];
console.log(newArray);

console.log(...newArray);

const menuRestaurante = ["Macarrao", "Sopa", "Sushi", "Pao"];
console.log(menuRestaurante);

const newMenu = [...menuRestaurante, "Pizza"];
console.log(newMenu);

console.log(...newMenu);
console.log([...newMenu]);

// CONCATENAR NEWMENU E MENURESTAURANTE
const menu = [...newMenu, ...menuRestaurante];
console.log(menu);

const str = "Larissa";
const letters = [...str, " ", "Q."];
console.log(letters);

// [Larissa, ' ', Q.]

const fazerMacarrao = function (ingrediente1, ingrediente2, ingrediente3) {
  console.log(
    `Macarrão com os ingredientes: ${ingrediente1}, ${ingrediente2} e ${ingrediente3}`
  );
};

// const ingredientes = [
//   prompt("Vamos fazer Macarrão! Ingrediente 1?"),
//   prompt("Vamos fazer Macarrão! Ingrediente 2?"),
//   prompt("Vamos fazer Macarrão! Ingrediente 3?"),
// ];

// console.log(ingredientes);

// fazerMacarrao(...ingredientes);

// PARÂMETRO REST E O PADRÃO REST

// SPREAD, pq está no lado direito do =
const arr3 = [1, 2, ...[3, 4]];

// REST, pq está no lado esquerdo do =
const [g, h, ...outros] = [1, 2, 3, 4, 5];
console.log(g, h, outros);

// ELEMENTO REST PRECISA SER O ÚLTIMO

// const add = function (...numeros) {
//   console.log(numeros);
// };

const add = (...numeros) => console.log(numeros);

add(2, 3);
add(2, 3, 4, 5, 6);
add("lalala", "ererrere", "usgfusdfbsdf");

// MÉTODOS DE ARRAY

// SLICE
let arr4 = ["a", "b", "c", "d", "e"];

console.log(arr4.slice(2));
const o = arr4.slice(2);
console.log(o);

console.log(arr4.slice(2, 4));

console.log(arr4.slice(-1));

console.log(arr4.slice(-2));

console.log(arr4.slice(1, -2));

console.log(arr4.slice());
console.log([...arr4]);

console.log(arr4);

// SPLICE - MUDA O ARRAY ORIGINAL!!!!!
// console.log(arr4.splice(2));

// console.log(arr4);

// arr4.splice(-1);
// console.log(arr4);

const u = arr4.splice(1, 2);
console.log(u);

console.log(arr4);

// REVERSE -  MUDA O ARRAY ORIGINAL!!!!
arr4 = ["a", "b", "c", "d", "e"];
const arr5 = ["j", "i", "h", "g", "f"];
console.log(arr5.reverse());
console.log(arr5);

// CONCAT

const letras = arr4.concat(arr5);
console.log(letras);
console.log([...arr4, ...arr5]);

// JOIN

console.log(letras.join(" * "));

// OBJETOS

const larissaArray = [
  "Larissa",
  "Queiroz",
  2021 - 1993,
  "professora",
  ["Natalia", "Camila", "Pedro"],
];

larissaArray[0];
larissaArray[3];

const larissa = {
  firstName: "Larissa",
  lastName: "Queiroz",
  age: 2021 - 1993,
  job: "professora",
  friends: ["Natalia", "Camila", "Pedro"],
};

// OBTER VALORES DO OBJETO

console.log(larissa);

// Primeira forma de obter valor
console.log(larissa.lastName);
console.log(larissa["lastName"]);

const nameKey = "Name";
console.log(larissa["first" + nameKey]);
console.log(larissa["last" + nameKey]);

// "last" + nameKey => "lastName"
// larissa["lastName"];

// console.log(larissa.'last' + nameKey);

// const interessadoEm = prompt(
//   "O que você quer saber sobre Larissa? Escolha entre firstName, lastName, age, job e friends"
// );

// console.log(larissa[interessadoEm]);

// if (larissa[interessadoEm]) {
//   console.log(larissa[interessadoEm]);
// } else {
//   console.log(
//     "Requisição inválida! Escolha entre firstName, lastName, age, job ou friends"
//   );
// }

// ADICIONAR NOVAS PROPRIEDADES

larissa.location = "Brasil";
larissa["instagram"] = "@lariscodes";
console.log(larissa);

// DESAFIO

// "{nome} tem {quantidade} de amigos, e seu melhor amigo é {fulano.}"

// const larissa = {
//     firstName: "Larissa",
//     lastName: "Queiroz",
//     age: 2021 - 1993,
//     job: "professora",
//     friends: ["Natalia", "Camila", "Pedro"],
//   };

("Larissa tem 3 amigos e sua melhor amiga é Natalia");

console.log(
  `${larissa.firstName} tem ${larissa.friends.length} amigas e sua melhor amiga é ${larissa.friends[0]}`
);

// MÉTODOS DE OBJETOS

const larissaObj = {
  firstName: "Larissa",
  lastName: "Queiroz",
  birthYear: 1993,
  job: "professora",
  friends: ["Natalia", "Camila", "Pedro"],
  hasCarteiraMotorista: true,
  calcAge: function () {
    // console.log(this);
    return 2021 - this.birthYear;
  }, // qualquer função agregada a um objeto é chamada de método.
};

console.log(larissaObj.calcAge());
larissaObj.calcAge();
larissaObj.calcAge();
larissaObj.calcAge();

const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.especies = especies;

  // MÁ PRÁTICA
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
};

const larissa = new Person("Larissa", 1993, "mamífero");
console.log(larissa);

// 1. Novo {} é criado
// 2. Função vai ser chamada, this = {}
// 3. {} vai ser conectado a um prototype
// 4. A função automaticamente retorna {}

const katriel = new Person("Katriel", 1996, "reptil");
console.log(katriel);

const igor = new Person("Igor", 1989, "inseto");
console.log(igor);

const lalala = {
  lastName: "Queiroz",
};
console.log(katriel instanceof Person);
console.log(lalala instanceof Person);

// PROTOTYPES

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

console.log(Person.prototype);

larissa.calcAge();
igor.calcAge();
katriel.calcAge();

console.log(larissa.__proto__);
console.log(larissa.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(larissa));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

// larissa.__proto__ === Person.prototype

Person.prototype.especies = "Homo Sapiens";
console.log(larissa.especies);
console.log(katriel.especies);
console.log(igor.especies);

console.log(larissa.hasOwnProperty("firstName"));
console.log(larissa.hasOwnProperty("especies"));

console.log(larissa.__proto__);
console.log(larissa.__proto__.__proto__); // parou aqui!!!
console.log(larissa.__proto__.__proto__.__proto__);

const arr = [3, 6, 4, 3, 12]; // new Array === []
console.log(arr.__proto__); // Array.prototype.map
// Array.prototype.filter
// Array.prototype.reduce

const x = 5;

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// CODING CHALLENGE

// 1. Use uma função construtora para implementar um Carro. Um carro possui a propriedade velocidade e a propriedade marca. A propriedade velocidade é a velocidade do carro em km/h.

// 2. Implemente um método 'acelerar' que irá aumentar a velocidade do carro em 10 vezes, e imprima no console a nova velocidade.

// 3. Implemente um método 'frear' que irá decrementar a velocidade do carro em 5 vezes, e imprima no console.

// 4. Crie dois objetos de carro e experimente chamar 'acelerar' e 'frear' várias vezes em cada um dos objetos.

// DATA CAR 1: 'BMW' está em 120km/h
// DATA CAR 2: 'Mercedes' está em 95km/h

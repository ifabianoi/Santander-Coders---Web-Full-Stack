// CODING CHALLENGE

// 1. Use uma função construtora para implementar um Carro. Um carro possui a propriedade velocidade e a propriedade marca. A propriedade velocidade é a velocidade do carro em km/h.

// 2. Implemente um método 'acelerar' que irá aumentar a velocidade do carro em 10 vezes, e imprima no console a nova velocidade.

// 3. Implemente um método 'frear' que irá decrementar a velocidade do carro em 5 vezes, e imprima no console.

// 4. Crie dois objetos de carro e experimente chamar 'acelerar' e 'frear' várias vezes em cada um dos objetos.

// DATA CAR 1: 'BMW' está em 120km/h
// DATA CAR 2: 'Mercedes' está em 95km/h

const Carro = function (velocidade, marca) {
  this.velocidade = velocidade;
  this.marca = marca;
};

Carro.prototype.acelerar = function () {
  this.velocidade += 10;
  console.log(`${this.marca} está em ${this.velocidade} km/h`);
};

Carro.prototype.frear = function () {
  this.velocidade -= 5;
  console.log(`${this.marca} está em ${this.velocidade}km/h`);
};

const bmw = new Carro(120, "BMW");
bmw.acelerar();
bmw.acelerar();
bmw.frear();

// CLASSES

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Esses métodos serão adicionados a propriedade .prototype de PersonCl
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Oi ${this.firstName}`);
  }
}

const larissa = new PersonCl("Larissa", 1993);
console.log(larissa.__proto__.__proto__.__proto__);
larissa.calcAge();
larissa.greet();

console.log(larissa.__proto__ === PersonCl.prototype);

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const eduarda = Object.create(PersonProto);
console.log(eduarda);
eduarda.nome = "Eduarda";
eduarda.birthYear = 2020;
eduarda.calcAge();

console.log(eduarda.__proto__);

// CODING CHALLENGE

// 1. Refaça o CHALLENGE 1, mas usando Class.

class CarroCl {
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelerar(incremento) {
    this.velocidade += incremento;
    console.log(`${this.marca} está em ${this.velocidade}km/h`);
  }

  frear(incremento) {
    this.velocidade -= incremento;
    console.log(`${this.marca} está em ${this.velocidade}km/h`);
  }
}

const bmw2 = new CarroCl("BMW", 120);

bmw2.acelerar(10);
bmw2.acelerar(10);
bmw2.frear(10);

// Herança entre "classes" usando funções construtoras

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // danilo.firstName = "Danilo"
  // danilo.birthYear = 1990
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear); // 2021 - danilo.birthYear
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // Person.call ('danilo obj {}', "Danilo", 1990)
  this.course = course;
};

// Student {}
// prototype = {}

// conectando os prototypes
// Propriedade prototype de Student = Obj vazio em que o prototype: Person.prototype
Student.prototype = Object.create(Person.prototype); // cria um objeto VAZIO {} em que o prototype é o Person.prototype
// Student.prototype = Prototype Person{}

Student.prototype.introduce = function () {
  console.log(`Meu nome é ${this.firstName} e eu estudo ${this.course}`);
};

Person.prototype.introduce = function () {
  console.log(`lalalalala`);
};

// Meu nome é danilo.firstName e eu estudo danilo.course

const danilo = new Student("Danilo", 1990, "Web FullStack");
console.log(danilo);
danilo.introduce();
danilo.calcAge();

// CODING CHALLENGE

// 1. Use uma função construtora para implementar um Carro Elétrico (chamado EV) como um filho da "classe" Carro. Além da marca e da velocidade atual, o EV também tem a bateria atual em % (propriedade 'bateria');

// 2. Implemente um método 'carregarBateria' que recebe um argumento 'carregueAte' e sete a bateria para 'carregueAte';

// 3. Implemete um método 'acelerar' que irá aumentar a velocidade do carro em 20, e diminuir a bateria em 1%. Então imprima a mensagem dessa forma: 'Tesla está em 140 km/h com uma bateria de 22%';

// 4. Crie um objeto carro elétrico e experimente chamar 'acelerar', 'frear' e 'carregarBateria' (carregar até 90%). Perceba o que acontece quando você acelera! DICA: Revise a definição de polimorfismo.

// DATA CAR 1: 'Tesla' está em 120 km/h, com uma bateria de 23%.

// HERANÇA ENTRE CLASSES

class StudentCl extends PersonCl {
  //   #course; // declarar métodos privados.

  constructor(firstName, birthYear, course) {
    super(firstName, birthYear); // Person.call(this, firstName, birthYear)
    this._course = course;
  }

  introduce() {
    console.log(`Meu nome é ${this.firstName} e eu estudo ${this._course}`);
  }

  calcAge() {
    console.log(
      `Sobrescrevendo calcAge de PersonCl (polimorfismo): ${
        2021 - this.birthYear
      }`
    );
  }

  //   getGrades() {
  //     console.log(`Notas do estudante tal`);
  //   }
}

const andrews = new StudentCl("Andrews", 1996, "Ciência da Computação");
andrews.introduce();
andrews.calcAge(); // polimorfismo

console.log(andrews._course);

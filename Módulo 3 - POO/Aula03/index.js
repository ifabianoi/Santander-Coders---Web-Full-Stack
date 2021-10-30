// Programação Funcional

// Curry
// Aplicação parcial
// Funções puras
// Referential Transparency
// Compose
// Pipe

// 1. Funções puras
// Não tem efeitos colaterais (no side effects)
// Mesmo input -> mesmo output

const array = [1,2,3];
// array = [1,2];

function mutateArray(arr) {
    // const novoArray = copia de arr.
    // novoArray.pop();
    // return novoArray;
    return arr.pop();
}

function mutateArray2(arr) {
    return arr.forEach(item => {
        arr.push(1);
    })
    // return undefined
}

console.log(mutateArray2(array));
console.log(mutateArray(array)); // undefined
console.log(array);
console.log(array);

function a(num) {
    if (num > 5) {
        return num;
    } else {
        return num + 1;
    }
}

console.log(a(5));
console.log(a(5));
console.log(a(5));
console.log(a(10));
console.log(a(10));
console.log(a(10));

function b() {
    console.log('Oi'); // efeito colateral
}

b();

function b2(num1, num2) {
    return num1 + num2;
}

console.log(b2(3,4));
console.log(b2(3,4));
console.log(b2(3,4)); // Referential Transparency: mesmo input -> mesmo ouput

function c(num) {
    return num*2;
}


console.log(c(7));
console.log(c(7));
console.log(c(7));

// Como escrever uma função perfeita?
// 1. A função faz uma coisa só
// 2. A função deve retornar algo (return)
// 3. A função deve ser pura
// 4. Não deve compartilhar estado (manipular algo de fora da função, a não ser que seja constante)
// 5. Utilizar imutabilidade
    // nunca modificar o estado global (variáveis globais)
// 6. Deve ser viável compor
// 7. Previsível

// 2. Imperativo vs Declarativos

// imperativo
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let count = 0;
while (count) {
    count++;

    if (count == 5) {
        console.log(`dsd`);
    }
}

// declarativo
[1,2,3].forEach(item => console.log(item));

// 3. Imutabilidade

// Não mudar os dados.
// poo: classes que podemos mudar propriedade 'nome';
// fp: não muda o estado, cópias do estado e retorna um novo estado toda vez.

const obj = {name: "Larissa"};
// console.log(obj);

function clone(obj) {
    return {...obj}; // isso é uma função pura
}

// obj.name = 'Eduarda'; // mudando o estado
// console.log(obj);

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Eduarda';

    return obj2;
}

updateName(obj);
console.log(obj);

const updatedObj = updateName(obj);
console.log(updatedObj);

// 4. HOF

const hof = () => () => 5;
console.log(hof());
console.log(hof()());

const hof2 = (fn) => fn(5);
hof2(function a(x) {
    return x;
})

const closure = function() {
    let count = 0;

    return function incremento() {
        count++;
        return count;
    }
}

console.log(closure());
const incrementoFn = closure();
console.log(incrementoFn());
console.log(incrementoFn());
console.log(incrementoFn());
console.log(incrementoFn());
const incrementoFn2 = closure();
console.log(incrementoFn2());
console.log(incrementoFn2());
console.log(incrementoFn2());
console.log(incrementoFn2());

const closure2 = function () {
    let count = 55;

    return function getCounter() {
        return count;
    }
}

const getCounter = closure2();
console.log(getCounter());
console.log(getCounter());
console.log(getCounter());










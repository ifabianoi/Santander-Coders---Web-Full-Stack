const matriz = [["1", "2", "3"], [true], [4, 5, 6]];

const array = matriz.reduce((arrayReduce, linhaDaMatriz) => {
  return [...arrayReduce, ...linhaDaMatriz];
}, []);

console.log(array);

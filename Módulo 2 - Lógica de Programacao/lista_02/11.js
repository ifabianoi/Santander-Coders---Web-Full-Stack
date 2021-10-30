const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const mainDiagSum = matrix.reduce((sumReduce, line, index) => {
  return sumReduce + line[index];
}, 0);

console.log(mainDiagSum);

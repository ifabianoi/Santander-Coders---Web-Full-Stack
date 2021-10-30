// const x = [3, 4, 7, 1, 5];
// const y = [4, 3, 1];
// const x = [5, 7, 3];
// const y = [2, 2];
const x = [1, 2, 3];
const y = [1, 1, 1];

function multiplyArrays(arr1, arr2) {
  return arr1.map((_, index) => arr1[index] * arr2[index]);
}

const arrayResult =
  y.length > x.length ? multiplyArrays(x, y) : multiplyArrays(y, x);

console.log(arrayResult);

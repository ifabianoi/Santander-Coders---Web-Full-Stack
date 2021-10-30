const array = [1, 2, 3, 4];

const arrayToText = array.reduce((stringReduce, element) => {
  return stringReduce + String(element);
}, "");

console.log(arrayToText);
console.log(typeof arrayToText);

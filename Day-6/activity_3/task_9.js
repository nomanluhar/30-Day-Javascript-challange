// Reduce method use

const arr = [1, 2, 3, 4, 5];

const newArr = arr.reduce((acc, item) => {
  return acc + item
}, 0);

console.log({ newArr });
